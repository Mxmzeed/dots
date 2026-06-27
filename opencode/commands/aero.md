---
description: Build a feature end-to-end with browser verification
agent: orchestrator-loop
model: tasknode/glm-5.2:cloud
---

# /aero

Build the feature described below end-to-end. The orchestrator owns the run, delegates code work to the `builder` subagent, verification to `ui-ux-tester` and `test-automator`, and consults `aero-mem` for cross-run memory.

**Memory touchpoints:**
- **Phase 0:** load `~/.config/aero/memory.md` via `aero-mem` (READ mode).
- **Phase 7:** after the report, ask `aero-mem` (PROPOSE mode) for candidate entries. Surface to user one-by-one via `question`. Write only approved entries.

## Feature

$ARGUMENTS

## Hard guardrails

- Do not run `rm -rf`, `git push`, `sudo`, or touch `/etc`, `~/.ssh`, `~/.aws` (permission layer denies).
- `git commit` will prompt the user — that is expected.
- No scope creep. No "while we're here" refactors. No dependency upgrades.
- If `steps: 80` is reached, stop and emit a partial report.
- If the user description is genuinely ambiguous, do not invent — ask.
- Every memory write requires explicit user approval via `question`.

## Output

End with two parts (no surrounding prose):

```json
{
  "summary": "one-paragraph description of what was built and how it was verified",
  "files_changed": ["relative/path/1", "relative/path/2"],
  "verification_evidence": "which verifier ran, what it said, screenshot paths if any, test output tail",
  "caveats": ["partial completion, denied operations, skipped steps"],
  "followups": ["questions for the user, or follow-up features they'd likely want next"]
}
```

`memory_written: ["id1", "id2"]` — list of memory entry ids written this run, or `[]` if none.

No prose summary after the JSON. No loops after the report.
