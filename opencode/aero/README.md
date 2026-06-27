# Aero — installation & provenance

`/aero` is a `/<feature description>` slash command in the opencode TUI that drives a feature from idea to verified completion using a multi-agent subagent architecture. Builder (hidden orchestrator) delegates to specialised subagents and a verifier pair (UI tester + test-automator). The 4 smoke tests in the implementation plan exercise endpoint, UI, failure-loop, and permission scenarios.

## What was installed

### Agents (auto-discovered from `~/.config/opencode/agents/`)

| File | Model | Mode | Source | Commit |
|---|---|---|---|---|
| `orchestrator.md` | `tasknode/glm-5.1:cloud` | subagent (hidden) | Authored from scratch | — |
| `builder.md` | `tasknode/glm-5.1:cloud` | subagent (hidden) | Authored from scratch | — |
| `aero-mem.md` | `tasknode/glm-5.1:cloud` | subagent (hidden) | Authored from scratch | — |
| `code-reviewer.md` | `tasknode/glm-5.1:cloud` | subagent | Vendored from `VoltAgent/awesome-claude-code-subagents` | `2f9cf8b` |
| `ui-ux-tester.md` | `tasknode/minimax-m3:cloud` | subagent | Vendored from `VoltAgent/awesome-claude-code-subagents` | `2f9cf8b` |
| `test-automator.md` | `tasknode/deepseek-v4-pro:cloud` | subagent | Vendored from `VoltAgent/awesome-claude-code-subagents` | `2f9cf8b` |

### Command (auto-discovered from `~/.config/opencode/commands/`)

| File | Agent | Description |
|---|---|---|
| `aero.md` | `orchestrator` | Build a feature end-to-end with browser verification |

### Skills (auto-discovered from `~/.agents/skills/`)

| Skill | Purpose | Source | Commit / Origin |
|---|---|---|---|
| `diagnose` | Six-phase bug discipline (feedback loop → reproduce → hypothesise → instrument → fix → cleanup) | `mattpocock/skills` | `aaf2453`, MIT licence |
| `find-skills` | Skill discovery for subagents | pre-installed | — |
| `impeccable`, `frontend-design`, `design-taste-frontend`, `high-end-visual-design`, `overdrive`, `industrial-brutalist-ui`, `minimalist-ui`, `redesign-existing-projects`, `refactor` | Loaded on demand by subagents based on task register | pre-installed | — |

The `diagnose` skill is the only newly installed skill. All others were already present in `~/.agents/skills/`.

## Configuration

`~/.config/opencode/opencode.jsonc` is unchanged from its original state. Agents and commands are auto-discovered from `~/.config/opencode/agents/` and `~/.config/opencode/commands/`. No manual registration is required.

To verify the resolved config:

```bash
opencode debug config | python3 -c "import sys,json; d=json.load(sys.stdin); print('agents:', list(d['agent'].keys())); print('commands:', list(d['command'].keys()))"
```

Expected:

```
agents: ['aero-mem', 'test-automator', 'code-reviewer', 'ui-ux-tester', 'builder', 'orchestrator']
commands: ['aero']
```

## How the architecture fits together

The system has two layers:

**Top layer (horizon management):**
- **`orchestrator`** — owns the 8-phase protocol, memory, failure classification, and all dispatch decisions. Called by `/aero`. Does not touch code.
- **`aero-mem`** — manages `~/.config/aero/memory.md`. Read-only on the file, returns proposed deltas. The orchestrator writes only after user approval.

**Bottom layer (specialists):**
- **`builder`** — code-editing worker. Receives a precise brief from the orchestrator, makes the minimal edits, returns a structured report. Does not delegate (`task: deny`).
- **`code-reviewer`** — read-only review of the diff.
- **`ui-ux-tester`** — drives a real browser via Playwright (inline Node.js scripts run with bash).
- **`test-automator`** — runs the test suite or drafts smoke tests, read-only on source code.

**The pipeline for a `/aero <feature>` run:**

1. The user types `/aero <feature description>` in the TUI.
2. OpenCode loads `commands/aero.md` and dispatches it to the `orchestrator` subagent.
3. **Phase 0:** `orchestrator` calls `aero-mem` (READ mode) to load cross-run memory. Internalises the digest.
4. **Phase 1-3:** Triage → Map (via `explore`) → Plan (via `plan`).
5. **Phase 4 (Build):** `orchestrator` hands `builder` a precise brief: feature, numbered plan, files in scope, conventions, memory rules. `builder` returns `{ files_changed, diff_summary, decisions_made, blockers }`. The orchestrator does not re-read the diff.
6. **Phase 5 (Review):** `orchestrator` calls `code-reviewer`. Fixes go back to `builder` as a fix list.
7. **Phase 6 (Verify):** `orchestrator` calls `ui-ux-tester` and/or `test-automator` in parallel where possible.
8. **Phase 7 (Report + Persist):** `orchestrator` emits the JSON report, calls `aero-mem` (PROPOSE mode), surfaces each candidate to the user via `question`, writes only approved entries to `~/.config/aero/memory.md`. Final message: JSON + `memory_written: [...]`.

**The `task` permission on `orchestrator`** is whitelisted to `{explore, plan, builder, code-reviewer, ui-ux-tester, test-automator, aero-mem}`. The `builder` has `task: deny` — it cannot delegate, period.

**Why the orchestrator/builder split matters:**

- The orchestrator's mental model is *the run* — phase state, memory, failure classification, mid-run replanning. Cognitive load: high but bounded by the protocol.
- The builder's mental model is *this brief* — read the code, make the edit, return. Cognitive load: low and tightly scoped.
- Mixing them in one prompt forced the model to hold both models simultaneously, which is exactly the kind of context-blob that hurts a 2-hour autonomous run.

## Memory

Aero has global, cross-run memory at `~/.config/aero/memory.md`. It is managed by the `aero-mem` subagent — read-only on the file, never writes directly. The `builder` writes only after the user approves each entry.

Three entry kinds, all with `{ id, kind, statement, context?, source_run, added_at }`:

- **preferences** — durable user rules. Apply unconditionally on every run.
- **failures** — things that went wrong and the workaround. Apply when the trigger conditions recur.
- **patterns** — recurring project-shape observations. Apply only when `context` matches.

`aero-mem` is conservative by design. The bar for proposing an entry is high: *will this pay off in a different project on a different day?* Zero candidates is a valid and often-correct answer.

To inspect or edit memory by hand:

```bash
cat ~/.config/aero/memory.md
$EDITOR ~/.config/aero/memory.md
```

Manual edits are respected — `aero-mem` never proposes entries that contradict existing ones (it proposes corrections instead, with a `context` that supersedes).

## Upgrading a vendored file

1. Re-fetch the source at the latest commit:
   ```bash
   curl -sL https://raw.githubusercontent.com/VoltAgent/awesome-claude-code-subagents/main/categories/04-quality-security/<name>.md -o /tmp/<name>.md
   ```
2. Re-apply the adaptations from the design spec (see `docs/superpowers/specs/2026-06-05-autonomous-feature-builder-design.md`, section "Required adaptations before installing").
3. Replace the SHA in the provenance comment at the top of the file with the new commit SHA.
4. Restart opencode and run `opencode debug config` to confirm the agent still loads with the right permissions.

For the `diagnose` skill, the same procedure applies against `mattpocock/skills/skills/engineering/diagnose/SKILL.md`.

## References

- **Design spec:** `docs/superpowers/specs/2026-06-05-autonomous-feature-builder-design.md`
- **Implementation plan:** `docs/superpowers/plans/2026-06-05-autonomous-feature-builder-implementation.md`
- **Opencode docs:** https://opencode.ai/docs/agents/, https://opencode.ai/docs/commands/, https://opencode.ai/docs/permissions/
- **Vendor sources:** https://github.com/VoltAgent/awesome-claude-code-subagents, https://github.com/mattpocock/skills

## Open issues

None currently. If you hit a problem, check the resolved config first (`opencode debug config`), then re-read the 8-phase protocol in the spec.

When the run completes, you may be prompted with proposed memory entries from `aero-mem`. These are user-approved writes to `~/.config/aero/memory.md` — read each carefully, edit if needed, and approve only the ones you want persisted. Future runs will read this file at Phase 0.
