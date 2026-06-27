var marketplace = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // node_modules/.pnpm/void-elements@3.1.0/node_modules/void-elements/index.js
  var require_void_elements = __commonJS({
    "node_modules/.pnpm/void-elements@3.1.0/node_modules/void-elements/index.js"(exports, module) {
      module.exports = {
        "area": true,
        "base": true,
        "br": true,
        "col": true,
        "embed": true,
        "hr": true,
        "img": true,
        "input": true,
        "link": true,
        "meta": true,
        "param": true,
        "source": true,
        "track": true,
        "wbr": true
      };
    }
  });

  // node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.3/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
  var require_use_sync_external_store_shim_development = __commonJS({
    "node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.3/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
      "use strict";
      (function() {
        function is2(x, y) {
          return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
        }
        function useSyncExternalStore$2(subscribe, getSnapshot) {
          didWarnOld18Alpha || void 0 === React34.startTransition || (didWarnOld18Alpha = true, console.error(
            "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
          ));
          var value = getSnapshot();
          if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error(
              "The result of getSnapshot should be cached to avoid an infinite loop"
            ), didWarnUncachedGetSnapshot = true);
          }
          cachedValue = useState4({
            inst: { value, getSnapshot }
          });
          var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
          useLayoutEffect3(
            function() {
              inst.value = value;
              inst.getSnapshot = getSnapshot;
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            },
            [subscribe, value, getSnapshot]
          );
          useEffect5(
            function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
              return subscribe(function() {
                checkIfSnapshotChanged(inst) && forceUpdate({ inst });
              });
            },
            [subscribe]
          );
          useDebugValue2(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          inst = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot) {
          return getSnapshot();
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var React34 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is2, useState4 = React34.useState, useEffect5 = React34.useEffect, useLayoutEffect3 = React34.useLayoutEffect, useDebugValue2 = React34.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
        exports.useSyncExternalStore = void 0 !== React34.useSyncExternalStore ? React34.useSyncExternalStore : shim;
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.3/node_modules/use-sync-external-store/shim/index.js
  var require_shim = __commonJS({
    "node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.3/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_use_sync_external_store_shim_development();
      }
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/internal/constants.js
  var require_constants = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/internal/constants.js"(exports, module) {
      "use strict";
      var SEMVER_SPEC_VERSION = "2.0.0";
      var MAX_LENGTH = 256;
      var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
      var MAX_SAFE_COMPONENT_LENGTH = 16;
      var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
      var RELEASE_TYPES = [
        "major",
        "premajor",
        "minor",
        "preminor",
        "patch",
        "prepatch",
        "prerelease"
      ];
      module.exports = {
        MAX_LENGTH,
        MAX_SAFE_COMPONENT_LENGTH,
        MAX_SAFE_BUILD_LENGTH,
        MAX_SAFE_INTEGER,
        RELEASE_TYPES,
        SEMVER_SPEC_VERSION,
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2
      };
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/internal/debug.js
  var require_debug = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/internal/debug.js"(exports, module) {
      "use strict";
      var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
      };
      module.exports = debug;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/internal/re.js
  var require_re = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/internal/re.js"(exports, module) {
      "use strict";
      var {
        MAX_SAFE_COMPONENT_LENGTH,
        MAX_SAFE_BUILD_LENGTH,
        MAX_LENGTH
      } = require_constants();
      var debug = require_debug();
      exports = module.exports = {};
      var re = exports.re = [];
      var safeRe = exports.safeRe = [];
      var src = exports.src = [];
      var safeSrc = exports.safeSrc = [];
      var t2 = exports.t = {};
      var R = 0;
      var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
      var safeRegexReplacements = [
        ["\\s", 1],
        ["\\d", MAX_LENGTH],
        [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
      ];
      var makeSafeRegex = (value) => {
        for (const [token, max6] of safeRegexReplacements) {
          value = value.split(`${token}*`).join(`${token}{0,${max6}}`).split(`${token}+`).join(`${token}{1,${max6}}`);
        }
        return value;
      };
      var createToken = (name, value, isGlobal) => {
        const safe = makeSafeRegex(value);
        const index = R++;
        debug(name, index, value);
        t2[name] = index;
        src[index] = value;
        safeSrc[index] = safe;
        re[index] = new RegExp(value, isGlobal ? "g" : void 0);
        safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
      };
      createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
      createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
      createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
      createToken("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
      createToken("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
      createToken("PRERELEASEIDENTIFIER", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIER]})`);
      createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIERLOOSE]})`);
      createToken("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
      createToken("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
      createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
      createToken("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
      createToken("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
      createToken("FULL", `^${src[t2.FULLPLAIN]}$`);
      createToken("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
      createToken("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
      createToken("GTLT", "((?:<|>)?=?)");
      createToken("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
      createToken("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
      createToken("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
      createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
      createToken("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
      createToken("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
      createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
      createToken("COERCE", `${src[t2.COERCEPLAIN]}(?:$|[^\\d])`);
      createToken("COERCEFULL", src[t2.COERCEPLAIN] + `(?:${src[t2.PRERELEASE]})?(?:${src[t2.BUILD]})?(?:$|[^\\d])`);
      createToken("COERCERTL", src[t2.COERCE], true);
      createToken("COERCERTLFULL", src[t2.COERCEFULL], true);
      createToken("LONETILDE", "(?:~>?)");
      createToken("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
      exports.tildeTrimReplace = "$1~";
      createToken("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
      createToken("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
      createToken("LONECARET", "(?:\\^)");
      createToken("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
      exports.caretTrimReplace = "$1^";
      createToken("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
      createToken("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
      createToken("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
      createToken("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
      createToken("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
      exports.comparatorTrimReplace = "$1$2$3";
      createToken("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
      createToken("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
      createToken("STAR", "(<|>)?=?\\s*\\*");
      createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
      createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/internal/parse-options.js
  var require_parse_options = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/internal/parse-options.js"(exports, module) {
      "use strict";
      var looseOption = Object.freeze({ loose: true });
      var emptyOpts = Object.freeze({});
      var parseOptions = (options) => {
        if (!options) {
          return emptyOpts;
        }
        if (typeof options !== "object") {
          return looseOption;
        }
        return options;
      };
      module.exports = parseOptions;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/internal/identifiers.js
  var require_identifiers = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/internal/identifiers.js"(exports, module) {
      "use strict";
      var numeric = /^[0-9]+$/;
      var compareIdentifiers = (a, b) => {
        if (typeof a === "number" && typeof b === "number") {
          return a === b ? 0 : a < b ? -1 : 1;
        }
        const anum = numeric.test(a);
        const bnum = numeric.test(b);
        if (anum && bnum) {
          a = +a;
          b = +b;
        }
        return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
      };
      var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
      module.exports = {
        compareIdentifiers,
        rcompareIdentifiers
      };
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/classes/semver.js
  var require_semver = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/classes/semver.js"(exports, module) {
      "use strict";
      var debug = require_debug();
      var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
      var { safeRe: re, t: t2 } = require_re();
      var parseOptions = require_parse_options();
      var { compareIdentifiers } = require_identifiers();
      var SemVer = class {
        constructor(version4, options) {
          options = parseOptions(options);
          if (version4 instanceof SemVer) {
            if (version4.loose === !!options.loose && version4.includePrerelease === !!options.includePrerelease) {
              return version4;
            } else {
              version4 = version4.version;
            }
          } else if (typeof version4 !== "string") {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version4}".`);
          }
          if (version4.length > MAX_LENGTH) {
            throw new TypeError(
              `version is longer than ${MAX_LENGTH} characters`
            );
          }
          debug("SemVer", version4, options);
          this.options = options;
          this.loose = !!options.loose;
          this.includePrerelease = !!options.includePrerelease;
          const m = version4.trim().match(options.loose ? re[t2.LOOSE] : re[t2.FULL]);
          if (!m) {
            throw new TypeError(`Invalid Version: ${version4}`);
          }
          this.raw = version4;
          this.major = +m[1];
          this.minor = +m[2];
          this.patch = +m[3];
          if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError("Invalid major version");
          }
          if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError("Invalid minor version");
          }
          if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError("Invalid patch version");
          }
          if (!m[4]) {
            this.prerelease = [];
          } else {
            this.prerelease = m[4].split(".").map((id) => {
              if (/^[0-9]+$/.test(id)) {
                const num3 = +id;
                if (num3 >= 0 && num3 < MAX_SAFE_INTEGER) {
                  return num3;
                }
              }
              return id;
            });
          }
          this.build = m[5] ? m[5].split(".") : [];
          this.format();
        }
        format() {
          this.version = `${this.major}.${this.minor}.${this.patch}`;
          if (this.prerelease.length) {
            this.version += `-${this.prerelease.join(".")}`;
          }
          return this.version;
        }
        toString() {
          return this.version;
        }
        compare(other) {
          debug("SemVer.compare", this.version, this.options, other);
          if (!(other instanceof SemVer)) {
            if (typeof other === "string" && other === this.version) {
              return 0;
            }
            other = new SemVer(other, this.options);
          }
          if (other.version === this.version) {
            return 0;
          }
          return this.compareMain(other) || this.comparePre(other);
        }
        compareMain(other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          if (this.major < other.major) {
            return -1;
          }
          if (this.major > other.major) {
            return 1;
          }
          if (this.minor < other.minor) {
            return -1;
          }
          if (this.minor > other.minor) {
            return 1;
          }
          if (this.patch < other.patch) {
            return -1;
          }
          if (this.patch > other.patch) {
            return 1;
          }
          return 0;
        }
        comparePre(other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          if (this.prerelease.length && !other.prerelease.length) {
            return -1;
          } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
          } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
          }
          let i = 0;
          do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug("prerelease compare", i, a, b);
            if (a === void 0 && b === void 0) {
              return 0;
            } else if (b === void 0) {
              return 1;
            } else if (a === void 0) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i);
        }
        compareBuild(other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          let i = 0;
          do {
            const a = this.build[i];
            const b = other.build[i];
            debug("build compare", i, a, b);
            if (a === void 0 && b === void 0) {
              return 0;
            } else if (b === void 0) {
              return 1;
            } else if (a === void 0) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i);
        }
        inc(release, identifier, identifierBase) {
          if (release.startsWith("pre")) {
            if (!identifier && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (identifier) {
              const match = `-${identifier}`.match(this.options.loose ? re[t2.PRERELEASELOOSE] : re[t2.PRERELEASE]);
              if (!match || match[1] !== identifier) {
                throw new Error(`invalid identifier: ${identifier}`);
              }
            }
          }
          switch (release) {
            case "premajor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor = 0;
              this.major++;
              this.inc("pre", identifier, identifierBase);
              break;
            case "preminor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor++;
              this.inc("pre", identifier, identifierBase);
              break;
            case "prepatch":
              this.prerelease.length = 0;
              this.inc("patch", identifier, identifierBase);
              this.inc("pre", identifier, identifierBase);
              break;
            case "prerelease":
              if (this.prerelease.length === 0) {
                this.inc("patch", identifier, identifierBase);
              }
              this.inc("pre", identifier, identifierBase);
              break;
            case "release":
              if (this.prerelease.length === 0) {
                throw new Error(`version ${this.raw} is not a prerelease`);
              }
              this.prerelease.length = 0;
              break;
            case "major":
              if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                this.major++;
              }
              this.minor = 0;
              this.patch = 0;
              this.prerelease = [];
              break;
            case "minor":
              if (this.patch !== 0 || this.prerelease.length === 0) {
                this.minor++;
              }
              this.patch = 0;
              this.prerelease = [];
              break;
            case "patch":
              if (this.prerelease.length === 0) {
                this.patch++;
              }
              this.prerelease = [];
              break;
            case "pre": {
              const base = Number(identifierBase) ? 1 : 0;
              if (this.prerelease.length === 0) {
                this.prerelease = [base];
              } else {
                let i = this.prerelease.length;
                while (--i >= 0) {
                  if (typeof this.prerelease[i] === "number") {
                    this.prerelease[i]++;
                    i = -2;
                  }
                }
                if (i === -1) {
                  if (identifier === this.prerelease.join(".") && identifierBase === false) {
                    throw new Error("invalid increment argument: identifier already exists");
                  }
                  this.prerelease.push(base);
                }
              }
              if (identifier) {
                let prerelease = [identifier, base];
                if (identifierBase === false) {
                  prerelease = [identifier];
                }
                if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                  if (isNaN(this.prerelease[1])) {
                    this.prerelease = prerelease;
                  }
                } else {
                  this.prerelease = prerelease;
                }
              }
              break;
            }
            default:
              throw new Error(`invalid increment argument: ${release}`);
          }
          this.raw = this.format();
          if (this.build.length) {
            this.raw += `+${this.build.join(".")}`;
          }
          return this;
        }
      };
      module.exports = SemVer;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/parse.js
  var require_parse = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/parse.js"(exports, module) {
      "use strict";
      var SemVer = require_semver();
      var parse3 = (version4, options, throwErrors = false) => {
        if (version4 instanceof SemVer) {
          return version4;
        }
        try {
          return new SemVer(version4, options);
        } catch (er) {
          if (!throwErrors) {
            return null;
          }
          throw er;
        }
      };
      module.exports = parse3;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/valid.js
  var require_valid = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/valid.js"(exports, module) {
      "use strict";
      var parse3 = require_parse();
      var valid = (version4, options) => {
        const v = parse3(version4, options);
        return v ? v.version : null;
      };
      module.exports = valid;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/clean.js
  var require_clean = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/clean.js"(exports, module) {
      "use strict";
      var parse3 = require_parse();
      var clean2 = (version4, options) => {
        const s = parse3(version4.trim().replace(/^[=v]+/, ""), options);
        return s ? s.version : null;
      };
      module.exports = clean2;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/inc.js
  var require_inc = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/inc.js"(exports, module) {
      "use strict";
      var SemVer = require_semver();
      var inc = (version4, release, options, identifier, identifierBase) => {
        if (typeof options === "string") {
          identifierBase = identifier;
          identifier = options;
          options = void 0;
        }
        try {
          return new SemVer(
            version4 instanceof SemVer ? version4.version : version4,
            options
          ).inc(release, identifier, identifierBase).version;
        } catch (er) {
          return null;
        }
      };
      module.exports = inc;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/diff.js
  var require_diff = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/diff.js"(exports, module) {
      "use strict";
      var parse3 = require_parse();
      var diff = (version1, version22) => {
        const v1 = parse3(version1, null, true);
        const v2 = parse3(version22, null, true);
        const comparison = v1.compare(v2);
        if (comparison === 0) {
          return null;
        }
        const v1Higher = comparison > 0;
        const highVersion = v1Higher ? v1 : v2;
        const lowVersion = v1Higher ? v2 : v1;
        const highHasPre = !!highVersion.prerelease.length;
        const lowHasPre = !!lowVersion.prerelease.length;
        if (lowHasPre && !highHasPre) {
          if (!lowVersion.patch && !lowVersion.minor) {
            return "major";
          }
          if (lowVersion.compareMain(highVersion) === 0) {
            if (lowVersion.minor && !lowVersion.patch) {
              return "minor";
            }
            return "patch";
          }
        }
        const prefix3 = highHasPre ? "pre" : "";
        if (v1.major !== v2.major) {
          return prefix3 + "major";
        }
        if (v1.minor !== v2.minor) {
          return prefix3 + "minor";
        }
        if (v1.patch !== v2.patch) {
          return prefix3 + "patch";
        }
        return "prerelease";
      };
      module.exports = diff;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/major.js
  var require_major = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/major.js"(exports, module) {
      "use strict";
      var SemVer = require_semver();
      var major = (a, loose) => new SemVer(a, loose).major;
      module.exports = major;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/minor.js
  var require_minor = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/minor.js"(exports, module) {
      "use strict";
      var SemVer = require_semver();
      var minor = (a, loose) => new SemVer(a, loose).minor;
      module.exports = minor;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/patch.js
  var require_patch = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/patch.js"(exports, module) {
      "use strict";
      var SemVer = require_semver();
      var patch2 = (a, loose) => new SemVer(a, loose).patch;
      module.exports = patch2;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/prerelease.js
  var require_prerelease = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/prerelease.js"(exports, module) {
      "use strict";
      var parse3 = require_parse();
      var prerelease = (version4, options) => {
        const parsed = parse3(version4, options);
        return parsed && parsed.prerelease.length ? parsed.prerelease : null;
      };
      module.exports = prerelease;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/compare.js
  var require_compare = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/compare.js"(exports, module) {
      "use strict";
      var SemVer = require_semver();
      var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
      module.exports = compare;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/rcompare.js
  var require_rcompare = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/rcompare.js"(exports, module) {
      "use strict";
      var compare = require_compare();
      var rcompare = (a, b, loose) => compare(b, a, loose);
      module.exports = rcompare;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/compare-loose.js
  var require_compare_loose = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/compare-loose.js"(exports, module) {
      "use strict";
      var compare = require_compare();
      var compareLoose = (a, b) => compare(a, b, true);
      module.exports = compareLoose;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/compare-build.js
  var require_compare_build = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/compare-build.js"(exports, module) {
      "use strict";
      var SemVer = require_semver();
      var compareBuild = (a, b, loose) => {
        const versionA = new SemVer(a, loose);
        const versionB = new SemVer(b, loose);
        return versionA.compare(versionB) || versionA.compareBuild(versionB);
      };
      module.exports = compareBuild;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/sort.js
  var require_sort = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/sort.js"(exports, module) {
      "use strict";
      var compareBuild = require_compare_build();
      var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
      module.exports = sort;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/rsort.js
  var require_rsort = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/rsort.js"(exports, module) {
      "use strict";
      var compareBuild = require_compare_build();
      var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
      module.exports = rsort;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/gt.js
  var require_gt = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/gt.js"(exports, module) {
      "use strict";
      var compare = require_compare();
      var gt = (a, b, loose) => compare(a, b, loose) > 0;
      module.exports = gt;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/lt.js
  var require_lt = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/lt.js"(exports, module) {
      "use strict";
      var compare = require_compare();
      var lt = (a, b, loose) => compare(a, b, loose) < 0;
      module.exports = lt;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/eq.js
  var require_eq = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/eq.js"(exports, module) {
      "use strict";
      var compare = require_compare();
      var eq = (a, b, loose) => compare(a, b, loose) === 0;
      module.exports = eq;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/neq.js
  var require_neq = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/neq.js"(exports, module) {
      "use strict";
      var compare = require_compare();
      var neq = (a, b, loose) => compare(a, b, loose) !== 0;
      module.exports = neq;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/gte.js
  var require_gte = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/gte.js"(exports, module) {
      "use strict";
      var compare = require_compare();
      var gte = (a, b, loose) => compare(a, b, loose) >= 0;
      module.exports = gte;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/lte.js
  var require_lte = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/lte.js"(exports, module) {
      "use strict";
      var compare = require_compare();
      var lte = (a, b, loose) => compare(a, b, loose) <= 0;
      module.exports = lte;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/cmp.js
  var require_cmp = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/cmp.js"(exports, module) {
      "use strict";
      var eq = require_eq();
      var neq = require_neq();
      var gt = require_gt();
      var gte = require_gte();
      var lt = require_lt();
      var lte = require_lte();
      var cmp = (a, op, b, loose) => {
        switch (op) {
          case "===":
            if (typeof a === "object") {
              a = a.version;
            }
            if (typeof b === "object") {
              b = b.version;
            }
            return a === b;
          case "!==":
            if (typeof a === "object") {
              a = a.version;
            }
            if (typeof b === "object") {
              b = b.version;
            }
            return a !== b;
          case "":
          case "=":
          case "==":
            return eq(a, b, loose);
          case "!=":
            return neq(a, b, loose);
          case ">":
            return gt(a, b, loose);
          case ">=":
            return gte(a, b, loose);
          case "<":
            return lt(a, b, loose);
          case "<=":
            return lte(a, b, loose);
          default:
            throw new TypeError(`Invalid operator: ${op}`);
        }
      };
      module.exports = cmp;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/coerce.js
  var require_coerce = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/coerce.js"(exports, module) {
      "use strict";
      var SemVer = require_semver();
      var parse3 = require_parse();
      var { safeRe: re, t: t2 } = require_re();
      var coerce = (version4, options) => {
        if (version4 instanceof SemVer) {
          return version4;
        }
        if (typeof version4 === "number") {
          version4 = String(version4);
        }
        if (typeof version4 !== "string") {
          return null;
        }
        options = options || {};
        let match = null;
        if (!options.rtl) {
          match = version4.match(options.includePrerelease ? re[t2.COERCEFULL] : re[t2.COERCE]);
        } else {
          const coerceRtlRegex = options.includePrerelease ? re[t2.COERCERTLFULL] : re[t2.COERCERTL];
          let next;
          while ((next = coerceRtlRegex.exec(version4)) && (!match || match.index + match[0].length !== version4.length)) {
            if (!match || next.index + next[0].length !== match.index + match[0].length) {
              match = next;
            }
            coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
          }
          coerceRtlRegex.lastIndex = -1;
        }
        if (match === null) {
          return null;
        }
        const major = match[2];
        const minor = match[3] || "0";
        const patch2 = match[4] || "0";
        const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
        const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
        return parse3(`${major}.${minor}.${patch2}${prerelease}${build}`, options);
      };
      module.exports = coerce;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/truncate.js
  var require_truncate = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/truncate.js"(exports, module) {
      "use strict";
      var parse3 = require_parse();
      var constants = require_constants();
      var SemVer = require_semver();
      var truncate = (version4, truncation, options) => {
        if (!constants.RELEASE_TYPES.includes(truncation)) {
          return null;
        }
        const clonedVersion = cloneInputVersion(version4, options);
        return clonedVersion && doTruncation(clonedVersion, truncation);
      };
      var cloneInputVersion = (version4, options) => {
        const versionStringToParse = version4 instanceof SemVer ? version4.version : version4;
        return parse3(versionStringToParse, options);
      };
      var doTruncation = (version4, truncation) => {
        if (isPrerelease(truncation)) {
          return version4.version;
        }
        version4.prerelease = [];
        switch (truncation) {
          case "major":
            version4.minor = 0;
            version4.patch = 0;
            break;
          case "minor":
            version4.patch = 0;
            break;
        }
        return version4.format();
      };
      var isPrerelease = (type) => {
        return type.startsWith("pre");
      };
      module.exports = truncate;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/internal/lrucache.js
  var require_lrucache = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/internal/lrucache.js"(exports, module) {
      "use strict";
      var LRUCache = class {
        constructor() {
          this.max = 1e3;
          this.map = /* @__PURE__ */ new Map();
        }
        get(key) {
          const value = this.map.get(key);
          if (value === void 0) {
            return void 0;
          } else {
            this.map.delete(key);
            this.map.set(key, value);
            return value;
          }
        }
        delete(key) {
          return this.map.delete(key);
        }
        set(key, value) {
          const deleted = this.delete(key);
          if (!deleted && value !== void 0) {
            if (this.map.size >= this.max) {
              const firstKey = this.map.keys().next().value;
              this.delete(firstKey);
            }
            this.map.set(key, value);
          }
          return this;
        }
      };
      module.exports = LRUCache;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/classes/range.js
  var require_range = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/classes/range.js"(exports, module) {
      "use strict";
      var SPACE_CHARACTERS = /\s+/g;
      var Range = class {
        constructor(range, options) {
          options = parseOptions(options);
          if (range instanceof Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
              return range;
            } else {
              return new Range(range.raw, options);
            }
          }
          if (range instanceof Comparator) {
            this.raw = range.value;
            this.set = [[range]];
            this.formatted = void 0;
            return this;
          }
          this.options = options;
          this.loose = !!options.loose;
          this.includePrerelease = !!options.includePrerelease;
          this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
          this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
          if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
          }
          if (this.set.length > 1) {
            const first = this.set[0];
            this.set = this.set.filter((c) => !isNullSet(c[0]));
            if (this.set.length === 0) {
              this.set = [first];
            } else if (this.set.length > 1) {
              for (const c of this.set) {
                if (c.length === 1 && isAny(c[0])) {
                  this.set = [c];
                  break;
                }
              }
            }
          }
          this.formatted = void 0;
        }
        get range() {
          if (this.formatted === void 0) {
            this.formatted = "";
            for (let i = 0; i < this.set.length; i++) {
              if (i > 0) {
                this.formatted += "||";
              }
              const comps = this.set[i];
              for (let k = 0; k < comps.length; k++) {
                if (k > 0) {
                  this.formatted += " ";
                }
                this.formatted += comps[k].toString().trim();
              }
            }
          }
          return this.formatted;
        }
        format() {
          return this.range;
        }
        toString() {
          return this.range;
        }
        parseRange(range) {
          range = range.replace(BUILDSTRIPRE, "");
          const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
          const memoKey = memoOpts + ":" + range;
          const cached = cache.get(memoKey);
          if (cached) {
            return cached;
          }
          const loose = this.options.loose;
          const hr = loose ? re[t2.HYPHENRANGELOOSE] : re[t2.HYPHENRANGE];
          range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
          debug("hyphen replace", range);
          range = range.replace(re[t2.COMPARATORTRIM], comparatorTrimReplace);
          debug("comparator trim", range);
          range = range.replace(re[t2.TILDETRIM], tildeTrimReplace);
          debug("tilde trim", range);
          range = range.replace(re[t2.CARETTRIM], caretTrimReplace);
          debug("caret trim", range);
          let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
          if (loose) {
            rangeList = rangeList.filter((comp) => {
              debug("loose invalid filter", comp, this.options);
              return !!comp.match(re[t2.COMPARATORLOOSE]);
            });
          }
          debug("range list", rangeList);
          const rangeMap = /* @__PURE__ */ new Map();
          const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
          for (const comp of comparators) {
            if (isNullSet(comp)) {
              return [comp];
            }
            rangeMap.set(comp.value, comp);
          }
          if (rangeMap.size > 1 && rangeMap.has("")) {
            rangeMap.delete("");
          }
          const result = [...rangeMap.values()];
          cache.set(memoKey, result);
          return result;
        }
        intersects(range, options) {
          if (!(range instanceof Range)) {
            throw new TypeError("a Range is required");
          }
          return this.set.some((thisComparators) => {
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
              return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
                return rangeComparators.every((rangeComparator) => {
                  return thisComparator.intersects(rangeComparator, options);
                });
              });
            });
          });
        }
        test(version4) {
          if (!version4) {
            return false;
          }
          if (typeof version4 === "string") {
            try {
              version4 = new SemVer(version4, this.options);
            } catch (er) {
              return false;
            }
          }
          for (let i = 0; i < this.set.length; i++) {
            if (testSet(this.set[i], version4, this.options)) {
              return true;
            }
          }
          return false;
        }
      };
      module.exports = Range;
      var LRU = require_lrucache();
      var cache = new LRU();
      var parseOptions = require_parse_options();
      var Comparator = require_comparator();
      var debug = require_debug();
      var SemVer = require_semver();
      var {
        safeRe: re,
        src,
        t: t2,
        comparatorTrimReplace,
        tildeTrimReplace,
        caretTrimReplace
      } = require_re();
      var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
      var BUILDSTRIPRE = new RegExp(src[t2.BUILD], "g");
      var isNullSet = (c) => c.value === "<0.0.0-0";
      var isAny = (c) => c.value === "";
      var isSatisfiable = (comparators, options) => {
        let result = true;
        const remainingComparators = comparators.slice();
        let testComparator = remainingComparators.pop();
        while (result && remainingComparators.length) {
          result = remainingComparators.every((otherComparator) => {
            return testComparator.intersects(otherComparator, options);
          });
          testComparator = remainingComparators.pop();
        }
        return result;
      };
      var parseComparator = (comp, options) => {
        comp = comp.replace(re[t2.BUILD], "");
        debug("comp", comp, options);
        comp = replaceCarets(comp, options);
        debug("caret", comp);
        comp = replaceTildes(comp, options);
        debug("tildes", comp);
        comp = replaceXRanges(comp, options);
        debug("xrange", comp);
        comp = replaceStars(comp, options);
        debug("stars", comp);
        return comp;
      };
      var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
      var replaceTildes = (comp, options) => {
        return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
      };
      var replaceTilde = (comp, options) => {
        const r = options.loose ? re[t2.TILDELOOSE] : re[t2.TILDE];
        return comp.replace(r, (_, M, m, p, pr) => {
          debug("tilde", comp, _, M, m, p, pr);
          let ret;
          if (isX(M)) {
            ret = "";
          } else if (isX(m)) {
            ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
          } else if (isX(p)) {
            ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
          } else if (pr) {
            debug("replaceTilde pr", pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
          }
          debug("tilde return", ret);
          return ret;
        });
      };
      var replaceCarets = (comp, options) => {
        return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
      };
      var replaceCaret = (comp, options) => {
        debug("caret", comp, options);
        const r = options.loose ? re[t2.CARETLOOSE] : re[t2.CARET];
        const z = options.includePrerelease ? "-0" : "";
        return comp.replace(r, (_, M, m, p, pr) => {
          debug("caret", comp, _, M, m, p, pr);
          let ret;
          if (isX(M)) {
            ret = "";
          } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
          } else if (isX(p)) {
            if (M === "0") {
              ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            } else {
              ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
          } else if (pr) {
            debug("replaceCaret pr", pr);
            if (M === "0") {
              if (m === "0") {
                ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
              } else {
                ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
              }
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
          } else {
            debug("no pr");
            if (M === "0") {
              if (m === "0") {
                ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
              } else {
                ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
              }
            } else {
              ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
          }
          debug("caret return", ret);
          return ret;
        });
      };
      var replaceXRanges = (comp, options) => {
        debug("replaceXRanges", comp, options);
        return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
      };
      var replaceXRange = (comp, options) => {
        comp = comp.trim();
        const r = options.loose ? re[t2.XRANGELOOSE] : re[t2.XRANGE];
        return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
          debug("xRange", comp, ret, gtlt, M, m, p, pr);
          const xM = isX(M);
          const xm = xM || isX(m);
          const xp = xm || isX(p);
          const anyX = xp;
          if (gtlt === "=" && anyX) {
            gtlt = "";
          }
          pr = options.includePrerelease ? "-0" : "";
          if (xM) {
            if (gtlt === ">" || gtlt === "<") {
              ret = "<0.0.0-0";
            } else {
              ret = "*";
            }
          } else if (gtlt && anyX) {
            if (xm) {
              m = 0;
            }
            p = 0;
            if (gtlt === ">") {
              gtlt = ">=";
              if (xm) {
                M = +M + 1;
                m = 0;
                p = 0;
              } else {
                m = +m + 1;
                p = 0;
              }
            } else if (gtlt === "<=") {
              gtlt = "<";
              if (xm) {
                M = +M + 1;
              } else {
                m = +m + 1;
              }
            }
            if (gtlt === "<") {
              pr = "-0";
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
          } else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
          } else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
          }
          debug("xRange return", ret);
          return ret;
        });
      };
      var replaceStars = (comp, options) => {
        debug("replaceStars", comp, options);
        return comp.trim().replace(re[t2.STAR], "");
      };
      var replaceGTE0 = (comp, options) => {
        debug("replaceGTE0", comp, options);
        return comp.trim().replace(re[options.includePrerelease ? t2.GTE0PRE : t2.GTE0], "");
      };
      var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
        if (isX(fM)) {
          from = "";
        } else if (isX(fm)) {
          from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
        } else if (isX(fp)) {
          from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
        } else if (fpr) {
          from = `>=${from}`;
        } else {
          from = `>=${from}${incPr ? "-0" : ""}`;
        }
        if (isX(tM)) {
          to = "";
        } else if (isX(tm)) {
          to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
          to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
          to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (incPr) {
          to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
          to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
      };
      var testSet = (set, version4, options) => {
        for (let i = 0; i < set.length; i++) {
          if (!set[i].test(version4)) {
            return false;
          }
        }
        if (version4.prerelease.length && !options.includePrerelease) {
          for (let i = 0; i < set.length; i++) {
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) {
              continue;
            }
            if (set[i].semver.prerelease.length > 0) {
              const allowed = set[i].semver;
              if (allowed.major === version4.major && allowed.minor === version4.minor && allowed.patch === version4.patch) {
                return true;
              }
            }
          }
          return false;
        }
        return true;
      };
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/classes/comparator.js
  var require_comparator = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/classes/comparator.js"(exports, module) {
      "use strict";
      var ANY = Symbol("SemVer ANY");
      var Comparator = class {
        static get ANY() {
          return ANY;
        }
        constructor(comp, options) {
          options = parseOptions(options);
          if (comp instanceof Comparator) {
            if (comp.loose === !!options.loose) {
              return comp;
            } else {
              comp = comp.value;
            }
          }
          comp = comp.trim().split(/\s+/).join(" ");
          debug("comparator", comp, options);
          this.options = options;
          this.loose = !!options.loose;
          this.parse(comp);
          if (this.semver === ANY) {
            this.value = "";
          } else {
            this.value = this.operator + this.semver.version;
          }
          debug("comp", this);
        }
        parse(comp) {
          const r = this.options.loose ? re[t2.COMPARATORLOOSE] : re[t2.COMPARATOR];
          const m = comp.match(r);
          if (!m) {
            throw new TypeError(`Invalid comparator: ${comp}`);
          }
          this.operator = m[1] !== void 0 ? m[1] : "";
          if (this.operator === "=") {
            this.operator = "";
          }
          if (!m[2]) {
            this.semver = ANY;
          } else {
            this.semver = new SemVer(m[2], this.options.loose);
          }
        }
        toString() {
          return this.value;
        }
        test(version4) {
          debug("Comparator.test", version4, this.options.loose);
          if (this.semver === ANY || version4 === ANY) {
            return true;
          }
          if (typeof version4 === "string") {
            try {
              version4 = new SemVer(version4, this.options);
            } catch (er) {
              return false;
            }
          }
          return cmp(version4, this.operator, this.semver, this.options);
        }
        intersects(comp, options) {
          if (!(comp instanceof Comparator)) {
            throw new TypeError("a Comparator is required");
          }
          if (this.operator === "") {
            if (this.value === "") {
              return true;
            }
            return new Range(comp.value, options).test(this.value);
          } else if (comp.operator === "") {
            if (comp.value === "") {
              return true;
            }
            return new Range(this.value, options).test(comp.semver);
          }
          options = parseOptions(options);
          if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
            return false;
          }
          if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
            return false;
          }
          if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
            return true;
          }
          if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
            return true;
          }
          if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
            return true;
          }
          if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
            return true;
          }
          if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
            return true;
          }
          return false;
        }
      };
      module.exports = Comparator;
      var parseOptions = require_parse_options();
      var { safeRe: re, t: t2 } = require_re();
      var cmp = require_cmp();
      var debug = require_debug();
      var SemVer = require_semver();
      var Range = require_range();
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/satisfies.js
  var require_satisfies = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/functions/satisfies.js"(exports, module) {
      "use strict";
      var Range = require_range();
      var satisfies = (version4, range, options) => {
        try {
          range = new Range(range, options);
        } catch (er) {
          return false;
        }
        return range.test(version4);
      };
      module.exports = satisfies;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/to-comparators.js
  var require_to_comparators = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/to-comparators.js"(exports, module) {
      "use strict";
      var Range = require_range();
      var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
      module.exports = toComparators;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/max-satisfying.js
  var require_max_satisfying = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/max-satisfying.js"(exports, module) {
      "use strict";
      var SemVer = require_semver();
      var Range = require_range();
      var maxSatisfying = (versions, range, options) => {
        let max6 = null;
        let maxSV = null;
        let rangeObj = null;
        try {
          rangeObj = new Range(range, options);
        } catch (er) {
          return null;
        }
        versions.forEach((v) => {
          if (rangeObj.test(v)) {
            if (!max6 || maxSV.compare(v) === -1) {
              max6 = v;
              maxSV = new SemVer(max6, options);
            }
          }
        });
        return max6;
      };
      module.exports = maxSatisfying;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/min-satisfying.js
  var require_min_satisfying = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/min-satisfying.js"(exports, module) {
      "use strict";
      var SemVer = require_semver();
      var Range = require_range();
      var minSatisfying = (versions, range, options) => {
        let min6 = null;
        let minSV = null;
        let rangeObj = null;
        try {
          rangeObj = new Range(range, options);
        } catch (er) {
          return null;
        }
        versions.forEach((v) => {
          if (rangeObj.test(v)) {
            if (!min6 || minSV.compare(v) === 1) {
              min6 = v;
              minSV = new SemVer(min6, options);
            }
          }
        });
        return min6;
      };
      module.exports = minSatisfying;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/min-version.js
  var require_min_version = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/min-version.js"(exports, module) {
      "use strict";
      var SemVer = require_semver();
      var Range = require_range();
      var gt = require_gt();
      var minVersion = (range, loose) => {
        range = new Range(range, loose);
        let minver = new SemVer("0.0.0");
        if (range.test(minver)) {
          return minver;
        }
        minver = new SemVer("0.0.0-0");
        if (range.test(minver)) {
          return minver;
        }
        minver = null;
        for (let i = 0; i < range.set.length; ++i) {
          const comparators = range.set[i];
          let setMin = null;
          comparators.forEach((comparator) => {
            const compver = new SemVer(comparator.semver.version);
            switch (comparator.operator) {
              case ">":
                if (compver.prerelease.length === 0) {
                  compver.patch++;
                } else {
                  compver.prerelease.push(0);
                }
                compver.raw = compver.format();
              case "":
              case ">=":
                if (!setMin || gt(compver, setMin)) {
                  setMin = compver;
                }
                break;
              case "<":
              case "<=":
                break;
              default:
                throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
          });
          if (setMin && (!minver || gt(minver, setMin))) {
            minver = setMin;
          }
        }
        if (minver && range.test(minver)) {
          return minver;
        }
        return null;
      };
      module.exports = minVersion;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/valid.js
  var require_valid2 = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/valid.js"(exports, module) {
      "use strict";
      var Range = require_range();
      var validRange = (range, options) => {
        try {
          return new Range(range, options).range || "*";
        } catch (er) {
          return null;
        }
      };
      module.exports = validRange;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/outside.js
  var require_outside = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/outside.js"(exports, module) {
      "use strict";
      var SemVer = require_semver();
      var Comparator = require_comparator();
      var { ANY } = Comparator;
      var Range = require_range();
      var satisfies = require_satisfies();
      var gt = require_gt();
      var lt = require_lt();
      var lte = require_lte();
      var gte = require_gte();
      var outside = (version4, range, hilo, options) => {
        version4 = new SemVer(version4, options);
        range = new Range(range, options);
        let gtfn, ltefn, ltfn, comp, ecomp;
        switch (hilo) {
          case ">":
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = ">";
            ecomp = ">=";
            break;
          case "<":
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = "<";
            ecomp = "<=";
            break;
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (satisfies(version4, range, options)) {
          return false;
        }
        for (let i = 0; i < range.set.length; ++i) {
          const comparators = range.set[i];
          let high = null;
          let low = null;
          comparators.forEach((comparator) => {
            if (comparator.semver === ANY) {
              comparator = new Comparator(">=0.0.0");
            }
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) {
              high = comparator;
            } else if (ltfn(comparator.semver, low.semver, options)) {
              low = comparator;
            }
          });
          if (high.operator === comp || high.operator === ecomp) {
            return false;
          }
          if ((!low.operator || low.operator === comp) && ltefn(version4, low.semver)) {
            return false;
          } else if (low.operator === ecomp && ltfn(version4, low.semver)) {
            return false;
          }
        }
        return true;
      };
      module.exports = outside;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/gtr.js
  var require_gtr = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/gtr.js"(exports, module) {
      "use strict";
      var outside = require_outside();
      var gtr = (version4, range, options) => outside(version4, range, ">", options);
      module.exports = gtr;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/ltr.js
  var require_ltr = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/ltr.js"(exports, module) {
      "use strict";
      var outside = require_outside();
      var ltr = (version4, range, options) => outside(version4, range, "<", options);
      module.exports = ltr;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/intersects.js
  var require_intersects = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/intersects.js"(exports, module) {
      "use strict";
      var Range = require_range();
      var intersects = (r1, r2, options) => {
        r1 = new Range(r1, options);
        r2 = new Range(r2, options);
        return r1.intersects(r2, options);
      };
      module.exports = intersects;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/simplify.js
  var require_simplify = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/simplify.js"(exports, module) {
      "use strict";
      var satisfies = require_satisfies();
      var compare = require_compare();
      module.exports = (versions, range, options) => {
        const set = [];
        let first = null;
        let prev = null;
        const v = versions.sort((a, b) => compare(a, b, options));
        for (const version4 of v) {
          const included = satisfies(version4, range, options);
          if (included) {
            prev = version4;
            if (!first) {
              first = version4;
            }
          } else {
            if (prev) {
              set.push([first, prev]);
            }
            prev = null;
            first = null;
          }
        }
        if (first) {
          set.push([first, null]);
        }
        const ranges = [];
        for (const [min6, max6] of set) {
          if (min6 === max6) {
            ranges.push(min6);
          } else if (!max6 && min6 === v[0]) {
            ranges.push("*");
          } else if (!max6) {
            ranges.push(`>=${min6}`);
          } else if (min6 === v[0]) {
            ranges.push(`<=${max6}`);
          } else {
            ranges.push(`${min6} - ${max6}`);
          }
        }
        const simplified = ranges.join(" || ");
        const original = typeof range.raw === "string" ? range.raw : String(range);
        return simplified.length < original.length ? simplified : range;
      };
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/subset.js
  var require_subset = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/ranges/subset.js"(exports, module) {
      "use strict";
      var Range = require_range();
      var Comparator = require_comparator();
      var { ANY } = Comparator;
      var satisfies = require_satisfies();
      var compare = require_compare();
      var subset = (sub, dom, options = {}) => {
        if (sub === dom) {
          return true;
        }
        sub = new Range(sub, options);
        dom = new Range(dom, options);
        let sawNonNull = false;
        OUTER:
          for (const simpleSub of sub.set) {
            for (const simpleDom of dom.set) {
              const isSub = simpleSubset(simpleSub, simpleDom, options);
              sawNonNull = sawNonNull || isSub !== null;
              if (isSub) {
                continue OUTER;
              }
            }
            if (sawNonNull) {
              return false;
            }
          }
        return true;
      };
      var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
      var minimumVersion = [new Comparator(">=0.0.0")];
      var simpleSubset = (sub, dom, options) => {
        if (sub === dom) {
          return true;
        }
        if (sub.length === 1 && sub[0].semver === ANY) {
          if (dom.length === 1 && dom[0].semver === ANY) {
            return true;
          } else if (options.includePrerelease) {
            sub = minimumVersionWithPreRelease;
          } else {
            sub = minimumVersion;
          }
        }
        if (dom.length === 1 && dom[0].semver === ANY) {
          if (options.includePrerelease) {
            return true;
          } else {
            dom = minimumVersion;
          }
        }
        const eqSet = /* @__PURE__ */ new Set();
        let gt, lt;
        for (const c of sub) {
          if (c.operator === ">" || c.operator === ">=") {
            gt = higherGT(gt, c, options);
          } else if (c.operator === "<" || c.operator === "<=") {
            lt = lowerLT(lt, c, options);
          } else {
            eqSet.add(c.semver);
          }
        }
        if (eqSet.size > 1) {
          return null;
        }
        let gtltComp;
        if (gt && lt) {
          gtltComp = compare(gt.semver, lt.semver, options);
          if (gtltComp > 0) {
            return null;
          } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
            return null;
          }
        }
        for (const eq of eqSet) {
          if (gt && !satisfies(eq, String(gt), options)) {
            return null;
          }
          if (lt && !satisfies(eq, String(lt), options)) {
            return null;
          }
          for (const c of dom) {
            if (!satisfies(eq, String(c), options)) {
              return false;
            }
          }
          return true;
        }
        let higher, lower;
        let hasDomLT, hasDomGT;
        let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
        let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
        if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
          needDomLTPre = false;
        }
        for (const c of dom) {
          hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
          hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
          if (gt) {
            if (needDomGTPre) {
              if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
                needDomGTPre = false;
              }
            }
            if (c.operator === ">" || c.operator === ">=") {
              higher = higherGT(gt, c, options);
              if (higher === c && higher !== gt) {
                return false;
              }
            } else if (gt.operator === ">=" && !c.test(gt.semver)) {
              return false;
            }
          }
          if (lt) {
            if (needDomLTPre) {
              if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
                needDomLTPre = false;
              }
            }
            if (c.operator === "<" || c.operator === "<=") {
              lower = lowerLT(lt, c, options);
              if (lower === c && lower !== lt) {
                return false;
              }
            } else if (lt.operator === "<=" && !c.test(lt.semver)) {
              return false;
            }
          }
          if (!c.operator && (lt || gt) && gtltComp !== 0) {
            return false;
          }
        }
        if (gt && hasDomLT && !lt && gtltComp !== 0) {
          return false;
        }
        if (lt && hasDomGT && !gt && gtltComp !== 0) {
          return false;
        }
        if (needDomGTPre || needDomLTPre) {
          return false;
        }
        return true;
      };
      var higherGT = (a, b, options) => {
        if (!a) {
          return b;
        }
        const comp = compare(a.semver, b.semver, options);
        return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
      };
      var lowerLT = (a, b, options) => {
        if (!a) {
          return b;
        }
        const comp = compare(a.semver, b.semver, options);
        return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
      };
      module.exports = subset;
    }
  });

  // node_modules/.pnpm/semver@7.8.1/node_modules/semver/index.js
  var require_semver2 = __commonJS({
    "node_modules/.pnpm/semver@7.8.1/node_modules/semver/index.js"(exports, module) {
      "use strict";
      var internalRe = require_re();
      var constants = require_constants();
      var SemVer = require_semver();
      var identifiers = require_identifiers();
      var parse3 = require_parse();
      var valid = require_valid();
      var clean2 = require_clean();
      var inc = require_inc();
      var diff = require_diff();
      var major = require_major();
      var minor = require_minor();
      var patch2 = require_patch();
      var prerelease = require_prerelease();
      var compare = require_compare();
      var rcompare = require_rcompare();
      var compareLoose = require_compare_loose();
      var compareBuild = require_compare_build();
      var sort = require_sort();
      var rsort = require_rsort();
      var gt = require_gt();
      var lt = require_lt();
      var eq = require_eq();
      var neq = require_neq();
      var gte = require_gte();
      var lte = require_lte();
      var cmp = require_cmp();
      var coerce = require_coerce();
      var truncate = require_truncate();
      var Comparator = require_comparator();
      var Range = require_range();
      var satisfies = require_satisfies();
      var toComparators = require_to_comparators();
      var maxSatisfying = require_max_satisfying();
      var minSatisfying = require_min_satisfying();
      var minVersion = require_min_version();
      var validRange = require_valid2();
      var outside = require_outside();
      var gtr = require_gtr();
      var ltr = require_ltr();
      var intersects = require_intersects();
      var simplifyRange = require_simplify();
      var subset = require_subset();
      module.exports = {
        parse: parse3,
        valid,
        clean: clean2,
        inc,
        diff,
        major,
        minor,
        patch: patch2,
        prerelease,
        compare,
        rcompare,
        compareLoose,
        compareBuild,
        sort,
        rsort,
        gt,
        lt,
        eq,
        neq,
        gte,
        lte,
        cmp,
        coerce,
        truncate,
        Comparator,
        Range,
        satisfies,
        toComparators,
        maxSatisfying,
        minSatisfying,
        minVersion,
        validRange,
        outside,
        gtr,
        ltr,
        intersects,
        simplifyRange,
        subset,
        SemVer,
        re: internalRe.re,
        src: internalRe.src,
        tokens: internalRe.t,
        SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: constants.RELEASE_TYPES,
        compareIdentifiers: identifiers.compareIdentifiers,
        rcompareIdentifiers: identifiers.rcompareIdentifiers
      };
    }
  });

  // node_modules/.pnpm/prismjs@1.30.0/node_modules/prismjs/components/prism-core.js
  var require_prism_core = __commonJS({
    "node_modules/.pnpm/prismjs@1.30.0/node_modules/prismjs/components/prism-core.js"(exports, module) {
      var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
      var Prism2 = function(_self2) {
        var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
        var uniqueId = 0;
        var plainTextGrammar = {};
        var _ = {
          manual: _self2.Prism && _self2.Prism.manual,
          disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
          util: {
            encode: function encode(tokens) {
              if (tokens instanceof Token) {
                return new Token(tokens.type, encode(tokens.content), tokens.alias);
              } else if (Array.isArray(tokens)) {
                return tokens.map(encode);
              } else {
                return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
              }
            },
            type: function(o) {
              return Object.prototype.toString.call(o).slice(8, -1);
            },
            objId: function(obj) {
              if (!obj["__id"]) {
                Object.defineProperty(obj, "__id", { value: ++uniqueId });
              }
              return obj["__id"];
            },
            clone: function deepClone(o, visited) {
              visited = visited || {};
              var clone;
              var id;
              switch (_.util.type(o)) {
                case "Object":
                  id = _.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = {};
                  visited[id] = clone;
                  for (var key in o) {
                    if (o.hasOwnProperty(key)) {
                      clone[key] = deepClone(o[key], visited);
                    }
                  }
                  return clone;
                case "Array":
                  id = _.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = [];
                  visited[id] = clone;
                  o.forEach(function(v, i) {
                    clone[i] = deepClone(v, visited);
                  });
                  return clone;
                default:
                  return o;
              }
            },
            getLanguage: function(element) {
              while (element) {
                var m = lang.exec(element.className);
                if (m) {
                  return m[1].toLowerCase();
                }
                element = element.parentElement;
              }
              return "none";
            },
            setLanguage: function(element, language) {
              element.className = element.className.replace(RegExp(lang, "gi"), "");
              element.classList.add("language-" + language);
            },
            currentScript: function() {
              if (typeof document === "undefined") {
                return null;
              }
              if (document.currentScript && document.currentScript.tagName === "SCRIPT" && 1 < 2) {
                return document.currentScript;
              }
              try {
                throw new Error();
              } catch (err) {
                var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                if (src) {
                  var scripts = document.getElementsByTagName("script");
                  for (var i in scripts) {
                    if (scripts[i].src == src) {
                      return scripts[i];
                    }
                  }
                }
                return null;
              }
            },
            isActive: function(element, className, defaultActivation) {
              var no = "no-" + className;
              while (element) {
                var classList = element.classList;
                if (classList.contains(className)) {
                  return true;
                }
                if (classList.contains(no)) {
                  return false;
                }
                element = element.parentElement;
              }
              return !!defaultActivation;
            }
          },
          languages: {
            plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,
            extend: function(id, redef) {
              var lang2 = _.util.clone(_.languages[id]);
              for (var key in redef) {
                lang2[key] = redef[key];
              }
              return lang2;
            },
            insertBefore: function(inside, before, insert, root) {
              root = root || _.languages;
              var grammar = root[inside];
              var ret = {};
              for (var token in grammar) {
                if (grammar.hasOwnProperty(token)) {
                  if (token == before) {
                    for (var newToken in insert) {
                      if (insert.hasOwnProperty(newToken)) {
                        ret[newToken] = insert[newToken];
                      }
                    }
                  }
                  if (!insert.hasOwnProperty(token)) {
                    ret[token] = grammar[token];
                  }
                }
              }
              var old = root[inside];
              root[inside] = ret;
              _.languages.DFS(_.languages, function(key, value) {
                if (value === old && key != inside) {
                  this[key] = ret;
                }
              });
              return ret;
            },
            DFS: function DFS(o, callback, type, visited) {
              visited = visited || {};
              var objId = _.util.objId;
              for (var i in o) {
                if (o.hasOwnProperty(i)) {
                  callback.call(o, i, o[i], type || i);
                  var property = o[i];
                  var propertyType = _.util.type(property);
                  if (propertyType === "Object" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, null, visited);
                  } else if (propertyType === "Array" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, i, visited);
                  }
                }
              }
            }
          },
          plugins: {},
          highlightAll: function(async, callback) {
            _.highlightAllUnder(document, async, callback);
          },
          highlightAllUnder: function(container, async, callback) {
            var env = {
              callback,
              container,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _.hooks.run("before-highlightall", env);
            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
            _.hooks.run("before-all-elements-highlight", env);
            for (var i = 0, element; element = env.elements[i++]; ) {
              _.highlightElement(element, async === true, env.callback);
            }
          },
          highlightElement: function(element, async, callback) {
            var language = _.util.getLanguage(element);
            var grammar = _.languages[language];
            _.util.setLanguage(element, language);
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre") {
              _.util.setLanguage(parent, language);
            }
            var code = element.textContent;
            var env = {
              element,
              language,
              grammar,
              code
            };
            function insertHighlightedCode(highlightedCode) {
              env.highlightedCode = highlightedCode;
              _.hooks.run("before-insert", env);
              env.element.innerHTML = env.highlightedCode;
              _.hooks.run("after-highlight", env);
              _.hooks.run("complete", env);
              callback && callback.call(env.element);
            }
            _.hooks.run("before-sanity-check", env);
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
              parent.setAttribute("tabindex", "0");
            }
            if (!env.code) {
              _.hooks.run("complete", env);
              callback && callback.call(env.element);
              return;
            }
            _.hooks.run("before-highlight", env);
            if (!env.grammar) {
              insertHighlightedCode(_.util.encode(env.code));
              return;
            }
            if (async && _self2.Worker) {
              var worker = new Worker(_.filename);
              worker.onmessage = function(evt) {
                insertHighlightedCode(evt.data);
              };
              worker.postMessage(JSON.stringify({
                language: env.language,
                code: env.code,
                immediateClose: true
              }));
            } else {
              insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
            }
          },
          highlight: function(text, grammar, language) {
            var env = {
              code: text,
              grammar,
              language
            };
            _.hooks.run("before-tokenize", env);
            if (!env.grammar) {
              throw new Error('The language "' + env.language + '" has no grammar.');
            }
            env.tokens = _.tokenize(env.code, env.grammar);
            _.hooks.run("after-tokenize", env);
            return Token.stringify(_.util.encode(env.tokens), env.language);
          },
          tokenize: function(text, grammar) {
            var rest = grammar.rest;
            if (rest) {
              for (var token in rest) {
                grammar[token] = rest[token];
              }
              delete grammar.rest;
            }
            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);
            matchGrammar(text, tokenList, grammar, tokenList.head, 0);
            return toArray(tokenList);
          },
          hooks: {
            all: {},
            add: function(name, callback) {
              var hooks = _.hooks.all;
              hooks[name] = hooks[name] || [];
              hooks[name].push(callback);
            },
            run: function(name, env) {
              var callbacks = _.hooks.all[name];
              if (!callbacks || !callbacks.length) {
                return;
              }
              for (var i = 0, callback; callback = callbacks[i++]; ) {
                callback(env);
              }
            }
          },
          Token
        };
        _self2.Prism = _;
        function Token(type, content, alias, matchedStr) {
          this.type = type;
          this.content = content;
          this.alias = alias;
          this.length = (matchedStr || "").length | 0;
        }
        Token.stringify = function stringify(o, language) {
          if (typeof o == "string") {
            return o;
          }
          if (Array.isArray(o)) {
            var s = "";
            o.forEach(function(e2) {
              s += stringify(e2, language);
            });
            return s;
          }
          var env = {
            type: o.type,
            content: stringify(o.content, language),
            tag: "span",
            classes: ["token", o.type],
            attributes: {},
            language
          };
          var aliases = o.alias;
          if (aliases) {
            if (Array.isArray(aliases)) {
              Array.prototype.push.apply(env.classes, aliases);
            } else {
              env.classes.push(aliases);
            }
          }
          _.hooks.run("wrap", env);
          var attributes = "";
          for (var name in env.attributes) {
            attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
          }
          return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
        };
        function matchPattern(pattern, pos, text, lookbehind) {
          pattern.lastIndex = pos;
          var match = pattern.exec(text);
          if (match && lookbehind && match[1]) {
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
          }
          return match;
        }
        function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
          for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
              continue;
            }
            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];
            for (var j = 0; j < patterns.length; ++j) {
              if (rematch && rematch.cause == token + "," + j) {
                return;
              }
              var patternObj = patterns[j];
              var inside = patternObj.inside;
              var lookbehind = !!patternObj.lookbehind;
              var greedy = !!patternObj.greedy;
              var alias = patternObj.alias;
              if (greedy && !patternObj.pattern.global) {
                var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
              }
              var pattern = patternObj.pattern || patternObj;
              for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
                if (rematch && pos >= rematch.reach) {
                  break;
                }
                var str = currentNode.value;
                if (tokenList.length > text.length) {
                  return;
                }
                if (str instanceof Token) {
                  continue;
                }
                var removeCount = 1;
                var match;
                if (greedy) {
                  match = matchPattern(pattern, pos, text, lookbehind);
                  if (!match || match.index >= text.length) {
                    break;
                  }
                  var from = match.index;
                  var to = match.index + match[0].length;
                  var p = pos;
                  p += currentNode.value.length;
                  while (from >= p) {
                    currentNode = currentNode.next;
                    p += currentNode.value.length;
                  }
                  p -= currentNode.value.length;
                  pos = p;
                  if (currentNode.value instanceof Token) {
                    continue;
                  }
                  for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                    removeCount++;
                    p += k.value.length;
                  }
                  removeCount--;
                  str = text.slice(pos, p);
                  match.index -= pos;
                } else {
                  match = matchPattern(pattern, 0, str, lookbehind);
                  if (!match) {
                    continue;
                  }
                }
                var from = match.index;
                var matchStr = match[0];
                var before = str.slice(0, from);
                var after = str.slice(from + matchStr.length);
                var reach = pos + str.length;
                if (rematch && reach > rematch.reach) {
                  rematch.reach = reach;
                }
                var removeFrom = currentNode.prev;
                if (before) {
                  removeFrom = addAfter(tokenList, removeFrom, before);
                  pos += before.length;
                }
                removeRange(tokenList, removeFrom, removeCount);
                var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                currentNode = addAfter(tokenList, removeFrom, wrapped);
                if (after) {
                  addAfter(tokenList, currentNode, after);
                }
                if (removeCount > 1) {
                  var nestedRematch = {
                    cause: token + "," + j,
                    reach
                  };
                  matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                  if (rematch && nestedRematch.reach > rematch.reach) {
                    rematch.reach = nestedRematch.reach;
                  }
                }
              }
            }
          }
        }
        function LinkedList() {
          var head = { value: null, prev: null, next: null };
          var tail = { value: null, prev: head, next: null };
          head.next = tail;
          this.head = head;
          this.tail = tail;
          this.length = 0;
        }
        function addAfter(list, node, value) {
          var next = node.next;
          var newNode = { value, prev: node, next };
          node.next = newNode;
          next.prev = newNode;
          list.length++;
          return newNode;
        }
        function removeRange(list, node, count) {
          var next = node.next;
          for (var i = 0; i < count && next !== list.tail; i++) {
            next = next.next;
          }
          node.next = next;
          next.prev = node;
          list.length -= i;
        }
        function toArray(list) {
          var array = [];
          var node = list.head.next;
          while (node !== list.tail) {
            array.push(node.value);
            node = node.next;
          }
          return array;
        }
        if (!_self2.document) {
          if (!_self2.addEventListener) {
            return _;
          }
          if (!_.disableWorkerMessageHandler) {
            _self2.addEventListener("message", function(evt) {
              var message = JSON.parse(evt.data);
              var lang2 = message.language;
              var code = message.code;
              var immediateClose = message.immediateClose;
              _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
              if (immediateClose) {
                _self2.close();
              }
            }, false);
          }
          return _;
        }
        var script2 = _.util.currentScript();
        if (script2) {
          _.filename = script2.src;
          if (script2.hasAttribute("data-manual")) {
            _.manual = true;
          }
        }
        function highlightAutomaticallyCallback() {
          if (!_.manual) {
            _.highlightAll();
          }
        }
        if (!_.manual) {
          var readyState = document.readyState;
          if (readyState === "loading" || readyState === "interactive" && script2 && script2.defer) {
            document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
          } else {
            if (window.requestAnimationFrame) {
              window.requestAnimationFrame(highlightAutomaticallyCallback);
            } else {
              window.setTimeout(highlightAutomaticallyCallback, 16);
            }
          }
        }
        return _;
      }(_self);
      if (typeof module !== "undefined" && module.exports) {
        module.exports = Prism2;
      }
      if (typeof global !== "undefined") {
        global.Prism = Prism2;
      }
    }
  });

  // node_modules/.pnpm/react-simple-code-editor@0.14.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/react-simple-code-editor/lib/index.js
  var require_lib = __commonJS({
    "node_modules/.pnpm/react-simple-code-editor@0.14.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/react-simple-code-editor/lib/index.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t2) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t2[p] = s[p];
          }
          return t2;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __rest = exports && exports.__rest || function(s, e2) {
        var t2 = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
            t2[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t2[p[i]] = s[p[i]];
          }
        return t2;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var React34 = __importStar(require_react());
      var KEYCODE_Y = 89;
      var KEYCODE_Z = 90;
      var KEYCODE_M = 77;
      var KEYCODE_PARENS = 57;
      var KEYCODE_BRACKETS = 219;
      var KEYCODE_QUOTE = 222;
      var KEYCODE_BACK_QUOTE = 192;
      var HISTORY_LIMIT = 100;
      var HISTORY_TIME_GAP = 3e3;
      var isWindows = typeof window !== "undefined" && "navigator" in window && /Win/i.test(navigator.platform);
      var isMacLike = typeof window !== "undefined" && "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
      var className = "npm__react-simple-code-editor__textarea";
      var cssText = "\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(className, ":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(className, " {\n    color: transparent !important;\n  }\n\n  .").concat(className, "::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n");
      var Editor4 = React34.forwardRef(function Editor5(props, ref2) {
        var autoFocus = props.autoFocus, disabled = props.disabled, form = props.form, highlight4 = props.highlight, _a = props.ignoreTabKey, ignoreTabKey = _a === void 0 ? false : _a, _b = props.insertSpaces, insertSpaces = _b === void 0 ? true : _b, maxLength = props.maxLength, minLength = props.minLength, name = props.name, onBlur = props.onBlur, onClick = props.onClick, onFocus = props.onFocus, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onValueChange = props.onValueChange, _c = props.padding, padding = _c === void 0 ? 0 : _c, placeholder2 = props.placeholder, preClassName = props.preClassName, readOnly = props.readOnly, required2 = props.required, style2 = props.style, _d = props.tabSize, tabSize = _d === void 0 ? 2 : _d, textareaClassName = props.textareaClassName, textareaId = props.textareaId, value = props.value, rest = __rest(props, ["autoFocus", "disabled", "form", "highlight", "ignoreTabKey", "insertSpaces", "maxLength", "minLength", "name", "onBlur", "onClick", "onFocus", "onKeyDown", "onKeyUp", "onValueChange", "padding", "placeholder", "preClassName", "readOnly", "required", "style", "tabSize", "textareaClassName", "textareaId", "value"]);
        var historyRef = React34.useRef({
          stack: [],
          offset: -1
        });
        var inputRef = React34.useRef(null);
        var _e = React34.useState(true), capture = _e[0], setCapture = _e[1];
        var contentStyle = {
          paddingTop: typeof padding === "object" ? padding.top : padding,
          paddingRight: typeof padding === "object" ? padding.right : padding,
          paddingBottom: typeof padding === "object" ? padding.bottom : padding,
          paddingLeft: typeof padding === "object" ? padding.left : padding
        };
        var highlighted = highlight4(value);
        var getLines = function(text, position2) {
          return text.substring(0, position2).split("\n");
        };
        var recordChange = React34.useCallback(function(record, overwrite) {
          var _a2, _b2, _c2;
          if (overwrite === void 0) {
            overwrite = false;
          }
          var _d2 = historyRef.current, stack = _d2.stack, offset3 = _d2.offset;
          if (stack.length && offset3 > -1) {
            historyRef.current.stack = stack.slice(0, offset3 + 1);
            var count = historyRef.current.stack.length;
            if (count > HISTORY_LIMIT) {
              var extras = count - HISTORY_LIMIT;
              historyRef.current.stack = stack.slice(extras, count);
              historyRef.current.offset = Math.max(historyRef.current.offset - extras, 0);
            }
          }
          var timestamp = Date.now();
          if (overwrite) {
            var last = historyRef.current.stack[historyRef.current.offset];
            if (last && timestamp - last.timestamp < HISTORY_TIME_GAP) {
              var re = /[^a-z0-9]([a-z0-9]+)$/i;
              var previous = (_a2 = getLines(last.value, last.selectionStart).pop()) === null || _a2 === void 0 ? void 0 : _a2.match(re);
              var current = (_b2 = getLines(record.value, record.selectionStart).pop()) === null || _b2 === void 0 ? void 0 : _b2.match(re);
              if ((previous === null || previous === void 0 ? void 0 : previous[1]) && ((_c2 = current === null || current === void 0 ? void 0 : current[1]) === null || _c2 === void 0 ? void 0 : _c2.startsWith(previous[1]))) {
                historyRef.current.stack[historyRef.current.offset] = __assign(__assign({}, record), { timestamp });
                return;
              }
            }
          }
          historyRef.current.stack.push(__assign(__assign({}, record), { timestamp }));
          historyRef.current.offset++;
        }, []);
        var recordCurrentState = React34.useCallback(function() {
          var input = inputRef.current;
          if (!input)
            return;
          var value2 = input.value, selectionStart = input.selectionStart, selectionEnd = input.selectionEnd;
          recordChange({
            value: value2,
            selectionStart,
            selectionEnd
          });
        }, [recordChange]);
        var updateInput = function(record) {
          var input = inputRef.current;
          if (!input)
            return;
          input.value = record.value;
          input.selectionStart = record.selectionStart;
          input.selectionEnd = record.selectionEnd;
          onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(record.value);
        };
        var applyEdits = function(record) {
          var input = inputRef.current;
          var last = historyRef.current.stack[historyRef.current.offset];
          if (last && input) {
            historyRef.current.stack[historyRef.current.offset] = __assign(__assign({}, last), { selectionStart: input.selectionStart, selectionEnd: input.selectionEnd });
          }
          recordChange(record);
          updateInput(record);
        };
        var undoEdit = function() {
          var _a2 = historyRef.current, stack = _a2.stack, offset3 = _a2.offset;
          var record = stack[offset3 - 1];
          if (record) {
            updateInput(record);
            historyRef.current.offset = Math.max(offset3 - 1, 0);
          }
        };
        var redoEdit = function() {
          var _a2 = historyRef.current, stack = _a2.stack, offset3 = _a2.offset;
          var record = stack[offset3 + 1];
          if (record) {
            updateInput(record);
            historyRef.current.offset = Math.min(offset3 + 1, stack.length - 1);
          }
        };
        var handleKeyDown = function(e2) {
          if (onKeyDown) {
            onKeyDown(e2);
            if (e2.defaultPrevented) {
              return;
            }
          }
          if (e2.key === "Escape") {
            e2.currentTarget.blur();
          }
          var _a2 = e2.currentTarget, value2 = _a2.value, selectionStart = _a2.selectionStart, selectionEnd = _a2.selectionEnd;
          var tabCharacter = (insertSpaces ? " " : "	").repeat(tabSize);
          if (e2.key === "Tab" && !ignoreTabKey && capture) {
            e2.preventDefault();
            if (e2.shiftKey) {
              var linesBeforeCaret = getLines(value2, selectionStart);
              var startLine_1 = linesBeforeCaret.length - 1;
              var endLine_1 = getLines(value2, selectionEnd).length - 1;
              var nextValue = value2.split("\n").map(function(line2, i) {
                if (i >= startLine_1 && i <= endLine_1 && line2.startsWith(tabCharacter)) {
                  return line2.substring(tabCharacter.length);
                }
                return line2;
              }).join("\n");
              if (value2 !== nextValue) {
                var startLineText = linesBeforeCaret[startLine_1];
                applyEdits({
                  value: nextValue,
                  selectionStart: (startLineText === null || startLineText === void 0 ? void 0 : startLineText.startsWith(tabCharacter)) ? selectionStart - tabCharacter.length : selectionStart,
                  selectionEnd: selectionEnd - (value2.length - nextValue.length)
                });
              }
            } else if (selectionStart !== selectionEnd) {
              var linesBeforeCaret = getLines(value2, selectionStart);
              var startLine_2 = linesBeforeCaret.length - 1;
              var endLine_2 = getLines(value2, selectionEnd).length - 1;
              var startLineText = linesBeforeCaret[startLine_2];
              applyEdits({
                value: value2.split("\n").map(function(line2, i) {
                  if (i >= startLine_2 && i <= endLine_2) {
                    return tabCharacter + line2;
                  }
                  return line2;
                }).join("\n"),
                selectionStart: startLineText && /\S/.test(startLineText) ? selectionStart + tabCharacter.length : selectionStart,
                selectionEnd: selectionEnd + tabCharacter.length * (endLine_2 - startLine_2 + 1)
              });
            } else {
              var updatedSelection = selectionStart + tabCharacter.length;
              applyEdits({
                value: value2.substring(0, selectionStart) + tabCharacter + value2.substring(selectionEnd),
                selectionStart: updatedSelection,
                selectionEnd: updatedSelection
              });
            }
          } else if (e2.key === "Backspace") {
            var hasSelection = selectionStart !== selectionEnd;
            var textBeforeCaret = value2.substring(0, selectionStart);
            if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
              e2.preventDefault();
              var updatedSelection = selectionStart - tabCharacter.length;
              applyEdits({
                value: value2.substring(0, selectionStart - tabCharacter.length) + value2.substring(selectionEnd),
                selectionStart: updatedSelection,
                selectionEnd: updatedSelection
              });
            }
          } else if (e2.key === "Enter") {
            if (selectionStart === selectionEnd) {
              var line = getLines(value2, selectionStart).pop();
              var matches = line === null || line === void 0 ? void 0 : line.match(/^\s+/);
              if (matches === null || matches === void 0 ? void 0 : matches[0]) {
                e2.preventDefault();
                var indent = "\n" + matches[0];
                var updatedSelection = selectionStart + indent.length;
                applyEdits({
                  value: value2.substring(0, selectionStart) + indent + value2.substring(selectionEnd),
                  selectionStart: updatedSelection,
                  selectionEnd: updatedSelection
                });
              }
            }
          } else if (e2.keyCode === KEYCODE_PARENS || e2.keyCode === KEYCODE_BRACKETS || e2.keyCode === KEYCODE_QUOTE || e2.keyCode === KEYCODE_BACK_QUOTE) {
            var chars2 = void 0;
            if (e2.keyCode === KEYCODE_PARENS && e2.shiftKey) {
              chars2 = ["(", ")"];
            } else if (e2.keyCode === KEYCODE_BRACKETS) {
              if (e2.shiftKey) {
                chars2 = ["{", "}"];
              } else {
                chars2 = ["[", "]"];
              }
            } else if (e2.keyCode === KEYCODE_QUOTE) {
              if (e2.shiftKey) {
                chars2 = ['"', '"'];
              } else {
                chars2 = ["'", "'"];
              }
            } else if (e2.keyCode === KEYCODE_BACK_QUOTE && !e2.shiftKey) {
              chars2 = ["`", "`"];
            }
            if (selectionStart !== selectionEnd && chars2) {
              e2.preventDefault();
              applyEdits({
                value: value2.substring(0, selectionStart) + chars2[0] + value2.substring(selectionStart, selectionEnd) + chars2[1] + value2.substring(selectionEnd),
                selectionStart,
                selectionEnd: selectionEnd + 2
              });
            }
          } else if ((isMacLike ? e2.metaKey && e2.keyCode === KEYCODE_Z : e2.ctrlKey && e2.keyCode === KEYCODE_Z) && !e2.shiftKey && !e2.altKey) {
            e2.preventDefault();
            undoEdit();
          } else if ((isMacLike ? e2.metaKey && e2.keyCode === KEYCODE_Z && e2.shiftKey : isWindows ? e2.ctrlKey && e2.keyCode === KEYCODE_Y : e2.ctrlKey && e2.keyCode === KEYCODE_Z && e2.shiftKey) && !e2.altKey) {
            e2.preventDefault();
            redoEdit();
          } else if (e2.keyCode === KEYCODE_M && e2.ctrlKey && (isMacLike ? e2.shiftKey : true)) {
            e2.preventDefault();
            setCapture(function(prev) {
              return !prev;
            });
          }
        };
        var handleChange = function(e2) {
          var _a2 = e2.currentTarget, value2 = _a2.value, selectionStart = _a2.selectionStart, selectionEnd = _a2.selectionEnd;
          recordChange({
            value: value2,
            selectionStart,
            selectionEnd
          }, true);
          onValueChange(value2);
        };
        React34.useEffect(function() {
          recordCurrentState();
        }, [recordCurrentState]);
        React34.useImperativeHandle(ref2, function() {
          return {
            get session() {
              return {
                history: historyRef.current
              };
            },
            set session(session) {
              historyRef.current = session.history;
            }
          };
        }, []);
        return React34.createElement(
          "div",
          __assign({}, rest, { style: __assign(__assign({}, styles.container), style2) }),
          React34.createElement("pre", __assign({ className: preClassName, "aria-hidden": "true", style: __assign(__assign(__assign({}, styles.editor), styles.highlight), contentStyle) }, typeof highlighted === "string" ? { dangerouslySetInnerHTML: { __html: highlighted + "<br />" } } : { children: highlighted })),
          React34.createElement("textarea", { ref: function(c) {
            return inputRef.current = c;
          }, style: __assign(__assign(__assign({}, styles.editor), styles.textarea), contentStyle), className: className + (textareaClassName ? " ".concat(textareaClassName) : ""), id: textareaId, value, onChange: handleChange, onKeyDown: handleKeyDown, onClick, onKeyUp, onFocus, onBlur, disabled, form, maxLength, minLength, name, placeholder: placeholder2, readOnly, required: required2, autoFocus, autoCapitalize: "off", autoComplete: "off", autoCorrect: "off", spellCheck: false, "data-gramm": false }),
          React34.createElement("style", { dangerouslySetInnerHTML: { __html: cssText } })
        );
      });
      var styles = {
        container: {
          position: "relative",
          textAlign: "left",
          boxSizing: "border-box",
          padding: 0,
          overflow: "hidden"
        },
        textarea: {
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          resize: "none",
          color: "inherit",
          overflow: "hidden",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          WebkitTextFillColor: "transparent"
        },
        highlight: {
          position: "relative",
          pointerEvents: "none"
        },
        editor: {
          margin: 0,
          border: 0,
          background: "none",
          boxSizing: "inherit",
          display: "inherit",
          fontFamily: "inherit",
          fontSize: "inherit",
          fontStyle: "inherit",
          fontVariantLigatures: "inherit",
          fontWeight: "inherit",
          letterSpacing: "inherit",
          lineHeight: "inherit",
          tabSize: "inherit",
          textIndent: "inherit",
          textRendering: "inherit",
          textTransform: "inherit",
          whiteSpace: "pre-wrap",
          wordBreak: "keep-all",
          overflowWrap: "break-word"
        }
      };
      exports.default = Editor4;
    }
  });

  // node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"(exports, module) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        var nativeCodeString = "[native code]";
        function classNames() {
          var classes = [];
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!arg)
              continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") {
              classes.push(arg);
            } else if (Array.isArray(arg)) {
              if (arg.length) {
                var inner = classNames.apply(null, arg);
                if (inner) {
                  classes.push(inner);
                }
              }
            } else if (argType === "object") {
              if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
                classes.push(arg.toString());
                continue;
              }
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            }
          }
          return classes.join(" ");
        }
        if (typeof module !== "undefined" && module.exports) {
          classNames.default = classNames;
          module.exports = classNames;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames;
          });
        } else {
          window.classNames = classNames;
        }
      })();
    }
  });

  // node_modules/.pnpm/react-dropdown@1.11.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/react-dropdown/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.pnpm/react-dropdown@1.11.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/react-dropdown/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _react = _interopRequireWildcard(require_react());
      var _classnames = _interopRequireDefault(require_classnames());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _getRequireWildcardCache() {
        if (typeof WeakMap !== "function")
          return null;
        var cache = /* @__PURE__ */ new WeakMap();
        _getRequireWildcardCache = function _getRequireWildcardCache2() {
          return cache;
        };
        return cache;
      }
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { "default": obj };
        }
        var cache = _getRequireWildcardCache();
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function _extends2() {
        _extends2 = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends2.apply(this, arguments);
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(source, true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(source).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _classCallCheck(instance2, Constructor) {
        if (!(instance2 instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _possibleConstructorReturn(self2, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self2);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _assertThisInitialized(self2) {
        if (self2 === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var DEFAULT_PLACEHOLDER_STRING = "Select...";
      var Dropdown3 = /* @__PURE__ */ function(_Component) {
        _inherits(Dropdown4, _Component);
        function Dropdown4(props) {
          var _this;
          _classCallCheck(this, Dropdown4);
          _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown4).call(this, props));
          _this.state = {
            selected: _this.parseValue(props.value, props.options) || {
              label: typeof props.placeholder === "undefined" ? DEFAULT_PLACEHOLDER_STRING : props.placeholder,
              value: ""
            },
            isOpen: false
          };
          _this.dropdownRef = (0, _react.createRef)();
          _this.mounted = true;
          _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
          _this.fireChangeEvent = _this.fireChangeEvent.bind(_assertThisInitialized(_this));
          return _this;
        }
        _createClass(Dropdown4, [{
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps) {
            if (this.props.value !== prevProps.value) {
              if (this.props.value) {
                var selected = this.parseValue(this.props.value, this.props.options);
                if (selected !== this.state.selected) {
                  this.setState({
                    selected
                  });
                }
              } else {
                this.setState({
                  selected: {
                    label: typeof this.props.placeholder === "undefined" ? DEFAULT_PLACEHOLDER_STRING : this.props.placeholder,
                    value: ""
                  }
                });
              }
            }
          }
        }, {
          key: "componentDidMount",
          value: function componentDidMount() {
            document.addEventListener("click", this.handleDocumentClick, false);
            document.addEventListener("touchend", this.handleDocumentClick, false);
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.mounted = false;
            document.removeEventListener("click", this.handleDocumentClick, false);
            document.removeEventListener("touchend", this.handleDocumentClick, false);
          }
        }, {
          key: "handleMouseDown",
          value: function handleMouseDown(event) {
            if (this.props.onFocus && typeof this.props.onFocus === "function") {
              this.props.onFocus(this.state.isOpen);
            }
            if (event.type === "mousedown" && event.button !== 0)
              return;
            event.stopPropagation();
            event.preventDefault();
            if (!this.props.disabled) {
              this.setState({
                isOpen: !this.state.isOpen
              });
            }
          }
        }, {
          key: "parseValue",
          value: function parseValue(value, options) {
            var option;
            if (typeof value === "string") {
              for (var i = 0, num3 = options.length; i < num3; i++) {
                if (options[i].type === "group") {
                  var match = options[i].items.filter(function(item) {
                    return item.value === value;
                  });
                  if (match.length) {
                    option = match[0];
                  }
                } else if (typeof options[i].value !== "undefined" && options[i].value === value) {
                  option = options[i];
                }
              }
            }
            return option || value;
          }
        }, {
          key: "setValue",
          value: function setValue(value, label) {
            var newState = {
              selected: {
                value,
                label
              },
              isOpen: false
            };
            this.fireChangeEvent(newState);
            this.setState(newState);
          }
        }, {
          key: "fireChangeEvent",
          value: function fireChangeEvent(newState) {
            if (newState.selected !== this.state.selected && this.props.onChange) {
              this.props.onChange(newState.selected);
            }
          }
        }, {
          key: "renderOption",
          value: function renderOption(option) {
            var _classes;
            var value = option.value;
            if (typeof value === "undefined") {
              value = option.label || option;
            }
            var label = option.label || option.value || option;
            var isSelected = value === this.state.selected.value || value === this.state.selected;
            var classes = (_classes = {}, _defineProperty(_classes, "".concat(this.props.baseClassName, "-option"), true), _defineProperty(_classes, option.className, !!option.className), _defineProperty(_classes, "is-selected", isSelected), _classes);
            var optionClass = (0, _classnames["default"])(classes);
            var dataAttributes = Object.keys(option.data || {}).reduce(function(acc, dataKey) {
              return _objectSpread({}, acc, _defineProperty({}, "data-".concat(dataKey), option.data[dataKey]));
            }, {});
            return _react["default"].createElement("div", _extends2({
              key: value,
              className: optionClass,
              onMouseDown: this.setValue.bind(this, value, label),
              onClick: this.setValue.bind(this, value, label),
              role: "option",
              "aria-selected": isSelected ? "true" : "false"
            }, dataAttributes), label);
          }
        }, {
          key: "buildMenu",
          value: function buildMenu() {
            var _this2 = this;
            var _this$props = this.props, options = _this$props.options, baseClassName = _this$props.baseClassName;
            var ops = options.map(function(option) {
              if (option.type === "group") {
                var groupTitle = _react["default"].createElement("div", {
                  className: "".concat(baseClassName, "-title")
                }, option.name);
                var _options = option.items.map(function(item) {
                  return _this2.renderOption(item);
                });
                return _react["default"].createElement("div", {
                  className: "".concat(baseClassName, "-group"),
                  key: option.name,
                  role: "listbox",
                  tabIndex: "-1"
                }, groupTitle, _options);
              } else {
                return _this2.renderOption(option);
              }
            });
            return ops.length ? ops : _react["default"].createElement("div", {
              className: "".concat(baseClassName, "-noresults")
            }, "No options found");
          }
        }, {
          key: "handleDocumentClick",
          value: function handleDocumentClick(event) {
            if (this.mounted) {
              if (!this.dropdownRef.current.contains(event.target)) {
                if (this.state.isOpen) {
                  this.setState({
                    isOpen: false
                  });
                }
              }
            }
          }
        }, {
          key: "isValueSelected",
          value: function isValueSelected() {
            return typeof this.state.selected === "string" || this.state.selected.value !== "";
          }
        }, {
          key: "render",
          value: function render2() {
            var _classNames, _classNames2, _classNames3, _classNames4, _classNames5;
            var _this$props2 = this.props, baseClassName = _this$props2.baseClassName, controlClassName = _this$props2.controlClassName, placeholderClassName = _this$props2.placeholderClassName, menuClassName = _this$props2.menuClassName, arrowClassName = _this$props2.arrowClassName, arrowClosed = _this$props2.arrowClosed, arrowOpen = _this$props2.arrowOpen, className = _this$props2.className;
            var disabledClass = this.props.disabled ? "Dropdown-disabled" : "";
            var placeHolderValue = typeof this.state.selected === "string" ? this.state.selected : this.state.selected.label;
            var dropdownClass = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(baseClassName, "-root"), true), _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, "is-open", this.state.isOpen), _classNames));
            var controlClass = (0, _classnames["default"])((_classNames2 = {}, _defineProperty(_classNames2, "".concat(baseClassName, "-control"), true), _defineProperty(_classNames2, controlClassName, !!controlClassName), _defineProperty(_classNames2, disabledClass, !!disabledClass), _classNames2));
            var placeholderClass = (0, _classnames["default"])((_classNames3 = {}, _defineProperty(_classNames3, "".concat(baseClassName, "-placeholder"), true), _defineProperty(_classNames3, placeholderClassName, !!placeholderClassName), _defineProperty(_classNames3, "is-selected", this.isValueSelected()), _classNames3));
            var menuClass = (0, _classnames["default"])((_classNames4 = {}, _defineProperty(_classNames4, "".concat(baseClassName, "-menu"), true), _defineProperty(_classNames4, menuClassName, !!menuClassName), _classNames4));
            var arrowClass = (0, _classnames["default"])((_classNames5 = {}, _defineProperty(_classNames5, "".concat(baseClassName, "-arrow"), true), _defineProperty(_classNames5, arrowClassName, !!arrowClassName), _classNames5));
            var value = _react["default"].createElement("div", {
              className: placeholderClass
            }, placeHolderValue);
            var menu = this.state.isOpen ? _react["default"].createElement("div", {
              className: menuClass,
              "aria-expanded": "true"
            }, this.buildMenu()) : null;
            return _react["default"].createElement("div", {
              ref: this.dropdownRef,
              className: dropdownClass
            }, _react["default"].createElement("div", {
              className: controlClass,
              onMouseDown: this.handleMouseDown.bind(this),
              onTouchEnd: this.handleMouseDown.bind(this),
              "aria-haspopup": "listbox"
            }, value, _react["default"].createElement("div", {
              className: "".concat(baseClassName, "-arrow-wrapper")
            }, arrowOpen && arrowClosed ? this.state.isOpen ? arrowOpen : arrowClosed : _react["default"].createElement("span", {
              className: arrowClass
            }))), menu);
          }
        }]);
        return Dropdown4;
      }(_react.Component);
      Dropdown3.defaultProps = {
        baseClassName: "Dropdown"
      };
      var _default = Dropdown3;
      exports["default"] = _default;
    }
  });

  // external-global-plugin:react-dom
  var require_react_dom = __commonJS({
    "external-global-plugin:react-dom"(exports, module) {
      module.exports = Spicetify.ReactDOM;
    }
  });

  // node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.3/node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js
  var require_use_sync_external_store_with_selector_development = __commonJS({
    "node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.3/node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js"(exports) {
      "use strict";
      (function() {
        function is2(x, y) {
          return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var React34 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is2, useSyncExternalStore3 = React34.useSyncExternalStore, useRef5 = React34.useRef, useEffect5 = React34.useEffect, useMemo5 = React34.useMemo, useDebugValue2 = React34.useDebugValue;
        exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual2) {
          var instRef = useRef5(null);
          if (null === instRef.current) {
            var inst = { hasValue: false, value: null };
            instRef.current = inst;
          } else
            inst = instRef.current;
          instRef = useMemo5(
            function() {
              function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                  hasMemo = true;
                  memoizedSnapshot = nextSnapshot;
                  nextSnapshot = selector(nextSnapshot);
                  if (void 0 !== isEqual2 && inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual2(currentSelection, nextSnapshot))
                      return memoizedSelection = currentSelection;
                  }
                  return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot))
                  return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual2 && isEqual2(currentSelection, nextSelection))
                  return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
              }
              var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
              return [
                function() {
                  return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                  return memoizedSelector(maybeGetServerSnapshot());
                }
              ];
            },
            [getSnapshot, getServerSnapshot, selector, isEqual2]
          );
          var value = useSyncExternalStore3(subscribe, instRef[0], instRef[1]);
          useEffect5(
            function() {
              inst.hasValue = true;
              inst.value = value;
            },
            [value]
          );
          useDebugValue2(value);
          return value;
        };
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.3/node_modules/use-sync-external-store/with-selector.js
  var require_with_selector = __commonJS({
    "node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.3/node_modules/use-sync-external-store/with-selector.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_use_sync_external_store_with_selector_development();
      }
    }
  });

  // ../spicetify-creator/index.jsx
  var spicetify_creator_exports = {};
  __export(spicetify_creator_exports, {
    default: () => render
  });

  // node_modules/.pnpm/i18next@26.3.0_typescript@6.0.3/node_modules/i18next/dist/esm/i18next.js
  var isString = (obj) => typeof obj === "string";
  var defer = () => {
    let res;
    let rej;
    const promise = new Promise((resolve, reject) => {
      res = resolve;
      rej = reject;
    });
    promise.resolve = res;
    promise.reject = rej;
    return promise;
  };
  var makeString = (object) => {
    if (object == null)
      return "";
    return String(object);
  };
  var copy = (a, s, t2) => {
    a.forEach((m) => {
      if (s[m])
        t2[m] = s[m];
    });
  };
  var lastOfPathSeparatorRegExp = /###/g;
  var cleanKey = (key) => key && key.includes("###") ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
  var canNotTraverseDeeper = (object) => !object || isString(object);
  var getLastOfPath = (object, path2, Empty) => {
    const stack = !isString(path2) ? path2 : path2.split(".");
    let stackIndex = 0;
    while (stackIndex < stack.length - 1) {
      if (canNotTraverseDeeper(object))
        return {};
      const key = cleanKey(stack[stackIndex]);
      if (!object[key] && Empty)
        object[key] = new Empty();
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        object = object[key];
      } else {
        object = {};
      }
      ++stackIndex;
    }
    if (canNotTraverseDeeper(object))
      return {};
    return {
      obj: object,
      k: cleanKey(stack[stackIndex])
    };
  };
  var setPath = (object, path2, newValue) => {
    const {
      obj,
      k
    } = getLastOfPath(object, path2, Object);
    if (obj !== void 0 || path2.length === 1) {
      obj[k] = newValue;
      return;
    }
    let e2 = path2[path2.length - 1];
    let p = path2.slice(0, path2.length - 1);
    let last = getLastOfPath(object, p, Object);
    while (last.obj === void 0 && p.length) {
      e2 = `${p[p.length - 1]}.${e2}`;
      p = p.slice(0, p.length - 1);
      last = getLastOfPath(object, p, Object);
      if (last?.obj && typeof last.obj[`${last.k}.${e2}`] !== "undefined") {
        last.obj = void 0;
      }
    }
    last.obj[`${last.k}.${e2}`] = newValue;
  };
  var pushPath = (object, path2, newValue, concat) => {
    const {
      obj,
      k
    } = getLastOfPath(object, path2, Object);
    obj[k] = obj[k] || [];
    obj[k].push(newValue);
  };
  var getPath = (object, path2) => {
    const {
      obj,
      k
    } = getLastOfPath(object, path2);
    if (!obj)
      return void 0;
    if (!Object.prototype.hasOwnProperty.call(obj, k))
      return void 0;
    return obj[k];
  };
  var getPathWithDefaults = (data, defaultData, key) => {
    const value = getPath(data, key);
    if (value !== void 0) {
      return value;
    }
    return getPath(defaultData, key);
  };
  var deepExtend = (target, source, overwrite) => {
    for (const prop in source) {
      if (prop !== "__proto__" && prop !== "constructor") {
        if (prop in target) {
          if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
            if (overwrite)
              target[prop] = source[prop];
          } else {
            deepExtend(target[prop], source[prop], overwrite);
          }
        } else {
          target[prop] = source[prop];
        }
      }
    }
    return target;
  };
  var regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  var _entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
  };
  var escape = (data) => {
    if (isString(data)) {
      return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
    }
    return data;
  };
  var RegExpCache = class {
    constructor(capacity) {
      this.capacity = capacity;
      this.regExpMap = /* @__PURE__ */ new Map();
      this.regExpQueue = [];
    }
    getRegExp(pattern) {
      const regExpFromCache = this.regExpMap.get(pattern);
      if (regExpFromCache !== void 0) {
        return regExpFromCache;
      }
      const regExpNew = new RegExp(pattern);
      if (this.regExpQueue.length === this.capacity) {
        this.regExpMap.delete(this.regExpQueue.shift());
      }
      this.regExpMap.set(pattern, regExpNew);
      this.regExpQueue.push(pattern);
      return regExpNew;
    }
  };
  var chars = [" ", ",", "?", "!", ";"];
  var looksLikeObjectPathRegExpCache = new RegExpCache(20);
  var looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
    nsSeparator = nsSeparator || "";
    keySeparator = keySeparator || "";
    const possibleChars = chars.filter((c) => !nsSeparator.includes(c) && !keySeparator.includes(c));
    if (possibleChars.length === 0)
      return true;
    const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
    let matched = !r.test(key);
    if (!matched) {
      const ki = key.indexOf(keySeparator);
      if (ki > 0 && !r.test(key.substring(0, ki))) {
        matched = true;
      }
    }
    return matched;
  };
  var deepFind = (obj, path2, keySeparator = ".") => {
    if (!obj)
      return void 0;
    if (obj[path2]) {
      if (!Object.prototype.hasOwnProperty.call(obj, path2))
        return void 0;
      return obj[path2];
    }
    const tokens = path2.split(keySeparator);
    let current = obj;
    for (let i = 0; i < tokens.length; ) {
      if (!current || typeof current !== "object") {
        return void 0;
      }
      let next;
      let nextPath = "";
      for (let j = i; j < tokens.length; ++j) {
        if (j !== i) {
          nextPath += keySeparator;
        }
        nextPath += tokens[j];
        next = current[nextPath];
        if (next !== void 0) {
          if (["string", "number", "boolean"].includes(typeof next) && j < tokens.length - 1) {
            continue;
          }
          i += j - i + 1;
          break;
        }
      }
      current = next;
    }
    return current;
  };
  var getCleanedCode = (code) => code?.replace(/_/g, "-");
  var consoleLogger = {
    type: "logger",
    log(args) {
      this.output("log", args);
    },
    warn(args) {
      this.output("warn", args);
    },
    error(args) {
      this.output("error", args);
    },
    output(type, args) {
      console?.[type]?.apply?.(console, args);
    }
  };
  var Logger = class {
    constructor(concreteLogger, options = {}) {
      this.init(concreteLogger, options);
    }
    init(concreteLogger, options = {}) {
      this.prefix = options.prefix || "i18next:";
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
    log(...args) {
      return this.forward(args, "log", "", true);
    }
    warn(...args) {
      return this.forward(args, "warn", "", true);
    }
    error(...args) {
      return this.forward(args, "error", "");
    }
    deprecate(...args) {
      return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
    }
    forward(args, lvl, prefix3, debugOnly) {
      if (debugOnly && !this.debug)
        return null;
      args = args.map((a) => isString(a) ? a.replace(/[\r\n\x00-\x1F\x7F]/g, " ") : a);
      if (isString(args[0]))
        args[0] = `${prefix3}${this.prefix} ${args[0]}`;
      return this.logger[lvl](args);
    }
    create(moduleName) {
      return new Logger(this.logger, {
        ...{
          prefix: `${this.prefix}:${moduleName}:`
        },
        ...this.options
      });
    }
    clone(options) {
      options = options || this.options;
      options.prefix = options.prefix || this.prefix;
      return new Logger(this.logger, options);
    }
  };
  var baseLogger = new Logger();
  var EventEmitter = class {
    constructor() {
      this.observers = {};
    }
    on(events, listener) {
      events.split(" ").forEach((event) => {
        if (!this.observers[event])
          this.observers[event] = /* @__PURE__ */ new Map();
        const numListeners = this.observers[event].get(listener) || 0;
        this.observers[event].set(listener, numListeners + 1);
      });
      return this;
    }
    off(event, listener) {
      if (!this.observers[event])
        return;
      if (!listener) {
        delete this.observers[event];
        return;
      }
      this.observers[event].delete(listener);
    }
    once(event, listener) {
      const wrapper = (...args) => {
        listener(...args);
        this.off(event, wrapper);
      };
      this.on(event, wrapper);
      return this;
    }
    emit(event, ...args) {
      if (this.observers[event]) {
        const cloned = Array.from(this.observers[event].entries());
        cloned.forEach(([observer, numTimesAdded]) => {
          for (let i = 0; i < numTimesAdded; i++) {
            observer(...args);
          }
        });
      }
      if (this.observers["*"]) {
        const cloned = Array.from(this.observers["*"].entries());
        cloned.forEach(([observer, numTimesAdded]) => {
          for (let i = 0; i < numTimesAdded; i++) {
            observer(event, ...args);
          }
        });
      }
    }
  };
  var ResourceStore = class extends EventEmitter {
    constructor(data, options = {
      ns: ["translation"],
      defaultNS: "translation"
    }) {
      super();
      this.data = data || {};
      this.options = options;
      if (this.options.keySeparator === void 0) {
        this.options.keySeparator = ".";
      }
      if (this.options.ignoreJSONStructure === void 0) {
        this.options.ignoreJSONStructure = true;
      }
    }
    addNamespaces(ns) {
      if (!this.options.ns.includes(ns)) {
        this.options.ns.push(ns);
      }
    }
    removeNamespaces(ns) {
      const index = this.options.ns.indexOf(ns);
      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
    getResource(lng, ns, key, options = {}) {
      const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
      let path2;
      if (lng.includes(".")) {
        path2 = lng.split(".");
      } else {
        path2 = [lng, ns];
        if (key) {
          if (Array.isArray(key)) {
            path2.push(...key);
          } else if (isString(key) && keySeparator) {
            path2.push(...key.split(keySeparator));
          } else {
            path2.push(key);
          }
        }
      }
      const result = getPath(this.data, path2);
      if (!result && !ns && !key && lng.includes(".")) {
        lng = path2[0];
        ns = path2[1];
        key = path2.slice(2).join(".");
      }
      if (result || !ignoreJSONStructure || !isString(key))
        return result;
      return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
    }
    addResource(lng, ns, key, value, options = {
      silent: false
    }) {
      const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      let path2 = [lng, ns];
      if (key)
        path2 = path2.concat(keySeparator ? key.split(keySeparator) : key);
      if (lng.includes(".")) {
        path2 = lng.split(".");
        value = ns;
        ns = path2[1];
      }
      this.addNamespaces(ns);
      setPath(this.data, path2, value);
      if (!options.silent)
        this.emit("added", lng, ns, key, value);
    }
    addResources(lng, ns, resources, options = {
      silent: false
    }) {
      for (const m in resources) {
        if (isString(resources[m]) || Array.isArray(resources[m]))
          this.addResource(lng, ns, m, resources[m], {
            silent: true
          });
      }
      if (!options.silent)
        this.emit("added", lng, ns, resources);
    }
    addResourceBundle(lng, ns, resources, deep, overwrite, options = {
      silent: false,
      skipCopy: false
    }) {
      let path2 = [lng, ns];
      if (lng.includes(".")) {
        path2 = lng.split(".");
        deep = resources;
        resources = ns;
        ns = path2[1];
      }
      this.addNamespaces(ns);
      let pack = getPath(this.data, path2) || {};
      if (!options.skipCopy)
        resources = JSON.parse(JSON.stringify(resources));
      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = {
          ...pack,
          ...resources
        };
      }
      setPath(this.data, path2, pack);
      if (!options.silent)
        this.emit("added", lng, ns, resources);
    }
    removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }
      this.removeNamespaces(ns);
      this.emit("removed", lng, ns);
    }
    hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== void 0;
    }
    getResourceBundle(lng, ns) {
      if (!ns)
        ns = this.options.defaultNS;
      return this.getResource(lng, ns);
    }
    getDataByLanguage(lng) {
      return this.data[lng];
    }
    hasLanguageSomeTranslations(lng) {
      const data = this.getDataByLanguage(lng);
      const n = data && Object.keys(data) || [];
      return !!n.find((v) => data[v] && Object.keys(data[v]).length > 0);
    }
    toJSON() {
      return this.data;
    }
  };
  var postProcessor = {
    processors: {},
    addPostProcessor(module) {
      this.processors[module.name] = module;
    },
    handle(processors, value, key, options, translator) {
      processors.forEach((processor) => {
        value = this.processors[processor]?.process(value, key, options, translator) ?? value;
      });
      return value;
    }
  };
  var PATH_KEY = Symbol("i18next/PATH_KEY");
  function createProxy() {
    const state = [];
    const handler = /* @__PURE__ */ Object.create(null);
    let proxy;
    handler.get = (target, key) => {
      proxy?.revoke?.();
      if (key === PATH_KEY)
        return state;
      state.push(key);
      proxy = Proxy.revocable(target, handler);
      return proxy.proxy;
    };
    return Proxy.revocable(/* @__PURE__ */ Object.create(null), handler).proxy;
  }
  function keysFromSelector(selector, opts) {
    const {
      [PATH_KEY]: path2
    } = selector(createProxy());
    const keySeparator = opts?.keySeparator ?? ".";
    const nsSeparator = opts?.nsSeparator ?? ":";
    const strict = opts?.enableSelector === "strict";
    if (path2.length > 1 && nsSeparator) {
      const ns = opts?.ns;
      const nsList = strict ? Array.isArray(ns) ? ns : ns ? [ns] : null : Array.isArray(ns) ? ns : null;
      if (nsList) {
        const candidates = strict ? nsList : nsList.length > 1 ? nsList.slice(1) : [];
        if (candidates.includes(path2[0])) {
          return `${path2[0]}${nsSeparator}${path2.slice(1).join(keySeparator)}`;
        }
      }
    }
    return path2.join(keySeparator);
  }
  var shouldHandleAsObject = (res) => !isString(res) && typeof res !== "boolean" && typeof res !== "number";
  var Translator = class extends EventEmitter {
    constructor(services, options = {}) {
      super();
      copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
      this.options = options;
      if (this.options.keySeparator === void 0) {
        this.options.keySeparator = ".";
      }
      this.logger = baseLogger.create("translator");
      this.checkedLoadedFor = {};
    }
    changeLanguage(lng) {
      if (lng)
        this.language = lng;
    }
    exists(key, o = {
      interpolation: {}
    }) {
      const opt = {
        ...o
      };
      if (key == null)
        return false;
      const resolved = this.resolve(key, opt);
      if (resolved?.res === void 0)
        return false;
      const isObject2 = shouldHandleAsObject(resolved.res);
      if (opt.returnObjects === false && isObject2) {
        return false;
      }
      return true;
    }
    extractFromKey(key, opt) {
      let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === void 0)
        nsSeparator = ":";
      const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
      let namespaces = opt.ns || this.options.defaultNS || [];
      const wouldCheckForNsInKey = nsSeparator && key.includes(nsSeparator);
      const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
      if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
        const m = key.match(this.interpolator.nestingRegexp);
        if (m && m.length > 0) {
          return {
            key,
            namespaces: isString(namespaces) ? [namespaces] : namespaces
          };
        }
        const parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.includes(parts[0]))
          namespaces = parts.shift();
        key = parts.join(keySeparator);
      }
      return {
        key,
        namespaces: isString(namespaces) ? [namespaces] : namespaces
      };
    }
    translate(keys, o, lastKey) {
      let opt = typeof o === "object" ? {
        ...o
      } : o;
      if (typeof opt !== "object" && this.options.overloadTranslationOptionHandler) {
        opt = this.options.overloadTranslationOptionHandler(arguments);
      }
      if (typeof opt === "object")
        opt = {
          ...opt
        };
      if (!opt)
        opt = {};
      if (keys == null)
        return "";
      if (typeof keys === "function")
        keys = keysFromSelector(keys, {
          ...this.options,
          ...opt
        });
      if (!Array.isArray(keys))
        keys = [String(keys)];
      keys = keys.map((k) => typeof k === "function" ? keysFromSelector(k, {
        ...this.options,
        ...opt
      }) : String(k));
      const returnDetails = opt.returnDetails !== void 0 ? opt.returnDetails : this.options.returnDetails;
      const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
      const {
        key,
        namespaces
      } = this.extractFromKey(keys[keys.length - 1], opt);
      const namespace = namespaces[namespaces.length - 1];
      let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === void 0)
        nsSeparator = ":";
      const lng = opt.lng || this.language;
      const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (lng?.toLowerCase() === "cimode") {
        if (appendNamespaceToCIMode) {
          if (returnDetails) {
            return {
              res: `${namespace}${nsSeparator}${key}`,
              usedKey: key,
              exactUsedKey: key,
              usedLng: lng,
              usedNS: namespace,
              usedParams: this.getUsedParamsDetails(opt)
            };
          }
          return `${namespace}${nsSeparator}${key}`;
        }
        if (returnDetails) {
          return {
            res: key,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(opt)
          };
        }
        return key;
      }
      const resolved = this.resolve(keys, opt);
      let res = resolved?.res;
      const resUsedKey = resolved?.usedKey || key;
      const resExactUsedKey = resolved?.exactUsedKey || key;
      const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
      const joinArrays = opt.joinArrays !== void 0 ? opt.joinArrays : this.options.joinArrays;
      const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      const needsPluralHandling = opt.count !== void 0 && !isString(opt.count);
      const hasDefaultValue = Translator.hasDefaultValue(opt);
      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : "";
      const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, {
        ordinal: false
      }) : "";
      const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
      const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
      let resForObjHndl = res;
      if (handleAsObjectInI18nFormat && !res && hasDefaultValue) {
        resForObjHndl = defaultValue;
      }
      const handleAsObject = shouldHandleAsObject(resForObjHndl);
      const resType = Object.prototype.toString.apply(resForObjHndl);
      if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && !noObject.includes(resType) && !(isString(joinArrays) && Array.isArray(resForObjHndl))) {
        if (!opt.returnObjects && !this.options.returnObjects) {
          if (!this.options.returnedObjectHandler) {
            this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          }
          const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
            ...opt,
            ns: namespaces
          }) : `key '${key} (${this.language})' returned an object instead of string.`;
          if (returnDetails) {
            resolved.res = r;
            resolved.usedParams = this.getUsedParamsDetails(opt);
            return resolved;
          }
          return r;
        }
        if (keySeparator) {
          const resTypeIsArray = Array.isArray(resForObjHndl);
          const copy2 = resTypeIsArray ? [] : {};
          const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
          for (const m in resForObjHndl) {
            if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
              const deepKey = `${newKeyToUse}${keySeparator}${m}`;
              if (hasDefaultValue && !res) {
                copy2[m] = this.translate(deepKey, {
                  ...opt,
                  defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : void 0,
                  ...{
                    joinArrays: false,
                    ns: namespaces
                  }
                });
              } else {
                copy2[m] = this.translate(deepKey, {
                  ...opt,
                  ...{
                    joinArrays: false,
                    ns: namespaces
                  }
                });
              }
              if (copy2[m] === deepKey)
                copy2[m] = resForObjHndl[m];
            }
          }
          res = copy2;
        }
      } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
        res = res.join(joinArrays);
        if (res)
          res = this.extendTranslation(res, keys, opt, lastKey);
      } else {
        let usedDefault = false;
        let usedKey = false;
        if (!this.isValidLookup(res) && hasDefaultValue) {
          usedDefault = true;
          res = defaultValue;
        }
        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }
        const missingKeyNoValueFallbackToKey = opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
        const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
        const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, needsPluralHandling && !updateMissing ? `${key}${this.pluralResolver.getSuffix(lng, opt.count, opt)}` : key, updateMissing ? defaultValue : res);
          if (keySeparator) {
            const fk = this.resolve(key, {
              ...opt,
              keySeparator: false
            });
            if (fk && fk.res)
              this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          let lngs = [];
          const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
            for (let i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === "all") {
            lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
          } else {
            lngs.push(opt.lng || this.language);
          }
          const send = (l, k, specificDefaultValue) => {
            const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
            if (this.options.missingKeyHandler) {
              this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
            } else if (this.backendConnector?.saveMissing) {
              this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
            }
            this.emit("missingKey", l, namespace, k, res);
          };
          if (this.options.saveMissing) {
            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach((language) => {
                const suffixes = this.pluralResolver.getSuffixes(language, opt);
                if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && !suffixes.includes(`${this.options.pluralSeparator}zero`)) {
                  suffixes.push(`${this.options.pluralSeparator}zero`);
                }
                suffixes.forEach((suffix2) => {
                  send([language], key + suffix2, opt[`defaultValue${suffix2}`] || defaultValue);
                });
              });
            } else {
              send(lngs, key, defaultValue);
            }
          }
        }
        res = this.extendTranslation(res, keys, opt, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) {
          res = `${namespace}${nsSeparator}${key}`;
        }
        if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : void 0, opt);
        }
      }
      if (returnDetails) {
        resolved.res = res;
        resolved.usedParams = this.getUsedParamsDetails(opt);
        return resolved;
      }
      return res;
    }
    extendTranslation(res, key, opt, resolved, lastKey) {
      if (this.i18nFormat?.parse) {
        res = this.i18nFormat.parse(res, {
          ...this.options.interpolation.defaultVariables,
          ...opt
        }, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved
        });
      } else if (!opt.skipInterpolation) {
        if (opt.interpolation)
          this.interpolator.init({
            ...opt,
            ...{
              interpolation: {
                ...this.options.interpolation,
                ...opt.interpolation
              }
            }
          });
        const skipOnVariables = isString(res) && (opt?.interpolation?.skipOnVariables !== void 0 ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
        let nestBef;
        if (skipOnVariables) {
          const nb = res.match(this.interpolator.nestingRegexp);
          nestBef = nb && nb.length;
        }
        let data = opt.replace && !isString(opt.replace) ? opt.replace : opt;
        if (this.options.interpolation.defaultVariables)
          data = {
            ...this.options.interpolation.defaultVariables,
            ...data
          };
        res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
        if (skipOnVariables) {
          const na = res.match(this.interpolator.nestingRegexp);
          const nestAft = na && na.length;
          if (nestBef < nestAft)
            opt.nest = false;
        }
        if (!opt.lng && resolved && resolved.res)
          opt.lng = this.language || resolved.usedLng;
        if (opt.nest !== false)
          res = this.interpolator.nest(res, (...args) => {
            if (lastKey?.[0] === args[0] && !opt.context) {
              this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
              return null;
            }
            return this.translate(...args, key);
          }, opt);
        if (opt.interpolation)
          this.interpolator.reset();
      }
      const postProcess = opt.postProcess || this.options.postProcess;
      const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
      if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
          i18nResolved: {
            ...resolved,
            usedParams: this.getUsedParamsDetails(opt)
          },
          ...opt
        } : opt, this);
      }
      return res;
    }
    resolve(keys, opt = {}) {
      let found;
      let usedKey;
      let exactUsedKey;
      let usedLng;
      let usedNS;
      if (isString(keys))
        keys = [keys];
      if (Array.isArray(keys))
        keys = keys.map((k) => typeof k === "function" ? keysFromSelector(k, {
          ...this.options,
          ...opt
        }) : k);
      keys.forEach((k) => {
        if (this.isValidLookup(found))
          return;
        const extracted = this.extractFromKey(k, opt);
        const key = extracted.key;
        usedKey = key;
        let namespaces = extracted.namespaces;
        if (this.options.fallbackNS)
          namespaces = namespaces.concat(this.options.fallbackNS);
        const needsPluralHandling = opt.count !== void 0 && !isString(opt.count);
        const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
        const needsContextHandling = opt.context !== void 0 && (isString(opt.context) || typeof opt.context === "number") && opt.context !== "";
        const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
        namespaces.forEach((ns) => {
          if (this.isValidLookup(found))
            return;
          usedNS = ns;
          if (!this.checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
            this.checkedLoadedFor[`${codes[0]}-${ns}`] = true;
            this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
          }
          codes.forEach((code) => {
            if (this.isValidLookup(found))
              return;
            usedLng = code;
            const finalKeys = [key];
            if (this.i18nFormat?.addLookupKeys) {
              this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
            } else {
              let pluralSuffix;
              if (needsPluralHandling)
                pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
              const zeroSuffix = `${this.options.pluralSeparator}zero`;
              const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
              if (needsPluralHandling) {
                if (opt.ordinal && pluralSuffix.startsWith(ordinalPrefix)) {
                  finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                finalKeys.push(key + pluralSuffix);
                if (needsZeroSuffixLookup) {
                  finalKeys.push(key + zeroSuffix);
                }
              }
              if (needsContextHandling) {
                const contextKey = `${key}${this.options.contextSeparator || "_"}${opt.context}`;
                finalKeys.push(contextKey);
                if (needsPluralHandling) {
                  if (opt.ordinal && pluralSuffix.startsWith(ordinalPrefix)) {
                    finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                  }
                  finalKeys.push(contextKey + pluralSuffix);
                  if (needsZeroSuffixLookup) {
                    finalKeys.push(contextKey + zeroSuffix);
                  }
                }
              }
            }
            let possibleKey;
            while (possibleKey = finalKeys.pop()) {
              if (!this.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = this.getResource(code, ns, possibleKey, opt);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey,
        exactUsedKey,
        usedLng,
        usedNS
      };
    }
    isValidLookup(res) {
      return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
    }
    getResource(code, ns, key, options = {}) {
      if (this.i18nFormat?.getResource)
        return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
    getUsedParamsDetails(options = {}) {
      const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
      const useOptionsReplaceForData = options.replace && !isString(options.replace);
      let data = useOptionsReplaceForData ? options.replace : options;
      if (useOptionsReplaceForData && typeof options.count !== "undefined") {
        data.count = options.count;
      }
      if (this.options.interpolation.defaultVariables) {
        data = {
          ...this.options.interpolation.defaultVariables,
          ...data
        };
      }
      if (!useOptionsReplaceForData) {
        data = {
          ...data
        };
        for (const key of optionsKeys) {
          delete data[key];
        }
      }
      return data;
    }
    static hasDefaultValue(options) {
      const prefix3 = "defaultValue";
      for (const option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option) && option.startsWith(prefix3) && void 0 !== options[option]) {
          return true;
        }
      }
      return false;
    }
  };
  var LanguageUtil = class {
    constructor(options) {
      this.options = options;
      this.supportedLngs = this.options.supportedLngs || false;
      this.logger = baseLogger.create("languageUtils");
    }
    getScriptPartFromCode(code) {
      code = getCleanedCode(code);
      if (!code || !code.includes("-"))
        return null;
      const p = code.split("-");
      if (p.length === 2)
        return null;
      p.pop();
      if (p[p.length - 1].toLowerCase() === "x")
        return null;
      return this.formatLanguageCode(p.join("-"));
    }
    getLanguagePartFromCode(code) {
      code = getCleanedCode(code);
      if (!code || !code.includes("-"))
        return code;
      const p = code.split("-");
      return this.formatLanguageCode(p[0]);
    }
    formatLanguageCode(code) {
      if (isString(code) && code.includes("-")) {
        let formattedCode;
        try {
          formattedCode = Intl.getCanonicalLocales(code)[0];
        } catch (e2) {
        }
        if (formattedCode && this.options.lowerCaseLng) {
          formattedCode = formattedCode.toLowerCase();
        }
        if (formattedCode)
          return formattedCode;
        if (this.options.lowerCaseLng) {
          return code.toLowerCase();
        }
        return code;
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
    isSupportedCode(code) {
      if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }
      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.includes(code);
    }
    getBestMatchFromCodes(codes) {
      if (!codes)
        return null;
      let found;
      codes.forEach((code) => {
        if (found)
          return;
        const cleanedLng = this.formatLanguageCode(code);
        if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng))
          found = cleanedLng;
      });
      if (!found && this.options.supportedLngs) {
        codes.forEach((code) => {
          if (found)
            return;
          const lngScOnly = this.getScriptPartFromCode(code);
          if (this.isSupportedCode(lngScOnly))
            return found = lngScOnly;
          const lngOnly = this.getLanguagePartFromCode(code);
          if (this.isSupportedCode(lngOnly))
            return found = lngOnly;
          found = this.options.supportedLngs.find((supportedLng) => {
            if (supportedLng === lngOnly)
              return true;
            if (!supportedLng.includes("-") && !lngOnly.includes("-"))
              return false;
            if (supportedLng.includes("-") && !lngOnly.includes("-") && supportedLng.slice(0, supportedLng.indexOf("-")) === lngOnly)
              return true;
            if (supportedLng.startsWith(lngOnly) && lngOnly.length > 1)
              return true;
            return false;
          });
        });
      }
      if (!found)
        found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
    getFallbackCodes(fallbacks, code) {
      if (!fallbacks)
        return [];
      if (typeof fallbacks === "function")
        fallbacks = fallbacks(code);
      if (isString(fallbacks))
        fallbacks = [fallbacks];
      if (Array.isArray(fallbacks))
        return fallbacks;
      if (!code)
        return fallbacks.default || [];
      let found = fallbacks[code];
      if (!found)
        found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found)
        found = fallbacks[this.formatLanguageCode(code)];
      if (!found)
        found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found)
        found = fallbacks.default;
      return found || [];
    }
    toResolveHierarchy(code, fallbackCode) {
      const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
      const codes = [];
      const addCode = (c) => {
        if (!c)
          return;
        if (this.isSupportedCode(c)) {
          codes.push(c);
        } else {
          this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
        }
      };
      if (isString(code) && (code.includes("-") || code.includes("_"))) {
        if (this.options.load !== "languageOnly")
          addCode(this.formatLanguageCode(code));
        if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
          addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== "currentOnly")
          addCode(this.getLanguagePartFromCode(code));
      } else if (isString(code)) {
        addCode(this.formatLanguageCode(code));
      }
      fallbackCodes.forEach((fc) => {
        if (!codes.includes(fc))
          addCode(this.formatLanguageCode(fc));
      });
      return codes;
    }
  };
  var suffixesOrder = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
  };
  var dummyRule = {
    select: (count) => count === 1 ? "one" : "other",
    resolvedOptions: () => ({
      pluralCategories: ["one", "other"]
    })
  };
  var PluralResolver = class {
    constructor(languageUtils, options = {}) {
      this.languageUtils = languageUtils;
      this.options = options;
      this.logger = baseLogger.create("pluralResolver");
      this.pluralRulesCache = {};
    }
    clearCache() {
      this.pluralRulesCache = {};
    }
    getRule(code, options = {}) {
      const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
      const type = options.ordinal ? "ordinal" : "cardinal";
      const cacheKey = JSON.stringify({
        cleanedCode,
        type
      });
      if (cacheKey in this.pluralRulesCache) {
        return this.pluralRulesCache[cacheKey];
      }
      let rule;
      try {
        rule = new Intl.PluralRules(cleanedCode, {
          type
        });
      } catch (err) {
        if (typeof Intl === "undefined") {
          this.logger.error("No Intl support, please use an Intl polyfill!");
          return dummyRule;
        }
        if (!code.match(/-|_/))
          return dummyRule;
        const lngPart = this.languageUtils.getLanguagePartFromCode(code);
        rule = this.getRule(lngPart, options);
      }
      this.pluralRulesCache[cacheKey] = rule;
      return rule;
    }
    needsPlural(code, options = {}) {
      let rule = this.getRule(code, options);
      if (!rule)
        rule = this.getRule("dev", options);
      return rule?.resolvedOptions().pluralCategories.length > 1;
    }
    getPluralFormsOfKey(code, key, options = {}) {
      return this.getSuffixes(code, options).map((suffix2) => `${key}${suffix2}`);
    }
    getSuffixes(code, options = {}) {
      let rule = this.getRule(code, options);
      if (!rule)
        rule = this.getRule("dev", options);
      if (!rule)
        return [];
      return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
    }
    getSuffix(code, count, options = {}) {
      const rule = this.getRule(code, options);
      if (rule) {
        return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
      }
      this.logger.warn(`no plural rule found for: ${code}`);
      return this.getSuffix("dev", count, options);
    }
  };
  var deepFindWithDefaults = (data, defaultData, key, keySeparator = ".", ignoreJSONStructure = true) => {
    let path2 = getPathWithDefaults(data, defaultData, key);
    if (!path2 && ignoreJSONStructure && isString(key)) {
      path2 = deepFind(data, key, keySeparator);
      if (path2 === void 0)
        path2 = deepFind(defaultData, key, keySeparator);
    }
    return path2;
  };
  var regexSafe = (val) => val.replace(/\$/g, "$$$$");
  var Interpolator = class {
    constructor(options = {}) {
      this.logger = baseLogger.create("interpolator");
      this.options = options;
      this.format = options?.interpolation?.format || ((value) => value);
      this.init(options);
    }
    init(options = {}) {
      if (!options.interpolation)
        options.interpolation = {
          escapeValue: true
        };
      const {
        escape: escape$1,
        escapeValue,
        useRawValueToEscape,
        prefix: prefix3,
        prefixEscaped,
        suffix: suffix2,
        suffixEscaped,
        formatSeparator,
        unescapeSuffix,
        unescapePrefix,
        nestingPrefix,
        nestingPrefixEscaped,
        nestingSuffix,
        nestingSuffixEscaped,
        nestingOptionsSeparator,
        maxReplaces,
        alwaysFormat
      } = options.interpolation;
      this.escape = escape$1 !== void 0 ? escape$1 : escape;
      this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
      this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
      this.prefix = prefix3 ? regexEscape(prefix3) : prefixEscaped || "{{";
      this.suffix = suffix2 ? regexEscape(suffix2) : suffixEscaped || "}}";
      this.formatSeparator = formatSeparator || ",";
      this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix ? regexEscape(unescapePrefix) : "-";
      this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix ? regexEscape(unescapeSuffix) : "";
      this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
      this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
      this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
      this.maxReplaces = maxReplaces || 1e3;
      this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
      this.resetRegExp();
    }
    reset() {
      if (this.options)
        this.init(this.options);
    }
    resetRegExp() {
      const getOrResetRegExp = (existingRegExp, pattern) => {
        if (existingRegExp?.source === pattern) {
          existingRegExp.lastIndex = 0;
          return existingRegExp;
        }
        return new RegExp(pattern, "g");
      };
      this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
      this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
      this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
    }
    interpolate(str, data, lng, options) {
      let match;
      let value;
      let replaces;
      const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      const handleFormat = (key) => {
        if (!key.includes(this.formatSeparator)) {
          const path2 = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat ? this.format(path2, void 0, lng, {
            ...options,
            ...data,
            interpolationkey: key
          }) : path2;
        }
        const p = key.split(this.formatSeparator);
        const k = p.shift().trim();
        const f = p.join(this.formatSeparator).trim();
        return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
          ...options,
          ...data,
          interpolationkey: k
        });
      };
      this.resetRegExp();
      if (!this.escapeValue && typeof str === "string" && /\$t\([^)]*\{[^}]*\{\{/.test(str)) {
        this.logger.warn("nesting options string contains interpolated variables with escapeValue: false \u2014 if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");
      }
      const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
      const skipOnVariables = options?.interpolation?.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
      const todos = [{
        regex: this.regexpUnescape,
        safeValue: (val) => regexSafe(val)
      }, {
        regex: this.regexp,
        safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
      }];
      todos.forEach((todo) => {
        replaces = 0;
        while (match = todo.regex.exec(str)) {
          const matchedVar = match[1].trim();
          value = handleFormat(matchedVar);
          if (value === void 0) {
            if (typeof missingInterpolationHandler === "function") {
              const temp2 = missingInterpolationHandler(str, match, options);
              value = isString(temp2) ? temp2 : "";
            } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
              value = "";
            } else if (skipOnVariables) {
              value = match[0];
              continue;
            } else {
              this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
              value = "";
            }
          } else if (!isString(value) && !this.useRawValueToEscape) {
            value = makeString(value);
          }
          const safeValue = todo.safeValue(value);
          str = str.replace(match[0], safeValue);
          if (skipOnVariables) {
            todo.regex.lastIndex += value.length;
            todo.regex.lastIndex -= match[0].length;
          } else {
            todo.regex.lastIndex = 0;
          }
          replaces++;
          if (replaces >= this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
    nest(str, fc, options = {}) {
      let match;
      let value;
      let clonedOptions;
      const handleHasOptions = (key, inheritedOptions) => {
        const sep = this.nestingOptionsSeparator;
        if (!key.includes(sep))
          return key;
        const c = key.split(new RegExp(`${regexEscape(sep)}[ ]*{`));
        let optionsString = `{${c[1]}`;
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        const matchedSingleQuotes = optionsString.match(/'/g);
        const matchedDoubleQuotes = optionsString.match(/"/g);
        if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || (matchedDoubleQuotes?.length ?? 0) % 2 !== 0) {
          optionsString = optionsString.replace(/'/g, '"');
        }
        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions)
            clonedOptions = {
              ...inheritedOptions,
              ...clonedOptions
            };
        } catch (e2) {
          this.logger.warn(`failed parsing options string in nesting for key ${key}`, e2);
          return `${key}${sep}${optionsString}`;
        }
        if (clonedOptions.defaultValue && clonedOptions.defaultValue.includes(this.prefix))
          delete clonedOptions.defaultValue;
        return key;
      };
      while (match = this.nestingRegexp.exec(str)) {
        let formatters = [];
        clonedOptions = {
          ...options
        };
        clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
        clonedOptions.applyPostProcessor = false;
        delete clonedOptions.defaultValue;
        const keyEndIndex = /{.*}/.test(match[1]) ? match[1].lastIndexOf("}") + 1 : match[1].indexOf(this.formatSeparator);
        if (keyEndIndex !== -1) {
          formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map((elem) => elem.trim()).filter(Boolean);
          match[1] = match[1].slice(0, keyEndIndex);
        }
        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && !isString(value))
          return value;
        if (!isString(value))
          value = makeString(value);
        if (!value) {
          this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
          value = "";
        }
        if (formatters.length) {
          value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
            ...options,
            interpolationkey: match[1].trim()
          }), value.trim());
        }
        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }
      return str;
    }
  };
  var parseFormatStr = (formatStr) => {
    let formatName = formatStr.toLowerCase().trim();
    const formatOptions = {};
    if (formatStr.includes("(")) {
      const p = formatStr.split("(");
      formatName = p[0].toLowerCase().trim();
      const optStr = p[1].slice(0, -1);
      if (formatName === "currency" && !optStr.includes(":")) {
        if (!formatOptions.currency)
          formatOptions.currency = optStr.trim();
      } else if (formatName === "relativetime" && !optStr.includes(":")) {
        if (!formatOptions.range)
          formatOptions.range = optStr.trim();
      } else {
        const opts = optStr.split(";");
        opts.forEach((opt) => {
          if (opt) {
            const [key, ...rest] = opt.split(":");
            const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
            const trimmedKey = key.trim();
            if (!formatOptions[trimmedKey])
              formatOptions[trimmedKey] = val;
            if (val === "false")
              formatOptions[trimmedKey] = false;
            if (val === "true")
              formatOptions[trimmedKey] = true;
            if (!isNaN(val))
              formatOptions[trimmedKey] = parseInt(val, 10);
          }
        });
      }
    }
    return {
      formatName,
      formatOptions
    };
  };
  var createCachedFormatter = (fn) => {
    const cache = {};
    return (v, l, o) => {
      let optForCache = o;
      if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) {
        optForCache = {
          ...optForCache,
          [o.interpolationkey]: void 0
        };
      }
      const key = l + JSON.stringify(optForCache);
      let frm = cache[key];
      if (!frm) {
        frm = fn(getCleanedCode(l), o);
        cache[key] = frm;
      }
      return frm(v);
    };
  };
  var createNonCachedFormatter = (fn) => (v, l, o) => fn(getCleanedCode(l), o)(v);
  var Formatter = class {
    constructor(options = {}) {
      this.logger = baseLogger.create("formatter");
      this.options = options;
      this.init(options);
    }
    init(services, options = {
      interpolation: {}
    }) {
      this.formatSeparator = options.interpolation.formatSeparator || ",";
      const cf = options.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
      this.formats = {
        number: cf((lng, opt) => {
          const formatter = new Intl.NumberFormat(lng, {
            ...opt
          });
          return (val) => formatter.format(val);
        }),
        currency: cf((lng, opt) => {
          const formatter = new Intl.NumberFormat(lng, {
            ...opt,
            style: "currency"
          });
          return (val) => formatter.format(val);
        }),
        datetime: cf((lng, opt) => {
          const formatter = new Intl.DateTimeFormat(lng, {
            ...opt
          });
          return (val) => formatter.format(val);
        }),
        relativetime: cf((lng, opt) => {
          const formatter = new Intl.RelativeTimeFormat(lng, {
            ...opt
          });
          return (val) => formatter.format(val, opt.range || "day");
        }),
        list: cf((lng, opt) => {
          const formatter = new Intl.ListFormat(lng, {
            ...opt
          });
          return (val) => formatter.format(val);
        })
      };
    }
    add(name, fc) {
      this.formats[name.toLowerCase().trim()] = fc;
    }
    addCached(name, fc) {
      this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
    }
    format(value, format, lng, options = {}) {
      if (!format)
        return value;
      if (value == null)
        return value;
      const formats = format.split(this.formatSeparator);
      if (formats.length > 1 && formats[0].indexOf("(") > 1 && !formats[0].includes(")") && formats.find((f) => f.includes(")"))) {
        const lastIndex = formats.findIndex((f) => f.includes(")"));
        formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
      }
      const result = formats.reduce((mem, f) => {
        const {
          formatName,
          formatOptions
        } = parseFormatStr(f);
        if (this.formats[formatName]) {
          let formatted = mem;
          try {
            const valOptions = options?.formatParams?.[options.interpolationkey] || {};
            const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
            formatted = this.formats[formatName](mem, l, {
              ...formatOptions,
              ...options,
              ...valOptions
            });
          } catch (error2) {
            this.logger.warn(error2);
          }
          return formatted;
        } else {
          this.logger.warn(`there was no format function for ${formatName}`);
        }
        return mem;
      }, value);
      return result;
    }
  };
  var removePending = (q, name) => {
    if (q.pending[name] !== void 0) {
      delete q.pending[name];
      q.pendingCount--;
    }
  };
  var Connector = class extends EventEmitter {
    constructor(backend, store, services, options = {}) {
      super();
      this.backend = backend;
      this.store = store;
      this.services = services;
      this.languageUtils = services.languageUtils;
      this.options = options;
      this.logger = baseLogger.create("backendConnector");
      this.waitingReads = [];
      this.maxParallelReads = options.maxParallelReads || 10;
      this.readingCalls = 0;
      this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
      this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
      this.state = {};
      this.queue = [];
      this.backend?.init?.(services, options.backend, options);
    }
    queueLoad(languages4, namespaces, options, callback) {
      const toLoad = {};
      const pending = {};
      const toLoadLanguages = {};
      const toLoadNamespaces = {};
      languages4.forEach((lng) => {
        let hasAllNamespaces = true;
        namespaces.forEach((ns) => {
          const name = `${lng}|${ns}`;
          if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
            this.state[name] = 2;
          } else if (this.state[name] < 0)
            ;
          else if (this.state[name] === 1) {
            if (pending[name] === void 0)
              pending[name] = true;
          } else {
            this.state[name] = 1;
            hasAllNamespaces = false;
            if (pending[name] === void 0)
              pending[name] = true;
            if (toLoad[name] === void 0)
              toLoad[name] = true;
            if (toLoadNamespaces[ns] === void 0)
              toLoadNamespaces[ns] = true;
          }
        });
        if (!hasAllNamespaces)
          toLoadLanguages[lng] = true;
      });
      if (Object.keys(toLoad).length || Object.keys(pending).length) {
        this.queue.push({
          pending,
          pendingCount: Object.keys(pending).length,
          loaded: {},
          errors: [],
          callback
        });
      }
      return {
        toLoad: Object.keys(toLoad),
        pending: Object.keys(pending),
        toLoadLanguages: Object.keys(toLoadLanguages),
        toLoadNamespaces: Object.keys(toLoadNamespaces)
      };
    }
    loaded(name, err, data) {
      const s = name.split("|");
      const lng = s[0];
      const ns = s[1];
      if (err)
        this.emit("failedLoading", lng, ns, err);
      if (!err && data) {
        this.store.addResourceBundle(lng, ns, data, void 0, void 0, {
          skipCopy: true
        });
      }
      this.state[name] = err ? -1 : 2;
      if (err && data)
        this.state[name] = 0;
      const loaded = {};
      this.queue.forEach((q) => {
        pushPath(q.loaded, [lng], ns);
        removePending(q, name);
        if (err)
          q.errors.push(err);
        if (q.pendingCount === 0 && !q.done) {
          Object.keys(q.loaded).forEach((l) => {
            if (!loaded[l])
              loaded[l] = {};
            const loadedKeys = q.loaded[l];
            if (loadedKeys.length) {
              loadedKeys.forEach((n) => {
                if (loaded[l][n] === void 0)
                  loaded[l][n] = true;
              });
            }
          });
          q.done = true;
          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      });
      this.emit("loaded", loaded);
      this.queue = this.queue.filter((q) => !q.done);
    }
    read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
      if (!lng.length)
        return callback(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng,
          ns,
          fcName,
          tried,
          wait,
          callback
        });
        return;
      }
      this.readingCalls++;
      const resolver = (err, data) => {
        this.readingCalls--;
        if (this.waitingReads.length > 0) {
          const next = this.waitingReads.shift();
          this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
        }
        if (err && data && tried < this.maxRetries) {
          setTimeout(() => {
            this.read(lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }
        callback(err, data);
      };
      const fc = this.backend[fcName].bind(this.backend);
      if (fc.length === 2) {
        try {
          const r = fc(lng, ns);
          if (r && typeof r.then === "function") {
            r.then((data) => resolver(null, data)).catch(resolver);
          } else {
            resolver(null, r);
          }
        } catch (err) {
          resolver(err);
        }
        return;
      }
      return fc(lng, ns, resolver);
    }
    prepareLoading(languages4, namespaces, options = {}, callback) {
      if (!this.backend) {
        this.logger.warn("No backend was added via i18next.use. Will not load resources.");
        return callback && callback();
      }
      if (isString(languages4))
        languages4 = this.languageUtils.toResolveHierarchy(languages4);
      if (isString(namespaces))
        namespaces = [namespaces];
      const toLoad = this.queueLoad(languages4, namespaces, options, callback);
      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length)
          callback();
        return null;
      }
      toLoad.toLoad.forEach((name) => {
        this.loadOne(name);
      });
    }
    load(languages4, namespaces, callback) {
      this.prepareLoading(languages4, namespaces, {}, callback);
    }
    reload(languages4, namespaces, callback) {
      this.prepareLoading(languages4, namespaces, {
        reload: true
      }, callback);
    }
    loadOne(name, prefix3 = "") {
      const s = name.split("|");
      const lng = s[0];
      const ns = s[1];
      this.read(lng, ns, "read", void 0, void 0, (err, data) => {
        if (err)
          this.logger.warn(`${prefix3}loading namespace ${ns} for language ${lng} failed`, err);
        if (!err && data)
          this.logger.log(`${prefix3}loaded namespace ${ns} for language ${lng}`, data);
        this.loaded(name, err, data);
      });
    }
    saveMissing(languages4, namespace, key, fallbackValue, isUpdate, options = {}, clb = () => {
    }) {
      if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
        this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      if (key === void 0 || key === null || key === "")
        return;
      if (this.backend?.create) {
        const opts = {
          ...options,
          isUpdate
        };
        const fc = this.backend.create.bind(this.backend);
        if (fc.length < 6) {
          try {
            let r;
            if (fc.length === 5) {
              r = fc(languages4, namespace, key, fallbackValue, opts);
            } else {
              r = fc(languages4, namespace, key, fallbackValue);
            }
            if (r && typeof r.then === "function") {
              r.then((data) => clb(null, data)).catch(clb);
            } else {
              clb(null, r);
            }
          } catch (err) {
            clb(err);
          }
        } else {
          fc(languages4, namespace, key, fallbackValue, clb, opts);
        }
      }
      if (!languages4 || !languages4[0])
        return;
      this.store.addResource(languages4[0], namespace, key, fallbackValue);
    }
  };
  var get = () => ({
    debug: false,
    initAsync: true,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: "all",
    preload: false,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    enableSelector: false,
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: "fallback",
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: false,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: (args) => {
      let ret = {};
      if (typeof args[1] === "object")
        ret = args[1];
      if (isString(args[1]))
        ret.defaultValue = args[1];
      if (isString(args[2]))
        ret.tDescription = args[2];
      if (typeof args[2] === "object" || typeof args[3] === "object") {
        const options = args[3] || args[2];
        Object.keys(options).forEach((key) => {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: true
    },
    cacheInBuiltFormats: true
  });
  var transformOptions = (options) => {
    if (isString(options.ns))
      options.ns = [options.ns];
    if (isString(options.fallbackLng))
      options.fallbackLng = [options.fallbackLng];
    if (isString(options.fallbackNS))
      options.fallbackNS = [options.fallbackNS];
    if (options.supportedLngs && !options.supportedLngs.includes("cimode")) {
      options.supportedLngs = options.supportedLngs.concat(["cimode"]);
    }
    return options;
  };
  var noop = () => {
  };
  var bindMemberFunctions = (inst) => {
    const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
    mems.forEach((mem) => {
      if (typeof inst[mem] === "function") {
        inst[mem] = inst[mem].bind(inst);
      }
    });
  };
  var I18n = class extends EventEmitter {
    constructor(options = {}, callback) {
      super();
      this.options = transformOptions(options);
      this.services = {};
      this.logger = baseLogger;
      this.modules = {
        external: []
      };
      bindMemberFunctions(this);
      if (callback && !this.isInitialized && !options.isClone) {
        if (!this.options.initAsync) {
          this.init(options, callback);
          return this;
        }
        setTimeout(() => {
          this.init(options, callback);
        }, 0);
      }
    }
    init(options = {}, callback) {
      this.isInitializing = true;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (options.defaultNS == null && options.ns) {
        if (isString(options.ns)) {
          options.defaultNS = options.ns;
        } else if (!options.ns.includes("translation")) {
          options.defaultNS = options.ns[0];
        }
      }
      const defOpts = get();
      this.options = {
        ...defOpts,
        ...this.options,
        ...transformOptions(options)
      };
      this.options.interpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation
      };
      if (options.keySeparator !== void 0) {
        this.options.userDefinedKeySeparator = options.keySeparator;
      }
      if (options.nsSeparator !== void 0) {
        this.options.userDefinedNsSeparator = options.nsSeparator;
      }
      if (typeof this.options.overloadTranslationOptionHandler !== "function") {
        this.options.overloadTranslationOptionHandler = defOpts.overloadTranslationOptionHandler;
      }
      const createClassOnDemand = (ClassOrObject) => {
        if (!ClassOrObject)
          return null;
        if (typeof ClassOrObject === "function")
          return new ClassOrObject();
        return ClassOrObject;
      };
      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }
        let formatter;
        if (this.modules.formatter) {
          formatter = this.modules.formatter;
        } else {
          formatter = Formatter;
        }
        const lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        const s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator
        });
        if (formatter) {
          s.formatter = createClassOnDemand(formatter);
          if (s.formatter.init)
            s.formatter.init(s, this.options);
          this.options.interpolation.format = s.formatter.format.bind(s.formatter);
        }
        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on("*", (event, ...args) => {
          this.emit(event, ...args);
        });
        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          if (s.languageDetector.init)
            s.languageDetector.init(s, this.options.detection, this.options);
        }
        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init)
            s.i18nFormat.init(this);
        }
        this.translator = new Translator(this.services, this.options);
        this.translator.on("*", (event, ...args) => {
          this.emit(event, ...args);
        });
        this.modules.external.forEach((m) => {
          if (m.init)
            m.init(this);
        });
      }
      this.format = this.options.interpolation.format;
      if (!callback)
        callback = noop;
      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== "dev")
          this.options.lng = codes[0];
      }
      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn("init: no languageDetector is used and no lng is defined");
      }
      const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      storeApi.forEach((fcName) => {
        this[fcName] = (...args) => this.store[fcName](...args);
      });
      const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      storeApiChained.forEach((fcName) => {
        this[fcName] = (...args) => {
          this.store[fcName](...args);
          return this;
        };
      });
      const deferred = defer();
      const load = () => {
        const finish2 = (err, t2) => {
          this.isInitializing = false;
          if (this.isInitialized && !this.initializedStoreOnce)
            this.logger.warn("init: i18next is already initialized. You should call init just once!");
          this.isInitialized = true;
          if (!this.options.isClone)
            this.logger.log("initialized", this.options);
          this.emit("initialized", this.options);
          deferred.resolve(t2);
          callback(err, t2);
        };
        if ((this.languages || this.isLanguageChangingTo) && !this.isInitialized)
          return finish2(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, finish2);
      };
      if (this.options.resources || !this.options.initAsync) {
        load();
      } else {
        setTimeout(load, 0);
      }
      return deferred;
    }
    loadResources(language, callback = noop) {
      let usedCallback = callback;
      const usedLng = isString(language) ? language : this.language;
      if (typeof language === "function")
        usedCallback = language;
      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
          return usedCallback();
        const toLoad = [];
        const append = (lng) => {
          if (!lng)
            return;
          if (lng === "cimode")
            return;
          const lngs = this.services.languageUtils.toResolveHierarchy(lng);
          lngs.forEach((l) => {
            if (l === "cimode")
              return;
            if (!toLoad.includes(l))
              toLoad.push(l);
          });
        };
        if (!usedLng) {
          const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach((l) => append(l));
        } else {
          append(usedLng);
        }
        this.options.preload?.forEach?.((l) => append(l));
        this.services.backendConnector.load(toLoad, this.options.ns, (e2) => {
          if (!e2 && !this.resolvedLanguage && this.language)
            this.setResolvedLanguage(this.language);
          usedCallback(e2);
        });
      } else {
        usedCallback(null);
      }
    }
    reloadResources(lngs, ns, callback) {
      const deferred = defer();
      if (typeof lngs === "function") {
        callback = lngs;
        lngs = void 0;
      }
      if (typeof ns === "function") {
        callback = ns;
        ns = void 0;
      }
      if (!lngs)
        lngs = this.languages;
      if (!ns)
        ns = this.options.ns;
      if (!callback)
        callback = noop;
      this.services.backendConnector.reload(lngs, ns, (err) => {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
    use(module) {
      if (!module)
        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!module.type)
        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      if (module.type === "backend") {
        this.modules.backend = module;
      }
      if (module.type === "logger" || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }
      if (module.type === "languageDetector") {
        this.modules.languageDetector = module;
      }
      if (module.type === "i18nFormat") {
        this.modules.i18nFormat = module;
      }
      if (module.type === "postProcessor") {
        postProcessor.addPostProcessor(module);
      }
      if (module.type === "formatter") {
        this.modules.formatter = module;
      }
      if (module.type === "3rdParty") {
        this.modules.external.push(module);
      }
      return this;
    }
    setResolvedLanguage(l) {
      if (!l || !this.languages)
        return;
      if (["cimode", "dev"].includes(l))
        return;
      for (let li = 0; li < this.languages.length; li++) {
        const lngInLngs = this.languages[li];
        if (["cimode", "dev"].includes(lngInLngs))
          continue;
        if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
          this.resolvedLanguage = lngInLngs;
          break;
        }
      }
      if (!this.resolvedLanguage && !this.languages.includes(l) && this.store.hasLanguageSomeTranslations(l)) {
        this.resolvedLanguage = l;
        this.languages.unshift(l);
      }
    }
    changeLanguage(lng, callback) {
      this.isLanguageChangingTo = lng;
      const deferred = defer();
      this.emit("languageChanging", lng);
      const setLngProps = (l) => {
        this.language = l;
        this.languages = this.services.languageUtils.toResolveHierarchy(l);
        this.resolvedLanguage = void 0;
        this.setResolvedLanguage(l);
      };
      const done = (err, l) => {
        if (l) {
          if (this.isLanguageChangingTo === lng) {
            setLngProps(l);
            this.translator.changeLanguage(l);
            this.isLanguageChangingTo = void 0;
            this.emit("languageChanged", l);
            this.logger.log("languageChanged", l);
          }
        } else {
          this.isLanguageChangingTo = void 0;
        }
        deferred.resolve((...args) => this.t(...args));
        if (callback)
          callback(err, (...args) => this.t(...args));
      };
      const setLng = (lngs) => {
        if (!lng && !lngs && this.services.languageDetector)
          lngs = [];
        const fl = isString(lngs) ? lngs : lngs && lngs[0];
        const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString(lngs) ? [lngs] : lngs);
        if (l) {
          if (!this.language) {
            setLngProps(l);
          }
          if (!this.translator.language)
            this.translator.changeLanguage(l);
          this.services.languageDetector?.cacheUserLanguage?.(l);
        }
        this.loadResources(l, (err) => {
          done(err, l);
        });
      };
      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        if (this.services.languageDetector.detect.length === 0) {
          this.services.languageDetector.detect().then(setLng);
        } else {
          this.services.languageDetector.detect(setLng);
        }
      } else {
        setLng(lng);
      }
      return deferred;
    }
    getFixedT(lng, ns, keyPrefix, fixedOpts) {
      const scopeNs = fixedOpts?.scopeNs;
      const fixedT = (key, opts, ...rest) => {
        let o;
        if (typeof opts !== "object") {
          o = this.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          o = {
            ...opts
          };
        }
        o.lng = o.lng || fixedT.lng;
        o.lngs = o.lngs || fixedT.lngs;
        const explicitCallNs = o.ns !== void 0 && o.ns !== null;
        o.ns = o.ns || fixedT.ns;
        if (o.keyPrefix !== "")
          o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
        const selectorOpts = {
          ...this.options,
          ...o
        };
        if (Array.isArray(scopeNs) && !explicitCallNs)
          selectorOpts.ns = scopeNs;
        if (typeof o.keyPrefix === "function")
          o.keyPrefix = keysFromSelector(o.keyPrefix, selectorOpts);
        const keySeparator = this.options.keySeparator || ".";
        let resultKey;
        if (o.keyPrefix && Array.isArray(key)) {
          resultKey = key.map((k) => {
            if (typeof k === "function")
              k = keysFromSelector(k, selectorOpts);
            return `${o.keyPrefix}${keySeparator}${k}`;
          });
        } else {
          if (typeof key === "function")
            key = keysFromSelector(key, selectorOpts);
          resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
        }
        return this.t(resultKey, o);
      };
      if (isString(lng)) {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }
      fixedT.ns = ns;
      fixedT.keyPrefix = keyPrefix;
      return fixedT;
    }
    t(...args) {
      return this.translator?.translate(...args);
    }
    exists(...args) {
      return this.translator?.exists(...args);
    }
    setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
    hasLoadedNamespace(ns, options = {}) {
      if (!this.isInitialized) {
        this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
        return false;
      }
      if (!this.languages || !this.languages.length) {
        this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
        return false;
      }
      const lng = options.lng || this.resolvedLanguage || this.languages[0];
      const fallbackLng = this.options ? this.options.fallbackLng : false;
      const lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === "cimode")
        return true;
      const loadNotPending = (l, n) => {
        const loadState = this.services.backendConnector.state[`${l}|${n}`];
        return loadState === -1 || loadState === 0 || loadState === 2;
      };
      if (options.precheck) {
        const preResult = options.precheck(this, loadNotPending);
        if (preResult !== void 0)
          return preResult;
      }
      if (this.hasResourceBundle(lng, ns))
        return true;
      if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
        return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
        return true;
      return false;
    }
    loadNamespaces(ns, callback) {
      const deferred = defer();
      if (!this.options.ns) {
        if (callback)
          callback();
        return Promise.resolve();
      }
      if (isString(ns))
        ns = [ns];
      ns.forEach((n) => {
        if (!this.options.ns.includes(n))
          this.options.ns.push(n);
      });
      this.loadResources((err) => {
        deferred.resolve();
        if (callback)
          callback(err);
      });
      return deferred;
    }
    loadLanguages(lngs, callback) {
      const deferred = defer();
      if (isString(lngs))
        lngs = [lngs];
      const preloaded = this.options.preload || [];
      const newLngs = lngs.filter((lng) => !preloaded.includes(lng) && this.services.languageUtils.isSupportedCode(lng));
      if (!newLngs.length) {
        if (callback)
          callback();
        return Promise.resolve();
      }
      this.options.preload = preloaded.concat(newLngs);
      this.loadResources((err) => {
        deferred.resolve();
        if (callback)
          callback(err);
      });
      return deferred;
    }
    dir(lng) {
      if (!lng)
        lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
      if (!lng)
        return "rtl";
      try {
        const l = new Intl.Locale(lng);
        if (l && l.getTextInfo) {
          const ti = l.getTextInfo();
          if (ti && ti.direction)
            return ti.direction;
        }
      } catch (e2) {
      }
      const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
      const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
      if (lng.toLowerCase().indexOf("-latn") > 1)
        return "ltr";
      return rtlLngs.includes(languageUtils.getLanguagePartFromCode(lng)) || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
    static createInstance(options = {}, callback) {
      const instance2 = new I18n(options, callback);
      instance2.createInstance = I18n.createInstance;
      return instance2;
    }
    cloneInstance(options = {}, callback = noop) {
      const forkResourceStore = options.forkResourceStore;
      if (forkResourceStore)
        delete options.forkResourceStore;
      const mergedOptions = {
        ...this.options,
        ...options,
        ...{
          isClone: true
        }
      };
      const clone = new I18n(mergedOptions);
      if (options.debug !== void 0 || options.prefix !== void 0) {
        clone.logger = clone.logger.clone(options);
      }
      const membersToCopy = ["store", "services", "language"];
      membersToCopy.forEach((m) => {
        clone[m] = this[m];
      });
      clone.services = {
        ...this.services
      };
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      if (forkResourceStore) {
        const clonedData = Object.keys(this.store.data).reduce((prev, l) => {
          prev[l] = {
            ...this.store.data[l]
          };
          prev[l] = Object.keys(prev[l]).reduce((acc, n) => {
            acc[n] = {
              ...prev[l][n]
            };
            return acc;
          }, prev[l]);
          return prev;
        }, {});
        clone.store = new ResourceStore(clonedData, mergedOptions);
        clone.services.resourceStore = clone.store;
      }
      if (options.interpolation) {
        const defOpts = get();
        const mergedInterpolation = {
          ...defOpts.interpolation,
          ...this.options.interpolation,
          ...options.interpolation
        };
        const mergedForInterpolator = {
          ...mergedOptions,
          interpolation: mergedInterpolation
        };
        clone.services.interpolator = new Interpolator(mergedForInterpolator);
      }
      clone.translator = new Translator(clone.services, mergedOptions);
      clone.translator.on("*", (event, ...args) => {
        clone.emit(event, ...args);
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = mergedOptions;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
    toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  };
  var instance = I18n.createInstance();
  var createInstance = instance.createInstance;
  var dir = instance.dir;
  var init = instance.init;
  var loadResources = instance.loadResources;
  var reloadResources = instance.reloadResources;
  var use = instance.use;
  var changeLanguage = instance.changeLanguage;
  var getFixedT = instance.getFixedT;
  var t = instance.t;
  var exists = instance.exists;
  var setDefaultNamespace = instance.setDefaultNamespace;
  var hasLoadedNamespace = instance.hasLoadedNamespace;
  var loadNamespaces = instance.loadNamespaces;
  var loadLanguages = instance.loadLanguages;

  // node_modules/.pnpm/i18next-browser-languagedetector@8.2.0/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
  var {
    slice,
    forEach
  } = [];
  function defaults(obj) {
    forEach.call(slice.call(arguments, 1), (source) => {
      if (source) {
        for (const prop in source) {
          if (obj[prop] === void 0)
            obj[prop] = source[prop];
        }
      }
    });
    return obj;
  }
  function hasXSS(input) {
    if (typeof input !== "string")
      return false;
    const xssPatterns = [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i];
    return xssPatterns.some((pattern) => pattern.test(input));
  }
  var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  var serializeCookie = function(name, val) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      path: "/"
    };
    const opt = options;
    const value = encodeURIComponent(val);
    let str = `${name}=${value}`;
    if (opt.maxAge > 0) {
      const maxAge = opt.maxAge - 0;
      if (Number.isNaN(maxAge))
        throw new Error("maxAge should be a Number");
      str += `; Max-Age=${Math.floor(maxAge)}`;
    }
    if (opt.domain) {
      if (!fieldContentRegExp.test(opt.domain)) {
        throw new TypeError("option domain is invalid");
      }
      str += `; Domain=${opt.domain}`;
    }
    if (opt.path) {
      if (!fieldContentRegExp.test(opt.path)) {
        throw new TypeError("option path is invalid");
      }
      str += `; Path=${opt.path}`;
    }
    if (opt.expires) {
      if (typeof opt.expires.toUTCString !== "function") {
        throw new TypeError("option expires is invalid");
      }
      str += `; Expires=${opt.expires.toUTCString()}`;
    }
    if (opt.httpOnly)
      str += "; HttpOnly";
    if (opt.secure)
      str += "; Secure";
    if (opt.sameSite) {
      const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
      switch (sameSite) {
        case true:
          str += "; SameSite=Strict";
          break;
        case "lax":
          str += "; SameSite=Lax";
          break;
        case "strict":
          str += "; SameSite=Strict";
          break;
        case "none":
          str += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    if (opt.partitioned)
      str += "; Partitioned";
    return str;
  };
  var cookie = {
    create(name, value, minutes, domain) {
      let cookieOptions = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        path: "/",
        sameSite: "strict"
      };
      if (minutes) {
        cookieOptions.expires = new Date();
        cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1e3);
      }
      if (domain)
        cookieOptions.domain = domain;
      document.cookie = serializeCookie(name, value, cookieOptions);
    },
    read(name) {
      const nameEQ = `${name}=`;
      const ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ")
          c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
          return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
    remove(name, domain) {
      this.create(name, "", -1, domain);
    }
  };
  var cookie$1 = {
    name: "cookie",
    lookup(_ref) {
      let {
        lookupCookie
      } = _ref;
      if (lookupCookie && typeof document !== "undefined") {
        return cookie.read(lookupCookie) || void 0;
      }
      return void 0;
    },
    cacheUserLanguage(lng, _ref2) {
      let {
        lookupCookie,
        cookieMinutes,
        cookieDomain,
        cookieOptions
      } = _ref2;
      if (lookupCookie && typeof document !== "undefined") {
        cookie.create(lookupCookie, lng, cookieMinutes, cookieDomain, cookieOptions);
      }
    }
  };
  var querystring = {
    name: "querystring",
    lookup(_ref) {
      let {
        lookupQuerystring
      } = _ref;
      let found;
      if (typeof window !== "undefined") {
        let {
          search
        } = window.location;
        if (!window.location.search && window.location.hash?.indexOf("?") > -1) {
          search = window.location.hash.substring(window.location.hash.indexOf("?"));
        }
        const query = search.substring(1);
        const params = query.split("&");
        for (let i = 0; i < params.length; i++) {
          const pos = params[i].indexOf("=");
          if (pos > 0) {
            const key = params[i].substring(0, pos);
            if (key === lookupQuerystring) {
              found = params[i].substring(pos + 1);
            }
          }
        }
      }
      return found;
    }
  };
  var hash = {
    name: "hash",
    lookup(_ref) {
      let {
        lookupHash,
        lookupFromHashIndex
      } = _ref;
      let found;
      if (typeof window !== "undefined") {
        const {
          hash: hash2
        } = window.location;
        if (hash2 && hash2.length > 2) {
          const query = hash2.substring(1);
          if (lookupHash) {
            const params = query.split("&");
            for (let i = 0; i < params.length; i++) {
              const pos = params[i].indexOf("=");
              if (pos > 0) {
                const key = params[i].substring(0, pos);
                if (key === lookupHash) {
                  found = params[i].substring(pos + 1);
                }
              }
            }
          }
          if (found)
            return found;
          if (!found && lookupFromHashIndex > -1) {
            const language = hash2.match(/\/([a-zA-Z-]*)/g);
            if (!Array.isArray(language))
              return void 0;
            const index = typeof lookupFromHashIndex === "number" ? lookupFromHashIndex : 0;
            return language[index]?.replace("/", "");
          }
        }
      }
      return found;
    }
  };
  var hasLocalStorageSupport = null;
  var localStorageAvailable = () => {
    if (hasLocalStorageSupport !== null)
      return hasLocalStorageSupport;
    try {
      hasLocalStorageSupport = typeof window !== "undefined" && window.localStorage !== null;
      if (!hasLocalStorageSupport) {
        return false;
      }
      const testKey = "i18next.translate.boo";
      window.localStorage.setItem(testKey, "foo");
      window.localStorage.removeItem(testKey);
    } catch (e2) {
      hasLocalStorageSupport = false;
    }
    return hasLocalStorageSupport;
  };
  var localStorage2 = {
    name: "localStorage",
    lookup(_ref) {
      let {
        lookupLocalStorage
      } = _ref;
      if (lookupLocalStorage && localStorageAvailable()) {
        return window.localStorage.getItem(lookupLocalStorage) || void 0;
      }
      return void 0;
    },
    cacheUserLanguage(lng, _ref2) {
      let {
        lookupLocalStorage
      } = _ref2;
      if (lookupLocalStorage && localStorageAvailable()) {
        window.localStorage.setItem(lookupLocalStorage, lng);
      }
    }
  };
  var hasSessionStorageSupport = null;
  var sessionStorageAvailable = () => {
    if (hasSessionStorageSupport !== null)
      return hasSessionStorageSupport;
    try {
      hasSessionStorageSupport = typeof window !== "undefined" && window.sessionStorage !== null;
      if (!hasSessionStorageSupport) {
        return false;
      }
      const testKey = "i18next.translate.boo";
      window.sessionStorage.setItem(testKey, "foo");
      window.sessionStorage.removeItem(testKey);
    } catch (e2) {
      hasSessionStorageSupport = false;
    }
    return hasSessionStorageSupport;
  };
  var sessionStorage = {
    name: "sessionStorage",
    lookup(_ref) {
      let {
        lookupSessionStorage
      } = _ref;
      if (lookupSessionStorage && sessionStorageAvailable()) {
        return window.sessionStorage.getItem(lookupSessionStorage) || void 0;
      }
      return void 0;
    },
    cacheUserLanguage(lng, _ref2) {
      let {
        lookupSessionStorage
      } = _ref2;
      if (lookupSessionStorage && sessionStorageAvailable()) {
        window.sessionStorage.setItem(lookupSessionStorage, lng);
      }
    }
  };
  var navigator$1 = {
    name: "navigator",
    lookup(options) {
      const found = [];
      if (typeof navigator !== "undefined") {
        const {
          languages: languages4,
          userLanguage,
          language
        } = navigator;
        if (languages4) {
          for (let i = 0; i < languages4.length; i++) {
            found.push(languages4[i]);
          }
        }
        if (userLanguage) {
          found.push(userLanguage);
        }
        if (language) {
          found.push(language);
        }
      }
      return found.length > 0 ? found : void 0;
    }
  };
  var htmlTag = {
    name: "htmlTag",
    lookup(_ref) {
      let {
        htmlTag: htmlTag2
      } = _ref;
      let found;
      const internalHtmlTag = htmlTag2 || (typeof document !== "undefined" ? document.documentElement : null);
      if (internalHtmlTag && typeof internalHtmlTag.getAttribute === "function") {
        found = internalHtmlTag.getAttribute("lang");
      }
      return found;
    }
  };
  var path = {
    name: "path",
    lookup(_ref) {
      let {
        lookupFromPathIndex
      } = _ref;
      if (typeof window === "undefined")
        return void 0;
      const language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (!Array.isArray(language))
        return void 0;
      const index = typeof lookupFromPathIndex === "number" ? lookupFromPathIndex : 0;
      return language[index]?.replace("/", "");
    }
  };
  var subdomain = {
    name: "subdomain",
    lookup(_ref) {
      let {
        lookupFromSubdomainIndex
      } = _ref;
      const internalLookupFromSubdomainIndex = typeof lookupFromSubdomainIndex === "number" ? lookupFromSubdomainIndex + 1 : 1;
      const language = typeof window !== "undefined" && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
      if (!language)
        return void 0;
      return language[internalLookupFromSubdomainIndex];
    }
  };
  var canCookies = false;
  try {
    document.cookie;
    canCookies = true;
  } catch (e2) {
  }
  var order = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
  if (!canCookies)
    order.splice(1, 1);
  var getDefaults = () => ({
    order,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: (l) => l
  });
  var Browser = class {
    constructor(services) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.type = "languageDetector";
      this.detectors = {};
      this.init(services, options);
    }
    init() {
      let services = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        languageUtils: {}
      };
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      let i18nOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = services;
      this.options = defaults(options, this.options || {}, getDefaults());
      if (typeof this.options.convertDetectedLanguage === "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1) {
        this.options.convertDetectedLanguage = (l) => l.replace("-", "_");
      }
      if (this.options.lookupFromUrlIndex)
        this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      this.i18nOptions = i18nOptions;
      this.addDetector(cookie$1);
      this.addDetector(querystring);
      this.addDetector(localStorage2);
      this.addDetector(sessionStorage);
      this.addDetector(navigator$1);
      this.addDetector(htmlTag);
      this.addDetector(path);
      this.addDetector(subdomain);
      this.addDetector(hash);
    }
    addDetector(detector) {
      this.detectors[detector.name] = detector;
      return this;
    }
    detect() {
      let detectionOrder = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order;
      let detected = [];
      detectionOrder.forEach((detectorName) => {
        if (this.detectors[detectorName]) {
          let lookup = this.detectors[detectorName].lookup(this.options);
          if (lookup && typeof lookup === "string")
            lookup = [lookup];
          if (lookup)
            detected = detected.concat(lookup);
        }
      });
      detected = detected.filter((d) => d !== void 0 && d !== null && !hasXSS(d)).map((d) => this.options.convertDetectedLanguage(d));
      if (this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes)
        return detected;
      return detected.length > 0 ? detected[0] : null;
    }
    cacheUserLanguage(lng) {
      let caches = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
      if (!caches)
        return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1)
        return;
      caches.forEach((cacheName) => {
        if (this.detectors[cacheName])
          this.detectors[cacheName].cacheUserLanguage(lng, this.options);
      });
    }
  };
  Browser.type = "languageDetector";

  // src/app.tsx
  var import_react40 = __toESM(require_react());

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/Trans.js
  var import_react3 = __toESM(require_react(), 1);

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/TransWithoutContext.js
  var import_react = __toESM(require_react(), 1);

  // node_modules/.pnpm/html-parse-stringify@3.0.1/node_modules/html-parse-stringify/dist/html-parse-stringify.module.js
  var import_void_elements = __toESM(require_void_elements());

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/utils.js
  var warn = (i18n, code, msg, rest) => {
    const args = [msg, {
      code,
      ...rest || {}
    }];
    if (i18n?.services?.logger?.forward) {
      return i18n.services.logger.forward(args, "warn", "react-i18next::", true);
    }
    if (isString2(args[0]))
      args[0] = `react-i18next:: ${args[0]}`;
    if (i18n?.services?.logger?.warn) {
      i18n.services.logger.warn(...args);
    } else if (console?.warn) {
      console.warn(...args);
    }
  };
  var alreadyWarned = {};
  var warnOnce = (i18n, code, msg, rest) => {
    if (isString2(msg) && alreadyWarned[msg])
      return;
    if (isString2(msg))
      alreadyWarned[msg] = new Date();
    warn(i18n, code, msg, rest);
  };
  var loadedClb = (i18n, cb) => () => {
    if (i18n.isInitialized) {
      cb();
    } else {
      const initialized = () => {
        setTimeout(() => {
          i18n.off("initialized", initialized);
        }, 0);
        cb();
      };
      i18n.on("initialized", initialized);
    }
  };
  var loadNamespaces2 = (i18n, ns, cb) => {
    i18n.loadNamespaces(ns, loadedClb(i18n, cb));
  };
  var loadLanguages2 = (i18n, lng, ns, cb) => {
    if (isString2(ns))
      ns = [ns];
    if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1)
      return loadNamespaces2(i18n, ns, cb);
    ns.forEach((n) => {
      if (i18n.options.ns.indexOf(n) < 0)
        i18n.options.ns.push(n);
    });
    i18n.loadLanguages(lng, loadedClb(i18n, cb));
  };
  var hasLoadedNamespace2 = (ns, i18n, options = {}) => {
    if (!i18n.languages || !i18n.languages.length) {
      warnOnce(i18n, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
        languages: i18n.languages
      });
      return true;
    }
    return i18n.hasLoadedNamespace(ns, {
      lng: options.lng,
      precheck: (i18nInstance2, loadNotPending) => {
        if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance2.services.backendConnector.backend && i18nInstance2.isLanguageChangingTo && !loadNotPending(i18nInstance2.isLanguageChangingTo, ns))
          return false;
      }
    });
  };
  var getDisplayName = (Component) => Component.displayName || Component.name || (isString2(Component) && Component.length > 0 ? Component : "Unknown");
  var isString2 = (obj) => typeof obj === "string";
  var isObject = (obj) => typeof obj === "object" && obj !== null;

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/unescape.js
  var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
  var htmlEntities = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "\xA9",
    "&#169;": "\xA9",
    "&reg;": "\xAE",
    "&#174;": "\xAE",
    "&hellip;": "\u2026",
    "&#8230;": "\u2026",
    "&#x2F;": "/",
    "&#47;": "/"
  };
  var unescapeHtmlEntity = (m) => htmlEntities[m];
  var unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/defaults.js
  var defaultOptions = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: true,
    unescape,
    transDefaultProps: void 0
  };
  var setDefaults = (options = {}) => {
    defaultOptions = {
      ...defaultOptions,
      ...options
    };
  };
  var getDefaults2 = () => defaultOptions;

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/i18nInstance.js
  var i18nInstance;
  var setI18n = (instance2) => {
    i18nInstance = instance2;
  };
  var getI18n = () => i18nInstance;

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/context.js
  var import_react2 = __toESM(require_react(), 1);

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/initReactI18next.js
  var initReactI18next = {
    type: "3rdParty",
    init(instance2) {
      setDefaults(instance2.options.react);
      setI18n(instance2);
    }
  };

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/context.js
  var I18nContext = (0, import_react2.createContext)();
  var ReportNamespaces = class {
    constructor() {
      this.usedNamespaces = {};
    }
    addUsedNamespaces(namespaces) {
      namespaces.forEach((ns) => {
        if (!this.usedNamespaces[ns])
          this.usedNamespaces[ns] = true;
      });
    }
    getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  };

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/IcuTrans.js
  var import_react6 = __toESM(require_react(), 1);

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/IcuTransWithoutContext.js
  var import_react5 = __toESM(require_react(), 1);

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/IcuTransUtils/TranslationParserError.js
  var TranslationParserError = class extends Error {
    constructor(message, position2, translationString) {
      super(message);
      this.name = "TranslationParserError";
      this.position = position2;
      this.translationString = translationString;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, TranslationParserError);
      }
    }
  };

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/IcuTransUtils/htmlEntityDecoder.js
  var commonEntities = {
    "&nbsp;": "\xA0",
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&apos;": "'",
    "&copy;": "\xA9",
    "&reg;": "\xAE",
    "&trade;": "\u2122",
    "&hellip;": "\u2026",
    "&ndash;": "\u2013",
    "&mdash;": "\u2014",
    "&lsquo;": "\u2018",
    "&rsquo;": "\u2019",
    "&sbquo;": "\u201A",
    "&ldquo;": "\u201C",
    "&rdquo;": "\u201D",
    "&bdquo;": "\u201E",
    "&dagger;": "\u2020",
    "&Dagger;": "\u2021",
    "&bull;": "\u2022",
    "&prime;": "\u2032",
    "&Prime;": "\u2033",
    "&lsaquo;": "\u2039",
    "&rsaquo;": "\u203A",
    "&sect;": "\xA7",
    "&para;": "\xB6",
    "&middot;": "\xB7",
    "&ensp;": "\u2002",
    "&emsp;": "\u2003",
    "&thinsp;": "\u2009",
    "&euro;": "\u20AC",
    "&pound;": "\xA3",
    "&yen;": "\xA5",
    "&cent;": "\xA2",
    "&curren;": "\xA4",
    "&times;": "\xD7",
    "&divide;": "\xF7",
    "&minus;": "\u2212",
    "&plusmn;": "\xB1",
    "&ne;": "\u2260",
    "&le;": "\u2264",
    "&ge;": "\u2265",
    "&asymp;": "\u2248",
    "&equiv;": "\u2261",
    "&infin;": "\u221E",
    "&int;": "\u222B",
    "&sum;": "\u2211",
    "&prod;": "\u220F",
    "&radic;": "\u221A",
    "&part;": "\u2202",
    "&permil;": "\u2030",
    "&deg;": "\xB0",
    "&micro;": "\xB5",
    "&larr;": "\u2190",
    "&uarr;": "\u2191",
    "&rarr;": "\u2192",
    "&darr;": "\u2193",
    "&harr;": "\u2194",
    "&crarr;": "\u21B5",
    "&lArr;": "\u21D0",
    "&uArr;": "\u21D1",
    "&rArr;": "\u21D2",
    "&dArr;": "\u21D3",
    "&hArr;": "\u21D4",
    "&alpha;": "\u03B1",
    "&beta;": "\u03B2",
    "&gamma;": "\u03B3",
    "&delta;": "\u03B4",
    "&epsilon;": "\u03B5",
    "&zeta;": "\u03B6",
    "&eta;": "\u03B7",
    "&theta;": "\u03B8",
    "&iota;": "\u03B9",
    "&kappa;": "\u03BA",
    "&lambda;": "\u03BB",
    "&mu;": "\u03BC",
    "&nu;": "\u03BD",
    "&xi;": "\u03BE",
    "&omicron;": "\u03BF",
    "&pi;": "\u03C0",
    "&rho;": "\u03C1",
    "&sigma;": "\u03C3",
    "&tau;": "\u03C4",
    "&upsilon;": "\u03C5",
    "&phi;": "\u03C6",
    "&chi;": "\u03C7",
    "&psi;": "\u03C8",
    "&omega;": "\u03C9",
    "&Alpha;": "\u0391",
    "&Beta;": "\u0392",
    "&Gamma;": "\u0393",
    "&Delta;": "\u0394",
    "&Epsilon;": "\u0395",
    "&Zeta;": "\u0396",
    "&Eta;": "\u0397",
    "&Theta;": "\u0398",
    "&Iota;": "\u0399",
    "&Kappa;": "\u039A",
    "&Lambda;": "\u039B",
    "&Mu;": "\u039C",
    "&Nu;": "\u039D",
    "&Xi;": "\u039E",
    "&Omicron;": "\u039F",
    "&Pi;": "\u03A0",
    "&Rho;": "\u03A1",
    "&Sigma;": "\u03A3",
    "&Tau;": "\u03A4",
    "&Upsilon;": "\u03A5",
    "&Phi;": "\u03A6",
    "&Chi;": "\u03A7",
    "&Psi;": "\u03A8",
    "&Omega;": "\u03A9",
    "&Agrave;": "\xC0",
    "&Aacute;": "\xC1",
    "&Acirc;": "\xC2",
    "&Atilde;": "\xC3",
    "&Auml;": "\xC4",
    "&Aring;": "\xC5",
    "&AElig;": "\xC6",
    "&Ccedil;": "\xC7",
    "&Egrave;": "\xC8",
    "&Eacute;": "\xC9",
    "&Ecirc;": "\xCA",
    "&Euml;": "\xCB",
    "&Igrave;": "\xCC",
    "&Iacute;": "\xCD",
    "&Icirc;": "\xCE",
    "&Iuml;": "\xCF",
    "&ETH;": "\xD0",
    "&Ntilde;": "\xD1",
    "&Ograve;": "\xD2",
    "&Oacute;": "\xD3",
    "&Ocirc;": "\xD4",
    "&Otilde;": "\xD5",
    "&Ouml;": "\xD6",
    "&Oslash;": "\xD8",
    "&Ugrave;": "\xD9",
    "&Uacute;": "\xDA",
    "&Ucirc;": "\xDB",
    "&Uuml;": "\xDC",
    "&Yacute;": "\xDD",
    "&THORN;": "\xDE",
    "&szlig;": "\xDF",
    "&agrave;": "\xE0",
    "&aacute;": "\xE1",
    "&acirc;": "\xE2",
    "&atilde;": "\xE3",
    "&auml;": "\xE4",
    "&aring;": "\xE5",
    "&aelig;": "\xE6",
    "&ccedil;": "\xE7",
    "&egrave;": "\xE8",
    "&eacute;": "\xE9",
    "&ecirc;": "\xEA",
    "&euml;": "\xEB",
    "&igrave;": "\xEC",
    "&iacute;": "\xED",
    "&icirc;": "\xEE",
    "&iuml;": "\xEF",
    "&eth;": "\xF0",
    "&ntilde;": "\xF1",
    "&ograve;": "\xF2",
    "&oacute;": "\xF3",
    "&ocirc;": "\xF4",
    "&otilde;": "\xF5",
    "&ouml;": "\xF6",
    "&oslash;": "\xF8",
    "&ugrave;": "\xF9",
    "&uacute;": "\xFA",
    "&ucirc;": "\xFB",
    "&uuml;": "\xFC",
    "&yacute;": "\xFD",
    "&thorn;": "\xFE",
    "&yuml;": "\xFF",
    "&iexcl;": "\xA1",
    "&iquest;": "\xBF",
    "&fnof;": "\u0192",
    "&circ;": "\u02C6",
    "&tilde;": "\u02DC",
    "&OElig;": "\u0152",
    "&oelig;": "\u0153",
    "&Scaron;": "\u0160",
    "&scaron;": "\u0161",
    "&Yuml;": "\u0178",
    "&ordf;": "\xAA",
    "&ordm;": "\xBA",
    "&macr;": "\xAF",
    "&acute;": "\xB4",
    "&cedil;": "\xB8",
    "&sup1;": "\xB9",
    "&sup2;": "\xB2",
    "&sup3;": "\xB3",
    "&frac14;": "\xBC",
    "&frac12;": "\xBD",
    "&frac34;": "\xBE",
    "&spades;": "\u2660",
    "&clubs;": "\u2663",
    "&hearts;": "\u2665",
    "&diams;": "\u2666",
    "&loz;": "\u25CA",
    "&oline;": "\u203E",
    "&frasl;": "\u2044",
    "&weierp;": "\u2118",
    "&image;": "\u2111",
    "&real;": "\u211C",
    "&alefsym;": "\u2135"
  };
  var entityPattern = new RegExp(Object.keys(commonEntities).map((entity) => entity.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g");
  var decodeHtmlEntities = (text) => text.replace(entityPattern, (match) => commonEntities[match]).replace(/&#(\d+);/g, (_, num3) => String.fromCharCode(parseInt(num3, 10))).replace(/&#x([0-9a-fA-F]+);/g, (_, hex2) => String.fromCharCode(parseInt(hex2, 16)));

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/IcuTransUtils/tokenizer.js
  var tokenize = (translation) => {
    const tokens = [];
    let position2 = 0;
    let currentText = "";
    const flushText = () => {
      if (currentText) {
        tokens.push({
          type: "Text",
          value: currentText,
          position: position2 - currentText.length
        });
        currentText = "";
      }
    };
    while (position2 < translation.length) {
      const char = translation[position2];
      if (char === "<") {
        const tagMatch = translation.slice(position2).match(/^<(\d+)>/);
        if (tagMatch) {
          flushText();
          tokens.push({
            type: "TagOpen",
            value: tagMatch[0],
            position: position2,
            tagNumber: parseInt(tagMatch[1], 10)
          });
          position2 += tagMatch[0].length;
        } else {
          const closeTagMatch = translation.slice(position2).match(/^<\/(\d+)>/);
          if (closeTagMatch) {
            flushText();
            tokens.push({
              type: "TagClose",
              value: closeTagMatch[0],
              position: position2,
              tagNumber: parseInt(closeTagMatch[1], 10)
            });
            position2 += closeTagMatch[0].length;
          } else {
            currentText += char;
            position2 += 1;
          }
        }
      } else {
        currentText += char;
        position2 += 1;
      }
    }
    flushText();
    return tokens;
  };

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/IcuTransUtils/renderTranslation.js
  var import_react4 = __toESM(require_react(), 1);
  var renderDeclarationNode = (declaration, children, childDeclarations) => {
    const {
      type,
      props = {}
    } = declaration;
    if (props.children && Array.isArray(props.children) && childDeclarations) {
      const {
        children: _childrenToRemove,
        ...propsWithoutChildren
      } = props;
      return import_react4.default.createElement(type, propsWithoutChildren, ...children);
    }
    if (children.length === 0) {
      return import_react4.default.createElement(type, props);
    }
    if (children.length === 1) {
      return import_react4.default.createElement(type, props, children[0]);
    }
    return import_react4.default.createElement(type, props, ...children);
  };
  var renderTranslation = (translation, declarations = []) => {
    if (!translation) {
      return [];
    }
    const tokens = tokenize(translation);
    const result = [];
    const stack = [];
    const literalTagNumbers = /* @__PURE__ */ new Set();
    const getCurrentDeclarations = () => {
      if (stack.length === 0) {
        return declarations;
      }
      const parentFrame = stack[stack.length - 1];
      if (parentFrame.declaration.props?.children && Array.isArray(parentFrame.declaration.props.children)) {
        return parentFrame.declaration.props.children;
      }
      return parentFrame.declarations;
    };
    tokens.forEach((token) => {
      switch (token.type) {
        case "Text":
          {
            const decoded = decodeHtmlEntities(token.value);
            const targetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
            targetArray.push(decoded);
          }
          break;
        case "TagOpen":
          {
            const {
              tagNumber
            } = token;
            const currentDeclarations = getCurrentDeclarations();
            const declaration = currentDeclarations[tagNumber];
            if (!declaration) {
              literalTagNumbers.add(tagNumber);
              const literalText = `<${tagNumber}>`;
              const targetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
              targetArray.push(literalText);
              break;
            }
            stack.push({
              tagNumber,
              children: [],
              position: token.position,
              declaration,
              declarations: currentDeclarations
            });
          }
          break;
        case "TagClose":
          {
            const {
              tagNumber
            } = token;
            if (literalTagNumbers.has(tagNumber)) {
              const literalText = `</${tagNumber}>`;
              const literalTargetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
              literalTargetArray.push(literalText);
              literalTagNumbers.delete(tagNumber);
              break;
            }
            if (stack.length === 0) {
              throw new TranslationParserError(`Unexpected closing tag </${tagNumber}> at position ${token.position}`, token.position, translation);
            }
            const frame = stack.pop();
            if (frame.tagNumber !== tagNumber) {
              throw new TranslationParserError(`Mismatched tags: expected </${frame.tagNumber}> but got </${tagNumber}> at position ${token.position}`, token.position, translation);
            }
            const element = renderDeclarationNode(frame.declaration, frame.children, frame.declarations);
            const elementTargetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
            elementTargetArray.push(element);
          }
          break;
      }
    });
    if (stack.length > 0) {
      const unclosed = stack[stack.length - 1];
      throw new TranslationParserError(`Unclosed tag <${unclosed.tagNumber}> at position ${unclosed.position}`, unclosed.position, translation);
    }
    return result;
  };

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/IcuTransWithoutContext.js
  function IcuTransWithoutContext({
    i18nKey,
    defaultTranslation,
    content,
    ns,
    values = {},
    i18n: i18nFromProps,
    t: tFromProps
  }) {
    const i18n = i18nFromProps || getI18n();
    if (!i18n) {
      warnOnce(i18n, "NO_I18NEXT_INSTANCE", `IcuTrans: You need to pass in an i18next instance using i18nextReactModule`, {
        i18nKey
      });
      return import_react5.default.createElement(import_react5.default.Fragment, {}, defaultTranslation);
    }
    const t2 = tFromProps || i18n.t?.bind(i18n) || ((k) => k);
    let namespaces = ns || t2.ns || i18n.options?.defaultNS;
    namespaces = isString2(namespaces) ? [namespaces] : namespaces || ["translation"];
    let mergedValues = values;
    if (i18n.options?.interpolation?.defaultVariables) {
      mergedValues = values && Object.keys(values).length > 0 ? {
        ...values,
        ...i18n.options.interpolation.defaultVariables
      } : {
        ...i18n.options.interpolation.defaultVariables
      };
    }
    const translation = t2(i18nKey, {
      defaultValue: defaultTranslation,
      ...mergedValues,
      ns: namespaces
    });
    try {
      const rendered = renderTranslation(translation, content);
      return import_react5.default.createElement(import_react5.default.Fragment, {}, ...rendered);
    } catch (error2) {
      warn(i18n, "ICU_TRANS_RENDER_ERROR", `IcuTrans component error for key "${i18nKey}": ${error2.message}`, {
        i18nKey,
        error: error2
      });
      return import_react5.default.createElement(import_react5.default.Fragment, {}, translation);
    }
  }
  IcuTransWithoutContext.displayName = "IcuTransWithoutContext";

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/IcuTrans.js
  function IcuTrans({
    i18nKey,
    defaultTranslation,
    content,
    ns,
    values = {},
    i18n: i18nFromProps,
    t: tFromProps
  }) {
    const {
      i18n: i18nFromContext,
      defaultNS: defaultNSFromContext
    } = (0, import_react6.useContext)(I18nContext) || {};
    const i18n = i18nFromProps || i18nFromContext || getI18n();
    const t2 = tFromProps || i18n?.t.bind(i18n);
    return IcuTransWithoutContext({
      i18nKey,
      defaultTranslation,
      content,
      ns: ns || t2?.ns || defaultNSFromContext || i18n?.options?.defaultNS,
      values,
      i18n,
      t: tFromProps
    });
  }
  IcuTrans.displayName = "IcuTrans";

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/useTranslation.js
  var import_react7 = __toESM(require_react(), 1);
  var import_shim = __toESM(require_shim(), 1);
  var notReadyT = (k, optsOrDefaultValue) => {
    if (isString2(optsOrDefaultValue))
      return optsOrDefaultValue;
    if (isObject(optsOrDefaultValue) && isString2(optsOrDefaultValue.defaultValue))
      return optsOrDefaultValue.defaultValue;
    if (typeof k === "function")
      return "";
    if (Array.isArray(k)) {
      const last = k[k.length - 1];
      return typeof last === "function" ? "" : last;
    }
    return k;
  };
  var notReadySnapshot = {
    t: notReadyT,
    ready: false
  };
  var dummySubscribe = () => () => {
  };
  var useTranslation = (ns, props = {}) => {
    const {
      i18n: i18nFromProps
    } = props;
    const {
      i18n: i18nFromContext,
      defaultNS: defaultNSFromContext
    } = (0, import_react7.useContext)(I18nContext) || {};
    const i18n = i18nFromProps || i18nFromContext || getI18n();
    if (i18n && !i18n.reportNamespaces)
      i18n.reportNamespaces = new ReportNamespaces();
    if (!i18n) {
      warnOnce(i18n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    }
    const i18nOptions = (0, import_react7.useMemo)(() => ({
      ...getDefaults2(),
      ...i18n?.options?.react,
      ...props
    }), [i18n, props]);
    const {
      useSuspense,
      keyPrefix
    } = i18nOptions;
    const nsOrContext = ns || defaultNSFromContext || i18n?.options?.defaultNS;
    const unstableNamespaces = isString2(nsOrContext) ? [nsOrContext] : nsOrContext || ["translation"];
    const namespaces = (0, import_react7.useMemo)(() => unstableNamespaces, unstableNamespaces);
    i18n?.reportNamespaces?.addUsedNamespaces?.(namespaces);
    const revisionRef = (0, import_react7.useRef)(0);
    const subscribe = (0, import_react7.useCallback)((callback) => {
      if (!i18n)
        return dummySubscribe;
      const {
        bindI18n,
        bindI18nStore
      } = i18nOptions;
      const wrappedCallback = () => {
        revisionRef.current += 1;
        callback();
      };
      if (bindI18n)
        i18n.on(bindI18n, wrappedCallback);
      if (bindI18nStore)
        i18n.store.on(bindI18nStore, wrappedCallback);
      return () => {
        if (bindI18n)
          bindI18n.split(" ").forEach((e2) => i18n.off(e2, wrappedCallback));
        if (bindI18nStore)
          bindI18nStore.split(" ").forEach((e2) => i18n.store.off(e2, wrappedCallback));
      };
    }, [i18n, i18nOptions]);
    const snapshotRef = (0, import_react7.useRef)();
    const getSnapshot = (0, import_react7.useCallback)(() => {
      if (!i18n) {
        return notReadySnapshot;
      }
      const calculatedReady = !!(i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n) => hasLoadedNamespace2(n, i18n, i18nOptions));
      const currentLng = props.lng || i18n.language;
      const currentRevision = revisionRef.current;
      const lastSnapshot = snapshotRef.current;
      if (lastSnapshot && lastSnapshot.ready === calculatedReady && lastSnapshot.lng === currentLng && lastSnapshot.keyPrefix === keyPrefix && lastSnapshot.revision === currentRevision) {
        return lastSnapshot;
      }
      const calculatedT = i18n.getFixedT(currentLng, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
      const newSnapshot = {
        t: calculatedT,
        ready: calculatedReady,
        lng: currentLng,
        keyPrefix,
        revision: currentRevision
      };
      snapshotRef.current = newSnapshot;
      return newSnapshot;
    }, [i18n, namespaces, keyPrefix, i18nOptions, props.lng]);
    const [loadCount, setLoadCount] = (0, import_react7.useState)(0);
    const {
      t: t2,
      ready
    } = (0, import_shim.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
    (0, import_react7.useEffect)(() => {
      if (i18n && !ready && !useSuspense) {
        const onLoaded = () => setLoadCount((c) => c + 1);
        if (props.lng) {
          loadLanguages2(i18n, props.lng, namespaces, onLoaded);
        } else {
          loadNamespaces2(i18n, namespaces, onLoaded);
        }
      }
    }, [i18n, props.lng, namespaces, ready, useSuspense, loadCount]);
    const finalI18n = i18n || {};
    const wrapperRef = (0, import_react7.useRef)(null);
    const wrapperLangRef = (0, import_react7.useRef)();
    const createI18nWrapper = (original) => {
      const descriptors = Object.getOwnPropertyDescriptors(original);
      if (descriptors.__original)
        delete descriptors.__original;
      const wrapper = Object.create(Object.getPrototypeOf(original), descriptors);
      if (!Object.prototype.hasOwnProperty.call(wrapper, "__original")) {
        try {
          Object.defineProperty(wrapper, "__original", {
            value: original,
            writable: false,
            enumerable: false,
            configurable: false
          });
        } catch (_) {
        }
      }
      return wrapper;
    };
    const ret = (0, import_react7.useMemo)(() => {
      const original = finalI18n;
      const lang = original?.language;
      let i18nWrapper = original;
      if (original) {
        if (wrapperRef.current && wrapperRef.current.__original === original) {
          if (wrapperLangRef.current !== lang) {
            i18nWrapper = createI18nWrapper(original);
            wrapperRef.current = i18nWrapper;
            wrapperLangRef.current = lang;
          } else {
            i18nWrapper = wrapperRef.current;
          }
        } else {
          i18nWrapper = createI18nWrapper(original);
          wrapperRef.current = i18nWrapper;
          wrapperLangRef.current = lang;
        }
      }
      const effectiveT = !ready && !useSuspense ? (...args) => {
        warnOnce(i18n, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t.");
        return t2(...args);
      } : t2;
      const arr = [effectiveT, i18nWrapper, ready];
      arr.t = effectiveT;
      arr.i18n = i18nWrapper;
      arr.ready = ready;
      return arr;
    }, [t2, finalI18n, ready, finalI18n.resolvedLanguage, finalI18n.language, finalI18n.languages]);
    if (i18n && useSuspense && !ready) {
      throw new Promise((resolve) => {
        const onLoaded = () => resolve();
        if (props.lng) {
          loadLanguages2(i18n, props.lng, namespaces, onLoaded);
        } else {
          loadNamespaces2(i18n, namespaces, onLoaded);
        }
      });
    }
    return ret;
  };

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/withTranslation.js
  var import_react8 = __toESM(require_react(), 1);
  var withTranslation = (ns, options = {}) => function Extend(WrappedComponent) {
    function I18nextWithTranslation({
      forwardedRef,
      ...rest
    }) {
      const [t2, i18n, ready] = useTranslation(ns, {
        ...rest,
        keyPrefix: options.keyPrefix
      });
      const passDownProps = {
        ...rest,
        t: t2,
        i18n,
        tReady: ready
      };
      if (options.withRef && forwardedRef) {
        passDownProps.ref = forwardedRef;
      } else if (!options.withRef && forwardedRef) {
        passDownProps.forwardedRef = forwardedRef;
      }
      return (0, import_react8.createElement)(WrappedComponent, passDownProps);
    }
    I18nextWithTranslation.displayName = `withI18nextTranslation(${getDisplayName(WrappedComponent)})`;
    I18nextWithTranslation.WrappedComponent = WrappedComponent;
    const forwardRef2 = (props, ref2) => (0, import_react8.createElement)(I18nextWithTranslation, Object.assign({}, props, {
      forwardedRef: ref2
    }));
    return options.withRef ? (0, import_react8.forwardRef)(forwardRef2) : I18nextWithTranslation;
  };

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/I18nextProvider.js
  var import_react9 = __toESM(require_react(), 1);

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/withSSR.js
  var import_react11 = __toESM(require_react(), 1);

  // node_modules/.pnpm/react-i18next@17.0.6_i18next@26.3.0_typescript@6.0.3__react-dom@19.2.3_react@19.2.3__react@19.2.3_typescript@6.0.3/node_modules/react-i18next/dist/es/useSSR.js
  var import_react10 = __toESM(require_react(), 1);

  // src/components/Grid.tsx
  var import_react38 = __toESM(require_react());
  var import_semver = __toESM(require_semver2());

  // package.json
  var version = "1.0.8";

  // src/constants.ts
  var MARKETPLACE_VERSION = version;
  var STORAGE_KEY_PREFIX = "marketplace";
  var LOCALSTORAGE_KEYS = {
    installedExtensions: `${STORAGE_KEY_PREFIX}:installed-extensions`,
    installedSnippets: `${STORAGE_KEY_PREFIX}:installed-snippets`,
    installedThemes: `${STORAGE_KEY_PREFIX}:installed-themes`,
    activeTab: `${STORAGE_KEY_PREFIX}:active-tab`,
    tabs: `${STORAGE_KEY_PREFIX}:tabs`,
    sort: `${STORAGE_KEY_PREFIX}:sort`,
    themeInstalled: `${STORAGE_KEY_PREFIX}:theme-installed`,
    localTheme: `${STORAGE_KEY_PREFIX}:local-theme`,
    albumArtBasedColor: `${STORAGE_KEY_PREFIX}:albumArtBasedColors`,
    albumArtBasedColorMode: `${STORAGE_KEY_PREFIX}:albumArtBasedColorsMode`,
    albumArtBasedColorVibrancy: `${STORAGE_KEY_PREFIX}:albumArtBasedColorsVibrancy`,
    colorShift: `${STORAGE_KEY_PREFIX}:colorShift`
  };
  var ALL_TABS = [
    { name: "Extensions", enabled: true },
    { name: "Themes", enabled: true },
    { name: "Snippets", enabled: true },
    { name: "Apps", enabled: true },
    { name: "Installed", enabled: true }
  ];
  var ITEMS_PER_REQUEST = 100;
  var CUSTOM_APP_PATH = "/marketplace";
  var MAX_TAGS = 4;
  var SNIPPETS_PAGE_URL = "https://github.com/spicetify/marketplace/blob/main/resources/snippets.json";
  var SNIPPETS_URL = "https://raw.githubusercontent.com/spicetify/marketplace/main/resources/snippets.json";
  var BLACKLIST_URL = "https://raw.githubusercontent.com/spicetify/marketplace/main/resources/blacklist.json";
  var RELEASES_URL = "https://github.com/spicetify/marketplace/releases";
  var LATEST_RELEASE_URL = "https://api.github.com/repos/spicetify/marketplace/releases/latest";

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/limit.js
  var { min, max } = Math;
  var limit_default = (x, low = 0, high = 1) => {
    return min(max(low, x), high);
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/clip_rgb.js
  var clip_rgb_default = (rgb3) => {
    rgb3._clipped = false;
    rgb3._unclipped = rgb3.slice(0);
    for (let i = 0; i <= 3; i++) {
      if (i < 3) {
        if (rgb3[i] < 0 || rgb3[i] > 255)
          rgb3._clipped = true;
        rgb3[i] = limit_default(rgb3[i], 0, 255);
      } else if (i === 3) {
        rgb3[i] = limit_default(rgb3[i], 0, 1);
      }
    }
    return rgb3;
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/type.js
  var classToType = {};
  for (let name of [
    "Boolean",
    "Number",
    "String",
    "Function",
    "Array",
    "Date",
    "RegExp",
    "Undefined",
    "Null"
  ]) {
    classToType[`[object ${name}]`] = name.toLowerCase();
  }
  function type_default(obj) {
    return classToType[Object.prototype.toString.call(obj)] || "object";
  }

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/unpack.js
  var unpack_default = (args, keyOrder = null) => {
    if (args.length >= 3)
      return Array.prototype.slice.call(args);
    if (type_default(args[0]) == "object" && keyOrder) {
      return keyOrder.split("").filter((k) => args[0][k] !== void 0).map((k) => args[0][k]);
    }
    return args[0].slice(0);
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/last.js
  var last_default = (args) => {
    if (args.length < 2)
      return null;
    const l = args.length - 1;
    if (type_default(args[l]) == "string")
      return args[l].toLowerCase();
    return null;
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/index.js
  var { PI, min: min2, max: max2 } = Math;
  var rnd2 = (a) => Math.round(a * 100) / 100;
  var rnd3 = (a) => Math.round(a * 100) / 100;
  var TWOPI = PI * 2;
  var PITHIRD = PI / 3;
  var DEG2RAD = PI / 180;
  var RAD2DEG = 180 / PI;
  function reverse3(arr) {
    return [...arr.slice(0, 3).reverse(), ...arr.slice(3)];
  }

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/input.js
  var input_default = {
    format: {},
    autodetect: []
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/Color.js
  var Color = class {
    constructor(...args) {
      const me = this;
      if (type_default(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
        return args[0];
      }
      let mode = last_default(args);
      let autodetect = false;
      if (!mode) {
        autodetect = true;
        if (!input_default.sorted) {
          input_default.autodetect = input_default.autodetect.sort((a, b) => b.p - a.p);
          input_default.sorted = true;
        }
        for (let chk of input_default.autodetect) {
          mode = chk.test(...args);
          if (mode)
            break;
        }
      }
      if (input_default.format[mode]) {
        const rgb3 = input_default.format[mode].apply(
          null,
          autodetect ? args : args.slice(0, -1)
        );
        me._rgb = clip_rgb_default(rgb3);
      } else {
        throw new Error("unknown format: " + args);
      }
      if (me._rgb.length === 3)
        me._rgb.push(1);
    }
    toString() {
      if (type_default(this.hex) == "function")
        return this.hex();
      return `[${this._rgb.join(",")}]`;
    }
  };
  var Color_default = Color;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/version.js
  var version2 = "3.2.0";

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/chroma.js
  var chroma = (...args) => {
    return new Color_default(...args);
  };
  chroma.version = version2;
  var chroma_default = chroma;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/colors/w3cx11.js
  var w3cx11 = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    laserlemon: "#ffff54",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrod: "#fafad2",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    maroon2: "#7f0000",
    maroon3: "#b03060",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    purple2: "#7f007f",
    purple3: "#a020f0",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  var w3cx11_default = w3cx11;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hex/hex2rgb.js
  var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
  var hex2rgb = (hex2) => {
    if (hex2.match(RE_HEX)) {
      if (hex2.length === 4 || hex2.length === 7) {
        hex2 = hex2.substr(1);
      }
      if (hex2.length === 3) {
        hex2 = hex2.split("");
        hex2 = hex2[0] + hex2[0] + hex2[1] + hex2[1] + hex2[2] + hex2[2];
      }
      const u = parseInt(hex2, 16);
      const r = u >> 16;
      const g = u >> 8 & 255;
      const b = u & 255;
      return [r, g, b, 1];
    }
    if (hex2.match(RE_HEXA)) {
      if (hex2.length === 5 || hex2.length === 9) {
        hex2 = hex2.substr(1);
      }
      if (hex2.length === 4) {
        hex2 = hex2.split("");
        hex2 = hex2[0] + hex2[0] + hex2[1] + hex2[1] + hex2[2] + hex2[2] + hex2[3] + hex2[3];
      }
      const u = parseInt(hex2, 16);
      const r = u >> 24 & 255;
      const g = u >> 16 & 255;
      const b = u >> 8 & 255;
      const a = Math.round((u & 255) / 255 * 100) / 100;
      return [r, g, b, a];
    }
    throw new Error(`unknown hex color: ${hex2}`);
  };
  var hex2rgb_default = hex2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hex/rgb2hex.js
  var { round } = Math;
  var rgb2hex = (...args) => {
    let [r, g, b, a] = unpack_default(args, "rgba");
    let mode = last_default(args) || "auto";
    if (a === void 0)
      a = 1;
    if (mode === "auto") {
      mode = a < 1 ? "rgba" : "rgb";
    }
    r = round(r);
    g = round(g);
    b = round(b);
    const u = r << 16 | g << 8 | b;
    let str = "000000" + u.toString(16);
    str = str.substr(str.length - 6);
    let hxa = "0" + round(a * 255).toString(16);
    hxa = hxa.substr(hxa.length - 2);
    switch (mode.toLowerCase()) {
      case "rgba":
        return `#${str}${hxa}`;
      case "argb":
        return `#${hxa}${str}`;
      default:
        return `#${str}`;
    }
  };
  var rgb2hex_default = rgb2hex;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/named/index.js
  Color_default.prototype.name = function() {
    const hex2 = rgb2hex_default(this._rgb, "rgb");
    for (let n of Object.keys(w3cx11_default)) {
      if (w3cx11_default[n] === hex2)
        return n.toLowerCase();
    }
    return hex2;
  };
  input_default.format.named = (name) => {
    name = name.toLowerCase();
    if (w3cx11_default[name])
      return hex2rgb_default(w3cx11_default[name]);
    throw new Error("unknown color name: " + name);
  };
  input_default.autodetect.push({
    p: 5,
    test: (h, ...rest) => {
      if (!rest.length && type_default(h) === "string" && w3cx11_default[h.toLowerCase()]) {
        return "named";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/ops/alpha.js
  Color_default.prototype.alpha = function(a, mutate = false) {
    if (a !== void 0 && type_default(a) === "number") {
      if (mutate) {
        this._rgb[3] = a;
        return this;
      }
      return new Color_default([this._rgb[0], this._rgb[1], this._rgb[2], a], "rgb");
    }
    return this._rgb[3];
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/ops/clipped.js
  Color_default.prototype.clipped = function() {
    return this._rgb._clipped || false;
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/lab/lab-constants.js
  var labConstants = {
    Kn: 18,
    labWhitePoint: "d65",
    Xn: 0.95047,
    Yn: 1,
    Zn: 1.08883,
    t0: 0.137931034,
    t1: 0.206896552,
    t2: 0.12841855,
    t3: 8856452e-9,
    kE: 216 / 24389,
    kKE: 8,
    kK: 24389 / 27,
    RefWhiteRGB: {
      X: 0.95047,
      Y: 1,
      Z: 1.08883
    },
    MtxRGB2XYZ: {
      m00: 0.4124564390896922,
      m01: 0.21267285140562253,
      m02: 0.0193338955823293,
      m10: 0.357576077643909,
      m11: 0.715152155287818,
      m12: 0.11919202588130297,
      m20: 0.18043748326639894,
      m21: 0.07217499330655958,
      m22: 0.9503040785363679
    },
    MtxXYZ2RGB: {
      m00: 3.2404541621141045,
      m01: -0.9692660305051868,
      m02: 0.055643430959114726,
      m10: -1.5371385127977166,
      m11: 1.8760108454466942,
      m12: -0.2040259135167538,
      m20: -0.498531409556016,
      m21: 0.041556017530349834,
      m22: 1.0572251882231791
    },
    As: 0.9414285350000001,
    Bs: 1.040417467,
    Cs: 1.089532651,
    MtxAdaptMa: {
      m00: 0.8951,
      m01: -0.7502,
      m02: 0.0389,
      m10: 0.2664,
      m11: 1.7135,
      m12: -0.0685,
      m20: -0.1614,
      m21: 0.0367,
      m22: 1.0296
    },
    MtxAdaptMaI: {
      m00: 0.9869929054667123,
      m01: 0.43230526972339456,
      m02: -0.008528664575177328,
      m10: -0.14705425642099013,
      m11: 0.5183602715367776,
      m12: 0.04004282165408487,
      m20: 0.15996265166373125,
      m21: 0.0492912282128556,
      m22: 0.9684866957875502
    }
  };
  var lab_constants_default = labConstants;
  var ILLUMINANTS = /* @__PURE__ */ new Map([
    ["a", [1.0985, 0.35585]],
    ["b", [1.0985, 0.35585]],
    ["c", [0.98074, 1.18232]],
    ["d50", [0.96422, 0.82521]],
    ["d55", [0.95682, 0.92149]],
    ["d65", [0.95047, 1.08883]],
    ["e", [1, 1, 1]],
    ["f2", [0.99186, 0.67393]],
    ["f7", [0.95041, 1.08747]],
    ["f11", [1.00962, 0.6435]],
    ["icc", [0.96422, 0.82521]]
  ]);
  function setLabWhitePoint(name) {
    const ill = ILLUMINANTS.get(String(name).toLowerCase());
    if (!ill) {
      throw new Error("unknown Lab illuminant " + name);
    }
    labConstants.labWhitePoint = name;
    labConstants.Xn = ill[0];
    labConstants.Zn = ill[1];
  }
  function getLabWhitePoint() {
    return labConstants.labWhitePoint;
  }

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/lab/lab2rgb.js
  var lab2rgb = (...args) => {
    args = unpack_default(args, "lab");
    const [L, a, b] = args;
    const [x, y, z] = lab2xyz(L, a, b);
    const [r, g, b_] = xyz2rgb(x, y, z);
    return [r, g, b_, args.length > 3 ? args[3] : 1];
  };
  var lab2xyz = (L, a, b) => {
    const { kE, kK, kKE, Xn, Yn, Zn } = lab_constants_default;
    const fy = (L + 16) / 116;
    const fx = 2e-3 * a + fy;
    const fz = fy - 5e-3 * b;
    const fx3 = fx * fx * fx;
    const fz3 = fz * fz * fz;
    const xr = fx3 > kE ? fx3 : (116 * fx - 16) / kK;
    const yr = L > kKE ? Math.pow((L + 16) / 116, 3) : L / kK;
    const zr = fz3 > kE ? fz3 : (116 * fz - 16) / kK;
    const x = xr * Xn;
    const y = yr * Yn;
    const z = zr * Zn;
    return [x, y, z];
  };
  var compand = (linear) => {
    const sign = Math.sign(linear);
    linear = Math.abs(linear);
    return (linear <= 31308e-7 ? linear * 12.92 : 1.055 * Math.pow(linear, 1 / 2.4) - 0.055) * sign;
  };
  var xyz2rgb = (x, y, z) => {
    const { MtxAdaptMa, MtxAdaptMaI, MtxXYZ2RGB, RefWhiteRGB, Xn, Yn, Zn } = lab_constants_default;
    const As = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
    const Bs = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
    const Cs = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;
    const Ad = RefWhiteRGB.X * MtxAdaptMa.m00 + RefWhiteRGB.Y * MtxAdaptMa.m10 + RefWhiteRGB.Z * MtxAdaptMa.m20;
    const Bd = RefWhiteRGB.X * MtxAdaptMa.m01 + RefWhiteRGB.Y * MtxAdaptMa.m11 + RefWhiteRGB.Z * MtxAdaptMa.m21;
    const Cd = RefWhiteRGB.X * MtxAdaptMa.m02 + RefWhiteRGB.Y * MtxAdaptMa.m12 + RefWhiteRGB.Z * MtxAdaptMa.m22;
    const X1 = (x * MtxAdaptMa.m00 + y * MtxAdaptMa.m10 + z * MtxAdaptMa.m20) * (Ad / As);
    const Y1 = (x * MtxAdaptMa.m01 + y * MtxAdaptMa.m11 + z * MtxAdaptMa.m21) * (Bd / Bs);
    const Z1 = (x * MtxAdaptMa.m02 + y * MtxAdaptMa.m12 + z * MtxAdaptMa.m22) * (Cd / Cs);
    const X2 = X1 * MtxAdaptMaI.m00 + Y1 * MtxAdaptMaI.m10 + Z1 * MtxAdaptMaI.m20;
    const Y2 = X1 * MtxAdaptMaI.m01 + Y1 * MtxAdaptMaI.m11 + Z1 * MtxAdaptMaI.m21;
    const Z2 = X1 * MtxAdaptMaI.m02 + Y1 * MtxAdaptMaI.m12 + Z1 * MtxAdaptMaI.m22;
    const r = compand(
      X2 * MtxXYZ2RGB.m00 + Y2 * MtxXYZ2RGB.m10 + Z2 * MtxXYZ2RGB.m20
    );
    const g = compand(
      X2 * MtxXYZ2RGB.m01 + Y2 * MtxXYZ2RGB.m11 + Z2 * MtxXYZ2RGB.m21
    );
    const b = compand(
      X2 * MtxXYZ2RGB.m02 + Y2 * MtxXYZ2RGB.m12 + Z2 * MtxXYZ2RGB.m22
    );
    return [r * 255, g * 255, b * 255];
  };
  var lab2rgb_default = lab2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/lab/rgb2lab.js
  var rgb2lab = (...args) => {
    const [r, g, b, ...rest] = unpack_default(args, "rgb");
    const [x, y, z] = rgb2xyz(r, g, b);
    const [L, a, b_] = xyz2lab(x, y, z);
    return [L, a, b_, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
  };
  function xyz2lab(x, y, z) {
    const { Xn, Yn, Zn, kE, kK } = lab_constants_default;
    const xr = x / Xn;
    const yr = y / Yn;
    const zr = z / Zn;
    const fx = xr > kE ? Math.pow(xr, 1 / 3) : (kK * xr + 16) / 116;
    const fy = yr > kE ? Math.pow(yr, 1 / 3) : (kK * yr + 16) / 116;
    const fz = zr > kE ? Math.pow(zr, 1 / 3) : (kK * zr + 16) / 116;
    return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
  }
  function gammaAdjustSRGB(companded) {
    const sign = Math.sign(companded);
    companded = Math.abs(companded);
    const linear = companded <= 0.04045 ? companded / 12.92 : Math.pow((companded + 0.055) / 1.055, 2.4);
    return linear * sign;
  }
  var rgb2xyz = (r, g, b) => {
    r = gammaAdjustSRGB(r / 255);
    g = gammaAdjustSRGB(g / 255);
    b = gammaAdjustSRGB(b / 255);
    const { MtxRGB2XYZ, MtxAdaptMa, MtxAdaptMaI, Xn, Yn, Zn, As, Bs, Cs } = lab_constants_default;
    let x = r * MtxRGB2XYZ.m00 + g * MtxRGB2XYZ.m10 + b * MtxRGB2XYZ.m20;
    let y = r * MtxRGB2XYZ.m01 + g * MtxRGB2XYZ.m11 + b * MtxRGB2XYZ.m21;
    let z = r * MtxRGB2XYZ.m02 + g * MtxRGB2XYZ.m12 + b * MtxRGB2XYZ.m22;
    const Ad = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
    const Bd = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
    const Cd = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;
    let X = x * MtxAdaptMa.m00 + y * MtxAdaptMa.m10 + z * MtxAdaptMa.m20;
    let Y = x * MtxAdaptMa.m01 + y * MtxAdaptMa.m11 + z * MtxAdaptMa.m21;
    let Z = x * MtxAdaptMa.m02 + y * MtxAdaptMa.m12 + z * MtxAdaptMa.m22;
    X *= Ad / As;
    Y *= Bd / Bs;
    Z *= Cd / Cs;
    x = X * MtxAdaptMaI.m00 + Y * MtxAdaptMaI.m10 + Z * MtxAdaptMaI.m20;
    y = X * MtxAdaptMaI.m01 + Y * MtxAdaptMaI.m11 + Z * MtxAdaptMaI.m21;
    z = X * MtxAdaptMaI.m02 + Y * MtxAdaptMaI.m12 + Z * MtxAdaptMaI.m22;
    return [x, y, z];
  };
  var rgb2lab_default = rgb2lab;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/lab/index.js
  Color_default.prototype.lab = function() {
    return rgb2lab_default(this._rgb);
  };
  var lab = (...args) => new Color_default(...args, "lab");
  Object.assign(chroma_default, { lab, getLabWhitePoint, setLabWhitePoint });
  input_default.format.lab = lab2rgb_default;
  input_default.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack_default(args, "lab");
      if (type_default(args) === "array" && args.length === 3) {
        return "lab";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/ops/darken.js
  Color_default.prototype.darken = function(amount = 1) {
    const me = this;
    const lab3 = me.lab();
    lab3[0] -= lab_constants_default.Kn * amount;
    return new Color_default(lab3, "lab").alpha(me.alpha(), true);
  };
  Color_default.prototype.brighten = function(amount = 1) {
    return this.darken(-amount);
  };
  Color_default.prototype.darker = Color_default.prototype.darken;
  Color_default.prototype.brighter = Color_default.prototype.brighten;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/ops/get.js
  Color_default.prototype.get = function(mc) {
    const [mode, channel] = mc.split(".");
    const src = this[mode]();
    if (channel) {
      const i = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
      if (i > -1)
        return src[i];
      throw new Error(`unknown channel ${channel} in mode ${mode}`);
    } else {
      return src;
    }
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/ops/luminance.js
  var { pow } = Math;
  var EPS = 1e-7;
  var MAX_ITER = 20;
  Color_default.prototype.luminance = function(lum2, mode = "rgb") {
    if (lum2 !== void 0 && type_default(lum2) === "number") {
      if (lum2 === 0) {
        return new Color_default([0, 0, 0, this._rgb[3]], "rgb");
      }
      if (lum2 === 1) {
        return new Color_default([255, 255, 255, this._rgb[3]], "rgb");
      }
      let cur_lum = this.luminance();
      let max_iter = MAX_ITER;
      const test = (low, high) => {
        const mid = low.interpolate(high, 0.5, mode);
        const lm = mid.luminance();
        if (Math.abs(lum2 - lm) < EPS || !max_iter--) {
          return mid;
        }
        return lm > lum2 ? test(low, mid) : test(mid, high);
      };
      const rgb3 = (cur_lum > lum2 ? test(new Color_default([0, 0, 0]), this) : test(this, new Color_default([255, 255, 255]))).rgb();
      return new Color_default([...rgb3, this._rgb[3]]);
    }
    return rgb2luminance(...this._rgb.slice(0, 3));
  };
  var rgb2luminance = (r, g, b) => {
    r = luminance_x(r);
    g = luminance_x(g);
    b = luminance_x(b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  var luminance_x = (x) => {
    x /= 255;
    return x <= 0.03928 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/index.js
  var interpolator_default = {};

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/generator/mix.js
  var mix_default = (col1, col2, f = 0.5, ...rest) => {
    let mode = rest[0] || "lrgb";
    if (!interpolator_default[mode] && !rest.length) {
      mode = Object.keys(interpolator_default)[0];
    }
    if (!interpolator_default[mode]) {
      throw new Error(`interpolation mode ${mode} is not defined`);
    }
    if (type_default(col1) !== "object")
      col1 = new Color_default(col1);
    if (type_default(col2) !== "object")
      col2 = new Color_default(col2);
    return interpolator_default[mode](col1, col2, f).alpha(
      col1.alpha() + f * (col2.alpha() - col1.alpha())
    );
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/ops/mix.js
  Color_default.prototype.mix = Color_default.prototype.interpolate = function(col2, f = 0.5, ...rest) {
    return mix_default(this, col2, f, ...rest);
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/ops/premultiply.js
  Color_default.prototype.premultiply = function(mutate = false) {
    const rgb3 = this._rgb;
    const a = rgb3[3];
    if (mutate) {
      this._rgb = [rgb3[0] * a, rgb3[1] * a, rgb3[2] * a, a];
      return this;
    } else {
      return new Color_default([rgb3[0] * a, rgb3[1] * a, rgb3[2] * a, a], "rgb");
    }
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/lch/lch2lab.js
  var { sin, cos } = Math;
  var lch2lab = (...args) => {
    let [l, c, h] = unpack_default(args, "lch");
    if (isNaN(h))
      h = 0;
    h = h * DEG2RAD;
    return [l, cos(h) * c, sin(h) * c];
  };
  var lch2lab_default = lch2lab;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/lch/lch2rgb.js
  var lch2rgb = (...args) => {
    args = unpack_default(args, "lch");
    const [l, c, h] = args;
    const [L, a, b_] = lch2lab_default(l, c, h);
    const [r, g, b] = lab2rgb_default(L, a, b_);
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };
  var lch2rgb_default = lch2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/lch/hcl2rgb.js
  var hcl2rgb = (...args) => {
    const hcl2 = reverse3(unpack_default(args, "hcl"));
    return lch2rgb_default(...hcl2);
  };
  var hcl2rgb_default = hcl2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/lch/lab2lch.js
  var { sqrt, atan2, round: round2 } = Math;
  var lab2lch = (...args) => {
    const [l, a, b] = unpack_default(args, "lab");
    const c = sqrt(a * a + b * b);
    let h = (atan2(b, a) * RAD2DEG + 360) % 360;
    if (round2(c * 1e4) === 0)
      h = Number.NaN;
    return [l, c, h];
  };
  var lab2lch_default = lab2lch;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/lch/rgb2lch.js
  var rgb2lch = (...args) => {
    const [r, g, b, ...rest] = unpack_default(args, "rgb");
    const [l, a, b_] = rgb2lab_default(r, g, b);
    const [L, c, h] = lab2lch_default(l, a, b_);
    return [L, c, h, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
  };
  var rgb2lch_default = rgb2lch;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/lch/index.js
  Color_default.prototype.lch = function() {
    return rgb2lch_default(this._rgb);
  };
  Color_default.prototype.hcl = function() {
    return reverse3(rgb2lch_default(this._rgb));
  };
  var lch = (...args) => new Color_default(...args, "lch");
  var hcl = (...args) => new Color_default(...args, "hcl");
  Object.assign(chroma_default, { lch, hcl });
  input_default.format.lch = lch2rgb_default;
  input_default.format.hcl = hcl2rgb_default;
  ["lch", "hcl"].forEach(
    (m) => input_default.autodetect.push({
      p: 2,
      test: (...args) => {
        args = unpack_default(args, m);
        if (type_default(args) === "array" && args.length === 3) {
          return m;
        }
      }
    })
  );

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/ops/saturate.js
  Color_default.prototype.saturate = function(amount = 1) {
    const me = this;
    const lch3 = me.lch();
    lch3[1] += lab_constants_default.Kn * amount;
    if (lch3[1] < 0)
      lch3[1] = 0;
    return new Color_default(lch3, "lch").alpha(me.alpha(), true);
  };
  Color_default.prototype.desaturate = function(amount = 1) {
    return this.saturate(-amount);
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/ops/set.js
  Color_default.prototype.set = function(mc, value, mutate = false) {
    const [mode, channel] = mc.split(".");
    const src = this[mode]();
    if (channel) {
      const i = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
      if (i > -1) {
        if (type_default(value) == "string") {
          switch (value.charAt(0)) {
            case "+":
              src[i] += +value;
              break;
            case "-":
              src[i] += +value;
              break;
            case "*":
              src[i] *= +value.substr(1);
              break;
            case "/":
              src[i] /= +value.substr(1);
              break;
            default:
              src[i] = +value;
          }
        } else if (type_default(value) === "number") {
          src[i] = value;
        } else {
          throw new Error(`unsupported value for Color.set`);
        }
        const out = new Color_default(src, mode);
        if (mutate) {
          this._rgb = out._rgb;
          return this;
        }
        return out;
      }
      throw new Error(`unknown channel ${channel} in mode ${mode}`);
    } else {
      return src;
    }
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/ops/shade.js
  Color_default.prototype.tint = function(f = 0.5, ...rest) {
    return mix_default(this, "white", f, ...rest);
  };
  Color_default.prototype.shade = function(f = 0.5, ...rest) {
    return mix_default(this, "black", f, ...rest);
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/rgb.js
  var rgb = (col1, col2, f) => {
    const xyz0 = col1._rgb;
    const xyz1 = col2._rgb;
    return new Color_default(
      xyz0[0] + f * (xyz1[0] - xyz0[0]),
      xyz0[1] + f * (xyz1[1] - xyz0[1]),
      xyz0[2] + f * (xyz1[2] - xyz0[2]),
      "rgb"
    );
  };
  interpolator_default.rgb = rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/lrgb.js
  var { sqrt: sqrt2, pow: pow2 } = Math;
  var lrgb = (col1, col2, f) => {
    const [x1, y1, z1] = col1._rgb;
    const [x2, y2, z2] = col2._rgb;
    return new Color_default(
      sqrt2(pow2(x1, 2) * (1 - f) + pow2(x2, 2) * f),
      sqrt2(pow2(y1, 2) * (1 - f) + pow2(y2, 2) * f),
      sqrt2(pow2(z1, 2) * (1 - f) + pow2(z2, 2) * f),
      "rgb"
    );
  };
  interpolator_default.lrgb = lrgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/lab.js
  var lab2 = (col1, col2, f) => {
    const xyz0 = col1.lab();
    const xyz1 = col2.lab();
    return new Color_default(
      xyz0[0] + f * (xyz1[0] - xyz0[0]),
      xyz0[1] + f * (xyz1[1] - xyz0[1]),
      xyz0[2] + f * (xyz1[2] - xyz0[2]),
      "lab"
    );
  };
  interpolator_default.lab = lab2;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/_hsx.js
  var hsx_default = (col1, col2, f, m) => {
    let xyz0, xyz1;
    if (m === "hsl") {
      xyz0 = col1.hsl();
      xyz1 = col2.hsl();
    } else if (m === "hsv") {
      xyz0 = col1.hsv();
      xyz1 = col2.hsv();
    } else if (m === "hcg") {
      xyz0 = col1.hcg();
      xyz1 = col2.hcg();
    } else if (m === "hsi") {
      xyz0 = col1.hsi();
      xyz1 = col2.hsi();
    } else if (m === "lch" || m === "hcl") {
      m = "hcl";
      xyz0 = col1.hcl();
      xyz1 = col2.hcl();
    } else if (m === "oklch") {
      xyz0 = col1.oklch().reverse();
      xyz1 = col2.oklch().reverse();
    }
    let hue0, hue1, sat0, sat1, lbv0, lbv1;
    if (m.substr(0, 1) === "h" || m === "oklch") {
      [hue0, sat0, lbv0] = xyz0;
      [hue1, sat1, lbv1] = xyz1;
    }
    let sat, hue, lbv, dh;
    if (!isNaN(hue0) && !isNaN(hue1)) {
      if (hue1 > hue0 && hue1 - hue0 > 180) {
        dh = hue1 - (hue0 + 360);
      } else if (hue1 < hue0 && hue0 - hue1 > 180) {
        dh = hue1 + 360 - hue0;
      } else {
        dh = hue1 - hue0;
      }
      hue = hue0 + f * dh;
    } else if (!isNaN(hue0)) {
      hue = hue0;
      if ((lbv1 == 1 || lbv1 == 0) && m != "hsv")
        sat = sat0;
    } else if (!isNaN(hue1)) {
      hue = hue1;
      if ((lbv0 == 1 || lbv0 == 0) && m != "hsv")
        sat = sat1;
    } else {
      hue = Number.NaN;
    }
    if (sat === void 0)
      sat = sat0 + f * (sat1 - sat0);
    lbv = lbv0 + f * (lbv1 - lbv0);
    return m === "oklch" ? new Color_default([lbv, sat, hue], m) : new Color_default([hue, sat, lbv], m);
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/lch.js
  var lch2 = (col1, col2, f) => {
    return hsx_default(col1, col2, f, "lch");
  };
  interpolator_default.lch = lch2;
  interpolator_default.hcl = lch2;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/num/num2rgb.js
  var num2rgb = (num3) => {
    if (type_default(num3) == "number" && num3 >= 0 && num3 <= 16777215) {
      const r = num3 >> 16;
      const g = num3 >> 8 & 255;
      const b = num3 & 255;
      return [r, g, b, 1];
    }
    throw new Error("unknown num color: " + num3);
  };
  var num2rgb_default = num2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/num/rgb2num.js
  var rgb2num = (...args) => {
    const [r, g, b] = unpack_default(args, "rgb");
    return (r << 16) + (g << 8) + b;
  };
  var rgb2num_default = rgb2num;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/num/index.js
  Color_default.prototype.num = function() {
    return rgb2num_default(this._rgb);
  };
  var num = (...args) => new Color_default(...args, "num");
  Object.assign(chroma_default, { num });
  input_default.format.num = num2rgb_default;
  input_default.autodetect.push({
    p: 5,
    test: (...args) => {
      if (args.length === 1 && type_default(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
        return "num";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/num.js
  var num2 = (col1, col2, f) => {
    const c1 = col1.num();
    const c2 = col2.num();
    return new Color_default(c1 + f * (c2 - c1), "num");
  };
  interpolator_default.num = num2;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hcg/hcg2rgb.js
  var { floor } = Math;
  var hcg2rgb = (...args) => {
    args = unpack_default(args, "hcg");
    let [h, c, _g] = args;
    let r, g, b;
    _g = _g * 255;
    const _c = c * 255;
    if (c === 0) {
      r = g = b = _g;
    } else {
      if (h === 360)
        h = 0;
      if (h > 360)
        h -= 360;
      if (h < 0)
        h += 360;
      h /= 60;
      const i = floor(h);
      const f = h - i;
      const p = _g * (1 - c);
      const q = p + _c * (1 - f);
      const t2 = p + _c * f;
      const v = p + _c;
      switch (i) {
        case 0:
          [r, g, b] = [v, t2, p];
          break;
        case 1:
          [r, g, b] = [q, v, p];
          break;
        case 2:
          [r, g, b] = [p, v, t2];
          break;
        case 3:
          [r, g, b] = [p, q, v];
          break;
        case 4:
          [r, g, b] = [t2, p, v];
          break;
        case 5:
          [r, g, b] = [v, p, q];
          break;
      }
    }
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };
  var hcg2rgb_default = hcg2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hcg/rgb2hcg.js
  var rgb2hcg = (...args) => {
    const [r, g, b] = unpack_default(args, "rgb");
    const minRgb = min2(r, g, b);
    const maxRgb = max2(r, g, b);
    const delta = maxRgb - minRgb;
    const c = delta * 100 / 255;
    const _g = minRgb / (255 - delta) * 100;
    let h;
    if (delta === 0) {
      h = Number.NaN;
    } else {
      if (r === maxRgb)
        h = (g - b) / delta;
      if (g === maxRgb)
        h = 2 + (b - r) / delta;
      if (b === maxRgb)
        h = 4 + (r - g) / delta;
      h *= 60;
      if (h < 0)
        h += 360;
    }
    return [h, c, _g];
  };
  var rgb2hcg_default = rgb2hcg;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hcg/index.js
  Color_default.prototype.hcg = function() {
    return rgb2hcg_default(this._rgb);
  };
  var hcg = (...args) => new Color_default(...args, "hcg");
  chroma_default.hcg = hcg;
  input_default.format.hcg = hcg2rgb_default;
  input_default.autodetect.push({
    p: 1,
    test: (...args) => {
      args = unpack_default(args, "hcg");
      if (type_default(args) === "array" && args.length === 3) {
        return "hcg";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/hcg.js
  var hcg2 = (col1, col2, f) => {
    return hsx_default(col1, col2, f, "hcg");
  };
  interpolator_default.hcg = hcg2;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hsi/hsi2rgb.js
  var { cos: cos2 } = Math;
  var hsi2rgb = (...args) => {
    args = unpack_default(args, "hsi");
    let [h, s, i] = args;
    let r, g, b;
    if (isNaN(h))
      h = 0;
    if (isNaN(s))
      s = 0;
    if (h > 360)
      h -= 360;
    if (h < 0)
      h += 360;
    h /= 360;
    if (h < 1 / 3) {
      b = (1 - s) / 3;
      r = (1 + s * cos2(TWOPI * h) / cos2(PITHIRD - TWOPI * h)) / 3;
      g = 1 - (b + r);
    } else if (h < 2 / 3) {
      h -= 1 / 3;
      r = (1 - s) / 3;
      g = (1 + s * cos2(TWOPI * h) / cos2(PITHIRD - TWOPI * h)) / 3;
      b = 1 - (r + g);
    } else {
      h -= 2 / 3;
      g = (1 - s) / 3;
      b = (1 + s * cos2(TWOPI * h) / cos2(PITHIRD - TWOPI * h)) / 3;
      r = 1 - (g + b);
    }
    r = limit_default(i * r * 3);
    g = limit_default(i * g * 3);
    b = limit_default(i * b * 3);
    return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
  };
  var hsi2rgb_default = hsi2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hsi/rgb2hsi.js
  var { min: min3, sqrt: sqrt3, acos } = Math;
  var rgb2hsi = (...args) => {
    let [r, g, b] = unpack_default(args, "rgb");
    r /= 255;
    g /= 255;
    b /= 255;
    let h;
    const min_ = min3(r, g, b);
    const i = (r + g + b) / 3;
    const s = i > 0 ? 1 - min_ / i : 0;
    if (s === 0) {
      h = NaN;
    } else {
      h = (r - g + (r - b)) / 2;
      h /= sqrt3((r - g) * (r - g) + (r - b) * (g - b));
      h = acos(h);
      if (b > g) {
        h = TWOPI - h;
      }
      h /= TWOPI;
    }
    return [h * 360, s, i];
  };
  var rgb2hsi_default = rgb2hsi;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hsi/index.js
  Color_default.prototype.hsi = function() {
    return rgb2hsi_default(this._rgb);
  };
  var hsi = (...args) => new Color_default(...args, "hsi");
  chroma_default.hsi = hsi;
  input_default.format.hsi = hsi2rgb_default;
  input_default.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack_default(args, "hsi");
      if (type_default(args) === "array" && args.length === 3) {
        return "hsi";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/hsi.js
  var hsi2 = (col1, col2, f) => {
    return hsx_default(col1, col2, f, "hsi");
  };
  interpolator_default.hsi = hsi2;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hsl/hsl2rgb.js
  var hsl2rgb = (...args) => {
    args = unpack_default(args, "hsl");
    const [h, s, l] = args;
    let r, g, b;
    if (s === 0) {
      r = g = b = l * 255;
    } else {
      const t3 = [0, 0, 0];
      const c = [0, 0, 0];
      const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const t1 = 2 * l - t2;
      const h_ = h / 360;
      t3[0] = h_ + 1 / 3;
      t3[1] = h_;
      t3[2] = h_ - 1 / 3;
      for (let i = 0; i < 3; i++) {
        if (t3[i] < 0)
          t3[i] += 1;
        if (t3[i] > 1)
          t3[i] -= 1;
        if (6 * t3[i] < 1)
          c[i] = t1 + (t2 - t1) * 6 * t3[i];
        else if (2 * t3[i] < 1)
          c[i] = t2;
        else if (3 * t3[i] < 2)
          c[i] = t1 + (t2 - t1) * (2 / 3 - t3[i]) * 6;
        else
          c[i] = t1;
      }
      [r, g, b] = [c[0] * 255, c[1] * 255, c[2] * 255];
    }
    if (args.length > 3) {
      return [r, g, b, args[3]];
    }
    return [r, g, b, 1];
  };
  var hsl2rgb_default = hsl2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hsl/rgb2hsl.js
  var rgb2hsl = (...args) => {
    args = unpack_default(args, "rgba");
    let [r, g, b] = args;
    r /= 255;
    g /= 255;
    b /= 255;
    const minRgb = min2(r, g, b);
    const maxRgb = max2(r, g, b);
    const l = (maxRgb + minRgb) / 2;
    let s, h;
    if (maxRgb === minRgb) {
      s = 0;
      h = Number.NaN;
    } else {
      s = l < 0.5 ? (maxRgb - minRgb) / (maxRgb + minRgb) : (maxRgb - minRgb) / (2 - maxRgb - minRgb);
    }
    if (r == maxRgb)
      h = (g - b) / (maxRgb - minRgb);
    else if (g == maxRgb)
      h = 2 + (b - r) / (maxRgb - minRgb);
    else if (b == maxRgb)
      h = 4 + (r - g) / (maxRgb - minRgb);
    h *= 60;
    if (h < 0)
      h += 360;
    if (args.length > 3 && args[3] !== void 0)
      return [h, s, l, args[3]];
    return [h, s, l];
  };
  var rgb2hsl_default = rgb2hsl;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hsl/index.js
  Color_default.prototype.hsl = function() {
    return rgb2hsl_default(this._rgb);
  };
  var hsl = (...args) => new Color_default(...args, "hsl");
  chroma_default.hsl = hsl;
  input_default.format.hsl = hsl2rgb_default;
  input_default.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack_default(args, "hsl");
      if (type_default(args) === "array" && args.length === 3) {
        return "hsl";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/hsl.js
  var hsl2 = (col1, col2, f) => {
    return hsx_default(col1, col2, f, "hsl");
  };
  interpolator_default.hsl = hsl2;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hsv/hsv2rgb.js
  var { floor: floor2 } = Math;
  var hsv2rgb = (...args) => {
    args = unpack_default(args, "hsv");
    let [h, s, v] = args;
    let r, g, b;
    v *= 255;
    if (s === 0) {
      r = g = b = v;
    } else {
      if (h === 360)
        h = 0;
      if (h > 360)
        h -= 360;
      if (h < 0)
        h += 360;
      h /= 60;
      const i = floor2(h);
      const f = h - i;
      const p = v * (1 - s);
      const q = v * (1 - s * f);
      const t2 = v * (1 - s * (1 - f));
      switch (i) {
        case 0:
          [r, g, b] = [v, t2, p];
          break;
        case 1:
          [r, g, b] = [q, v, p];
          break;
        case 2:
          [r, g, b] = [p, v, t2];
          break;
        case 3:
          [r, g, b] = [p, q, v];
          break;
        case 4:
          [r, g, b] = [t2, p, v];
          break;
        case 5:
          [r, g, b] = [v, p, q];
          break;
      }
    }
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };
  var hsv2rgb_default = hsv2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hsv/rgb2hsv.js
  var { min: min4, max: max3 } = Math;
  var rgb2hsl2 = (...args) => {
    args = unpack_default(args, "rgb");
    let [r, g, b] = args;
    const min_ = min4(r, g, b);
    const max_ = max3(r, g, b);
    const delta = max_ - min_;
    let h, s, v;
    v = max_ / 255;
    if (max_ === 0) {
      h = Number.NaN;
      s = 0;
    } else {
      s = delta / max_;
      if (r === max_)
        h = (g - b) / delta;
      if (g === max_)
        h = 2 + (b - r) / delta;
      if (b === max_)
        h = 4 + (r - g) / delta;
      h *= 60;
      if (h < 0)
        h += 360;
    }
    return [h, s, v];
  };
  var rgb2hsv_default = rgb2hsl2;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hsv/index.js
  Color_default.prototype.hsv = function() {
    return rgb2hsv_default(this._rgb);
  };
  var hsv = (...args) => new Color_default(...args, "hsv");
  chroma_default.hsv = hsv;
  input_default.format.hsv = hsv2rgb_default;
  input_default.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack_default(args, "hsv");
      if (type_default(args) === "array" && args.length === 3) {
        return "hsv";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/hsv.js
  var hsv2 = (col1, col2, f) => {
    return hsx_default(col1, col2, f, "hsv");
  };
  interpolator_default.hsv = hsv2;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/multiply-matrices.js
  function multiplyMatrices(A, B) {
    let m = A.length;
    if (!Array.isArray(A[0])) {
      A = [A];
    }
    if (!Array.isArray(B[0])) {
      B = B.map((x) => [x]);
    }
    let p = B[0].length;
    let B_cols = B[0].map((_, i) => B.map((x) => x[i]));
    let product = A.map(
      (row) => B_cols.map((col) => {
        if (!Array.isArray(row)) {
          return col.reduce((a, c) => a + c * row, 0);
        }
        return row.reduce((a, c, i) => a + c * (col[i] || 0), 0);
      })
    );
    if (m === 1) {
      product = product[0];
    }
    if (p === 1) {
      return product.map((x) => x[0]);
    }
    return product;
  }

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/oklab/oklab2rgb.js
  var oklab2rgb = (...args) => {
    args = unpack_default(args, "lab");
    const [L, a, b, ...rest] = args;
    const [X, Y, Z] = OKLab_to_XYZ([L, a, b]);
    const [r, g, b_] = xyz2rgb(X, Y, Z);
    return [r, g, b_, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
  };
  function OKLab_to_XYZ(OKLab) {
    var LMStoXYZ = [
      [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
      [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
      [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
    ];
    var OKLabtoLMS = [
      [1, 0.3963377773761749, 0.2158037573099136],
      [1, -0.1055613458156586, -0.0638541728258133],
      [1, -0.0894841775298119, -1.2914855480194092]
    ];
    var LMSnl = multiplyMatrices(OKLabtoLMS, OKLab);
    return multiplyMatrices(
      LMStoXYZ,
      LMSnl.map((c) => c ** 3)
    );
  }
  var oklab2rgb_default = oklab2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/oklab/rgb2oklab.js
  var rgb2oklab = (...args) => {
    const [r, g, b, ...rest] = unpack_default(args, "rgb");
    const xyz = rgb2xyz(r, g, b);
    const oklab3 = XYZ_to_OKLab(xyz);
    return [...oklab3, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
  };
  function XYZ_to_OKLab(XYZ) {
    const XYZtoLMS = [
      [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
      [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
      [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
    ];
    const LMStoOKLab = [
      [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
      [1.9779985324311684, -2.42859224204858, 0.450593709617411],
      [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
    ];
    const LMS = multiplyMatrices(XYZtoLMS, XYZ);
    return multiplyMatrices(
      LMStoOKLab,
      LMS.map((c) => Math.cbrt(c))
    );
  }
  var rgb2oklab_default = rgb2oklab;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/oklab/index.js
  Color_default.prototype.oklab = function() {
    return rgb2oklab_default(this._rgb);
  };
  var oklab = (...args) => new Color_default(...args, "oklab");
  Object.assign(chroma_default, { oklab });
  input_default.format.oklab = oklab2rgb_default;
  input_default.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack_default(args, "oklab");
      if (type_default(args) === "array" && args.length === 3) {
        return "oklab";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/oklab.js
  var oklab2 = (col1, col2, f) => {
    const xyz0 = col1.oklab();
    const xyz1 = col2.oklab();
    return new Color_default(
      xyz0[0] + f * (xyz1[0] - xyz0[0]),
      xyz0[1] + f * (xyz1[1] - xyz0[1]),
      xyz0[2] + f * (xyz1[2] - xyz0[2]),
      "oklab"
    );
  };
  interpolator_default.oklab = oklab2;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/interpolator/oklch.js
  var oklch = (col1, col2, f) => {
    return hsx_default(col1, col2, f, "oklch");
  };
  interpolator_default.oklch = oklch;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/generator/average.js
  var { pow: pow3, sqrt: sqrt4, PI: PI2, cos: cos3, sin: sin2, atan2: atan22 } = Math;
  var average_default = (colors, mode = "lrgb", weights = null) => {
    const l = colors.length;
    if (!weights)
      weights = Array.from(new Array(l)).map(() => 1);
    const k = l / weights.reduce(function(a, b) {
      return a + b;
    });
    weights.forEach((w, i) => {
      weights[i] *= k;
    });
    colors = colors.map((c) => new Color_default(c));
    if (mode === "lrgb") {
      return _average_lrgb(colors, weights);
    }
    const first = colors.shift();
    const xyz = first.get(mode);
    const cnt = [];
    let dx = 0;
    let dy = 0;
    for (let i = 0; i < xyz.length; i++) {
      xyz[i] = (xyz[i] || 0) * weights[0];
      cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
      if (mode.charAt(i) === "h" && !isNaN(xyz[i])) {
        const A = xyz[i] / 180 * PI2;
        dx += cos3(A) * weights[0];
        dy += sin2(A) * weights[0];
      }
    }
    let alpha = first.alpha() * weights[0];
    colors.forEach((c, ci) => {
      const xyz2 = c.get(mode);
      alpha += c.alpha() * weights[ci + 1];
      for (let i = 0; i < xyz.length; i++) {
        if (!isNaN(xyz2[i])) {
          cnt[i] += weights[ci + 1];
          if (mode.charAt(i) === "h") {
            const A = xyz2[i] / 180 * PI2;
            dx += cos3(A) * weights[ci + 1];
            dy += sin2(A) * weights[ci + 1];
          } else {
            xyz[i] += xyz2[i] * weights[ci + 1];
          }
        }
      }
    });
    for (let i = 0; i < xyz.length; i++) {
      if (mode.charAt(i) === "h") {
        let A = atan22(dy / cnt[i], dx / cnt[i]) / PI2 * 180;
        while (A < 0)
          A += 360;
        while (A >= 360)
          A -= 360;
        xyz[i] = A;
      } else {
        xyz[i] = xyz[i] / cnt[i];
      }
    }
    alpha /= l;
    return new Color_default(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
  };
  var _average_lrgb = (colors, weights) => {
    const l = colors.length;
    const xyz = [0, 0, 0, 0];
    for (let i = 0; i < colors.length; i++) {
      const col = colors[i];
      const f = weights[i] / l;
      const rgb3 = col._rgb;
      xyz[0] += pow3(rgb3[0], 2) * f;
      xyz[1] += pow3(rgb3[1], 2) * f;
      xyz[2] += pow3(rgb3[2], 2) * f;
      xyz[3] += rgb3[3] * f;
    }
    xyz[0] = sqrt4(xyz[0]);
    xyz[1] = sqrt4(xyz[1]);
    xyz[2] = sqrt4(xyz[2]);
    if (xyz[3] > 0.9999999)
      xyz[3] = 1;
    return new Color_default(clip_rgb_default(xyz));
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/generator/scale.js
  var { pow: pow4 } = Math;
  function scale_default(colors) {
    let _mode = "rgb";
    let _nacol = chroma_default("#ccc");
    let _spread = 0;
    let _positions = [0, 1];
    let _domain = [0, 1];
    let _pos = [];
    let _padding = [0, 0];
    let _classes = false;
    let _colors = [];
    let _out = false;
    let _min = 0;
    let _max = 1;
    let _correctLightness = false;
    let _colorCache = {};
    let _useCache = true;
    let _gamma = 1;
    const setColors = function(colors2) {
      colors2 = colors2 || ["#fff", "#000"];
      if (colors2 && type_default(colors2) === "string" && chroma_default.brewer && chroma_default.brewer[colors2.toLowerCase()]) {
        colors2 = chroma_default.brewer[colors2.toLowerCase()];
      }
      if (type_default(colors2) === "array") {
        if (colors2.length === 1) {
          colors2 = [colors2[0], colors2[0]];
        }
        colors2 = colors2.slice(0);
        for (let c = 0; c < colors2.length; c++) {
          colors2[c] = chroma_default(colors2[c]);
        }
        _pos.length = 0;
        for (let c = 0; c < colors2.length; c++) {
          _pos.push(c / (colors2.length - 1));
        }
      }
      resetCache();
      return _colors = colors2;
    };
    const getClass = function(value) {
      if (_classes != null) {
        const n = _classes.length - 1;
        let i = 0;
        while (i < n && value >= _classes[i]) {
          i++;
        }
        return i - 1;
      }
      return 0;
    };
    let tMapLightness = (t2) => t2;
    let tMapDomain = (t2) => t2;
    const getColor = function(val, bypassMap) {
      let col, t2;
      if (bypassMap == null) {
        bypassMap = false;
      }
      if (isNaN(val) || val === null) {
        return _nacol;
      }
      if (!bypassMap) {
        if (_classes && _classes.length > 2) {
          const c = getClass(val);
          t2 = c / (_classes.length - 2);
        } else if (_max !== _min) {
          t2 = (val - _min) / (_max - _min);
        } else {
          t2 = 1;
        }
      } else {
        t2 = val;
      }
      t2 = tMapDomain(t2);
      if (!bypassMap) {
        t2 = tMapLightness(t2);
      }
      if (_gamma !== 1) {
        t2 = pow4(t2, _gamma);
      }
      t2 = _padding[0] + t2 * (1 - _padding[0] - _padding[1]);
      t2 = limit_default(t2, 0, 1);
      const k = Math.floor(t2 * 1e4);
      if (_useCache && _colorCache[k]) {
        col = _colorCache[k];
      } else {
        if (type_default(_colors) === "array") {
          for (let i = 0; i < _pos.length; i++) {
            const p = _pos[i];
            if (t2 <= p) {
              col = _colors[i];
              break;
            }
            if (t2 >= p && i === _pos.length - 1) {
              col = _colors[i];
              break;
            }
            if (t2 > p && t2 < _pos[i + 1]) {
              t2 = (t2 - p) / (_pos[i + 1] - p);
              col = chroma_default.interpolate(
                _colors[i],
                _colors[i + 1],
                t2,
                _mode
              );
              break;
            }
          }
        } else if (type_default(_colors) === "function") {
          col = _colors(t2);
        }
        if (_useCache) {
          _colorCache[k] = col;
        }
      }
      return col;
    };
    var resetCache = () => _colorCache = {};
    setColors(colors);
    const f = function(v) {
      const c = chroma_default(getColor(v));
      if (_out && c[_out]) {
        return c[_out]();
      } else {
        return c;
      }
    };
    f.classes = function(classes) {
      if (classes != null) {
        if (type_default(classes) === "array") {
          _classes = classes;
          _positions = [classes[0], classes[classes.length - 1]];
        } else {
          const d = chroma_default.analyze(_positions);
          if (classes === 0) {
            _classes = [d.min, d.max];
          } else {
            _classes = chroma_default.limits(d, "e", classes);
          }
        }
        return f;
      }
      return _classes;
    };
    f.domain = function(domain) {
      if (!arguments.length) {
        return _domain;
      }
      _domain = domain.slice(0);
      _min = domain[0];
      _max = domain[domain.length - 1];
      _pos = [];
      const k = _colors.length;
      if (domain.length === k && _min !== _max) {
        for (let d of Array.from(domain)) {
          _pos.push((d - _min) / (_max - _min));
        }
      } else {
        for (let c = 0; c < k; c++) {
          _pos.push(c / (k - 1));
        }
        if (domain.length > 2) {
          const tOut = domain.map((d, i) => i / (domain.length - 1));
          const tBreaks = domain.map((d) => (d - _min) / (_max - _min));
          if (!tBreaks.every((val, i) => tOut[i] === val)) {
            tMapDomain = (t2) => {
              if (t2 <= 0 || t2 >= 1)
                return t2;
              let i = 0;
              while (t2 >= tBreaks[i + 1])
                i++;
              const f2 = (t2 - tBreaks[i]) / (tBreaks[i + 1] - tBreaks[i]);
              const out = tOut[i] + f2 * (tOut[i + 1] - tOut[i]);
              return out;
            };
          }
        }
      }
      _positions = [_min, _max];
      return f;
    };
    f.mode = function(_m) {
      if (!arguments.length) {
        return _mode;
      }
      _mode = _m;
      resetCache();
      return f;
    };
    f.range = function(colors2, _pos2) {
      setColors(colors2, _pos2);
      return f;
    };
    f.out = function(_o) {
      _out = _o;
      return f;
    };
    f.spread = function(val) {
      if (!arguments.length) {
        return _spread;
      }
      _spread = val;
      return f;
    };
    f.correctLightness = function(v) {
      if (v == null) {
        v = true;
      }
      _correctLightness = v;
      resetCache();
      if (_correctLightness) {
        tMapLightness = function(t2) {
          const L0 = getColor(0, true).lab()[0];
          const L1 = getColor(1, true).lab()[0];
          const pol = L0 > L1;
          let L_actual = getColor(t2, true).lab()[0];
          const L_ideal = L0 + (L1 - L0) * t2;
          let L_diff = L_actual - L_ideal;
          let t0 = 0;
          let t1 = 1;
          let max_iter = 20;
          while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
            (function() {
              if (pol) {
                L_diff *= -1;
              }
              if (L_diff < 0) {
                t0 = t2;
                t2 += (t1 - t2) * 0.5;
              } else {
                t1 = t2;
                t2 += (t0 - t2) * 0.5;
              }
              L_actual = getColor(t2, true).lab()[0];
              return L_diff = L_actual - L_ideal;
            })();
          }
          return t2;
        };
      } else {
        tMapLightness = (t2) => t2;
      }
      return f;
    };
    f.padding = function(p) {
      if (p != null) {
        if (type_default(p) === "number") {
          p = [p, p];
        }
        _padding = p;
        return f;
      } else {
        return _padding;
      }
    };
    f.colors = function(numColors, out) {
      if (arguments.length < 2) {
        out = "hex";
      }
      let result = [];
      if (arguments.length === 0) {
        result = _colors.slice(0);
      } else if (numColors === 1) {
        result = [f(0.5)];
      } else if (numColors > 1) {
        const dm = _positions[0];
        const dd = _positions[1] - dm;
        result = __range__(0, numColors, false).map(
          (i) => f(dm + i / (numColors - 1) * dd)
        );
      } else {
        colors = [];
        let samples = [];
        if (_classes && _classes.length > 2) {
          for (let i = 1, end2 = _classes.length, asc = 1 <= end2; asc ? i < end2 : i > end2; asc ? i++ : i--) {
            samples.push((_classes[i - 1] + _classes[i]) * 0.5);
          }
        } else {
          samples = _positions;
        }
        result = samples.map((v) => f(v));
      }
      if (chroma_default[out]) {
        result = result.map((c) => c[out]());
      }
      return result;
    };
    f.cache = function(c) {
      if (c != null) {
        _useCache = c;
        return f;
      } else {
        return _useCache;
      }
    };
    f.gamma = function(g) {
      if (g != null) {
        _gamma = g;
        return f;
      } else {
        return _gamma;
      }
    };
    f.nodata = function(d) {
      if (d != null) {
        _nacol = chroma_default(d);
        return f;
      } else {
        return _nacol;
      }
    };
    return f;
  }
  function __range__(left, right, inclusive) {
    let range = [];
    let ascending = left < right;
    let end2 = !inclusive ? right : ascending ? right + 1 : right - 1;
    for (let i = left; ascending ? i < end2 : i > end2; ascending ? i++ : i--) {
      range.push(i);
    }
    return range;
  }

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/generator/bezier.js
  var binom_row = function(n) {
    let row = [1, 1];
    for (let i = 1; i < n; i++) {
      let newrow = [1];
      for (let j = 1; j <= row.length; j++) {
        newrow[j] = (row[j] || 0) + row[j - 1];
      }
      row = newrow;
    }
    return row;
  };
  var bezier = function(colors) {
    let I, lab0, lab1, lab22;
    colors = colors.map((c) => new Color_default(c));
    if (colors.length === 2) {
      [lab0, lab1] = colors.map((c) => c.lab());
      I = function(t2) {
        const lab3 = [0, 1, 2].map((i) => lab0[i] + t2 * (lab1[i] - lab0[i]));
        return new Color_default(lab3, "lab");
      };
    } else if (colors.length === 3) {
      [lab0, lab1, lab22] = colors.map((c) => c.lab());
      I = function(t2) {
        const lab3 = [0, 1, 2].map(
          (i) => (1 - t2) * (1 - t2) * lab0[i] + 2 * (1 - t2) * t2 * lab1[i] + t2 * t2 * lab22[i]
        );
        return new Color_default(lab3, "lab");
      };
    } else if (colors.length === 4) {
      let lab3;
      [lab0, lab1, lab22, lab3] = colors.map((c) => c.lab());
      I = function(t2) {
        const lab4 = [0, 1, 2].map(
          (i) => (1 - t2) * (1 - t2) * (1 - t2) * lab0[i] + 3 * (1 - t2) * (1 - t2) * t2 * lab1[i] + 3 * (1 - t2) * t2 * t2 * lab22[i] + t2 * t2 * t2 * lab3[i]
        );
        return new Color_default(lab4, "lab");
      };
    } else if (colors.length >= 5) {
      let labs, row, n;
      labs = colors.map((c) => c.lab());
      n = colors.length - 1;
      row = binom_row(n);
      I = function(t2) {
        const u = 1 - t2;
        const lab3 = [0, 1, 2].map(
          (i) => labs.reduce(
            (sum, el, j) => sum + row[j] * u ** (n - j) * t2 ** j * el[i],
            0
          )
        );
        return new Color_default(lab3, "lab");
      };
    } else {
      throw new RangeError("No point in running bezier with only one color.");
    }
    return I;
  };
  var bezier_default = (colors) => {
    const f = bezier(colors);
    f.scale = () => scale_default(f);
    return f;
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/rgb/index.js
  var { round: round3 } = Math;
  Color_default.prototype.rgb = function(rnd = true) {
    if (rnd === false)
      return this._rgb.slice(0, 3);
    return this._rgb.slice(0, 3).map(round3);
  };
  Color_default.prototype.rgba = function(rnd = true) {
    return this._rgb.slice(0, 4).map((v, i) => {
      return i < 3 ? rnd === false ? v : round3(v) : v;
    });
  };
  var rgb2 = (...args) => new Color_default(...args, "rgb");
  Object.assign(chroma_default, { rgb: rgb2 });
  input_default.format.rgb = (...args) => {
    const rgba = unpack_default(args, "rgba");
    if (rgba[3] === void 0)
      rgba[3] = 1;
    return rgba;
  };
  input_default.autodetect.push({
    p: 3,
    test: (...args) => {
      args = unpack_default(args, "rgba");
      if (type_default(args) === "array" && (args.length === 3 || args.length === 4 && type_default(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
        return "rgb";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/generator/blend.js
  var blend = (bottom, top, mode) => {
    if (!blend[mode]) {
      throw new Error("unknown blend mode " + mode);
    }
    return blend[mode](bottom, top);
  };
  var blend_f = (f) => (bottom, top) => {
    const c0 = chroma_default(top).rgb();
    const c1 = chroma_default(bottom).rgb();
    return chroma_default.rgb(f(c0, c1));
  };
  var each = (f) => (c0, c1) => {
    const out = [];
    out[0] = f(c0[0], c1[0]);
    out[1] = f(c0[1], c1[1]);
    out[2] = f(c0[2], c1[2]);
    return out;
  };
  var normal = (a) => a;
  var multiply = (a, b) => a * b / 255;
  var darken = (a, b) => a > b ? b : a;
  var lighten = (a, b) => a > b ? a : b;
  var screen = (a, b) => 255 * (1 - (1 - a / 255) * (1 - b / 255));
  var overlay = (a, b) => b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
  var burn = (a, b) => 255 * (1 - (1 - b / 255) / (a / 255));
  var dodge = (a, b) => {
    if (a === 255)
      return 255;
    a = 255 * (b / 255) / (1 - a / 255);
    return a > 255 ? 255 : a;
  };
  blend.normal = blend_f(each(normal));
  blend.multiply = blend_f(each(multiply));
  blend.screen = blend_f(each(screen));
  blend.overlay = blend_f(each(overlay));
  blend.darken = blend_f(each(darken));
  blend.lighten = blend_f(each(lighten));
  blend.dodge = blend_f(each(dodge));
  blend.burn = blend_f(each(burn));
  var blend_default = blend;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/generator/cubehelix.js
  var { pow: pow5, sin: sin3, cos: cos4 } = Math;
  function cubehelix_default(start2 = 300, rotations = -1.5, hue = 1, gamma = 1, lightness = [0, 1]) {
    let dh = 0, dl;
    if (type_default(lightness) === "array") {
      dl = lightness[1] - lightness[0];
    } else {
      dl = 0;
      lightness = [lightness, lightness];
    }
    const f = function(fract) {
      const a = TWOPI * ((start2 + 120) / 360 + rotations * fract);
      const l = pow5(lightness[0] + dl * fract, gamma);
      const h = dh !== 0 ? hue[0] + fract * dh : hue;
      const amp = h * l * (1 - l) / 2;
      const cos_a = cos4(a);
      const sin_a = sin3(a);
      const r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
      const g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
      const b = l + amp * (1.97294 * cos_a);
      return chroma_default(clip_rgb_default([r * 255, g * 255, b * 255, 1]));
    };
    f.start = function(s) {
      if (s == null) {
        return start2;
      }
      start2 = s;
      return f;
    };
    f.rotations = function(r) {
      if (r == null) {
        return rotations;
      }
      rotations = r;
      return f;
    };
    f.gamma = function(g) {
      if (g == null) {
        return gamma;
      }
      gamma = g;
      return f;
    };
    f.hue = function(h) {
      if (h == null) {
        return hue;
      }
      hue = h;
      if (type_default(hue) === "array") {
        dh = hue[1] - hue[0];
        if (dh === 0) {
          hue = hue[1];
        }
      } else {
        dh = 0;
      }
      return f;
    };
    f.lightness = function(h) {
      if (h == null) {
        return lightness;
      }
      if (type_default(h) === "array") {
        lightness = h;
        dl = h[1] - h[0];
      } else {
        lightness = [h, h];
        dl = 0;
      }
      return f;
    };
    f.scale = () => chroma_default.scale(f);
    f.hue(hue);
    return f;
  }

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/generator/random.js
  var digits = "0123456789abcdef";
  var { floor: floor3, random } = Math;
  var random_default = (rng = random) => {
    let code = "#";
    for (let i = 0; i < 6; i++) {
      code += digits.charAt(floor3(rng() * 16));
    }
    return new Color_default(code, "hex");
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/analyze.js
  var { log, pow: pow6, floor: floor4, abs } = Math;
  function analyze(data, key = null) {
    const r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };
    if (type_default(data) === "object") {
      data = Object.values(data);
    }
    data.forEach((val) => {
      if (key && type_default(val) === "object")
        val = val[key];
      if (val !== void 0 && val !== null && !isNaN(val)) {
        r.values.push(val);
        r.sum += val;
        if (val < r.min)
          r.min = val;
        if (val > r.max)
          r.max = val;
        r.count += 1;
      }
    });
    r.domain = [r.min, r.max];
    r.limits = (mode, num3) => limits(r, mode, num3);
    return r;
  }
  function limits(data, mode = "equal", num3 = 7) {
    if (type_default(data) == "array") {
      data = analyze(data);
    }
    const { min: min6, max: max6 } = data;
    const values = data.values.sort((a, b) => a - b);
    if (num3 === 1) {
      return [min6, max6];
    }
    const limits2 = [];
    if (mode.substr(0, 1) === "c") {
      limits2.push(min6);
      limits2.push(max6);
    }
    if (mode.substr(0, 1) === "e") {
      limits2.push(min6);
      for (let i = 1; i < num3; i++) {
        limits2.push(min6 + i / num3 * (max6 - min6));
      }
      limits2.push(max6);
    } else if (mode.substr(0, 1) === "l") {
      if (min6 <= 0) {
        throw new Error(
          "Logarithmic scales are only possible for values > 0"
        );
      }
      const min_log = Math.LOG10E * log(min6);
      const max_log = Math.LOG10E * log(max6);
      limits2.push(min6);
      for (let i = 1; i < num3; i++) {
        limits2.push(pow6(10, min_log + i / num3 * (max_log - min_log)));
      }
      limits2.push(max6);
    } else if (mode.substr(0, 1) === "q") {
      limits2.push(min6);
      for (let i = 1; i < num3; i++) {
        const p = (values.length - 1) * i / num3;
        const pb = floor4(p);
        if (pb === p) {
          limits2.push(values[pb]);
        } else {
          const pr = p - pb;
          limits2.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
        }
      }
      limits2.push(max6);
    } else if (mode.substr(0, 1) === "k") {
      let cluster;
      const n = values.length;
      const assignments = new Array(n);
      const clusterSizes = new Array(num3);
      let repeat = true;
      let nb_iters = 0;
      let centroids = null;
      centroids = [];
      centroids.push(min6);
      for (let i = 1; i < num3; i++) {
        centroids.push(min6 + i / num3 * (max6 - min6));
      }
      centroids.push(max6);
      while (repeat) {
        for (let j = 0; j < num3; j++) {
          clusterSizes[j] = 0;
        }
        for (let i = 0; i < n; i++) {
          const value = values[i];
          let mindist = Number.MAX_VALUE;
          let best;
          for (let j = 0; j < num3; j++) {
            const dist = abs(centroids[j] - value);
            if (dist < mindist) {
              mindist = dist;
              best = j;
            }
            clusterSizes[best]++;
            assignments[i] = best;
          }
        }
        const newCentroids = new Array(num3);
        for (let j = 0; j < num3; j++) {
          newCentroids[j] = null;
        }
        for (let i = 0; i < n; i++) {
          cluster = assignments[i];
          if (newCentroids[cluster] === null) {
            newCentroids[cluster] = values[i];
          } else {
            newCentroids[cluster] += values[i];
          }
        }
        for (let j = 0; j < num3; j++) {
          newCentroids[j] *= 1 / clusterSizes[j];
        }
        repeat = false;
        for (let j = 0; j < num3; j++) {
          if (newCentroids[j] !== centroids[j]) {
            repeat = true;
            break;
          }
        }
        centroids = newCentroids;
        nb_iters++;
        if (nb_iters > 200) {
          repeat = false;
        }
      }
      const kClusters = {};
      for (let j = 0; j < num3; j++) {
        kClusters[j] = [];
      }
      for (let i = 0; i < n; i++) {
        cluster = assignments[i];
        kClusters[cluster].push(values[i]);
      }
      let tmpKMeansBreaks = [];
      for (let j = 0; j < num3; j++) {
        tmpKMeansBreaks.push(kClusters[j][0]);
        tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
      }
      tmpKMeansBreaks = tmpKMeansBreaks.sort((a, b) => a - b);
      limits2.push(tmpKMeansBreaks[0]);
      for (let i = 1; i < tmpKMeansBreaks.length; i += 2) {
        const v = tmpKMeansBreaks[i];
        if (!isNaN(v) && limits2.indexOf(v) === -1) {
          limits2.push(v);
        }
      }
    }
    return limits2;
  }

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/contrast.js
  var contrast_default = (a, b) => {
    a = new Color_default(a);
    b = new Color_default(b);
    const l1 = a.luminance();
    const l2 = b.luminance();
    return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/contrastAPCA.js
  var W_offset = 0.027;
  var P_in = 5e-4;
  var P_out = 0.1;
  var R_scale = 1.14;
  var B_threshold = 0.022;
  var B_exp = 1.414;
  var contrastAPCA_default = (text, bg) => {
    text = new Color_default(text);
    bg = new Color_default(bg);
    if (text.alpha() < 1) {
      text = mix_default(bg, text, text.alpha(), "rgb");
    }
    const l_text = lum(...text.rgb());
    const l_bg = lum(...bg.rgb());
    const Y_text = l_text >= B_threshold ? l_text : l_text + Math.pow(B_threshold - l_text, B_exp);
    const Y_bg = l_bg >= B_threshold ? l_bg : l_bg + Math.pow(B_threshold - l_bg, B_exp);
    const S_norm = Math.pow(Y_bg, 0.56) - Math.pow(Y_text, 0.57);
    const S_rev = Math.pow(Y_bg, 0.65) - Math.pow(Y_text, 0.62);
    const C = Math.abs(Y_bg - Y_text) < P_in ? 0 : Y_text < Y_bg ? S_norm * R_scale : S_rev * R_scale;
    const S_apc = Math.abs(C) < P_out ? 0 : C > 0 ? C - W_offset : C + W_offset;
    return S_apc * 100;
  };
  function lum(r, g, b) {
    return 0.2126729 * Math.pow(r / 255, 2.4) + 0.7151522 * Math.pow(g / 255, 2.4) + 0.072175 * Math.pow(b / 255, 2.4);
  }

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/delta-e.js
  var { sqrt: sqrt5, pow: pow7, min: min5, max: max4, atan2: atan23, abs: abs2, cos: cos5, sin: sin4, exp, PI: PI3 } = Math;
  function delta_e_default(a, b, Kl = 1, Kc = 1, Kh = 1) {
    var rad2deg = function(rad) {
      return 360 * rad / (2 * PI3);
    };
    var deg2rad = function(deg) {
      return 2 * PI3 * deg / 360;
    };
    a = new Color_default(a);
    b = new Color_default(b);
    const [L1, a1, b1] = Array.from(a.lab());
    const [L2, a2, b2] = Array.from(b.lab());
    const avgL = (L1 + L2) / 2;
    const C1 = sqrt5(pow7(a1, 2) + pow7(b1, 2));
    const C2 = sqrt5(pow7(a2, 2) + pow7(b2, 2));
    const avgC = (C1 + C2) / 2;
    const G = 0.5 * (1 - sqrt5(pow7(avgC, 7) / (pow7(avgC, 7) + pow7(25, 7))));
    const a1p = a1 * (1 + G);
    const a2p = a2 * (1 + G);
    const C1p = sqrt5(pow7(a1p, 2) + pow7(b1, 2));
    const C2p = sqrt5(pow7(a2p, 2) + pow7(b2, 2));
    const avgCp = (C1p + C2p) / 2;
    const arctan1 = rad2deg(atan23(b1, a1p));
    const arctan2 = rad2deg(atan23(b2, a2p));
    const h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
    const h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
    const avgHp = abs2(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
    const T = 1 - 0.17 * cos5(deg2rad(avgHp - 30)) + 0.24 * cos5(deg2rad(2 * avgHp)) + 0.32 * cos5(deg2rad(3 * avgHp + 6)) - 0.2 * cos5(deg2rad(4 * avgHp - 63));
    let deltaHp = h2p - h1p;
    deltaHp = abs2(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
    deltaHp = 2 * sqrt5(C1p * C2p) * sin4(deg2rad(deltaHp) / 2);
    const deltaL = L2 - L1;
    const deltaCp = C2p - C1p;
    const sl = 1 + 0.015 * pow7(avgL - 50, 2) / sqrt5(20 + pow7(avgL - 50, 2));
    const sc = 1 + 0.045 * avgCp;
    const sh = 1 + 0.015 * avgCp * T;
    const deltaTheta = 30 * exp(-pow7((avgHp - 275) / 25, 2));
    const Rc = 2 * sqrt5(pow7(avgCp, 7) / (pow7(avgCp, 7) + pow7(25, 7)));
    const Rt = -Rc * sin4(2 * deg2rad(deltaTheta));
    const result = sqrt5(
      pow7(deltaL / (Kl * sl), 2) + pow7(deltaCp / (Kc * sc), 2) + pow7(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh))
    );
    return max4(0, min5(100, result));
  }

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/distance.js
  function distance_default(a, b, mode = "lab") {
    a = new Color_default(a);
    b = new Color_default(b);
    const l1 = a.get(mode);
    const l2 = b.get(mode);
    let sum_sq = 0;
    for (let i in l1) {
      const d = (l1[i] || 0) - (l2[i] || 0);
      sum_sq += d * d;
    }
    return Math.sqrt(sum_sq);
  }

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/valid.js
  var valid_default = (...args) => {
    try {
      new Color_default(...args);
      return true;
    } catch (e2) {
      return false;
    }
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/utils/scales.js
  var scales_default = {
    cool() {
      return scale_default([chroma_default.hsl(180, 1, 0.9), chroma_default.hsl(250, 0.7, 0.4)]);
    },
    hot() {
      return scale_default(["#000", "#f00", "#ff0", "#fff"], [0, 0.25, 0.75, 1]).mode(
        "rgb"
      );
    }
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/colors/colorbrewer.js
  var colorbrewer = {
    OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
    PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
    BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
    Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
    BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
    YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
    YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
    Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
    RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
    Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
    YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
    Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
    GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
    Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
    YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
    PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
    Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
    PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
    Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
    Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
    RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
    RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
    PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
    PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
    RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
    BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
    RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
    PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
    Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
    Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
    Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
    Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
    Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
    Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
    Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
    Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
  };
  var colorbrewerTypes = Object.keys(colorbrewer);
  var typeMap = new Map(colorbrewerTypes.map((key) => [key.toLowerCase(), key]));
  var colorbrewerProxy = typeof Proxy === "function" ? new Proxy(colorbrewer, {
    get(target, prop) {
      const lower = prop.toLowerCase();
      if (typeMap.has(lower)) {
        return target[typeMap.get(lower)];
      }
    },
    getOwnPropertyNames() {
      return Object.getOwnPropertyNames(colorbrewerTypes);
    }
  }) : colorbrewer;
  var colorbrewer_default = colorbrewerProxy;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/cmyk/cmyk2rgb.js
  var cmyk2rgb = (...args) => {
    args = unpack_default(args, "cmyk");
    const [c, m, y, k] = args;
    const alpha = args.length > 4 ? args[4] : 1;
    if (k === 1)
      return [0, 0, 0, alpha];
    return [
      c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
      m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
      y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
      alpha
    ];
  };
  var cmyk2rgb_default = cmyk2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/cmyk/rgb2cmyk.js
  var { max: max5 } = Math;
  var rgb2cmyk = (...args) => {
    let [r, g, b] = unpack_default(args, "rgb");
    r = r / 255;
    g = g / 255;
    b = b / 255;
    const k = 1 - max5(r, max5(g, b));
    const f = k < 1 ? 1 / (1 - k) : 0;
    const c = (1 - r - k) * f;
    const m = (1 - g - k) * f;
    const y = (1 - b - k) * f;
    return [c, m, y, k];
  };
  var rgb2cmyk_default = rgb2cmyk;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/cmyk/index.js
  Color_default.prototype.cmyk = function() {
    return rgb2cmyk_default(this._rgb);
  };
  var cmyk = (...args) => new Color_default(...args, "cmyk");
  Object.assign(chroma_default, { cmyk });
  input_default.format.cmyk = cmyk2rgb_default;
  input_default.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack_default(args, "cmyk");
      if (type_default(args) === "array" && args.length === 4) {
        return "cmyk";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/css/hsl2css.js
  var hsl2css = (...args) => {
    const hsla = unpack_default(args, "hsla");
    let mode = last_default(args) || "lsa";
    hsla[0] = rnd2(hsla[0] || 0) + "deg";
    hsla[1] = rnd2(hsla[1] * 100) + "%";
    hsla[2] = rnd2(hsla[2] * 100) + "%";
    if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
      hsla[3] = "/ " + (hsla.length > 3 ? hsla[3] : 1);
      mode = "hsla";
    } else {
      hsla.length = 3;
    }
    return `${mode.substr(0, 3)}(${hsla.join(" ")})`;
  };
  var hsl2css_default = hsl2css;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/css/lab2css.js
  var lab2css = (...args) => {
    const laba = unpack_default(args, "lab");
    let mode = last_default(args) || "lab";
    laba[0] = rnd2(laba[0]) + "%";
    laba[1] = rnd2(laba[1]);
    laba[2] = rnd2(laba[2]);
    if (mode === "laba" || laba.length > 3 && laba[3] < 1) {
      laba[3] = "/ " + (laba.length > 3 ? laba[3] : 1);
    } else {
      laba.length = 3;
    }
    return `lab(${laba.join(" ")})`;
  };
  var lab2css_default = lab2css;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/css/lch2css.js
  var lch2css = (...args) => {
    const lcha = unpack_default(args, "lch");
    let mode = last_default(args) || "lab";
    lcha[0] = rnd2(lcha[0]) + "%";
    lcha[1] = rnd2(lcha[1]);
    lcha[2] = isNaN(lcha[2]) ? "none" : rnd2(lcha[2]) + "deg";
    if (mode === "lcha" || lcha.length > 3 && lcha[3] < 1) {
      lcha[3] = "/ " + (lcha.length > 3 ? lcha[3] : 1);
    } else {
      lcha.length = 3;
    }
    return `lch(${lcha.join(" ")})`;
  };
  var lch2css_default = lch2css;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/css/oklab2css.js
  var oklab2css = (...args) => {
    const laba = unpack_default(args, "lab");
    laba[0] = rnd2(laba[0] * 100) + "%";
    laba[1] = rnd3(laba[1]);
    laba[2] = rnd3(laba[2]);
    if (laba.length > 3 && laba[3] < 1) {
      laba[3] = "/ " + (laba.length > 3 ? laba[3] : 1);
    } else {
      laba.length = 3;
    }
    return `oklab(${laba.join(" ")})`;
  };
  var oklab2css_default = oklab2css;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/oklch/rgb2oklch.js
  var rgb2oklch = (...args) => {
    const [r, g, b, ...rest] = unpack_default(args, "rgb");
    const [l, a, b_] = rgb2oklab_default(r, g, b);
    const [L, c, h] = lab2lch_default(l, a, b_);
    return [L, c, h, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
  };
  var rgb2oklch_default = rgb2oklch;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/css/oklch2css.js
  var oklch2css = (...args) => {
    const lcha = unpack_default(args, "lch");
    lcha[0] = rnd2(lcha[0] * 100) + "%";
    lcha[1] = rnd3(lcha[1]);
    lcha[2] = isNaN(lcha[2]) ? "none" : rnd2(lcha[2]) + "deg";
    if (lcha.length > 3 && lcha[3] < 1) {
      lcha[3] = "/ " + (lcha.length > 3 ? lcha[3] : 1);
    } else {
      lcha.length = 3;
    }
    return `oklch(${lcha.join(" ")})`;
  };
  var oklch2css_default = oklch2css;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/css/rgb2css.js
  var { round: round4 } = Math;
  var rgb2css = (...args) => {
    const rgba = unpack_default(args, "rgba");
    let mode = last_default(args) || "rgb";
    if (mode.substr(0, 3) === "hsl") {
      return hsl2css_default(rgb2hsl_default(rgba), mode);
    }
    if (mode.substr(0, 3) === "lab") {
      const prevWhitePoint = getLabWhitePoint();
      setLabWhitePoint("d50");
      const cssColor = lab2css_default(rgb2lab_default(rgba), mode);
      setLabWhitePoint(prevWhitePoint);
      return cssColor;
    }
    if (mode.substr(0, 3) === "lch") {
      const prevWhitePoint = getLabWhitePoint();
      setLabWhitePoint("d50");
      const cssColor = lch2css_default(rgb2lch_default(rgba), mode);
      setLabWhitePoint(prevWhitePoint);
      return cssColor;
    }
    if (mode.substr(0, 5) === "oklab") {
      return oklab2css_default(rgb2oklab_default(rgba));
    }
    if (mode.substr(0, 5) === "oklch") {
      return oklch2css_default(rgb2oklch_default(rgba));
    }
    rgba[0] = round4(rgba[0]);
    rgba[1] = round4(rgba[1]);
    rgba[2] = round4(rgba[2]);
    if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
      rgba[3] = "/ " + (rgba.length > 3 ? rgba[3] : 1);
      mode = "rgba";
    }
    return `${mode.substr(0, 3)}(${rgba.slice(0, mode === "rgb" ? 3 : 4).join(" ")})`;
  };
  var rgb2css_default = rgb2css;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/oklch/oklch2rgb.js
  var oklch2rgb = (...args) => {
    args = unpack_default(args, "lch");
    const [l, c, h, ...rest] = args;
    const [L, a, b_] = lch2lab_default(l, c, h);
    const [r, g, b] = oklab2rgb_default(L, a, b_);
    return [r, g, b, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
  };
  var oklch2rgb_default = oklch2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/css/css2rgb.js
  var INT_OR_PCT = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source;
  var FLOAT_OR_PCT = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source;
  var PCT = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source;
  var RE_S = /\s*/.source;
  var SEP = /\s+/.source;
  var COMMA = /\s*,\s*/.source;
  var ANLGE = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source;
  var ALPHA = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source;
  var RE_RGB = new RegExp(
    "^rgba?\\(" + RE_S + [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT].join(SEP) + ALPHA + "\\)$"
  );
  var RE_RGB_LEGACY = new RegExp(
    "^rgb\\(" + RE_S + [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT].join(COMMA) + RE_S + "\\)$"
  );
  var RE_RGBA_LEGACY = new RegExp(
    "^rgba\\(" + RE_S + [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT, FLOAT_OR_PCT].join(COMMA) + RE_S + "\\)$"
  );
  var RE_HSL = new RegExp(
    "^hsla?\\(" + RE_S + [ANLGE, PCT, PCT].join(SEP) + ALPHA + "\\)$"
  );
  var RE_HSL_LEGACY = new RegExp(
    "^hsl?\\(" + RE_S + [ANLGE, PCT, PCT].join(COMMA) + RE_S + "\\)$"
  );
  var RE_HSLA_LEGACY = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
  var RE_LAB = new RegExp(
    "^lab\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, FLOAT_OR_PCT].join(SEP) + ALPHA + "\\)$"
  );
  var RE_LCH = new RegExp(
    "^lch\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, ANLGE].join(SEP) + ALPHA + "\\)$"
  );
  var RE_OKLAB = new RegExp(
    "^oklab\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, FLOAT_OR_PCT].join(SEP) + ALPHA + "\\)$"
  );
  var RE_OKLCH = new RegExp(
    "^oklch\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, ANLGE].join(SEP) + ALPHA + "\\)$"
  );
  var { round: round5 } = Math;
  var roundRGB = (rgb3) => {
    return rgb3.map((v, i) => i <= 2 ? limit_default(round5(v), 0, 255) : v);
  };
  var percentToAbsolute = (pct, min6 = 0, max6 = 100, signed = false) => {
    if (typeof pct === "string" && pct.endsWith("%")) {
      pct = parseFloat(pct.substring(0, pct.length - 1)) / 100;
      if (signed) {
        pct = min6 + (pct + 1) * 0.5 * (max6 - min6);
      } else {
        pct = min6 + pct * (max6 - min6);
      }
    }
    return +pct;
  };
  var noneToValue = (v, noneValue) => {
    return v === "none" ? noneValue : v;
  };
  var css2rgb = (css2) => {
    css2 = css2.toLowerCase().trim();
    if (css2 === "transparent") {
      return [0, 0, 0, 0];
    }
    let m;
    if (input_default.format.named) {
      try {
        return input_default.format.named(css2);
      } catch (e2) {
      }
    }
    if ((m = css2.match(RE_RGB)) || (m = css2.match(RE_RGB_LEGACY))) {
      let rgb3 = m.slice(1, 4);
      for (let i = 0; i < 3; i++) {
        rgb3[i] = +percentToAbsolute(noneToValue(rgb3[i], 0), 0, 255);
      }
      rgb3 = roundRGB(rgb3);
      const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
      rgb3[3] = alpha;
      return rgb3;
    }
    if (m = css2.match(RE_RGBA_LEGACY)) {
      const rgb3 = m.slice(1, 5);
      for (let i = 0; i < 4; i++) {
        rgb3[i] = +percentToAbsolute(rgb3[i], 0, 255);
      }
      return rgb3;
    }
    if ((m = css2.match(RE_HSL)) || (m = css2.match(RE_HSL_LEGACY))) {
      const hsl3 = m.slice(1, 4);
      hsl3[0] = +noneToValue(hsl3[0].replace("deg", ""), 0);
      hsl3[1] = +percentToAbsolute(noneToValue(hsl3[1], 0), 0, 100) * 0.01;
      hsl3[2] = +percentToAbsolute(noneToValue(hsl3[2], 0), 0, 100) * 0.01;
      const rgb3 = roundRGB(hsl2rgb_default(hsl3));
      const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
      rgb3[3] = alpha;
      return rgb3;
    }
    if (m = css2.match(RE_HSLA_LEGACY)) {
      const hsl3 = m.slice(1, 4);
      hsl3[1] *= 0.01;
      hsl3[2] *= 0.01;
      const rgb3 = hsl2rgb_default(hsl3);
      for (let i = 0; i < 3; i++) {
        rgb3[i] = round5(rgb3[i]);
      }
      rgb3[3] = +m[4];
      return rgb3;
    }
    if (m = css2.match(RE_LAB)) {
      const lab3 = m.slice(1, 4);
      lab3[0] = percentToAbsolute(noneToValue(lab3[0], 0), 0, 100);
      lab3[1] = percentToAbsolute(noneToValue(lab3[1], 0), -125, 125, true);
      lab3[2] = percentToAbsolute(noneToValue(lab3[2], 0), -125, 125, true);
      const wp = getLabWhitePoint();
      setLabWhitePoint("d50");
      const rgb3 = roundRGB(lab2rgb_default(lab3));
      setLabWhitePoint(wp);
      const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
      rgb3[3] = alpha;
      return rgb3;
    }
    if (m = css2.match(RE_LCH)) {
      const lch3 = m.slice(1, 4);
      lch3[0] = percentToAbsolute(lch3[0], 0, 100);
      lch3[1] = percentToAbsolute(noneToValue(lch3[1], 0), 0, 150, false);
      lch3[2] = +noneToValue(lch3[2].replace("deg", ""), 0);
      const wp = getLabWhitePoint();
      setLabWhitePoint("d50");
      const rgb3 = roundRGB(lch2rgb_default(lch3));
      setLabWhitePoint(wp);
      const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
      rgb3[3] = alpha;
      return rgb3;
    }
    if (m = css2.match(RE_OKLAB)) {
      const oklab3 = m.slice(1, 4);
      oklab3[0] = percentToAbsolute(noneToValue(oklab3[0], 0), 0, 1);
      oklab3[1] = percentToAbsolute(noneToValue(oklab3[1], 0), -0.4, 0.4, true);
      oklab3[2] = percentToAbsolute(noneToValue(oklab3[2], 0), -0.4, 0.4, true);
      const rgb3 = roundRGB(oklab2rgb_default(oklab3));
      const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
      rgb3[3] = alpha;
      return rgb3;
    }
    if (m = css2.match(RE_OKLCH)) {
      const oklch3 = m.slice(1, 4);
      oklch3[0] = percentToAbsolute(noneToValue(oklch3[0], 0), 0, 1);
      oklch3[1] = percentToAbsolute(noneToValue(oklch3[1], 0), 0, 0.4, false);
      oklch3[2] = +noneToValue(oklch3[2].replace("deg", ""), 0);
      const rgb3 = roundRGB(oklch2rgb_default(oklch3));
      const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
      rgb3[3] = alpha;
      return rgb3;
    }
  };
  css2rgb.test = (s) => {
    return RE_RGB.test(s) || RE_HSL.test(s) || RE_LAB.test(s) || RE_LCH.test(s) || RE_OKLAB.test(s) || RE_OKLCH.test(s) || RE_RGB_LEGACY.test(s) || RE_RGBA_LEGACY.test(s) || RE_HSL_LEGACY.test(s) || RE_HSLA_LEGACY.test(s) || s === "transparent";
  };
  var css2rgb_default = css2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/css/index.js
  Color_default.prototype.css = function(mode) {
    return rgb2css_default(this._rgb, mode);
  };
  var css = (...args) => new Color_default(...args, "css");
  chroma_default.css = css;
  input_default.format.css = css2rgb_default;
  input_default.autodetect.push({
    p: 5,
    test: (h, ...rest) => {
      if (!rest.length && type_default(h) === "string" && css2rgb_default.test(h)) {
        return "css";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/gl/index.js
  input_default.format.gl = (...args) => {
    const rgb3 = unpack_default(args, "rgba");
    rgb3[0] *= 255;
    rgb3[1] *= 255;
    rgb3[2] *= 255;
    return rgb3;
  };
  var gl = (...args) => new Color_default(...args, "gl");
  chroma_default.gl = gl;
  Color_default.prototype.gl = function() {
    const rgb3 = this._rgb;
    return [rgb3[0] / 255, rgb3[1] / 255, rgb3[2] / 255, rgb3[3]];
  };

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/hex/index.js
  Color_default.prototype.hex = function(mode) {
    return rgb2hex_default(this._rgb, mode);
  };
  var hex = (...args) => new Color_default(...args, "hex");
  chroma_default.hex = hex;
  input_default.format.hex = hex2rgb_default;
  input_default.autodetect.push({
    p: 4,
    test: (h, ...rest) => {
      if (!rest.length && type_default(h) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(h.length) >= 0) {
        return "hex";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/temp/temperature2rgb.js
  var { log: log2 } = Math;
  var temperature2rgb = (kelvin) => {
    const temp2 = kelvin / 100;
    let r, g, b;
    if (temp2 < 66) {
      r = 255;
      g = temp2 < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp2 - 2) + 104.49216199393888 * log2(g);
      b = temp2 < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp2 - 10) + 115.67994401066147 * log2(b);
    } else {
      r = 351.97690566805693 + 0.114206453784165 * (r = temp2 - 55) - 40.25366309332127 * log2(r);
      g = 325.4494125711974 + 0.07943456536662342 * (g = temp2 - 50) - 28.0852963507957 * log2(g);
      b = 255;
    }
    return [r, g, b, 1];
  };
  var temperature2rgb_default = temperature2rgb;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/temp/rgb2temperature.js
  var { round: round6 } = Math;
  var rgb2temperature = (...args) => {
    const rgb3 = unpack_default(args, "rgb");
    const r = rgb3[0], b = rgb3[2];
    let minTemp = 1e3;
    let maxTemp = 4e4;
    const eps = 0.4;
    let temp2;
    while (maxTemp - minTemp > eps) {
      temp2 = (maxTemp + minTemp) * 0.5;
      const rgb4 = temperature2rgb_default(temp2);
      if (rgb4[2] / rgb4[0] >= b / r) {
        maxTemp = temp2;
      } else {
        minTemp = temp2;
      }
    }
    return round6(temp2);
  };
  var rgb2temperature_default = rgb2temperature;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/temp/index.js
  Color_default.prototype.temp = Color_default.prototype.kelvin = Color_default.prototype.temperature = function() {
    return rgb2temperature_default(this._rgb);
  };
  var temp = (...args) => new Color_default(...args, "temp");
  Object.assign(chroma_default, { temp, kelvin: temp, temperature: temp });
  input_default.format.temp = input_default.format.kelvin = input_default.format.temperature = temperature2rgb_default;

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/src/io/oklch/index.js
  Color_default.prototype.oklch = function() {
    return rgb2oklch_default(this._rgb);
  };
  var oklch2 = (...args) => new Color_default(...args, "oklch");
  Object.assign(chroma_default, { oklch: oklch2 });
  input_default.format.oklch = oklch2rgb_default;
  input_default.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack_default(args, "oklch");
      if (type_default(args) === "array" && args.length === 3) {
        return "oklch";
      }
    }
  });

  // node_modules/.pnpm/chroma-js@3.2.0/node_modules/chroma-js/index.js
  Object.assign(chroma_default, {
    analyze,
    average: average_default,
    bezier: bezier_default,
    blend: blend_default,
    brewer: colorbrewer_default,
    Color: Color_default,
    colors: w3cx11_default,
    contrast: contrast_default,
    contrastAPCA: contrastAPCA_default,
    cubehelix: cubehelix_default,
    deltaE: delta_e_default,
    distance: distance_default,
    input: input_default,
    interpolate: mix_default,
    limits,
    mix: mix_default,
    random: random_default,
    scale: scale_default,
    scales: scales_default,
    valid: valid_default
  });

  // src/logic/Utils.ts
  var getLocalStorageDataFromKey = (key, fallback) => {
    const data = localStorage.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch {
        return data;
      }
    } else {
      return fallback;
    }
  };
  var matchesBlacklistPattern = (url, pattern) => {
    const normalizedUrl = url.toLowerCase();
    const normalizedPattern = pattern.toLowerCase();
    if (!normalizedPattern.includes("*"))
      return normalizedUrl === normalizedPattern;
    const regexPattern = normalizedPattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^/]+");
    return new RegExp(`^${regexPattern}$`).test(normalizedUrl);
  };
  var isBlacklisted = (url, blacklist) => {
    return blacklist.some((pattern) => matchesBlacklistPattern(url, pattern));
  };
  var hexToRGB = (inputHex) => {
    const hex2 = inputHex.length === 3 ? inputHex.split("").map((char) => char + char).join("") : inputHex;
    if (hex2.length !== 6) {
      throw "Only 3- or 6-digit hex colours are allowed.";
    }
    if (hex2.match(/[^0-9a-f]/i)) {
      throw "Only hex colours are allowed.";
    }
    const aRgbHex = hex2.match(/.{1,2}/g);
    if (!aRgbHex || aRgbHex.length !== 3) {
      throw "Could not parse hex colour.";
    }
    const aRgb = [Number.parseInt(aRgbHex[0], 16), Number.parseInt(aRgbHex[1], 16), Number.parseInt(aRgbHex[2], 16)];
    return aRgb;
  };
  var parseIni = (data) => {
    const regex = {
      section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
      param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
      comment: /^\s*;.*$/
    };
    const value = {};
    const lines = data.split(/[\r\n]+/);
    let section = null;
    for (const line of lines) {
      if (regex.comment.test(line)) {
        continue;
      }
      if (regex.param.test(line)) {
        if (line.includes("xrdb")) {
          continue;
        }
        const match = line.match(regex.param);
        if (section && match && match.length === 3) {
          const key = match[1].trim();
          const val = match[2].split(";")[0].trim();
          if (!value[section]) {
            value[section] = {};
          }
          value[section][key] = val;
        }
      } else if (regex.section.test(line)) {
        const match = line.match(regex.section);
        if (match) {
          section = match[1];
          value[section] = {};
        }
      }
    }
    return value;
  };
  var unparseIni = (data) => {
    let output = "";
    for (const key in data) {
      if (Object.hasOwn(data, key)) {
        if (typeof data[key] === "object") {
          output += `[${key}]
`;
          for (const subKey in data[key]) {
            if (Object.hasOwn(data[key], subKey)) {
              output += `${subKey}=${data[key][subKey]}
`;
            }
          }
        } else {
          output += `${key}=${data[key]}
`;
        }
      }
    }
    return output;
  };
  var initializeSnippets = (snippets) => {
    const existingSnippets = document.querySelector("style.marketplaceSnippets");
    if (existingSnippets)
      existingSnippets.remove();
    const style2 = document.createElement("style");
    const styleContent = snippets.reduce((accum, snippet) => {
      return `${accum}/* ${snippet.title} - ${snippet.description} */
${snippet.code}
`;
    }, "");
    style2.innerHTML = styleContent;
    style2.classList.add("marketplaceSnippets");
    document.body.appendChild(style2);
  };
  var fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error2) => {
        reject(error2);
      };
    });
  };
  var processAuthors = (authors, user) => {
    let parsedAuthors = [];
    if (authors && authors.length > 0) {
      parsedAuthors = authors.map((author) => ({
        name: author.name,
        url: sanitizeUrl(author.url)
      }));
    } else {
      parsedAuthors.push({
        name: user,
        url: `https://github.com/${user}`
      });
    }
    return parsedAuthors;
  };
  var generateSchemesOptions = (schemes) => {
    if (!schemes)
      return [];
    return Object.keys(schemes).map((schemeName) => ({ key: schemeName, value: schemeName }));
  };
  var generateSortOptions = (t2) => {
    return [
      { key: "stars", value: t2("grid.sort.stars") },
      { key: "newest", value: t2("grid.sort.newest") },
      { key: "oldest", value: t2("grid.sort.oldest") },
      { key: "lastUpdated", value: t2("grid.sort.lastUpdated") },
      { key: "mostStale", value: t2("grid.sort.mostStale") },
      { key: "a-z", value: t2("grid.sort.aToZ") },
      { key: "z-a", value: t2("grid.sort.zToA") }
    ];
  };
  var resetMarketplace = (...categories) => {
    console.debug("Resetting Marketplace");
    const keysToRemove = [];
    if (categories.length === 0) {
      for (const key in localStorage) {
        if (key.startsWith("marketplace:")) {
          keysToRemove.push(key);
        }
      }
    }
    for (const category of categories) {
      switch (category) {
        case "extensions":
          keysToRemove.push(...getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedExtensions, []));
          keysToRemove.push(LOCALSTORAGE_KEYS.installedExtensions);
          break;
        case "snippets":
          keysToRemove.push(...getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedSnippets, []));
          keysToRemove.push(LOCALSTORAGE_KEYS.installedSnippets);
          break;
        case "theme":
          keysToRemove.push(...getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedThemes, []));
          keysToRemove.push(LOCALSTORAGE_KEYS.installedThemes);
          keysToRemove.push(LOCALSTORAGE_KEYS.themeInstalled);
          break;
        default:
          console.error(`Unknown category: ${category}`);
          break;
      }
    }
    for (const key of keysToRemove) {
      localStorage.removeItem(key);
      console.debug(`Removed ${key}`);
    }
    console.debug("Marketplace has been reset");
    location.reload();
  };
  var exportMarketplace = () => {
    const data = {};
    for (const key in localStorage) {
      if (key.startsWith("marketplace:")) {
        data[key] = localStorage.getItem(key);
      }
    }
    return data;
  };
  var importMarketplace = (data) => {
    console.debug("Importing Marketplace");
    resetMarketplace();
    for (const key in data) {
      localStorage.setItem(key, data[key]);
      console.debug(`Imported ${key}`);
    }
  };
  var injectColourScheme = (scheme) => {
    const existingMarketplaceSchemeCSS = document.querySelector("style.marketplaceCSS.marketplaceScheme");
    if (existingMarketplaceSchemeCSS)
      existingMarketplaceSchemeCSS.remove();
    if (scheme) {
      const schemeTag = document.createElement("style");
      schemeTag.classList.add("marketplaceCSS");
      schemeTag.classList.add("marketplaceScheme");
      let injectStr = ":root {";
      const themeIniKeys = Object.keys(scheme);
      for (const key of themeIniKeys) {
        injectStr += `--spice-${key}: #${scheme[key]};`;
        injectStr += `--spice-rgb-${key}: ${hexToRGB(scheme[key])};`;
      }
      injectStr += "}";
      schemeTag.innerHTML = injectStr;
      document.body.appendChild(schemeTag);
    }
  };
  var injectUserCSS = (userCSS) => {
    try {
      const existingUserThemeCSS = document.querySelector("link[href='user.css']");
      if (existingUserThemeCSS)
        existingUserThemeCSS.remove();
      const existingMarketplaceUserCSS = document.querySelector("style.marketplaceCSS.marketplaceUserCSS");
      if (existingMarketplaceUserCSS)
        existingMarketplaceUserCSS.remove();
      if (userCSS) {
        const userCssTag = document.createElement("style");
        userCssTag.classList.add("marketplaceCSS");
        userCssTag.classList.add("marketplaceUserCSS");
        userCssTag.innerHTML = userCSS;
        document.body.appendChild(userCssTag);
      } else {
        const originalUserThemeCSS = document.createElement("link");
        originalUserThemeCSS.setAttribute("rel", "stylesheet");
        originalUserThemeCSS.setAttribute("href", "user.css");
        originalUserThemeCSS.classList.add("userCSS");
        document.body.appendChild(originalUserThemeCSS);
      }
    } catch (error2) {
      console.warn(error2);
    }
  };
  var parseCSS = async (themeData, defaultTld) => {
    if (!themeData.cssURL)
      throw new Error("No CSS URL provided");
    const tld = defaultTld || await getAvailableTLD();
    const userCssUrl = isGithubRawUrl(themeData.cssURL) ? `https://cdn.jsdelivr.${tld}/gh/${themeData.user}/${themeData.repo}@${themeData.branch}/${themeData.manifest.usercss}` : themeData.cssURL;
    const assetsUrl = userCssUrl.replace("/user.css", "/assets/");
    console.debug("Parsing CSS: ", userCssUrl);
    let css2 = await fetch(`${userCssUrl}?time=${Date.now()}`).then((res) => res.text());
    const urls = css2.matchAll(/url\(['|"](?<path>.+?)['|"]\)/gm) || [];
    for (const match of urls) {
      const url = match?.groups?.path;
      if (!url)
        continue;
      if (!url.startsWith("http") && !url.startsWith("data")) {
        const newUrl = assetsUrl + url.replace(/\.\//g, "");
        css2 = css2.replace(url, newUrl);
      }
    }
    return css2;
  };
  var isGithubRawUrl = (url) => {
    const parsedUrl = new URL(url);
    parsedUrl.host;
    return parsedUrl.host === "raw.githubusercontent.com";
  };
  function addToSessionStorage(items, key) {
    if (!items)
      return;
    for (const item of items) {
      const itemKey = key || `${item.user}-${item.repo}`;
      const existing = window.sessionStorage.getItem(itemKey);
      const parsed = existing ? JSON.parse(existing) : [];
      parsed.push(item);
      window.sessionStorage.setItem(itemKey, JSON.stringify(parsed));
    }
  }
  function getInvalidCSS() {
    const unparsedCSS = document.querySelector("body > style.marketplaceCSS.marketplaceUserCSS");
    const classNameList = unparsedCSS?.innerHTML;
    const regex = /.-?[_a-zA-Z]+[_a-zA-Z0-9-]*\s*{/g;
    if (!classNameList)
      return ["Error: Class name list not found; please create an issue"];
    const matches = classNameList.matchAll(regex);
    const invalidCssClassName = [];
    for (const match of matches) {
      const className = match[0].replace(/{/g, "").trim();
      const classesArr = className.split(" ");
      let element;
      for (let i = 0; i < classesArr.length; i++) {
        try {
          element = document.querySelector(`${classesArr[i]}`);
        } catch {
          element = document.getElementsByClassName(`${className}`);
        }
        if (!element) {
          invalidCssClassName.push(className);
        }
      }
    }
    return invalidCssClassName;
  }
  async function getMarkdownHTML(markdown, user, repo) {
    try {
      const postBody = {
        text: markdown,
        context: `${user}/${repo}`,
        mode: "gfm"
      };
      const response = await fetch("https://api.github.com/markdown", {
        method: "POST",
        body: JSON.stringify(postBody)
      });
      if (!response.ok)
        throw Spicetify.showNotification(t("notifications.markdownParsingError", { status: response.status }), true);
      const html = await response.text();
      return html;
    } catch {
      return null;
    }
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function generateKey(props) {
    const prefix3 = props.type === "snippet" ? "snippet:" : `${props.item.user}/${props.item.repo}/`;
    let cardId;
    switch (props.type) {
      case "snippet":
        cardId = props.item.title.replaceAll(" ", "-");
        break;
      case "theme":
        cardId = props.item.manifest?.usercss || "";
        break;
      case "extension":
        cardId = props.item.manifest?.main || "";
        break;
      case "app":
        cardId = props.item.manifest?.name?.replaceAll(" ", "-") || "";
        break;
    }
    return `marketplace:installed:${prefix3}${cardId}`;
  }
  var sanitizeUrl = (url) => {
    const u = decodeURI(url).trim().toLowerCase();
    if (u.startsWith("javascript:") || u.startsWith("data:") || u.startsWith("vbscript:"))
      return "about:blank";
    return url;
  };
  var compareNames = (a, b) => {
    const aName = a.title || a?.manifest?.name || "";
    const bName = b.title || b?.manifest?.name || "";
    return aName.localeCompare(bName);
  };
  var compareCreated = (a, b) => {
    if (a.created === void 0 || b.created === void 0)
      return 0;
    const aDate = new Date(a.created);
    const bDate = new Date(b.created);
    return bDate.getTime() - aDate.getTime();
  };
  var compareUpdated = (a, b) => {
    if (a.lastUpdated === void 0 || b.lastUpdated === void 0)
      return 0;
    const aDate = new Date(a.lastUpdated);
    const bDate = new Date(b.lastUpdated);
    return bDate.getTime() - aDate.getTime();
  };
  var sortCardItems = (cardItems, sortMode) => {
    switch (sortMode) {
      case "a-z":
        cardItems.sort((a, b) => compareNames(a, b));
        break;
      case "z-a":
        cardItems.sort((a, b) => compareNames(b, a));
        break;
      case "newest":
        cardItems.sort((a, b) => compareCreated(a, b));
        break;
      case "oldest":
        cardItems.sort((a, b) => compareCreated(b, a));
        break;
      case "lastUpdated":
        cardItems.sort((a, b) => compareUpdated(a, b));
        break;
      case "mostStale":
        cardItems.sort((a, b) => compareUpdated(b, a));
        break;
      default:
        cardItems.sort((a, b) => b.stars - a.stars);
        break;
    }
  };
  async function getAvailableTLD() {
    const tlds = ["net", "xyz"];
    for (const tld of tlds) {
      try {
        const response = await fetch(`https://cdn.jsdelivr.${tld}`, { redirect: "manual", cache: "no-cache" });
        if (response.type === "opaqueredirect")
          return tld;
      } catch (err) {
        console.error(err);
      }
    }
  }

  // src/logic/FetchRemotes.ts
  async function getTaggedRepos(tag, page = 1, BLACKLIST = [], showArchived = false) {
    let url = `https://api.github.com/search/repositories?q=${encodeURIComponent(`topic:${tag}`)}&per_page=${ITEMS_PER_REQUEST}`;
    if (page)
      url += `&page=${page}`;
    const allRepos = JSON.parse(window.sessionStorage.getItem(`${tag}-page-${page}`) || "null") || await fetch(url).then((res) => res.json()).catch(() => null);
    if (!allRepos?.items) {
      Spicetify.showNotification(t("notifications.tooManyRequests"), true, 5e3);
      return { items: [] };
    }
    window.sessionStorage.setItem(`${tag}-page-${page}`, JSON.stringify(allRepos));
    const filteredResults = {
      ...allRepos,
      page_count: allRepos.items.length,
      items: allRepos.items.filter((item) => !isBlacklisted(item.html_url, BLACKLIST) && (showArchived || !item.archived))
    };
    return filteredResults;
  }
  var script = `
  self.addEventListener('message', async (event) => {
    const url = event.data;
    const response = await fetch(url);
    const data = await response.json().catch(() => null);
    self.postMessage(data);
  });
`;
  var blob = new Blob([script], { type: "application/javascript" });
  var workerURL = URL.createObjectURL(blob);
  async function fetchRepoManifest(url) {
    const worker = new Worker(workerURL);
    return new Promise((resolver) => {
      const resolve = (data) => {
        worker.terminate();
        resolver(data);
      };
      worker.postMessage(url);
      worker.addEventListener("message", (event) => resolve(event.data), { once: true });
      worker.addEventListener("error", () => resolve(null), { once: true });
    });
  }
  async function getRepoManifest(user, repo, branch) {
    const key = `${user}-${repo}`;
    const sessionStorageItem = window.sessionStorage.getItem(key);
    const failedSessionStorageItems = JSON.parse(window.sessionStorage.getItem("noManifests") || "[]");
    if (sessionStorageItem)
      return JSON.parse(sessionStorageItem);
    const url = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/manifest.json`;
    if (failedSessionStorageItems.includes(url))
      return null;
    let manifest = await fetchRepoManifest(url);
    if (!manifest)
      return addToSessionStorage([url], "noManifests");
    if (!Array.isArray(manifest))
      manifest = [manifest];
    addToSessionStorage(manifest, key);
    return manifest;
  }
  async function fetchExtensionManifest(contents_url, branch, stars, hideInstalled = false) {
    try {
      const regex_result = contents_url.match(/https:\/\/api\.github\.com\/repos\/(?<user>.+)\/(?<repo>.+)\/contents/);
      if (!regex_result || !regex_result.groups)
        return null;
      const { user, repo } = regex_result.groups;
      const manifests = await getRepoManifest(user, repo, branch);
      const parsedManifests = manifests.reduce((accum, manifest) => {
        if (manifest?.name && manifest.description && manifest.main) {
          const selectedBranch = manifest.branch || branch;
          const item = {
            manifest,
            title: manifest.name,
            subtitle: manifest.description,
            authors: processAuthors(manifest.authors, user),
            user,
            repo,
            branch: selectedBranch,
            imageURL: manifest.preview?.startsWith("http") ? manifest.preview : `https://raw.githubusercontent.com/${user}/${repo}/${selectedBranch}/${manifest.preview}`,
            extensionURL: manifest.main.startsWith("http") ? manifest.main : `https://raw.githubusercontent.com/${user}/${repo}/${selectedBranch}/${manifest.main}`,
            readmeURL: manifest.readme?.startsWith("http") ? manifest.readme : `https://raw.githubusercontent.com/${user}/${repo}/${selectedBranch}/${manifest.readme}`,
            stars,
            tags: manifest.tags
          };
          if (!(hideInstalled && localStorage.getItem(`marketplace:installed:${user}/${repo}/${manifest.main}`))) {
            accum.push(item);
          }
        }
        return accum;
      }, []);
      return parsedManifests;
    } catch {
      return null;
    }
  }
  async function fetchThemeManifest(contents_url, branch, stars) {
    try {
      const regex_result = contents_url.match(/https:\/\/api\.github\.com\/repos\/(?<user>.+)\/(?<repo>.+)\/contents/);
      if (!regex_result || !regex_result.groups)
        return null;
      const { user, repo } = regex_result.groups;
      const manifests = await getRepoManifest(user, repo, branch);
      const parsedManifests = manifests.reduce((accum, manifest) => {
        if (manifest?.name && manifest?.usercss && manifest?.description) {
          const selectedBranch = manifest.branch || branch;
          const item = {
            manifest,
            title: manifest.name,
            subtitle: manifest.description,
            authors: processAuthors(manifest.authors, user),
            user,
            repo,
            branch: selectedBranch,
            imageURL: manifest.preview?.startsWith("http") ? manifest.preview : `https://raw.githubusercontent.com/${user}/${repo}/${selectedBranch}/${manifest.preview}`,
            readmeURL: manifest.readme?.startsWith("http") ? manifest.readme : `https://raw.githubusercontent.com/${user}/${repo}/${selectedBranch}/${manifest.readme}`,
            stars,
            tags: manifest.tags,
            cssURL: manifest.usercss.startsWith("http") ? manifest.usercss : `https://raw.githubusercontent.com/${user}/${repo}/${selectedBranch}/${manifest.usercss}`,
            schemesURL: manifest.schemes ? manifest.schemes.startsWith("http") ? manifest.schemes : `https://raw.githubusercontent.com/${user}/${repo}/${selectedBranch}/${manifest.schemes}` : null,
            include: manifest.include
          };
          accum.push(item);
        }
        return accum;
      }, []);
      return parsedManifests;
    } catch {
      return null;
    }
  }
  async function fetchAppManifest(contents_url, branch, stars) {
    try {
      const regex_result = contents_url.match(/https:\/\/api\.github\.com\/repos\/(?<user>.+)\/(?<repo>.+)\/contents/);
      if (!regex_result || !regex_result.groups)
        return null;
      const { user, repo } = regex_result.groups;
      const manifests = await getRepoManifest(user, repo, branch);
      const parsedManifests = manifests.reduce((accum, manifest) => {
        if (manifest?.name && manifest.description && !manifest.main && !manifest.usercss) {
          const selectedBranch = manifest.branch || branch;
          const item = {
            manifest,
            title: manifest.name,
            subtitle: manifest.description,
            authors: processAuthors(manifest.authors, user),
            user,
            repo,
            branch: selectedBranch,
            imageURL: manifest.preview?.startsWith("http") ? manifest.preview : `https://raw.githubusercontent.com/${user}/${repo}/${selectedBranch}/${manifest.preview}`,
            readmeURL: manifest.readme?.startsWith("http") ? manifest.readme : `https://raw.githubusercontent.com/${user}/${repo}/${selectedBranch}/${manifest.readme}`,
            stars,
            tags: manifest.tags
          };
          accum.push(item);
        }
        return accum;
      }, []);
      return parsedManifests;
    } catch {
      return null;
    }
  }
  var getBlacklist = async () => {
    const json = await fetch(BLACKLIST_URL).then((res) => res.json()).catch(() => ({}));
    return json.repos;
  };
  var fetchCssSnippets = async (hideInstalled = false) => {
    const snippetsJSON = await fetch(SNIPPETS_URL).then((res) => res.json()).catch(() => []);
    if (!snippetsJSON.length)
      return [];
    const snippets = snippetsJSON.reduce((accum, snippet) => {
      const snip = { ...snippet };
      if (snip.preview) {
        snip.imageURL = snip.preview.startsWith("http") ? snip.preview : `https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/${snip.preview}`;
        snip.preview = void 0;
      }
      if (!(hideInstalled && localStorage.getItem(`marketplace:installed:snippet:${snip.title.replaceAll(" ", "-")}`))) {
        accum.push(snip);
      }
      return accum;
    }, []);
    return snippets;
  };

  // src/logic/LaunchModals.tsx
  var import_react26 = __toESM(require_react());

  // src/components/Modals/BackupModal/index.tsx
  var import_prism_core = __toESM(require_prism_core());
  var import_react13 = __toESM(require_react());
  var import_react_simple_code_editor = __toESM(require_lib());

  // node_modules/.pnpm/prismjs@1.30.0/node_modules/prismjs/components/prism-json.js
  Prism.languages.json = {
    "property": {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: true,
      greedy: true
    },
    "string": {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: true,
      greedy: true
    },
    "comment": {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true
    },
    "number": /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    "punctuation": /[{}[\],]/,
    "operator": /:/,
    "boolean": /\b(?:false|true)\b/,
    "null": {
      pattern: /\bnull\b/,
      alias: "keyword"
    }
  };
  Prism.languages.webmanifest = Prism.languages.json;

  // src/components/Button.tsx
  var import_react12 = __toESM(require_react());

  // postcss-module:/tmp/tmp-72906-cTshbomSWBzu/19efb045d031/button.module.css
  var button_module_default = { "button": "button-module__button___hf2qg_marketplace", "circle": "button-module__circle___EZ88P_marketplace" };

  // src/components/Button.tsx
  var Button = (props) => {
    const buttonType = props.type || "round";
    const classList = [button_module_default.button];
    if (buttonType === "circle")
      classList.push(button_module_default.circle);
    if (props.classes)
      classList.push(...props.classes);
    return /* @__PURE__ */ import_react12.default.createElement("button", {
      className: classList.join(" "),
      onClick: props.onClick,
      "aria-label": props.label || "",
      disabled: props.disabled
    }, props.children);
  };
  var Button_default = Button;

  // src/components/Modals/BackupModal/index.tsx
  var BackupModal = () => {
    const [importText, setImportText] = import_react13.default.useState("");
    async function saveFile(data) {
      const date = new Date();
      const newHandle = await window.showSaveFilePicker({
        id: "marketplace-settings-backup",
        suggestedName: `marketplace-settings-${date.toISOString()}.json`,
        excludeAcceptAllOption: true,
        types: [
          {
            description: "JSON files",
            accept: { "application/json": [".json"] }
          }
        ]
      });
      const writableStream = await newHandle.createWritable();
      await writableStream.write(data);
      await writableStream.close();
    }
    const exportSettings = async () => {
      const settings = exportMarketplace();
      try {
        await saveFile(JSON.stringify(settings, null, 2));
        Spicetify.showNotification(t("backupModal.settingsSaved"));
      } catch (error2) {
        if (error2.name !== "AbortError") {
          console.error("Failed to save file, copying to clipboard instead:", error2);
          Spicetify.Platform.ClipboardAPI.copy(JSON.stringify(settings));
          Spicetify.showNotification(t("backupModal.settingsCopied"));
        }
      }
      Spicetify.PopupModal.hide();
    };
    const importSettings = (settingsString) => {
      if (!settingsString) {
        Spicetify.showNotification(t("backupModal.noDataPasted"));
        return;
      }
      let settings;
      try {
        settings = JSON.parse(settingsString);
      } catch {
        Spicetify.showNotification(t("backupModal.invalidJSON"));
        return;
      }
      importMarketplace(settings);
      location.reload();
    };
    const importSettingsFromInput = () => {
      importSettings(importText);
    };
    const importSettingsFromFile = async () => {
      const fileHandle = await window.showOpenFilePicker();
      const file = await fileHandle[0].getFile();
      const text = await file.text();
      importSettings(text);
    };
    return /* @__PURE__ */ import_react13.default.createElement("div", {
      id: "marketplace-backup-container"
    }, /* @__PURE__ */ import_react13.default.createElement("div", {
      className: "marketplace-backup-input-container"
    }, /* @__PURE__ */ import_react13.default.createElement("label", {
      htmlFor: "marketplace-backup"
    }, t("backupModal.inputLabel")), /* @__PURE__ */ import_react13.default.createElement("div", {
      className: "marketplace-code-editor-wrapper marketplace-code-editor"
    }, /* @__PURE__ */ import_react13.default.createElement(import_react_simple_code_editor.default, {
      value: importText,
      onValueChange: (text) => setImportText(text),
      highlight: (text) => (0, import_prism_core.highlight)(text, import_prism_core.languages.css),
      textareaId: "marketplace-import-text",
      textareaClassName: "import-textarea",
      readOnly: false,
      className: "marketplace-code-editor-textarea",
      placeholder: t("backupModal.inputPlaceholder"),
      style: {}
    }))), /* @__PURE__ */ import_react13.default.createElement(Button_default, {
      classes: ["marketplace-backup-button"],
      onClick: exportSettings
    }, t("backupModal.exportBtn")), /* @__PURE__ */ import_react13.default.createElement(Button_default, {
      classes: ["marketplace-backup-button"],
      onClick: importSettingsFromInput
    }, t("backupModal.importBtn")), /* @__PURE__ */ import_react13.default.createElement(Button_default, {
      classes: ["marketplace-backup-button"],
      onClick: importSettingsFromFile
    }, t("backupModal.fileImportBtn")));
  };
  var BackupModal_default = BackupModal;

  // src/components/Modals/Reload/index.tsx
  var import_react14 = __toESM(require_react());
  var ReloadModal = () => {
    return /* @__PURE__ */ import_react14.default.createElement("div", {
      id: "marketplace-reload-container"
    }, /* @__PURE__ */ import_react14.default.createElement("p", null, t("reloadModal.description")), /* @__PURE__ */ import_react14.default.createElement("div", {
      className: "marketplace-reload-modal__button-container"
    }, /* @__PURE__ */ import_react14.default.createElement(Button_default, {
      onClick: () => {
        Spicetify.PopupModal.hide();
        location.reload();
      }
    }, t("reloadModal.reloadNow")), /* @__PURE__ */ import_react14.default.createElement(Button_default, {
      onClick: () => {
        Spicetify.PopupModal.hide();
      }
    }, t("reloadModal.reloadLater"))));
  };
  var Reload_default = ReloadModal;

  // src/components/Modals/Settings/index.tsx
  var import_react22 = __toESM(require_react());

  // src/components/Modals/Settings/ConfigRow.tsx
  var import_react19 = __toESM(require_react());

  // src/components/Icons/TooltipIcon.tsx
  var import_react15 = __toESM(require_react());
  var TooltipIcon = () => {
    return /* @__PURE__ */ import_react15.default.createElement("svg", {
      height: "16",
      width: "16",
      className: "Svg-sc-ytk21e-0 uPxdw nW1RKQOkzcJcX6aDCZB4",
      viewBox: "0 0 16 16",
      role: "img",
      "aria-label": "Tooltip Icon"
    }, /* @__PURE__ */ import_react15.default.createElement("path", {
      d: "M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
    }), /* @__PURE__ */ import_react15.default.createElement("path", {
      d: "M7.25 12.026v-1.5h1.5v1.5h-1.5zm.884-7.096A1.125 1.125 0 007.06 6.39l-1.431.448a2.625 2.625 0 115.13-.784c0 .54-.156 1.015-.503 1.488-.3.408-.7.652-.973.818l-.112.068c-.185.116-.26.203-.302.283-.046.087-.097.245-.097.57h-1.5c0-.47.072-.898.274-1.277.206-.385.507-.645.827-.846l.147-.092c.285-.177.413-.257.526-.41.169-.23.213-.397.213-.602 0-.622-.503-1.125-1.125-1.125z"
    }));
  };
  var TooltipIcon_default = TooltipIcon;

  // src/components/Sortbox.tsx
  var import_react16 = __toESM(require_react());
  var import_react_dropdown = __toESM(require_dist());
  var SortBox = (props) => {
    const _onSelect = (item) => {
      props.onChange(item.value);
    };
    const options = props.sortBoxOptions.map((item) => {
      return {
        value: item.key,
        label: item.value
      };
    });
    const sortBySelected = props.sortBoxOptions.find(props.sortBySelectedFn);
    return /* @__PURE__ */ import_react16.default.createElement("div", {
      className: "marketplace-sortBox"
    }, /* @__PURE__ */ import_react16.default.createElement("div", {
      className: "marketplace-sortBox-header"
    }, /* @__PURE__ */ import_react16.default.createElement("div", {
      className: "marketplace-sortBox-header-title"
    }), /* @__PURE__ */ import_react16.default.createElement(import_react_dropdown.default, {
      placeholder: "Select an option",
      options,
      value: sortBySelected?.key,
      onChange: _onSelect
    })));
  };
  var Sortbox_default = SortBox;

  // src/components/Toggle.tsx
  var import_react17 = __toESM(require_react());

  // postcss-module:/tmp/tmp-72906-cTshbomSWBzu/19efb045d302/toggle.module.css
  var toggle_module_default = { "toggle-wrapper": "toggle-module__toggle-wrapper___ocE5z_marketplace", "disabled": "toggle-module__disabled___OYAYf_marketplace", "toggle-input": "toggle-module__toggle-input___ceLM4_marketplace", "toggle-indicator-wrapper": "toggle-module__toggle-indicator-wrapper___6Lcp0_marketplace", "toggle-indicator": "toggle-module__toggle-indicator___nCxwE_marketplace" };

  // src/components/Toggle.tsx
  var Toggle = (props) => {
    const toggleId = `toggle:${props.storageKey}`;
    const wrapperClassList = [toggle_module_default["toggle-wrapper"]];
    if (props.clickable === false)
      wrapperClassList.push(toggle_module_default.disabled);
    return /* @__PURE__ */ import_react17.default.createElement("label", {
      className: wrapperClassList.join(" ")
    }, /* @__PURE__ */ import_react17.default.createElement("input", {
      className: toggle_module_default["toggle-input"],
      type: "checkbox",
      checked: props.enabled,
      "data-storage-key": props.storageKey,
      id: toggleId,
      title: `Toggle for ${props.storageKey}`,
      onChange: props.onChange
    }), /* @__PURE__ */ import_react17.default.createElement("span", {
      className: toggle_module_default["toggle-indicator-wrapper"]
    }, /* @__PURE__ */ import_react17.default.createElement("span", {
      className: toggle_module_default["toggle-indicator"]
    })));
  };
  var Toggle_default = Toggle;

  // src/components/Tooltip.tsx
  var import_react18 = __toESM(require_react());
  function Tooltip({ children, ...args }) {
    if (Spicetify.ReactComponent.TooltipWrapper) {
      return /* @__PURE__ */ import_react18.default.createElement(Spicetify.ReactComponent.TooltipWrapper, {
        ...args
      }, children);
    }
    return children;
  }

  // src/components/Modals/Settings/ConfigRow.tsx
  var ConfigRow = (props) => {
    const type = props.type;
    const componentId = type === "dropdown" ? `dropdown:${props.storageKey}` : `toggle:${props.storageKey}`;
    const enabled = !!props.modalConfig.visual[props.storageKey];
    const settingsToggleChange = (e2) => {
      const state = e2.target.checked;
      const storageKey = e2.target.dataset.storageKey;
      props.modalConfig.visual[storageKey] = state;
      console.debug(`toggling ${storageKey} to ${state}`);
      localStorage.setItem(`marketplace:${storageKey}`, String(state));
      props.updateConfig(props.modalConfig);
    };
    const settingsDropdownChange = (value) => {
      const state = value;
      const storageKey = props.storageKey;
      props.modalConfig.visual[storageKey] = state;
      localStorage.setItem(`marketplace:${storageKey}`, String(state));
      props.updateConfig(props.modalConfig);
    };
    if (props.description === void 0 || props.description === null) {
      props.description = "";
    }
    if (type === "dropdown" && props.options) {
      return /* @__PURE__ */ import_react19.default.createElement("div", {
        className: "settings-row"
      }, /* @__PURE__ */ import_react19.default.createElement("label", {
        htmlFor: componentId,
        className: "col description"
      }, props.name), /* @__PURE__ */ import_react19.default.createElement("div", {
        className: "col action"
      }, /* @__PURE__ */ import_react19.default.createElement(Sortbox_default, {
        sortBoxOptions: props.options.map((option) => {
          return {
            key: option,
            value: option
          };
        }),
        onChange: (value) => settingsDropdownChange(value),
        sortBySelectedFn: (item) => {
          return item.key === props.modalConfig.visual[props.storageKey];
        }
      }), /* @__PURE__ */ import_react19.default.createElement(Tooltip, {
        label: props.description.split("\n").map((line) => {
          return /* @__PURE__ */ import_react19.default.createElement("span", {
            key: line
          }, line, /* @__PURE__ */ import_react19.default.createElement("br", null));
        }),
        renderInline: true,
        showDelay: 10,
        placement: "top",
        labelClassName: "marketplace-settings-tooltip",
        disabled: false
      }, /* @__PURE__ */ import_react19.default.createElement("div", {
        className: "marketplace-tooltip-icon"
      }, /* @__PURE__ */ import_react19.default.createElement(TooltipIcon_default, null)))));
    }
    return /* @__PURE__ */ import_react19.default.createElement("div", {
      className: "settings-row"
    }, /* @__PURE__ */ import_react19.default.createElement("label", {
      htmlFor: componentId,
      className: "col description"
    }, props.name), /* @__PURE__ */ import_react19.default.createElement("div", {
      className: "col action"
    }, /* @__PURE__ */ import_react19.default.createElement(Toggle_default, {
      name: props.name,
      storageKey: props.storageKey,
      enabled,
      onChange: settingsToggleChange
    })));
  };
  var ConfigRow_default = ConfigRow;

  // node_modules/.pnpm/@hello-pangea+dnd@18.0.1_@types+react@19.2.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@hello-pangea/dnd/dist/dnd.esm.js
  var import_react20 = __toESM(require_react());
  var import_react_dom = __toESM(require_react_dom());

  // node_modules/.pnpm/redux@5.0.1/node_modules/redux/dist/redux.mjs
  var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
  var symbol_observable_default = $$observable;
  var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
  var ActionTypes = {
    INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
    REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
  };
  var actionTypes_default = ActionTypes;
  function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null)
      return false;
    let proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
  }
  function miniKindOf(val) {
    if (val === void 0)
      return "undefined";
    if (val === null)
      return "null";
    const type = typeof val;
    switch (type) {
      case "boolean":
      case "string":
      case "number":
      case "symbol":
      case "function": {
        return type;
      }
    }
    if (Array.isArray(val))
      return "array";
    if (isDate(val))
      return "date";
    if (isError(val))
      return "error";
    const constructorName = ctorName(val);
    switch (constructorName) {
      case "Symbol":
      case "Promise":
      case "WeakMap":
      case "WeakSet":
      case "Map":
      case "Set":
        return constructorName;
    }
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
  }
  function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
  }
  function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
  }
  function isDate(val) {
    if (val instanceof Date)
      return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
  }
  function kindOf(val) {
    let typeOfVal = typeof val;
    if (true) {
      typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
  }
  function createStore(reducer2, preloadedState, enhancer) {
    if (typeof reducer2 !== "function") {
      throw new Error(false ? formatProdErrorMessage(2) : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer2)}'`);
    }
    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
      throw new Error(false ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    }
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
      enhancer = preloadedState;
      preloadedState = void 0;
    }
    if (typeof enhancer !== "undefined") {
      if (typeof enhancer !== "function") {
        throw new Error(false ? formatProdErrorMessage(1) : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
      }
      return enhancer(createStore)(reducer2, preloadedState);
    }
    let currentReducer = reducer2;
    let currentState = preloadedState;
    let currentListeners = /* @__PURE__ */ new Map();
    let nextListeners = currentListeners;
    let listenerIdCounter = 0;
    let isDispatching = false;
    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = /* @__PURE__ */ new Map();
        currentListeners.forEach((listener, key) => {
          nextListeners.set(key, listener);
        });
      }
    }
    function getState() {
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
      }
      return currentState;
    }
    function subscribe(listener) {
      if (typeof listener !== "function") {
        throw new Error(false ? formatProdErrorMessage(4) : `Expected the listener to be a function. Instead, received: '${kindOf(listener)}'`);
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      let isSubscribed = true;
      ensureCanMutateNextListeners();
      const listenerId = listenerIdCounter++;
      nextListeners.set(listenerId, listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
        if (isDispatching) {
          throw new Error(false ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        }
        isSubscribed = false;
        ensureCanMutateNextListeners();
        nextListeners.delete(listenerId);
        currentListeners = null;
      };
    }
    function dispatch(action) {
      if (!isPlainObject(action)) {
        throw new Error(false ? formatProdErrorMessage(7) : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
      }
      if (typeof action.type === "undefined") {
        throw new Error(false ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
      }
      if (typeof action.type !== "string") {
        throw new Error(false ? formatProdErrorMessage(17) : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
      }
      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }
      const listeners = currentListeners = nextListeners;
      listeners.forEach((listener) => {
        listener();
      });
      return action;
    }
    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== "function") {
        throw new Error(false ? formatProdErrorMessage(10) : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
      }
      currentReducer = nextReducer;
      dispatch({
        type: actionTypes_default.REPLACE
      });
    }
    function observable() {
      const outerSubscribe = subscribe;
      return {
        subscribe(observer) {
          if (typeof observer !== "object" || observer === null) {
            throw new Error(false ? formatProdErrorMessage(11) : `Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
          }
          function observeState() {
            const observerAsObserver = observer;
            if (observerAsObserver.next) {
              observerAsObserver.next(getState());
            }
          }
          observeState();
          const unsubscribe = outerSubscribe(observeState);
          return {
            unsubscribe
          };
        },
        [symbol_observable_default]() {
          return this;
        }
      };
    }
    dispatch({
      type: actionTypes_default.INIT
    });
    const store = {
      dispatch,
      subscribe,
      getState,
      replaceReducer,
      [symbol_observable_default]: observable
    };
    return store;
  }
  function bindActionCreator(actionCreator, dispatch) {
    return function(...args) {
      return dispatch(actionCreator.apply(this, args));
    };
  }
  function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === "function") {
      return bindActionCreator(actionCreators, dispatch);
    }
    if (typeof actionCreators !== "object" || actionCreators === null) {
      throw new Error(false ? formatProdErrorMessage(16) : `bindActionCreators expected an object or a function, but instead received: '${kindOf(actionCreators)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
    }
    const boundActionCreators = {};
    for (const key in actionCreators) {
      const actionCreator = actionCreators[key];
      if (typeof actionCreator === "function") {
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
      }
    }
    return boundActionCreators;
  }
  function compose(...funcs) {
    if (funcs.length === 0) {
      return (arg) => arg;
    }
    if (funcs.length === 1) {
      return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
  }
  function applyMiddleware(...middlewares) {
    return (createStore22) => (reducer2, preloadedState) => {
      const store = createStore22(reducer2, preloadedState);
      let dispatch = () => {
        throw new Error(false ? formatProdErrorMessage(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action, ...args) => dispatch(action, ...args)
      };
      const chain = middlewares.map((middleware) => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch
      };
    };
  }

  // node_modules/.pnpm/react-redux@9.2.0_@types+react@19.2.7_react@19.2.3_redux@5.0.1/node_modules/react-redux/dist/react-redux.mjs
  var React11 = __toESM(require_react(), 1);
  var import_with_selector = __toESM(require_with_selector(), 1);
  var IS_REACT_19 = /* @__PURE__ */ React11.version.startsWith("19");
  var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for(
    IS_REACT_19 ? "react.transitional.element" : "react.element"
  );
  var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
  var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
  var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
  var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
  var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
  var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
  var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
  var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
  var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for(
    "react.suspense_list"
  );
  var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
  var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
  var REACT_OFFSCREEN_TYPE = /* @__PURE__ */ Symbol.for("react.offscreen");
  var REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for(
    "react.client.reference"
  );
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Memo = REACT_MEMO_TYPE;
  function isValidElementType(type) {
    return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || type.getModuleId !== void 0) ? true : false;
  }
  function typeOf(object) {
    if (typeof object === "object" && object !== null) {
      const { $$typeof } = object;
      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          switch (object = object.type, object) {
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
            case REACT_SUSPENSE_LIST_TYPE:
              return object;
            default:
              switch (object = object && object.$$typeof, object) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                  return object;
                case REACT_CONSUMER_TYPE:
                  return object;
                default:
                  return $$typeof;
              }
          }
        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }
  }
  function isContextConsumer(object) {
    return IS_REACT_19 ? typeOf(object) === REACT_CONSUMER_TYPE : typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function warning(message) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
  function verify(selector, methodName) {
    if (!selector) {
      throw new Error(`Unexpected value for ${methodName} in connect.`);
    } else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
      if (!Object.prototype.hasOwnProperty.call(selector, "dependsOnOwnProps")) {
        warning(
          `The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`
        );
      }
    }
  }
  function verifySubselectors(mapStateToProps, mapDispatchToProps2, mergeProps) {
    verify(mapStateToProps, "mapStateToProps");
    verify(mapDispatchToProps2, "mapDispatchToProps");
    verify(mergeProps, "mergeProps");
  }
  function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch, {
    areStatesEqual,
    areOwnPropsEqual,
    areStatePropsEqual
  }) {
    let hasRunAtLeastOnce = false;
    let state;
    let ownProps;
    let stateProps;
    let dispatchProps;
    let mergedProps;
    function handleFirstCall(firstState, firstOwnProps) {
      state = firstState;
      ownProps = firstOwnProps;
      stateProps = mapStateToProps(state, ownProps);
      dispatchProps = mapDispatchToProps2(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      hasRunAtLeastOnce = true;
      return mergedProps;
    }
    function handleNewPropsAndNewState() {
      stateProps = mapStateToProps(state, ownProps);
      if (mapDispatchToProps2.dependsOnOwnProps)
        dispatchProps = mapDispatchToProps2(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }
    function handleNewProps() {
      if (mapStateToProps.dependsOnOwnProps)
        stateProps = mapStateToProps(state, ownProps);
      if (mapDispatchToProps2.dependsOnOwnProps)
        dispatchProps = mapDispatchToProps2(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }
    function handleNewState() {
      const nextStateProps = mapStateToProps(state, ownProps);
      const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
      stateProps = nextStateProps;
      if (statePropsChanged)
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }
    function handleSubsequentCalls(nextState, nextOwnProps) {
      const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
      const stateChanged = !areStatesEqual(
        nextState,
        state,
        nextOwnProps,
        ownProps
      );
      state = nextState;
      ownProps = nextOwnProps;
      if (propsChanged && stateChanged)
        return handleNewPropsAndNewState();
      if (propsChanged)
        return handleNewProps();
      if (stateChanged)
        return handleNewState();
      return mergedProps;
    }
    return function pureFinalPropsSelector(nextState, nextOwnProps) {
      return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
    };
  }
  function finalPropsSelectorFactory(dispatch, {
    initMapStateToProps,
    initMapDispatchToProps,
    initMergeProps,
    ...options
  }) {
    const mapStateToProps = initMapStateToProps(dispatch, options);
    const mapDispatchToProps2 = initMapDispatchToProps(dispatch, options);
    const mergeProps = initMergeProps(dispatch, options);
    if (true) {
      verifySubselectors(mapStateToProps, mapDispatchToProps2, mergeProps);
    }
    return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch, options);
  }
  function bindActionCreators2(actionCreators, dispatch) {
    const boundActionCreators = {};
    for (const key in actionCreators) {
      const actionCreator = actionCreators[key];
      if (typeof actionCreator === "function") {
        boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
      }
    }
    return boundActionCreators;
  }
  function isPlainObject2(obj) {
    if (typeof obj !== "object" || obj === null)
      return false;
    const proto = Object.getPrototypeOf(obj);
    if (proto === null)
      return true;
    let baseProto = proto;
    while (Object.getPrototypeOf(baseProto) !== null) {
      baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
  }
  function verifyPlainObject(value, displayName, methodName) {
    if (!isPlainObject2(value)) {
      warning(
        `${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`
      );
    }
  }
  function wrapMapToPropsConstant(getConstant) {
    return function initConstantSelector(dispatch) {
      const constant = getConstant(dispatch);
      function constantSelector() {
        return constant;
      }
      constantSelector.dependsOnOwnProps = false;
      return constantSelector;
    };
  }
  function getDependsOnOwnProps(mapToProps) {
    return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
  }
  function wrapMapToPropsFunc(mapToProps, methodName) {
    return function initProxySelector(dispatch, { displayName }) {
      const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
        return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
      };
      proxy.dependsOnOwnProps = true;
      proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
        proxy.mapToProps = mapToProps;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
        let props = proxy(stateOrDispatch, ownProps);
        if (typeof props === "function") {
          proxy.mapToProps = props;
          proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
          props = proxy(stateOrDispatch, ownProps);
        }
        if (true)
          verifyPlainObject(props, displayName, methodName);
        return props;
      };
      return proxy;
    };
  }
  function createInvalidArgFactory(arg, name) {
    return (dispatch, options) => {
      throw new Error(
        `Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`
      );
    };
  }
  function mapDispatchToPropsFactory(mapDispatchToProps2) {
    return mapDispatchToProps2 && typeof mapDispatchToProps2 === "object" ? wrapMapToPropsConstant(
      (dispatch) => bindActionCreators2(mapDispatchToProps2, dispatch)
    ) : !mapDispatchToProps2 ? wrapMapToPropsConstant((dispatch) => ({
      dispatch
    })) : typeof mapDispatchToProps2 === "function" ? wrapMapToPropsFunc(mapDispatchToProps2, "mapDispatchToProps") : createInvalidArgFactory(mapDispatchToProps2, "mapDispatchToProps");
  }
  function mapStateToPropsFactory(mapStateToProps) {
    return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : typeof mapStateToProps === "function" ? wrapMapToPropsFunc(mapStateToProps, "mapStateToProps") : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
  }
  function defaultMergeProps(stateProps, dispatchProps, ownProps) {
    return { ...ownProps, ...stateProps, ...dispatchProps };
  }
  function wrapMergePropsFunc(mergeProps) {
    return function initMergePropsProxy(dispatch, { displayName, areMergedPropsEqual }) {
      let hasRunOnce = false;
      let mergedProps;
      return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
        const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        if (hasRunOnce) {
          if (!areMergedPropsEqual(nextMergedProps, mergedProps))
            mergedProps = nextMergedProps;
        } else {
          hasRunOnce = true;
          mergedProps = nextMergedProps;
          if (true)
            verifyPlainObject(mergedProps, displayName, "mergeProps");
        }
        return mergedProps;
      };
    };
  }
  function mergePropsFactory(mergeProps) {
    return !mergeProps ? () => defaultMergeProps : typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, "mergeProps");
  }
  function defaultNoopBatch(callback) {
    callback();
  }
  function createListenerCollection() {
    let first = null;
    let last = null;
    return {
      clear() {
        first = null;
        last = null;
      },
      notify() {
        defaultNoopBatch(() => {
          let listener = first;
          while (listener) {
            listener.callback();
            listener = listener.next;
          }
        });
      },
      get() {
        const listeners = [];
        let listener = first;
        while (listener) {
          listeners.push(listener);
          listener = listener.next;
        }
        return listeners;
      },
      subscribe(callback) {
        let isSubscribed = true;
        const listener = last = {
          callback,
          next: null,
          prev: last
        };
        if (listener.prev) {
          listener.prev.next = listener;
        } else {
          first = listener;
        }
        return function unsubscribe() {
          if (!isSubscribed || first === null)
            return;
          isSubscribed = false;
          if (listener.next) {
            listener.next.prev = listener.prev;
          } else {
            last = listener.prev;
          }
          if (listener.prev) {
            listener.prev.next = listener.next;
          } else {
            first = listener.next;
          }
        };
      }
    };
  }
  var nullListeners = {
    notify() {
    },
    get: () => []
  };
  function createSubscription(store, parentSub) {
    let unsubscribe;
    let listeners = nullListeners;
    let subscriptionsAmount = 0;
    let selfSubscribed = false;
    function addNestedSub(listener) {
      trySubscribe();
      const cleanupListener = listeners.subscribe(listener);
      let removed = false;
      return () => {
        if (!removed) {
          removed = true;
          cleanupListener();
          tryUnsubscribe();
        }
      };
    }
    function notifyNestedSubs() {
      listeners.notify();
    }
    function handleChangeWrapper() {
      if (subscription.onStateChange) {
        subscription.onStateChange();
      }
    }
    function isSubscribed() {
      return selfSubscribed;
    }
    function trySubscribe() {
      subscriptionsAmount++;
      if (!unsubscribe) {
        unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
        listeners = createListenerCollection();
      }
    }
    function tryUnsubscribe() {
      subscriptionsAmount--;
      if (unsubscribe && subscriptionsAmount === 0) {
        unsubscribe();
        unsubscribe = void 0;
        listeners.clear();
        listeners = nullListeners;
      }
    }
    function trySubscribeSelf() {
      if (!selfSubscribed) {
        selfSubscribed = true;
        trySubscribe();
      }
    }
    function tryUnsubscribeSelf() {
      if (selfSubscribed) {
        selfSubscribed = false;
        tryUnsubscribe();
      }
    }
    const subscription = {
      addNestedSub,
      notifyNestedSubs,
      handleChangeWrapper,
      isSubscribed,
      trySubscribe: trySubscribeSelf,
      tryUnsubscribe: tryUnsubscribeSelf,
      getListeners: () => listeners
    };
    return subscription;
  }
  var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
  var isDOM = /* @__PURE__ */ canUseDOM();
  var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
  var isReactNative = /* @__PURE__ */ isRunningInReactNative();
  var getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? React11.useLayoutEffect : React11.useEffect;
  var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
  function is(x, y) {
    if (x === y) {
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function shallowEqual(objA, objB) {
    if (is(objA, objB))
      return true;
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
      return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length)
      return false;
    for (let i = 0; i < keysA.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }
    return true;
  }
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var FORWARD_REF_STATICS = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {
    [ForwardRef]: FORWARD_REF_STATICS,
    [Memo]: MEMO_STATICS
  };
  function getStatics(component) {
    if (isMemo(component)) {
      return MEMO_STATICS;
    }
    return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
  }
  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;
  function hoistNonReactStatics(targetComponent, sourceComponent) {
    if (typeof sourceComponent !== "string") {
      if (objectPrototype) {
        const inheritedComponent = getPrototypeOf(sourceComponent);
        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent);
        }
      }
      let keys = getOwnPropertyNames(sourceComponent);
      if (getOwnPropertySymbols) {
        keys = keys.concat(getOwnPropertySymbols(sourceComponent));
      }
      const targetStatics = getStatics(targetComponent);
      const sourceStatics = getStatics(sourceComponent);
      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (!KNOWN_STATICS[key] && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
          const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
          try {
            defineProperty(targetComponent, key, descriptor);
          } catch (e2) {
          }
        }
      }
    }
    return targetComponent;
  }
  var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
  var gT = typeof globalThis !== "undefined" ? globalThis : {};
  function getContext() {
    if (!React11.createContext)
      return {};
    const contextMap = gT[ContextKey] ??= /* @__PURE__ */ new Map();
    let realContext = contextMap.get(React11.createContext);
    if (!realContext) {
      realContext = React11.createContext(
        null
      );
      if (true) {
        realContext.displayName = "ReactRedux";
      }
      contextMap.set(React11.createContext, realContext);
    }
    return realContext;
  }
  var ReactReduxContext = /* @__PURE__ */ getContext();
  var NO_SUBSCRIPTION_ARRAY = [null, null];
  var stringifyComponent = (Comp) => {
    try {
      return JSON.stringify(Comp);
    } catch (err) {
      return String(Comp);
    }
  };
  function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
    useIsomorphicLayoutEffect(() => effectFunc(...effectArgs), dependencies);
  }
  function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
    lastWrapperProps.current = wrapperProps;
    renderIsScheduled.current = false;
    if (childPropsFromStoreUpdate.current) {
      childPropsFromStoreUpdate.current = null;
      notifyNestedSubs();
    }
  }
  function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
    if (!shouldHandleStateChanges)
      return () => {
      };
    let didUnsubscribe = false;
    let lastThrownError = null;
    const checkForUpdates = () => {
      if (didUnsubscribe || !isMounted.current) {
        return;
      }
      const latestStoreState = store.getState();
      let newChildProps, error2;
      try {
        newChildProps = childPropsSelector(
          latestStoreState,
          lastWrapperProps.current
        );
      } catch (e2) {
        error2 = e2;
        lastThrownError = e2;
      }
      if (!error2) {
        lastThrownError = null;
      }
      if (newChildProps === lastChildProps.current) {
        if (!renderIsScheduled.current) {
          notifyNestedSubs();
        }
      } else {
        lastChildProps.current = newChildProps;
        childPropsFromStoreUpdate.current = newChildProps;
        renderIsScheduled.current = true;
        additionalSubscribeListener();
      }
    };
    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    const unsubscribeWrapper = () => {
      didUnsubscribe = true;
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
      if (lastThrownError) {
        throw lastThrownError;
      }
    };
    return unsubscribeWrapper;
  }
  function strictEqual(a, b) {
    return a === b;
  }
  var hasWarnedAboutDeprecatedPureOption = false;
  function connect(mapStateToProps, mapDispatchToProps2, mergeProps, {
    pure,
    areStatesEqual = strictEqual,
    areOwnPropsEqual = shallowEqual,
    areStatePropsEqual = shallowEqual,
    areMergedPropsEqual = shallowEqual,
    forwardRef: forwardRef2 = false,
    context = ReactReduxContext
  } = {}) {
    if (true) {
      if (pure !== void 0 && !hasWarnedAboutDeprecatedPureOption) {
        hasWarnedAboutDeprecatedPureOption = true;
        warning(
          'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
        );
      }
    }
    const Context = context;
    const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
    const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps2);
    const initMergeProps = mergePropsFactory(mergeProps);
    const shouldHandleStateChanges = Boolean(mapStateToProps);
    const wrapWithConnect = (WrappedComponent) => {
      if (true) {
        const isValid = /* @__PURE__ */ isValidElementType(WrappedComponent);
        if (!isValid)
          throw new Error(
            `You must pass a component to the function returned by connect. Instead received ${stringifyComponent(
              WrappedComponent
            )}`
          );
      }
      const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
      const displayName = `Connect(${wrappedComponentName})`;
      const selectorFactoryOptions = {
        shouldHandleStateChanges,
        displayName,
        wrappedComponentName,
        WrappedComponent,
        initMapStateToProps,
        initMapDispatchToProps,
        initMergeProps,
        areStatesEqual,
        areStatePropsEqual,
        areOwnPropsEqual,
        areMergedPropsEqual
      };
      function ConnectFunction(props) {
        const [propsContext, reactReduxForwardedRef, wrapperProps] = React11.useMemo(() => {
          const { reactReduxForwardedRef: reactReduxForwardedRef2, ...wrapperProps2 } = props;
          return [props.context, reactReduxForwardedRef2, wrapperProps2];
        }, [props]);
        const ContextToUse = React11.useMemo(() => {
          let ResultContext = Context;
          if (propsContext?.Consumer) {
            if (true) {
              const isValid = /* @__PURE__ */ isContextConsumer(
                /* @__PURE__ */ React11.createElement(propsContext.Consumer, null)
              );
              if (!isValid) {
                throw new Error(
                  "You must pass a valid React context consumer as `props.context`"
                );
              }
              ResultContext = propsContext;
            }
          }
          return ResultContext;
        }, [propsContext, Context]);
        const contextValue = React11.useContext(ContextToUse);
        const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
        const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
        if (!didStoreComeFromProps && !didStoreComeFromContext) {
          throw new Error(
            `Could not find "store" in the context of "${displayName}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${displayName} in connect options.`
          );
        }
        const store = didStoreComeFromProps ? props.store : contextValue.store;
        const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
        const childPropsSelector = React11.useMemo(() => {
          return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
        }, [store]);
        const [subscription, notifyNestedSubs] = React11.useMemo(() => {
          if (!shouldHandleStateChanges)
            return NO_SUBSCRIPTION_ARRAY;
          const subscription2 = createSubscription(
            store,
            didStoreComeFromProps ? void 0 : contextValue.subscription
          );
          const notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
          return [subscription2, notifyNestedSubs2];
        }, [store, didStoreComeFromProps, contextValue]);
        const overriddenContextValue = React11.useMemo(() => {
          if (didStoreComeFromProps) {
            return contextValue;
          }
          return {
            ...contextValue,
            subscription
          };
        }, [didStoreComeFromProps, contextValue, subscription]);
        const lastChildProps = React11.useRef(void 0);
        const lastWrapperProps = React11.useRef(wrapperProps);
        const childPropsFromStoreUpdate = React11.useRef(void 0);
        const renderIsScheduled = React11.useRef(false);
        const isMounted = React11.useRef(false);
        const latestSubscriptionCallbackError = React11.useRef(
          void 0
        );
        useIsomorphicLayoutEffect(() => {
          isMounted.current = true;
          return () => {
            isMounted.current = false;
          };
        }, []);
        const actualChildPropsSelector = React11.useMemo(() => {
          const selector = () => {
            if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
              return childPropsFromStoreUpdate.current;
            }
            return childPropsSelector(store.getState(), wrapperProps);
          };
          return selector;
        }, [store, wrapperProps]);
        const subscribeForReact = React11.useMemo(() => {
          const subscribe = (reactListener) => {
            if (!subscription) {
              return () => {
              };
            }
            return subscribeUpdates(
              shouldHandleStateChanges,
              store,
              subscription,
              childPropsSelector,
              lastWrapperProps,
              lastChildProps,
              renderIsScheduled,
              isMounted,
              childPropsFromStoreUpdate,
              notifyNestedSubs,
              reactListener
            );
          };
          return subscribe;
        }, [subscription]);
        useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
          lastWrapperProps,
          lastChildProps,
          renderIsScheduled,
          wrapperProps,
          childPropsFromStoreUpdate,
          notifyNestedSubs
        ]);
        let actualChildProps;
        try {
          actualChildProps = React11.useSyncExternalStore(
            subscribeForReact,
            actualChildPropsSelector,
            getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector
          );
        } catch (err) {
          if (latestSubscriptionCallbackError.current) {
            ;
            err.message += `
The error may be correlated with this previous error:
${latestSubscriptionCallbackError.current.stack}

`;
          }
          throw err;
        }
        useIsomorphicLayoutEffect(() => {
          latestSubscriptionCallbackError.current = void 0;
          childPropsFromStoreUpdate.current = void 0;
          lastChildProps.current = actualChildProps;
        });
        const renderedWrappedComponent = React11.useMemo(() => {
          return /* @__PURE__ */ React11.createElement(
            WrappedComponent,
            {
              ...actualChildProps,
              ref: reactReduxForwardedRef
            }
          );
        }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
        const renderedChild = React11.useMemo(() => {
          if (shouldHandleStateChanges) {
            return /* @__PURE__ */ React11.createElement(ContextToUse.Provider, { value: overriddenContextValue }, renderedWrappedComponent);
          }
          return renderedWrappedComponent;
        }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
        return renderedChild;
      }
      const _Connect = React11.memo(ConnectFunction);
      const Connect = _Connect;
      Connect.WrappedComponent = WrappedComponent;
      Connect.displayName = ConnectFunction.displayName = displayName;
      if (forwardRef2) {
        const _forwarded = React11.forwardRef(
          function forwardConnectRef(props, ref2) {
            return /* @__PURE__ */ React11.createElement(Connect, { ...props, reactReduxForwardedRef: ref2 });
          }
        );
        const forwarded = _forwarded;
        forwarded.displayName = displayName;
        forwarded.WrappedComponent = WrappedComponent;
        return /* @__PURE__ */ hoistNonReactStatics(forwarded, WrappedComponent);
      }
      return /* @__PURE__ */ hoistNonReactStatics(Connect, WrappedComponent);
    };
    return wrapWithConnect;
  }
  var connect_default = connect;
  function Provider(providerProps) {
    const { children, context, serverState, store } = providerProps;
    const contextValue = React11.useMemo(() => {
      const subscription = createSubscription(store);
      const baseContextValue = {
        store,
        subscription,
        getServerState: serverState ? () => serverState : void 0
      };
      if (false) {
        return baseContextValue;
      } else {
        const { identityFunctionCheck = "once", stabilityCheck = "once" } = providerProps;
        return /* @__PURE__ */ Object.assign(baseContextValue, {
          stabilityCheck,
          identityFunctionCheck
        });
      }
    }, [store, serverState]);
    const previousState = React11.useMemo(() => store.getState(), [store]);
    useIsomorphicLayoutEffect(() => {
      const { subscription } = contextValue;
      subscription.onStateChange = subscription.notifyNestedSubs;
      subscription.trySubscribe();
      if (previousState !== store.getState()) {
        subscription.notifyNestedSubs();
      }
      return () => {
        subscription.tryUnsubscribe();
        subscription.onStateChange = void 0;
      };
    }, [contextValue, previousState]);
    const Context = context || ReactReduxContext;
    return /* @__PURE__ */ React11.createElement(Context.Provider, { value: contextValue }, children);
  }
  var Provider_default = Provider;

  // node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/esm/tiny-invariant.js
  var isProduction = false;
  var prefix = "Invariant failed";
  function invariant(condition, message) {
    if (condition) {
      return;
    }
    if (isProduction) {
      throw new Error(prefix);
    }
    var provided = typeof message === "function" ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
  }

  // node_modules/.pnpm/css-box-model@1.2.1/node_modules/css-box-model/dist/css-box-model.esm.js
  var getRect = function getRect2(_ref) {
    var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
    var width = right - left;
    var height = bottom - top;
    var rect = {
      top,
      right,
      bottom,
      left,
      width,
      height,
      x: left,
      y: top,
      center: {
        x: (right + left) / 2,
        y: (bottom + top) / 2
      }
    };
    return rect;
  };
  var expand = function expand2(target, expandBy) {
    return {
      top: target.top - expandBy.top,
      left: target.left - expandBy.left,
      bottom: target.bottom + expandBy.bottom,
      right: target.right + expandBy.right
    };
  };
  var shrink = function shrink2(target, shrinkBy) {
    return {
      top: target.top + shrinkBy.top,
      left: target.left + shrinkBy.left,
      bottom: target.bottom - shrinkBy.bottom,
      right: target.right - shrinkBy.right
    };
  };
  var shift = function shift2(target, shiftBy) {
    return {
      top: target.top + shiftBy.y,
      left: target.left + shiftBy.x,
      bottom: target.bottom + shiftBy.y,
      right: target.right + shiftBy.x
    };
  };
  var noSpacing = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  var createBox = function createBox2(_ref2) {
    var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
    var marginBox = getRect(expand(borderBox, margin));
    var paddingBox = getRect(shrink(borderBox, border));
    var contentBox = getRect(shrink(paddingBox, padding));
    return {
      marginBox,
      borderBox: getRect(borderBox),
      paddingBox,
      contentBox,
      margin,
      border,
      padding
    };
  };
  var parse = function parse2(raw) {
    var value = raw.slice(0, -2);
    var suffix2 = raw.slice(-2);
    if (suffix2 !== "px") {
      return 0;
    }
    var result = Number(value);
    !!isNaN(result) ? true ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant(false) : void 0;
    return result;
  };
  var getWindowScroll = function getWindowScroll2() {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  };
  var offset = function offset2(original, change) {
    var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;
    var shifted = shift(borderBox, change);
    return createBox({
      borderBox: shifted,
      border,
      margin,
      padding
    });
  };
  var withScroll = function withScroll2(original, scroll2) {
    if (scroll2 === void 0) {
      scroll2 = getWindowScroll();
    }
    return offset(original, scroll2);
  };
  var calculateBox = function calculateBox2(borderBox, styles) {
    var margin = {
      top: parse(styles.marginTop),
      right: parse(styles.marginRight),
      bottom: parse(styles.marginBottom),
      left: parse(styles.marginLeft)
    };
    var padding = {
      top: parse(styles.paddingTop),
      right: parse(styles.paddingRight),
      bottom: parse(styles.paddingBottom),
      left: parse(styles.paddingLeft)
    };
    var border = {
      top: parse(styles.borderTopWidth),
      right: parse(styles.borderRightWidth),
      bottom: parse(styles.borderBottomWidth),
      left: parse(styles.borderLeftWidth)
    };
    return createBox({
      borderBox,
      margin,
      padding,
      border
    });
  };
  var getBox = function getBox2(el) {
    var borderBox = el.getBoundingClientRect();
    var styles = window.getComputedStyle(el);
    return calculateBox(borderBox, styles);
  };

  // node_modules/.pnpm/raf-schd@4.0.3/node_modules/raf-schd/dist/raf-schd.esm.js
  var rafSchd = function rafSchd2(fn) {
    var lastArgs = [];
    var frameId = null;
    var wrapperFn = function wrapperFn2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      lastArgs = args;
      if (frameId) {
        return;
      }
      frameId = requestAnimationFrame(function() {
        frameId = null;
        fn.apply(void 0, lastArgs);
      });
    };
    wrapperFn.cancel = function() {
      if (!frameId) {
        return;
      }
      cancelAnimationFrame(frameId);
      frameId = null;
    };
    return wrapperFn;
  };
  var raf_schd_esm_default = rafSchd;

  // node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var t2 = arguments[e2];
        for (var r in t2)
          ({}).hasOwnProperty.call(t2, r) && (n[r] = t2[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }

  // node_modules/.pnpm/@hello-pangea+dnd@18.0.1_@types+react@19.2.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@hello-pangea/dnd/dist/dnd.esm.js
  var isProduction$1 = false;
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  var clean$2 = (value) => value.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
  var getDevMessage = (message) => clean$2(`
  %c@hello-pangea/dnd

  %c${clean$2(message)}

  %c\u{1F477}\u200D This is a development only message. It will be removed in production builds.
`);
  var getFormattedMessage = (message) => [getDevMessage(message), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"];
  var isDisabledFlag = "__@hello-pangea/dnd-disable-dev-warnings";
  function log3(type, message) {
    if (isProduction$1) {
      return;
    }
    if (typeof window !== "undefined" && window[isDisabledFlag]) {
      return;
    }
    console[type](...getFormattedMessage(message));
  }
  var warning2 = log3.bind(null, "warn");
  var error = log3.bind(null, "error");
  function noop$2() {
  }
  function getOptions(shared2, fromBinding) {
    return {
      ...shared2,
      ...fromBinding
    };
  }
  function bindEvents(el, bindings, sharedOptions) {
    const unbindings = bindings.map((binding) => {
      const options = getOptions(sharedOptions, binding.options);
      el.addEventListener(binding.eventName, binding.fn, options);
      return function unbind() {
        el.removeEventListener(binding.eventName, binding.fn, options);
      };
    });
    return function unbindAll() {
      unbindings.forEach((unbind) => {
        unbind();
      });
    };
  }
  var isProduction2 = false;
  var prefix$1 = "Invariant failed";
  var RbdInvariant = class extends Error {
  };
  RbdInvariant.prototype.toString = function toString() {
    return this.message;
  };
  function invariant2(condition, message) {
    if (isProduction2) {
      throw new RbdInvariant(prefix$1);
    } else {
      throw new RbdInvariant(`${prefix$1}: ${message || ""}`);
    }
  }
  var ErrorBoundary = class extends import_react20.default.Component {
    constructor(...args) {
      super(...args);
      this.callbacks = null;
      this.unbind = noop$2;
      this.onWindowError = (event) => {
        const callbacks = this.getCallbacks();
        if (callbacks.isDragging()) {
          callbacks.tryAbort();
          true ? warning2(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `) : void 0;
        }
        const err = event.error;
        if (err instanceof RbdInvariant) {
          event.preventDefault();
          if (true) {
            error(err.message);
          }
        }
      };
      this.getCallbacks = () => {
        if (!this.callbacks) {
          throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
        }
        return this.callbacks;
      };
      this.setCallbacks = (callbacks) => {
        this.callbacks = callbacks;
      };
    }
    componentDidMount() {
      this.unbind = bindEvents(window, [{
        eventName: "error",
        fn: this.onWindowError
      }]);
    }
    componentDidCatch(err) {
      if (err instanceof RbdInvariant) {
        if (true) {
          error(err.message);
        }
        this.setState({});
        return;
      }
      throw err;
    }
    componentWillUnmount() {
      this.unbind();
    }
    render() {
      return this.props.children(this.setCallbacks);
    }
  };
  var dragHandleUsageInstructions = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`;
  var position = (index) => index + 1;
  var onDragStart = (start2) => `
  You have lifted an item in position ${position(start2.source.index)}
`;
  var withLocation = (source, destination) => {
    const isInHomeList = source.droppableId === destination.droppableId;
    const startPosition = position(source.index);
    const endPosition = position(destination.index);
    if (isInHomeList) {
      return `
      You have moved the item from position ${startPosition}
      to position ${endPosition}
    `;
    }
    return `
    You have moved the item from position ${startPosition}
    in list ${source.droppableId}
    to list ${destination.droppableId}
    in position ${endPosition}
  `;
  };
  var withCombine = (id, source, combine2) => {
    const inHomeList = source.droppableId === combine2.droppableId;
    if (inHomeList) {
      return `
      The item ${id}
      has been combined with ${combine2.draggableId}`;
    }
    return `
      The item ${id}
      in list ${source.droppableId}
      has been combined with ${combine2.draggableId}
      in list ${combine2.droppableId}
    `;
  };
  var onDragUpdate = (update2) => {
    const location2 = update2.destination;
    if (location2) {
      return withLocation(update2.source, location2);
    }
    const combine2 = update2.combine;
    if (combine2) {
      return withCombine(update2.draggableId, update2.source, combine2);
    }
    return "You are over an area that cannot be dropped on";
  };
  var returnedToStart = (source) => `
  The item has returned to its starting position
  of ${position(source.index)}
`;
  var onDragEnd = (result) => {
    if (result.reason === "CANCEL") {
      return `
      Movement cancelled.
      ${returnedToStart(result.source)}
    `;
    }
    const location2 = result.destination;
    const combine2 = result.combine;
    if (location2) {
      return `
      You have dropped the item.
      ${withLocation(result.source, location2)}
    `;
    }
    if (combine2) {
      return `
      You have dropped the item.
      ${withCombine(result.draggableId, result.source, combine2)}
    `;
    }
    return `
    The item has been dropped while not over a drop area.
    ${returnedToStart(result.source)}
  `;
  };
  var preset = {
    dragHandleUsageInstructions,
    onDragStart,
    onDragUpdate,
    onDragEnd
  };
  function isEqual$2(first, second) {
    if (first === second) {
      return true;
    }
    if (Number.isNaN(first) && Number.isNaN(second)) {
      return true;
    }
    return false;
  }
  function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
      return false;
    }
    for (let i = 0; i < newInputs.length; i++) {
      if (!isEqual$2(newInputs[i], lastInputs[i])) {
        return false;
      }
    }
    return true;
  }
  function useMemo4(getResult, inputs) {
    const initial = (0, import_react20.useState)(() => ({
      inputs,
      result: getResult()
    }))[0];
    const isFirstRun = (0, import_react20.useRef)(true);
    const committed = (0, import_react20.useRef)(initial);
    const useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
    const cache = useCache ? committed.current : {
      inputs,
      result: getResult()
    };
    (0, import_react20.useEffect)(() => {
      isFirstRun.current = false;
      committed.current = cache;
    }, [cache]);
    return cache.result;
  }
  function useCallback3(callback, inputs) {
    return useMemo4(() => callback, inputs);
  }
  var origin = {
    x: 0,
    y: 0
  };
  var add = (point1, point2) => ({
    x: point1.x + point2.x,
    y: point1.y + point2.y
  });
  var subtract = (point1, point2) => ({
    x: point1.x - point2.x,
    y: point1.y - point2.y
  });
  var isEqual$1 = (point1, point2) => point1.x === point2.x && point1.y === point2.y;
  var negate = (point) => ({
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  });
  var patch = (line, value, otherValue = 0) => {
    if (line === "x") {
      return {
        x: value,
        y: otherValue
      };
    }
    return {
      x: otherValue,
      y: value
    };
  };
  var distance = (point1, point2) => Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
  var closest$1 = (target, points) => Math.min(...points.map((point) => distance(target, point)));
  var apply = (fn) => (point) => ({
    x: fn(point.x),
    y: fn(point.y)
  });
  var executeClip = (frame, subject) => {
    const result = getRect({
      top: Math.max(subject.top, frame.top),
      right: Math.min(subject.right, frame.right),
      bottom: Math.min(subject.bottom, frame.bottom),
      left: Math.max(subject.left, frame.left)
    });
    if (result.width <= 0 || result.height <= 0) {
      return null;
    }
    return result;
  };
  var offsetByPosition = (spacing, point) => ({
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  });
  var getCorners = (spacing) => [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
  var noSpacing2 = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  var scroll$1 = (target, frame) => {
    if (!frame) {
      return target;
    }
    return offsetByPosition(target, frame.scroll.diff.displacement);
  };
  var increase = (target, axis, withPlaceholder) => {
    if (withPlaceholder && withPlaceholder.increasedBy) {
      return {
        ...target,
        [axis.end]: target[axis.end] + withPlaceholder.increasedBy[axis.line]
      };
    }
    return target;
  };
  var clip = (target, frame) => {
    if (frame && frame.shouldClipSubject) {
      return executeClip(frame.pageMarginBox, target);
    }
    return getRect(target);
  };
  var getSubject = ({
    page,
    withPlaceholder,
    axis,
    frame
  }) => {
    const scrolled = scroll$1(page.marginBox, frame);
    const increased = increase(scrolled, axis, withPlaceholder);
    const clipped = clip(increased, frame);
    return {
      page,
      withPlaceholder,
      active: clipped
    };
  };
  var scrollDroppable = (droppable2, newScroll) => {
    !droppable2.frame ? true ? invariant2() : invariant2() : void 0;
    const scrollable = droppable2.frame;
    const scrollDiff = subtract(newScroll, scrollable.scroll.initial);
    const scrollDisplacement = negate(scrollDiff);
    const frame = {
      ...scrollable,
      scroll: {
        initial: scrollable.scroll.initial,
        current: newScroll,
        diff: {
          value: scrollDiff,
          displacement: scrollDisplacement
        },
        max: scrollable.scroll.max
      }
    };
    const subject = getSubject({
      page: droppable2.subject.page,
      withPlaceholder: droppable2.subject.withPlaceholder,
      axis: droppable2.axis,
      frame
    });
    const result = {
      ...droppable2,
      frame,
      subject
    };
    return result;
  };
  function memoizeOne(resultFn, isEqual2 = areInputsEqual) {
    let cache = null;
    function memoized(...newArgs) {
      if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
        return cache.lastResult;
      }
      const lastResult = resultFn.apply(this, newArgs);
      cache = {
        lastResult,
        lastArgs: newArgs,
        lastThis: this
      };
      return lastResult;
    }
    memoized.clear = function clear() {
      cache = null;
    };
    return memoized;
  }
  var toDroppableMap = memoizeOne((droppables) => droppables.reduce((previous, current) => {
    previous[current.descriptor.id] = current;
    return previous;
  }, {}));
  var toDraggableMap = memoizeOne((draggables) => draggables.reduce((previous, current) => {
    previous[current.descriptor.id] = current;
    return previous;
  }, {}));
  var toDroppableList = memoizeOne((droppables) => Object.values(droppables));
  var toDraggableList = memoizeOne((draggables) => Object.values(draggables));
  var getDraggablesInsideDroppable = memoizeOne((droppableId, draggables) => {
    const result = toDraggableList(draggables).filter((draggable2) => droppableId === draggable2.descriptor.droppableId).sort((a, b) => a.descriptor.index - b.descriptor.index);
    return result;
  });
  function tryGetDestination(impact) {
    if (impact.at && impact.at.type === "REORDER") {
      return impact.at.destination;
    }
    return null;
  }
  function tryGetCombine(impact) {
    if (impact.at && impact.at.type === "COMBINE") {
      return impact.at.combine;
    }
    return null;
  }
  var removeDraggableFromList = memoizeOne((remove, list) => list.filter((item) => item.descriptor.id !== remove.descriptor.id));
  var moveToNextCombine = ({
    isMovingForward,
    draggable: draggable2,
    destination,
    insideDestination,
    previousImpact
  }) => {
    if (!destination.isCombineEnabled) {
      return null;
    }
    const location2 = tryGetDestination(previousImpact);
    if (!location2) {
      return null;
    }
    function getImpact(target) {
      const at = {
        type: "COMBINE",
        combine: {
          draggableId: target,
          droppableId: destination.descriptor.id
        }
      };
      return {
        ...previousImpact,
        at
      };
    }
    const all = previousImpact.displaced.all;
    const closestId = all.length ? all[0] : null;
    if (isMovingForward) {
      return closestId ? getImpact(closestId) : null;
    }
    const withoutDraggable = removeDraggableFromList(draggable2, insideDestination);
    if (!closestId) {
      if (!withoutDraggable.length) {
        return null;
      }
      const last = withoutDraggable[withoutDraggable.length - 1];
      return getImpact(last.descriptor.id);
    }
    const indexOfClosest = withoutDraggable.findIndex((d) => d.descriptor.id === closestId);
    !(indexOfClosest !== -1) ? true ? invariant2(false, "Could not find displaced item in set") : invariant2() : void 0;
    const proposedIndex = indexOfClosest - 1;
    if (proposedIndex < 0) {
      return null;
    }
    const before = withoutDraggable[proposedIndex];
    return getImpact(before.descriptor.id);
  };
  var isHomeOf = (draggable2, destination) => draggable2.descriptor.droppableId === destination.descriptor.id;
  var noDisplacedBy = {
    point: origin,
    value: 0
  };
  var emptyGroups = {
    invisible: {},
    visible: {},
    all: []
  };
  var noImpact = {
    displaced: emptyGroups,
    displacedBy: noDisplacedBy,
    at: null
  };
  var isWithin = (lowerBound, upperBound) => (value) => lowerBound <= value && value <= upperBound;
  var isPartiallyVisibleThroughFrame = (frame) => {
    const isWithinVertical = isWithin(frame.top, frame.bottom);
    const isWithinHorizontal = isWithin(frame.left, frame.right);
    return (subject) => {
      const isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
      if (isContained) {
        return true;
      }
      const isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
      const isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
      const isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;
      if (isPartiallyContained) {
        return true;
      }
      const isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
      const isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
      const isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;
      if (isTargetBiggerThanFrame) {
        return true;
      }
      const isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
      return isTargetBiggerOnOneAxis;
    };
  };
  var isTotallyVisibleThroughFrame = (frame) => {
    const isWithinVertical = isWithin(frame.top, frame.bottom);
    const isWithinHorizontal = isWithin(frame.left, frame.right);
    return (subject) => {
      const isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
      return isContained;
    };
  };
  var vertical = {
    direction: "vertical",
    line: "y",
    crossAxisLine: "x",
    start: "top",
    end: "bottom",
    size: "height",
    crossAxisStart: "left",
    crossAxisEnd: "right",
    crossAxisSize: "width"
  };
  var horizontal = {
    direction: "horizontal",
    line: "x",
    crossAxisLine: "y",
    start: "left",
    end: "right",
    size: "width",
    crossAxisStart: "top",
    crossAxisEnd: "bottom",
    crossAxisSize: "height"
  };
  var isTotallyVisibleThroughFrameOnAxis = (axis) => (frame) => {
    const isWithinVertical = isWithin(frame.top, frame.bottom);
    const isWithinHorizontal = isWithin(frame.left, frame.right);
    return (subject) => {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }
      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
  var getDroppableDisplaced = (target, destination) => {
    const displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
    return offsetByPosition(target, displacement);
  };
  var isVisibleInDroppable = (target, destination, isVisibleThroughFrameFn) => {
    if (!destination.subject.active) {
      return false;
    }
    return isVisibleThroughFrameFn(destination.subject.active)(target);
  };
  var isVisibleInViewport = (target, viewport, isVisibleThroughFrameFn) => isVisibleThroughFrameFn(viewport)(target);
  var isVisible$1 = ({
    target: toBeDisplaced,
    destination,
    viewport,
    withDroppableDisplacement: withDroppableDisplacement2,
    isVisibleThroughFrameFn
  }) => {
    const displacedTarget = withDroppableDisplacement2 ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
    return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
  };
  var isPartiallyVisible = (args) => isVisible$1({
    ...args,
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  });
  var isTotallyVisible = (args) => isVisible$1({
    ...args,
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  });
  var isTotallyVisibleOnAxis = (args) => isVisible$1({
    ...args,
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  });
  var getShouldAnimate = (id, last, forceShouldAnimate) => {
    if (typeof forceShouldAnimate === "boolean") {
      return forceShouldAnimate;
    }
    if (!last) {
      return true;
    }
    const {
      invisible,
      visible
    } = last;
    if (invisible[id]) {
      return false;
    }
    const previous = visible[id];
    return previous ? previous.shouldAnimate : true;
  };
  function getTarget(draggable2, displacedBy) {
    const marginBox = draggable2.page.marginBox;
    const expandBy = {
      top: displacedBy.point.y,
      right: 0,
      bottom: 0,
      left: displacedBy.point.x
    };
    return getRect(expand(marginBox, expandBy));
  }
  function getDisplacementGroups({
    afterDragging,
    destination,
    displacedBy,
    viewport,
    forceShouldAnimate,
    last
  }) {
    return afterDragging.reduce(function process2(groups, draggable2) {
      const target = getTarget(draggable2, displacedBy);
      const id = draggable2.descriptor.id;
      groups.all.push(id);
      const isVisible2 = isPartiallyVisible({
        target,
        destination,
        viewport,
        withDroppableDisplacement: true
      });
      if (!isVisible2) {
        groups.invisible[draggable2.descriptor.id] = true;
        return groups;
      }
      const shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
      const displacement = {
        draggableId: id,
        shouldAnimate
      };
      groups.visible[id] = displacement;
      return groups;
    }, {
      all: [],
      visible: {},
      invisible: {}
    });
  }
  function getIndexOfLastItem(draggables, options) {
    if (!draggables.length) {
      return 0;
    }
    const indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
    return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
  }
  function goAtEnd({
    insideDestination,
    inHomeList,
    displacedBy,
    destination
  }) {
    const newIndex = getIndexOfLastItem(insideDestination, {
      inHomeList
    });
    return {
      displaced: emptyGroups,
      displacedBy,
      at: {
        type: "REORDER",
        destination: {
          droppableId: destination.descriptor.id,
          index: newIndex
        }
      }
    };
  }
  function calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    displacedBy,
    last,
    index,
    forceShouldAnimate
  }) {
    const inHomeList = isHomeOf(draggable2, destination);
    if (index == null) {
      return goAtEnd({
        insideDestination,
        inHomeList,
        displacedBy,
        destination
      });
    }
    const match = insideDestination.find((item) => item.descriptor.index === index);
    if (!match) {
      return goAtEnd({
        insideDestination,
        inHomeList,
        displacedBy,
        destination
      });
    }
    const withoutDragging = removeDraggableFromList(draggable2, insideDestination);
    const sliceFrom = insideDestination.indexOf(match);
    const impacted = withoutDragging.slice(sliceFrom);
    const displaced = getDisplacementGroups({
      afterDragging: impacted,
      destination,
      displacedBy,
      last,
      viewport: viewport.frame,
      forceShouldAnimate
    });
    return {
      displaced,
      displacedBy,
      at: {
        type: "REORDER",
        destination: {
          droppableId: destination.descriptor.id,
          index
        }
      }
    };
  }
  function didStartAfterCritical(draggableId, afterCritical) {
    return Boolean(afterCritical.effected[draggableId]);
  }
  var fromCombine = ({
    isMovingForward,
    destination,
    draggables,
    combine: combine2,
    afterCritical
  }) => {
    if (!destination.isCombineEnabled) {
      return null;
    }
    const combineId = combine2.draggableId;
    const combineWith = draggables[combineId];
    const combineWithIndex = combineWith.descriptor.index;
    const didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);
    if (didCombineWithStartAfterCritical) {
      if (isMovingForward) {
        return combineWithIndex;
      }
      return combineWithIndex - 1;
    }
    if (isMovingForward) {
      return combineWithIndex + 1;
    }
    return combineWithIndex;
  };
  var fromReorder = ({
    isMovingForward,
    isInHomeList,
    insideDestination,
    location: location2
  }) => {
    if (!insideDestination.length) {
      return null;
    }
    const currentIndex = location2.index;
    const proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
    const firstIndex = insideDestination[0].descriptor.index;
    const lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
    const upperBound = isInHomeList ? lastIndex : lastIndex + 1;
    if (proposedIndex < firstIndex) {
      return null;
    }
    if (proposedIndex > upperBound) {
      return null;
    }
    return proposedIndex;
  };
  var moveToNextIndex = ({
    isMovingForward,
    isInHomeList,
    draggable: draggable2,
    draggables,
    destination,
    insideDestination,
    previousImpact,
    viewport,
    afterCritical
  }) => {
    const wasAt = previousImpact.at;
    !wasAt ? true ? invariant2(false, "Cannot move in direction without previous impact location") : invariant2() : void 0;
    if (wasAt.type === "REORDER") {
      const newIndex2 = fromReorder({
        isMovingForward,
        isInHomeList,
        location: wasAt.destination,
        insideDestination
      });
      if (newIndex2 == null) {
        return null;
      }
      return calculateReorderImpact({
        draggable: draggable2,
        insideDestination,
        destination,
        viewport,
        last: previousImpact.displaced,
        displacedBy: previousImpact.displacedBy,
        index: newIndex2
      });
    }
    const newIndex = fromCombine({
      isMovingForward,
      destination,
      displaced: previousImpact.displaced,
      draggables,
      combine: wasAt.combine,
      afterCritical
    });
    if (newIndex == null) {
      return null;
    }
    return calculateReorderImpact({
      draggable: draggable2,
      insideDestination,
      destination,
      viewport,
      last: previousImpact.displaced,
      displacedBy: previousImpact.displacedBy,
      index: newIndex
    });
  };
  var getCombinedItemDisplacement = ({
    displaced,
    afterCritical,
    combineWith,
    displacedBy
  }) => {
    const isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);
    if (didStartAfterCritical(combineWith, afterCritical)) {
      return isDisplaced ? origin : negate(displacedBy.point);
    }
    return isDisplaced ? displacedBy.point : origin;
  };
  var whenCombining = ({
    afterCritical,
    impact,
    draggables
  }) => {
    const combine2 = tryGetCombine(impact);
    !combine2 ? true ? invariant2() : invariant2() : void 0;
    const combineWith = combine2.draggableId;
    const center = draggables[combineWith].page.borderBox.center;
    const displaceBy = getCombinedItemDisplacement({
      displaced: impact.displaced,
      afterCritical,
      combineWith,
      displacedBy: impact.displacedBy
    });
    return add(center, displaceBy);
  };
  var distanceFromStartToBorderBoxCenter = (axis, box) => box.margin[axis.start] + box.borderBox[axis.size] / 2;
  var distanceFromEndToBorderBoxCenter = (axis, box) => box.margin[axis.end] + box.borderBox[axis.size] / 2;
  var getCrossAxisBorderBoxCenter = (axis, target, isMoving) => target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
  var goAfter = ({
    axis,
    moveRelativeTo,
    isMoving
  }) => patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
  var goBefore = ({
    axis,
    moveRelativeTo,
    isMoving
  }) => patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
  var goIntoStart = ({
    axis,
    moveInto,
    isMoving
  }) => patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
  var whenReordering = ({
    impact,
    draggable: draggable2,
    draggables,
    droppable: droppable2,
    afterCritical
  }) => {
    const insideDestination = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
    const draggablePage = draggable2.page;
    const axis = droppable2.axis;
    if (!insideDestination.length) {
      return goIntoStart({
        axis,
        moveInto: droppable2.page,
        isMoving: draggablePage
      });
    }
    const {
      displaced,
      displacedBy
    } = impact;
    const closestAfter = displaced.all[0];
    if (closestAfter) {
      const closest2 = draggables[closestAfter];
      if (didStartAfterCritical(closestAfter, afterCritical)) {
        return goBefore({
          axis,
          moveRelativeTo: closest2.page,
          isMoving: draggablePage
        });
      }
      const withDisplacement = offset(closest2.page, displacedBy.point);
      return goBefore({
        axis,
        moveRelativeTo: withDisplacement,
        isMoving: draggablePage
      });
    }
    const last = insideDestination[insideDestination.length - 1];
    if (last.descriptor.id === draggable2.descriptor.id) {
      return draggablePage.borderBox.center;
    }
    if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
      const page = offset(last.page, negate(afterCritical.displacedBy.point));
      return goAfter({
        axis,
        moveRelativeTo: page,
        isMoving: draggablePage
      });
    }
    return goAfter({
      axis,
      moveRelativeTo: last.page,
      isMoving: draggablePage
    });
  };
  var withDroppableDisplacement = (droppable2, point) => {
    const frame = droppable2.frame;
    if (!frame) {
      return point;
    }
    return add(point, frame.scroll.diff.displacement);
  };
  var getResultWithoutDroppableDisplacement = ({
    impact,
    draggable: draggable2,
    droppable: droppable2,
    draggables,
    afterCritical
  }) => {
    const original = draggable2.page.borderBox.center;
    const at = impact.at;
    if (!droppable2) {
      return original;
    }
    if (!at) {
      return original;
    }
    if (at.type === "REORDER") {
      return whenReordering({
        impact,
        draggable: draggable2,
        draggables,
        droppable: droppable2,
        afterCritical
      });
    }
    return whenCombining({
      impact,
      draggables,
      afterCritical
    });
  };
  var getPageBorderBoxCenterFromImpact = (args) => {
    const withoutDisplacement = getResultWithoutDroppableDisplacement(args);
    const droppable2 = args.droppable;
    const withDisplacement = droppable2 ? withDroppableDisplacement(droppable2, withoutDisplacement) : withoutDisplacement;
    return withDisplacement;
  };
  var scrollViewport = (viewport, newScroll) => {
    const diff = subtract(newScroll, viewport.scroll.initial);
    const displacement = negate(diff);
    const frame = getRect({
      top: newScroll.y,
      bottom: newScroll.y + viewport.frame.height,
      left: newScroll.x,
      right: newScroll.x + viewport.frame.width
    });
    const updated = {
      frame,
      scroll: {
        initial: viewport.scroll.initial,
        max: viewport.scroll.max,
        current: newScroll,
        diff: {
          value: diff,
          displacement
        }
      }
    };
    return updated;
  };
  function getDraggables$1(ids, draggables) {
    return ids.map((id) => draggables[id]);
  }
  function tryGetVisible(id, groups) {
    for (let i = 0; i < groups.length; i++) {
      const displacement = groups[i].visible[id];
      if (displacement) {
        return displacement;
      }
    }
    return null;
  }
  var speculativelyIncrease = ({
    impact,
    viewport,
    destination,
    draggables,
    maxScrollChange
  }) => {
    const scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
    const scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
    const last = impact.displaced;
    const withViewportScroll = getDisplacementGroups({
      afterDragging: getDraggables$1(last.all, draggables),
      destination,
      displacedBy: impact.displacedBy,
      viewport: scrolledViewport.frame,
      last,
      forceShouldAnimate: false
    });
    const withDroppableScroll2 = getDisplacementGroups({
      afterDragging: getDraggables$1(last.all, draggables),
      destination: scrolledDroppable,
      displacedBy: impact.displacedBy,
      viewport: viewport.frame,
      last,
      forceShouldAnimate: false
    });
    const invisible = {};
    const visible = {};
    const groups = [last, withViewportScroll, withDroppableScroll2];
    last.all.forEach((id) => {
      const displacement = tryGetVisible(id, groups);
      if (displacement) {
        visible[id] = displacement;
        return;
      }
      invisible[id] = true;
    });
    const newImpact = {
      ...impact,
      displaced: {
        all: last.all,
        invisible,
        visible
      }
    };
    return newImpact;
  };
  var withViewportDisplacement = (viewport, point) => add(viewport.scroll.diff.displacement, point);
  var getClientFromPageBorderBoxCenter = ({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  }) => {
    const withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
    const offset3 = subtract(withoutPageScrollChange, draggable2.page.borderBox.center);
    return add(draggable2.client.borderBox.center, offset3);
  };
  var isTotallyVisibleInNewLocation = ({
    draggable: draggable2,
    destination,
    newPageBorderBoxCenter,
    viewport,
    withDroppableDisplacement: withDroppableDisplacement2,
    onlyOnMainAxis = false
  }) => {
    const changeNeeded = subtract(newPageBorderBoxCenter, draggable2.page.borderBox.center);
    const shifted = offsetByPosition(draggable2.page.borderBox, changeNeeded);
    const args = {
      target: shifted,
      destination,
      withDroppableDisplacement: withDroppableDisplacement2,
      viewport
    };
    return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
  };
  var moveToNextPlace = ({
    isMovingForward,
    draggable: draggable2,
    destination,
    draggables,
    previousImpact,
    viewport,
    previousPageBorderBoxCenter,
    previousClientSelection,
    afterCritical
  }) => {
    if (!destination.isEnabled) {
      return null;
    }
    const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
    const isInHomeList = isHomeOf(draggable2, destination);
    const impact = moveToNextCombine({
      isMovingForward,
      draggable: draggable2,
      destination,
      insideDestination,
      previousImpact
    }) || moveToNextIndex({
      isMovingForward,
      isInHomeList,
      draggable: draggable2,
      draggables,
      destination,
      insideDestination,
      previousImpact,
      viewport,
      afterCritical
    });
    if (!impact) {
      return null;
    }
    const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact,
      draggable: draggable2,
      droppable: destination,
      draggables,
      afterCritical
    });
    const isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable2,
      destination,
      newPageBorderBoxCenter: pageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    if (isVisibleInNewLocation) {
      const clientSelection = getClientFromPageBorderBoxCenter({
        pageBorderBoxCenter,
        draggable: draggable2,
        viewport
      });
      return {
        clientSelection,
        impact,
        scrollJumpRequest: null
      };
    }
    const distance2 = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
    const cautious = speculativelyIncrease({
      impact,
      viewport,
      destination,
      draggables,
      maxScrollChange: distance2
    });
    return {
      clientSelection: previousClientSelection,
      impact: cautious,
      scrollJumpRequest: distance2
    };
  };
  var getKnownActive = (droppable2) => {
    const rect = droppable2.subject.active;
    !rect ? true ? invariant2(false, "Cannot get clipped area from droppable") : invariant2() : void 0;
    return rect;
  };
  var getBestCrossAxisDroppable = ({
    isMovingForward,
    pageBorderBoxCenter,
    source,
    droppables,
    viewport
  }) => {
    const active = source.subject.active;
    if (!active) {
      return null;
    }
    const axis = source.axis;
    const isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
    const candidates = toDroppableList(droppables).filter((droppable2) => droppable2 !== source).filter((droppable2) => droppable2.isEnabled).filter((droppable2) => Boolean(droppable2.subject.active)).filter((droppable2) => isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable2))).filter((droppable2) => {
      const activeOfTarget = getKnownActive(droppable2);
      if (isMovingForward) {
        return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
      }
      return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
    }).filter((droppable2) => {
      const activeOfTarget = getKnownActive(droppable2);
      const isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
      return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
    }).sort((a, b) => {
      const first = getKnownActive(a)[axis.crossAxisStart];
      const second = getKnownActive(b)[axis.crossAxisStart];
      if (isMovingForward) {
        return first - second;
      }
      return second - first;
    }).filter((droppable2, index, array) => getKnownActive(droppable2)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart]);
    if (!candidates.length) {
      return null;
    }
    if (candidates.length === 1) {
      return candidates[0];
    }
    const contains = candidates.filter((droppable2) => {
      const isWithinDroppable = isWithin(getKnownActive(droppable2)[axis.start], getKnownActive(droppable2)[axis.end]);
      return isWithinDroppable(pageBorderBoxCenter[axis.line]);
    });
    if (contains.length === 1) {
      return contains[0];
    }
    if (contains.length > 1) {
      return contains.sort((a, b) => getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start])[0];
    }
    return candidates.sort((a, b) => {
      const first = closest$1(pageBorderBoxCenter, getCorners(getKnownActive(a)));
      const second = closest$1(pageBorderBoxCenter, getCorners(getKnownActive(b)));
      if (first !== second) {
        return first - second;
      }
      return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
    })[0];
  };
  var getCurrentPageBorderBoxCenter = (draggable2, afterCritical) => {
    const original = draggable2.page.borderBox.center;
    return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
  };
  var getCurrentPageBorderBox = (draggable2, afterCritical) => {
    const original = draggable2.page.borderBox;
    return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
  };
  var getClosestDraggable = ({
    pageBorderBoxCenter,
    viewport,
    destination,
    insideDestination,
    afterCritical
  }) => {
    const sorted = insideDestination.filter((draggable2) => isTotallyVisible({
      target: getCurrentPageBorderBox(draggable2, afterCritical),
      destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    })).sort((a, b) => {
      const distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
      const distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));
      if (distanceToA < distanceToB) {
        return -1;
      }
      if (distanceToB < distanceToA) {
        return 1;
      }
      return a.descriptor.index - b.descriptor.index;
    });
    return sorted[0] || null;
  };
  var getDisplacedBy = memoizeOne(function getDisplacedBy2(axis, displaceBy) {
    const displacement = displaceBy[axis.line];
    return {
      value: displacement,
      point: patch(axis.line, displacement)
    };
  });
  var getRequiredGrowthForPlaceholder = (droppable2, placeholderSize, draggables) => {
    const axis = droppable2.axis;
    if (droppable2.descriptor.mode === "virtual") {
      return patch(axis.line, placeholderSize[axis.line]);
    }
    const availableSpace = droppable2.subject.page.contentBox[axis.size];
    const insideDroppable = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
    const spaceUsed = insideDroppable.reduce((sum, dimension) => sum + dimension.client.marginBox[axis.size], 0);
    const requiredSpace = spaceUsed + placeholderSize[axis.line];
    const needsToGrowBy = requiredSpace - availableSpace;
    if (needsToGrowBy <= 0) {
      return null;
    }
    return patch(axis.line, needsToGrowBy);
  };
  var withMaxScroll = (frame, max6) => ({
    ...frame,
    scroll: {
      ...frame.scroll,
      max: max6
    }
  });
  var addPlaceholder = (droppable2, draggable2, draggables) => {
    const frame = droppable2.frame;
    !!isHomeOf(draggable2, droppable2) ? true ? invariant2(false, "Should not add placeholder space to home list") : invariant2() : void 0;
    !!droppable2.subject.withPlaceholder ? true ? invariant2(false, "Cannot add placeholder size to a subject when it already has one") : invariant2() : void 0;
    const placeholderSize = getDisplacedBy(droppable2.axis, draggable2.displaceBy).point;
    const requiredGrowth = getRequiredGrowthForPlaceholder(droppable2, placeholderSize, draggables);
    const added = {
      placeholderSize,
      increasedBy: requiredGrowth,
      oldFrameMaxScroll: droppable2.frame ? droppable2.frame.scroll.max : null
    };
    if (!frame) {
      const subject2 = getSubject({
        page: droppable2.subject.page,
        withPlaceholder: added,
        axis: droppable2.axis,
        frame: droppable2.frame
      });
      return {
        ...droppable2,
        subject: subject2
      };
    }
    const maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
    const newFrame = withMaxScroll(frame, maxScroll);
    const subject = getSubject({
      page: droppable2.subject.page,
      withPlaceholder: added,
      axis: droppable2.axis,
      frame: newFrame
    });
    return {
      ...droppable2,
      subject,
      frame: newFrame
    };
  };
  var removePlaceholder = (droppable2) => {
    const added = droppable2.subject.withPlaceholder;
    !added ? true ? invariant2(false, "Cannot remove placeholder form subject when there was none") : invariant2() : void 0;
    const frame = droppable2.frame;
    if (!frame) {
      const subject2 = getSubject({
        page: droppable2.subject.page,
        axis: droppable2.axis,
        frame: null,
        withPlaceholder: null
      });
      return {
        ...droppable2,
        subject: subject2
      };
    }
    const oldMaxScroll = added.oldFrameMaxScroll;
    !oldMaxScroll ? true ? invariant2(false, "Expected droppable with frame to have old max frame scroll when removing placeholder") : invariant2() : void 0;
    const newFrame = withMaxScroll(frame, oldMaxScroll);
    const subject = getSubject({
      page: droppable2.subject.page,
      axis: droppable2.axis,
      frame: newFrame,
      withPlaceholder: null
    });
    return {
      ...droppable2,
      subject,
      frame: newFrame
    };
  };
  var moveToNewDroppable = ({
    previousPageBorderBoxCenter,
    moveRelativeTo,
    insideDestination,
    draggable: draggable2,
    draggables,
    destination,
    viewport,
    afterCritical
  }) => {
    if (!moveRelativeTo) {
      if (insideDestination.length) {
        return null;
      }
      const proposed = {
        displaced: emptyGroups,
        displacedBy: noDisplacedBy,
        at: {
          type: "REORDER",
          destination: {
            droppableId: destination.descriptor.id,
            index: 0
          }
        }
      };
      const proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
        impact: proposed,
        draggable: draggable2,
        droppable: destination,
        draggables,
        afterCritical
      });
      const withPlaceholder = isHomeOf(draggable2, destination) ? destination : addPlaceholder(destination, draggable2, draggables);
      const isVisibleInNewLocation = isTotallyVisibleInNewLocation({
        draggable: draggable2,
        destination: withPlaceholder,
        newPageBorderBoxCenter: proposedPageBorderBoxCenter,
        viewport: viewport.frame,
        withDroppableDisplacement: false,
        onlyOnMainAxis: true
      });
      return isVisibleInNewLocation ? proposed : null;
    }
    const isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);
    const proposedIndex = (() => {
      const relativeTo = moveRelativeTo.descriptor.index;
      if (moveRelativeTo.descriptor.id === draggable2.descriptor.id) {
        return relativeTo;
      }
      if (isGoingBeforeTarget) {
        return relativeTo;
      }
      return relativeTo + 1;
    })();
    const displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
    return calculateReorderImpact({
      draggable: draggable2,
      insideDestination,
      destination,
      viewport,
      displacedBy,
      last: emptyGroups,
      index: proposedIndex
    });
  };
  var moveCrossAxis = ({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    isOver,
    draggables,
    droppables,
    viewport,
    afterCritical
  }) => {
    const destination = getBestCrossAxisDroppable({
      isMovingForward,
      pageBorderBoxCenter: previousPageBorderBoxCenter,
      source: isOver,
      droppables,
      viewport
    });
    if (!destination) {
      return null;
    }
    const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
    const moveRelativeTo = getClosestDraggable({
      pageBorderBoxCenter: previousPageBorderBoxCenter,
      viewport,
      destination,
      insideDestination,
      afterCritical
    });
    const impact = moveToNewDroppable({
      previousPageBorderBoxCenter,
      destination,
      draggable: draggable2,
      draggables,
      moveRelativeTo,
      insideDestination,
      viewport,
      afterCritical
    });
    if (!impact) {
      return null;
    }
    const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact,
      draggable: draggable2,
      droppable: destination,
      draggables,
      afterCritical
    });
    const clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter,
      draggable: draggable2,
      viewport
    });
    return {
      clientSelection,
      impact,
      scrollJumpRequest: null
    };
  };
  var whatIsDraggedOver = (impact) => {
    const at = impact.at;
    if (!at) {
      return null;
    }
    if (at.type === "REORDER") {
      return at.destination.droppableId;
    }
    return at.combine.droppableId;
  };
  var getDroppableOver$1 = (impact, droppables) => {
    const id = whatIsDraggedOver(impact);
    return id ? droppables[id] : null;
  };
  var moveInDirection = ({
    state,
    type
  }) => {
    const isActuallyOver = getDroppableOver$1(state.impact, state.dimensions.droppables);
    const isMainAxisMovementAllowed = Boolean(isActuallyOver);
    const home2 = state.dimensions.droppables[state.critical.droppable.id];
    const isOver = isActuallyOver || home2;
    const direction = isOver.axis.direction;
    const isMovingOnMainAxis = direction === "vertical" && (type === "MOVE_UP" || type === "MOVE_DOWN") || direction === "horizontal" && (type === "MOVE_LEFT" || type === "MOVE_RIGHT");
    if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
      return null;
    }
    const isMovingForward = type === "MOVE_DOWN" || type === "MOVE_RIGHT";
    const draggable2 = state.dimensions.draggables[state.critical.draggable.id];
    const previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
    const {
      draggables,
      droppables
    } = state.dimensions;
    return isMovingOnMainAxis ? moveToNextPlace({
      isMovingForward,
      previousPageBorderBoxCenter,
      draggable: draggable2,
      destination: isOver,
      draggables,
      viewport: state.viewport,
      previousClientSelection: state.current.client.selection,
      previousImpact: state.impact,
      afterCritical: state.afterCritical
    }) : moveCrossAxis({
      isMovingForward,
      previousPageBorderBoxCenter,
      draggable: draggable2,
      isOver,
      draggables,
      droppables,
      viewport: state.viewport,
      afterCritical: state.afterCritical
    });
  };
  function isMovementAllowed(state) {
    return state.phase === "DRAGGING" || state.phase === "COLLECTING";
  }
  function isPositionInFrame(frame) {
    const isWithinVertical = isWithin(frame.top, frame.bottom);
    const isWithinHorizontal = isWithin(frame.left, frame.right);
    return function run(point) {
      return isWithinVertical(point.y) && isWithinHorizontal(point.x);
    };
  }
  function getHasOverlap(first, second) {
    return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
  }
  function getFurthestAway({
    pageBorderBox,
    draggable: draggable2,
    candidates
  }) {
    const startCenter = draggable2.page.borderBox.center;
    const sorted = candidates.map((candidate) => {
      const axis = candidate.axis;
      const target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
      return {
        id: candidate.descriptor.id,
        distance: distance(startCenter, target)
      };
    }).sort((a, b) => b.distance - a.distance);
    return sorted[0] ? sorted[0].id : null;
  }
  function getDroppableOver({
    pageBorderBox,
    draggable: draggable2,
    droppables
  }) {
    const candidates = toDroppableList(droppables).filter((item) => {
      if (!item.isEnabled) {
        return false;
      }
      const active = item.subject.active;
      if (!active) {
        return false;
      }
      if (!getHasOverlap(pageBorderBox, active)) {
        return false;
      }
      if (isPositionInFrame(active)(pageBorderBox.center)) {
        return true;
      }
      const axis = item.axis;
      const childCenter = active.center[axis.crossAxisLine];
      const crossAxisStart = pageBorderBox[axis.crossAxisStart];
      const crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
      const isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
      const isStartContained = isContained(crossAxisStart);
      const isEndContained = isContained(crossAxisEnd);
      if (!isStartContained && !isEndContained) {
        return true;
      }
      if (isStartContained) {
        return crossAxisStart < childCenter;
      }
      return crossAxisEnd > childCenter;
    });
    if (!candidates.length) {
      return null;
    }
    if (candidates.length === 1) {
      return candidates[0].descriptor.id;
    }
    return getFurthestAway({
      pageBorderBox,
      draggable: draggable2,
      candidates
    });
  }
  var offsetRectByPosition = (rect, point) => getRect(offsetByPosition(rect, point));
  var withDroppableScroll = (droppable2, area) => {
    const frame = droppable2.frame;
    if (!frame) {
      return area;
    }
    return offsetRectByPosition(area, frame.scroll.diff.value);
  };
  function getIsDisplaced({
    displaced,
    id
  }) {
    return Boolean(displaced.visible[id] || displaced.invisible[id]);
  }
  function atIndex({
    draggable: draggable2,
    closest: closest2,
    inHomeList
  }) {
    if (!closest2) {
      return null;
    }
    if (!inHomeList) {
      return closest2.descriptor.index;
    }
    if (closest2.descriptor.index > draggable2.descriptor.index) {
      return closest2.descriptor.index - 1;
    }
    return closest2.descriptor.index;
  }
  var getReorderImpact = ({
    pageBorderBoxWithDroppableScroll: targetRect,
    draggable: draggable2,
    destination,
    insideDestination,
    last,
    viewport,
    afterCritical
  }) => {
    const axis = destination.axis;
    const displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
    const displacement = displacedBy.value;
    const targetStart = targetRect[axis.start];
    const targetEnd = targetRect[axis.end];
    const withoutDragging = removeDraggableFromList(draggable2, insideDestination);
    const closest2 = withoutDragging.find((child) => {
      const id = child.descriptor.id;
      const childCenter = child.page.borderBox.center[axis.line];
      const didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
      const isDisplaced = getIsDisplaced({
        displaced: last,
        id
      });
      if (didStartAfterCritical$1) {
        if (isDisplaced) {
          return targetEnd <= childCenter;
        }
        return targetStart < childCenter - displacement;
      }
      if (isDisplaced) {
        return targetEnd <= childCenter + displacement;
      }
      return targetStart < childCenter;
    }) || null;
    const newIndex = atIndex({
      draggable: draggable2,
      closest: closest2,
      inHomeList: isHomeOf(draggable2, destination)
    });
    return calculateReorderImpact({
      draggable: draggable2,
      insideDestination,
      destination,
      viewport,
      last,
      displacedBy,
      index: newIndex
    });
  };
  var combineThresholdDivisor = 4;
  var getCombineImpact = ({
    draggable: draggable2,
    pageBorderBoxWithDroppableScroll: targetRect,
    previousImpact,
    destination,
    insideDestination,
    afterCritical
  }) => {
    if (!destination.isCombineEnabled) {
      return null;
    }
    const axis = destination.axis;
    const displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
    const displacement = displacedBy.value;
    const targetStart = targetRect[axis.start];
    const targetEnd = targetRect[axis.end];
    const withoutDragging = removeDraggableFromList(draggable2, insideDestination);
    const combineWith = withoutDragging.find((child) => {
      const id = child.descriptor.id;
      const childRect = child.page.borderBox;
      const childSize = childRect[axis.size];
      const threshold = childSize / combineThresholdDivisor;
      const didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
      const isDisplaced = getIsDisplaced({
        displaced: previousImpact.displaced,
        id
      });
      if (didStartAfterCritical$1) {
        if (isDisplaced) {
          return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
        }
        return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
      }
      if (isDisplaced) {
        return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
      }
      return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
    });
    if (!combineWith) {
      return null;
    }
    const impact = {
      displacedBy,
      displaced: previousImpact.displaced,
      at: {
        type: "COMBINE",
        combine: {
          draggableId: combineWith.descriptor.id,
          droppableId: destination.descriptor.id
        }
      }
    };
    return impact;
  };
  var getDragImpact = ({
    pageOffset,
    draggable: draggable2,
    draggables,
    droppables,
    previousImpact,
    viewport,
    afterCritical
  }) => {
    const pageBorderBox = offsetRectByPosition(draggable2.page.borderBox, pageOffset);
    const destinationId = getDroppableOver({
      pageBorderBox,
      draggable: draggable2,
      droppables
    });
    if (!destinationId) {
      return noImpact;
    }
    const destination = droppables[destinationId];
    const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
    const pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
    return getCombineImpact({
      pageBorderBoxWithDroppableScroll,
      draggable: draggable2,
      previousImpact,
      destination,
      insideDestination,
      afterCritical
    }) || getReorderImpact({
      pageBorderBoxWithDroppableScroll,
      draggable: draggable2,
      destination,
      insideDestination,
      last: previousImpact.displaced,
      viewport,
      afterCritical
    });
  };
  var patchDroppableMap = (droppables, updated) => ({
    ...droppables,
    [updated.descriptor.id]: updated
  });
  var clearUnusedPlaceholder = ({
    previousImpact,
    impact,
    droppables
  }) => {
    const last = whatIsDraggedOver(previousImpact);
    const now = whatIsDraggedOver(impact);
    if (!last) {
      return droppables;
    }
    if (last === now) {
      return droppables;
    }
    const lastDroppable = droppables[last];
    if (!lastDroppable.subject.withPlaceholder) {
      return droppables;
    }
    const updated = removePlaceholder(lastDroppable);
    return patchDroppableMap(droppables, updated);
  };
  var recomputePlaceholders = ({
    draggable: draggable2,
    draggables,
    droppables,
    previousImpact,
    impact
  }) => {
    const cleaned = clearUnusedPlaceholder({
      previousImpact,
      impact,
      droppables
    });
    const isOver = whatIsDraggedOver(impact);
    if (!isOver) {
      return cleaned;
    }
    const droppable2 = droppables[isOver];
    if (isHomeOf(draggable2, droppable2)) {
      return cleaned;
    }
    if (droppable2.subject.withPlaceholder) {
      return cleaned;
    }
    const patched = addPlaceholder(droppable2, draggable2, draggables);
    return patchDroppableMap(cleaned, patched);
  };
  var update = ({
    state,
    clientSelection: forcedClientSelection,
    dimensions: forcedDimensions,
    viewport: forcedViewport,
    impact: forcedImpact,
    scrollJumpRequest
  }) => {
    const viewport = forcedViewport || state.viewport;
    const dimensions = forcedDimensions || state.dimensions;
    const clientSelection = forcedClientSelection || state.current.client.selection;
    const offset3 = subtract(clientSelection, state.initial.client.selection);
    const client = {
      offset: offset3,
      selection: clientSelection,
      borderBoxCenter: add(state.initial.client.borderBoxCenter, offset3)
    };
    const page = {
      selection: add(client.selection, viewport.scroll.current),
      borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
      offset: add(client.offset, viewport.scroll.diff.value)
    };
    const current = {
      client,
      page
    };
    if (state.phase === "COLLECTING") {
      return {
        ...state,
        dimensions,
        viewport,
        current
      };
    }
    const draggable2 = dimensions.draggables[state.critical.draggable.id];
    const newImpact = forcedImpact || getDragImpact({
      pageOffset: page.offset,
      draggable: draggable2,
      draggables: dimensions.draggables,
      droppables: dimensions.droppables,
      previousImpact: state.impact,
      viewport,
      afterCritical: state.afterCritical
    });
    const withUpdatedPlaceholders = recomputePlaceholders({
      draggable: draggable2,
      impact: newImpact,
      previousImpact: state.impact,
      draggables: dimensions.draggables,
      droppables: dimensions.droppables
    });
    const result = {
      ...state,
      current,
      dimensions: {
        draggables: dimensions.draggables,
        droppables: withUpdatedPlaceholders
      },
      impact: newImpact,
      viewport,
      scrollJumpRequest: scrollJumpRequest || null,
      forceShouldAnimate: scrollJumpRequest ? false : null
    };
    return result;
  };
  function getDraggables(ids, draggables) {
    return ids.map((id) => draggables[id]);
  }
  var recompute = ({
    impact,
    viewport,
    draggables,
    destination,
    forceShouldAnimate
  }) => {
    const last = impact.displaced;
    const afterDragging = getDraggables(last.all, draggables);
    const displaced = getDisplacementGroups({
      afterDragging,
      destination,
      displacedBy: impact.displacedBy,
      viewport: viewport.frame,
      forceShouldAnimate,
      last
    });
    return {
      ...impact,
      displaced
    };
  };
  var getClientBorderBoxCenter = ({
    impact,
    draggable: draggable2,
    droppable: droppable2,
    draggables,
    viewport,
    afterCritical
  }) => {
    const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact,
      draggable: draggable2,
      draggables,
      droppable: droppable2,
      afterCritical
    });
    return getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter,
      draggable: draggable2,
      viewport
    });
  };
  var refreshSnap = ({
    state,
    dimensions: forcedDimensions,
    viewport: forcedViewport
  }) => {
    !(state.movementMode === "SNAP") ? true ? invariant2() : invariant2() : void 0;
    const needsVisibilityCheck = state.impact;
    const viewport = forcedViewport || state.viewport;
    const dimensions = forcedDimensions || state.dimensions;
    const {
      draggables,
      droppables
    } = dimensions;
    const draggable2 = draggables[state.critical.draggable.id];
    const isOver = whatIsDraggedOver(needsVisibilityCheck);
    !isOver ? true ? invariant2(false, "Must be over a destination in SNAP movement mode") : invariant2() : void 0;
    const destination = droppables[isOver];
    const impact = recompute({
      impact: needsVisibilityCheck,
      viewport,
      destination,
      draggables
    });
    const clientSelection = getClientBorderBoxCenter({
      impact,
      draggable: draggable2,
      droppable: destination,
      draggables,
      viewport,
      afterCritical: state.afterCritical
    });
    return update({
      impact,
      clientSelection,
      state,
      dimensions,
      viewport
    });
  };
  var getHomeLocation = (descriptor) => ({
    index: descriptor.index,
    droppableId: descriptor.droppableId
  });
  var getLiftEffect = ({
    draggable: draggable2,
    home: home2,
    draggables,
    viewport
  }) => {
    const displacedBy = getDisplacedBy(home2.axis, draggable2.displaceBy);
    const insideHome = getDraggablesInsideDroppable(home2.descriptor.id, draggables);
    const rawIndex = insideHome.indexOf(draggable2);
    !(rawIndex !== -1) ? true ? invariant2(false, "Expected draggable to be inside home list") : invariant2() : void 0;
    const afterDragging = insideHome.slice(rawIndex + 1);
    const effected = afterDragging.reduce((previous, item) => {
      previous[item.descriptor.id] = true;
      return previous;
    }, {});
    const afterCritical = {
      inVirtualList: home2.descriptor.mode === "virtual",
      displacedBy,
      effected
    };
    const displaced = getDisplacementGroups({
      afterDragging,
      destination: home2,
      displacedBy,
      last: null,
      viewport: viewport.frame,
      forceShouldAnimate: false
    });
    const impact = {
      displaced,
      displacedBy,
      at: {
        type: "REORDER",
        destination: getHomeLocation(draggable2.descriptor)
      }
    };
    return {
      impact,
      afterCritical
    };
  };
  var patchDimensionMap = (dimensions, updated) => ({
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  });
  var start = (key) => {
    if (true) {
      {
        return;
      }
    }
  };
  var finish = (key) => {
    if (true) {
      {
        return;
      }
    }
  };
  var offsetDraggable = ({
    draggable: draggable2,
    offset: offset$1,
    initialWindowScroll
  }) => {
    const client = offset(draggable2.client, offset$1);
    const page = withScroll(client, initialWindowScroll);
    const moved = {
      ...draggable2,
      placeholder: {
        ...draggable2.placeholder,
        client
      },
      client,
      page
    };
    return moved;
  };
  var getFrame = (droppable2) => {
    const frame = droppable2.frame;
    !frame ? true ? invariant2(false, "Expected Droppable to have a frame") : invariant2() : void 0;
    return frame;
  };
  var adjustAdditionsForScrollChanges = ({
    additions,
    updatedDroppables,
    viewport
  }) => {
    const windowScrollChange = viewport.scroll.diff.value;
    return additions.map((draggable2) => {
      const droppableId = draggable2.descriptor.droppableId;
      const modified = updatedDroppables[droppableId];
      const frame = getFrame(modified);
      const droppableScrollChange = frame.scroll.diff.value;
      const totalChange = add(windowScrollChange, droppableScrollChange);
      const moved = offsetDraggable({
        draggable: draggable2,
        offset: totalChange,
        initialWindowScroll: viewport.scroll.initial
      });
      return moved;
    });
  };
  var publishWhileDraggingInVirtual = ({
    state,
    published
  }) => {
    start();
    const withScrollChange = published.modified.map((update2) => {
      const existing = state.dimensions.droppables[update2.droppableId];
      const scrolled = scrollDroppable(existing, update2.scroll);
      return scrolled;
    });
    const droppables = {
      ...state.dimensions.droppables,
      ...toDroppableMap(withScrollChange)
    };
    const updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
      additions: published.additions,
      updatedDroppables: droppables,
      viewport: state.viewport
    }));
    const draggables = {
      ...state.dimensions.draggables,
      ...updatedAdditions
    };
    published.removals.forEach((id) => {
      delete draggables[id];
    });
    const dimensions = {
      droppables,
      draggables
    };
    const wasOverId = whatIsDraggedOver(state.impact);
    const wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
    const draggable2 = dimensions.draggables[state.critical.draggable.id];
    const home2 = dimensions.droppables[state.critical.droppable.id];
    const {
      impact: onLiftImpact,
      afterCritical
    } = getLiftEffect({
      draggable: draggable2,
      home: home2,
      draggables,
      viewport: state.viewport
    });
    const previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
    const impact = getDragImpact({
      pageOffset: state.current.page.offset,
      draggable: dimensions.draggables[state.critical.draggable.id],
      draggables: dimensions.draggables,
      droppables: dimensions.droppables,
      previousImpact,
      viewport: state.viewport,
      afterCritical
    });
    finish();
    const draggingState = {
      ...state,
      phase: "DRAGGING",
      impact,
      onLiftImpact,
      dimensions,
      afterCritical,
      forceShouldAnimate: false
    };
    if (state.phase === "COLLECTING") {
      return draggingState;
    }
    const dropPending2 = {
      ...draggingState,
      phase: "DROP_PENDING",
      reason: state.reason,
      isWaiting: false
    };
    return dropPending2;
  };
  var isSnapping = (state) => state.movementMode === "SNAP";
  var postDroppableChange = (state, updated, isEnabledChanging) => {
    const dimensions = patchDimensionMap(state.dimensions, updated);
    if (!isSnapping(state) || isEnabledChanging) {
      return update({
        state,
        dimensions
      });
    }
    return refreshSnap({
      state,
      dimensions
    });
  };
  function removeScrollJumpRequest(state) {
    if (state.isDragging && state.movementMode === "SNAP") {
      return {
        ...state,
        scrollJumpRequest: null
      };
    }
    return state;
  }
  var idle$2 = {
    phase: "IDLE",
    completed: null,
    shouldFlush: false
  };
  var reducer = (state = idle$2, action) => {
    if (action.type === "FLUSH") {
      return {
        ...idle$2,
        shouldFlush: true
      };
    }
    if (action.type === "INITIAL_PUBLISH") {
      !(state.phase === "IDLE") ? true ? invariant2(false, "INITIAL_PUBLISH must come after a IDLE phase") : invariant2() : void 0;
      const {
        critical,
        clientSelection,
        viewport,
        dimensions,
        movementMode
      } = action.payload;
      const draggable2 = dimensions.draggables[critical.draggable.id];
      const home2 = dimensions.droppables[critical.droppable.id];
      const client = {
        selection: clientSelection,
        borderBoxCenter: draggable2.client.borderBox.center,
        offset: origin
      };
      const initial = {
        client,
        page: {
          selection: add(client.selection, viewport.scroll.initial),
          borderBoxCenter: add(client.selection, viewport.scroll.initial),
          offset: add(client.selection, viewport.scroll.diff.value)
        }
      };
      const isWindowScrollAllowed = toDroppableList(dimensions.droppables).every((item) => !item.isFixedOnPage);
      const {
        impact,
        afterCritical
      } = getLiftEffect({
        draggable: draggable2,
        home: home2,
        draggables: dimensions.draggables,
        viewport
      });
      const result = {
        phase: "DRAGGING",
        isDragging: true,
        critical,
        movementMode,
        dimensions,
        initial,
        current: initial,
        isWindowScrollAllowed,
        impact,
        afterCritical,
        onLiftImpact: impact,
        viewport,
        scrollJumpRequest: null,
        forceShouldAnimate: null
      };
      return result;
    }
    if (action.type === "COLLECTION_STARTING") {
      if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
        return state;
      }
      !(state.phase === "DRAGGING") ? true ? invariant2(false, `Collection cannot start from phase ${state.phase}`) : invariant2() : void 0;
      const result = {
        ...state,
        phase: "COLLECTING"
      };
      return result;
    }
    if (action.type === "PUBLISH_WHILE_DRAGGING") {
      !(state.phase === "COLLECTING" || state.phase === "DROP_PENDING") ? true ? invariant2(false, `Unexpected ${action.type} received in phase ${state.phase}`) : invariant2() : void 0;
      return publishWhileDraggingInVirtual({
        state,
        published: action.payload
      });
    }
    if (action.type === "MOVE") {
      if (state.phase === "DROP_PENDING") {
        return state;
      }
      !isMovementAllowed(state) ? true ? invariant2(false, `${action.type} not permitted in phase ${state.phase}`) : invariant2() : void 0;
      const {
        client: clientSelection
      } = action.payload;
      if (isEqual$1(clientSelection, state.current.client.selection)) {
        return state;
      }
      return update({
        state,
        clientSelection,
        impact: isSnapping(state) ? state.impact : null
      });
    }
    if (action.type === "UPDATE_DROPPABLE_SCROLL") {
      if (state.phase === "DROP_PENDING") {
        return removeScrollJumpRequest(state);
      }
      if (state.phase === "COLLECTING") {
        return removeScrollJumpRequest(state);
      }
      !isMovementAllowed(state) ? true ? invariant2(false, `${action.type} not permitted in phase ${state.phase}`) : invariant2() : void 0;
      const {
        id,
        newScroll
      } = action.payload;
      const target = state.dimensions.droppables[id];
      if (!target) {
        return state;
      }
      const scrolled = scrollDroppable(target, newScroll);
      return postDroppableChange(state, scrolled, false);
    }
    if (action.type === "UPDATE_DROPPABLE_IS_ENABLED") {
      if (state.phase === "DROP_PENDING") {
        return state;
      }
      !isMovementAllowed(state) ? true ? invariant2(false, `Attempting to move in an unsupported phase ${state.phase}`) : invariant2() : void 0;
      const {
        id,
        isEnabled
      } = action.payload;
      const target = state.dimensions.droppables[id];
      !target ? true ? invariant2(false, `Cannot find Droppable[id: ${id}] to toggle its enabled state`) : invariant2() : void 0;
      !(target.isEnabled !== isEnabled) ? true ? invariant2(false, `Trying to set droppable isEnabled to ${String(isEnabled)}
      but it is already ${String(target.isEnabled)}`) : invariant2() : void 0;
      const updated = {
        ...target,
        isEnabled
      };
      return postDroppableChange(state, updated, true);
    }
    if (action.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
      if (state.phase === "DROP_PENDING") {
        return state;
      }
      !isMovementAllowed(state) ? true ? invariant2(false, `Attempting to move in an unsupported phase ${state.phase}`) : invariant2() : void 0;
      const {
        id,
        isCombineEnabled
      } = action.payload;
      const target = state.dimensions.droppables[id];
      !target ? true ? invariant2(false, `Cannot find Droppable[id: ${id}] to toggle its isCombineEnabled state`) : invariant2() : void 0;
      !(target.isCombineEnabled !== isCombineEnabled) ? true ? invariant2(false, `Trying to set droppable isCombineEnabled to ${String(isCombineEnabled)}
      but it is already ${String(target.isCombineEnabled)}`) : invariant2() : void 0;
      const updated = {
        ...target,
        isCombineEnabled
      };
      return postDroppableChange(state, updated, true);
    }
    if (action.type === "MOVE_BY_WINDOW_SCROLL") {
      if (state.phase === "DROP_PENDING" || state.phase === "DROP_ANIMATING") {
        return state;
      }
      !isMovementAllowed(state) ? true ? invariant2(false, `Cannot move by window in phase ${state.phase}`) : invariant2() : void 0;
      !state.isWindowScrollAllowed ? true ? invariant2(false, "Window scrolling is currently not supported for fixed lists") : invariant2() : void 0;
      const newScroll = action.payload.newScroll;
      if (isEqual$1(state.viewport.scroll.current, newScroll)) {
        return removeScrollJumpRequest(state);
      }
      const viewport = scrollViewport(state.viewport, newScroll);
      if (isSnapping(state)) {
        return refreshSnap({
          state,
          viewport
        });
      }
      return update({
        state,
        viewport
      });
    }
    if (action.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
      if (!isMovementAllowed(state)) {
        return state;
      }
      const maxScroll = action.payload.maxScroll;
      if (isEqual$1(maxScroll, state.viewport.scroll.max)) {
        return state;
      }
      const withMaxScroll2 = {
        ...state.viewport,
        scroll: {
          ...state.viewport.scroll,
          max: maxScroll
        }
      };
      return {
        ...state,
        viewport: withMaxScroll2
      };
    }
    if (action.type === "MOVE_UP" || action.type === "MOVE_DOWN" || action.type === "MOVE_LEFT" || action.type === "MOVE_RIGHT") {
      if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
        return state;
      }
      !(state.phase === "DRAGGING") ? true ? invariant2(false, `${action.type} received while not in DRAGGING phase`) : invariant2() : void 0;
      const result = moveInDirection({
        state,
        type: action.type
      });
      if (!result) {
        return state;
      }
      return update({
        state,
        impact: result.impact,
        clientSelection: result.clientSelection,
        scrollJumpRequest: result.scrollJumpRequest
      });
    }
    if (action.type === "DROP_PENDING") {
      const reason = action.payload.reason;
      !(state.phase === "COLLECTING") ? true ? invariant2(false, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : invariant2() : void 0;
      const newState = {
        ...state,
        phase: "DROP_PENDING",
        isWaiting: true,
        reason
      };
      return newState;
    }
    if (action.type === "DROP_ANIMATE") {
      const {
        completed,
        dropDuration,
        newHomeClientOffset
      } = action.payload;
      !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? true ? invariant2(false, `Cannot animate drop from phase ${state.phase}`) : invariant2() : void 0;
      const result = {
        phase: "DROP_ANIMATING",
        completed,
        dropDuration,
        newHomeClientOffset,
        dimensions: state.dimensions
      };
      return result;
    }
    if (action.type === "DROP_COMPLETE") {
      const {
        completed
      } = action.payload;
      return {
        phase: "IDLE",
        completed,
        shouldFlush: false
      };
    }
    return state;
  };
  function guard(action, predicate) {
    return action instanceof Object && "type" in action && action.type === predicate;
  }
  var beforeInitialCapture = (args) => ({
    type: "BEFORE_INITIAL_CAPTURE",
    payload: args
  });
  var lift$1 = (args) => ({
    type: "LIFT",
    payload: args
  });
  var initialPublish = (args) => ({
    type: "INITIAL_PUBLISH",
    payload: args
  });
  var publishWhileDragging = (args) => ({
    type: "PUBLISH_WHILE_DRAGGING",
    payload: args
  });
  var collectionStarting = () => ({
    type: "COLLECTION_STARTING",
    payload: null
  });
  var updateDroppableScroll = (args) => ({
    type: "UPDATE_DROPPABLE_SCROLL",
    payload: args
  });
  var updateDroppableIsEnabled = (args) => ({
    type: "UPDATE_DROPPABLE_IS_ENABLED",
    payload: args
  });
  var updateDroppableIsCombineEnabled = (args) => ({
    type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
    payload: args
  });
  var move = (args) => ({
    type: "MOVE",
    payload: args
  });
  var moveByWindowScroll = (args) => ({
    type: "MOVE_BY_WINDOW_SCROLL",
    payload: args
  });
  var updateViewportMaxScroll = (args) => ({
    type: "UPDATE_VIEWPORT_MAX_SCROLL",
    payload: args
  });
  var moveUp = () => ({
    type: "MOVE_UP",
    payload: null
  });
  var moveDown = () => ({
    type: "MOVE_DOWN",
    payload: null
  });
  var moveRight = () => ({
    type: "MOVE_RIGHT",
    payload: null
  });
  var moveLeft = () => ({
    type: "MOVE_LEFT",
    payload: null
  });
  var flush = () => ({
    type: "FLUSH",
    payload: null
  });
  var animateDrop = (args) => ({
    type: "DROP_ANIMATE",
    payload: args
  });
  var completeDrop = (args) => ({
    type: "DROP_COMPLETE",
    payload: args
  });
  var drop = (args) => ({
    type: "DROP",
    payload: args
  });
  var dropPending = (args) => ({
    type: "DROP_PENDING",
    payload: args
  });
  var dropAnimationFinished = () => ({
    type: "DROP_ANIMATION_FINISHED",
    payload: null
  });
  function checkIndexes(insideDestination) {
    if (insideDestination.length <= 1) {
      return;
    }
    const indexes = insideDestination.map((d) => d.descriptor.index);
    const errors = {};
    for (let i = 1; i < indexes.length; i++) {
      const current = indexes[i];
      const previous = indexes[i - 1];
      if (current !== previous + 1) {
        errors[current] = true;
      }
    }
    if (!Object.keys(errors).length) {
      return;
    }
    const formatted = indexes.map((index) => {
      const hasError = Boolean(errors[index]);
      return hasError ? `[\u{1F525}${index}]` : `${index}`;
    }).join(", ");
    true ? warning2(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${formatted}
  `) : void 0;
  }
  function validateDimensions(critical, dimensions) {
    if (true) {
      const insideDestination = getDraggablesInsideDroppable(critical.droppable.id, dimensions.draggables);
      checkIndexes(insideDestination);
    }
  }
  var lift = (marshal) => ({
    getState,
    dispatch
  }) => (next) => (action) => {
    if (!guard(action, "LIFT")) {
      next(action);
      return;
    }
    const {
      id,
      clientSelection,
      movementMode
    } = action.payload;
    const initial = getState();
    if (initial.phase === "DROP_ANIMATING") {
      dispatch(completeDrop({
        completed: initial.completed
      }));
    }
    !(getState().phase === "IDLE") ? true ? invariant2(false, "Unexpected phase to start a drag") : invariant2() : void 0;
    dispatch(flush());
    dispatch(beforeInitialCapture({
      draggableId: id,
      movementMode
    }));
    const scrollOptions = {
      shouldPublishImmediately: movementMode === "SNAP"
    };
    const request = {
      draggableId: id,
      scrollOptions
    };
    const {
      critical,
      dimensions,
      viewport
    } = marshal.startPublishing(request);
    validateDimensions(critical, dimensions);
    dispatch(initialPublish({
      critical,
      dimensions,
      clientSelection,
      movementMode,
      viewport
    }));
  };
  var style = (marshal) => () => (next) => (action) => {
    if (guard(action, "INITIAL_PUBLISH")) {
      marshal.dragging();
    }
    if (guard(action, "DROP_ANIMATE")) {
      marshal.dropping(action.payload.completed.result.reason);
    }
    if (guard(action, "FLUSH") || guard(action, "DROP_COMPLETE")) {
      marshal.resting();
    }
    next(action);
  };
  var curves = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)"
  };
  var combine = {
    opacity: {
      drop: 0,
      combining: 0.7
    },
    scale: {
      drop: 0.75
    }
  };
  var timings = {
    outOfTheWay: 0.2,
    minDropTime: 0.33,
    maxDropTime: 0.55
  };
  var outOfTheWayTiming = `${timings.outOfTheWay}s ${curves.outOfTheWay}`;
  var transitions = {
    fluid: `opacity ${outOfTheWayTiming}`,
    snap: `transform ${outOfTheWayTiming}, opacity ${outOfTheWayTiming}`,
    drop: (duration) => {
      const timing = `${duration}s ${curves.drop}`;
      return `transform ${timing}, opacity ${timing}`;
    },
    outOfTheWay: `transform ${outOfTheWayTiming}`,
    placeholder: `height ${outOfTheWayTiming}, width ${outOfTheWayTiming}, margin ${outOfTheWayTiming}`
  };
  var moveTo = (offset3) => isEqual$1(offset3, origin) ? void 0 : `translate(${offset3.x}px, ${offset3.y}px)`;
  var transforms = {
    moveTo,
    drop: (offset3, isCombining) => {
      const translate = moveTo(offset3);
      if (!translate) {
        return void 0;
      }
      if (!isCombining) {
        return translate;
      }
      return `${translate} scale(${combine.scale.drop})`;
    }
  };
  var {
    minDropTime,
    maxDropTime
  } = timings;
  var dropTimeRange = maxDropTime - minDropTime;
  var maxDropTimeAtDistance = 1500;
  var cancelDropModifier = 0.6;
  var getDropDuration = ({
    current,
    destination,
    reason
  }) => {
    const distance$1 = distance(current, destination);
    if (distance$1 <= 0) {
      return minDropTime;
    }
    if (distance$1 >= maxDropTimeAtDistance) {
      return maxDropTime;
    }
    const percentage = distance$1 / maxDropTimeAtDistance;
    const duration = minDropTime + dropTimeRange * percentage;
    const withDuration = reason === "CANCEL" ? duration * cancelDropModifier : duration;
    return Number(withDuration.toFixed(2));
  };
  var getNewHomeClientOffset = ({
    impact,
    draggable: draggable2,
    dimensions,
    viewport,
    afterCritical
  }) => {
    const {
      draggables,
      droppables
    } = dimensions;
    const droppableId = whatIsDraggedOver(impact);
    const destination = droppableId ? droppables[droppableId] : null;
    const home2 = droppables[draggable2.descriptor.droppableId];
    const newClientCenter = getClientBorderBoxCenter({
      impact,
      draggable: draggable2,
      draggables,
      afterCritical,
      droppable: destination || home2,
      viewport
    });
    const offset3 = subtract(newClientCenter, draggable2.client.borderBox.center);
    return offset3;
  };
  var getDropImpact = ({
    draggables,
    reason,
    lastImpact,
    home: home2,
    viewport,
    onLiftImpact
  }) => {
    if (!lastImpact.at || reason !== "DROP") {
      const recomputedHomeImpact = recompute({
        draggables,
        impact: onLiftImpact,
        destination: home2,
        viewport,
        forceShouldAnimate: true
      });
      return {
        impact: recomputedHomeImpact,
        didDropInsideDroppable: false
      };
    }
    if (lastImpact.at.type === "REORDER") {
      return {
        impact: lastImpact,
        didDropInsideDroppable: true
      };
    }
    const withoutMovement = {
      ...lastImpact,
      displaced: emptyGroups
    };
    return {
      impact: withoutMovement,
      didDropInsideDroppable: true
    };
  };
  var dropMiddleware = ({
    getState,
    dispatch
  }) => (next) => (action) => {
    if (!guard(action, "DROP")) {
      next(action);
      return;
    }
    const state = getState();
    const reason = action.payload.reason;
    if (state.phase === "COLLECTING") {
      dispatch(dropPending({
        reason
      }));
      return;
    }
    if (state.phase === "IDLE") {
      return;
    }
    const isWaitingForDrop = state.phase === "DROP_PENDING" && state.isWaiting;
    !!isWaitingForDrop ? true ? invariant2(false, "A DROP action occurred while DROP_PENDING and still waiting") : invariant2() : void 0;
    !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? true ? invariant2(false, `Cannot drop in phase: ${state.phase}`) : invariant2() : void 0;
    const critical = state.critical;
    const dimensions = state.dimensions;
    const draggable2 = dimensions.draggables[state.critical.draggable.id];
    const {
      impact,
      didDropInsideDroppable
    } = getDropImpact({
      reason,
      lastImpact: state.impact,
      afterCritical: state.afterCritical,
      onLiftImpact: state.onLiftImpact,
      home: state.dimensions.droppables[state.critical.droppable.id],
      viewport: state.viewport,
      draggables: state.dimensions.draggables
    });
    const destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
    const combine2 = didDropInsideDroppable ? tryGetCombine(impact) : null;
    const source = {
      index: critical.draggable.index,
      droppableId: critical.droppable.id
    };
    const result = {
      draggableId: draggable2.descriptor.id,
      type: draggable2.descriptor.type,
      source,
      reason,
      mode: state.movementMode,
      destination,
      combine: combine2
    };
    const newHomeClientOffset = getNewHomeClientOffset({
      impact,
      draggable: draggable2,
      dimensions,
      viewport: state.viewport,
      afterCritical: state.afterCritical
    });
    const completed = {
      critical: state.critical,
      afterCritical: state.afterCritical,
      result,
      impact
    };
    const isAnimationRequired = !isEqual$1(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);
    if (!isAnimationRequired) {
      dispatch(completeDrop({
        completed
      }));
      return;
    }
    const dropDuration = getDropDuration({
      current: state.current.client.offset,
      destination: newHomeClientOffset,
      reason
    });
    const args = {
      newHomeClientOffset,
      dropDuration,
      completed
    };
    dispatch(animateDrop(args));
  };
  var getWindowScroll3 = () => ({
    x: window.pageXOffset,
    y: window.pageYOffset
  });
  function getWindowScrollBinding(update2) {
    return {
      eventName: "scroll",
      options: {
        passive: true,
        capture: false
      },
      fn: (event) => {
        if (event.target !== window && event.target !== window.document) {
          return;
        }
        update2();
      }
    };
  }
  function getScrollListener({
    onWindowScroll
  }) {
    function updateScroll() {
      onWindowScroll(getWindowScroll3());
    }
    const scheduled = raf_schd_esm_default(updateScroll);
    const binding = getWindowScrollBinding(scheduled);
    let unbind = noop$2;
    function isActive2() {
      return unbind !== noop$2;
    }
    function start2() {
      !!isActive2() ? true ? invariant2(false, "Cannot start scroll listener when already active") : invariant2() : void 0;
      unbind = bindEvents(window, [binding]);
    }
    function stop() {
      !isActive2() ? true ? invariant2(false, "Cannot stop scroll listener when not active") : invariant2() : void 0;
      scheduled.cancel();
      unbind();
      unbind = noop$2;
    }
    return {
      start: start2,
      stop,
      isActive: isActive2
    };
  }
  var shouldStop$1 = (action) => guard(action, "DROP_COMPLETE") || guard(action, "DROP_ANIMATE") || guard(action, "FLUSH");
  var scrollListener = (store) => {
    const listener = getScrollListener({
      onWindowScroll: (newScroll) => {
        store.dispatch(moveByWindowScroll({
          newScroll
        }));
      }
    });
    return (next) => (action) => {
      if (!listener.isActive() && guard(action, "INITIAL_PUBLISH")) {
        listener.start();
      }
      if (listener.isActive() && shouldStop$1(action)) {
        listener.stop();
      }
      next(action);
    };
  };
  var getExpiringAnnounce = (announce) => {
    let wasCalled = false;
    let isExpired = false;
    const timeoutId = setTimeout(() => {
      isExpired = true;
    });
    const result = (message) => {
      if (wasCalled) {
        true ? warning2("Announcement already made. Not making a second announcement") : void 0;
        return;
      }
      if (isExpired) {
        true ? warning2(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `) : void 0;
        return;
      }
      wasCalled = true;
      announce(message);
      clearTimeout(timeoutId);
    };
    result.wasCalled = () => wasCalled;
    return result;
  };
  var getAsyncMarshal = () => {
    const entries = [];
    const execute2 = (timerId) => {
      const index = entries.findIndex((item) => item.timerId === timerId);
      !(index !== -1) ? true ? invariant2(false, "Could not find timer") : invariant2() : void 0;
      const [entry] = entries.splice(index, 1);
      entry.callback();
    };
    const add2 = (fn) => {
      const timerId = setTimeout(() => execute2(timerId));
      const entry = {
        timerId,
        callback: fn
      };
      entries.push(entry);
    };
    const flush2 = () => {
      if (!entries.length) {
        return;
      }
      const shallow = [...entries];
      entries.length = 0;
      shallow.forEach((entry) => {
        clearTimeout(entry.timerId);
        entry.callback();
      });
    };
    return {
      add: add2,
      flush: flush2
    };
  };
  var areLocationsEqual = (first, second) => {
    if (first == null && second == null) {
      return true;
    }
    if (first == null || second == null) {
      return false;
    }
    return first.droppableId === second.droppableId && first.index === second.index;
  };
  var isCombineEqual = (first, second) => {
    if (first == null && second == null) {
      return true;
    }
    if (first == null || second == null) {
      return false;
    }
    return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
  };
  var isCriticalEqual = (first, second) => {
    if (first === second) {
      return true;
    }
    const isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
    const isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
    return isDraggableEqual && isDroppableEqual;
  };
  var withTimings = (key, fn) => {
    start();
    fn();
    finish();
  };
  var getDragStart = (critical, mode) => ({
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode
  });
  function execute(responder, data, announce, getDefaultMessage) {
    if (!responder) {
      announce(getDefaultMessage(data));
      return;
    }
    const willExpire = getExpiringAnnounce(announce);
    const provided = {
      announce: willExpire
    };
    responder(data, provided);
    if (!willExpire.wasCalled()) {
      announce(getDefaultMessage(data));
    }
  }
  var getPublisher = (getResponders, announce) => {
    const asyncMarshal = getAsyncMarshal();
    let dragging = null;
    const beforeCapture = (draggableId, mode) => {
      !!dragging ? true ? invariant2(false, "Cannot fire onBeforeCapture as a drag start has already been published") : invariant2() : void 0;
      withTimings("onBeforeCapture", () => {
        const fn = getResponders().onBeforeCapture;
        if (fn) {
          const before = {
            draggableId,
            mode
          };
          fn(before);
        }
      });
    };
    const beforeStart = (critical, mode) => {
      !!dragging ? true ? invariant2(false, "Cannot fire onBeforeDragStart as a drag start has already been published") : invariant2() : void 0;
      withTimings("onBeforeDragStart", () => {
        const fn = getResponders().onBeforeDragStart;
        if (fn) {
          fn(getDragStart(critical, mode));
        }
      });
    };
    const start2 = (critical, mode) => {
      !!dragging ? true ? invariant2(false, "Cannot fire onBeforeDragStart as a drag start has already been published") : invariant2() : void 0;
      const data = getDragStart(critical, mode);
      dragging = {
        mode,
        lastCritical: critical,
        lastLocation: data.source,
        lastCombine: null
      };
      asyncMarshal.add(() => {
        withTimings("onDragStart", () => execute(getResponders().onDragStart, data, announce, preset.onDragStart));
      });
    };
    const update2 = (critical, impact) => {
      const location2 = tryGetDestination(impact);
      const combine2 = tryGetCombine(impact);
      !dragging ? true ? invariant2(false, "Cannot fire onDragMove when onDragStart has not been called") : invariant2() : void 0;
      const hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);
      if (hasCriticalChanged) {
        dragging.lastCritical = critical;
      }
      const hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location2);
      if (hasLocationChanged) {
        dragging.lastLocation = location2;
      }
      const hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine2);
      if (hasGroupingChanged) {
        dragging.lastCombine = combine2;
      }
      if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
        return;
      }
      const data = {
        ...getDragStart(critical, dragging.mode),
        combine: combine2,
        destination: location2
      };
      asyncMarshal.add(() => {
        withTimings("onDragUpdate", () => execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate));
      });
    };
    const flush2 = () => {
      !dragging ? true ? invariant2(false, "Can only flush responders while dragging") : invariant2() : void 0;
      asyncMarshal.flush();
    };
    const drop2 = (result) => {
      !dragging ? true ? invariant2(false, "Cannot fire onDragEnd when there is no matching onDragStart") : invariant2() : void 0;
      dragging = null;
      withTimings("onDragEnd", () => execute(getResponders().onDragEnd, result, announce, preset.onDragEnd));
    };
    const abort = () => {
      if (!dragging) {
        return;
      }
      const result = {
        ...getDragStart(dragging.lastCritical, dragging.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      drop2(result);
    };
    return {
      beforeCapture,
      beforeStart,
      start: start2,
      update: update2,
      flush: flush2,
      drop: drop2,
      abort
    };
  };
  var responders = (getResponders, announce) => {
    const publisher = getPublisher(getResponders, announce);
    return (store) => (next) => (action) => {
      if (guard(action, "BEFORE_INITIAL_CAPTURE")) {
        publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
        return;
      }
      if (guard(action, "INITIAL_PUBLISH")) {
        const critical = action.payload.critical;
        publisher.beforeStart(critical, action.payload.movementMode);
        next(action);
        publisher.start(critical, action.payload.movementMode);
        return;
      }
      if (guard(action, "DROP_COMPLETE")) {
        const result = action.payload.completed.result;
        publisher.flush();
        next(action);
        publisher.drop(result);
        return;
      }
      next(action);
      if (guard(action, "FLUSH")) {
        publisher.abort();
        return;
      }
      const state = store.getState();
      if (state.phase === "DRAGGING") {
        publisher.update(state.critical, state.impact);
      }
    };
  };
  var dropAnimationFinishMiddleware = (store) => (next) => (action) => {
    if (!guard(action, "DROP_ANIMATION_FINISHED")) {
      next(action);
      return;
    }
    const state = store.getState();
    !(state.phase === "DROP_ANIMATING") ? true ? invariant2(false, "Cannot finish a drop animating when no drop is occurring") : invariant2() : void 0;
    store.dispatch(completeDrop({
      completed: state.completed
    }));
  };
  var dropAnimationFlushOnScrollMiddleware = (store) => {
    let unbind = null;
    let frameId = null;
    function clear() {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
      if (unbind) {
        unbind();
        unbind = null;
      }
    }
    return (next) => (action) => {
      if (guard(action, "FLUSH") || guard(action, "DROP_COMPLETE") || guard(action, "DROP_ANIMATION_FINISHED")) {
        clear();
      }
      next(action);
      if (!guard(action, "DROP_ANIMATE")) {
        return;
      }
      const binding = {
        eventName: "scroll",
        options: {
          capture: true,
          passive: false,
          once: true
        },
        fn: function flushDropAnimation() {
          const state = store.getState();
          if (state.phase === "DROP_ANIMATING") {
            store.dispatch(dropAnimationFinished());
          }
        }
      };
      frameId = requestAnimationFrame(() => {
        frameId = null;
        unbind = bindEvents(window, [binding]);
      });
    };
  };
  var dimensionMarshalStopper = (marshal) => () => (next) => (action) => {
    if (guard(action, "DROP_COMPLETE") || guard(action, "FLUSH") || guard(action, "DROP_ANIMATE")) {
      marshal.stopPublishing();
    }
    next(action);
  };
  var focus = (marshal) => {
    let isWatching = false;
    return () => (next) => (action) => {
      if (guard(action, "INITIAL_PUBLISH")) {
        isWatching = true;
        marshal.tryRecordFocus(action.payload.critical.draggable.id);
        next(action);
        marshal.tryRestoreFocusRecorded();
        return;
      }
      next(action);
      if (!isWatching) {
        return;
      }
      if (guard(action, "FLUSH")) {
        isWatching = false;
        marshal.tryRestoreFocusRecorded();
        return;
      }
      if (guard(action, "DROP_COMPLETE")) {
        isWatching = false;
        const result = action.payload.completed.result;
        if (result.combine) {
          marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
        }
        marshal.tryRestoreFocusRecorded();
      }
    };
  };
  var shouldStop = (action) => guard(action, "DROP_COMPLETE") || guard(action, "DROP_ANIMATE") || guard(action, "FLUSH");
  var autoScroll = (autoScroller) => (store) => (next) => (action) => {
    if (shouldStop(action)) {
      autoScroller.stop();
      next(action);
      return;
    }
    if (guard(action, "INITIAL_PUBLISH")) {
      next(action);
      const state = store.getState();
      !(state.phase === "DRAGGING") ? true ? invariant2(false, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : invariant2() : void 0;
      autoScroller.start(state);
      return;
    }
    next(action);
    autoScroller.scroll(store.getState());
  };
  var pendingDrop = (store) => (next) => (action) => {
    next(action);
    if (!guard(action, "PUBLISH_WHILE_DRAGGING")) {
      return;
    }
    const postActionState = store.getState();
    if (postActionState.phase !== "DROP_PENDING") {
      return;
    }
    if (postActionState.isWaiting) {
      return;
    }
    store.dispatch(drop({
      reason: postActionState.reason
    }));
  };
  var composeEnhancers = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: "@hello-pangea/dnd"
  }) : compose;
  var createStore2 = ({
    dimensionMarshal,
    focusMarshal,
    styleMarshal,
    getResponders,
    announce,
    autoScroller
  }) => createStore(reducer, composeEnhancers(applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift(dimensionMarshal), dropMiddleware, dropAnimationFinishMiddleware, dropAnimationFlushOnScrollMiddleware, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
  var clean$1 = () => ({
    additions: {},
    removals: {},
    modified: {}
  });
  function createPublisher({
    registry,
    callbacks
  }) {
    let staging = clean$1();
    let frameId = null;
    const collect = () => {
      if (frameId) {
        return;
      }
      callbacks.collectionStarting();
      frameId = requestAnimationFrame(() => {
        frameId = null;
        start();
        const {
          additions,
          removals,
          modified
        } = staging;
        const added = Object.keys(additions).map((id) => registry.draggable.getById(id).getDimension(origin)).sort((a, b) => a.descriptor.index - b.descriptor.index);
        const updated = Object.keys(modified).map((id) => {
          const entry = registry.droppable.getById(id);
          const scroll2 = entry.callbacks.getScrollWhileDragging();
          return {
            droppableId: id,
            scroll: scroll2
          };
        });
        const result = {
          additions: added,
          removals: Object.keys(removals),
          modified: updated
        };
        staging = clean$1();
        finish();
        callbacks.publish(result);
      });
    };
    const add2 = (entry) => {
      const id = entry.descriptor.id;
      staging.additions[id] = entry;
      staging.modified[entry.descriptor.droppableId] = true;
      if (staging.removals[id]) {
        delete staging.removals[id];
      }
      collect();
    };
    const remove = (entry) => {
      const descriptor = entry.descriptor;
      staging.removals[descriptor.id] = true;
      staging.modified[descriptor.droppableId] = true;
      if (staging.additions[descriptor.id]) {
        delete staging.additions[descriptor.id];
      }
      collect();
    };
    const stop = () => {
      if (!frameId) {
        return;
      }
      cancelAnimationFrame(frameId);
      frameId = null;
      staging = clean$1();
    };
    return {
      add: add2,
      remove,
      stop
    };
  }
  var getMaxScroll = ({
    scrollHeight,
    scrollWidth,
    height,
    width
  }) => {
    const maxScroll = subtract({
      x: scrollWidth,
      y: scrollHeight
    }, {
      x: width,
      y: height
    });
    const adjustedMaxScroll = {
      x: Math.max(0, maxScroll.x),
      y: Math.max(0, maxScroll.y)
    };
    return adjustedMaxScroll;
  };
  var getDocumentElement = () => {
    const doc = document.documentElement;
    !doc ? true ? invariant2(false, "Cannot find document.documentElement") : invariant2() : void 0;
    return doc;
  };
  var getMaxWindowScroll = () => {
    const doc = getDocumentElement();
    const maxScroll = getMaxScroll({
      scrollHeight: doc.scrollHeight,
      scrollWidth: doc.scrollWidth,
      width: doc.clientWidth,
      height: doc.clientHeight
    });
    return maxScroll;
  };
  var getViewport = () => {
    const scroll2 = getWindowScroll3();
    const maxScroll = getMaxWindowScroll();
    const top = scroll2.y;
    const left = scroll2.x;
    const doc = getDocumentElement();
    const width = doc.clientWidth;
    const height = doc.clientHeight;
    const right = left + width;
    const bottom = top + height;
    const frame = getRect({
      top,
      left,
      right,
      bottom
    });
    const viewport = {
      frame,
      scroll: {
        initial: scroll2,
        current: scroll2,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
    return viewport;
  };
  var getInitialPublish = ({
    critical,
    scrollOptions,
    registry
  }) => {
    start();
    const viewport = getViewport();
    const windowScroll = viewport.scroll.current;
    const home2 = critical.droppable;
    const droppables = registry.droppable.getAllByType(home2.type).map((entry) => entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions));
    const draggables = registry.draggable.getAllByType(critical.draggable.type).map((entry) => entry.getDimension(windowScroll));
    const dimensions = {
      draggables: toDraggableMap(draggables),
      droppables: toDroppableMap(droppables)
    };
    finish();
    const result = {
      dimensions,
      critical,
      viewport
    };
    return result;
  };
  function shouldPublishUpdate(registry, dragging, entry) {
    if (entry.descriptor.id === dragging.id) {
      return false;
    }
    if (entry.descriptor.type !== dragging.type) {
      return false;
    }
    const home2 = registry.droppable.getById(entry.descriptor.droppableId);
    if (home2.descriptor.mode !== "virtual") {
      true ? warning2(`
      You are attempting to add or remove a Draggable [id: ${entry.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `) : void 0;
      return false;
    }
    return true;
  }
  var createDimensionMarshal = (registry, callbacks) => {
    let collection = null;
    const publisher = createPublisher({
      callbacks: {
        publish: callbacks.publishWhileDragging,
        collectionStarting: callbacks.collectionStarting
      },
      registry
    });
    const updateDroppableIsEnabled2 = (id, isEnabled) => {
      !registry.droppable.exists(id) ? true ? invariant2(false, `Cannot update is enabled flag of Droppable ${id} as it is not registered`) : invariant2() : void 0;
      if (!collection) {
        return;
      }
      callbacks.updateDroppableIsEnabled({
        id,
        isEnabled
      });
    };
    const updateDroppableIsCombineEnabled2 = (id, isCombineEnabled) => {
      if (!collection) {
        return;
      }
      !registry.droppable.exists(id) ? true ? invariant2(false, `Cannot update isCombineEnabled flag of Droppable ${id} as it is not registered`) : invariant2() : void 0;
      callbacks.updateDroppableIsCombineEnabled({
        id,
        isCombineEnabled
      });
    };
    const updateDroppableScroll2 = (id, newScroll) => {
      if (!collection) {
        return;
      }
      !registry.droppable.exists(id) ? true ? invariant2(false, `Cannot update the scroll on Droppable ${id} as it is not registered`) : invariant2() : void 0;
      callbacks.updateDroppableScroll({
        id,
        newScroll
      });
    };
    const scrollDroppable2 = (id, change) => {
      if (!collection) {
        return;
      }
      registry.droppable.getById(id).callbacks.scroll(change);
    };
    const stopPublishing = () => {
      if (!collection) {
        return;
      }
      publisher.stop();
      const home2 = collection.critical.droppable;
      registry.droppable.getAllByType(home2.type).forEach((entry) => entry.callbacks.dragStopped());
      collection.unsubscribe();
      collection = null;
    };
    const subscriber = (event) => {
      !collection ? true ? invariant2(false, "Should only be subscribed when a collection is occurring") : invariant2() : void 0;
      const dragging = collection.critical.draggable;
      if (event.type === "ADDITION") {
        if (shouldPublishUpdate(registry, dragging, event.value)) {
          publisher.add(event.value);
        }
      }
      if (event.type === "REMOVAL") {
        if (shouldPublishUpdate(registry, dragging, event.value)) {
          publisher.remove(event.value);
        }
      }
    };
    const startPublishing = (request) => {
      !!collection ? true ? invariant2(false, "Cannot start capturing critical dimensions as there is already a collection") : invariant2() : void 0;
      const entry = registry.draggable.getById(request.draggableId);
      const home2 = registry.droppable.getById(entry.descriptor.droppableId);
      const critical = {
        draggable: entry.descriptor,
        droppable: home2.descriptor
      };
      const unsubscribe = registry.subscribe(subscriber);
      collection = {
        critical,
        unsubscribe
      };
      return getInitialPublish({
        critical,
        registry,
        scrollOptions: request.scrollOptions
      });
    };
    const marshal = {
      updateDroppableIsEnabled: updateDroppableIsEnabled2,
      updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled2,
      scrollDroppable: scrollDroppable2,
      updateDroppableScroll: updateDroppableScroll2,
      startPublishing,
      stopPublishing
    };
    return marshal;
  };
  var canStartDrag = (state, id) => {
    if (state.phase === "IDLE") {
      return true;
    }
    if (state.phase !== "DROP_ANIMATING") {
      return false;
    }
    if (state.completed.result.draggableId === id) {
      return false;
    }
    return state.completed.result.reason === "DROP";
  };
  var scrollWindow = (change) => {
    window.scrollBy(change.x, change.y);
  };
  var getScrollableDroppables = memoizeOne((droppables) => toDroppableList(droppables).filter((droppable2) => {
    if (!droppable2.isEnabled) {
      return false;
    }
    if (!droppable2.frame) {
      return false;
    }
    return true;
  }));
  var getScrollableDroppableOver = (target, droppables) => {
    const maybe = getScrollableDroppables(droppables).find((droppable2) => {
      !droppable2.frame ? true ? invariant2(false, "Invalid result") : invariant2() : void 0;
      return isPositionInFrame(droppable2.frame.pageMarginBox)(target);
    }) || null;
    return maybe;
  };
  var getBestScrollableDroppable = ({
    center,
    destination,
    droppables
  }) => {
    if (destination) {
      const dimension2 = droppables[destination];
      if (!dimension2.frame) {
        return null;
      }
      return dimension2;
    }
    const dimension = getScrollableDroppableOver(center, droppables);
    return dimension;
  };
  var defaultAutoScrollerOptions = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (percentage) => percentage ** 2,
    durationDampening: {
      stopDampeningAt: 1200,
      accelerateAt: 360
    },
    disabled: false
  };
  var getDistanceThresholds = (container, axis, getAutoScrollerOptions = () => defaultAutoScrollerOptions) => {
    const autoScrollerOptions = getAutoScrollerOptions();
    const startScrollingFrom = container[axis.size] * autoScrollerOptions.startFromPercentage;
    const maxScrollValueAt = container[axis.size] * autoScrollerOptions.maxScrollAtPercentage;
    const thresholds = {
      startScrollingFrom,
      maxScrollValueAt
    };
    return thresholds;
  };
  var getPercentage = ({
    startOfRange,
    endOfRange,
    current
  }) => {
    const range = endOfRange - startOfRange;
    if (range === 0) {
      true ? warning2(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `) : void 0;
      return 0;
    }
    const currentInRange = current - startOfRange;
    const percentage = currentInRange / range;
    return percentage;
  };
  var minScroll = 1;
  var getValueFromDistance = (distanceToEdge, thresholds, getAutoScrollerOptions = () => defaultAutoScrollerOptions) => {
    const autoScrollerOptions = getAutoScrollerOptions();
    if (distanceToEdge > thresholds.startScrollingFrom) {
      return 0;
    }
    if (distanceToEdge <= thresholds.maxScrollValueAt) {
      return autoScrollerOptions.maxPixelScroll;
    }
    if (distanceToEdge === thresholds.startScrollingFrom) {
      return minScroll;
    }
    const percentageFromMaxScrollValueAt = getPercentage({
      startOfRange: thresholds.maxScrollValueAt,
      endOfRange: thresholds.startScrollingFrom,
      current: distanceToEdge
    });
    const percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
    const scroll2 = autoScrollerOptions.maxPixelScroll * autoScrollerOptions.ease(percentageFromStartScrollingFrom);
    return Math.ceil(scroll2);
  };
  var dampenValueByTime = (proposedScroll, dragStartTime, getAutoScrollerOptions) => {
    const autoScrollerOptions = getAutoScrollerOptions();
    const accelerateAt = autoScrollerOptions.durationDampening.accelerateAt;
    const stopAt = autoScrollerOptions.durationDampening.stopDampeningAt;
    const startOfRange = dragStartTime;
    const endOfRange = stopAt;
    const now = Date.now();
    const runTime = now - startOfRange;
    if (runTime >= stopAt) {
      return proposedScroll;
    }
    if (runTime < accelerateAt) {
      return minScroll;
    }
    const betweenAccelerateAtAndStopAtPercentage = getPercentage({
      startOfRange: accelerateAt,
      endOfRange,
      current: runTime
    });
    const scroll2 = proposedScroll * autoScrollerOptions.ease(betweenAccelerateAtAndStopAtPercentage);
    return Math.ceil(scroll2);
  };
  var getValue = ({
    distanceToEdge,
    thresholds,
    dragStartTime,
    shouldUseTimeDampening,
    getAutoScrollerOptions
  }) => {
    const scroll2 = getValueFromDistance(distanceToEdge, thresholds, getAutoScrollerOptions);
    if (scroll2 === 0) {
      return 0;
    }
    if (!shouldUseTimeDampening) {
      return scroll2;
    }
    return Math.max(dampenValueByTime(scroll2, dragStartTime, getAutoScrollerOptions), minScroll);
  };
  var getScrollOnAxis = ({
    container,
    distanceToEdges,
    dragStartTime,
    axis,
    shouldUseTimeDampening,
    getAutoScrollerOptions
  }) => {
    const thresholds = getDistanceThresholds(container, axis, getAutoScrollerOptions);
    const isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];
    if (isCloserToEnd) {
      return getValue({
        distanceToEdge: distanceToEdges[axis.end],
        thresholds,
        dragStartTime,
        shouldUseTimeDampening,
        getAutoScrollerOptions
      });
    }
    return -1 * getValue({
      distanceToEdge: distanceToEdges[axis.start],
      thresholds,
      dragStartTime,
      shouldUseTimeDampening,
      getAutoScrollerOptions
    });
  };
  var adjustForSizeLimits = ({
    container,
    subject,
    proposedScroll
  }) => {
    const isTooBigVertically = subject.height > container.height;
    const isTooBigHorizontally = subject.width > container.width;
    if (!isTooBigHorizontally && !isTooBigVertically) {
      return proposedScroll;
    }
    if (isTooBigHorizontally && isTooBigVertically) {
      return null;
    }
    return {
      x: isTooBigHorizontally ? 0 : proposedScroll.x,
      y: isTooBigVertically ? 0 : proposedScroll.y
    };
  };
  var clean = apply((value) => value === 0 ? 0 : value);
  var getScroll$1 = ({
    dragStartTime,
    container,
    subject,
    center,
    shouldUseTimeDampening,
    getAutoScrollerOptions
  }) => {
    const distanceToEdges = {
      top: center.y - container.top,
      right: container.right - center.x,
      bottom: container.bottom - center.y,
      left: center.x - container.left
    };
    const y = getScrollOnAxis({
      container,
      distanceToEdges,
      dragStartTime,
      axis: vertical,
      shouldUseTimeDampening,
      getAutoScrollerOptions
    });
    const x = getScrollOnAxis({
      container,
      distanceToEdges,
      dragStartTime,
      axis: horizontal,
      shouldUseTimeDampening,
      getAutoScrollerOptions
    });
    const required2 = clean({
      x,
      y
    });
    if (isEqual$1(required2, origin)) {
      return null;
    }
    const limited = adjustForSizeLimits({
      container,
      subject,
      proposedScroll: required2
    });
    if (!limited) {
      return null;
    }
    return isEqual$1(limited, origin) ? null : limited;
  };
  var smallestSigned = apply((value) => {
    if (value === 0) {
      return 0;
    }
    return value > 0 ? 1 : -1;
  });
  var getOverlap = (() => {
    const getRemainder = (target, max6) => {
      if (target < 0) {
        return target;
      }
      if (target > max6) {
        return target - max6;
      }
      return 0;
    };
    return ({
      current,
      max: max6,
      change
    }) => {
      const targetScroll = add(current, change);
      const overlap = {
        x: getRemainder(targetScroll.x, max6.x),
        y: getRemainder(targetScroll.y, max6.y)
      };
      if (isEqual$1(overlap, origin)) {
        return null;
      }
      return overlap;
    };
  })();
  var canPartiallyScroll = ({
    max: rawMax,
    current,
    change
  }) => {
    const max6 = {
      x: Math.max(current.x, rawMax.x),
      y: Math.max(current.y, rawMax.y)
    };
    const smallestChange = smallestSigned(change);
    const overlap = getOverlap({
      max: max6,
      current,
      change: smallestChange
    });
    if (!overlap) {
      return true;
    }
    if (smallestChange.x !== 0 && overlap.x === 0) {
      return true;
    }
    if (smallestChange.y !== 0 && overlap.y === 0) {
      return true;
    }
    return false;
  };
  var canScrollWindow = (viewport, change) => canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change
  });
  var getWindowOverlap = (viewport, change) => {
    if (!canScrollWindow(viewport, change)) {
      return null;
    }
    const max6 = viewport.scroll.max;
    const current = viewport.scroll.current;
    return getOverlap({
      current,
      max: max6,
      change
    });
  };
  var canScrollDroppable = (droppable2, change) => {
    const frame = droppable2.frame;
    if (!frame) {
      return false;
    }
    return canPartiallyScroll({
      current: frame.scroll.current,
      max: frame.scroll.max,
      change
    });
  };
  var getDroppableOverlap = (droppable2, change) => {
    const frame = droppable2.frame;
    if (!frame) {
      return null;
    }
    if (!canScrollDroppable(droppable2, change)) {
      return null;
    }
    return getOverlap({
      current: frame.scroll.current,
      max: frame.scroll.max,
      change
    });
  };
  var getWindowScrollChange = ({
    viewport,
    subject,
    center,
    dragStartTime,
    shouldUseTimeDampening,
    getAutoScrollerOptions
  }) => {
    const scroll2 = getScroll$1({
      dragStartTime,
      container: viewport.frame,
      subject,
      center,
      shouldUseTimeDampening,
      getAutoScrollerOptions
    });
    return scroll2 && canScrollWindow(viewport, scroll2) ? scroll2 : null;
  };
  var getDroppableScrollChange = ({
    droppable: droppable2,
    subject,
    center,
    dragStartTime,
    shouldUseTimeDampening,
    getAutoScrollerOptions
  }) => {
    const frame = droppable2.frame;
    if (!frame) {
      return null;
    }
    const scroll2 = getScroll$1({
      dragStartTime,
      container: frame.pageMarginBox,
      subject,
      center,
      shouldUseTimeDampening,
      getAutoScrollerOptions
    });
    return scroll2 && canScrollDroppable(droppable2, scroll2) ? scroll2 : null;
  };
  var scroll = ({
    state,
    dragStartTime,
    shouldUseTimeDampening,
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2,
    getAutoScrollerOptions
  }) => {
    const center = state.current.page.borderBoxCenter;
    const draggable2 = state.dimensions.draggables[state.critical.draggable.id];
    const subject = draggable2.page.marginBox;
    if (state.isWindowScrollAllowed) {
      const viewport = state.viewport;
      const change2 = getWindowScrollChange({
        dragStartTime,
        viewport,
        subject,
        center,
        shouldUseTimeDampening,
        getAutoScrollerOptions
      });
      if (change2) {
        scrollWindow2(change2);
        return;
      }
    }
    const droppable2 = getBestScrollableDroppable({
      center,
      destination: whatIsDraggedOver(state.impact),
      droppables: state.dimensions.droppables
    });
    if (!droppable2) {
      return;
    }
    const change = getDroppableScrollChange({
      dragStartTime,
      droppable: droppable2,
      subject,
      center,
      shouldUseTimeDampening,
      getAutoScrollerOptions
    });
    if (change) {
      scrollDroppable2(droppable2.descriptor.id, change);
    }
  };
  var createFluidScroller = ({
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2,
    getAutoScrollerOptions = () => defaultAutoScrollerOptions
  }) => {
    const scheduleWindowScroll = raf_schd_esm_default(scrollWindow2);
    const scheduleDroppableScroll = raf_schd_esm_default(scrollDroppable2);
    let dragging = null;
    const tryScroll = (state) => {
      !dragging ? true ? invariant2(false, "Cannot fluid scroll if not dragging") : invariant2() : void 0;
      const {
        shouldUseTimeDampening,
        dragStartTime
      } = dragging;
      scroll({
        state,
        scrollWindow: scheduleWindowScroll,
        scrollDroppable: scheduleDroppableScroll,
        dragStartTime,
        shouldUseTimeDampening,
        getAutoScrollerOptions
      });
    };
    const start$1 = (state) => {
      start();
      !!dragging ? true ? invariant2(false, "Cannot start auto scrolling when already started") : invariant2() : void 0;
      const dragStartTime = Date.now();
      let wasScrollNeeded = false;
      const fakeScrollCallback = () => {
        wasScrollNeeded = true;
      };
      scroll({
        state,
        dragStartTime: 0,
        shouldUseTimeDampening: false,
        scrollWindow: fakeScrollCallback,
        scrollDroppable: fakeScrollCallback,
        getAutoScrollerOptions
      });
      dragging = {
        dragStartTime,
        shouldUseTimeDampening: wasScrollNeeded
      };
      finish();
      if (wasScrollNeeded) {
        tryScroll(state);
      }
    };
    const stop = () => {
      if (!dragging) {
        return;
      }
      scheduleWindowScroll.cancel();
      scheduleDroppableScroll.cancel();
      dragging = null;
    };
    return {
      start: start$1,
      stop,
      scroll: tryScroll
    };
  };
  var createJumpScroller = ({
    move: move2,
    scrollDroppable: scrollDroppable2,
    scrollWindow: scrollWindow2
  }) => {
    const moveByOffset = (state, offset3) => {
      const client = add(state.current.client.selection, offset3);
      move2({
        client
      });
    };
    const scrollDroppableAsMuchAsItCan = (droppable2, change) => {
      if (!canScrollDroppable(droppable2, change)) {
        return change;
      }
      const overlap = getDroppableOverlap(droppable2, change);
      if (!overlap) {
        scrollDroppable2(droppable2.descriptor.id, change);
        return null;
      }
      const whatTheDroppableCanScroll = subtract(change, overlap);
      scrollDroppable2(droppable2.descriptor.id, whatTheDroppableCanScroll);
      const remainder = subtract(change, whatTheDroppableCanScroll);
      return remainder;
    };
    const scrollWindowAsMuchAsItCan = (isWindowScrollAllowed, viewport, change) => {
      if (!isWindowScrollAllowed) {
        return change;
      }
      if (!canScrollWindow(viewport, change)) {
        return change;
      }
      const overlap = getWindowOverlap(viewport, change);
      if (!overlap) {
        scrollWindow2(change);
        return null;
      }
      const whatTheWindowCanScroll = subtract(change, overlap);
      scrollWindow2(whatTheWindowCanScroll);
      const remainder = subtract(change, whatTheWindowCanScroll);
      return remainder;
    };
    const jumpScroller = (state) => {
      const request = state.scrollJumpRequest;
      if (!request) {
        return;
      }
      const destination = whatIsDraggedOver(state.impact);
      !destination ? true ? invariant2(false, "Cannot perform a jump scroll when there is no destination") : invariant2() : void 0;
      const droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);
      if (!droppableRemainder) {
        return;
      }
      const viewport = state.viewport;
      const windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);
      if (!windowRemainder) {
        return;
      }
      moveByOffset(state, windowRemainder);
    };
    return jumpScroller;
  };
  var createAutoScroller = ({
    scrollDroppable: scrollDroppable2,
    scrollWindow: scrollWindow2,
    move: move2,
    getAutoScrollerOptions
  }) => {
    const fluidScroller = createFluidScroller({
      scrollWindow: scrollWindow2,
      scrollDroppable: scrollDroppable2,
      getAutoScrollerOptions
    });
    const jumpScroll = createJumpScroller({
      move: move2,
      scrollWindow: scrollWindow2,
      scrollDroppable: scrollDroppable2
    });
    const scroll2 = (state) => {
      const autoScrollerOptions = getAutoScrollerOptions();
      if (autoScrollerOptions.disabled || state.phase !== "DRAGGING") {
        return;
      }
      if (state.movementMode === "FLUID") {
        fluidScroller.scroll(state);
        return;
      }
      if (!state.scrollJumpRequest) {
        return;
      }
      jumpScroll(state);
    };
    const scroller = {
      scroll: scroll2,
      start: fluidScroller.start,
      stop: fluidScroller.stop
    };
    return scroller;
  };
  var prefix2 = "data-rfd";
  var dragHandle = (() => {
    const base = `${prefix2}-drag-handle`;
    return {
      base,
      draggableId: `${base}-draggable-id`,
      contextId: `${base}-context-id`
    };
  })();
  var draggable = (() => {
    const base = `${prefix2}-draggable`;
    return {
      base,
      contextId: `${base}-context-id`,
      id: `${base}-id`
    };
  })();
  var droppable = (() => {
    const base = `${prefix2}-droppable`;
    return {
      base,
      contextId: `${base}-context-id`,
      id: `${base}-id`
    };
  })();
  var scrollContainer = {
    contextId: `${prefix2}-scroll-container-context-id`
  };
  var makeGetSelector = (context) => (attribute) => `[${attribute}="${context}"]`;
  var getStyles = (rules, property) => rules.map((rule) => {
    const value = rule.styles[property];
    if (!value) {
      return "";
    }
    return `${rule.selector} { ${value} }`;
  }).join(" ");
  var noPointerEvents = "pointer-events: none;";
  var getStyles$1 = (contextId) => {
    const getSelector2 = makeGetSelector(contextId);
    const dragHandle$1 = (() => {
      const grabCursor = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
      return {
        selector: getSelector2(dragHandle.contextId),
        styles: {
          always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
          resting: grabCursor,
          dragging: noPointerEvents,
          dropAnimating: grabCursor
        }
      };
    })();
    const draggable$1 = (() => {
      const transition = `
      transition: ${transitions.outOfTheWay};
    `;
      return {
        selector: getSelector2(draggable.contextId),
        styles: {
          dragging: transition,
          dropAnimating: transition,
          userCancel: transition
        }
      };
    })();
    const droppable$1 = {
      selector: getSelector2(droppable.contextId),
      styles: {
        always: `overflow-anchor: none;`
      }
    };
    const body = {
      selector: "body",
      styles: {
        dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
      }
    };
    const rules = [draggable$1, dragHandle$1, droppable$1, body];
    return {
      always: getStyles(rules, "always"),
      resting: getStyles(rules, "resting"),
      dragging: getStyles(rules, "dragging"),
      dropAnimating: getStyles(rules, "dropAnimating"),
      userCancel: getStyles(rules, "userCancel")
    };
  };
  var useIsomorphicLayoutEffect2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? import_react20.useLayoutEffect : import_react20.useEffect;
  var getHead = () => {
    const head = document.querySelector("head");
    !head ? true ? invariant2(false, "Cannot find the head to append a style to") : invariant2() : void 0;
    return head;
  };
  var createStyleEl = (nonce) => {
    const el = document.createElement("style");
    if (nonce) {
      el.setAttribute("nonce", nonce);
    }
    el.type = "text/css";
    return el;
  };
  function useStyleMarshal(contextId, nonce) {
    const styles = useMemo4(() => getStyles$1(contextId), [contextId]);
    const alwaysRef = (0, import_react20.useRef)(null);
    const dynamicRef = (0, import_react20.useRef)(null);
    const setDynamicStyle = useCallback3(memoizeOne((proposed) => {
      const el = dynamicRef.current;
      !el ? true ? invariant2(false, "Cannot set dynamic style element if it is not set") : invariant2() : void 0;
      el.textContent = proposed;
    }), []);
    const setAlwaysStyle = useCallback3((proposed) => {
      const el = alwaysRef.current;
      !el ? true ? invariant2(false, "Cannot set dynamic style element if it is not set") : invariant2() : void 0;
      el.textContent = proposed;
    }, []);
    useIsomorphicLayoutEffect2(() => {
      !(!alwaysRef.current && !dynamicRef.current) ? true ? invariant2(false, "style elements already mounted") : invariant2() : void 0;
      const always = createStyleEl(nonce);
      const dynamic = createStyleEl(nonce);
      alwaysRef.current = always;
      dynamicRef.current = dynamic;
      always.setAttribute(`${prefix2}-always`, contextId);
      dynamic.setAttribute(`${prefix2}-dynamic`, contextId);
      getHead().appendChild(always);
      getHead().appendChild(dynamic);
      setAlwaysStyle(styles.always);
      setDynamicStyle(styles.resting);
      return () => {
        const remove = (ref2) => {
          const current = ref2.current;
          !current ? true ? invariant2(false, "Cannot unmount ref as it is not set") : invariant2() : void 0;
          getHead().removeChild(current);
          ref2.current = null;
        };
        remove(alwaysRef);
        remove(dynamicRef);
      };
    }, [nonce, setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
    const dragging = useCallback3(() => setDynamicStyle(styles.dragging), [setDynamicStyle, styles.dragging]);
    const dropping = useCallback3((reason) => {
      if (reason === "DROP") {
        setDynamicStyle(styles.dropAnimating);
        return;
      }
      setDynamicStyle(styles.userCancel);
    }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
    const resting = useCallback3(() => {
      if (!dynamicRef.current) {
        return;
      }
      setDynamicStyle(styles.resting);
    }, [setDynamicStyle, styles.resting]);
    const marshal = useMemo4(() => ({
      dragging,
      dropping,
      resting
    }), [dragging, dropping, resting]);
    return marshal;
  }
  function querySelectorAll(parentNode, selector) {
    return Array.from(parentNode.querySelectorAll(selector));
  }
  var getWindowFromEl = (el) => {
    if (el && el.ownerDocument && el.ownerDocument.defaultView) {
      return el.ownerDocument.defaultView;
    }
    return window;
  };
  function isHtmlElement(el) {
    return el instanceof getWindowFromEl(el).HTMLElement;
  }
  function findDragHandle(contextId, draggableId) {
    const selector = `[${dragHandle.contextId}="${contextId}"]`;
    const possible = querySelectorAll(document, selector);
    if (!possible.length) {
      true ? warning2(`Unable to find any drag handles in the context "${contextId}"`) : void 0;
      return null;
    }
    const handle = possible.find((el) => {
      return el.getAttribute(dragHandle.draggableId) === draggableId;
    });
    if (!handle) {
      true ? warning2(`Unable to find drag handle with id "${draggableId}" as no handle with a matching id was found`) : void 0;
      return null;
    }
    if (!isHtmlElement(handle)) {
      true ? warning2("drag handle needs to be a HTMLElement") : void 0;
      return null;
    }
    return handle;
  }
  function useFocusMarshal(contextId) {
    const entriesRef = (0, import_react20.useRef)({});
    const recordRef = (0, import_react20.useRef)(null);
    const restoreFocusFrameRef = (0, import_react20.useRef)(null);
    const isMountedRef = (0, import_react20.useRef)(false);
    const register = useCallback3(function register2(id, focus2) {
      const entry = {
        id,
        focus: focus2
      };
      entriesRef.current[id] = entry;
      return function unregister() {
        const entries = entriesRef.current;
        const current = entries[id];
        if (current !== entry) {
          delete entries[id];
        }
      };
    }, []);
    const tryGiveFocus = useCallback3(function tryGiveFocus2(tryGiveFocusTo) {
      const handle = findDragHandle(contextId, tryGiveFocusTo);
      if (handle && handle !== document.activeElement) {
        handle.focus();
      }
    }, [contextId]);
    const tryShiftRecord = useCallback3(function tryShiftRecord2(previous, redirectTo) {
      if (recordRef.current === previous) {
        recordRef.current = redirectTo;
      }
    }, []);
    const tryRestoreFocusRecorded = useCallback3(function tryRestoreFocusRecorded2() {
      if (restoreFocusFrameRef.current) {
        return;
      }
      if (!isMountedRef.current) {
        return;
      }
      restoreFocusFrameRef.current = requestAnimationFrame(() => {
        restoreFocusFrameRef.current = null;
        const record = recordRef.current;
        if (record) {
          tryGiveFocus(record);
        }
      });
    }, [tryGiveFocus]);
    const tryRecordFocus = useCallback3(function tryRecordFocus2(id) {
      recordRef.current = null;
      const focused = document.activeElement;
      if (!focused) {
        return;
      }
      if (focused.getAttribute(dragHandle.draggableId) !== id) {
        return;
      }
      recordRef.current = id;
    }, []);
    useIsomorphicLayoutEffect2(() => {
      isMountedRef.current = true;
      return function clearFrameOnUnmount() {
        isMountedRef.current = false;
        const frameId = restoreFocusFrameRef.current;
        if (frameId) {
          cancelAnimationFrame(frameId);
        }
      };
    }, []);
    const marshal = useMemo4(() => ({
      register,
      tryRecordFocus,
      tryRestoreFocusRecorded,
      tryShiftRecord
    }), [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
    return marshal;
  }
  function createRegistry() {
    const entries = {
      draggables: {},
      droppables: {}
    };
    const subscribers = [];
    function subscribe(cb) {
      subscribers.push(cb);
      return function unsubscribe() {
        const index = subscribers.indexOf(cb);
        if (index === -1) {
          return;
        }
        subscribers.splice(index, 1);
      };
    }
    function notify(event) {
      if (subscribers.length) {
        subscribers.forEach((cb) => cb(event));
      }
    }
    function findDraggableById(id) {
      return entries.draggables[id] || null;
    }
    function getDraggableById(id) {
      const entry = findDraggableById(id);
      !entry ? true ? invariant2(false, `Cannot find draggable entry with id [${id}]`) : invariant2() : void 0;
      return entry;
    }
    const draggableAPI = {
      register: (entry) => {
        entries.draggables[entry.descriptor.id] = entry;
        notify({
          type: "ADDITION",
          value: entry
        });
      },
      update: (entry, last) => {
        const current = entries.draggables[last.descriptor.id];
        if (!current) {
          return;
        }
        if (current.uniqueId !== entry.uniqueId) {
          return;
        }
        delete entries.draggables[last.descriptor.id];
        entries.draggables[entry.descriptor.id] = entry;
      },
      unregister: (entry) => {
        const draggableId = entry.descriptor.id;
        const current = findDraggableById(draggableId);
        if (!current) {
          return;
        }
        if (entry.uniqueId !== current.uniqueId) {
          return;
        }
        delete entries.draggables[draggableId];
        if (entries.droppables[entry.descriptor.droppableId]) {
          notify({
            type: "REMOVAL",
            value: entry
          });
        }
      },
      getById: getDraggableById,
      findById: findDraggableById,
      exists: (id) => Boolean(findDraggableById(id)),
      getAllByType: (type) => Object.values(entries.draggables).filter((entry) => entry.descriptor.type === type)
    };
    function findDroppableById(id) {
      return entries.droppables[id] || null;
    }
    function getDroppableById(id) {
      const entry = findDroppableById(id);
      !entry ? true ? invariant2(false, `Cannot find droppable entry with id [${id}]`) : invariant2() : void 0;
      return entry;
    }
    const droppableAPI = {
      register: (entry) => {
        entries.droppables[entry.descriptor.id] = entry;
      },
      unregister: (entry) => {
        const current = findDroppableById(entry.descriptor.id);
        if (!current) {
          return;
        }
        if (entry.uniqueId !== current.uniqueId) {
          return;
        }
        delete entries.droppables[entry.descriptor.id];
      },
      getById: getDroppableById,
      findById: findDroppableById,
      exists: (id) => Boolean(findDroppableById(id)),
      getAllByType: (type) => Object.values(entries.droppables).filter((entry) => entry.descriptor.type === type)
    };
    function clean2() {
      entries.draggables = {};
      entries.droppables = {};
      subscribers.length = 0;
    }
    return {
      draggable: draggableAPI,
      droppable: droppableAPI,
      subscribe,
      clean: clean2
    };
  }
  function useRegistry() {
    const registry = useMemo4(createRegistry, []);
    (0, import_react20.useEffect)(() => {
      return function unmount() {
        registry.clean();
      };
    }, [registry]);
    return registry;
  }
  var StoreContext = import_react20.default.createContext(null);
  var getBodyElement = () => {
    const body = document.body;
    !body ? true ? invariant2(false, "Cannot find document.body") : invariant2() : void 0;
    return body;
  };
  var visuallyHidden = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(100%)"
  };
  var getId = (contextId) => `rfd-announcement-${contextId}`;
  function useAnnouncer(contextId) {
    const id = useMemo4(() => getId(contextId), [contextId]);
    const ref2 = (0, import_react20.useRef)(null);
    (0, import_react20.useEffect)(function setup() {
      const el = document.createElement("div");
      ref2.current = el;
      el.id = id;
      el.setAttribute("aria-live", "assertive");
      el.setAttribute("aria-atomic", "true");
      _extends(el.style, visuallyHidden);
      getBodyElement().appendChild(el);
      return function cleanup() {
        setTimeout(function remove() {
          const body = getBodyElement();
          if (body.contains(el)) {
            body.removeChild(el);
          }
          if (el === ref2.current) {
            ref2.current = null;
          }
        });
      };
    }, [id]);
    const announce = useCallback3((message) => {
      const el = ref2.current;
      if (el) {
        el.textContent = message;
        return;
      }
      true ? warning2(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${message}"
    `) : void 0;
    }, []);
    return announce;
  }
  var defaults2 = {
    separator: "::"
  };
  function useUniqueId(prefix3, options = defaults2) {
    const id = import_react20.default.useId();
    return useMemo4(() => `${prefix3}${options.separator}${id}`, [options.separator, prefix3, id]);
  }
  function getElementId({
    contextId,
    uniqueId
  }) {
    return `rfd-hidden-text-${contextId}-${uniqueId}`;
  }
  function useHiddenTextElement({
    contextId,
    text
  }) {
    const uniqueId = useUniqueId("hidden-text", {
      separator: "-"
    });
    const id = useMemo4(() => getElementId({
      contextId,
      uniqueId
    }), [uniqueId, contextId]);
    (0, import_react20.useEffect)(function mount() {
      const el = document.createElement("div");
      el.id = id;
      el.textContent = text;
      el.style.display = "none";
      getBodyElement().appendChild(el);
      return function unmount() {
        const body = getBodyElement();
        if (body.contains(el)) {
          body.removeChild(el);
        }
      };
    }, [id, text]);
    return id;
  }
  var AppContext = import_react20.default.createContext(null);
  var peerDependencies = {
    react: "^18.0.0 || ^19.0.0"
  };
  var semver = /(\d+)\.(\d+)\.(\d+)/;
  var getVersion = (value) => {
    const result = semver.exec(value);
    !(result != null) ? true ? invariant2(false, `Unable to parse React version ${value}`) : invariant2() : void 0;
    const major = Number(result[1]);
    const minor = Number(result[2]);
    const patch2 = Number(result[3]);
    return {
      major,
      minor,
      patch: patch2,
      raw: value
    };
  };
  var isSatisfied = (expected, actual) => {
    if (actual.major > expected.major) {
      return true;
    }
    if (actual.major < expected.major) {
      return false;
    }
    if (actual.minor > expected.minor) {
      return true;
    }
    if (actual.minor < expected.minor) {
      return false;
    }
    return actual.patch >= expected.patch;
  };
  var checkReactVersion = (peerDepValue, actualValue) => {
    const peerDep = getVersion(peerDepValue);
    const actual = getVersion(actualValue);
    if (isSatisfied(peerDep, actual)) {
      return;
    }
    true ? warning2(`
    React version: [${actual.raw}]
    does not satisfy expected peer dependency version: [${peerDep.raw}]

    This can result in run time bugs, and even fatal crashes
  `) : void 0;
  };
  var suffix = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
  var checkDoctype = (doc) => {
    const doctype = doc.doctype;
    if (!doctype) {
      true ? warning2(`
      No <!doctype html> found.

      ${suffix}
    `) : void 0;
      return;
    }
    if (doctype.name.toLowerCase() !== "html") {
      true ? warning2(`
      Unexpected <!doctype> found: (${doctype.name})

      ${suffix}
    `) : void 0;
    }
    if (doctype.publicId !== "") {
      true ? warning2(`
      Unexpected <!doctype> publicId found: (${doctype.publicId})
      A html5 doctype does not have a publicId

      ${suffix}
    `) : void 0;
    }
  };
  function useDev(useHook) {
    if (true) {
      useHook();
    }
  }
  function useDevSetupWarning(fn, inputs) {
    useDev(() => {
      (0, import_react20.useEffect)(() => {
        try {
          fn();
        } catch (e2) {
          error(`
          A setup problem was encountered.

          > ${e2.message}
        `);
        }
      }, inputs);
    });
  }
  function useStartupValidation() {
    useDevSetupWarning(() => {
      checkReactVersion(peerDependencies.react, import_react20.default.version);
      checkDoctype(document);
    }, []);
  }
  function usePrevious(current) {
    const ref2 = (0, import_react20.useRef)(current);
    (0, import_react20.useEffect)(() => {
      ref2.current = current;
    });
    return ref2;
  }
  function create() {
    let lock = null;
    function isClaimed() {
      return Boolean(lock);
    }
    function isActive2(value) {
      return value === lock;
    }
    function claim(abandon) {
      !!lock ? true ? invariant2(false, "Cannot claim lock as it is already claimed") : invariant2() : void 0;
      const newLock = {
        abandon
      };
      lock = newLock;
      return newLock;
    }
    function release() {
      !lock ? true ? invariant2(false, "Cannot release lock when there is no lock") : invariant2() : void 0;
      lock = null;
    }
    function tryAbandon() {
      if (lock) {
        lock.abandon();
        release();
      }
    }
    return {
      isClaimed,
      isActive: isActive2,
      claim,
      release,
      tryAbandon
    };
  }
  function isDragging(state) {
    if (state.phase === "IDLE" || state.phase === "DROP_ANIMATING") {
      return false;
    }
    return state.isDragging;
  }
  var tab = 9;
  var enter = 13;
  var escape2 = 27;
  var space = 32;
  var pageUp = 33;
  var pageDown = 34;
  var end = 35;
  var home = 36;
  var arrowLeft = 37;
  var arrowUp = 38;
  var arrowRight = 39;
  var arrowDown = 40;
  var preventedKeys = {
    [enter]: true,
    [tab]: true
  };
  var preventStandardKeyEvents = (event) => {
    if (preventedKeys[event.keyCode]) {
      event.preventDefault();
    }
  };
  var supportedEventName = (() => {
    const base = "visibilitychange";
    if (typeof document === "undefined") {
      return base;
    }
    const candidates = [base, `ms${base}`, `webkit${base}`, `moz${base}`, `o${base}`];
    const supported = candidates.find((eventName) => `on${eventName}` in document);
    return supported || base;
  })();
  var primaryButton = 0;
  var sloppyClickThreshold = 5;
  function isSloppyClickThresholdExceeded(original, current) {
    return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
  }
  var idle$1 = {
    type: "IDLE"
  };
  function getCaptureBindings({
    cancel,
    completed,
    getPhase,
    setPhase
  }) {
    return [{
      eventName: "mousemove",
      fn: (event) => {
        const {
          button,
          clientX,
          clientY
        } = event;
        if (button !== primaryButton) {
          return;
        }
        const point = {
          x: clientX,
          y: clientY
        };
        const phase = getPhase();
        if (phase.type === "DRAGGING") {
          event.preventDefault();
          phase.actions.move(point);
          return;
        }
        !(phase.type === "PENDING") ? true ? invariant2(false, "Cannot be IDLE") : invariant2() : void 0;
        const pending = phase.point;
        if (!isSloppyClickThresholdExceeded(pending, point)) {
          return;
        }
        event.preventDefault();
        const actions = phase.actions.fluidLift(point);
        setPhase({
          type: "DRAGGING",
          actions
        });
      }
    }, {
      eventName: "mouseup",
      fn: (event) => {
        const phase = getPhase();
        if (phase.type !== "DRAGGING") {
          cancel();
          return;
        }
        event.preventDefault();
        phase.actions.drop({
          shouldBlockNextClick: true
        });
        completed();
      }
    }, {
      eventName: "mousedown",
      fn: (event) => {
        if (getPhase().type === "DRAGGING") {
          event.preventDefault();
        }
        cancel();
      }
    }, {
      eventName: "keydown",
      fn: (event) => {
        const phase = getPhase();
        if (phase.type === "PENDING") {
          cancel();
          return;
        }
        if (event.keyCode === escape2) {
          event.preventDefault();
          cancel();
          return;
        }
        preventStandardKeyEvents(event);
      }
    }, {
      eventName: "resize",
      fn: cancel
    }, {
      eventName: "scroll",
      options: {
        passive: true,
        capture: false
      },
      fn: () => {
        if (getPhase().type === "PENDING") {
          cancel();
        }
      }
    }, {
      eventName: "webkitmouseforcedown",
      fn: (event) => {
        const phase = getPhase();
        !(phase.type !== "IDLE") ? true ? invariant2(false, "Unexpected phase") : invariant2() : void 0;
        if (phase.actions.shouldRespectForcePress()) {
          cancel();
          return;
        }
        event.preventDefault();
      }
    }, {
      eventName: supportedEventName,
      fn: cancel
    }];
  }
  function useMouseSensor(api) {
    const phaseRef = (0, import_react20.useRef)(idle$1);
    const unbindEventsRef = (0, import_react20.useRef)(noop$2);
    const startCaptureBinding = useMemo4(() => ({
      eventName: "mousedown",
      fn: function onMouseDown(event) {
        if (event.defaultPrevented) {
          return;
        }
        if (event.button !== primaryButton) {
          return;
        }
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }
        const draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        const actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!actions) {
          return;
        }
        event.preventDefault();
        const point = {
          x: event.clientX,
          y: event.clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    }), [api]);
    const preventForcePressBinding = useMemo4(() => ({
      eventName: "webkitmouseforcewillbegin",
      fn: (event) => {
        if (event.defaultPrevented) {
          return;
        }
        const id = api.findClosestDraggableId(event);
        if (!id) {
          return;
        }
        const options = api.findOptionsForDraggable(id);
        if (!options) {
          return;
        }
        if (options.shouldRespectForcePress) {
          return;
        }
        if (!api.canGetLock(id)) {
          return;
        }
        event.preventDefault();
      }
    }), [api]);
    const listenForCapture = useCallback3(function listenForCapture2() {
      const options = {
        passive: false,
        capture: true
      };
      unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
    }, [preventForcePressBinding, startCaptureBinding]);
    const stop = useCallback3(() => {
      const current = phaseRef.current;
      if (current.type === "IDLE") {
        return;
      }
      phaseRef.current = idle$1;
      unbindEventsRef.current();
      listenForCapture();
    }, [listenForCapture]);
    const cancel = useCallback3(() => {
      const phase = phaseRef.current;
      stop();
      if (phase.type === "DRAGGING") {
        phase.actions.cancel({
          shouldBlockNextClick: true
        });
      }
      if (phase.type === "PENDING") {
        phase.actions.abort();
      }
    }, [stop]);
    const bindCapturingEvents = useCallback3(function bindCapturingEvents2() {
      const options = {
        capture: true,
        passive: false
      };
      const bindings = getCaptureBindings({
        cancel,
        completed: stop,
        getPhase: () => phaseRef.current,
        setPhase: (phase) => {
          phaseRef.current = phase;
        }
      });
      unbindEventsRef.current = bindEvents(window, bindings, options);
    }, [cancel, stop]);
    const startPendingDrag = useCallback3(function startPendingDrag2(actions, point) {
      !(phaseRef.current.type === "IDLE") ? true ? invariant2(false, "Expected to move from IDLE to PENDING drag") : invariant2() : void 0;
      phaseRef.current = {
        type: "PENDING",
        point,
        actions
      };
      bindCapturingEvents();
    }, [bindCapturingEvents]);
    useIsomorphicLayoutEffect2(function mount() {
      listenForCapture();
      return function unmount() {
        unbindEventsRef.current();
      };
    }, [listenForCapture]);
  }
  function noop$1() {
  }
  var scrollJumpKeys = {
    [pageDown]: true,
    [pageUp]: true,
    [home]: true,
    [end]: true
  };
  function getDraggingBindings(actions, stop) {
    function cancel() {
      stop();
      actions.cancel();
    }
    function drop2() {
      stop();
      actions.drop();
    }
    return [{
      eventName: "keydown",
      fn: (event) => {
        if (event.keyCode === escape2) {
          event.preventDefault();
          cancel();
          return;
        }
        if (event.keyCode === space) {
          event.preventDefault();
          drop2();
          return;
        }
        if (event.keyCode === arrowDown) {
          event.preventDefault();
          actions.moveDown();
          return;
        }
        if (event.keyCode === arrowUp) {
          event.preventDefault();
          actions.moveUp();
          return;
        }
        if (event.keyCode === arrowRight) {
          event.preventDefault();
          actions.moveRight();
          return;
        }
        if (event.keyCode === arrowLeft) {
          event.preventDefault();
          actions.moveLeft();
          return;
        }
        if (scrollJumpKeys[event.keyCode]) {
          event.preventDefault();
          return;
        }
        preventStandardKeyEvents(event);
      }
    }, {
      eventName: "mousedown",
      fn: cancel
    }, {
      eventName: "mouseup",
      fn: cancel
    }, {
      eventName: "click",
      fn: cancel
    }, {
      eventName: "touchstart",
      fn: cancel
    }, {
      eventName: "resize",
      fn: cancel
    }, {
      eventName: "wheel",
      fn: cancel,
      options: {
        passive: true
      }
    }, {
      eventName: supportedEventName,
      fn: cancel
    }];
  }
  function useKeyboardSensor(api) {
    const unbindEventsRef = (0, import_react20.useRef)(noop$1);
    const startCaptureBinding = useMemo4(() => ({
      eventName: "keydown",
      fn: function onKeyDown(event) {
        if (event.defaultPrevented) {
          return;
        }
        if (event.keyCode !== space) {
          return;
        }
        const draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        const preDrag = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!preDrag) {
          return;
        }
        event.preventDefault();
        let isCapturing = true;
        const actions = preDrag.snapLift();
        unbindEventsRef.current();
        function stop() {
          !isCapturing ? true ? invariant2(false, "Cannot stop capturing a keyboard drag when not capturing") : invariant2() : void 0;
          isCapturing = false;
          unbindEventsRef.current();
          listenForCapture();
        }
        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
          capture: true,
          passive: false
        });
      }
    }), [api]);
    const listenForCapture = useCallback3(function tryStartCapture() {
      const options = {
        passive: false,
        capture: true
      };
      unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
    }, [startCaptureBinding]);
    useIsomorphicLayoutEffect2(function mount() {
      listenForCapture();
      return function unmount() {
        unbindEventsRef.current();
      };
    }, [listenForCapture]);
  }
  var idle = {
    type: "IDLE"
  };
  var timeForLongPress = 120;
  var forcePressThreshold = 0.15;
  function getWindowBindings({
    cancel,
    getPhase
  }) {
    return [{
      eventName: "orientationchange",
      fn: cancel
    }, {
      eventName: "resize",
      fn: cancel
    }, {
      eventName: "contextmenu",
      fn: (event) => {
        event.preventDefault();
      }
    }, {
      eventName: "keydown",
      fn: (event) => {
        if (getPhase().type !== "DRAGGING") {
          cancel();
          return;
        }
        if (event.keyCode === escape2) {
          event.preventDefault();
        }
        cancel();
      }
    }, {
      eventName: supportedEventName,
      fn: cancel
    }];
  }
  function getHandleBindings({
    cancel,
    completed,
    getPhase
  }) {
    return [{
      eventName: "touchmove",
      options: {
        capture: false
      },
      fn: (event) => {
        const phase = getPhase();
        if (phase.type !== "DRAGGING") {
          cancel();
          return;
        }
        phase.hasMoved = true;
        const {
          clientX,
          clientY
        } = event.touches[0];
        const point = {
          x: clientX,
          y: clientY
        };
        event.preventDefault();
        phase.actions.move(point);
      }
    }, {
      eventName: "touchend",
      fn: (event) => {
        const phase = getPhase();
        if (phase.type !== "DRAGGING") {
          cancel();
          return;
        }
        event.preventDefault();
        phase.actions.drop({
          shouldBlockNextClick: true
        });
        completed();
      }
    }, {
      eventName: "touchcancel",
      fn: (event) => {
        if (getPhase().type !== "DRAGGING") {
          cancel();
          return;
        }
        event.preventDefault();
        cancel();
      }
    }, {
      eventName: "touchforcechange",
      fn: (event) => {
        const phase = getPhase();
        !(phase.type !== "IDLE") ? true ? invariant2() : invariant2() : void 0;
        const touch = event.touches[0];
        if (!touch) {
          return;
        }
        const isForcePress = touch.force >= forcePressThreshold;
        if (!isForcePress) {
          return;
        }
        const shouldRespect = phase.actions.shouldRespectForcePress();
        if (phase.type === "PENDING") {
          if (shouldRespect) {
            cancel();
          }
          return;
        }
        if (shouldRespect) {
          if (phase.hasMoved) {
            event.preventDefault();
            return;
          }
          cancel();
          return;
        }
        event.preventDefault();
      }
    }, {
      eventName: supportedEventName,
      fn: cancel
    }];
  }
  function useTouchSensor(api) {
    const phaseRef = (0, import_react20.useRef)(idle);
    const unbindEventsRef = (0, import_react20.useRef)(noop$2);
    const getPhase = useCallback3(function getPhase2() {
      return phaseRef.current;
    }, []);
    const setPhase = useCallback3(function setPhase2(phase) {
      phaseRef.current = phase;
    }, []);
    const startCaptureBinding = useMemo4(() => ({
      eventName: "touchstart",
      fn: function onTouchStart(event) {
        if (event.defaultPrevented) {
          return;
        }
        const draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        const actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!actions) {
          return;
        }
        const touch = event.touches[0];
        const {
          clientX,
          clientY
        } = touch;
        const point = {
          x: clientX,
          y: clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    }), [api]);
    const listenForCapture = useCallback3(function listenForCapture2() {
      const options = {
        capture: true,
        passive: false
      };
      unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
    }, [startCaptureBinding]);
    const stop = useCallback3(() => {
      const current = phaseRef.current;
      if (current.type === "IDLE") {
        return;
      }
      if (current.type === "PENDING") {
        clearTimeout(current.longPressTimerId);
      }
      setPhase(idle);
      unbindEventsRef.current();
      listenForCapture();
    }, [listenForCapture, setPhase]);
    const cancel = useCallback3(() => {
      const phase = phaseRef.current;
      stop();
      if (phase.type === "DRAGGING") {
        phase.actions.cancel({
          shouldBlockNextClick: true
        });
      }
      if (phase.type === "PENDING") {
        phase.actions.abort();
      }
    }, [stop]);
    const bindCapturingEvents = useCallback3(function bindCapturingEvents2() {
      const options = {
        capture: true,
        passive: false
      };
      const args = {
        cancel,
        completed: stop,
        getPhase
      };
      const unbindTarget = bindEvents(window, getHandleBindings(args), options);
      const unbindWindow = bindEvents(window, getWindowBindings(args), options);
      unbindEventsRef.current = function unbindAll() {
        unbindTarget();
        unbindWindow();
      };
    }, [cancel, getPhase, stop]);
    const startDragging = useCallback3(function startDragging2() {
      const phase = getPhase();
      !(phase.type === "PENDING") ? true ? invariant2(false, `Cannot start dragging from phase ${phase.type}`) : invariant2() : void 0;
      const actions = phase.actions.fluidLift(phase.point);
      setPhase({
        type: "DRAGGING",
        actions,
        hasMoved: false
      });
    }, [getPhase, setPhase]);
    const startPendingDrag = useCallback3(function startPendingDrag2(actions, point) {
      !(getPhase().type === "IDLE") ? true ? invariant2(false, "Expected to move from IDLE to PENDING drag") : invariant2() : void 0;
      const longPressTimerId = setTimeout(startDragging, timeForLongPress);
      setPhase({
        type: "PENDING",
        point,
        actions,
        longPressTimerId
      });
      bindCapturingEvents();
    }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
    useIsomorphicLayoutEffect2(function mount() {
      listenForCapture();
      return function unmount() {
        unbindEventsRef.current();
        const phase = getPhase();
        if (phase.type === "PENDING") {
          clearTimeout(phase.longPressTimerId);
          setPhase(idle);
        }
      };
    }, [getPhase, listenForCapture, setPhase]);
    useIsomorphicLayoutEffect2(function webkitHack() {
      const unbind = bindEvents(window, [{
        eventName: "touchmove",
        fn: () => {
        },
        options: {
          capture: false,
          passive: false
        }
      }]);
      return unbind;
    }, []);
  }
  function useValidateSensorHooks(sensorHooks) {
    useDev(() => {
      const previousRef = usePrevious(sensorHooks);
      useDevSetupWarning(() => {
        !(previousRef.current.length === sensorHooks.length) ? true ? invariant2(false, "Cannot change the amount of sensor hooks after mounting") : invariant2(false) : void 0;
      });
    });
  }
  var interactiveTagNames = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
  function isAnInteractiveElement(parent, current) {
    if (current == null) {
      return false;
    }
    const hasAnInteractiveTag = interactiveTagNames.includes(current.tagName.toLowerCase());
    if (hasAnInteractiveTag) {
      return true;
    }
    const attribute = current.getAttribute("contenteditable");
    if (attribute === "true" || attribute === "") {
      return true;
    }
    if (current === parent) {
      return false;
    }
    return isAnInteractiveElement(parent, current.parentElement);
  }
  function isEventInInteractiveElement(draggable2, event) {
    const target = event.target;
    if (!isHtmlElement(target)) {
      return false;
    }
    return isAnInteractiveElement(draggable2, target);
  }
  var getBorderBoxCenterPosition = (el) => getRect(el.getBoundingClientRect()).center;
  function isElement(el) {
    return el instanceof getWindowFromEl(el).Element;
  }
  var supportedMatchesName = (() => {
    const base = "matches";
    if (typeof document === "undefined") {
      return base;
    }
    const candidates = [base, "msMatchesSelector", "webkitMatchesSelector"];
    const value = candidates.find((name) => name in Element.prototype);
    return value || base;
  })();
  function closestPonyfill(el, selector) {
    if (el == null) {
      return null;
    }
    if (el[supportedMatchesName](selector)) {
      return el;
    }
    return closestPonyfill(el.parentElement, selector);
  }
  function closest(el, selector) {
    if (el.closest) {
      return el.closest(selector);
    }
    return closestPonyfill(el, selector);
  }
  function getSelector(contextId) {
    return `[${dragHandle.contextId}="${contextId}"]`;
  }
  function findClosestDragHandleFromEvent(contextId, event) {
    const target = event.target;
    if (!isElement(target)) {
      true ? warning2("event.target must be a Element") : void 0;
      return null;
    }
    const selector = getSelector(contextId);
    const handle = closest(target, selector);
    if (!handle) {
      return null;
    }
    if (!isHtmlElement(handle)) {
      true ? warning2("drag handle must be a HTMLElement") : void 0;
      return null;
    }
    return handle;
  }
  function tryGetClosestDraggableIdFromEvent(contextId, event) {
    const handle = findClosestDragHandleFromEvent(contextId, event);
    if (!handle) {
      return null;
    }
    return handle.getAttribute(dragHandle.draggableId);
  }
  function findDraggable(contextId, draggableId) {
    const selector = `[${draggable.contextId}="${contextId}"]`;
    const possible = querySelectorAll(document, selector);
    const draggable$1 = possible.find((el) => {
      return el.getAttribute(draggable.id) === draggableId;
    });
    if (!draggable$1) {
      return null;
    }
    if (!isHtmlElement(draggable$1)) {
      true ? warning2("Draggable element is not a HTMLElement") : void 0;
      return null;
    }
    return draggable$1;
  }
  function preventDefault(event) {
    event.preventDefault();
  }
  function isActive({
    expected,
    phase,
    isLockActive,
    shouldWarn
  }) {
    if (!isLockActive()) {
      if (shouldWarn) {
        true ? warning2(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `) : void 0;
      }
      return false;
    }
    if (expected !== phase) {
      if (shouldWarn) {
        true ? warning2(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${expected}
        You called an action from outdated phase: ${phase}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `) : void 0;
      }
      return false;
    }
    return true;
  }
  function canStart({
    lockAPI,
    store,
    registry,
    draggableId
  }) {
    if (lockAPI.isClaimed()) {
      return false;
    }
    const entry = registry.draggable.findById(draggableId);
    if (!entry) {
      true ? warning2(`Unable to find draggable with id: ${draggableId}`) : void 0;
      return false;
    }
    if (!entry.options.isEnabled) {
      return false;
    }
    if (!canStartDrag(store.getState(), draggableId)) {
      return false;
    }
    return true;
  }
  function tryStart({
    lockAPI,
    contextId,
    store,
    registry,
    draggableId,
    forceSensorStop,
    sourceEvent
  }) {
    const shouldStart = canStart({
      lockAPI,
      store,
      registry,
      draggableId
    });
    if (!shouldStart) {
      return null;
    }
    const entry = registry.draggable.getById(draggableId);
    const el = findDraggable(contextId, entry.descriptor.id);
    if (!el) {
      true ? warning2(`Unable to find draggable element with id: ${draggableId}`) : void 0;
      return null;
    }
    if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
      return null;
    }
    const lock = lockAPI.claim(forceSensorStop || noop$2);
    let phase = "PRE_DRAG";
    function getShouldRespectForcePress() {
      return entry.options.shouldRespectForcePress;
    }
    function isLockActive() {
      return lockAPI.isActive(lock);
    }
    function tryDispatch(expected, getAction) {
      if (isActive({
        expected,
        phase,
        isLockActive,
        shouldWarn: true
      })) {
        store.dispatch(getAction());
      }
    }
    const tryDispatchWhenDragging = tryDispatch.bind(null, "DRAGGING");
    function lift2(args) {
      function completed() {
        lockAPI.release();
        phase = "COMPLETED";
      }
      if (phase !== "PRE_DRAG") {
        completed();
        true ? invariant2(false, `Cannot lift in phase ${phase}`) : invariant2();
      }
      store.dispatch(lift$1(args.liftActionArgs));
      phase = "DRAGGING";
      function finish2(reason, options = {
        shouldBlockNextClick: false
      }) {
        args.cleanup();
        if (options.shouldBlockNextClick) {
          const unbind = bindEvents(window, [{
            eventName: "click",
            fn: preventDefault,
            options: {
              once: true,
              passive: false,
              capture: true
            }
          }]);
          setTimeout(unbind);
        }
        completed();
        store.dispatch(drop({
          reason
        }));
      }
      return {
        isActive: () => isActive({
          expected: "DRAGGING",
          phase,
          isLockActive,
          shouldWarn: false
        }),
        shouldRespectForcePress: getShouldRespectForcePress,
        drop: (options) => finish2("DROP", options),
        cancel: (options) => finish2("CANCEL", options),
        ...args.actions
      };
    }
    function fluidLift(clientSelection) {
      const move$1 = raf_schd_esm_default((client) => {
        tryDispatchWhenDragging(() => move({
          client
        }));
      });
      const api = lift2({
        liftActionArgs: {
          id: draggableId,
          clientSelection,
          movementMode: "FLUID"
        },
        cleanup: () => move$1.cancel(),
        actions: {
          move: move$1
        }
      });
      return {
        ...api,
        move: move$1
      };
    }
    function snapLift() {
      const actions = {
        moveUp: () => tryDispatchWhenDragging(moveUp),
        moveRight: () => tryDispatchWhenDragging(moveRight),
        moveDown: () => tryDispatchWhenDragging(moveDown),
        moveLeft: () => tryDispatchWhenDragging(moveLeft)
      };
      return lift2({
        liftActionArgs: {
          id: draggableId,
          clientSelection: getBorderBoxCenterPosition(el),
          movementMode: "SNAP"
        },
        cleanup: noop$2,
        actions
      });
    }
    function abortPreDrag() {
      const shouldRelease = isActive({
        expected: "PRE_DRAG",
        phase,
        isLockActive,
        shouldWarn: true
      });
      if (shouldRelease) {
        lockAPI.release();
      }
    }
    const preDrag = {
      isActive: () => isActive({
        expected: "PRE_DRAG",
        phase,
        isLockActive,
        shouldWarn: false
      }),
      shouldRespectForcePress: getShouldRespectForcePress,
      fluidLift,
      snapLift,
      abort: abortPreDrag
    };
    return preDrag;
  }
  var defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
  function useSensorMarshal({
    contextId,
    store,
    registry,
    customSensors,
    enableDefaultSensors
  }) {
    const useSensors = [...enableDefaultSensors ? defaultSensors : [], ...customSensors || []];
    const lockAPI = (0, import_react20.useState)(() => create())[0];
    const tryAbandonLock = useCallback3(function tryAbandonLock2(previous, current) {
      if (isDragging(previous) && !isDragging(current)) {
        lockAPI.tryAbandon();
      }
    }, [lockAPI]);
    useIsomorphicLayoutEffect2(function listenToStore() {
      let previous = store.getState();
      const unsubscribe = store.subscribe(() => {
        const current = store.getState();
        tryAbandonLock(previous, current);
        previous = current;
      });
      return unsubscribe;
    }, [lockAPI, store, tryAbandonLock]);
    useIsomorphicLayoutEffect2(() => {
      return lockAPI.tryAbandon;
    }, [lockAPI.tryAbandon]);
    const canGetLock = useCallback3((draggableId) => {
      return canStart({
        lockAPI,
        registry,
        store,
        draggableId
      });
    }, [lockAPI, registry, store]);
    const tryGetLock = useCallback3((draggableId, forceStop, options) => tryStart({
      lockAPI,
      registry,
      contextId,
      store,
      draggableId,
      forceSensorStop: forceStop || null,
      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
    }), [contextId, lockAPI, registry, store]);
    const findClosestDraggableId = useCallback3((event) => tryGetClosestDraggableIdFromEvent(contextId, event), [contextId]);
    const findOptionsForDraggable = useCallback3((id) => {
      const entry = registry.draggable.findById(id);
      return entry ? entry.options : null;
    }, [registry.draggable]);
    const tryReleaseLock = useCallback3(function tryReleaseLock2() {
      if (!lockAPI.isClaimed()) {
        return;
      }
      lockAPI.tryAbandon();
      if (store.getState().phase !== "IDLE") {
        store.dispatch(flush());
      }
    }, [lockAPI, store]);
    const isLockClaimed = useCallback3(() => lockAPI.isClaimed(), [lockAPI]);
    const api = useMemo4(() => ({
      canGetLock,
      tryGetLock,
      findClosestDraggableId,
      findOptionsForDraggable,
      tryReleaseLock,
      isLockClaimed
    }), [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
    useValidateSensorHooks(useSensors);
    for (let i = 0; i < useSensors.length; i++) {
      useSensors[i](api);
    }
  }
  var createResponders = (props) => ({
    onBeforeCapture: (t2) => {
      const onBeforeCapureCallback = () => {
        if (props.onBeforeCapture) {
          props.onBeforeCapture(t2);
        }
      };
      (0, import_react_dom.flushSync)(onBeforeCapureCallback);
    },
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragUpdate: props.onDragUpdate
  });
  var createAutoScrollerOptions = (props) => ({
    ...defaultAutoScrollerOptions,
    ...props.autoScrollerOptions,
    durationDampening: {
      ...defaultAutoScrollerOptions.durationDampening,
      ...props.autoScrollerOptions
    }
  });
  function getStore(lazyRef) {
    !lazyRef.current ? true ? invariant2(false, "Could not find store from lazy ref") : invariant2() : void 0;
    return lazyRef.current;
  }
  function App(props) {
    const {
      contextId,
      setCallbacks,
      sensors,
      nonce,
      dragHandleUsageInstructions: dragHandleUsageInstructions2
    } = props;
    const lazyStoreRef = (0, import_react20.useRef)(null);
    useStartupValidation();
    const lastPropsRef = usePrevious(props);
    const getResponders = useCallback3(() => {
      return createResponders(lastPropsRef.current);
    }, [lastPropsRef]);
    const getAutoScrollerOptions = useCallback3(() => {
      return createAutoScrollerOptions(lastPropsRef.current);
    }, [lastPropsRef]);
    const announce = useAnnouncer(contextId);
    const dragHandleUsageInstructionsId = useHiddenTextElement({
      contextId,
      text: dragHandleUsageInstructions2
    });
    const styleMarshal = useStyleMarshal(contextId, nonce);
    const lazyDispatch = useCallback3((action) => {
      getStore(lazyStoreRef).dispatch(action);
    }, []);
    const marshalCallbacks = useMemo4(() => bindActionCreators({
      publishWhileDragging,
      updateDroppableScroll,
      updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled,
      collectionStarting
    }, lazyDispatch), [lazyDispatch]);
    const registry = useRegistry();
    const dimensionMarshal = useMemo4(() => {
      return createDimensionMarshal(registry, marshalCallbacks);
    }, [registry, marshalCallbacks]);
    const autoScroller = useMemo4(() => createAutoScroller({
      scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable,
      getAutoScrollerOptions,
      ...bindActionCreators({
        move
      }, lazyDispatch)
    }), [dimensionMarshal.scrollDroppable, lazyDispatch, getAutoScrollerOptions]);
    const focusMarshal = useFocusMarshal(contextId);
    const store = useMemo4(() => createStore2({
      announce,
      autoScroller,
      dimensionMarshal,
      focusMarshal,
      getResponders,
      styleMarshal
    }), [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);
    if (true) {
      if (lazyStoreRef.current && lazyStoreRef.current !== store) {
        true ? warning2("unexpected store change") : void 0;
      }
    }
    lazyStoreRef.current = store;
    const tryResetStore = useCallback3(() => {
      const current = getStore(lazyStoreRef);
      const state = current.getState();
      if (state.phase !== "IDLE") {
        current.dispatch(flush());
      }
    }, []);
    const isDragging2 = useCallback3(() => {
      const state = getStore(lazyStoreRef).getState();
      if (state.phase === "DROP_ANIMATING") {
        return true;
      }
      if (state.phase === "IDLE") {
        return false;
      }
      return state.isDragging;
    }, []);
    const appCallbacks = useMemo4(() => ({
      isDragging: isDragging2,
      tryAbort: tryResetStore
    }), [isDragging2, tryResetStore]);
    setCallbacks(appCallbacks);
    const getCanLift = useCallback3((id) => canStartDrag(getStore(lazyStoreRef).getState(), id), []);
    const getIsMovementAllowed = useCallback3(() => isMovementAllowed(getStore(lazyStoreRef).getState()), []);
    const appContext = useMemo4(() => ({
      marshal: dimensionMarshal,
      focus: focusMarshal,
      contextId,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed,
      dragHandleUsageInstructionsId,
      registry
    }), [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
    useSensorMarshal({
      contextId,
      store,
      registry,
      customSensors: sensors || null,
      enableDefaultSensors: props.enableDefaultSensors !== false
    });
    (0, import_react20.useEffect)(() => {
      return tryResetStore;
    }, [tryResetStore]);
    return import_react20.default.createElement(AppContext.Provider, {
      value: appContext
    }, import_react20.default.createElement(Provider_default, {
      context: StoreContext,
      store
    }, props.children));
  }
  function useUniqueContextId() {
    return import_react20.default.useId();
  }
  function DragDropContext(props) {
    const contextId = useUniqueContextId();
    const dragHandleUsageInstructions2 = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
    return import_react20.default.createElement(ErrorBoundary, null, (setCallbacks) => import_react20.default.createElement(App, {
      nonce: props.nonce,
      contextId,
      setCallbacks,
      dragHandleUsageInstructions: dragHandleUsageInstructions2,
      enableDefaultSensors: props.enableDefaultSensors,
      sensors: props.sensors,
      onBeforeCapture: props.onBeforeCapture,
      onBeforeDragStart: props.onBeforeDragStart,
      onDragStart: props.onDragStart,
      onDragUpdate: props.onDragUpdate,
      onDragEnd: props.onDragEnd,
      autoScrollerOptions: props.autoScrollerOptions
    }, props.children));
  }
  var zIndexOptions = {
    dragging: 5e3,
    dropAnimating: 4500
  };
  var getDraggingTransition = (shouldAnimateDragMovement, dropping) => {
    if (dropping) {
      return transitions.drop(dropping.duration);
    }
    if (shouldAnimateDragMovement) {
      return transitions.snap;
    }
    return transitions.fluid;
  };
  var getDraggingOpacity = (isCombining, isDropAnimating) => {
    if (!isCombining) {
      return void 0;
    }
    return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
  };
  var getShouldDraggingAnimate = (dragging) => {
    if (dragging.forceShouldAnimate != null) {
      return dragging.forceShouldAnimate;
    }
    return dragging.mode === "SNAP";
  };
  function getDraggingStyle(dragging) {
    const dimension = dragging.dimension;
    const box = dimension.client;
    const {
      offset: offset3,
      combineWith,
      dropping
    } = dragging;
    const isCombining = Boolean(combineWith);
    const shouldAnimate = getShouldDraggingAnimate(dragging);
    const isDropAnimating = Boolean(dropping);
    const transform = isDropAnimating ? transforms.drop(offset3, isCombining) : transforms.moveTo(offset3);
    const style2 = {
      position: "fixed",
      top: box.marginBox.top,
      left: box.marginBox.left,
      boxSizing: "border-box",
      width: box.borderBox.width,
      height: box.borderBox.height,
      transition: getDraggingTransition(shouldAnimate, dropping),
      transform,
      opacity: getDraggingOpacity(isCombining, isDropAnimating),
      zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
      pointerEvents: "none"
    };
    return style2;
  }
  function getSecondaryStyle(secondary) {
    return {
      transform: transforms.moveTo(secondary.offset),
      transition: secondary.shouldAnimateDisplacement ? void 0 : "none"
    };
  }
  function getStyle$1(mapped) {
    return mapped.type === "DRAGGING" ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
  }
  function getDimension$1(descriptor, el, windowScroll = origin) {
    const computedStyles = window.getComputedStyle(el);
    const borderBox = el.getBoundingClientRect();
    const client = calculateBox(borderBox, computedStyles);
    const page = withScroll(client, windowScroll);
    const placeholder2 = {
      client,
      tagName: el.tagName.toLowerCase(),
      display: computedStyles.display
    };
    const displaceBy = {
      x: client.marginBox.width,
      y: client.marginBox.height
    };
    const dimension = {
      descriptor,
      placeholder: placeholder2,
      displaceBy,
      client,
      page
    };
    return dimension;
  }
  function useDraggablePublisher(args) {
    const uniqueId = useUniqueId("draggable");
    const {
      descriptor,
      registry,
      getDraggableRef,
      canDragInteractiveElements,
      shouldRespectForcePress,
      isEnabled
    } = args;
    const options = useMemo4(() => ({
      canDragInteractiveElements,
      shouldRespectForcePress,
      isEnabled
    }), [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
    const getDimension2 = useCallback3((windowScroll) => {
      const el = getDraggableRef();
      !el ? true ? invariant2(false, "Cannot get dimension when no ref is set") : invariant2() : void 0;
      return getDimension$1(descriptor, el, windowScroll);
    }, [descriptor, getDraggableRef]);
    const entry = useMemo4(() => ({
      uniqueId,
      descriptor,
      options,
      getDimension: getDimension2
    }), [descriptor, getDimension2, options, uniqueId]);
    const publishedRef = (0, import_react20.useRef)(entry);
    const isFirstPublishRef = (0, import_react20.useRef)(true);
    useIsomorphicLayoutEffect2(() => {
      registry.draggable.register(publishedRef.current);
      return () => registry.draggable.unregister(publishedRef.current);
    }, [registry.draggable]);
    useIsomorphicLayoutEffect2(() => {
      if (isFirstPublishRef.current) {
        isFirstPublishRef.current = false;
        return;
      }
      const last = publishedRef.current;
      publishedRef.current = entry;
      registry.draggable.update(entry, last);
    }, [entry, registry.draggable]);
  }
  var DroppableContext = import_react20.default.createContext(null);
  function checkIsValidInnerRef(el) {
    !(el && isHtmlElement(el)) ? true ? invariant2(false, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : invariant2() : void 0;
  }
  function useValidation$1(props, contextId, getRef) {
    useDevSetupWarning(() => {
      function prefix3(id2) {
        return `Draggable[id: ${id2}]: `;
      }
      const id = props.draggableId;
      !id ? true ? invariant2(false, "Draggable requires a draggableId") : invariant2(false) : void 0;
      !(typeof id === "string") ? true ? invariant2(false, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof id}] (value: ${id})`) : invariant2(false) : void 0;
      !Number.isInteger(props.index) ? true ? invariant2(false, `${prefix3(id)} requires an integer index prop`) : invariant2(false) : void 0;
      if (props.mapped.type === "DRAGGING") {
        return;
      }
      checkIsValidInnerRef(getRef());
      if (props.isEnabled) {
        !findDragHandle(contextId, id) ? true ? invariant2(false, `${prefix3(id)} Unable to find drag handle`) : invariant2(false) : void 0;
      }
    });
  }
  function useClonePropValidation(isClone) {
    useDev(() => {
      const initialRef = (0, import_react20.useRef)(isClone);
      useDevSetupWarning(() => {
        !(isClone === initialRef.current) ? true ? invariant2(false, "Draggable isClone prop value changed during component life") : invariant2(false) : void 0;
      }, [isClone]);
    });
  }
  function useRequiredContext(Context) {
    const result = (0, import_react20.useContext)(Context);
    !result ? true ? invariant2(false, "Could not find required context") : invariant2() : void 0;
    return result;
  }
  function preventHtml5Dnd(event) {
    event.preventDefault();
  }
  var Draggable = (props) => {
    const ref2 = (0, import_react20.useRef)(null);
    const setRef = useCallback3((el = null) => {
      ref2.current = el;
    }, []);
    const getRef = useCallback3(() => ref2.current, []);
    const {
      contextId,
      dragHandleUsageInstructionsId,
      registry
    } = useRequiredContext(AppContext);
    const {
      type,
      droppableId
    } = useRequiredContext(DroppableContext);
    const descriptor = useMemo4(() => ({
      id: props.draggableId,
      index: props.index,
      type,
      droppableId
    }), [props.draggableId, props.index, type, droppableId]);
    const {
      children,
      draggableId,
      isEnabled,
      shouldRespectForcePress,
      canDragInteractiveElements,
      isClone,
      mapped,
      dropAnimationFinished: dropAnimationFinishedAction
    } = props;
    useValidation$1(props, contextId, getRef);
    useClonePropValidation(isClone);
    if (!isClone) {
      const forPublisher = useMemo4(() => ({
        descriptor,
        registry,
        getDraggableRef: getRef,
        canDragInteractiveElements,
        shouldRespectForcePress,
        isEnabled
      }), [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
      useDraggablePublisher(forPublisher);
    }
    const dragHandleProps = useMemo4(() => isEnabled ? {
      tabIndex: 0,
      role: "button",
      "aria-describedby": dragHandleUsageInstructionsId,
      "data-rfd-drag-handle-draggable-id": draggableId,
      "data-rfd-drag-handle-context-id": contextId,
      draggable: false,
      onDragStart: preventHtml5Dnd
    } : null, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
    const onMoveEnd = useCallback3((event) => {
      if (mapped.type !== "DRAGGING") {
        return;
      }
      if (!mapped.dropping) {
        return;
      }
      if (event.propertyName !== "transform") {
        return;
      }
      (0, import_react_dom.flushSync)(dropAnimationFinishedAction);
    }, [dropAnimationFinishedAction, mapped]);
    const provided = useMemo4(() => {
      const style2 = getStyle$1(mapped);
      const onTransitionEnd = mapped.type === "DRAGGING" && mapped.dropping ? onMoveEnd : void 0;
      const result = {
        innerRef: setRef,
        draggableProps: {
          "data-rfd-draggable-context-id": contextId,
          "data-rfd-draggable-id": draggableId,
          style: style2,
          onTransitionEnd
        },
        dragHandleProps
      };
      return result;
    }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
    const rubric = useMemo4(() => ({
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    }), [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
    return import_react20.default.createElement(import_react20.default.Fragment, null, children(provided, mapped.snapshot, rubric));
  };
  var isStrictEqual = (a, b) => a === b;
  var whatIsDraggedOverFromResult = (result) => {
    const {
      combine: combine2,
      destination
    } = result;
    if (destination) {
      return destination.droppableId;
    }
    if (combine2) {
      return combine2.droppableId;
    }
    return null;
  };
  var getCombineWithFromResult = (result) => {
    return result.combine ? result.combine.draggableId : null;
  };
  var getCombineWithFromImpact = (impact) => {
    return impact.at && impact.at.type === "COMBINE" ? impact.at.combine.draggableId : null;
  };
  function getDraggableSelector() {
    const memoizedOffset = memoizeOne((x, y) => ({
      x,
      y
    }));
    const getMemoizedSnapshot = memoizeOne((mode, isClone, draggingOver = null, combineWith = null, dropping = null) => ({
      isDragging: true,
      isClone,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode,
      draggingOver,
      combineWith,
      combineTargetFor: null
    }));
    const getMemoizedProps = memoizeOne((offset3, mode, dimension, isClone, draggingOver = null, combineWith = null, forceShouldAnimate = null) => ({
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver,
        combineWith,
        mode,
        offset: offset3,
        dimension,
        forceShouldAnimate,
        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
      }
    }));
    const selector = (state, ownProps) => {
      if (isDragging(state)) {
        if (state.critical.draggable.id !== ownProps.draggableId) {
          return null;
        }
        const offset3 = state.current.client.offset;
        const dimension = state.dimensions.draggables[ownProps.draggableId];
        const draggingOver = whatIsDraggedOver(state.impact);
        const combineWith = getCombineWithFromImpact(state.impact);
        const forceShouldAnimate = state.forceShouldAnimate;
        return getMemoizedProps(memoizedOffset(offset3.x, offset3.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
      }
      if (state.phase === "DROP_ANIMATING") {
        const completed = state.completed;
        if (completed.result.draggableId !== ownProps.draggableId) {
          return null;
        }
        const isClone = ownProps.isClone;
        const dimension = state.dimensions.draggables[ownProps.draggableId];
        const result = completed.result;
        const mode = result.mode;
        const draggingOver = whatIsDraggedOverFromResult(result);
        const combineWith = getCombineWithFromResult(result);
        const duration = state.dropDuration;
        const dropping = {
          duration,
          curve: curves.drop,
          moveTo: state.newHomeClientOffset,
          opacity: combineWith ? combine.opacity.drop : null,
          scale: combineWith ? combine.scale.drop : null
        };
        return {
          mapped: {
            type: "DRAGGING",
            offset: state.newHomeClientOffset,
            dimension,
            dropping,
            draggingOver,
            combineWith,
            mode,
            forceShouldAnimate: null,
            snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, dropping)
          }
        };
      }
      return null;
    };
    return selector;
  }
  function getSecondarySnapshot(combineTargetFor = null) {
    return {
      isDragging: false,
      isDropAnimating: false,
      isClone: false,
      dropAnimation: null,
      mode: null,
      draggingOver: null,
      combineTargetFor,
      combineWith: null
    };
  }
  var atRest = {
    mapped: {
      type: "SECONDARY",
      offset: origin,
      combineTargetFor: null,
      shouldAnimateDisplacement: true,
      snapshot: getSecondarySnapshot(null)
    }
  };
  function getSecondarySelector() {
    const memoizedOffset = memoizeOne((x, y) => ({
      x,
      y
    }));
    const getMemoizedSnapshot = memoizeOne(getSecondarySnapshot);
    const getMemoizedProps = memoizeOne((offset3, combineTargetFor = null, shouldAnimateDisplacement) => ({
      mapped: {
        type: "SECONDARY",
        offset: offset3,
        combineTargetFor,
        shouldAnimateDisplacement,
        snapshot: getMemoizedSnapshot(combineTargetFor)
      }
    }));
    const getFallback = (combineTargetFor) => {
      return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
    };
    const getProps = (ownId, draggingId, impact, afterCritical) => {
      const visualDisplacement = impact.displaced.visible[ownId];
      const isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
      const combine2 = tryGetCombine(impact);
      const combineTargetFor = combine2 && combine2.draggableId === ownId ? draggingId : null;
      if (!visualDisplacement) {
        if (!isAfterCriticalInVirtualList) {
          return getFallback(combineTargetFor);
        }
        if (impact.displaced.invisible[ownId]) {
          return null;
        }
        const change = negate(afterCritical.displacedBy.point);
        const offset4 = memoizedOffset(change.x, change.y);
        return getMemoizedProps(offset4, combineTargetFor, true);
      }
      if (isAfterCriticalInVirtualList) {
        return getFallback(combineTargetFor);
      }
      const displaceBy = impact.displacedBy.point;
      const offset3 = memoizedOffset(displaceBy.x, displaceBy.y);
      return getMemoizedProps(offset3, combineTargetFor, visualDisplacement.shouldAnimate);
    };
    const selector = (state, ownProps) => {
      if (isDragging(state)) {
        if (state.critical.draggable.id === ownProps.draggableId) {
          return null;
        }
        return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
      }
      if (state.phase === "DROP_ANIMATING") {
        const completed = state.completed;
        if (completed.result.draggableId === ownProps.draggableId) {
          return null;
        }
        return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
      }
      return null;
    };
    return selector;
  }
  var makeMapStateToProps$1 = () => {
    const draggingSelector = getDraggableSelector();
    const secondarySelector = getSecondarySelector();
    const selector = (state, ownProps) => draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
    return selector;
  };
  var mapDispatchToProps$1 = {
    dropAnimationFinished
  };
  var ConnectedDraggable = connect_default(makeMapStateToProps$1, mapDispatchToProps$1, null, {
    context: StoreContext,
    areStatePropsEqual: isStrictEqual
  })(Draggable);
  function PrivateDraggable(props) {
    const droppableContext = useRequiredContext(DroppableContext);
    const isUsingCloneFor = droppableContext.isUsingCloneFor;
    if (isUsingCloneFor === props.draggableId && !props.isClone) {
      return null;
    }
    return import_react20.default.createElement(ConnectedDraggable, props);
  }
  function PublicDraggable(props) {
    const isEnabled = typeof props.isDragDisabled === "boolean" ? !props.isDragDisabled : true;
    const canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
    const shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
    return import_react20.default.createElement(PrivateDraggable, _extends({}, props, {
      isClone: false,
      isEnabled,
      canDragInteractiveElements,
      shouldRespectForcePress
    }));
  }
  var isEqual = (base) => (value) => base === value;
  var isScroll = isEqual("scroll");
  var isAuto = isEqual("auto");
  var isVisible = isEqual("visible");
  var isEither = (overflow, fn) => fn(overflow.overflowX) || fn(overflow.overflowY);
  var isBoth = (overflow, fn) => fn(overflow.overflowX) && fn(overflow.overflowY);
  var isElementScrollable = (el) => {
    const style2 = window.getComputedStyle(el);
    const overflow = {
      overflowX: style2.overflowX,
      overflowY: style2.overflowY
    };
    return isEither(overflow, isScroll) || isEither(overflow, isAuto);
  };
  var isBodyScrollable = () => {
    if (false) {
      return false;
    }
    const body = getBodyElement();
    const html = document.documentElement;
    !html ? true ? invariant2() : invariant2() : void 0;
    if (!isElementScrollable(body)) {
      return false;
    }
    const htmlStyle = window.getComputedStyle(html);
    const htmlOverflow = {
      overflowX: htmlStyle.overflowX,
      overflowY: htmlStyle.overflowY
    };
    if (isBoth(htmlOverflow, isVisible)) {
      return false;
    }
    true ? warning2(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `) : void 0;
    return false;
  };
  var getClosestScrollable = (el) => {
    if (el == null) {
      return null;
    }
    if (el === document.body) {
      return isBodyScrollable() ? el : null;
    }
    if (el === document.documentElement) {
      return null;
    }
    if (!isElementScrollable(el)) {
      return getClosestScrollable(el.parentElement);
    }
    return el;
  };
  var checkForNestedScrollContainers = (scrollable) => {
    if (!scrollable) {
      return;
    }
    const anotherScrollParent = getClosestScrollable(scrollable.parentElement);
    if (!anotherScrollParent) {
      return;
    }
    true ? warning2(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `) : void 0;
  };
  var getScroll = (el) => ({
    x: el.scrollLeft,
    y: el.scrollTop
  });
  var getIsFixed = (el) => {
    if (!el) {
      return false;
    }
    const style2 = window.getComputedStyle(el);
    if (style2.position === "fixed") {
      return true;
    }
    return getIsFixed(el.parentElement);
  };
  var getEnv = (start2) => {
    const closestScrollable = getClosestScrollable(start2);
    const isFixedOnPage = getIsFixed(start2);
    return {
      closestScrollable,
      isFixedOnPage
    };
  };
  var getDroppableDimension = ({
    descriptor,
    isEnabled,
    isCombineEnabled,
    isFixedOnPage,
    direction,
    client,
    page,
    closest: closest2
  }) => {
    const frame = (() => {
      if (!closest2) {
        return null;
      }
      const {
        scrollSize,
        client: frameClient
      } = closest2;
      const maxScroll = getMaxScroll({
        scrollHeight: scrollSize.scrollHeight,
        scrollWidth: scrollSize.scrollWidth,
        height: frameClient.paddingBox.height,
        width: frameClient.paddingBox.width
      });
      return {
        pageMarginBox: closest2.page.marginBox,
        frameClient,
        scrollSize,
        shouldClipSubject: closest2.shouldClipSubject,
        scroll: {
          initial: closest2.scroll,
          current: closest2.scroll,
          max: maxScroll,
          diff: {
            value: origin,
            displacement: origin
          }
        }
      };
    })();
    const axis = direction === "vertical" ? vertical : horizontal;
    const subject = getSubject({
      page,
      withPlaceholder: null,
      axis,
      frame
    });
    const dimension = {
      descriptor,
      isCombineEnabled,
      isFixedOnPage,
      axis,
      isEnabled,
      client,
      page,
      frame,
      subject
    };
    return dimension;
  };
  var getClient = (targetRef, closestScrollable) => {
    const base = getBox(targetRef);
    if (!closestScrollable) {
      return base;
    }
    if (targetRef !== closestScrollable) {
      return base;
    }
    const top = base.paddingBox.top - closestScrollable.scrollTop;
    const left = base.paddingBox.left - closestScrollable.scrollLeft;
    const bottom = top + closestScrollable.scrollHeight;
    const right = left + closestScrollable.scrollWidth;
    const paddingBox = {
      top,
      right,
      bottom,
      left
    };
    const borderBox = expand(paddingBox, base.border);
    const client = createBox({
      borderBox,
      margin: base.margin,
      border: base.border,
      padding: base.padding
    });
    return client;
  };
  var getDimension = ({
    ref: ref2,
    descriptor,
    env,
    windowScroll,
    direction,
    isDropDisabled,
    isCombineEnabled,
    shouldClipSubject
  }) => {
    const closestScrollable = env.closestScrollable;
    const client = getClient(ref2, closestScrollable);
    const page = withScroll(client, windowScroll);
    const closest2 = (() => {
      if (!closestScrollable) {
        return null;
      }
      const frameClient = getBox(closestScrollable);
      const scrollSize = {
        scrollHeight: closestScrollable.scrollHeight,
        scrollWidth: closestScrollable.scrollWidth
      };
      return {
        client: frameClient,
        page: withScroll(frameClient, windowScroll),
        scroll: getScroll(closestScrollable),
        scrollSize,
        shouldClipSubject
      };
    })();
    const dimension = getDroppableDimension({
      descriptor,
      isEnabled: !isDropDisabled,
      isCombineEnabled,
      isFixedOnPage: env.isFixedOnPage,
      direction,
      client,
      page,
      closest: closest2
    });
    return dimension;
  };
  var immediate = {
    passive: false
  };
  var delayed = {
    passive: true
  };
  var getListenerOptions = (options) => options.shouldPublishImmediately ? immediate : delayed;
  var getClosestScrollableFromDrag = (dragging) => dragging && dragging.env.closestScrollable || null;
  function useDroppablePublisher(args) {
    const whileDraggingRef = (0, import_react20.useRef)(null);
    const appContext = useRequiredContext(AppContext);
    const uniqueId = useUniqueId("droppable");
    const {
      registry,
      marshal
    } = appContext;
    const previousRef = usePrevious(args);
    const descriptor = useMemo4(() => ({
      id: args.droppableId,
      type: args.type,
      mode: args.mode
    }), [args.droppableId, args.mode, args.type]);
    const publishedDescriptorRef = (0, import_react20.useRef)(descriptor);
    const memoizedUpdateScroll = useMemo4(() => memoizeOne((x, y) => {
      !whileDraggingRef.current ? true ? invariant2(false, "Can only update scroll when dragging") : invariant2() : void 0;
      const scroll3 = {
        x,
        y
      };
      marshal.updateDroppableScroll(descriptor.id, scroll3);
    }), [descriptor.id, marshal]);
    const getClosestScroll = useCallback3(() => {
      const dragging = whileDraggingRef.current;
      if (!dragging || !dragging.env.closestScrollable) {
        return origin;
      }
      return getScroll(dragging.env.closestScrollable);
    }, []);
    const updateScroll = useCallback3(() => {
      const scroll3 = getClosestScroll();
      memoizedUpdateScroll(scroll3.x, scroll3.y);
    }, [getClosestScroll, memoizedUpdateScroll]);
    const scheduleScrollUpdate = useMemo4(() => raf_schd_esm_default(updateScroll), [updateScroll]);
    const onClosestScroll = useCallback3(() => {
      const dragging = whileDraggingRef.current;
      const closest2 = getClosestScrollableFromDrag(dragging);
      !(dragging && closest2) ? true ? invariant2(false, "Could not find scroll options while scrolling") : invariant2() : void 0;
      const options = dragging.scrollOptions;
      if (options.shouldPublishImmediately) {
        updateScroll();
        return;
      }
      scheduleScrollUpdate();
    }, [scheduleScrollUpdate, updateScroll]);
    const getDimensionAndWatchScroll = useCallback3((windowScroll, options) => {
      !!whileDraggingRef.current ? true ? invariant2(false, "Cannot collect a droppable while a drag is occurring") : invariant2() : void 0;
      const previous = previousRef.current;
      const ref2 = previous.getDroppableRef();
      !ref2 ? true ? invariant2(false, "Cannot collect without a droppable ref") : invariant2() : void 0;
      const env = getEnv(ref2);
      const dragging = {
        ref: ref2,
        descriptor,
        env,
        scrollOptions: options
      };
      whileDraggingRef.current = dragging;
      const dimension = getDimension({
        ref: ref2,
        descriptor,
        env,
        windowScroll,
        direction: previous.direction,
        isDropDisabled: previous.isDropDisabled,
        isCombineEnabled: previous.isCombineEnabled,
        shouldClipSubject: !previous.ignoreContainerClipping
      });
      const scrollable = env.closestScrollable;
      if (scrollable) {
        scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
        scrollable.addEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
        if (true) {
          checkForNestedScrollContainers(scrollable);
        }
      }
      return dimension;
    }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
    const getScrollWhileDragging = useCallback3(() => {
      const dragging = whileDraggingRef.current;
      const closest2 = getClosestScrollableFromDrag(dragging);
      !(dragging && closest2) ? true ? invariant2(false, "Can only recollect Droppable client for Droppables that have a scroll container") : invariant2() : void 0;
      return getScroll(closest2);
    }, []);
    const dragStopped = useCallback3(() => {
      const dragging = whileDraggingRef.current;
      !dragging ? true ? invariant2(false, "Cannot stop drag when no active drag") : invariant2() : void 0;
      const closest2 = getClosestScrollableFromDrag(dragging);
      whileDraggingRef.current = null;
      if (!closest2) {
        return;
      }
      scheduleScrollUpdate.cancel();
      closest2.removeAttribute(scrollContainer.contextId);
      closest2.removeEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
    }, [onClosestScroll, scheduleScrollUpdate]);
    const scroll2 = useCallback3((change) => {
      const dragging = whileDraggingRef.current;
      !dragging ? true ? invariant2(false, "Cannot scroll when there is no drag") : invariant2() : void 0;
      const closest2 = getClosestScrollableFromDrag(dragging);
      !closest2 ? true ? invariant2(false, "Cannot scroll a droppable with no closest scrollable") : invariant2() : void 0;
      closest2.scrollTop += change.y;
      closest2.scrollLeft += change.x;
    }, []);
    const callbacks = useMemo4(() => {
      return {
        getDimensionAndWatchScroll,
        getScrollWhileDragging,
        dragStopped,
        scroll: scroll2
      };
    }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll2]);
    const entry = useMemo4(() => ({
      uniqueId,
      descriptor,
      callbacks
    }), [callbacks, descriptor, uniqueId]);
    useIsomorphicLayoutEffect2(() => {
      publishedDescriptorRef.current = entry.descriptor;
      registry.droppable.register(entry);
      return () => {
        if (whileDraggingRef.current) {
          true ? warning2("Unsupported: changing the droppableId or type of a Droppable during a drag") : void 0;
          dragStopped();
        }
        registry.droppable.unregister(entry);
      };
    }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
    useIsomorphicLayoutEffect2(() => {
      if (!whileDraggingRef.current) {
        return;
      }
      marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
    }, [args.isDropDisabled, marshal]);
    useIsomorphicLayoutEffect2(() => {
      if (!whileDraggingRef.current) {
        return;
      }
      marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
    }, [args.isCombineEnabled, marshal]);
  }
  function noop2() {
  }
  var empty = {
    width: 0,
    height: 0,
    margin: noSpacing2
  };
  var getSize = ({
    isAnimatingOpenOnMount,
    placeholder: placeholder2,
    animate
  }) => {
    if (isAnimatingOpenOnMount) {
      return empty;
    }
    if (animate === "close") {
      return empty;
    }
    return {
      height: placeholder2.client.borderBox.height,
      width: placeholder2.client.borderBox.width,
      margin: placeholder2.client.margin
    };
  };
  var getStyle = ({
    isAnimatingOpenOnMount,
    placeholder: placeholder2,
    animate
  }) => {
    const size = getSize({
      isAnimatingOpenOnMount,
      placeholder: placeholder2,
      animate
    });
    return {
      display: placeholder2.display,
      boxSizing: "border-box",
      width: size.width,
      height: size.height,
      marginTop: size.margin.top,
      marginRight: size.margin.right,
      marginBottom: size.margin.bottom,
      marginLeft: size.margin.left,
      flexShrink: "0",
      flexGrow: "0",
      pointerEvents: "none",
      transition: animate !== "none" ? transitions.placeholder : null
    };
  };
  var Placeholder = (props) => {
    const animateOpenTimerRef = (0, import_react20.useRef)(null);
    const tryClearAnimateOpenTimer = useCallback3(() => {
      if (!animateOpenTimerRef.current) {
        return;
      }
      clearTimeout(animateOpenTimerRef.current);
      animateOpenTimerRef.current = null;
    }, []);
    const {
      animate,
      onTransitionEnd,
      onClose,
      contextId
    } = props;
    const [isAnimatingOpenOnMount, setIsAnimatingOpenOnMount] = (0, import_react20.useState)(props.animate === "open");
    (0, import_react20.useEffect)(() => {
      if (!isAnimatingOpenOnMount) {
        return noop2;
      }
      if (animate !== "open") {
        tryClearAnimateOpenTimer();
        setIsAnimatingOpenOnMount(false);
        return noop2;
      }
      if (animateOpenTimerRef.current) {
        return noop2;
      }
      animateOpenTimerRef.current = setTimeout(() => {
        animateOpenTimerRef.current = null;
        setIsAnimatingOpenOnMount(false);
      });
      return tryClearAnimateOpenTimer;
    }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
    const onSizeChangeEnd = useCallback3((event) => {
      if (event.propertyName !== "height") {
        return;
      }
      onTransitionEnd();
      if (animate === "close") {
        onClose();
      }
    }, [animate, onClose, onTransitionEnd]);
    const style2 = getStyle({
      isAnimatingOpenOnMount,
      animate: props.animate,
      placeholder: props.placeholder
    });
    return import_react20.default.createElement(props.placeholder.tagName, {
      style: style2,
      "data-rfd-placeholder-context-id": contextId,
      onTransitionEnd: onSizeChangeEnd,
      ref: props.innerRef
    });
  };
  var Placeholder$1 = import_react20.default.memo(Placeholder);
  function isBoolean(value) {
    return typeof value === "boolean";
  }
  function runChecks(args, checks) {
    checks.forEach((check) => check(args));
  }
  var shared = [function required({
    props
  }) {
    !props.droppableId ? true ? invariant2(false, "A Droppable requires a droppableId prop") : invariant2() : void 0;
    !(typeof props.droppableId === "string") ? true ? invariant2(false, `A Droppable requires a [string] droppableId. Provided: [${typeof props.droppableId}]`) : invariant2() : void 0;
  }, function boolean({
    props
  }) {
    !isBoolean(props.isDropDisabled) ? true ? invariant2(false, "isDropDisabled must be a boolean") : invariant2() : void 0;
    !isBoolean(props.isCombineEnabled) ? true ? invariant2(false, "isCombineEnabled must be a boolean") : invariant2() : void 0;
    !isBoolean(props.ignoreContainerClipping) ? true ? invariant2(false, "ignoreContainerClipping must be a boolean") : invariant2() : void 0;
  }, function ref({
    getDroppableRef
  }) {
    checkIsValidInnerRef(getDroppableRef());
  }];
  var standard = [function placeholder({
    props,
    getPlaceholderRef
  }) {
    if (!props.placeholder) {
      return;
    }
    const ref2 = getPlaceholderRef();
    if (ref2) {
      return;
    }
    true ? warning2(`
      Droppable setup issue [droppableId: "${props.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `) : void 0;
  }];
  var virtual = [function hasClone({
    props
  }) {
    !props.renderClone ? true ? invariant2(false, "Must provide a clone render function (renderClone) for virtual lists") : invariant2() : void 0;
  }, function hasNoPlaceholder({
    getPlaceholderRef
  }) {
    !!getPlaceholderRef() ? true ? invariant2(false, "Expected virtual list to not have a placeholder") : invariant2() : void 0;
  }];
  function useValidation(args) {
    useDevSetupWarning(() => {
      runChecks(args, shared);
      if (args.props.mode === "standard") {
        runChecks(args, standard);
      }
      if (args.props.mode === "virtual") {
        runChecks(args, virtual);
      }
    });
  }
  var AnimateInOut = class extends import_react20.default.PureComponent {
    constructor(...args) {
      super(...args);
      this.state = {
        isVisible: Boolean(this.props.on),
        data: this.props.on,
        animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
      };
      this.onClose = () => {
        if (this.state.animate !== "close") {
          return;
        }
        this.setState({
          isVisible: false
        });
      };
    }
    static getDerivedStateFromProps(props, state) {
      if (!props.shouldAnimate) {
        return {
          isVisible: Boolean(props.on),
          data: props.on,
          animate: "none"
        };
      }
      if (props.on) {
        return {
          isVisible: true,
          data: props.on,
          animate: "open"
        };
      }
      if (state.isVisible) {
        return {
          isVisible: true,
          data: state.data,
          animate: "close"
        };
      }
      return {
        isVisible: false,
        animate: "close",
        data: null
      };
    }
    render() {
      if (!this.state.isVisible) {
        return null;
      }
      const provided = {
        onClose: this.onClose,
        data: this.state.data,
        animate: this.state.animate
      };
      return this.props.children(provided);
    }
  };
  var Droppable = (props) => {
    const appContext = (0, import_react20.useContext)(AppContext);
    !appContext ? true ? invariant2(false, "Could not find app context") : invariant2() : void 0;
    const {
      contextId,
      isMovementAllowed: isMovementAllowed2
    } = appContext;
    const droppableRef = (0, import_react20.useRef)(null);
    const placeholderRef = (0, import_react20.useRef)(null);
    const {
      children,
      droppableId,
      type,
      mode,
      direction,
      ignoreContainerClipping,
      isDropDisabled,
      isCombineEnabled,
      snapshot,
      useClone,
      updateViewportMaxScroll: updateViewportMaxScroll2,
      getContainerForClone
    } = props;
    const getDroppableRef = useCallback3(() => droppableRef.current, []);
    const setDroppableRef = useCallback3((value = null) => {
      droppableRef.current = value;
    }, []);
    const getPlaceholderRef = useCallback3(() => placeholderRef.current, []);
    const setPlaceholderRef = useCallback3((value = null) => {
      placeholderRef.current = value;
    }, []);
    useValidation({
      props,
      getDroppableRef,
      getPlaceholderRef
    });
    const onPlaceholderTransitionEnd = useCallback3(() => {
      if (isMovementAllowed2()) {
        updateViewportMaxScroll2({
          maxScroll: getMaxWindowScroll()
        });
      }
    }, [isMovementAllowed2, updateViewportMaxScroll2]);
    useDroppablePublisher({
      droppableId,
      type,
      mode,
      direction,
      isDropDisabled,
      isCombineEnabled,
      ignoreContainerClipping,
      getDroppableRef
    });
    const placeholder2 = useMemo4(() => import_react20.default.createElement(AnimateInOut, {
      on: props.placeholder,
      shouldAnimate: props.shouldAnimatePlaceholder
    }, ({
      onClose,
      data,
      animate
    }) => import_react20.default.createElement(Placeholder$1, {
      placeholder: data,
      onClose,
      innerRef: setPlaceholderRef,
      animate,
      contextId,
      onTransitionEnd: onPlaceholderTransitionEnd
    })), [contextId, onPlaceholderTransitionEnd, props.placeholder, props.shouldAnimatePlaceholder, setPlaceholderRef]);
    const provided = useMemo4(() => ({
      innerRef: setDroppableRef,
      placeholder: placeholder2,
      droppableProps: {
        "data-rfd-droppable-id": droppableId,
        "data-rfd-droppable-context-id": contextId
      }
    }), [contextId, droppableId, placeholder2, setDroppableRef]);
    const isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
    const droppableContext = useMemo4(() => ({
      droppableId,
      type,
      isUsingCloneFor
    }), [droppableId, isUsingCloneFor, type]);
    function getClone() {
      if (!useClone) {
        return null;
      }
      const {
        dragging,
        render: render2
      } = useClone;
      const node = import_react20.default.createElement(PrivateDraggable, {
        draggableId: dragging.draggableId,
        index: dragging.source.index,
        isClone: true,
        isEnabled: true,
        shouldRespectForcePress: false,
        canDragInteractiveElements: true
      }, (draggableProvided, draggableSnapshot) => render2(draggableProvided, draggableSnapshot, dragging));
      return import_react_dom.default.createPortal(node, getContainerForClone());
    }
    return import_react20.default.createElement(DroppableContext.Provider, {
      value: droppableContext
    }, children(provided, snapshot), getClone());
  };
  function getBody() {
    !document.body ? true ? invariant2(false, "document.body is not ready") : invariant2() : void 0;
    return document.body;
  }
  var defaultProps = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: false,
    isCombineEnabled: false,
    ignoreContainerClipping: false,
    renderClone: null,
    getContainerForClone: getBody
  };
  var attachDefaultPropsToOwnProps = (ownProps) => {
    let mergedProps = {
      ...ownProps
    };
    let defaultPropKey;
    for (defaultPropKey in defaultProps) {
      if (ownProps[defaultPropKey] === void 0) {
        mergedProps = {
          ...mergedProps,
          [defaultPropKey]: defaultProps[defaultPropKey]
        };
      }
    }
    return mergedProps;
  };
  var isMatchingType = (type, critical) => type === critical.droppable.type;
  var getDraggable = (critical, dimensions) => dimensions.draggables[critical.draggable.id];
  var makeMapStateToProps = () => {
    const idleWithAnimation = {
      placeholder: null,
      shouldAnimatePlaceholder: true,
      snapshot: {
        isDraggingOver: false,
        draggingOverWith: null,
        draggingFromThisWith: null,
        isUsingPlaceholder: false
      },
      useClone: null
    };
    const idleWithoutAnimation = {
      ...idleWithAnimation,
      shouldAnimatePlaceholder: false
    };
    const getDraggableRubric = memoizeOne((descriptor) => ({
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    }));
    const getMapProps = memoizeOne((id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) => {
      const draggableId = dragging.descriptor.id;
      const isHome = dragging.descriptor.droppableId === id;
      if (isHome) {
        const useClone = renderClone ? {
          render: renderClone,
          dragging: getDraggableRubric(dragging.descriptor)
        } : null;
        const snapshot2 = {
          isDraggingOver: isDraggingOverForConsumer,
          draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
          draggingFromThisWith: draggableId,
          isUsingPlaceholder: true
        };
        return {
          placeholder: dragging.placeholder,
          shouldAnimatePlaceholder: false,
          snapshot: snapshot2,
          useClone
        };
      }
      if (!isEnabled) {
        return idleWithoutAnimation;
      }
      if (!isDraggingOverForImpact) {
        return idleWithAnimation;
      }
      const snapshot = {
        isDraggingOver: isDraggingOverForConsumer,
        draggingOverWith: draggableId,
        draggingFromThisWith: null,
        isUsingPlaceholder: true
      };
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: true,
        snapshot,
        useClone: null
      };
    });
    const selector = (state, ownProps) => {
      const ownPropsWithDefaultProps = attachDefaultPropsToOwnProps(ownProps);
      const id = ownPropsWithDefaultProps.droppableId;
      const type = ownPropsWithDefaultProps.type;
      const isEnabled = !ownPropsWithDefaultProps.isDropDisabled;
      const renderClone = ownPropsWithDefaultProps.renderClone;
      if (isDragging(state)) {
        const critical = state.critical;
        if (!isMatchingType(type, critical)) {
          return idleWithoutAnimation;
        }
        const dragging = getDraggable(critical, state.dimensions);
        const isDraggingOver = whatIsDraggedOver(state.impact) === id;
        return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
      }
      if (state.phase === "DROP_ANIMATING") {
        const completed = state.completed;
        if (!isMatchingType(type, completed.critical)) {
          return idleWithoutAnimation;
        }
        const dragging = getDraggable(completed.critical, state.dimensions);
        return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, dragging, renderClone);
      }
      if (state.phase === "IDLE" && state.completed && !state.shouldFlush) {
        const completed = state.completed;
        if (!isMatchingType(type, completed.critical)) {
          return idleWithoutAnimation;
        }
        const wasOver = whatIsDraggedOver(completed.impact) === id;
        const wasCombining = Boolean(completed.impact.at && completed.impact.at.type === "COMBINE");
        const isHome = completed.critical.droppable.id === id;
        if (wasOver) {
          return wasCombining ? idleWithAnimation : idleWithoutAnimation;
        }
        if (isHome) {
          return idleWithAnimation;
        }
        return idleWithoutAnimation;
      }
      return idleWithoutAnimation;
    };
    return selector;
  };
  var mapDispatchToProps = {
    updateViewportMaxScroll
  };
  var ConnectedDroppable = connect_default(makeMapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => {
    return {
      ...attachDefaultPropsToOwnProps(ownProps),
      ...stateProps,
      ...dispatchProps
    };
  }, {
    context: StoreContext,
    areStatePropsEqual: isStrictEqual
  })(Droppable);

  // src/components/Modals/Settings/DnDList.tsx
  var import_react21 = __toESM(require_react());
  var DnDList = (props) => {
    const colorVariable = getComputedStyle(document.body).getPropertyValue("--spice-button-disabled");
    const getItemStyle = (_isDragging, draggableStyle, isEnabled) => {
      return {
        borderRadius: "5px",
        border: isEnabled ? `2px solid ${colorVariable}` : "2px solid red",
        userSelect: "none",
        paddingTop: 12,
        paddingBottom: 12,
        width: "110px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: isEnabled ? "none" : "line-through",
        cursor: "pointer",
        ...draggableStyle
      };
    };
    const getListStyle = () => ({
      display: "flex",
      paddingTop: 8,
      paddingBottom: 8,
      gap: 8
    });
    const onDragEnd2 = (result) => {
      const { source, destination } = result;
      if (!destination)
        return;
      reorder(props.modalConfig.tabs, source.index, destination.index);
    };
    function reorder(tabs, start2, end2) {
      const result = Array.from(tabs);
      const [removed] = result.splice(start2, 1);
      result.splice(end2, 0, removed);
      props.modalConfig.tabs = result;
      localStorage.setItem(LOCALSTORAGE_KEYS.tabs, JSON.stringify(props.modalConfig.tabs));
      props.updateConfig(props.modalConfig);
    }
    const onToggleEnabled = (name) => {
      const updatedTabs = props.modalConfig.tabs.map((tab2) => tab2.name === name ? { ...tab2, enabled: !tab2.enabled } : tab2);
      props.modalConfig.tabs = updatedTabs;
      localStorage.setItem(LOCALSTORAGE_KEYS.tabs, JSON.stringify(props.modalConfig.tabs));
      props.updateConfig(props.modalConfig);
    };
    return /* @__PURE__ */ import_react21.default.createElement(DragDropContext, {
      onDragEnd: onDragEnd2
    }, /* @__PURE__ */ import_react21.default.createElement(ConnectedDroppable, {
      droppableId: "droppable",
      direction: "horizontal"
    }, (provided) => /* @__PURE__ */ import_react21.default.createElement("div", {
      ref: provided.innerRef,
      style: getListStyle(),
      ...provided.droppableProps
    }, props.modalConfig.tabs.map((item, index) => /* @__PURE__ */ import_react21.default.createElement(PublicDraggable, {
      key: item.name,
      draggableId: item.name,
      index
    }, (provided2, snapshot) => /* @__PURE__ */ import_react21.default.createElement("div", {
      ref: provided2.innerRef,
      ...provided2.draggableProps,
      style: getItemStyle(snapshot.isDragging, provided2.draggableProps.style, item.enabled)
    }, /* @__PURE__ */ import_react21.default.createElement("div", {
      className: "dnd-box",
      ...provided2.dragHandleProps,
      onClick: () => onToggleEnabled(item.name)
    }, /* @__PURE__ */ import_react21.default.createElement("svg", {
      className: "dnd-icon",
      fill: "currentColor",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-label": "Drag icon",
      role: "img"
    }, /* @__PURE__ */ import_react21.default.createElement("path", {
      "fill-rule": "evenodd",
      d: "M7.375 3.67c0-.645-.56-1.17-1.25-1.17s-1.25.525-1.25 1.17c0 .646.56 1.17 1.25 1.17s1.25-.524 1.25-1.17zm0 8.66c0-.646-.56-1.17-1.25-1.17s-1.25.524-1.25 1.17c0 .645.56 1.17 1.25 1.17s1.25-.525 1.25-1.17zm-1.25-5.5c.69 0 1.25.525 1.25 1.17 0 .645-.56 1.17-1.25 1.17S4.875 8.645 4.875 8c0-.645.56-1.17 1.25-1.17zm5-3.16c0-.645-.56-1.17-1.25-1.17s-1.25.525-1.25 1.17c0 .646.56 1.17 1.25 1.17s1.25-.524 1.25-1.17zm-1.25 7.49c.69 0 1.25.524 1.25 1.17 0 .645-.56 1.17-1.25 1.17s-1.25-.525-1.25-1.17c0-.646.56-1.17 1.25-1.17zM11.125 8c0-.645-.56-1.17-1.25-1.17s-1.25.525-1.25 1.17c0 .645.56 1.17 1.25 1.17s1.25-.525 1.25-1.17z"
    })), item.name === "Extensions" ? "Extens." : item.name)))), provided.placeholder)));
  };
  var DnDList_default = DnDList;

  // src/components/Modals/Settings/index.tsx
  var SettingsModal = ({ CONFIG, updateAppConfig }) => {
    const [modalConfig, setModalConfig] = import_react22.default.useState({ ...CONFIG });
    const [versionButtonText, setVersionButtonText] = import_react22.default.useState(t("settings.versionBtn"));
    const updateConfig = (CONFIG2) => {
      updateAppConfig({ ...CONFIG2 });
      setModalConfig({ ...CONFIG2 });
    };
    const copyVersion = () => {
      Spicetify.Platform.ClipboardAPI.copy(MARKETPLACE_VERSION);
      setVersionButtonText(t("settings.versionCopied"));
      setTimeout(() => setVersionButtonText(t("settings.versionBtn")), 3e3);
    };
    const closeButton = document.querySelector("body > generic-modal button.main-trackCreditsModal-closeBtn");
    const modalOverlay = document.querySelector("body > generic-modal > div");
    if (closeButton && modalOverlay) {
      closeButton.onclick = () => location.reload();
      closeButton.setAttribute("style", "cursor: pointer;");
      modalOverlay.onclick = (e2) => {
        if (e2.target === modalOverlay) {
          location.reload();
        }
      };
    }
    const AlbumArtColorDropDowns = getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.albumArtBasedColor) ? /* @__PURE__ */ import_react22.default.createElement(import_react22.default.Fragment, null, /* @__PURE__ */ import_react22.default.createElement(ConfigRow_default, {
      name: t("settings.albumArtBasedColorsMode"),
      storageKey: "albumArtBasedColorsMode",
      modalConfig,
      updateConfig,
      type: "dropdown",
      options: ["monochromeDark", "monochromeLight", "analogicComplement", "analogic", "triad", "quad"],
      description: t("settings.albumArtColorsModeToolTip")
    }), /* @__PURE__ */ import_react22.default.createElement(ConfigRow_default, {
      name: t("settings.albumArtBasedColorsVibrancy"),
      storageKey: "albumArtBasedColorsVibrancy",
      modalConfig,
      updateConfig,
      type: "dropdown",
      options: ["desaturated", "lightVibrant", "prominent", "vibrant"],
      description: t("settings.albumArtBasedColorsVibrancyToolTip")
    })) : null;
    return /* @__PURE__ */ import_react22.default.createElement("div", {
      id: "marketplace-config-container"
    }, /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "settings-block-top"
    }, /* @__PURE__ */ import_react22.default.createElement("h2", {
      className: "settings-heading"
    }, t("settings.optionsHeading")), /* @__PURE__ */ import_react22.default.createElement(ConfigRow_default, {
      name: t("settings.starCountLabel"),
      storageKey: "stars",
      modalConfig,
      updateConfig
    }), /* @__PURE__ */ import_react22.default.createElement(ConfigRow_default, {
      name: t("settings.tagsLabel"),
      storageKey: "tags",
      modalConfig,
      updateConfig
    }), /* @__PURE__ */ import_react22.default.createElement(ConfigRow_default, {
      name: t("settings.showArchived"),
      storageKey: "showArchived",
      modalConfig,
      updateConfig
    }), /* @__PURE__ */ import_react22.default.createElement(ConfigRow_default, {
      name: t("settings.devToolsLabel"),
      storageKey: "themeDevTools",
      modalConfig,
      updateConfig
    }), /* @__PURE__ */ import_react22.default.createElement(ConfigRow_default, {
      name: t("settings.hideInstalledLabel"),
      storageKey: "hideInstalled",
      modalConfig,
      updateConfig
    }), /* @__PURE__ */ import_react22.default.createElement(ConfigRow_default, {
      name: t("settings.colourShiftLabel"),
      storageKey: "colorShift",
      modalConfig,
      updateConfig
    }), /* @__PURE__ */ import_react22.default.createElement(ConfigRow_default, {
      name: t("settings.albumArtBasedColors"),
      storageKey: "albumArtBasedColors",
      modalConfig,
      updateConfig
    }), AlbumArtColorDropDowns), /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "settings-block"
    }, /* @__PURE__ */ import_react22.default.createElement("h2", {
      className: "settings-heading"
    }, t("settings.tabsHeading")), /* @__PURE__ */ import_react22.default.createElement(DnDList_default, {
      modalConfig,
      updateConfig
    }), /* @__PURE__ */ import_react22.default.createElement("p", {
      className: "settings-tabs-description"
    }, "(", t("settings.tabsDescription"), ")")), /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "settings-block"
    }, /* @__PURE__ */ import_react22.default.createElement("h2", {
      className: "settings-heading"
    }, t("settings.resetHeading")), /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "settings-row"
    }, /* @__PURE__ */ import_react22.default.createElement("span", {
      className: "col description"
    }, t("settings.resetDescription")), /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "col action"
    }, /* @__PURE__ */ import_react22.default.createElement(Button_default, {
      onClick: () => resetMarketplace()
    }, t("settings.resetBtn"))))), /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "settings-block"
    }, /* @__PURE__ */ import_react22.default.createElement("h2", {
      className: "settings-heading"
    }, t("settings.backupHeading")), /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "settings-row"
    }, /* @__PURE__ */ import_react22.default.createElement("span", {
      className: "col description"
    }, t("settings.backupLabel")), /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "col action"
    }, /* @__PURE__ */ import_react22.default.createElement(Button_default, {
      onClick: onBackupClick
    }, t("settings.backupBtn"))))), /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "settings-block-bottom"
    }, /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "settings-row"
    }, /* @__PURE__ */ import_react22.default.createElement("span", {
      className: "col description"
    }, t("grid.spicetifyMarketplace"), " ", t("settings.versionHeading"), " ", MARKETPLACE_VERSION), /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "col action"
    }, /* @__PURE__ */ import_react22.default.createElement(Button_default, {
      onClick: copyVersion,
      classes: ["small"]
    }, versionButtonText)))));
  };
  var onBackupClick = async () => {
    const observer = new MutationObserver(async () => {
      const settingsModal = document.querySelector(".GenericModal[aria-label='Settings']");
      if (!settingsModal) {
        await sleep(100);
        openModal("BACKUP");
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    Spicetify.PopupModal.hide();
  };
  var Settings_default = SettingsModal;

  // src/components/Modals/Snippet/index.tsx
  var import_prism_core2 = __toESM(require_prism_core());
  var import_react23 = __toESM(require_react());
  var import_react_simple_code_editor2 = __toESM(require_lib());

  // node_modules/.pnpm/prismjs@1.30.0/node_modules/prismjs/components/prism-css.js
  (function(Prism2) {
    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism2.languages.css = {
      "comment": /\/\*[\s\S]*?\*\//,
      "atrule": {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          "rule": /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: "selector"
          },
          "keyword": {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
        }
      },
      "url": {
        pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: true,
        inside: {
          "function": /^url/i,
          "punctuation": /^\(|\)$/,
          "string": {
            pattern: RegExp("^" + string.source + "$"),
            alias: "url"
          }
        }
      },
      "selector": {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
        lookbehind: true
      },
      "string": {
        pattern: string,
        greedy: true
      },
      "property": {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: true
      },
      "important": /!important\b/i,
      "function": {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true
      },
      "punctuation": /[(){};:,]/
    };
    Prism2.languages.css["atrule"].inside.rest = Prism2.languages.css;
    var markup = Prism2.languages.markup;
    if (markup) {
      markup.tag.addInlined("style", "css");
      markup.tag.addAttribute("style", "css");
    }
  })(Prism);

  // src/components/Modals/Snippet/index.tsx
  var SnippetModal = (props) => {
    const PREVIEW_IMAGE_ID = "marketplace-customCSS-preview";
    const [code, setCode] = import_react23.default.useState(props.type === "ADD_SNIPPET" ? "" : props.content?.item.code || "");
    const [name, setName] = import_react23.default.useState(props.type === "ADD_SNIPPET" ? "" : props.content?.item.title || "");
    const [description, setDescription] = import_react23.default.useState(props.type === "ADD_SNIPPET" ? "" : props.content?.item.description || "");
    const [imageURL, setimageURL] = import_react23.default.useState(props.type === "ADD_SNIPPET" ? "" : props.content?.item.imageURL || "");
    const processName = () => name.replace(/\n/g, "").replaceAll(" ", "-");
    const processCode = () => code.replace(/\n/g, "\\n");
    const localStorageKey = `marketplace:installed:snippet:${processName()}`;
    const [isInstalled, setInstalled] = import_react23.default.useState(!!getLocalStorageDataFromKey(localStorageKey));
    const saveSnippet = () => {
      const processedName = processName();
      const processedDescription = description.trim();
      if (isInstalled && props.type !== "EDIT_SNIPPET") {
        Spicetify.showNotification(t("snippets.duplicateName"), true);
        return;
      }
      console.debug(`Installing snippet: ${processedName}`);
      if (props.content && props.content.item.title !== processedName) {
        console.debug(`Deleting outdated snippet: ${props.content.item.title}`);
        localStorage.removeItem(`marketplace:installed:snippet:${props.content.item.title}`);
        const installedSnippetKeys2 = getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedSnippets, []);
        const remainingInstalledSnippetKeys = installedSnippetKeys2.filter(
          (key) => key !== `marketplace:installed:snippet:${props.content?.item.title}`
        );
        localStorage.setItem(LOCALSTORAGE_KEYS.installedSnippets, JSON.stringify(remainingInstalledSnippetKeys));
      }
      localStorage.setItem(
        localStorageKey,
        JSON.stringify({
          title: processedName,
          code,
          description: processedDescription,
          imageURL,
          custom: true
        })
      );
      const installedSnippetKeys = getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedSnippets, []);
      if (installedSnippetKeys.indexOf(localStorageKey) === -1) {
        installedSnippetKeys.push(localStorageKey);
        localStorage.setItem(LOCALSTORAGE_KEYS.installedSnippets, JSON.stringify(installedSnippetKeys));
      }
      const installedSnippets = installedSnippetKeys.map((key) => getLocalStorageDataFromKey(key));
      initializeSnippets(installedSnippets);
      Spicetify.PopupModal.hide();
      if (props.type === "EDIT_SNIPPET")
        location.reload();
    };
    let inputElement;
    const FileInputClick = () => {
      inputElement.click();
    };
    return /* @__PURE__ */ import_react23.default.createElement("div", {
      id: "marketplace-add-snippet-container"
    }, /* @__PURE__ */ import_react23.default.createElement("div", {
      className: "marketplace-customCSS-input-container"
    }, /* @__PURE__ */ import_react23.default.createElement("label", {
      htmlFor: "marketplace-custom-css"
    }, t("snippets.customCSS")), /* @__PURE__ */ import_react23.default.createElement("div", {
      className: "marketplace-code-editor-wrapper marketplace-code-editor"
    }, /* @__PURE__ */ import_react23.default.createElement(import_react_simple_code_editor2.default, {
      value: code,
      onValueChange: (code2) => setCode(code2),
      highlight: (code2) => (0, import_prism_core2.highlight)(code2, import_prism_core2.languages.css),
      textareaId: "marketplace-custom-css",
      textareaClassName: "snippet-code-editor",
      readOnly: props.type === "VIEW_SNIPPET",
      placeholder: t("snippets.customCSSPlaceholder"),
      style: {}
    }))), /* @__PURE__ */ import_react23.default.createElement("div", {
      className: "marketplace-customCSS-input-container"
    }, /* @__PURE__ */ import_react23.default.createElement("label", {
      htmlFor: "marketplace-customCSS-name-submit"
    }, t("snippets.snippetName")), /* @__PURE__ */ import_react23.default.createElement("input", {
      id: "marketplace-customCSS-name-submit",
      className: "marketplace-code-editor",
      value: name,
      onChange: (e2) => {
        if (props.type !== "VIEW_SNIPPET")
          setName(e2.target.value);
      },
      placeholder: t("snippets.snippetNamePlaceholder")
    })), /* @__PURE__ */ import_react23.default.createElement("div", {
      className: "marketplace-customCSS-input-container"
    }, /* @__PURE__ */ import_react23.default.createElement("label", {
      htmlFor: "marketplace-customCSS-description-submit"
    }, t("snippets.snippetDesc")), /* @__PURE__ */ import_react23.default.createElement("input", {
      id: "marketplace-customCSS-description-submit",
      className: "marketplace-code-editor",
      value: description,
      onChange: (e2) => {
        if (props.type !== "VIEW_SNIPPET")
          setDescription(e2.target.value);
      },
      placeholder: t("snippets.snippetDescPlaceholder")
    })), /* @__PURE__ */ import_react23.default.createElement("div", {
      className: "marketplace-customCSS-input-container"
    }, /* @__PURE__ */ import_react23.default.createElement("label", {
      htmlFor: PREVIEW_IMAGE_ID
    }, t("snippets.snippetPreview"), " ", props.type !== "VIEW_SNIPPET" && `(${t("snippets.optional")})`), imageURL && /* @__PURE__ */ import_react23.default.createElement("label", {
      htmlFor: PREVIEW_IMAGE_ID,
      style: { textAlign: "center" }
    }, /* @__PURE__ */ import_react23.default.createElement("img", {
      className: "marketplace-customCSS-image-preview",
      src: imageURL,
      alt: "Preview"
    }))), props.type !== "VIEW_SNIPPET" && /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement(Button_default, {
      onClick: FileInputClick
    }, imageURL.length ? t("snippets.changeImage") : t("snippets.addImage"), /* @__PURE__ */ import_react23.default.createElement("input", {
      id: PREVIEW_IMAGE_ID,
      type: "file",
      style: { display: "none" },
      ref: (input) => inputElement = input,
      onChange: async (event) => {
        if (event.target.files?.[0]) {
          try {
            const b64 = await fileToBase64(event.target.files?.[0]);
            if (b64) {
              setimageURL(b64);
            }
          } catch (err) {
            console.error(err);
          }
        }
      }
    })), /* @__PURE__ */ import_react23.default.createElement(Button_default, {
      onClick: saveSnippet,
      disabled: !processName() || !processCode()
    }, t("snippets.saveCSS"))), props.type === "VIEW_SNIPPET" && /* @__PURE__ */ import_react23.default.createElement(Button_default, {
      onClick: () => {
        props.callback?.();
        setInstalled(!isInstalled);
      }
    }, isInstalled ? t("remove") : t("install")));
  };
  var Snippet_default = SnippetModal;

  // src/components/Modals/ThemeDevTools/index.tsx
  var import_prism_core3 = __toESM(require_prism_core());
  var import_react24 = __toESM(require_react());
  var import_react_simple_code_editor3 = __toESM(require_lib());

  // node_modules/.pnpm/prismjs@1.30.0/node_modules/prismjs/components/prism-ini.js
  Prism.languages.ini = {
    "comment": {
      pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
      lookbehind: true
    },
    "section": {
      pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
      lookbehind: true,
      inside: {
        "section-name": {
          pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
          lookbehind: true,
          alias: "selector"
        },
        "punctuation": /\[|\]/
      }
    },
    "key": {
      pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
      lookbehind: true,
      alias: "attr-name"
    },
    "value": {
      pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
      lookbehind: true,
      alias: "attr-value",
      inside: {
        "inner-value": {
          pattern: /^("|').+(?=\1$)/,
          lookbehind: true
        }
      }
    },
    "punctuation": /=/
  };

  // src/components/Modals/ThemeDevTools/index.tsx
  var themeKey = localStorage.getItem(LOCALSTORAGE_KEYS.themeInstalled);
  var themeManifest = themeKey ? getLocalStorageDataFromKey(themeKey) : null;
  var ThemeDevToolsModal = () => {
    const [code, setCode] = import_react24.default.useState(themeManifest ? unparseIni(themeManifest.schemes) : t("devTools.noThemeInstalled"));
    return /* @__PURE__ */ import_react24.default.createElement("div", {
      id: "marketplace-theme-dev-tools-container",
      className: "marketplace-theme-dev-tools-container"
    }, /* @__PURE__ */ import_react24.default.createElement("div", {
      className: "devtools-column"
    }, /* @__PURE__ */ import_react24.default.createElement("label", {
      htmlFor: "color-ini-editor"
    }, /* @__PURE__ */ import_react24.default.createElement("h2", {
      className: "devtools-heading"
    }, t("devTools.colorIniEditor"))), /* @__PURE__ */ import_react24.default.createElement("div", {
      className: "marketplace-code-editor-wrapper marketplace-code-editor"
    }, /* @__PURE__ */ import_react24.default.createElement(import_react_simple_code_editor3.default, {
      value: code,
      onValueChange: (code2) => setCode(code2),
      highlight: (code2) => (0, import_prism_core3.highlight)(code2, import_prism_core3.languages.ini),
      textareaId: "color-ini-editor",
      textareaClassName: "color-ini-editor",
      readOnly: !themeManifest,
      placeholder: t("devTools.colorIniEditorPlaceholder"),
      style: {
        fontFamily: "monospace",
        resize: "none"
      }
    })), /* @__PURE__ */ import_react24.default.createElement(Button_default, {
      onClick: () => saveColorIni(code)
    }, t("save"))), /* @__PURE__ */ import_react24.default.createElement("div", {
      className: "devtools-column"
    }, /* @__PURE__ */ import_react24.default.createElement("h2", {
      className: "devtools-heading"
    }, t("devTools.invalidCSS")), /* @__PURE__ */ import_react24.default.createElement("div", {
      className: "marketplace-code-editor-wrapper marketplace-code-editor"
    }, getInvalidCSS().map((cssClass, index) => {
      return /* @__PURE__ */ import_react24.default.createElement("div", {
        key: index,
        className: "invalid-css-text"
      }, cssClass);
    }))));
  };
  var saveColorIni = (code) => {
    if (themeKey) {
      const colorIniParsed = parseIni(code);
      themeManifest.schemes = colorIniParsed;
      localStorage.setItem(themeKey, JSON.stringify(themeManifest));
    } else {
      Spicetify.showNotification(t("devTools.noThemeManifest"), true);
    }
  };
  var ThemeDevTools_default = ThemeDevToolsModal;

  // src/components/Modals/Update/index.tsx
  var import_react25 = __toESM(require_react());
  async function fetchLatestReleaseInfo() {
    try {
      const result = await fetch(LATEST_RELEASE_URL);
      const resultJson = await result.json();
      const { body, tag_name, message } = resultJson;
      return body && tag_name && !message ? {
        version: tag_name.replace("v", ""),
        changelog: await getMarkdownHTML(body.match(/## What's Changed([\s\S]*?)(\r\n\r|\n\n##)/)[1], "spicetify", "marketplace")
      } : null;
    } catch (error2) {
      console.error(error2);
      return null;
    }
  }
  function UpdateModal() {
    const [releaseInfo, setReleaseInfo] = import_react25.default.useState(null);
    import_react25.default.useEffect(() => {
      fetchLatestReleaseInfo().then((releaseInfo2) => setReleaseInfo(releaseInfo2));
    }, []);
    return /* @__PURE__ */ import_react25.default.createElement("div", {
      id: "marketplace-update-container"
    }, /* @__PURE__ */ import_react25.default.createElement("div", {
      id: "marketplace-update-description"
    }, /* @__PURE__ */ import_react25.default.createElement("h4", null, t("updateModal.description")), /* @__PURE__ */ import_react25.default.createElement("a", {
      href: `${RELEASES_URL}/tag/v${MARKETPLACE_VERSION}`
    }, t("updateModal.currentVersion", { version: MARKETPLACE_VERSION })), /* @__PURE__ */ import_react25.default.createElement("a", {
      href: `${RELEASES_URL}/tag/v${releaseInfo?.version}`
    }, t("updateModal.latestVersion", { version: releaseInfo?.version }))), /* @__PURE__ */ import_react25.default.createElement("hr", null), /* @__PURE__ */ import_react25.default.createElement("div", {
      id: "marketplace-update-whats-changed"
    }, /* @__PURE__ */ import_react25.default.createElement("h3", {
      className: "marketplace-update-header"
    }, t("updateModal.whatsChanged")), /* @__PURE__ */ import_react25.default.createElement("details", null, /* @__PURE__ */ import_react25.default.createElement("summary", null, t("updateModal.seeChangelog")), /* @__PURE__ */ import_react25.default.createElement("ul", {
      dangerouslySetInnerHTML: { __html: releaseInfo?.changelog ?? "" }
    }))), /* @__PURE__ */ import_react25.default.createElement("hr", null), /* @__PURE__ */ import_react25.default.createElement("div", {
      id: "marketplace-update-guide"
    }, /* @__PURE__ */ import_react25.default.createElement("h3", {
      className: "marketplace-update-header"
    }, t("updateModal.howToUpgrade")), /* @__PURE__ */ import_react25.default.createElement("a", {
      href: "https://github.com/spicetify/marketplace/wiki/Installation"
    }, t("updateModal.viewGuide"))));
  }
  var Update_default = UpdateModal;

  // src/logic/LaunchModals.tsx
  var getModalSettings = (modalType, CONFIG, updateAppConfig, props, callback) => {
    switch (modalType) {
      case "ADD_SNIPPET":
        return {
          title: t("snippets.addTitle"),
          content: /* @__PURE__ */ import_react26.default.createElement(Snippet_default, {
            type: modalType
          }),
          isLarge: true
        };
      case "EDIT_SNIPPET":
        return {
          title: t("snippets.editTitle"),
          content: /* @__PURE__ */ import_react26.default.createElement(Snippet_default, {
            type: modalType,
            content: props
          }),
          isLarge: true
        };
      case "VIEW_SNIPPET":
        return {
          title: t("snippets.viewTitle"),
          content: /* @__PURE__ */ import_react26.default.createElement(Snippet_default, {
            type: modalType,
            content: props,
            callback
          }),
          isLarge: true
        };
      case "RELOAD":
        return {
          title: t("reloadModal.title"),
          content: /* @__PURE__ */ import_react26.default.createElement(Reload_default, null),
          isLarge: false
        };
      case "SETTINGS":
        return {
          title: t("settings.title"),
          content: /* @__PURE__ */ import_react26.default.createElement(Settings_default, {
            CONFIG,
            updateAppConfig
          }),
          isLarge: true
        };
      case "THEME_DEV_TOOLS":
        return {
          title: t("devTools.title"),
          content: /* @__PURE__ */ import_react26.default.createElement(ThemeDevTools_default, null),
          isLarge: true
        };
      case "BACKUP":
        return {
          title: t("backupModal.title"),
          content: /* @__PURE__ */ import_react26.default.createElement(BackupModal_default, null),
          isLarge: true
        };
      case "UPDATE":
        return {
          title: t("updateModal.title"),
          content: /* @__PURE__ */ import_react26.default.createElement(Update_default, null),
          isLarge: true
        };
      default:
        return {
          title: "",
          content: /* @__PURE__ */ import_react26.default.createElement("div", null),
          isLarge: false
        };
    }
  };
  var openModal = (modal, CONFIG, updateAppConfig, props, callback) => {
    const triggerModal = () => {
      const modalSettings = getModalSettings(modal, CONFIG, updateAppConfig, props, callback);
      Spicetify.PopupModal.display(modalSettings);
    };
    triggerModal();
    return;
  };

  // src/components/Card/Card.tsx
  var import_react32 = __toESM(require_react());

  // src/components/Icons/DownloadIcon.tsx
  var import_react27 = __toESM(require_react());
  var DownloadIcon = () => {
    return /* @__PURE__ */ import_react27.default.createElement("svg", {
      role: "img",
      width: "16",
      height: "16",
      viewBox: "0 0 512 512",
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react27.default.createElement("path", {
      d: "M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z",
      fill: "currentColor"
    }));
  };
  var DownloadIcon_default = DownloadIcon;

  // src/components/Icons/GitHubIcon.tsx
  var import_react28 = __toESM(require_react());
  var GitHubIcon = () => {
    return /* @__PURE__ */ import_react28.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": "GitHub Icon"
    }, /* @__PURE__ */ import_react28.default.createElement("path", {
      d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
      fill: "currentColor"
    }));
  };
  var GitHubIcon_default = GitHubIcon;

  // src/components/Icons/TrashIcon.tsx
  var import_react29 = __toESM(require_react());
  var TrashIcon = () => {
    return /* @__PURE__ */ import_react29.default.createElement("svg", {
      role: "img",
      width: "16",
      height: "16",
      viewBox: "0 0 448 512",
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react29.default.createElement("path", {
      d: "M53.21 467c1.562 24.84 23.02 45 47.9 45h245.8c24.88 0 46.33-20.16 47.9-45L416 128H32L53.21 467zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z",
      fill: "currentColor"
    }));
  };
  var TrashIcon_default = TrashIcon;

  // src/components/Card/AuthorsDiv.tsx
  var import_react30 = __toESM(require_react());
  var AuthorsDiv = (props) => {
    const authorsDiv = /* @__PURE__ */ import_react30.default.createElement("div", {
      className: "marketplace-card__authors"
    }, props.authors.map((author) => {
      return /* @__PURE__ */ import_react30.default.createElement("a", {
        title: author.name,
        className: "marketplace-card__author",
        href: author.url,
        draggable: "false",
        dir: "auto",
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: (e2) => e2.stopPropagation(),
        key: author.name + author.url
      }, author.name);
    }));
    return authorsDiv;
  };
  var AuthorsDiv_default = AuthorsDiv;

  // src/components/Card/TagsDiv.tsx
  var import_react31 = __toESM(require_react());
  var TagsDiv = (props) => {
    const [expanded, setExpanded] = import_react31.default.useState(false);
    const englishTagMap = {
      [t("grid.externalJS")]: "external JS",
      [t("grid.archived")]: "archived",
      [t("grid.dark")]: "dark",
      [t("grid.light")]: "light"
    };
    const generateTags = (tags) => {
      const uniqueTags = tags.filter((item, pos, arr) => arr.indexOf(item) === pos);
      return uniqueTags.reduce((accum, tag) => {
        const englishTag = englishTagMap[tag] || tag;
        if (props.showTags || tag === t("grid.externalJS") || tag === t("grid.archived")) {
          accum.push(
            import_react31.default.createElement(
              "li",
              {
                className: "marketplace-card__tag",
                draggable: false,
                "data-tag": englishTag
              },
              tag
            )
          );
        }
        return accum;
      }, []);
    };
    let baseTags = [...props.tags ?? []].sort((a) => a === t("grid.externalJS") || a === t("grid.archived") ? -1 : 1);
    let extraTags = [];
    if (baseTags.length - MAX_TAGS > 1) {
      extraTags = props.tags.slice(MAX_TAGS);
      baseTags = baseTags.slice(0, MAX_TAGS);
    }
    return /* @__PURE__ */ import_react31.default.createElement("div", {
      className: "marketplace-card__tags-container"
    }, /* @__PURE__ */ import_react31.default.createElement("ul", {
      className: "marketplace-card__tags"
    }, generateTags(baseTags), extraTags.length && expanded ? generateTags(extraTags) : null), extraTags.length && !expanded ? /* @__PURE__ */ import_react31.default.createElement("button", {
      className: "marketplace-card__tags-more-btn",
      onClick: (e2) => {
        e2.stopPropagation();
        setExpanded(true);
      }
    }, "...") : null);
  };
  var TagsDiv_default = TagsDiv;

  // src/components/Card/Card.tsx
  var Spicetify2 = window.Spicetify;
  var Card = class extends import_react32.default.Component {
    tags;
    menuType;
    localStorageKey;
    key = null;
    type = Card;
    constructor(props) {
      super(props);
      this.menuType = Spicetify2.ReactComponent.Menu;
      this.localStorageKey = generateKey(props);
      Object.assign(this, props);
      this.tags = props.item.tags || [];
      if (props.item.include)
        this.tags.push(t("grid.externalJS"));
      if (props.item.archived)
        this.tags.push(t("grid.archived"));
      this.state = {
        installed: localStorage.getItem(this.localStorageKey) !== null,
        stars: this.props.item.stars || 0,
        tagsExpanded: false,
        externalUrl: this.props.item.user && this.props.item.repo ? `https://github.com/${this.props.item.user}/${this.props.item.repo}` : "",
        lastUpdated: this.props.item.user && this.props.item.repo ? this.props.item.lastUpdated : void 0,
        created: this.props.item.user && this.props.item.repo ? this.props.item.created : void 0
      };
    }
    isInstalled() {
      return localStorage.getItem(this.localStorageKey) !== null;
    }
    async componentDidMount() {
      if (this.props.CONFIG.activeTab === "Installed" && this.props.type !== "snippet") {
        const url = `https://api.github.com/repos/${this.props.item.user}/${this.props.item.repo}`;
        const repoData = await fetch(url).then((res) => res.json());
        const { stargazers_count, pushed_at } = repoData;
        const stateUpdate = { stars: 0, lastUpdated: void 0 };
        if (this.state.stars !== stargazers_count && this.props.CONFIG.visual.stars) {
          stateUpdate.stars = stargazers_count;
          console.debug(`Stars updated to: ${stargazers_count}`);
        }
        if (this.state.lastUpdated !== pushed_at) {
          stateUpdate.lastUpdated = pushed_at;
          console.debug(`New update pushed at: ${pushed_at}`);
          switch (this.props.type) {
            case "extension":
              this.installExtension();
              break;
            case "theme":
              this.installTheme(true);
              break;
          }
        }
      }
    }
    buttonClicked() {
      if (this.props.type === "extension") {
        if (this.isInstalled()) {
          console.debug("Extension already installed, removing");
          this.removeExtension();
        } else {
          this.installExtension();
        }
        openModal("RELOAD");
      } else if (this.props.type === "theme") {
        const themeKey2 = localStorage.getItem(LOCALSTORAGE_KEYS.themeInstalled);
        const previousTheme = themeKey2 ? getLocalStorageDataFromKey(themeKey2, {}) : {};
        if (this.isInstalled()) {
          console.debug("Theme already installed, removing");
          this.removeTheme(this.localStorageKey);
        } else {
          const localTheme = localStorage.getItem(LOCALSTORAGE_KEYS.localTheme);
          if (localTheme != null && localTheme.toLowerCase() !== "marketplace") {
            Spicetify2.showNotification(t("notifications.wrongLocalTheme"), true, 5e3);
            return;
          }
          this.removeTheme();
          this.installTheme();
        }
        if (this.props.item.manifest?.include || previousTheme.include)
          openModal("RELOAD");
      } else if (this.props.type === "app") {
        window.open(this.state.externalUrl, "_blank");
      } else if (this.props.type === "snippet") {
        if (this.isInstalled()) {
          console.debug("Snippet already installed, removing");
          this.removeSnippet();
        } else {
          this.installSnippet();
        }
      } else {
        console.error("Unknown card type");
      }
    }
    installExtension() {
      console.debug(`Installing extension ${this.localStorageKey}`);
      if (!this.props.item) {
        Spicetify2.showNotification(t("notifications.extensionInstallationError"), true);
        return;
      }
      const { manifest, title, subtitle, authors, user, repo, branch, imageURL, extensionURL, readmeURL, lastUpdated, created } = this.props.item;
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify({
          manifest,
          type: this.props.type,
          title,
          subtitle,
          authors,
          user,
          repo,
          branch,
          imageURL,
          extensionURL,
          readmeURL,
          stars: this.state.stars,
          lastUpdated,
          created
        })
      );
      const installedExtensions = getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedExtensions, []);
      if (installedExtensions.indexOf(this.localStorageKey) === -1) {
        installedExtensions.push(this.localStorageKey);
        localStorage.setItem(LOCALSTORAGE_KEYS.installedExtensions, JSON.stringify(installedExtensions));
      }
      console.debug("Installed");
      this.setState({ installed: true });
    }
    removeExtension() {
      const extValue = localStorage.getItem(this.localStorageKey);
      if (extValue) {
        console.debug(`Removing extension ${this.localStorageKey}`);
        localStorage.removeItem(this.localStorageKey);
        const installedExtensions = getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedExtensions, []);
        const remainingInstalledExtensions = installedExtensions.filter((key) => key !== this.localStorageKey);
        localStorage.setItem(LOCALSTORAGE_KEYS.installedExtensions, JSON.stringify(remainingInstalledExtensions));
        console.debug("Removed");
        this.setState({ installed: false });
      }
    }
    async installTheme(update2 = false) {
      const { item } = this.props;
      if (!item) {
        Spicetify2.showNotification(t("notifications.themeInstallationError"), true);
        return;
      }
      console.debug(`Installing theme ${this.localStorageKey}`);
      let parsedSchemes = {};
      let currentScheme = null;
      if (update2) {
        const { schemes, activeScheme: activeScheme2 } = getLocalStorageDataFromKey(this.localStorageKey, {});
        parsedSchemes = schemes;
        currentScheme = activeScheme2;
      } else if (item.schemesURL) {
        const schemesResponse = await fetch(item.schemesURL);
        const colourSchemes = await schemesResponse.text();
        parsedSchemes = parseIni(colourSchemes);
      }
      const activeScheme = currentScheme || Object.keys(parsedSchemes)[0] || null;
      console.debug(parsedSchemes, activeScheme);
      const {
        manifest,
        title,
        subtitle,
        authors,
        user,
        repo,
        branch,
        imageURL,
        extensionURL,
        readmeURL,
        cssURL,
        schemesURL,
        include,
        lastUpdated,
        created
      } = item;
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify({
          manifest,
          type: this.props.type,
          title,
          subtitle,
          authors,
          user,
          repo,
          branch,
          imageURL,
          extensionURL,
          readmeURL,
          stars: this.state.stars,
          tags: this.tags,
          cssURL,
          schemesURL,
          include,
          schemes: parsedSchemes,
          activeScheme,
          lastUpdated,
          created
        })
      );
      const installedThemes = getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedThemes, []);
      if (installedThemes.indexOf(this.localStorageKey) === -1) {
        installedThemes.push(this.localStorageKey);
        localStorage.setItem(LOCALSTORAGE_KEYS.installedThemes, JSON.stringify(installedThemes));
        localStorage.setItem(LOCALSTORAGE_KEYS.themeInstalled, this.localStorageKey);
      }
      console.debug("Installed");
      if (!item.include) {
        this.fetchAndInjectUserCSS(this.localStorageKey);
        this.props.updateActiveTheme(this.localStorageKey);
        this.props.updateColourSchemes(parsedSchemes, activeScheme);
        const name = this.props.item.manifest?.name;
        if (name)
          Spicetify2.Config.current_theme = name;
        if (activeScheme)
          Spicetify2.Config.color_scheme = activeScheme;
      }
      this.setState({ installed: true });
    }
    removeTheme(defaultThemeKey) {
      const themeKey2 = defaultThemeKey || localStorage.getItem(LOCALSTORAGE_KEYS.themeInstalled);
      const themeValue = themeKey2 && localStorage.getItem(themeKey2);
      if (themeKey2 && themeValue) {
        console.debug(`Removing theme ${themeKey2}`);
        localStorage.removeItem(themeKey2);
        localStorage.removeItem(LOCALSTORAGE_KEYS.themeInstalled);
        const installedThemes = getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedThemes, []);
        const remainingInstalledThemes = installedThemes.filter((key) => key !== themeKey2);
        localStorage.setItem(LOCALSTORAGE_KEYS.installedThemes, JSON.stringify(remainingInstalledThemes));
        console.debug("Removed");
        this.fetchAndInjectUserCSS(null);
        this.props.updateActiveTheme(null);
        this.props.updateColourSchemes(null, null);
        Spicetify2.Config.current_theme = "marketplace";
        Spicetify2.Config.color_scheme = "marketplace";
        this.setState({ installed: false });
      }
    }
    installSnippet() {
      console.debug(`Installing snippet ${this.localStorageKey}`);
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify({
          code: this.props.item.code,
          title: this.props.item.title,
          description: this.props.item.description,
          imageURL: this.props.item.imageURL
        })
      );
      const installedSnippetKeys = getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedSnippets, []);
      if (installedSnippetKeys.indexOf(this.localStorageKey) === -1) {
        installedSnippetKeys.push(this.localStorageKey);
        localStorage.setItem(LOCALSTORAGE_KEYS.installedSnippets, JSON.stringify(installedSnippetKeys));
      }
      const installedSnippets = installedSnippetKeys.map((key) => getLocalStorageDataFromKey(key));
      initializeSnippets(installedSnippets);
      this.setState({ installed: true });
    }
    removeSnippet() {
      localStorage.removeItem(this.localStorageKey);
      const installedSnippetKeys = getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedSnippets, []);
      const remainingInstalledSnippetKeys = installedSnippetKeys.filter((key) => key !== this.localStorageKey);
      localStorage.setItem(LOCALSTORAGE_KEYS.installedSnippets, JSON.stringify(remainingInstalledSnippetKeys));
      const remainingInstalledSnippets = remainingInstalledSnippetKeys.map((key) => getLocalStorageDataFromKey(key));
      initializeSnippets(remainingInstalledSnippets);
      this.setState({ installed: false });
    }
    async fetchAndInjectUserCSS(theme) {
      try {
        const tld = window.sessionStorage.getItem("marketplace-request-tld") || void 0;
        const userCSS = theme ? await parseCSS(this.props.item, tld) : void 0;
        injectUserCSS(userCSS);
      } catch (error2) {
        console.warn(error2);
      }
    }
    openReadme() {
      if (this.props.item?.manifest?.readme) {
        Spicetify2.Platform.History.push({
          pathname: `${CUSTOM_APP_PATH}/readme`,
          state: {
            data: {
              title: this.props.item.title,
              user: this.props.item.user,
              repo: this.props.item.repo,
              branch: this.props.item.branch,
              readmeURL: this.props.item.readmeURL,
              type: this.props.type,
              install: this.buttonClicked.bind(this),
              isInstalled: this.isInstalled.bind(this)
            }
          }
        });
      } else {
        Spicetify2.showNotification(t("notifications.noReadmeFile"), true);
      }
    }
    render() {
      const IS_INSTALLED = this.isInstalled();
      if (this.props.CONFIG.activeTab === "Installed" && !IS_INSTALLED) {
        console.debug("Card item not installed");
        return null;
      }
      const cardClasses = ["main-card-card", `marketplace-card--${this.props.type}`];
      if (IS_INSTALLED)
        cardClasses.push("marketplace-card--installed");
      const detail = [];
      if (this.props.type !== "snippet" && this.props.visual.stars) {
        detail.push(`\u2605 ${this.state.stars}`);
      }
      return /* @__PURE__ */ import_react32.default.createElement("div", {
        className: cardClasses.join(" "),
        onClick: () => {
          if (this.props.type === "snippet") {
            const processedName = this.props.item.title.replace(/\n/g, "");
            if (getLocalStorageDataFromKey(`marketplace:installed:snippet:${processedName}`)?.custom)
              return openModal("EDIT_SNIPPET", void 0, void 0, this.props);
            openModal("VIEW_SNIPPET", void 0, void 0, this.props, this.buttonClicked.bind(this));
          } else
            this.openReadme();
        }
      }, /* @__PURE__ */ import_react32.default.createElement("div", {
        className: "main-card-draggable",
        draggable: "true"
      }, /* @__PURE__ */ import_react32.default.createElement("div", {
        className: "main-card-imageContainer"
      }, /* @__PURE__ */ import_react32.default.createElement("div", {
        className: "main-cardImage-imageWrapper"
      }, /* @__PURE__ */ import_react32.default.createElement("div", null, /* @__PURE__ */ import_react32.default.createElement("img", {
        alt: "",
        "aria-hidden": "false",
        draggable: "false",
        loading: "lazy",
        src: this.props.item.imageURL,
        className: "main-image-image main-cardImage-image",
        onError: (e2) => {
          e2.currentTarget.setAttribute(
            "src",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
          );
          e2.currentTarget.closest(".main-cardImage-imageWrapper")?.classList.add("main-cardImage-imageWrapper--error");
        }
      })))), /* @__PURE__ */ import_react32.default.createElement("div", {
        className: "main-card-cardMetadata"
      }, /* @__PURE__ */ import_react32.default.createElement("a", {
        draggable: "false",
        title: this.props.type === "snippet" ? this.props.item.title : this.props.item.manifest?.name,
        className: "main-cardHeader-link",
        dir: "auto",
        href: this.props.type !== "snippet" ? this.state.externalUrl : SNIPPETS_PAGE_URL,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: (e2) => e2.stopPropagation()
      }, /* @__PURE__ */ import_react32.default.createElement("div", {
        className: "main-cardHeader-text main-type-balladBold"
      }, this.props.item.title)), /* @__PURE__ */ import_react32.default.createElement("div", {
        className: "main-cardSubHeader-root main-type-mestoBold marketplace-cardSubHeader"
      }, this.props.item.authors && /* @__PURE__ */ import_react32.default.createElement(AuthorsDiv_default, {
        authors: this.props.item.authors
      }), /* @__PURE__ */ import_react32.default.createElement("span", null, detail.join(" \u2012 "))), /* @__PURE__ */ import_react32.default.createElement("p", {
        className: "marketplace-card-desc"
      }, this.props.type === "snippet" ? this.props.item.description : this.props.item.manifest?.description), this.props.item.lastUpdated && /* @__PURE__ */ import_react32.default.createElement("p", {
        className: "marketplace-card-desc"
      }, t("grid.lastUpdated", {
        val: new Date(this.props.item.lastUpdated),
        formatParams: {
          val: { year: "numeric", month: "long", day: "numeric" }
        }
      })), this.tags.length ? /* @__PURE__ */ import_react32.default.createElement("div", {
        className: "marketplace-card__bottom-meta main-type-mestoBold"
      }, /* @__PURE__ */ import_react32.default.createElement(TagsDiv_default, {
        tags: this.tags,
        showTags: this.props.CONFIG.visual.tags
      })) : null, IS_INSTALLED && /* @__PURE__ */ import_react32.default.createElement("div", {
        className: "marketplace-card__bottom-meta main-type-mestoBold"
      }, "\u2713 ", t("grid.installed")), /* @__PURE__ */ import_react32.default.createElement(Tooltip, {
        label: this.props.type === "app" ? t("github") : IS_INSTALLED ? t("remove") : t("install"),
        renderInline: true
      }, /* @__PURE__ */ import_react32.default.createElement("div", {
        className: "main-card-PlayButtonContainer"
      }, /* @__PURE__ */ import_react32.default.createElement(Button_default, {
        classes: ["marketplace-installButton"],
        type: "circle",
        label: this.props.type === "app" ? t("github") : IS_INSTALLED ? t("remove") : t("install"),
        onClick: (e2) => {
          e2.stopPropagation();
          this.buttonClicked();
        }
      }, this.props.type === "app" ? /* @__PURE__ */ import_react32.default.createElement(GitHubIcon_default, null) : IS_INSTALLED ? /* @__PURE__ */ import_react32.default.createElement(TrashIcon_default, null) : /* @__PURE__ */ import_react32.default.createElement(DownloadIcon_default, null)))))));
    }
  };
  var Card_default = withTranslation()(Card);

  // src/components/Icons/LoadingIcon.tsx
  var import_react33 = __toESM(require_react());
  var LoadingIcon = () => {
    return /* @__PURE__ */ import_react33.default.createElement("svg", {
      style: { marginTop: "60px" },
      width: "100px",
      height: "100px",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      role: "img",
      "aria-label": "Loading Icon"
    }, /* @__PURE__ */ import_react33.default.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "0",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /* @__PURE__ */ import_react33.default.createElement("animate", {
      attributeName: "r",
      repeatCount: "indefinite",
      dur: "1s",
      values: "0;40",
      keyTimes: "0;1",
      keySplines: "0 0.2 0.8 1",
      calcMode: "spline",
      begin: "0s"
    }), /* @__PURE__ */ import_react33.default.createElement("animate", {
      attributeName: "opacity",
      repeatCount: "indefinite",
      dur: "1s",
      values: "1;0",
      keyTimes: "0;1",
      keySplines: "0.2 0 0.8 1",
      calcMode: "spline",
      begin: "0s"
    })), /* @__PURE__ */ import_react33.default.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "0",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /* @__PURE__ */ import_react33.default.createElement("animate", {
      attributeName: "r",
      repeatCount: "indefinite",
      dur: "1s",
      values: "0;40",
      keyTimes: "0;1",
      keySplines: "0 0.2 0.8 1",
      calcMode: "spline",
      begin: "-0.5s"
    }), /* @__PURE__ */ import_react33.default.createElement("animate", {
      attributeName: "opacity",
      repeatCount: "indefinite",
      dur: "1s",
      values: "1;0",
      keyTimes: "0;1",
      keySplines: "0.2 0 0.8 1",
      calcMode: "spline",
      begin: "-0.5s"
    })));
  };
  var LoadingIcon_default = LoadingIcon;

  // src/components/Icons/LoadMoreIcon.tsx
  var import_react34 = __toESM(require_react());
  var LoadMoreIcon = class extends import_react34.default.Component {
    render() {
      return /* @__PURE__ */ import_react34.default.createElement("button", {
        style: {
          marginTop: "60px",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer"
        },
        onClick: this.props.onClick
      }, /* @__PURE__ */ import_react34.default.createElement("p", {
        style: {
          fontSize: 100,
          lineHeight: "65px"
        }
      }, "\xBB"), /* @__PURE__ */ import_react34.default.createElement("span", {
        style: {
          fontSize: 20
        }
      }, "Load more"));
    }
  };

  // src/components/Icons/SettingsIcon.tsx
  var import_react35 = __toESM(require_react());
  var SettingsIcon = () => {
    return /* @__PURE__ */ import_react35.default.createElement("svg", {
      role: "img",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react35.default.createElement("path", {
      d: "M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z",
      fill: "currentColor"
    }));
  };
  var SettingsIcon_default = SettingsIcon;

  // src/components/Icons/ThemeDeveloperToolsIcon.tsx
  var import_react36 = __toESM(require_react());
  var ThemeDeveloperToolsIcon = () => {
    return /* @__PURE__ */ import_react36.default.createElement("svg", {
      className: "devtools-icon",
      version: "1.1",
      viewBox: "1 1 22 22",
      xmlSpace: "preserve",
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      "aria-label": "Developer Tools Icon"
    }, /* @__PURE__ */ import_react36.default.createElement("g", {
      className: "devtools-icon-internal",
      id: "grid_system"
    }), /* @__PURE__ */ import_react36.default.createElement("g", {
      id: "_icons"
    }, /* @__PURE__ */ import_react36.default.createElement("path", {
      d: "M18,12v-0.9l0.7-5.7C18.8,4.5,18.6,3.7,18,3c-0.6-0.6-1.4-1-2.2-1H8.3C7.4,2,6.6,2.4,6,3C5.4,3.7,5.2,4.5,5.3,5.4L6,11.1   V12c0,1.6,1.3,2.9,2.8,3l-0.4,2.9c-0.1,1,0.2,2.1,0.8,2.9S11,22,12,22s2-0.5,2.7-1.2s1-1.8,0.8-2.9L15.2,15   C16.7,14.9,18,13.6,18,12z M7.5,4.3C7.7,4.1,8,4,8.3,4H13v2c0,0.6,0.4,1,1,1s1-0.4,1-1V4h0.7c0.3,0,0.6,0.1,0.8,0.3   c0.2,0.2,0.3,0.5,0.2,0.8L16.1,10H7.9L7.3,5.1C7.2,4.8,7.3,4.6,7.5,4.3z M13.2,19.4c-0.6,0.7-1.8,0.7-2.4,0   c-0.3-0.4-0.4-0.8-0.4-1.3l0.5-3.2h2.3l0.5,3.2C13.7,18.6,13.5,19.1,13.2,19.4z M15,13h-1h-4H9c-0.6,0-1-0.4-1-1h8   C16,12.6,15.6,13,15,13z"
    })));
  };
  var ThemeDeveloperToolsIcon_default = ThemeDeveloperToolsIcon;

  // src/components/TabBar.tsx
  var import_react37 = __toESM(require_react());
  var import_react_dropdown2 = __toESM(require_dist());
  var TabBarItem = class extends import_react37.default.Component {
    render() {
      const { t: t2 } = this.props;
      if (!this.props.item.enabled)
        return null;
      return /* @__PURE__ */ import_react37.default.createElement("li", {
        className: "marketplace-tabBar-headerItem",
        "data-tab": this.props.item.value,
        onClick: (event) => {
          event.preventDefault();
          this.props.switchTo(this.props.item);
        }
      }, /* @__PURE__ */ import_react37.default.createElement("a", {
        "aria-current": "page",
        className: `marketplace-tabBar-headerItemLink ${this.props.item.active ? "marketplace-tabBar-active" : ""}`,
        draggable: "false",
        href: "##"
      }, /* @__PURE__ */ import_react37.default.createElement("span", {
        className: "main-type-mestoBold"
      }, t2(`tabs.${this.props.item.value}`))));
    }
  };
  var TabBarItemWithTranslation = withTranslation()(TabBarItem);
  var TabBarMore = import_react37.default.memo(function TabBarMore2({ items, switchTo }) {
    return /* @__PURE__ */ import_react37.default.createElement("li", {
      className: "marketplace-tabBar-headerItem"
    }, /* @__PURE__ */ import_react37.default.createElement(import_react_dropdown2.default, {
      className: "main-type-mestoBold",
      options: items,
      value: "More",
      placeholder: "More",
      onChange: switchTo
    }));
  });
  var TopBarContent = (props) => {
    const tabBar = (0, import_react37.useRef)(null);
    const contextHandler = (0, import_react37.useCallback)(() => {
      const topBarContent = document.querySelector(".main-topBar-topbarContentWrapper");
      if (!tabBar?.current || !topBarContent) {
        setTimeout(contextHandler, 100);
        return;
      }
      topBarContent.appendChild(tabBar.current);
    }, [tabBar.current]);
    (0, import_react37.useEffect)(() => {
      contextHandler();
      return () => (tabBar.current || document.querySelector(".marketplace-tabBar"))?.remove();
    });
    return /* @__PURE__ */ import_react37.default.createElement(TabBar, {
      ref: tabBar,
      links: props.links,
      activeLink: props.activeLink,
      switchCallback: props.switchCallback
    });
  };
  var TabBar = import_react37.default.forwardRef(({ links, activeLink, switchCallback }, ref2) => {
    const tabBarRef = (0, import_react37.useRef)(null);
    const [childrenSizes, setChildrenSizes] = (0, import_react37.useState)([0]);
    const [availableSpace, setAvailableSpace] = (0, import_react37.useState)(0);
    const [droplistItem, setDroplistItems] = (0, import_react37.useState)([0]);
    const options = links.map(({ name, enabled }) => {
      const active = name === activeLink;
      return { label: name, value: name, active, enabled };
    });
    (0, import_react37.useEffect)(() => {
      if (!tabBarRef.current)
        return;
      const observer = new ResizeObserver((entries) => setAvailableSpace(entries[0].contentRect.width));
      observer.observe(tabBarRef.current);
      return () => {
        observer.disconnect();
      };
    }, [tabBarRef.current]);
    (0, import_react37.useEffect)(() => {
      if (!tabBarRef.current)
        return;
      const children = Array.from(tabBarRef.current.children);
      const tabbarItemSizes = children.map((child) => child.clientWidth);
      setChildrenSizes(tabbarItemSizes);
    }, [links]);
    (0, import_react37.useEffect)(() => {
      if (!tabBarRef.current)
        return;
      const totalSize = childrenSizes.reduce((a, b) => a + b, 0);
      if (totalSize <= availableSpace) {
        setDroplistItems([]);
        return;
      }
      const viewMoreButtonSize = Math.max(...childrenSizes);
      const itemsToHide = [];
      let stopWidth = viewMoreButtonSize;
      childrenSizes.forEach((childWidth, i) => {
        if (availableSpace >= stopWidth + childWidth) {
          stopWidth += childWidth;
        } else {
          itemsToHide.push(i);
        }
      });
      setDroplistItems(itemsToHide);
    }, [availableSpace, childrenSizes]);
    return /* @__PURE__ */ import_react37.default.createElement("nav", {
      className: "marketplace-tabBar marketplace-tabBar-nav",
      ref: ref2
    }, /* @__PURE__ */ import_react37.default.createElement("ul", {
      className: "marketplace-tabBar-header",
      ref: tabBarRef
    }, options.filter((_, id) => !droplistItem.includes(id)).map((item) => /* @__PURE__ */ import_react37.default.createElement(TabBarItemWithTranslation, {
      key: item.value,
      item,
      switchTo: switchCallback
    })), droplistItem.length || childrenSizes.length === 0 ? /* @__PURE__ */ import_react37.default.createElement(TabBarMore, {
      items: droplistItem.map((i) => options[i]).filter((i) => i),
      switchTo: switchCallback
    }) : null));
  });

  // src/components/Grid.tsx
  var Spicetify3 = window.Spicetify;
  var Grid = class extends import_react38.default.Component {
    constructor(props) {
      super(props);
      Object.assign(this, props);
      this.updateAppConfig = props.updateAppConfig.bind(this);
      this.sortConfig = {
        by: getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.sort, "top")
      };
      this.state = {
        version: MARKETPLACE_VERSION,
        newUpdate: false,
        searchValue: "",
        cards: [],
        tabs: props.CONFIG.tabs,
        rest: true,
        endOfList: false,
        schemes: props.CONFIG.theme.schemes,
        activeScheme: props.CONFIG.theme.activeScheme,
        activeThemeKey: props.CONFIG.theme.activeThemeKey
      };
    }
    searchRequested;
    endOfList = false;
    lastScroll = 0;
    requestQueue = [];
    requestPage = 0;
    cardList = [];
    sortConfig;
    gridUpdateTabs;
    gridUpdatePostsVisual;
    checkScroll;
    CONFIG;
    updateAppConfig;
    BLACKLIST;
    SNIPPETS;
    getInstalledTheme() {
      const installedThemeKey = localStorage.getItem(LOCALSTORAGE_KEYS.themeInstalled);
      if (!installedThemeKey)
        return null;
      const installedThemeDataStr = localStorage.getItem(installedThemeKey);
      if (!installedThemeDataStr)
        return null;
      const installedTheme = JSON.parse(installedThemeDataStr);
      return installedTheme;
    }
    newRequest(amount) {
      this.cardList = [];
      const queue = [];
      this.requestQueue.unshift(queue);
      this.loadAmount(queue, amount);
    }
    appendCard(item, type, activeTab) {
      if (activeTab !== this.props.CONFIG.activeTab)
        return;
      const card = /* @__PURE__ */ import_react38.default.createElement(Card_default, {
        item,
        key: `${this.props.CONFIG.activeTab}:${item.user}:${item.title}`,
        CONFIG: this.CONFIG,
        visual: this.props.CONFIG.visual,
        type,
        activeThemeKey: this.state.activeThemeKey,
        updateColourSchemes: this.updateColourSchemes.bind(this),
        updateActiveTheme: this.setActiveTheme.bind(this)
      });
      this.cardList.push(card);
    }
    updateSort(sortByValue) {
      if (sortByValue) {
        this.sortConfig.by = sortByValue;
        localStorage.setItem(LOCALSTORAGE_KEYS.sort, sortByValue);
      }
      this.requestPage = 0;
      this.cardList = [];
      this.setState({
        cards: [],
        rest: false,
        endOfList: false
      });
      this.endOfList = false;
      this.newRequest(ITEMS_PER_REQUEST);
    }
    updateTabs() {
      this.setState({
        tabs: [...this.props.CONFIG.tabs]
      });
    }
    updatePostsVisual() {
      this.cardList = this.cardList.map((card, index) => {
        return /* @__PURE__ */ import_react38.default.createElement(Card_default, {
          ...card.props,
          key: index.toString(),
          CONFIG: this.CONFIG
        });
      });
      this.setState({ cards: [...this.cardList] });
    }
    switchTo(option) {
      this.CONFIG.activeTab = option.value;
      localStorage.setItem(LOCALSTORAGE_KEYS.activeTab, option.value);
      this.cardList = [];
      this.requestPage = 0;
      this.setState({
        cards: [],
        rest: false,
        endOfList: false
      });
      this.endOfList = false;
      this.newRequest(ITEMS_PER_REQUEST);
    }
    async loadPage(queue) {
      const activeTab = this.CONFIG.activeTab;
      switch (activeTab) {
        case "Extensions": {
          const pageOfRepos = await getTaggedRepos("spicetify-extensions", this.requestPage, this.BLACKLIST, this.CONFIG.visual.showArchived);
          const extensions = [];
          for (const repo of pageOfRepos.items) {
            const repoExtensions = await fetchExtensionManifest(
              repo.contents_url,
              repo.default_branch,
              repo.stargazers_count,
              this.CONFIG.visual.hideInstalled
            );
            if (this.requestQueue.length > 1 && queue !== this.requestQueue[0]) {
              return -1;
            }
            if (repoExtensions?.length) {
              extensions.push(
                ...repoExtensions.map((extension) => ({
                  ...extension,
                  archived: repo.archived,
                  lastUpdated: repo.pushed_at,
                  created: repo.created_at
                }))
              );
            }
          }
          sortCardItems(extensions, localStorage.getItem("marketplace:sort") || "stars");
          for (const extension of extensions) {
            this.appendCard(extension, "extension", activeTab);
          }
          this.setState({ cards: this.cardList });
          const currentPage = this.requestPage > -1 && this.requestPage ? this.requestPage : 1;
          const soFarResults = ITEMS_PER_REQUEST * (currentPage - 1) + pageOfRepos.page_count;
          const remainingResults = pageOfRepos.total_count - soFarResults;
          console.debug(`Parsed ${soFarResults}/${pageOfRepos.total_count} extensions`);
          if (remainingResults > 0)
            return currentPage + 1;
          console.debug("No more extension results");
          break;
        }
        case "Installed": {
          const installedStuff = {
            theme: getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedThemes, []),
            extension: getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedExtensions, []),
            snippet: getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.installedSnippets, [])
          };
          for (const type in installedStuff) {
            if (installedStuff[type].length) {
              const installedOfType = [];
              for (const itemKey of installedStuff[type]) {
                const installedItem = getLocalStorageDataFromKey(itemKey);
                if (this.requestQueue.length > 1 && queue !== this.requestQueue[0]) {
                  return -1;
                }
                installedOfType.push(installedItem);
              }
              sortCardItems(installedOfType, localStorage.getItem("marketplace:sort") || "stars");
              for (const item of installedOfType) {
                this.appendCard(item, type, activeTab);
              }
            }
          }
          this.setState({ cards: this.cardList });
          break;
        }
        case "Themes": {
          const pageOfRepos = await getTaggedRepos("spicetify-themes", this.requestPage, this.BLACKLIST, this.CONFIG.visual.showArchived);
          const themes = [];
          for (const repo of pageOfRepos.items) {
            const repoThemes = await fetchThemeManifest(repo.contents_url, repo.default_branch, repo.stargazers_count);
            if (this.requestQueue.length > 1 && queue !== this.requestQueue[0]) {
              return -1;
            }
            if (repoThemes?.length) {
              themes.push(
                ...repoThemes.map((theme) => ({
                  ...theme,
                  archived: repo.archived,
                  lastUpdated: repo.pushed_at,
                  created: repo.created_at
                }))
              );
            }
          }
          this.setState({ cards: this.cardList });
          sortCardItems(themes, localStorage.getItem("marketplace:sort") || "stars");
          for (const theme of themes) {
            this.appendCard(theme, "theme", activeTab);
          }
          const currentPage = this.requestPage > -1 && this.requestPage ? this.requestPage : 1;
          const soFarResults = ITEMS_PER_REQUEST * (currentPage - 1) + pageOfRepos.page_count;
          const remainingResults = pageOfRepos.total_count - soFarResults;
          console.debug(`Parsed ${soFarResults}/${pageOfRepos.total_count} themes`);
          if (remainingResults > 0)
            return currentPage + 1;
          console.debug("No more theme results");
          break;
        }
        case "Apps": {
          const pageOfRepos = await getTaggedRepos("spicetify-apps", this.requestPage, this.BLACKLIST, this.CONFIG.visual.showArchived);
          const apps = [];
          for (const repo of pageOfRepos.items) {
            const repoApps = await fetchAppManifest(repo.contents_url, repo.default_branch, repo.stargazers_count);
            if (this.requestQueue.length > 1 && queue !== this.requestQueue[0]) {
              return -1;
            }
            if (repoApps?.length) {
              apps.push(
                ...repoApps.map((app) => ({
                  ...app,
                  archived: repo.archived,
                  lastUpdated: repo.pushed_at,
                  created: repo.created_at
                }))
              );
            }
          }
          this.setState({ cards: this.cardList });
          sortCardItems(apps, localStorage.getItem("marketplace:sort") || "stars");
          for (const app of apps) {
            this.appendCard(app, "app", activeTab);
          }
          const currentPage = this.requestPage > -1 && this.requestPage ? this.requestPage : 1;
          const soFarResults = ITEMS_PER_REQUEST * (currentPage - 1) + pageOfRepos.page_count;
          const remainingResults = pageOfRepos.total_count - soFarResults;
          console.debug(`Parsed ${soFarResults}/${pageOfRepos.total_count} apps`);
          if (remainingResults > 0)
            return currentPage + 1;
          console.debug("No more app results");
          break;
        }
        case "Snippets": {
          const snippets = this.SNIPPETS;
          if (this.requestQueue.length > 1 && queue !== this.requestQueue[0]) {
            return -1;
          }
          if (snippets?.length) {
            sortCardItems(snippets, localStorage.getItem("marketplace:sort") || "stars");
            for (const snippet of snippets) {
              this.appendCard(snippet, "snippet", activeTab);
            }
            this.setState({ cards: this.cardList });
          }
        }
      }
      this.setState({ rest: true, endOfList: true });
      this.endOfList = true;
      return 0;
    }
    async loadAmount(queue, quantity = ITEMS_PER_REQUEST) {
      this.setState({ rest: false });
      const maxCardQuantity = this.cardList.length + quantity;
      this.requestPage = await this.loadPage(queue);
      while (this.requestPage && this.requestPage !== -1 && this.cardList.length < maxCardQuantity && !this.state.endOfList) {
        this.requestPage = await this.loadPage(queue);
      }
      if (this.requestPage === -1) {
        this.requestQueue = this.requestQueue.filter((a) => a !== queue);
        return;
      }
      this.requestQueue.shift();
      this.setState({ rest: true });
    }
    loadMore() {
      if (this.state.rest && !this.endOfList) {
        this.loadAmount(this.requestQueue[0], ITEMS_PER_REQUEST);
      }
    }
    updateColourSchemes(schemes, activeScheme) {
      console.debug("updateColourSchemes", schemes, activeScheme);
      this.CONFIG.theme.schemes = schemes;
      this.CONFIG.theme.activeScheme = activeScheme;
      if (activeScheme)
        Spicetify3.Config.color_scheme = activeScheme;
      if (schemes && activeScheme && schemes[activeScheme]) {
        injectColourScheme(this.CONFIG.theme.schemes[activeScheme]);
      } else {
        injectColourScheme(null);
      }
      const installedThemeKey = getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.themeInstalled);
      const installedThemeData = getLocalStorageDataFromKey(installedThemeKey);
      if (installedThemeData) {
        installedThemeData.activeScheme = activeScheme;
        console.debug(installedThemeData);
        localStorage.setItem(installedThemeKey, JSON.stringify(installedThemeData));
      } else {
        console.debug("No installed theme data");
      }
      this.setState({
        schemes,
        activeScheme
      });
    }
    async componentDidMount() {
      fetch(LATEST_RELEASE_URL).then((res) => res.json()).then(
        (result) => {
          if (result.message)
            throw result;
          this.setState({
            version: result.name
          });
          try {
            this.setState({ newUpdate: import_semver.default.gt(result.name, MARKETPLACE_VERSION) });
          } catch (err) {
            console.error(err);
          }
        },
        (error2) => {
          console.error("Failed to check for updates", error2);
        }
      );
      this.gridUpdateTabs = this.updateTabs.bind(this);
      this.gridUpdatePostsVisual = this.updatePostsVisual.bind(this);
      const viewPort = document.querySelector(".os-viewport") ?? document.querySelector("#main .main-view-container__scroll-node");
      this.checkScroll = this.isScrolledBottom.bind(this);
      if (viewPort) {
        viewPort.addEventListener("scroll", this.checkScroll);
        if (this.cardList.length) {
          if (this.lastScroll > 0) {
            viewPort.scrollTo(0, this.lastScroll);
          }
          return;
        }
      }
      this.BLACKLIST = await getBlacklist();
      this.SNIPPETS = await fetchCssSnippets(this.CONFIG.visual.hideInstalled);
      this.newRequest(ITEMS_PER_REQUEST);
    }
    componentWillUnmount() {
      this.gridUpdateTabs = this.gridUpdatePostsVisual = null;
      const viewPort = document.querySelector(".os-viewport") ?? document.querySelector("#main .main-view-container__scroll-node");
      if (viewPort) {
        this.lastScroll = viewPort.scrollTop;
        viewPort.removeEventListener("scroll", this.checkScroll);
      }
    }
    isScrolledBottom(event) {
      const viewPort = event.target;
      if (viewPort.scrollTop + viewPort.clientHeight >= viewPort.scrollHeight) {
        this.loadMore();
      }
    }
    setActiveTheme(themeKey2) {
      this.CONFIG.theme.activeThemeKey = themeKey2;
      this.setState({ activeThemeKey: themeKey2 });
    }
    getActiveScheme() {
      return this.state.activeScheme;
    }
    render() {
      const { t: t2 } = this.props;
      return /* @__PURE__ */ import_react38.default.createElement("section", {
        className: "contentSpacing"
      }, /* @__PURE__ */ import_react38.default.createElement("div", {
        className: "marketplace-header"
      }, /* @__PURE__ */ import_react38.default.createElement("div", {
        className: "marketplace-header__left"
      }, this.state.newUpdate ? /* @__PURE__ */ import_react38.default.createElement("button", {
        type: "button",
        title: t2("grid.newUpdate"),
        className: "marketplace-header-icon-button",
        id: "marketplace-update",
        onClick: () => openModal("UPDATE")
      }, /* @__PURE__ */ import_react38.default.createElement(DownloadIcon_default, null), "\xA0", this.state.version) : null, /* @__PURE__ */ import_react38.default.createElement("h2", {
        className: "marketplace-header__label"
      }, t2("grid.sort.label")), /* @__PURE__ */ import_react38.default.createElement(Sortbox_default, {
        onChange: (value) => this.updateSort(value),
        sortBoxOptions: generateSortOptions(t2),
        sortBySelectedFn: (a) => a.key === this.CONFIG.sort
      })), /* @__PURE__ */ import_react38.default.createElement("div", {
        className: "marketplace-header__right"
      }, this.CONFIG.visual.themeDevTools ? /* @__PURE__ */ import_react38.default.createElement(Tooltip, {
        label: t2("devTools.title"),
        renderInline: true,
        placement: "bottom"
      }, /* @__PURE__ */ import_react38.default.createElement("button", {
        type: "button",
        "aria-label": t2("devTools.title"),
        className: "marketplace-header-icon-button",
        onClick: () => openModal("THEME_DEV_TOOLS")
      }, /* @__PURE__ */ import_react38.default.createElement(ThemeDeveloperToolsIcon_default, null))) : null, this.state.activeScheme ? /* @__PURE__ */ import_react38.default.createElement(Sortbox_default, {
        onChange: (value) => this.updateColourSchemes(this.state.schemes, value),
        sortBoxOptions: generateSchemesOptions(this.state.schemes),
        sortBySelectedFn: (a) => a.key === this.getActiveScheme()
      }) : null, /* @__PURE__ */ import_react38.default.createElement("div", {
        className: "searchbar--bar__wrapper"
      }, /* @__PURE__ */ import_react38.default.createElement("input", {
        className: "searchbar-bar",
        type: "text",
        placeholder: `${t2("grid.search")} ${t2(`tabs.${this.CONFIG.activeTab}`)}...`,
        value: this.state.searchValue,
        onChange: (event) => {
          this.setState({ searchValue: event.target.value });
        }
      })), /* @__PURE__ */ import_react38.default.createElement(Tooltip, {
        label: t2("settings.title"),
        renderInline: true,
        placement: "bottom"
      }, /* @__PURE__ */ import_react38.default.createElement("button", {
        type: "button",
        "aria-label": t2("settings.title"),
        className: "marketplace-header-icon-button",
        id: "marketplace-settings-button",
        onClick: () => openModal("SETTINGS", this.CONFIG, this.updateAppConfig)
      }, /* @__PURE__ */ import_react38.default.createElement(SettingsIcon_default, null))))), [
        { handle: "extension", name: "Extensions" },
        { handle: "theme", name: "Themes" },
        { handle: "snippet", name: "Snippets" },
        { handle: "app", name: "Apps" }
      ].map((cardType) => {
        const cardsOfType = this.cardList.filter((card) => card.props.type === cardType.handle).filter((card) => {
          const searchValue = this.state.searchValue.trim().toLowerCase();
          const { title, user, authors, tags } = card.props.item;
          return !searchValue || title.toLowerCase().includes(searchValue) || user?.toLowerCase().includes(searchValue) || authors?.some((author) => author.name.toLowerCase().includes(searchValue)) || [...tags ?? []]?.some((tag) => tag.toLowerCase().includes(searchValue));
        }).map((card) => {
          return import_react38.default.cloneElement(card, {
            activeThemeKey: this.state.activeThemeKey,
            key: card.key
          });
        }).filter(
          (card, index, cards) => cards.findIndex((c) => c.key === card.key) === index
        );
        if (cardsOfType.length) {
          return /* @__PURE__ */ import_react38.default.createElement("div", {
            className: "marketplace-content"
          }, /* @__PURE__ */ import_react38.default.createElement("h2", {
            className: "marketplace-card-type-heading"
          }, t2(`tabs.${cardType.name}`)), /* @__PURE__ */ import_react38.default.createElement("div", {
            className: "marketplace-grid main-gridContainer-gridContainer main-gridContainer-fixedWidth",
            "data-tab": this.CONFIG.activeTab,
            "data-card-type": t2(`tabs.${cardType.name}`)
          }, cardsOfType));
        }
        return null;
      }), this.CONFIG.activeTab === "Snippets" ? /* @__PURE__ */ import_react38.default.createElement(Button_default, {
        classes: ["marketplace-add-snippet-btn"],
        onClick: () => openModal("ADD_SNIPPET")
      }, "+ ", t2("grid.addCSS")) : null, /* @__PURE__ */ import_react38.default.createElement("footer", {
        className: "marketplace-footer"
      }, !this.state.endOfList ? this.state.rest && this.state.cards.length > 0 ? /* @__PURE__ */ import_react38.default.createElement(LoadMoreIcon, {
        onClick: this.loadMore.bind(this)
      }) : /* @__PURE__ */ import_react38.default.createElement(LoadingIcon_default, null) : /* @__PURE__ */ import_react38.default.createElement("div", {
        style: { height: "64px" }
      })), /* @__PURE__ */ import_react38.default.createElement(TopBarContent, {
        switchCallback: this.switchTo.bind(this),
        links: this.CONFIG.tabs,
        activeLink: this.CONFIG.activeTab
      }));
    }
  };
  var Grid_default = withTranslation()(Grid);

  // src/components/ReadmePage.tsx
  var import_react39 = __toESM(require_react());
  var ReadmePage = class extends import_react39.default.Component {
    state = {
      isInstalled: this.props.data.isInstalled(),
      html: `<p>${this.props.t("readmePage.loading")}</p>`
    };
    getReadmeHTML = async () => {
      return fetch(this.props.data.readmeURL).then((res) => {
        if (!res.ok)
          throw Spicetify.showNotification(`${this.props.t("readmePage.errorLoading")} (HTTP ${res.status})`, true);
        return res.text();
      }).then((readmeText) => getMarkdownHTML(readmeText, this.props.data.user, this.props.data.repo)).then((html) => {
        if (!html)
          Spicetify.Platform.History.goBack();
        return html;
      }).catch((err) => {
        console.error(err);
        Spicetify.Platform.History.goBack();
        return null;
      });
    };
    componentDidMount() {
      this.getReadmeHTML().then((html) => {
        if (html == null)
          return;
        this.setState({ html });
      });
    }
    componentDidUpdate() {
      const main = document.querySelector("#marketplace-readme")?.closest("main");
      if (main) {
        const callScrollbar = setInterval(() => {
          if (!document.querySelector("#marketplace-readme")) {
            clearInterval(callScrollbar);
            main.style.removeProperty("overflow-y");
            return;
          }
          main.style.overflowY = "visible";
          main.style.overflowY = "auto";
        }, 1e3);
      }
      for (const img of Array.from(document.querySelectorAll("#marketplace-readme img"))) {
        img.addEventListener(
          "error",
          (e2) => {
            const element = e2.target;
            const originalSrc = element.getAttribute("src");
            const fixedSrc = originalSrc?.charAt(0) === "/" ? `https://raw.githubusercontent.com/${this.props.data.user}/${this.props.data.repo}/${this.props.data.branch}/${originalSrc?.slice(1)}` : `${this.props.data.readmeURL.substring(0, this.props.data.readmeURL.lastIndexOf("/"))}/${originalSrc}`;
            element.setAttribute("src", fixedSrc);
          },
          { once: true }
        );
      }
    }
    buttonContent() {
      if (this.props.data.type === "app") {
        return {
          icon: /* @__PURE__ */ import_react39.default.createElement(GitHubIcon_default, null),
          text: this.props.t("github")
        };
      }
      if (this.state.isInstalled) {
        return {
          icon: /* @__PURE__ */ import_react39.default.createElement(TrashIcon_default, null),
          text: this.props.t("remove")
        };
      }
      return {
        icon: /* @__PURE__ */ import_react39.default.createElement(DownloadIcon_default, null),
        text: this.props.t("install")
      };
    }
    render() {
      const expFeatures = JSON.parse(localStorage.getItem("spicetify-exp-features") || "{}");
      const isGlobalNav = expFeatures.enableGlobalNavBar?.value !== "control" && true;
      const tabBarMargin = {
        marginTop: isGlobalNav ? "60px" : "0px"
      };
      return /* @__PURE__ */ import_react39.default.createElement("section", {
        className: "contentSpacing"
      }, /* @__PURE__ */ import_react39.default.createElement("div", {
        className: "marketplace-header",
        style: tabBarMargin
      }, /* @__PURE__ */ import_react39.default.createElement("div", {
        className: "marketplace-header__left"
      }, /* @__PURE__ */ import_react39.default.createElement("h1", null, this.props.title)), /* @__PURE__ */ import_react39.default.createElement("div", {
        className: "marketplace-header__right"
      }, /* @__PURE__ */ import_react39.default.createElement(Button_default, {
        classes: ["marketplace-header__button"],
        onClick: (e2) => {
          e2.preventDefault();
          this.props.data.install();
          this.setState({ isInstalled: !this.state.isInstalled });
        },
        label: this.buttonContent().text
      }, this.buttonContent().icon, " ", this.buttonContent().text))), this.state.html === "<p>Loading...</p>" ? /* @__PURE__ */ import_react39.default.createElement("footer", {
        className: "marketplace-footer"
      }, /* @__PURE__ */ import_react39.default.createElement(LoadingIcon_default, null)) : /* @__PURE__ */ import_react39.default.createElement("div", {
        id: "marketplace-readme",
        className: "marketplace-readme__container",
        dangerouslySetInnerHTML: { __html: this.state.html }
      }));
    }
  };
  var ReadmePage_default = withTranslation()(ReadmePage);

  // src/resources/locales/ar.json
  var ar_default = {
    translation: {
      settings: {
        title: "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u062C\u0631",
        optionsHeading: "\u062E\u064A\u0627\u0631\u0627\u062A",
        starCountLabel: "\u0639\u062F\u062F \u0627\u0644\u0646\u062C\u0648\u0645",
        tagsLabel: "\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A",
        showArchived: "\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639\u0627\u062A \u0627\u0644\u0645\u0624\u0631\u0634\u0641\u0629",
        devToolsLabel: "\u0623\u062F\u0648\u0627\u062A \u0645\u0637\u0648\u0631\u064A \u0627\u0644\u0633\u0645\u0627\u062A",
        hideInstalledLabel: "\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0645\u062B\u0628\u062A\u0629 \u0639\u0646\u062F \u0627\u0644\u062A\u0635\u0641\u062D",
        colourShiftLabel: "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0643\u0644 \u062F\u0642\u064A\u0642\u0629",
        albumArtBasedColors: "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u063A\u0644\u0627\u0641 \u0627\u0644\u0623\u0644\u0628\u0648\u0645",
        albumArtBasedColorsMode: "\u0648\u0636\u0639 \u0646\u0638\u0627\u0645 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 (\u0648\u0627\u062C\u0647\u0629 \u0628\u0631\u0645\u062C\u0629 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0645\u0644\u0648\u0646\u0629 (API))",
        albumArtBasedColorsVibrancy: "\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0645\u0623\u062E\u0648\u0630 \u0645\u0646 \u063A\u0644\u0627\u0641 \u0627\u0644\u0623\u0644\u0628\u0648\u0645",
        albumArtBasedColorsVibrancyToolTip: "\u0645\u0634\u0628\u0639 \u0642\u0644\u064A\u0644\u064B\u0627: \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0623\u0643\u062B\u0631 \u0628\u0631\u0648\u0632\u064B\u0627 \u0648\u0644\u0643\u0646 \u0645\u0639 \u0633\u0637\u0648\u0639 \u0623\u0642\u0644 \u0628\u0643\u062B\u064A\u0631 \n \u0633\u0627\u0637\u0639 \u062E\u0641\u064A\u0641: \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0623\u0643\u062B\u0631 \u062D\u064A\u0648\u064A\u0629 \u0648\u0644\u0643\u0646 \u0645\u0639 \u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u0633\u0637\u0648\u0639 \u0642\u0644\u064A\u0644\u064B\u0627 \n \u0628\u0627\u0631\u0632: \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0623\u0643\u062B\u0631 \u0628\u0631\u0648\u0632\u064B\u0627 \u0641\u064A \u063A\u0644\u0627\u0641 \u0627\u0644\u0623\u0644\u0628\u0648\u0645 \n \u062D\u064A\u0648\u064A: \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0623\u0643\u062B\u0631 \u062D\u064A\u0648\u064A\u0629 \u0641\u064A \u063A\u0644\u0627\u0641 \u0627\u0644\u0623\u0644\u0628\u0648\u0645",
        albumArtColorsModeToolTip: "\u0623\u062D\u0627\u062F\u064A \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u062F\u0627\u0643\u0646: \u0646\u0638\u0627\u0645 \u0623\u0644\u0648\u0627\u0646 \u064A\u0639\u062A\u0645\u062F \u0628\u0634\u0643\u0644 \u0645\u0628\u0627\u0634\u0631 \u0639\u0644\u0649 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0627\u0644\u0645\u062D\u062F\u062F\u060C \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0638\u0644\u0627\u0644 \u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0648\u062F\u0645\u062C \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0631\u0645\u0627\u062F\u064A \u0644\u0625\u0646\u0634\u0627\u0621 \u0646\u0638\u0627\u0645 \u0623\u0644\u0648\u0627\u0646\u060C \u0648\u0647\u0630\u0627 \u0647\u0648 \u0639\u0643\u0633 \u0646\u0638\u0627\u0645 \u0623\u062D\u0627\u062F\u064A \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0641\u0627\u062A\u062D. \n \u0623\u062D\u0627\u062F\u064A \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0641\u0627\u062A\u062D: \u0646\u0638\u0627\u0645 \u0623\u0644\u0648\u0627\u0646 \u064A\u0639\u062A\u0645\u062F \u0628\u0634\u0643\u0644 \u0645\u0628\u0627\u0634\u0631 \u0639\u0644\u0649 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0627\u0644\u0645\u062D\u062F\u062F\u060C \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0638\u0644\u0627\u0644 \u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0648\u062F\u0645\u062C \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0631\u0645\u0627\u062F\u064A \u0644\u0625\u0646\u0634\u0627\u0621 \u0646\u0638\u0627\u0645 \u0623\u0644\u0648\u0627\u0646. \u0633\u062A\u0643\u0648\u0646 \u062E\u0644\u0641\u064A\u0629 \u0623\u062D\u0627\u062F\u064A \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0641\u0627\u062A\u062D \u0647\u064A \u0644\u0648\u0646 \u0627\u0644\u0645\u0642\u062F\u0645\u0629 \u0623\u0648 \u0627\u0644\u0646\u0635 \u0641\u064A \u0646\u0638\u0627\u0645 \u0623\u062D\u0627\u062F\u064A \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u062F\u0627\u0643\u0646 \u0648\u0627\u0644\u0639\u0643\u0633 \u0635\u062D\u064A\u062D. \n \u062A\u0646\u0627\u0638\u0631\u064A: \u0646\u0638\u0627\u0645 \u0623\u0644\u0648\u0627\u0646 \u064A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0627\u0644\u0645\u062D\u062F\u062F\u060C \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0645\u062C\u0627\u0648\u0631\u0629 \u0644\u0644\u0648\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0639\u0644\u0649 \u0639\u062C\u0644\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646. \n \u062A\u0646\u0627\u0638\u0631\u064A \u062A\u0643\u0645\u064A\u0644\u064A: \u0646\u0638\u0627\u0645 \u0623\u0644\u0648\u0627\u0646 \u064A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0627\u0644\u0645\u062D\u062F\u062F\u060C \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0645\u062C\u0627\u0648\u0631\u0629 \u0644\u0644\u0648\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0639\u0644\u0649 \u0639\u062C\u0644\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u062A\u0643\u0645\u064A\u0644\u064A. \n \u062B\u0644\u0627\u062B\u064A: \u0646\u0638\u0627\u0645 \u0623\u0644\u0648\u0627\u0646 \u064A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0627\u0644\u0645\u062D\u062F\u062F\u060C \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629 \u0639\u0644\u0649 \u0639\u062C\u0644\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0627\u0644\u062A\u064A \u062A\u0643\u0648\u0646 \u0645\u062A\u0633\u0627\u0648\u064A\u0629 \u0627\u0644\u0628\u0639\u062F \u0639\u0646 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A. \n \u0631\u0628\u0627\u0639\u064A: \u0646\u0638\u0627\u0645 \u0623\u0644\u0648\u0627\u0646 \u064A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0627\u0644\u0645\u062D\u062F\u062F\u060C \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629 \u0639\u0644\u0649 \u0639\u062C\u0644\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0627\u0644\u062A\u064A \u062A\u0628\u0639\u062F 90 \u062F\u0631\u062C\u0629 \u0639\u0646 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A.",
        tabsHeading: "\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062A\u0628\u0648\u064A\u0628",
        tabsDescription: "\u0627\u0633\u062D\u0628 \u0648\u0623\u0641\u0644\u062A \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0631\u062A\u064A\u0628\u060C \u0627\u0646\u0642\u0631 \u0644\u0644\u062A\u0645\u0643\u064A\u0646/\u0627\u0644\u062A\u0639\u0637\u064A\u0644",
        resetHeading: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0636\u0628\u0637",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "\u0625\u0644\u063A\u0627\u0621 \u062A\u062B\u0628\u064A\u062A \u062C\u0645\u064A\u0639 \u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062A \u0648\u0627\u0644\u0633\u0645\u0627\u062A\u060C \u0648\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u062A\u0641\u0636\u064A\u0644\u0627\u062A",
        backupHeading: "\u0646\u0633\u062E \u0627\u062D\u062A\u064A\u0627\u0637\u064A/\u0627\u0633\u062A\u0639\u0627\u062F\u0629",
        backupLabel: "\u0646\u0633\u062E \u0627\u062D\u062A\u064A\u0627\u0637\u064A \u0623\u0648 \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u062C\u0645\u064A\u0639 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062A\u062C\u0631. \u0644\u0627 \u064A\u062A\u0636\u0645\u0646 \u0630\u0644\u0643 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0623\u064A \u0634\u064A\u0621 \u062A\u0645 \u062A\u062B\u0628\u064A\u062A\u0647 \u0639\u0628\u0631 \u0627\u0644\u0645\u062A\u062C\u0631.",
        backupBtn: "\u0641\u062A\u062D",
        versionHeading: "\u0627\u0644\u0625\u0635\u062F\u0627\u0631",
        versionBtn: "\u0646\u0633\u062E",
        versionCopied: "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E"
      },
      tabs: {
        Extensions: "\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062A",
        Themes: "\u0627\u0644\u0633\u0645\u0627\u062A",
        Snippets: "\u0627\u0644\u0645\u0642\u062A\u0637\u0641\u0627\u062A",
        Apps: "\u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A",
        Installed: "\u0627\u0644\u0645\u062B\u0628\u062A\u0629"
      },
      snippets: {
        addTitle: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0642\u062A\u0637\u0641",
        duplicateName: "\u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u0645 \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0627\u0644\u0641\u0639\u0644!",
        editTitle: "\u062A\u0639\u062F\u064A\u0644 \u0645\u0642\u062A\u0637\u0641",
        viewTitle: "\u0639\u0631\u0636 \u0645\u0642\u062A\u0637\u0641",
        customCSS: "CSS \u0645\u062E\u0635\u0635",
        customCSSPlaceholder: "\u0623\u062F\u062E\u0644 CSS \u0627\u0644\u0645\u062E\u0635\u0635 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0647\u0646\u0627! \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u064A\u0647\u0627 \u0641\u064A \u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u0628\u0648\u064A\u0628 \u0627\u0644\u0645\u062B\u0628\u062A\u0629 \u0644\u0644\u0625\u062F\u0627\u0631\u0629.",
        snippetName: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0642\u062A\u0637\u0641",
        snippetNamePlaceholder: "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645\u064B\u0627 \u0644\u0644\u0645\u0642\u062A\u0637\u0641 \u0627\u0644\u0645\u062E\u0635\u0635 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643",
        snippetDesc: "\u0648\u0635\u0641 \u0627\u0644\u0645\u0642\u062A\u0637\u0641",
        snippetDescPlaceholder: "\u0623\u062F\u062E\u0644 \u0648\u0635\u0641\u064B\u0627 \u0644\u0644\u0645\u0642\u062A\u0637\u0641 \u0627\u0644\u0645\u062E\u0635\u0635 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643",
        snippetPreview: "\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0645\u0642\u062A\u0637\u0641",
        optional: "\u0627\u062E\u062A\u064A\u0627\u0631\u064A",
        addImage: "\u0625\u0636\u0627\u0641\u0629 \u0635\u0648\u0631\u0629",
        changeImage: "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0635\u0648\u0631\u0629",
        saveCSS: "\u062D\u0641\u0638 CSS"
      },
      reloadModal: {
        title: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
        description: "\u064A\u062C\u0628 \u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0641\u062D\u0629 \u0644\u0625\u0643\u0645\u0627\u0644 \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629.",
        reloadNow: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0622\u0646",
        reloadLater: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0644\u0627\u062D\u0642\u064B\u0627"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "\u062A\u0645 \u0646\u0633\u062E \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629",
        noDataPasted: "\u0644\u0645 \u064A\u062A\u0645 \u0644\u0635\u0642 \u0623\u064A \u0628\u064A\u0627\u0646\u0627\u062A",
        invalidJSON: "JSON \u063A\u064A\u0631 \u0635\u0627\u0644\u062D",
        inputLabel: "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u062C\u0631",
        inputPlaceholder: "\u0627\u0646\u0633\u062E/\u0623\u0644\u0635\u0642 \u0625\u0639\u062F\u0627\u062F\u0627\u062A\u0643 \u0647\u0646\u0627",
        exportBtn: "\u062A\u0635\u062F\u064A\u0631",
        importBtn: "\u0627\u0633\u062A\u064A\u0631\u0627\u062F",
        fileImportBtn: "\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0645\u0646 \u0645\u0644\u0641"
      },
      devTools: {
        title: "\u0623\u062F\u0648\u0627\u062A \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0633\u0645\u0627\u062A",
        noThemeInstalled: "\u062E\u0637\u0623: \u0644\u0645 \u064A\u062A\u0645 \u062A\u062B\u0628\u064A\u062A \u0623\u064A \u0633\u0645\u0629 \u0645\u0646 \u0627\u0644\u0645\u062A\u062C\u0631",
        noThemeManifest: "\u062E\u0637\u0623: \u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646 \u0627\u0644\u0633\u0645\u0629",
        colorIniEditor: "\u0645\u062D\u0631\u0631 Color.ini",
        colorIniEditorPlaceholder: "[\u0627\u0633\u0645-\u0646\u0638\u0627\u0645-\u0627\u0644\u0623\u0644\u0648\u0627\u0646-\u0627\u0644\u062E\u0627\u0635-\u0628\u0643]",
        invalidCSS: "CSS \u063A\u064A\u0631 \u0635\u0627\u0644\u062D"
      },
      updateModal: {
        title: "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u062A\u062C\u0631",
        description: "\u0642\u0645 \u0628\u062A\u062D\u062F\u064A\u062B \u0645\u062A\u062C\u0631 \u0633\u0628\u064A\u0627\u0633\u064A\u062A\u064A\u0641\u064A \u0644\u062A\u0644\u0642\u064A \u0645\u064A\u0632\u0627\u062A \u062C\u062F\u064A\u062F\u0629 \u0648\u0625\u0635\u0644\u0627\u062D \u0627\u0644\u0623\u062E\u0637\u0627\u0621.",
        currentVersion: "\u0627\u0644\u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u062D\u0627\u0644\u064A: {{\u0625\u0635\u062F\u0627\u0631}}",
        latestVersion: "\u0623\u062D\u062F\u062B \u0625\u0635\u062F\u0627\u0631: {{\u0625\u0635\u062F\u0627\u0631}}",
        whatsChanged: "\u0645\u0627 \u0627\u0644\u0630\u064A \u062A\u063A\u064A\u0631",
        seeChangelog: "\u0639\u0631\u0636 \u0633\u062C\u0644 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A",
        howToUpgrade: "\u0643\u064A\u0641\u064A\u0629 \u0627\u0644\u062A\u0631\u0642\u064A\u0629",
        viewGuide: "\u0639\u0631\u0636 \u0627\u0644\u062F\u0644\u064A\u0644"
      },
      grid: {
        spicetifyMarketplace: "\u0645\u062A\u062C\u0631 \u0633\u0628\u064A\u0627\u0633\u064A\u062A\u064A\u0641\u064A",
        newUpdate: "\u062A\u062D\u062F\u064A\u062B \u062C\u062F\u064A\u062F",
        addCSS: "\u0625\u0636\u0627\u0641\u0629 CSS",
        search: "\u0628\u062D\u062B",
        installed: "\u0645\u062B\u0628\u062A\u0629",
        lastUpdated: "\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B {{val, datetime}}",
        externalJS: "JS \u062E\u0627\u0631\u062C\u064A",
        archived: "\u0645\u0624\u0631\u0634\u0641\u0629",
        dark: "\u062F\u0627\u0643\u0646",
        light: "\u0641\u0627\u062A\u062D",
        sort: {
          label: "\u0641\u0631\u0632 \u062D\u0633\u0628:",
          stars: "\u0627\u0644\u0646\u062C\u0648\u0645",
          newest: "\u0627\u0644\u0623\u062D\u062F\u062B",
          oldest: "\u0627\u0644\u0623\u0642\u062F\u0645",
          lastUpdated: "\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B",
          mostStale: "\u0627\u0644\u0623\u0643\u062B\u0631 \u062A\u0642\u0627\u062F\u0645\u064B\u0627",
          aToZ: "\u0623-\u064A",
          zToA: "\u064A-\u0623"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - \u0627\u0642\u0631\u0623\u0646\u064A",
        loading: "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0645\u064A\u0644...",
        errorLoading: "README \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0644\u0641 \u0627\u0642\u0631\u0623\u0646\u064A"
      },
      github: "\u063A\u064A\u062B\u0628",
      install: "\u062A\u062B\u0628\u064A\u062A",
      remove: "\u0625\u0632\u0627\u0644\u0629",
      save: "\u062D\u0641\u0638",
      colour_one: "\u0644\u0648\u0646",
      colour_other: "\u0623\u0644\u0648\u0627\u0646",
      favourite: "\u0645\u0641\u0636\u0644",
      notifications: {
        wrongLocalTheme: "\u064A\u064F\u0631\u062C\u0649 \u0636\u0628\u0637 \u0627\u0644\u0633\u0645\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0641\u064A config-xpui.ini \u0639\u0644\u0649 \u201D \u0627\u0644\u0645\u062A\u062C\u0631\u201C \u0644\u062A\u062B\u0628\u064A\u062A \u0627\u0644\u0633\u0645\u0627\u062A \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u062A\u062C\u0631",
        tooManyRequests: "\u0639\u062F\u062F \u0643\u0628\u064A\u0631 \u062C\u062F\u064B\u0627 \u0645\u0646 \u0627\u0644\u0637\u0644\u0628\u0627\u062A\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631",
        noCdnConnection: "\u0627\u0644\u0645\u062A\u062C\u0631 \u063A\u064A\u0631 \u0642\u0627\u062F\u0631 \u0639\u0644\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0634\u0628\u0643\u0629 CDN. \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643",
        markdownParsingError: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0644\u064A\u0644 Markdown (HTTP {{status}})",
        noReadmeFile: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0644\u0641 \u0627\u0642\u0631\u0623\u0646\u064A README",
        themeInstallationError: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062B\u0628\u064A\u062A \u0627\u0644\u0633\u0645\u0629",
        extensionInstallationError: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062B\u0628\u064A\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629"
      }
    }
  };

  // src/resources/locales/ca.json
  var ca_default = {
    translation: {
      settings: {
        title: "Configuraci\xF3",
        optionsHeading: "Opcions",
        starCountLabel: "N\xFAmero d'estrelles",
        tagsLabel: "Etiquetes",
        devToolsLabel: "Eines per a desenvolupadors de temes",
        hideInstalledLabel: "Amagar instal\xB7lats",
        colourShiftLabel: "Canviar colors cada minut",
        albumArtBasedColors: "Canviar colors a partir de la portada de l'\xE0lbum",
        albumArtBasedColorsMode: "Mode esquema de colors (ColorApi)",
        albumArtBasedColorsVibrancy: "Colors agafats de la portada de l'\xE0lbum",
        albumArtBasedColorsVibrancyToolTip: "Desaturat:El color m\xE9s destacat per\xF2 amb molta menys bror \n Vibrant Clar: El color m\xE9s villantibrant amb la brillantor augmentada una mica \n Prominent: El color m\xE9s destacat a la portada de l'\xC0lbum \n Vibrant: El color m\xE9s vibrant a la portada de l'\xC0lbum",
        albumArtColorsModeToolTip: "Monochrome Dark: Un esquema de colors basat en el color principal seleccionat, emprant diferentes tonalitats i barrejant tons grisos per crear l'esquema de colors, aquest \xE9s l'invers de Monochrome Light. \n Monochrome Light: Un esquema de colors basat en el color principal seleccionat, emprant diferentes tonalitats i barrejant tons grisos per crear l'esquema de colors. El colors del fins de Monochrome light seria el color de primer pla en Monochrome Dark i viceversa. \n Anal\xF2gic: Un esquema de colors basat en el color principal seleccionat, emprant els colors adjacents en la roda de colors. \n Anal\xF2gic Complementari: Un esquema de colors basat en el color principal seleccionat, emprant els colors adjacents en la roda de colors i el color complementari. \n Tr\xEDada: Un esquema de colors basat en el color principal seleccionat, emprant els colors de la roda de colors que estan separats de manera equidistant del color principal. \n Quad: Un esquema de colors basat en el color principal seleccionat, emprant els colors que es troben separats 90 graus entre si en la roda de colors.",
        tabsHeading: "Pestanyes",
        tabsDescription: "Arrossegueu i deixeu anar per canviar l'ordre, feu clic per activar/desactivar",
        resetHeading: "Restablir",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "Borrar totes les extensions, temes i prefer\xE8ncies",
        backupHeading: "Fer una c\xF2pia/Reestablir des d'una c\xF2pia",
        backupLabel: "Fer una c\xF2pia o restablir totes les dades de Marketplace des d'una c\xF2pia. Aix\xF2 no inclou la configuraci\xF3 per els elements instal\xB7lats amb Marketplace.",
        backupBtn: "Obrir",
        versionHeading: "Versi\xF3",
        versionBtn: "Copiar",
        versionCopied: "Copiat"
      },
      tabs: {
        Extensions: "Extensions",
        Themes: "Temes",
        Snippets: "Fragments",
        Apps: "Aplicacions",
        Installed: "Instal\xB7lats"
      },
      snippets: {
        addTitle: "Afegir fragment",
        editTitle: "Editar fragment",
        viewTitle: "Veure fragment",
        customCSS: "CSS personalitzat",
        customCSSPlaceholder: "Crea el teu propi CSS aqui! Pots trobar-los a la pestanya d'instal\xB7lats per administrar-los.",
        snippetName: "Nom del fragment de codi",
        snippetNamePlaceholder: "Afegeix un nom al teu codi personalitzat",
        snippetDesc: "Descripci\xF3 del codi",
        snippetDescPlaceholder: "Crea una descripci\xF3 per al teu codi personalitzat",
        snippetPreview: "Vista pr\xE8via del fragment",
        optional: "Opcional",
        addImage: "Afegir imatge",
        changeImage: "Canviar imatge",
        saveCSS: "Guardar CSS"
      },
      reloadModal: {
        title: "Recarregar",
        description: "\xC9s necessari recarregar la finestra per completar aquesta operaci\xF3.",
        reloadNow: "Fes-ho ara",
        reloadLater: "Despr\xE9s"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "Configuraci\xF3 copiada al portapapers",
        noDataPasted: "No s'han enganxat dades",
        invalidJSON: "JSON inv\xE0lid",
        inputLabel: "Configuraci\xF3 de Marketplace",
        inputPlaceholder: "C\xF2pia/enganxa la teva configuraci\xF3 aqu\xED",
        exportBtn: "Exportar",
        importBtn: "Importar",
        fileImportBtn: "Importar des d'un arxiu"
      },
      devTools: {
        title: "Eines de desenvolupador de temes",
        noThemeInstalled: "Error: No hi ha cap tema de Marketplace instal\xB7lat",
        noThemeManifest: "Error: No s'ha trobat el manifest",
        colorIniEditor: "Editor de Color.ini",
        colorIniEditorPlaceholder: "[nom-de-esquema-de-color]",
        invalidCSS: "CSS inv\xE0lid"
      },
      grid: {
        spicetifyMarketplace: "Marketplace de Spicetify",
        newUpdate: "Nova Actualitzaci\xF3",
        addCSS: "Afegir CSS",
        search: "Buscar",
        installed: "Instal\xB7lat",
        lastUpdated: "\xDAltima actualizaci\xF3 {{val, datetime}}",
        externalJS: "JS extern",
        dark: "fosc",
        light: "clar"
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Readme",
        loading: "Carregant...",
        errorLoading: "Error carregant el README"
      },
      github: "GitHub",
      install: "Instal\xB7lar",
      remove: "Borrar",
      save: "Guardar",
      colour_one: "color",
      colour_other: "colors",
      favourite: "preferit"
    }
  };

  // src/resources/locales/de-DE.json
  var de_DE_default = {
    translation: {
      settings: {
        title: "Marketplace Einstellungen",
        optionsHeading: "Optionen",
        starCountLabel: "Sterne Anzahl",
        tagsLabel: "Schlagw\xF6rter",
        showArchived: "Archivierte repos anzeigen",
        devToolsLabel: "Design Entwicklerwerkzeuge",
        hideInstalledLabel: "Versteckt installierte beim durchsuchen",
        colourShiftLabel: "Jede Minute Farbe wechseln",
        albumArtBasedColors: "Farbe basierend auf Album Cover wechseln",
        albumArtBasedColorsMode: "Farbschema (ColorApi) Modus",
        albumArtBasedColorsVibrancy: "Farbe vom Album Cover \xFCbernommen",
        albumArtBasedColorsVibrancyToolTip: "Ents\xE4ttigt: Die am st\xE4rksten ausgepr\xE4gte Farbe, aber mit viel weniger Helligkeit \n Leicht lebhaft: Die am st\xE4rksten leuchtende Farbe, aber mit etwas mehr Helligkeit \n Prominent: Die Farbe, die im Albumcover am st\xE4rksten hervortritt \n Lebendig: Die lebendigste Farbe im Albumcover",
        albumArtColorsModeToolTip: "Monochrom Dunkel: Ein Farbschema, das direkt auf der ausgew\xE4hlten Hauptfarbe basiert, wobei verschiedene Schattierungen der Hauptfarbe verwendet und Graut\xF6ne beigemischt werden, um ein Farbschema zu erstellen; dies ist das Gegenteil von Monochrom Hell. \n Monochrom Hell: Ein Farbschema, das direkt auf der ausgew\xE4hlten Hauptfarbe basiert, wobei verschiedene Schattierungen der Hauptfarbe verwendet und Graut\xF6ne beigemischt werden, um ein Farbschema zu erstellen. Der Hintergrund von Monochrom hell w\xE4re die Vordergrund- oder Textfarbe bei Monochrom dunkel und umgekehrt. \n Analogisch: Ein Farbschema, das auf der ausgew\xE4hlten Hauptfarbe basiert und die Farben verwendet, die auf dem Farbkreis neben der Hauptfarbe liegen. \n Analogisch Komplement\xE4r: Ein Farbschema, das auf der ausgew\xE4hlten Hauptfarbe basiert, wobei die Farben neben der Hauptfarbe auf dem Farbkreis und die Komplement\xE4rfarbe verwendet werden. \n Dreiklang: Ein Farbschema auf der Grundlage der ausgew\xE4hlten Hauptfarbe, bei dem die Farben auf dem Farbkreis verwendet werden, die gleich weit von der Hauptfarbe entfernt sind. \n Vierer: Ein Farbschema auf der Grundlage der ausgew\xE4hlten Hauptfarbe, bei dem die Farben auf dem Farbkreis verwendet werden, die 90 Grad von der Hauptfarbe entfernt sind.",
        tabsHeading: "Register",
        tabsDescription: "Ziehen und Ablegen zum \xC4ndern der Reihenfolge, Klicken zum Aktivieren/Deaktivieren",
        resetHeading: "Zur\xFCcksetzen",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "Deinstalliere alle Erweiterungen und Themes und setze Pr\xE4ferenzen zur\xFCck",
        backupHeading: "Sicherung erstellen / Wiederherstellen",
        backupLabel: "Sichern Sie alle Marketplace-Daten oder stellen Sie sie wieder her. Dies umfasst nicht die Einstellungen f\xFCr alles, was \xFCber den Marketplace installiert wurde.",
        backupBtn: "\xD6ffnen",
        versionHeading: "Version",
        versionBtn: "Kopieren",
        versionCopied: "Kopiert"
      },
      tabs: {
        Extensions: "Erweiterungen",
        Themes: "Designs",
        Snippets: "Snippets",
        Apps: "Apps",
        Installed: "Installiert"
      },
      snippets: {
        addTitle: "Snippet hinzuf\xFCgen",
        duplicateName: "Dieser Name ist bereits vergeben!",
        editTitle: "Snippet bearbeiten",
        viewTitle: "Snippet ansehen",
        customCSS: "Benutzerdefiniertes CSS",
        customCSSPlaceholder: "Geben Sie hier Ihre eigenen benutzerdefinierten CSS ein! Sie finden sie auf der Registerkarte \u201EInstalliert\u201C f\xFCr die Verwaltung.",
        snippetName: "Snippet Name",
        snippetNamePlaceholder: "Geben Sie einen Namen f\xFCr ihr benutzerdefiniertes Snippet ein",
        snippetDesc: "Snippet Beschreibung",
        snippetDescPlaceholder: "Geben sie eine Beschreibung f\xFCr ihr benutzerdefiniertes Snippet ein",
        snippetPreview: "Snippet Vorschau",
        optional: "Optional",
        addImage: "Foto hinzuf\xFCgen",
        changeImage: "Foto \xE4ndern",
        saveCSS: "CSS speichern"
      },
      reloadModal: {
        title: "Neu laden",
        description: "Um diesen Vorgang abzuschlie\xDFen, muss die Seite neu geladen werden.",
        reloadNow: "Jetzt neu laden",
        reloadLater: "Sp\xE4ter neu laden"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "Einstellungen in die Zwischenablage kopiert",
        noDataPasted: "Keine Daten eingef\xFCgt",
        invalidJSON: "Ung\xFCltiges JSON",
        inputLabel: "Marketplace Einstellungen",
        inputPlaceholder: "Kopieren Sie Ihre Einstellungen und f\xFCgen Sie sie hier ein",
        exportBtn: "Export",
        importBtn: "Import",
        fileImportBtn: "Von Datei importieren"
      },
      devTools: {
        title: "Design Entwicklerwerkzeug",
        noThemeInstalled: "Fehler: Kein Marketplace Design installed",
        noThemeManifest: "Fehler: Kein Design-Manifest gefunden",
        colorIniEditor: "Color.ini Bearbeitung",
        colorIniEditorPlaceholder: "[your-colour-scheme-name]",
        invalidCSS: "Ung\xFCltiges CSS"
      },
      updateModal: {
        title: "Aktualisieren Sie den Marketplace",
        description: "Aktualisieren Sie den Spicetify Marketplace um neue Funktionen und Fehlerbehebungen zu erhalten.",
        currentVersion: "Derzeitige Version: {{version}}",
        latestVersion: "Neueste Version: {{version}}",
        whatsChanged: "Was hat sich ge\xE4ndert?",
        seeChangelog: "\xC4nderungsverlauf ansehen",
        howToUpgrade: "Wie man aktualisiert",
        viewGuide: "Anleitung ansehen"
      },
      grid: {
        spicetifyMarketplace: "Spicetify Marketplace",
        newUpdate: "Neues Update",
        addCSS: "CSS hinzuf\xFCgen",
        search: "Suchen",
        installed: "Installiert",
        lastUpdated: "Zuletzt aktualisiert {{val, datetime}}",
        externalJS: "Externes JS",
        archived: "archiviert",
        dark: "dunkel",
        light: "hell",
        sort: {
          label: "Sortieren nach:",
          stars: "Sterne",
          newest: "Neueste",
          oldest: "\xC4lteste",
          lastUpdated: "Zuletzt aktualisiert",
          mostStale: "Am abgestandensten",
          aToZ: "A-Z",
          zToA: "Z-A"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Les mich",
        loading: "Laden...",
        errorLoading: "Fehler beim laden von README"
      },
      github: "GitHub",
      install: "Installieren",
      remove: "Entfernen",
      save: "Speichern",
      colour_one: "Farbe",
      colour_other: "Farben",
      favourite: "Favorit",
      notifications: {
        wrongLocalTheme: "Bitte setzen Sie current_theme in config-xpui.ini auf 'marketplace', um Themen \xFCber den Marketplace zu installieren",
        tooManyRequests: "Zu viele Anfragen, beruhigen Sie sich",
        noCdnConnection: "Marketplace kann sich nicht mit dem CDN verbinden. Bitte \xFCberpr\xFCfen Sie Ihre Internetkonfiguration",
        markdownParsingError: "Fehler beim Parsen von Markdown (HTTP {{status}})",
        noReadmeFile: "README wurde nicht gefunden",
        themeInstallationError: "Beim Installieren von einem Design ist ein Fehler aufgetreten",
        extensionInstallationError: "Beim Installieren einer Erweiterung ist ein Fehler aufgetreten"
      }
    }
  };

  // src/resources/locales/en.json
  var en_default = {
    translation: {
      settings: {
        title: "Marketplace Settings",
        optionsHeading: "Options",
        starCountLabel: "Stars count",
        tagsLabel: "Tags",
        showArchived: "Show archived repos",
        devToolsLabel: "Theme developer tools",
        hideInstalledLabel: "Hide installed when browsing",
        colourShiftLabel: "Shift colours every minute",
        albumArtBasedColors: "Change colours based on album art",
        albumArtBasedColorsMode: "Colour scheme (ColorApi) mode",
        albumArtBasedColorsVibrancy: "Colour grabbed from album art",
        albumArtBasedColorsVibrancyToolTip: "Desaturated: The colour that is the most prominent but with much less brightness \n Light Vibrant: The most Vibrant colour but with the brightness amped up a tad \n Prominent: The colour that pops the most in the album art \n Vibrant: The most vibrant colour in the album art",
        albumArtColorsModeToolTip: "Monochrome Dark: A colour scheme based directly on the main colour selected, using different shades of the main colour and mixing in greys to create a colour scheme, this is the inverse of Monochrome Light. \n Monochrome Light: A colour scheme based directly on the main colour selected, using different shades of the main colour and mixing in greys to create a colour scheme. The background of monochrome light would be the foreground or text colour on Monochrome Dark and vice versa. \n Analogic: A colour scheme based on the main colour selected, using the colours adjacent to the main colour on the colour wheel. \n Analogic Complementary: A colour scheme based on the main colour selected, using the colours adjacent to the main colour on the colour wheel and the complementary colour. \n Triad: A colour scheme based on the main colour selected, using the colours on the colour wheel that are equidistant from the main colour. \n Quad: A colour scheme based on the main colour selected, using the colours on the colour wheel that are 90 degrees from the main colour.",
        tabsHeading: "Tabs",
        tabsDescription: "Drag and drop to reorder, click to enable/disable",
        resetHeading: "Reset",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "Uninstall all extensions and themes, and reset preferences",
        backupHeading: "Back up/Restore",
        backupLabel: "Back up or restore all Marketplace data. This does not include settings for anything installed via Marketplace.",
        backupBtn: "Open",
        versionHeading: "Version",
        versionBtn: "Copy",
        versionCopied: "Copied"
      },
      tabs: {
        Extensions: "Extensions",
        Themes: "Themes",
        Snippets: "Snippets",
        Apps: "Apps",
        Installed: "Installed"
      },
      snippets: {
        addTitle: "Add Snippet",
        duplicateName: "That name is already taken!",
        editTitle: "Edit Snippet",
        viewTitle: "View Snippet",
        customCSS: "Custom CSS",
        customCSSPlaceholder: "Input your own custom CSS here! You can find them in the installed tab for management.",
        snippetName: "Snippet Name",
        snippetNamePlaceholder: "Enter a name for your custom snippet",
        snippetDesc: "Snippet Description",
        snippetDescPlaceholder: "Enter a description for your custom snippet",
        snippetPreview: "Snippet Preview",
        optional: "Optional",
        addImage: "Add image",
        changeImage: "Change image",
        saveCSS: "Save CSS"
      },
      reloadModal: {
        title: "Reload",
        description: "A page reload is required to complete this operation.",
        reloadNow: "Reload now",
        reloadLater: "Reload later"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "Settings copied to clipboard",
        settingsSaved: "Settings saved to file",
        noDataPasted: "No data pasted",
        invalidJSON: "Invalid JSON",
        inputLabel: "Marketplace Settings",
        inputPlaceholder: "Copy/paste your settings here",
        exportBtn: "Export",
        importBtn: "Import",
        fileImportBtn: "Import from file"
      },
      devTools: {
        title: "Theme Dev Tools",
        noThemeInstalled: "Error: No marketplace theme installed",
        noThemeManifest: "Error: No theme manifest found",
        colorIniEditor: "Color.ini Editor",
        colorIniEditorPlaceholder: "[your-colour-scheme-name]",
        invalidCSS: "Invalid CSS"
      },
      updateModal: {
        title: "Update the Marketplace",
        description: "Update Spicetify Marketplace to receive new features and bug fixes.",
        currentVersion: "Current version: {{version}}",
        latestVersion: "Latest version: {{version}}",
        whatsChanged: "What's Changed",
        seeChangelog: "See changelog",
        howToUpgrade: "How to upgrade",
        viewGuide: "View guide"
      },
      grid: {
        spicetifyMarketplace: "Spicetify Marketplace",
        newUpdate: "New update",
        addCSS: "Add CSS",
        search: "Search",
        installed: "Installed",
        lastUpdated: "Last updated {{val, datetime}}",
        externalJS: "external JS",
        archived: "archived",
        dark: "dark",
        light: "light",
        sort: {
          label: "Sort by:",
          stars: "Stars",
          newest: "Newest",
          oldest: "Oldest",
          lastUpdated: "Last Updated",
          mostStale: "Most Stale",
          aToZ: "A-Z",
          zToA: "Z-A"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Readme",
        loading: "Loading...",
        errorLoading: "Error loading README"
      },
      github: "GitHub",
      install: "Install",
      remove: "Remove",
      save: "Save",
      colour_one: "colour",
      colour_other: "colours",
      favourite: "favourite",
      notifications: {
        wrongLocalTheme: "Please set current_theme in config-xpui.ini to 'marketplace' to install themes using the Marketplace",
        tooManyRequests: "Too many requests, cool down",
        noCdnConnection: "Marketplace is unable to connect to the CDN. Please check your Internet configuration",
        markdownParsingError: "Error parsing markdown (HTTP {{status}})",
        noReadmeFile: "No README was found",
        themeInstallationError: "There was an error installing theme",
        extensionInstallationError: "There was an error installing extension"
      }
    }
  };

  // src/resources/locales/en-US.json
  var en_US_default = {
    translation: {
      settings: {
        colourShiftLabel: "Shift colors every minute",
        albumArtBasedColors: "Change colors based on album art",
        albumArtBasedColorsMode: "Color scheme (ColorApi) mode",
        albumArtBasedColorsVibrancy: "Color grabbed from album art",
        albumArtBasedColorsVibrancyToolTip: "Desaturated: The color that is the most prominent but with much less brightness \n Light Vibrant: The most Vibrant color but with the brightness amped up a tad \n Prominent: The color that pops the most in the album art \n Vibrant: The most vibrant color in the album art",
        albumArtColorsModeToolTip: "Monochrome Dark: A color scheme based directly on the main color selected, using different shades of the main color and mixing in greys to create a color scheme, this is the inverse of Monochrome Light. \n Monochrome Light: A color scheme based directly on the main color selected, using different shades of the main color and mixing in greys to create a color scheme. The background of monochrome light would be the foreground or text color on Monochrome Dark and vice versa. \n Analogic: A color scheme based on the main color selected, using the colors adjacent to the main color on the color wheel. \n Analogic Complementary: A color scheme based on the main color selected, using the colors adjacent to the main color on the color wheel and the complementary color. \n Triad: A color scheme based on the main color selected, using the colors on the color wheel that are equidistant from the main color. \n Quad: A color scheme based on the main color selected, using the colors on the color wheel that are 90 degrees from the main color."
      },
      devTools: {
        colorIniEditorPlaceholder: "[your-color-scheme-name]"
      },
      colour_one: "color",
      colour_other: "colors",
      favourite: "favorite"
    }
  };

  // src/resources/locales/es.json
  var es_default = {
    translation: {
      settings: {
        title: "Ajustes de Marketplace",
        optionsHeading: "Opciones",
        starCountLabel: "N\xFAmero de estrellas",
        tagsLabel: "Etiquetas",
        showArchived: "Mostrar repositorios archivados",
        devToolsLabel: "Herramientas para desarrolladores de temas",
        hideInstalledLabel: "Ocultar lo instalado al navegar",
        colourShiftLabel: "Cambiar colores cada minuto",
        albumArtBasedColors: "Cambiar los colores seg\xFAn la portada del \xE1lbum",
        albumArtBasedColorsMode: "Modo de esquema de colores (ColorApi)",
        albumArtBasedColorsVibrancy: "Color obtenido de la portada del \xE1lbum",
        albumArtBasedColorsVibrancyToolTip: "Desaturado: El color m\xE1s prominente pero con mucha menos brillo \n Vibrante claro: El color m\xE1s vibrante pero con el brillo aumentado un poco \n Prominente: El color que m\xE1s destaca en la portada del \xE1lbum \n Vibrante: El color m\xE1s vibrante en la portada del \xE1lbum",
        albumArtColorsModeToolTip: "Monocromo oscuro: Un esquema de color basado directamente en el color principal seleccionado, usando diferentes tonos del color principal y mezclando con grises para crear un esquema de color, esto es lo inverso de Monocromo claro. \n Monocromo claro: Un esquema de color basado directamente en el color principal seleccionado, usando diferentes tonos del color principal y mezclando con grises para crear un esquema de color. El fondo del monocromo claro ser\xEDa el primer plano o color de texto en Monocromo oscuro y viceversa. \n Anal\xF3gico: Un esquema de color basado en el color principal seleccionado, usando los colores adyacentes al color principal en la rueda de colores. \n Complementario anal\xF3gico: Un esquema de color basado en el color principal seleccionado, usando los colores adyacentes al color principal en la rueda de colores y el color complementario. \n Tr\xEDada: Un esquema de color basado en el color principal seleccionado, usando los colores en la rueda de colores que est\xE1n equidistantes del color principal. \n Cu\xE1druple: Un esquema de color basado en el color principal seleccionado, usando los colores en la rueda de colores que est\xE1n a 90 grados del color principal.",
        tabsHeading: "Pesta\xF1as",
        tabsDescription: "Arrastre y suelte para cambiar el orden, haga clic para activar/desactivar",
        resetHeading: "Restablecer",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "Borrar todas extensiones y temas, y borrar preferencias",
        backupHeading: "Copia de seguridad/Restauraci\xF3n",
        backupLabel: "Haz una copia de seguridad o restaura todos los datos de Marketplace. Esto no incluye la configuraci\xF3n de nada instalado a trav\xE9s de Marketplace.",
        backupBtn: "Abrir",
        versionHeading: "Versi\xF3n",
        versionBtn: "Copiar",
        versionCopied: "Copiado"
      },
      tabs: {
        Extensions: "Extensiones",
        Themes: "Temas",
        Snippets: "C\xF3digos",
        Apps: "Aplicaciones",
        Installed: "Instalados"
      },
      snippets: {
        addTitle: "A\xF1adir C\xF3digo",
        duplicateName: "\xA1Ese nombre ya est\xE1 en uso!",
        editTitle: "Editar C\xF3digo",
        viewTitle: "Ver C\xF3digo",
        customCSS: "Custom CSS",
        customCSSPlaceholder: "\xA1Crea tu propio CSS aqu\xED! Puedes encontrarlos en la pesta\xF1a de instalados para administrarlos.",
        snippetName: "Nombre del c\xF3digo",
        snippetNamePlaceholder: "As\xEDgnale un nombre para tu c\xF3digo personalizado",
        snippetDesc: "Descripci\xF3n del c\xF3digo",
        snippetDescPlaceholder: "Crea una descripci\xF3n para tu c\xF3digo personalizado",
        snippetPreview: "C\xF3digo",
        optional: "Opcional",
        addImage: "A\xF1adir imagen",
        changeImage: "Cambiar imagen",
        saveCSS: "Guardar CSS"
      },
      reloadModal: {
        title: "Recargar",
        description: "Es necesario recargar la p\xE1gina para completar esta operaci\xF3n.",
        reloadNow: "Recargar ahora",
        reloadLater: "Recargar despu\xE9s"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "Ajustes copiados al portapapeles",
        noDataPasted: "No hay datos pegados",
        invalidJSON: "JSON inv\xE1lido",
        inputLabel: "Ajustes de Marketplace",
        inputPlaceholder: "Copia/pega tus ajustes aqu\xED",
        exportBtn: "Exportar",
        importBtn: "Importar",
        fileImportBtn: "Importar desde un archivo"
      },
      devTools: {
        title: "Herramientas de desarrollador de temas",
        noThemeInstalled: "Error: No se ha instalado el tema del marketplace",
        noThemeManifest: "Error: No se ha encontrado el manifiesto del tema",
        colorIniEditor: "Editor de Color.ini",
        colorIniEditorPlaceholder: "[nombre-de-esquema-de-color]",
        invalidCSS: "CSS inv\xE1lido"
      },
      updateModal: {
        title: "Actualizar el Marketplace",
        description: "Actualiza Spicetify Marketplace para recibir nuevas funciones y correcciones de errores.",
        currentVersion: "Versi\xF3n actual: {{version}}",
        latestVersion: "\xDAltima versi\xF3n: {{version}}",
        whatsChanged: "Qu\xE9 ha cambiado",
        seeChangelog: "Ver registro de cambios",
        howToUpgrade: "C\xF3mo actualizar",
        viewGuide: "Ver gu\xEDa"
      },
      grid: {
        spicetifyMarketplace: "Marketplace de Spicetify",
        newUpdate: "Nueva actualizaci\xF3n",
        addCSS: "A\xF1adir CSS",
        search: "Buscar",
        installed: "Instalado",
        lastUpdated: "\xDAltima actualizaci\xF3n {{val, datetime}}",
        externalJS: "JS externo",
        archived: "archivado",
        dark: "oscuro",
        light: "claro",
        sort: {
          label: "Ordenar por:",
          stars: "Estrellas",
          newest: "M\xE1s nuevo",
          oldest: "M\xE1s antiguo",
          lastUpdated: "\xDAltima actualizaci\xF3n",
          mostStale: "M\xE1s desactualizado",
          aToZ: "A-Z",
          zToA: "Z-A"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Readme",
        loading: "Cargando...",
        errorLoading: "Error al cargar el README"
      },
      github: "GitHub",
      install: "Instalar",
      remove: "Borrar",
      save: "Guardar",
      colour_one: "color",
      colour_other: "colores",
      favourite: "favorito",
      notifications: {
        wrongLocalTheme: "Por favor, establece current_theme en config-xpui.ini como 'marketplace' para instalar temas usando el Marketplace",
        tooManyRequests: "Demasiadas solicitudes, espera un momento",
        noCdnConnection: "Marketplace no puede conectarse al CDN. Por favor, revisa tu configuraci\xF3n de Internet",
        markdownParsingError: "Error al analizar markdown (HTTP {{status}})",
        noReadmeFile: "No se encontr\xF3 el archivo README",
        themeInstallationError: "Hubo un error al instalar el tema",
        extensionInstallationError: "Hubo un error al instalar la extensi\xF3n"
      }
    }
  };

  // src/resources/locales/et.json
  var et_default = {
    translation: {
      settings: {
        title: "Turu seaded",
        optionsHeading: "Seaded",
        starCountLabel: "T\xE4htede arv",
        tagsLabel: "Sildid",
        devToolsLabel: "Teema arendaja t\xF6\xF6riistad",
        hideInstalledLabel: "Peida sirvimisel paigaldatud",
        colourShiftLabel: "Muutke v\xE4rve iga minut",
        albumArtBasedColors: "Muutke v\xE4rve albumipildi p\xF5hjal",
        albumArtBasedColorsMode: "V\xE4rviskeemi (ColorApi) re\u017Eiim",
        albumArtBasedColorsVibrancy: "Albumipildilt haaratud v\xE4rv",
        albumArtBasedColorsVibrancyToolTip: "Desaturated: V\xE4rv, mis on k\xF5ige silmatorkavam, kuid palju v\xE4iksema heledusega \n Light vibrant: K\xF5ige erksam v\xE4rv, kuid veidi suurendatud heledusega \n Prominent: V\xE4rv, mis ilmub albumi kujunduses k\xF5ige rohkem \n Vibrant: Albumipildi k\xF5ige elavam v\xE4rv",
        albumArtColorsModeToolTip: "Monochrome dark: V\xE4rvilahendus, mis p\xF5hineb otse valitud p\xF5hiv\xE4rvil, kasutades p\xF5hiv\xE4rvi erinevaid toone ja segades v\xE4rviskeemi loomiseks halle, see on \xFChev\xE4rvlise heleda p\xF6\xF6rdv\xE4\xE4rtus. \n Monochrome light: V\xE4rvilahendus, mis p\xF5hineb otse valitud p\xF5hiv\xE4rvil, kasutades p\xF5hiv\xE4rvi erinevaid toone ja segades v\xE4rviskeemi loomiseks halle. \xDChev\xE4rvilise valguse taust oleks \xFChev\xE4rvilise tumeda esiplaani v\xF5i teksti v\xE4rv ja vastupidi. \n Analogic: Valitud p\xF5hiv\xE4rvil p\xF5hinev v\xE4rviskeem, kasutades v\xE4rviratta p\xF5hiv\xE4rviga k\xFClgnevaid v\xE4rve. \n Analogic complement: Valitud p\xF5hiv\xE4rvil p\xF5hinev v\xE4rviskeem, kasutades v\xE4rviratta p\xF5hiv\xE4rviga k\xFClgnevaid v\xE4rve ja lisav\xE4rvi. \n Triad: Valitud p\xF5hiv\xE4rvil p\xF5hinev v\xE4rviskeem, kasutades p\xF5hiv\xE4rvist v\xF5rdsel kaugusel asuvaid v\xE4rviratta v\xE4rve. \n Quad: Valitud p\xF5hiv\xE4rvil p\xF5hinev v\xE4rviskeem, kasutades v\xE4rvirattal olevaid v\xE4rve, mis on p\xF5hiv\xE4rvist 90 kraadi.",
        tabsHeading: "Vahekaardid",
        tabsDescription: "J\xE4rjekorra muutmiseks lohista ja eemalda, lubamiseks/v\xE4lja l\xFClitamiseks kl\xF5psa",
        resetHeading: "Reset",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "Uninstall all extensions and themes, and reset preferences",
        backupHeading: "Varunda/Taasta",
        backupLabel: "Varunda v\xF5i taasta k\xF5ik turu andmed. See ei h\xF5lma turu kaudu paigaldatud elementide seadeid.",
        backupBtn: "Ava",
        versionHeading: "Versioon",
        versionBtn: "Kopeeri",
        versionCopied: "Kopeeritud"
      },
      tabs: {
        Extensions: "Lisad",
        Themes: "Teemad",
        Snippets: "Katked",
        Apps: "Rakendused",
        Installed: "Paigaldatud"
      },
      snippets: {
        addTitle: "Lisa katkend",
        editTitle: "Muuda katkendit",
        viewTitle: "Vaata katkendit",
        customCSS: "Kohandatud CSS",
        customCSSPlaceholder: "Paigalda Kohandatud CSS siia! Haldamiseks leiate need paigaldatud vahekaardilt.",
        snippetName: "Katkendi nimi",
        snippetNamePlaceholder: "Lisa kohandatud katkendi nimi",
        snippetDesc: "Katkendi kirjeldus",
        snippetDescPlaceholder: "Lisa kohandatud katkendi kirjeldus",
        snippetPreview: "Katkendi eelvaade",
        optional: "valikuline",
        addImage: "Lisa pilt",
        changeImage: "Muuda pilti",
        saveCSS: "Salvesta CSS"
      },
      reloadModal: {
        title: "Laadi uuesti",
        description: "Selle toimingu l\xF5puleviimiseks on vaja leht uuesti laadida.",
        reloadNow: "Laadige kohe uuesti",
        reloadLater: "Laadige hiljem uuesti"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "Seaded kopeeriti l\xF5ikelauale",
        noDataPasted: "Andmeid pole kleebitud",
        invalidJSON: "Vale JSON",
        inputLabel: "Turu Seaded",
        inputPlaceholder: "Kopeeri/kleebi enda seaded siia",
        exportBtn: "Ekspordi",
        importBtn: "Impordi",
        fileImportBtn: "Impordi failist"
      },
      devTools: {
        title: "Teema arendust\xF6\xF6riistad",
        noThemeInstalled: "Viga: Turu teemat pole installitud",
        noThemeManifest: "Viga: Teema manifesti ei leitud",
        colorIniEditor: "Color.ini redaktor",
        colorIniEditorPlaceholder: "[teie-v\xE4rviskeemi-nimi]",
        invalidCSS: "Vigane CSS"
      },
      grid: {
        spicetifyMarketplace: "Spicetify Turg",
        newUpdate: "Uus v\xE4rskendus",
        addCSS: "Lisa CSS",
        search: "Otsi",
        installed: "Paigaldatud",
        lastUpdated: "Viimati uuendatud {{val, datetime}}",
        externalJS: "v\xE4line JS",
        dark: "tume",
        light: "hele"
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Readme",
        loading: "Laadimine...",
        errorLoading: "Viga README laadimisel"
      },
      github: "GitHub",
      install: "Paigalda",
      remove: "Eemalda",
      save: "Salvesta",
      colour_one: "v\xE4rv",
      colour_other: "v\xE4rvid",
      favourite: "lemmik"
    }
  };

  // src/resources/locales/fi.json
  var fi_default = {
    translation: {
      settings: {
        title: "Marketplacen asetukset",
        optionsHeading: "Valinnat",
        starCountLabel: "T\xE4hdet",
        tagsLabel: "Tagit",
        showArchived: "N\xE4yt\xE4 arkistoituja l\xE4hdekoodivarastoja",
        devToolsLabel: "Teeman kehitt\xE4j\xE4ty\xF6kalut",
        hideInstalledLabel: "Piilota asennetut",
        colourShiftLabel: "V\xE4ri\xE4 muutetaan joka minuutti",
        albumArtBasedColors: "Muuta v\xE4ri\xE4 albumin perusteella",
        albumArtBasedColorsMode: "V\xE4rityyli (ColorApi) tila",
        albumArtBasedColorsVibrancy: "V\xE4ri otettu albumista",
        albumArtBasedColorsVibrancyToolTip: "Kyll\xE4stelem\xE4t\xF6n: V\xE4ri, joka on n\xE4kyvin, mutta jonka kirkkaus on paljon pienempi \n Valoisa eloisa: Eloisin v\xE4ri, jonka kirkkautta on hieman lis\xE4tty \n Merkitt\xE4v\xE4: V\xE4ri, joka erottuu eniten albumin kuvituksessa \n Eloisa: Albumin kuvituksen eloisin v\xE4ri",
        albumArtColorsModeToolTip: "Tumma yksiv\xE4ri: Suoraan valittuun p\xE4\xE4v\xE4riin perustuva v\xE4rimaailma, jossa k\xE4ytet\xE4\xE4n p\xE4\xE4v\xE4rin eri s\xE4vyj\xE4 ja harmaita sekoittamalla v\xE4rimaailman luomiseksi. T\xE4m\xE4 on vaalean yksiv\xE4risen k\xE4\xE4nteinen v\xE4rimaailma. \n Vaalea yksiv\xE4ri: Suoraan valittuun p\xE4\xE4v\xE4riin perustuva v\xE4rimaailma, jossa k\xE4ytet\xE4\xE4n p\xE4\xE4v\xE4rin eri s\xE4vyj\xE4 ja harmaita sekoittamalla v\xE4rimaailman luomiseksi. Vaalean yksiv\xE4risen v\xE4rimaailman tausta olisi tumman yksiv\xE4risen v\xE4rimaailman etualan tai tekstin v\xE4ri ja p\xE4invastoin. \n Analoginen: Valittuun p\xE4\xE4v\xE4riin perustuva v\xE4rimaailma, jossa k\xE4ytet\xE4\xE4n v\xE4riympyr\xE4ss\xE4 p\xE4\xE4v\xE4rin viereisi\xE4 v\xE4rej\xE4. \n Analoginen komplementtiv\xE4ri: Valittuun p\xE4\xE4v\xE4riin perustuva v\xE4rimaailma, jossa k\xE4ytet\xE4\xE4n v\xE4riympyr\xE4ss\xE4 p\xE4\xE4v\xE4rin viereisi\xE4 v\xE4rej\xE4 ja komplementtiv\xE4ri\xE4. \n Kolmio: Valittuun p\xE4\xE4v\xE4riin perustuva v\xE4rimaailma, jossa k\xE4ytet\xE4\xE4n v\xE4riympyr\xE4n v\xE4rej\xE4, jotka ovat yht\xE4 kaukana p\xE4\xE4v\xE4rist\xE4. \n Neliv\xE4ri: Valittuun p\xE4\xE4v\xE4riin perustuva v\xE4rimaailma, jossa k\xE4ytet\xE4\xE4n v\xE4riympyr\xE4n v\xE4rej\xE4, jotka ovat 90 asteen et\xE4isyydell\xE4 p\xE4\xE4v\xE4rist\xE4.",
        tabsHeading: "Sivut",
        tabsDescription: "Ved\xE4 ja pudota uudelleen j\xE4rjestykseen, napsauta k\xE4ytt\xF6\xF6n/pois k\xE4yt\xF6st\xE4",
        resetHeading: "Palauta",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "Poista kaikki laajennukset ja teemat ja palauta asetukset",
        backupHeading: "Varmuuskopioi/Palauta",
        backupLabel: "Varmuuskopioi tai palauta kaikki Marketplacen data. T\xE4m\xE4 ei sis\xE4ll\xE4 asetuksia mit\xE4\xE4n, joka on asennettu Marketplacein kautta.",
        backupBtn: "Avaa",
        versionHeading: "Versio",
        versionBtn: "Kopioi",
        versionCopied: "Kopioitu"
      },
      tabs: {
        Extensions: "Laajennukset",
        Themes: "Teemat",
        Snippets: "Koodin p\xE4tk\xE4t",
        Apps: "Sovellukset",
        Installed: "Asennetut"
      },
      snippets: {
        addTitle: "Lis\xE4\xE4 koodin p\xE4tk\xE4",
        duplicateName: "Nimi on jo k\xE4yt\xF6ss\xE4!",
        editTitle: "Muokkaa koodin p\xE4tk\xE4\xE4",
        viewTitle: "N\xE4yt\xE4 koodin p\xE4tk\xE4",
        customCSS: "Oma CSS",
        customCSSPlaceholder: "Sy\xF6t\xE4 oma mukautettu CSS-koodisi t\xE4h\xE4n! L\xF6yd\xE4t ne hallintaa varten asennetut-v\xE4lilehdelt\xE4.",
        snippetName: "Koodin p\xE4tk\xE4n nimi",
        snippetNamePlaceholder: "Anna nimi koodin p\xE4tk\xE4lle",
        snippetDesc: "Koodin p\xE4tk\xE4n kuvaus",
        snippetDescPlaceholder: "Anna kuvaus koodin p\xE4tk\xE4lle",
        snippetPreview: "Koodin p\xE4tk\xE4n esikatselu",
        optional: "Valinnainen",
        addImage: "Lis\xE4\xE4 kuva",
        changeImage: "Vaihda kuva",
        saveCSS: "Tallenna CSS"
      },
      reloadModal: {
        title: "Lataa uudelleen",
        description: "Sivun lataaminen uudelleen on vaadittava t\xE4m\xE4n toiminnon suorittamiseksi.",
        reloadNow: "Lataa uudelleen nyt",
        reloadLater: "Lataa uudelleen my\xF6hemmin"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "Asetukset kopioitu leikep\xF6yd\xE4lle",
        noDataPasted: "Ei dataa liitetty",
        invalidJSON: "Virheellinen JSON",
        inputLabel: "Marketplacen asetukset",
        inputPlaceholder: "Kopioi/liit\xE4 asetuksesi t\xE4h\xE4n",
        exportBtn: "Vie",
        importBtn: "Tuo",
        fileImportBtn: "Tuo tiedostosta"
      },
      devTools: {
        title: "Teeman kehitt\xE4j\xE4ty\xF6kalut",
        noThemeInstalled: "Virhe: Ei Marketplace-teemaa asennettu",
        noThemeManifest: "Virhe: Ei teeman manifestia",
        colorIniEditor: "Color.ini-editori",
        colorIniEditorPlaceholder: "[sinun-v\xE4rityylisi-nimi]",
        invalidCSS: "Virheellinen CSS"
      },
      updateModal: {
        title: "P\xE4ivit\xE4 Marketplace",
        description: "P\xE4ivit\xE4 Spicetify Marketplace saadaksesi uusia ominaisuuksia ja bugikorjauksia.",
        currentVersion: "Nykyinen versio: {{version}}",
        latestVersion: "Uusin versio: {{version}}",
        whatsChanged: "Mit\xE4 on muuttunut",
        seeChangelog: "Katso muutosloki",
        howToUpgrade: "Kuinka p\xE4ivitt\xE4\xE4",
        viewGuide: "N\xE4yt\xE4 opas"
      },
      grid: {
        spicetifyMarketplace: "Spicetify Marketplace",
        newUpdate: "Uusi p\xE4ivitys",
        addCSS: "Lis\xE4\xE4 CSS",
        search: "Haku",
        installed: "Asennettu",
        lastUpdated: "Viimeisin p\xE4ivitys {{val, datetime}}",
        externalJS: "ulkoiset JS-skriptit",
        archived: "arkistoitu",
        dark: "tumma",
        light: "vaalea",
        sort: {
          label: "J\xE4rjest\xE4:",
          stars: "T\xE4hdet",
          newest: "Uusin",
          oldest: "Vanhin",
          lastUpdated: "Viimeisin p\xE4ivitys",
          mostStale: "Eniten vanhentunut",
          aToZ: "A-Z",
          zToA: "Z-A"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Readme",
        loading: "Ladataan...",
        errorLoading: "Virhe ladattaessa README"
      },
      github: "GitHub",
      install: "Asenna",
      remove: "Poista",
      save: "Tallenna",
      colour_one: "v\xE4ri",
      colour_other: "v\xE4rit",
      favourite: "suosikki",
      notifications: {
        wrongLocalTheme: "Aseta current_theme config-xpui.ini-tiedostossa 'marketplace'-arvoon k\xE4ytt\xE4\xE4ksesi Marketplace-teemoja",
        tooManyRequests: "Liian monta pyynt\xF6\xE4, odota hetki",
        noCdnConnection: "Marketplace ei pysty yhdist\xE4m\xE4\xE4n CDN:\xE4\xE4n. Tarkista internetyhteys",
        markdownParsingError: "Virhe j\xE4sent\xE4m\xE4ss\xE4 markdownia (HTTP {{status}})",
        noReadmeFile: "Ei README-tiedostoa l\xF6ytynyt",
        themeInstallationError: "Teeman asentamisessa tapahtui virhe",
        extensionInstallationError: "Laajennuksen asentamisessa tapahtui virhe"
      }
    }
  };

  // src/resources/locales/fr.json
  var fr_default = {
    translation: {
      settings: {
        title: "R\xE9glages March\xE9 Spicetify",
        optionsHeading: "Options",
        starCountLabel: "Nombres d\u2019\xE9toiles",
        tagsLabel: "Tags",
        devToolsLabel: "Outils pour les d\xE9veloppeurs de th\xE8mes",
        hideInstalledLabel: "Masquer ceux \xE9tant install\xE9s lors de la navigation",
        colourShiftLabel: "Changer de couleur chaque minutes",
        albumArtBasedColors: "Changement des couleurs bas\xE9 sur les pochettes d'albums",
        albumArtBasedColorsMode: "Mode de sch\xE9ma de couleur (ColorApi)",
        albumArtBasedColorsVibrancy: "Couleur saisie depuis les pochettes d'albums",
        albumArtBasedColorsVibrancyToolTip: "D\xE9satur\xE9: La couleur qui est la plus pro\xE9minente mais avec beaucoup moins de luminosit\xE9\nVibrations Claires: La couleur la plus vibrante, mais avec une luminosit\xE9 un peu plus forte\nPrometteur: La couleur qui ressort le plus dans la pochette de l'album\nVibrations: La couleur la plus vibrante dans la pochette de l'album",
        albumArtColorsModeToolTip: "Monochrome fonc\xE9: une palette de couleurs bas\xE9e directement sur la couleur principale s\xE9lectionn\xE9e, en utilisant diff\xE9rentes nuances de la couleur principale et en m\xE9langeant des gris pour cr\xE9er une palette de couleurs, c'est l'inverse du monochrome clair.\nMonochrome clair: Une palette de couleurs bas\xE9e directement sur la couleur principale s\xE9lectionn\xE9e, en utilisant diff\xE9rentes nuances de la couleur principale et en m\xE9langeant les gris pour cr\xE9er une palette de couleurs. L'arri\xE8re-plan d'un monochrome clair sera le premier plan ou la couleur du texte d'un monochrome fonc\xE9 et vice versa.\nAnalogique: Sch\xE9ma de couleurs bas\xE9 sur la couleur principale s\xE9lectionn\xE9e, utilisant les couleurs adjacentes \xE0 la couleur principale sur le cercle chromatique.\nAnalogique compl\xE9mentaire: Un sch\xE9ma de couleurs bas\xE9 sur la couleur principale s\xE9lectionn\xE9e, utilisant les couleurs adjacentes \xE0 la couleur principale sur le cercle chromatique et la couleur compl\xE9mentaire.\nTriade: Un sch\xE9ma de couleurs bas\xE9 sur la couleur principale s\xE9lectionn\xE9e, utilisant les couleurs \xE9quidistantes de la couleur principale sur le cercle chromatique.\nQuad: Un sch\xE9ma de couleurs bas\xE9 sur la couleur principale s\xE9lectionn\xE9e, utilisant les couleurs du cercle chromatique qui sont \xE0 90 degr\xE9s de la couleur principale.",
        tabsHeading: "Onglets",
        tabsDescription: "Glisser-d\xE9poser pour modifier l'ordre, cliquer pour activer/d\xE9sactiver",
        resetHeading: "R\xE9initialiser",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "D\xE9sinstaller toutes les extensions et tous les th\xE8mes, ainsi que l\u2019ensemble des r\xE9glages",
        backupHeading: "Sauvegarde/Restauration",
        backupLabel: "Sauvegarder ou restaurer toutes les donn\xE9es du March\xE9. Cel\xE0 n'inclue pas les r\xE9glages pour quoi que ce soit install\xE9 depuis le March\xE9.",
        backupBtn: "Ouvrir",
        versionHeading: "Version",
        versionBtn: "Copier",
        versionCopied: "Copi\xE9"
      },
      tabs: {
        Extensions: "Extensions",
        Themes: "Th\xE8mes",
        Snippets: "Bribes",
        Apps: "Applications",
        Installed: "Install\xE9(s)"
      },
      snippets: {
        addTitle: "Ajouter Bribe",
        editTitle: "\xC9diter Bribe",
        viewTitle: "Voir Bribe",
        customCSS: "CSS personnalis\xE9",
        customCSSPlaceholder: "Ins\xE9rez votre propre CSS personnalis\xE9 ici! Vous pouvez les retrouver dans l\u2019onglet Install\xE9 pour les g\xE9rer.",
        snippetName: "Nom de la bribe",
        snippetNamePlaceholder: "Entrer un nom pour votre bribe personnalis\xE9e",
        snippetDesc: "Description de la bribe",
        snippetDescPlaceholder: "Entrez une description pour votre bribe personnalis\xE9e",
        snippetPreview: "Pr\xE9visualiser la bribe",
        optional: "Optionnel",
        addImage: "Ajouter une image",
        changeImage: "Changer l\u2019image",
        saveCSS: "Enregistrer le CSS"
      },
      reloadModal: {
        title: "Recharger",
        description: "Un rechargement de la page est requis pour finaliser cette op\xE9ration.",
        reloadNow: "Recharger maintenant",
        reloadLater: "Recharger plus tard"
      },
      backupModal: {
        title: "Sauvegarder/Restaurer",
        settingsCopied: "R\xE9glages copi\xE9s dans le presse-papier",
        noDataPasted: "Aucune donn\xE9e coll\xE9e",
        invalidJSON: "JSON invalide",
        inputLabel: "R\xE9glages du March\xE9",
        inputPlaceholder: "Copier/coller vos r\xE9glages ici",
        exportBtn: "Exporter",
        importBtn: "Importer",
        fileImportBtn: "Importer depuis un fichier"
      },
      devTools: {
        title: "Outils de d\xE9veloppeurs de th\xE8mes",
        noThemeInstalled: "Erreur: Aucun th\xE8me du march\xE9 n\u2019est install\xE9",
        noThemeManifest: "Erreur: Aucun manifeste de th\xE8me trouv\xE9",
        colorIniEditor: "\xC9diteur Color.ini",
        colorIniEditorPlaceholder: "[nom-de-votre-sch\xE9ma-de-couleur]",
        invalidCSS: "CSS invalide"
      },
      grid: {
        spicetifyMarketplace: "March\xE9 Spicetify",
        newUpdate: "Nouvelle mise \xE0 jour",
        addCSS: "Ajouter CSS",
        search: "Rechercher",
        installed: "Install\xE9",
        lastUpdated: "Derni\xE8re mise \xE0 jour {{val, datetime}}",
        externalJS: "JS externe",
        dark: "sombre",
        light: "clair",
        sort: {
          label: "Trier par:",
          stars: "\xC9toiles",
          newest: "Nouveaut\xE9",
          oldest: "Anciennet\xE9",
          lastUpdated: "Derni\xE8re mise \xE0 jour",
          mostStale: "Le plus p\xE9rim\xE9",
          aToZ: "A-Z",
          zToA: "Z-A"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Readme",
        loading: "Chargement\u2026",
        errorLoading: "Erreur lors du chargement du README"
      },
      github: "GitHub",
      install: "Installer",
      remove: "Supprimer",
      save: "Enregistrer",
      colour_one: "couleur",
      colour_other: "couleurs",
      favourite: "favoris"
    }
  };

  // src/resources/locales/it.json
  var it_default = {
    translation: {
      settings: {
        title: "Impostazioni Marketplace",
        optionsHeading: "Opzioni",
        starCountLabel: "Contatore stelle",
        tagsLabel: "Tag",
        showArchived: "Mostra repository archiviati",
        devToolsLabel: "Strumenti di sviluppo del tema",
        hideInstalledLabel: "Nascondi i pacchetti gi\xE0 installati durante la navigazione",
        colourShiftLabel: "Cambia colori ogni minuto",
        albumArtBasedColors: "Cambia i colori in base alla copertina dell'album",
        albumArtBasedColorsMode: "Schema colori modalit\xE0 (ColorApi)",
        albumArtBasedColorsVibrancy: "Colore preso dalla copertina dell'album",
        albumArtBasedColorsVibrancyToolTip: "Desaturato: Il colore predominante ma con molta meno luminosit\xE0 \n Vibrante Chiaro: Il colore pi\xF9 intenso ma con la luminosit\xE0 aumentata leggermente \n Predominante: Il colore che spicca di pi\xF9 nella copertina dell'album \n Vibrante: Il colore pi\xF9 intenso nella copertina dell'album",
        albumArtColorsModeToolTip: "Monocromo Scuro: Uno schema di colori basato direttamente sul colore principale selezionato, utilizzando diverse sfumature del colore principale e mescolando i grigi per creare uno schema di colori; questo \xE8 l'inverso di Monocromo Chiaro. \n Monocromo Chiaro: Uno schema di colori basato direttamente sul colore principale selezionato, utilizzando diverse sfumature del colore principale e mescolando i grigi per creare uno schema di colori. Lo sfondo di Monocromo Chiaro sarebbe il colore del testo o di quello in primo piano su Monocromo Scuro e viceversa. \n Armonico: Uno schema di colori basato sul colore principale selezionato, utilizzando i colori adiacenti al colore principale sulla ruota dei colori.\n Armonico Complementare: Uno schema di colori basato sul colore principale selezionato, utilizzando i colori adiacenti al colore principale sulla ruota dei colori e il colore complementare. \n Ternario: Uno schema di colori basato sul colore principale selezionato, utilizzando i colori sulla ruota dei colori che sono equidistanti dal colore principale. \n Quaternario: Uno schema di colori basato sul colore principale selezionato, utilizzando i colori sulla ruota dei colori che sono a 90 gradi dal colore principale.",
        tabsHeading: "Schede",
        tabsDescription: "Trascinare e rilasciare per cambiare l'ordine, cliccare per attivare/disattivare",
        resetHeading: "Reimposta",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "Disinstalla tutte le estensioni e i temi, e ripristina le preferenze",
        backupHeading: "Backup/Ripristino",
        backupLabel: "Effettua il backup o ripristina tutti i dati del Marketplace. Questo non include le impostazioni per qualsiasi elemento installato tramite Marketplace.",
        backupBtn: "Apri",
        versionHeading: "Versione",
        versionBtn: "Copia",
        versionCopied: "Copiato"
      },
      tabs: {
        Extensions: "Estensioni",
        Themes: "Temi",
        Snippets: "Moduli",
        Apps: "Applicazioni",
        Installed: "Installato"
      },
      snippets: {
        addTitle: "Aggiungi Modulo",
        duplicateName: "Questo nome \xE8 gi\xE0 stato utilizzato!",
        editTitle: "Modifica Modulo",
        viewTitle: "Visualizza Modulo",
        customCSS: "CSS personalizzato",
        customCSSPlaceholder: "Scrivi qui il tuo CSS personalizzato! Puoi trovarli nella scheda degli installati per la gestione.",
        snippetName: "Nome Modulo",
        snippetNamePlaceholder: "Inserisci un nome per il tuo modulo personalizzato",
        snippetDesc: "Descrizione Modulo",
        snippetDescPlaceholder: "Inserisci una descrizione per il tuo modulo personalizzato",
        snippetPreview: "Anteprima Modulo",
        optional: "Opzionale",
        addImage: "Aggiungi immagine",
        changeImage: "Cambia immagine",
        saveCSS: "Salva CSS"
      },
      reloadModal: {
        title: "Ricarica",
        description: "\xC8 necessario ricaricare la pagina per completare questa operazione.",
        reloadNow: "Ricarica",
        reloadLater: "Pi\xF9 tardi"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "Impostazioni copiate negli appunti",
        noDataPasted: "Nessun dato incollato",
        invalidJSON: "JSON non valido",
        inputLabel: "Impostazioni Marketplace",
        inputPlaceholder: "Copia/incolla qui le tue impostazioni",
        exportBtn: "Esporta",
        importBtn: "Importa",
        fileImportBtn: "Importa da file"
      },
      devTools: {
        title: "Strumenti di sviluppo del tema",
        noThemeInstalled: "Errore: Nessun tema del Marketplace installato",
        noThemeManifest: "Errore: Nessun manifest del tema trovato",
        colorIniEditor: "Editor Color.ini",
        colorIniEditorPlaceholder: "[nome-del-tuo-schema-colori]",
        invalidCSS: "Classi CSS non valide"
      },
      updateModal: {
        title: "Aggiorna il Marketplace",
        description: "Aggiorna Spicetify Marketplace per ricevere nuove funzionalit\xE0 e correzioni dei bug.",
        currentVersion: "Versione attuale: {{version}}",
        latestVersion: "Ultima versione: {{version}}",
        whatsChanged: "Cos'\xE8 Cambiato",
        seeChangelog: "Guarda il changelog",
        howToUpgrade: "Come effettuare l'aggiornamento",
        viewGuide: "Visualizza guida"
      },
      grid: {
        spicetifyMarketplace: "Spicetify Marketplace",
        newUpdate: "Nuovo aggiornamento",
        addCSS: "Aggiungi CSS",
        search: "Cerca",
        installed: "Installato",
        lastUpdated: "Ultimo aggiornamento {{val, datetime}}",
        externalJS: "jS esterno",
        archived: "archiviato",
        dark: "scuro",
        light: "chiaro",
        sort: {
          label: "Ordina per:",
          stars: "Valutazione",
          newest: "Pi\xF9 recente",
          oldest: "Meno recenti",
          lastUpdated: "Ultimo aggiornamento",
          mostStale: "Meno Aggiornato",
          aToZ: "A-Z",
          zToA: "Z-A"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Readme",
        loading: "Caricamento...",
        errorLoading: "Errore nel caricamento del README"
      },
      github: "GitHub",
      install: "Installa",
      remove: "Rimuovi",
      save: "Salva",
      colour_one: "colore",
      colour_other: "colori",
      favourite: "preferito",
      notifications: {
        wrongLocalTheme: "Si prega d'impostare current_theme in config-xpui.ini su 'marketplace' per installare temi utilizzando il Marketplace",
        tooManyRequests: "Troppe richieste, attendi un momento",
        noCdnConnection: "Il Marketplace non riesce a connettersi al CDN. Si prega di controllare la configurazione Internet",
        markdownParsingError: "Errore durante l'analisi del Markdown (HTTP {{status}})",
        noReadmeFile: "Nessun README trovato",
        themeInstallationError: "Si \xE8 verificato un errore durante l'installazione del tema",
        extensionInstallationError: "Si \xE8 verificato un errore durante l'installazione dell'estensione"
      }
    }
  };

  // src/resources/locales/ja.json
  var ja_default = {
    translation: {
      settings: {
        title: "\u30DE\u30FC\u30B1\u30C3\u30C8\u30D7\u30EC\u30A4\u30B9\u306E\u8A2D\u5B9A",
        optionsHeading: "\u30AA\u30D7\u30B7\u30E7\u30F3",
        starCountLabel: "\u30B9\u30BF\u30FC\u306E\u6570",
        tagsLabel: "\u30BF\u30B0",
        showArchived: "\u30A2\u30FC\u30AB\u30A4\u30D6\u3055\u308C\u305F\u30EA\u30DD\u30B8\u30C8\u30EA\u3092\u8868\u793A",
        devToolsLabel: "\u30C6\u30FC\u30DE\u958B\u767A\u8005\u30C4\u30FC\u30EB",
        hideInstalledLabel: "\u30D6\u30E9\u30A6\u30B8\u30F3\u30B0\u6642\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F\u3092\u975E\u8868\u793A\u306B\u3059\u308B",
        colourShiftLabel: "1\u5206\u3054\u3068\u306B\u8272\u3092\u5909\u66F4",
        albumArtBasedColors: "\u30A2\u30EB\u30D0\u30E0\u30A2\u30FC\u30C8\u306B\u57FA\u3065\u3044\u3066\u8272\u3092\u5909\u66F4",
        albumArtBasedColorsMode: "\u30AB\u30E9\u30FC\u30B9\u30AD\u30FC\u30E0\uFF08ColorApi\uFF09\u30E2\u30FC\u30C9",
        albumArtBasedColorsVibrancy: "\u30A2\u30EB\u30D0\u30E0\u30A2\u30FC\u30C8\u304B\u3089\u53D6\u5F97\u3057\u305F\u8272",
        albumArtBasedColorsVibrancyToolTip: "Desaturated: \u6700\u3082\u76EE\u7ACB\u3064\u8272\u3060\u304C\u3001\u660E\u308B\u3055\u304C\u306F\u308B\u304B\u306B\u6291\u3048\u3089\u308C\u3066\u3044\u307E\u3059 \n Light Vibrant: \u6700\u3082\u6D3B\u6C17\u3042\u308B\u8272\u3067\u3059\u304C\u3001\u660E\u308B\u3055\u304C\u5C11\u3057\u5897\u3057\u3066\u3044\u307E\u3059 \n Prominent: \u30A2\u30EB\u30D0\u30E0\u30A2\u30FC\u30C8\u3067\u6700\u3082\u76EE\u7ACB\u3064\u8272\u3067\u3059 \n Vibrant: \u30A2\u30EB\u30D0\u30E0\u30A2\u30FC\u30C8\u3067\u6700\u3082\u9BAE\u3084\u304B\u306A\u8272\u3067\u3059",
        albumArtColorsModeToolTip: "Monochrome Dark: \u9078\u629E\u3057\u305F\u30E1\u30A4\u30F3\u30AB\u30E9\u30FC\u3092\u57FA\u306B\u3057\u305F\u8272\u306E\u914D\u8272\u30B9\u30AD\u30FC\u30E0\u3067\u3001\u30E1\u30A4\u30F3\u30AB\u30E9\u30FC\u306E\u7570\u306A\u308B\u6FC3\u6DE1\u3084\u30B0\u30EC\u30FC\u3092\u6DF7\u305C\u3066\u914D\u8272\u3059\u308B\u3053\u3068\u3067\u3001\u3053\u308C\u306FMonochrome Light\u306E\u53CD\u5BFE\u3067\u3059\u3002 \n Monochrome Light: \u9078\u629E\u3057\u305F\u30E1\u30A4\u30F3\u30AB\u30E9\u30FC\u3092\u76F4\u63A5\u57FA\u306B\u3057\u305F\u8272\u306E\u914D\u8272\u30B9\u30AD\u30FC\u30E0\u3067\u3001\u30E1\u30A4\u30F3\u30AB\u30E9\u30FC\u306E\u7570\u306A\u308B\u6FC3\u6DE1\u3084\u30B0\u30EC\u30FC\u3092\u6DF7\u305C\u3066\u914D\u8272\u3057\u307E\u3059\u3002Monochrome Light\u306E\u80CC\u666F\u8272\u306F\u3001Monochrome Dark\u306E\u524D\u666F\u8272\u3084\u30C6\u30AD\u30B9\u30C8\u8272\u3068\u306A\u308A\u3001\u305D\u306E\u9006\u3082\u540C\u69D8\u3067\u3059\u3002 \n Analogic: \u9078\u629E\u3055\u308C\u305F\u30E1\u30A4\u30F3\u30AB\u30E9\u30FC\u3092\u57FA\u306B\u3001\u30AB\u30E9\u30FC\u30DB\u30A4\u30FC\u30EB\u4E0A\u3067\u30E1\u30A4\u30F3\u30AB\u30E9\u30FC\u306B\u96A3\u63A5\u3059\u308B\u8272\u3092\u4F7F\u7528\u3057\u305F\u914D\u8272\u30B9\u30AD\u30FC\u30E0\u3067\u3059\u3002 \n Analogic Complementary: \u9078\u629E\u3057\u305F\u30E1\u30A4\u30F3\u30AB\u30E9\u30FC\u3092\u57FA\u306B\u3001\u30AB\u30E9\u30FC\u30DB\u30A4\u30FC\u30EB\u4E0A\u3067\u30E1\u30A4\u30F3\u30AB\u30E9\u30FC\u306B\u96A3\u63A5\u3059\u308B\u8272\u3068\u88DC\u8272\u3092\u4F7F\u7528\u3057\u305F\u914D\u8272\u30B9\u30AD\u30FC\u30E0\u3067\u3059\u3002 \n Triad: \u9078\u629E\u3057\u305F\u30E1\u30A4\u30F3\u30AB\u30E9\u30FC\u3092\u57FA\u306B\u3001\u30AB\u30E9\u30FC\u30DB\u30A4\u30FC\u30EB\u4E0A\u3067\u30E1\u30A4\u30F3\u30AB\u30E9\u30FC\u304B\u3089\u7B49\u8DDD\u96E2\u306B\u3042\u308B\u8272\u3092\u4F7F\u7528\u3057\u305F\u914D\u8272\u30B9\u30AD\u30FC\u30E0\u3067\u3059\u3002 \n Quad: \u9078\u629E\u3055\u308C\u305F\u30E1\u30A4\u30F3\u30AB\u30E9\u30FC\u3092\u57FA\u306B\u3001\u30AB\u30E9\u30FC\u30DB\u30A4\u30FC\u30EB\u4E0A\u3067\u30E1\u30A4\u30F3\u30AB\u30E9\u30FC\u304B\u308990\u5EA6\u96E2\u308C\u305F\u8272\u3092\u4F7F\u7528\u3057\u305F\u914D\u8272\u30B9\u30AD\u30FC\u30E0\u3067\u3059\u3002",
        tabsHeading: "\u30BF\u30D6",
        tabsDescription: "\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u3067\u9806\u5E8F\u3092\u5909\u66F4\u3057\u3001\u30AF\u30EA\u30C3\u30AF\u3067\u6709\u52B9\uFF0F\u7121\u52B9\u3092\u5207\u308A\u66FF\u3048\u308B",
        resetHeading: "\u30EA\u30BB\u30C3\u30C8",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "\u3059\u3079\u3066\u306E\u62E1\u5F35\u6A5F\u80FD\u3068\u30C6\u30FC\u30DE\u3092\u30A2\u30F3\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3001\u8A2D\u5B9A\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3059",
        backupHeading: "\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7/\u30EA\u30B9\u30C8\u30A2",
        backupLabel: "\u3059\u3079\u3066\u306E\u30DE\u30FC\u30B1\u30C3\u30C8\u30D7\u30EC\u30A4\u30B9\u30C7\u30FC\u30BF\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u307E\u305F\u306F\u30EA\u30B9\u30C8\u30A2\u3092\u884C\u3044\u307E\u3059\u3002\u3053\u308C\u306B\u306F\u3001\u30DE\u30FC\u30B1\u30C3\u30C8\u30D7\u30EC\u30A4\u30B9\u3092\u4ECB\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u8A2D\u5B9A\u306F\u542B\u307E\u308C\u307E\u305B\u3093\u3002",
        backupBtn: "\u958B\u304F",
        versionHeading: "\u30D0\u30FC\u30B8\u30E7\u30F3",
        versionBtn: "\u30B3\u30D4\u30FC",
        versionCopied: "\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3057\u305F"
      },
      tabs: {
        Extensions: "\u62E1\u5F35\u6A5F\u80FD",
        Themes: "\u30C6\u30FC\u30DE",
        Snippets: "\u30B9\u30CB\u30DA\u30C3\u30C8",
        Apps: "\u30A2\u30D7\u30EA",
        Installed: "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F"
      },
      snippets: {
        addTitle: "\u30B9\u30CB\u30DA\u30C3\u30C8\u3092\u8FFD\u52A0",
        duplicateName: "\u305D\u306E\u540D\u524D\u306F\u65E2\u306B\u4F7F\u308F\u308C\u3066\u3044\u307E\u3059!",
        editTitle: "\u30B9\u30CB\u30DA\u30C3\u30C8\u3092\u7DE8\u96C6",
        viewTitle: "\u30B9\u30CB\u30DA\u30C3\u30C8\u3092\u8868\u793A",
        customCSS: "\u30AB\u30B9\u30BF\u30E0CSS",
        customCSSPlaceholder: "\u3053\u3053\u306B\u30AB\u30B9\u30BF\u30E0CSS\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044! \u7BA1\u7406\u7528\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F\u30BF\u30D6\u3067\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",
        snippetName: "\u30B9\u30CB\u30DA\u30C3\u30C8\u540D",
        snippetNamePlaceholder: "\u30AB\u30B9\u30BF\u30E0\u30B9\u30CB\u30DA\u30C3\u30C8\u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
        snippetDesc: "\u30B9\u30CB\u30DA\u30C3\u30C8\u306E\u8AAC\u660E",
        snippetDescPlaceholder: "\u30AB\u30B9\u30BF\u30E0\u30B9\u30CB\u30DA\u30C3\u30C8\u306E\u8AAC\u660E\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
        snippetPreview: "\u30B9\u30CB\u30DA\u30C3\u30C8\u30D7\u30EC\u30D3\u30E5\u30FC",
        optional: "\u30AA\u30D7\u30B7\u30E7\u30F3",
        addImage: "\u753B\u50CF\u3092\u8FFD\u52A0",
        changeImage: "\u753B\u50CF\u3092\u5909\u66F4",
        saveCSS: "CSS\u3092\u4FDD\u5B58"
      },
      reloadModal: {
        title: "\u30EA\u30ED\u30FC\u30C9",
        description: "\u3053\u306E\u64CD\u4F5C\u3092\u5B8C\u4E86\u3059\u308B\u306B\u306F\u30DA\u30FC\u30B8\u306E\u30EA\u30ED\u30FC\u30C9\u304C\u5FC5\u8981\u3067\u3059\u3002",
        reloadNow: "\u4ECA\u3059\u3050\u8AAD\u307F\u8FBC\u3080",
        reloadLater: "\u5F8C\u3067\u8AAD\u307F\u8FBC\u3080"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "\u8A2D\u5B9A\u304C\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3057\u305F",
        noDataPasted: "\u30C7\u30FC\u30BF\u304C\u8CBC\u308A\u4ED8\u3051\u3089\u308C\u3066\u3044\u307E\u305B\u3093",
        invalidJSON: "\u7121\u52B9\u306AJSON",
        inputLabel: "\u30DE\u30FC\u30B1\u30C3\u30C8\u30D7\u30EC\u30A4\u30B9\u306E\u8A2D\u5B9A",
        inputPlaceholder: "\u3053\u3053\u306B\u8A2D\u5B9A\u3092\u30B3\u30D4\u30FC\uFF06\u30DA\u30FC\u30B9\u30C8\u3057\u3066\u304F\u3060\u3055\u3044",
        exportBtn: "\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",
        importBtn: "\u30A4\u30F3\u30DD\u30FC\u30C8",
        fileImportBtn: "\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u30A4\u30F3\u30DD\u30FC\u30C8"
      },
      devTools: {
        title: "\u30C6\u30FC\u30DE\u958B\u767A\u30C4\u30FC\u30EB",
        noThemeInstalled: "\u30A8\u30E9\u30FC\uFF1A\u30DE\u30FC\u30B1\u30C3\u30C8\u30D7\u30EC\u30A4\u30B9\u306E\u30C6\u30FC\u30DE\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
        noThemeManifest: "\u30A8\u30E9\u30FC\uFF1A\u30C6\u30FC\u30DE\u30DE\u30CB\u30D5\u30A7\u30B9\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",
        colorIniEditor: "Color.ini Editor",
        colorIniEditorPlaceholder: "[your-colour-scheme-name]",
        invalidCSS: "\u7121\u52B9\u306ACSS"
      },
      updateModal: {
        title: "\u30DE\u30FC\u30B1\u30C3\u30C8\u30D7\u30EC\u30A4\u30B9\u306E\u66F4\u65B0",
        description: "\u65B0\u6A5F\u80FD\u3084\u30D0\u30B0\u4FEE\u6B63\u3092\u53D7\u3051\u53D6\u308B\u305F\u3081\u306B\u3001Spicetify Marketplace\u3092\u66F4\u65B0\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        currentVersion: "\u73FE\u5728\u306E\u30D0\u30FC\u30B8\u30E7\u30F3: {{version}}",
        latestVersion: "\u6700\u65B0\u306E\u30D0\u30FC\u30B8\u30E7\u30F3: {{version}}",
        whatsChanged: "\u5909\u66F4\u5185\u5BB9",
        seeChangelog: "\u5909\u66F4\u5C65\u6B74\u3092\u898B\u308B",
        howToUpgrade: "\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u65B9\u6CD5",
        viewGuide: "\u30AC\u30A4\u30C9\u3092\u898B\u308B"
      },
      grid: {
        spicetifyMarketplace: "Spicetify Marketplace",
        newUpdate: "\u65B0\u3057\u3044\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8",
        addCSS: "CSS\u3092\u8FFD\u52A0",
        search: "\u691C\u7D22",
        installed: "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F",
        lastUpdated: "{{val, datetime}}\u306B\u6700\u7D42\u66F4\u65B0",
        externalJS: "\u5916\u90E8JS",
        archived: "\u30A2\u30FC\u30AB\u30A4\u30D6\u6E08\u307F",
        dark: "\u30C0\u30FC\u30AF",
        light: "\u30E9\u30A4\u30C8",
        sort: {
          label: "\u4E26\u3079\u66FF\u3048:",
          stars: "\u30B9\u30BF\u30FC",
          newest: "\u6700\u65B0",
          oldest: "\u6700\u53E4",
          lastUpdated: "\u6700\u7D42\u66F4\u65B0",
          mostStale: "\u6700\u3082\u53E4\u3044",
          aToZ: "A-Z",
          zToA: "Z-A"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - README",
        loading: "\u8AAD\u307F\u8FBC\u307F\u4E2D...",
        errorLoading: "README\u306E\u8AAD\u307F\u8FBC\u307F\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F"
      },
      github: "GitHub",
      install: "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",
      remove: "\u524A\u9664",
      save: "\u4FDD\u5B58",
      colour_one: "\u8272",
      colour_other: "\u8272",
      favourite: "\u304A\u6C17\u306B\u5165\u308A",
      notifications: {
        wrongLocalTheme: "config-xpui.ini\u306Ecurrent_theme\u3092 'marketplace' \u306B\u8A2D\u5B9A\u3057\u3066\u3001\u30DE\u30FC\u30B1\u30C3\u30C8\u30D7\u30EC\u30A4\u30B9\u3092\u4F7F\u7528\u3057\u3066\u30C6\u30FC\u30DE\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044",
        tooManyRequests: "\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u591A\u3059\u304E\u307E\u3059\u3002\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044",
        noCdnConnection: "\u30DE\u30FC\u30B1\u30C3\u30C8\u30D7\u30EC\u30A4\u30B9\u304CCDN\u306B\u63A5\u7D9A\u3067\u304D\u307E\u305B\u3093\u3002\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u8A2D\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044",
        markdownParsingError: "Markdown\u306E\u89E3\u6790\u30A8\u30E9\u30FC\uFF08HTTP {{status}}\uFF09",
        noReadmeFile: "README\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",
        themeInstallationError: "\u30C6\u30FC\u30DE\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
        extensionInstallationError: "\u62E1\u5F35\u6A5F\u80FD\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F"
      }
    }
  };

  // src/resources/locales/ko.json
  var ko_default = {
    translation: {
      settings: {
        title: "\uB9C8\uCF13\uD50C\uB808\uC774\uC2A4 \uC124\uC815",
        optionsHeading: "\uC124\uC815",
        starCountLabel: "\uBCC4\uC810 \uAC1C\uC218",
        tagsLabel: "\uD0DC\uADF8",
        showArchived: "\uBCF4\uAD00\uB41C \uB9AC\uD3EC\uC9C0\uC2A4\uD1A0\uB9AC \uBCF4\uAE30",
        devToolsLabel: "\uD14C\uB9C8 \uAC1C\uBC1C\uC790 \uB3C4\uAD6C",
        hideInstalledLabel: "\uC124\uCE58\uB41C \uAE30\uB2A5\uC740 \uD0D0\uC0C9 \uACB0\uACFC\uC5D0\uC11C \uC228\uAE30\uAE30",
        colourShiftLabel: "\uB9E4 \uBD84\uB9C8\uB2E4 \uC0C9\uC0C1 \uBCC0\uACBD",
        albumArtBasedColors: "\uC568\uBC94 \uD45C\uC9C0\uC5D0 \uB530\uB77C \uC0C9\uC0C1 \uBCC0\uACBD",
        albumArtBasedColorsMode: "\uC0C9\uC0C1 \uAD6C\uC131\uD45C (\uC0C9\uC0C1Api) \uBAA8\uB4DC",
        albumArtBasedColorsVibrancy: "\uC568\uBC94 \uD45C\uC9C0\uC5D0\uC11C \uC0C9\uC0C1 \uCD94\uCD9C",
        albumArtBasedColorsVibrancyToolTip: "\uD0C1\uC0C9 (Desaturated): \uAC00\uC7A5 \uB450\uB4DC\uB7EC\uC9C0\uC9C0\uB9CC \uBC1D\uAE30\uAC00 \uB0AE\uC740 \uC0C9\uC0C1\uC785\uB2C8\uB2E4.\n\uCA0D\uD55C \uBC31\uC0C9 (Light Vibrant): \uAC00\uC7A5 \uC0DD\uC0DD\uD558\uAC8C \uB290\uAEF4\uC9C0\uBA74\uC11C\uB3C4 \uBC1D\uAE30\uAC00 \uC870\uAE08 \uB354 \uB192\uC544\uC9C4 \uC0C9\uC0C1\uC785\uB2C8\uB2E4.\n\uAC15\uC870\uC0C9 (Prominent): \uC568\uBC94 \uC544\uD2B8\uC5D0\uC11C \uAC00\uC7A5 \uB208\uC5D0 \uB744\uB294 \uC0C9\uC0C1\uC785\uB2C8\uB2E4, \uC568\uBC94 \uC544\uD2B8\uC5D0\uC11C \uAC00\uC7A5 \uB3CB\uBCF4\uC774\uB294 \uC0C9\uC774\uB77C\uACE0 \uD560 \uC218 \uC788\uC8E0.\n\uB192\uC740 \uCC44\uB3C4\uC0C9 (Vibrant): \uC568\uBC94 \uC544\uD2B8\uC5D0\uC11C \uAC00\uC7A5 \uC0DD\uC0DD\uD55C \uC0C9\uC0C1\uC785\uB2C8\uB2E4.",
        albumArtColorsModeToolTip: "\uBAA8\uB178\uD06C\uB86C \uB2E4\uD06C (Monochrome Dark): \uC120\uD0DD\uD55C \uBA54\uC778 \uC0C9\uC0C1\uC744 \uAE30\uC900\uC73C\uB85C \uB2E4\uC591\uD55C \uBA85\uC554\uB4E4\uACFC \uD68C\uC0C9\uC744 \uC11E\uC5B4 \uB9CC\uB4E0 \uC0C9\uC0C1\uC785\uB2C8\uB2E4. \uC774\uB294 Monochrome Light\uC758 \uBC18\uB300 \uAC1C\uB150\uC774\uC8E0.\n\uBAA8\uB178\uD06C\uB86C \uB77C\uC774\uD2B8 (Monochrome Light): \uC120\uD0DD\uD55C \uBA54\uC778 \uC0C9\uC0C1\uC744 \uAE30\uC900\uC73C\uB85C \uB2E4\uC591\uD55C \uBA85\uC554\uACFC \uD68C\uC0C9\uC744 \uC11E\uC5B4 \uB9CC\uB4E0 \uC0C9\uC0C1\uC785\uB2C8\uB2E4. Monochrome Light\uC758 \uBC30\uACBD\uC0C9\uC740 Monochrome Dark\uC758 \uC804\uACBD\uC0C9(\uBC30\uACBD\uC0C9) \uB610\uB294 \uD14D\uC2A4\uD2B8\uC758 \uC0C9\uC0C1\uC774 \uB418\uBA70, \uADF8 \uBC18\uB300\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uC785\uB2C8\uB2E4.\n\uC720\uC0AC\uC0C9 (Analogic): \uC120\uD0DD\uD55C \uBA54\uC778 \uC0C9\uC0C1\uC744 \uAE30\uC900\uC73C\uB85C \uC0C9 \uD314\uB808\uD2B8\uC5D0\uC11C \uBA54\uC778 \uC0C9\uC0C1\uC5D0 \uC778\uC811\uD55C \uC0C9\uC0C1\uB4E4\uC744 \uC774\uC6A9\uD558\uC5EC \uB9CC\uB4E0 \uC0C9\uC0C1\uC785\uB2C8\uB2E4.\n\uC720\uC0AC \uBCF4\uC0C9 (Analogic Complementary): \uC120\uD0DD\uD55C \uBA54\uC778 \uC0C9\uC0C1\uC744 \uAE30\uC900\uC73C\uB85C \uC0C9 \uD314\uB808\uD2B8\uC5D0\uC11C \uBA54\uC778 \uC0C9\uC0C1\uC5D0 \uC778\uC811\uD55C \uC0C9\uC0C1\uB4E4\uACFC \uBCF4\uC0C9\uB4E4\uC744 \uD568\uAED8 \uC0AC\uC6A9\uD558\uC5EC \uB9CC\uB4E0 \uC0C9\uC785\uB2C8\uB2E4.\n\uD2B8\uB77C\uC774\uB4DC (Triad): \uC120\uD0DD\uD55C \uBA54\uC778 \uC0C9\uC0C1\uC744 \uAE30\uC900\uC73C\uB85C \uC0C9\uD314\uB808\uD2B8\uC5D0\uC11C \uBA54\uC778 \uC0C9\uC0C1\uC73C\uB85C\uBD80\uD130 \uB3D9\uC77C\uD55C \uAC04\uACA9\uC73C\uB85C \uB5A8\uC5B4\uC838 \uC788\uB294 \uC138 \uAC00\uC9C0 \uC0C9\uC0C1\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB9CC\uB4E0 \uC0C9\uC0C1 \uAD6C\uC131\uD45C\uC785\uB2C8\uB2E4.\n\uCFFC\uB4DC (Quad): \uC120\uD0DD\uD55C \uBA54\uC778 \uC0C9\uC0C1\uC744 \uAE30\uC900\uC73C\uB85C \uC0C9\uD314\uB808\uD2B8\uC5D0\uC11C \uBA54\uC778 \uC0C9\uC0C1\uC73C\uB85C\uBD80\uD130 90\uB3C4 \uAC04\uACA9\uC73C\uB85C \uB5A8\uC5B4\uC838 \uC788\uB294 \uB124 \uAC00\uC9C0 \uC0C9\uC0C1\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB9CC\uB4E0 \uC0C9\uC0C1 \uAD6C\uC131\uD45C\uC785\uB2C8\uB2E4.",
        tabsHeading: "\uD0ED",
        tabsDescription: "\uB04C\uC5B4 \uB193\uC544 \uC21C\uC11C\uB97C \uBCC0\uACBD\uD558\uACE0, \uD074\uB9AD\uD558\uC5EC \uD65C\uC131\uD654 \uBC0F \uBE44\uD65C\uC131\uD654 \uD569\uB2C8\uB2E4.",
        resetHeading: "\n\uCD08\uAE30\uD654",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "\uBAA8\uB4E0 \uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8\uB4E4\uACFC \uD14C\uB9C8\uB4E4\uC744 \uC81C\uAC70\uD558\uACE0, \uAE30\uBCF8 \uC124\uC815\uC73C\uB85C \uB418\uB3CC\uB9BD\uB2C8\uB2E4.",
        backupHeading: "\uBC31\uC5C5/\uBCF5\uAD6C",
        backupLabel: "\uBAA8\uB4E0 \uB9C8\uCF13\uD50C\uB808\uC774\uC2A4 \uB370\uC774\uD130\uB97C \uBC31\uC5C5\uD558\uAC70\uB098 \uBCF5\uC6D0\uD569\uB2C8\uB2E4.\uC5EC\uAE30\uC5D0\uB294 \uB9C8\uCF13\uD50C\uB808\uC774\uC2A4\uB97C \uD1B5\uD574 \uC124\uCE58\uB41C \uD56D\uBAA9\uB4E4\uC758 \uC124\uC815\uC740 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
        backupBtn: "\uC5F4\uAE30",
        versionHeading: "\uBC84\uC804",
        versionBtn: "\uBCF5\uC0AC",
        versionCopied: "\uBCF5\uC0AC\uB428"
      },
      tabs: {
        Extensions: "\uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8",
        Themes: "\uD14C\uB9C8 \uBAA9\uB85D",
        Snippets: "\uCD94\uAC00 \uAE30\uB2A5",
        Apps: "\uC571 \uBAA9\uB85D",
        Installed: "\uC124\uCE58 \uBAA9\uB85D"
      },
      snippets: {
        addTitle: "\uCD94\uAC00 \uAE30\uB2A5 \uB4F1\uB85D",
        duplicateName: "\uC774 \uC774\uB984\uC740 \uC774\uBBF8 \uC0AC\uC6A9\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4!",
        editTitle: "\uCD94\uAC00 \uAE30\uB2A5 \uC218\uC815",
        viewTitle: "\uCD94\uAC00 \uAE30\uB2A5",
        customCSS: "Custom CSS",
        customCSSPlaceholder: "\uC790\uC2E0\uC758 CSS \uD30C\uC77C\uC744 \uC774\uACF3\uC5D0 \uCCA8\uBD80\uD558\uC138\uC694! \uC124\uCE58 \uBAA9\uB85D \uD0ED\uC5D0\uC11C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        snippetName: "\uCD94\uAC00 \uAE30\uB2A5 \uC774\uB984",
        snippetNamePlaceholder: "\uCD94\uAC00 \uAE30\uB2A5 \uC774\uB984\uC744 \uC774\uACF3\uC5D0 \uC785\uB825\uD558\uC138\uC694!",
        snippetDesc: "\uCD94\uAC00 \uAE30\uB2A5 \uC124\uBA85",
        snippetDescPlaceholder: "\uCD94\uAC00 \uAE30\uB2A5 \uC124\uBA85\uC744 \uC774\uACF3\uC5D0 \uC785\uB825\uD558\uC138\uC694!",
        snippetPreview: "\uCD94\uAC00 \uAE30\uB2A5 \uBBF8\uB9AC\uBCF4\uAE30 \uC774\uBBF8\uC9C0",
        optional: "\uC120\uD0DD\uC0AC\uD56D",
        addImage: "\uC774\uBBF8\uC9C0 \uCD94\uAC00",
        changeImage: "\uC774\uBBF8\uC9C0 \uBC14\uAFB8\uAE30",
        saveCSS: "CSS \uC800\uC7A5"
      },
      reloadModal: {
        title: "\uBC88\uACBD \uC0AC\uD56D \uC801\uC6A9",
        description: "\uC774 \uC791\uC5C5\uC744 \uC644\uB8CC\uD558\uB824\uBA74 \uD398\uC774\uC9C0\uB97C \uC7AC\uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4.",
        reloadNow: "\uC9C0\uAE08 \uC7AC\uC2DC\uC791",
        reloadLater: "\uB098\uC911\uC5D0 \uC7AC\uC2DC\uC791"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "\uC124\uC815\uC774 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
        noDataPasted: "\uBD99\uC5EC\uB123\uC5B4\uC9C4 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4",
        invalidJSON: "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 JSON",
        inputLabel: "\uB9C8\uCF13 \uD50C\uB808\uC774\uC2A4 \uC124\uC815",
        inputPlaceholder: "\uC774\uACF3\uC5D0 \uC124\uC815\uC744 \uBCF5\uC0AC/\uBD99\uC5EC\uB123\uAE30 \uD558\uC138\uC694",
        exportBtn: "\uB0B4\uBCF4\uB0B4\uAE30",
        importBtn: "\uAC00\uC838\uC624\uAE30",
        fileImportBtn: "\uD30C\uC77C\uC5D0\uC11C \uAC00\uC838\uC624\uAE30"
      },
      devTools: {
        title: "\uD14C\uB9C8 \uAC1C\uBC1C\uC790 \uB3C4\uAD6C",
        noThemeInstalled: "\uC624\uB958: \uC5B4\uB5A4 \uB9C8\uCF13\uD50C\uB808\uC774\uC2A4 \uD14C\uB9C8\uB3C4 \uC124\uCE58\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4",
        noThemeManifest: "\uC624\uB958: \uD14C\uB9C8 \uB9E4\uB2C8\uD398\uC2A4\uD2B8 \uCC3E\uC744 \uC218 \uC5C6\uC74C",
        colorIniEditor: "Colour.ini \uD3B8\uC9D1\uAE30",
        colorIniEditorPlaceholder: "[\uB2F9\uC2E0\uC758-\uC0C9\uC0C1-\uAD6C\uC131\uD45C-\uC774\uB984]",
        invalidCSS: "\uC720\uD6A8\uCE58 \uC54A\uC740 CSS"
      },
      updateModal: {
        title: "\uB9C8\uCF13\uD50C\uB808\uC774\uC2A4 \uC5C5\uB370\uC774\uD2B8",
        description: "spicetify \uB9C8\uCF13 \uD50C\uB808\uC774\uC2A4\uB97C \uC5C5\uB370\uC774\uD2B8 \uD558\uC5EC \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uB4E4\uACFC \uBC84\uADF8 \uD53D\uC2A4\uB4E4\uC744 \uC81C\uACF5\uBC1B\uC2B5\uB2C8\uB2E4.",
        currentVersion: "\uD604\uC7AC \uBC84\uC804: {{version}}",
        latestVersion: "\uC9C0\uB09C \uBC84\uC804: {{version}}",
        whatsChanged: "\uC0C8\uB85C\uC6B4 \uAE30\uB2A5",
        seeChangelog: "\uD328\uCE58\uB178\uD2B8 \uBCF4\uAE30",
        howToUpgrade: "\uC5C5\uB370\uC774\uD2B8 \uBC29\uBC95",
        viewGuide: "\uAC00\uC774\uB4DC \uBCF4\uAE30"
      },
      grid: {
        spicetifyMarketplace: "Spicetify \uB9C8\uCF13\uD50C\uB808\uC774\uC2A4",
        newUpdate: "\uC0C8\uB85C\uC6B4 \uC5C5\uB370\uC774\uD2B8",
        addCSS: "CSS \uB4F1\uB85D",
        search: "\uAC80\uC0C9",
        installed: "\uC124\uCE58\uB428",
        lastUpdated: "\uB9C8\uC9C0\uB9C9 \uC5C5\uB370\uC774\uD2B8\uC77C {{val, datetime}}",
        externalJS: "external JS",
        archived: "\uB9CC\uB8CC\uB428",
        dark: "\uB2E4\uD06C \uBAA8\uB4DC",
        light: "\uB77C\uC774\uD2B8 \uBAA8\uB4DC",
        sort: {
          label: "\uB098\uC5F4 \uAE30\uC900:",
          stars: "\uBCC4\uC810",
          newest: "\uC2E0\uADDC",
          oldest: "\uC624\uB798\uB41C \uC21C",
          lastUpdated: "\uAC00\uC7A5 \uCD5C\uC2E0 \uC21C",
          mostStale: "\uAC00\uC7A5 \uC624\uB798\uB41C \uC21C",
          aToZ: "A-Z \uAE4C\uC9C0",
          zToA: "Z-A \uAE4C\uC9C0"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Readme",
        loading: "\uB85C\uB529\uC911...",
        errorLoading: "README\uB97C \uBD88\uB7EC\uC624\uB294 \uC911 \uC624\uB958 \uBC1C\uC0DD"
      },
      github: "GitHub",
      install: "\uC124\uCE58",
      remove: "\uC81C\uAC70",
      save: "\uC800\uC7A5",
      colour_one: "\uC0C9\uC0C1",
      colour_other: "\uC0C9\uC0C1\uB4E4",
      favourite: "\uC990\uACA8\uCC3E\uAE30",
      notifications: {
        wrongLocalTheme: "\uB9C8\uCF13\uD50C\uB808\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD14C\uB9C8\uB97C \uC124\uCE58\uD558\uB824\uBA74 config-xpui.ini\uC5D0\uC11C current_theme\uB97C 'marketplace'\uB85C \uC124\uC815\uD558\uC138\uC694.",
        tooManyRequests: "\uC694\uCCAD\uC774 \uB108\uBB34 \uBE48\uBC88\uD569\uB2C8\uB2E4, \uC7A0\uC2DC \uB4A4 \uC2DC\uB3C4\uD558\uC138\uC694",
        noCdnConnection: "\uB9C8\uCF13\uD50C\uB808\uC774\uC2A4\uAC00 CDN\uC5D0 \uC811\uC18D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD604\uC7AC \uC778\uD130\uB137 \uAD6C\uC131\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.",
        markdownParsingError: "Markdown \uAD6C\uBB38 \uBD84\uC11D \uC624\uB958 (HTTP {{status}})",
        noReadmeFile: "README \uD30C\uC77C\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4",
        themeInstallationError: "\uD14C\uB9C8\uB97C \uC124\uCE58\uD558\uB294\uB370 \uC624\uB958\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4",
        extensionInstallationError: "\uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8\uC744 \uC124\uCE58\uD558\uB294 \uB370 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4"
      }
    }
  };

  // src/resources/locales/pl.json
  var pl_default = {
    translation: {
      settings: {
        title: "Ustawienia Marketplace",
        optionsHeading: "Opcje",
        starCountLabel: "Ilo\u015B\u0107 gwiazdek",
        tagsLabel: "Tagi",
        showArchived: "Poka\u017C archiwalne repozytoria",
        devToolsLabel: "Narz\u0119dzia do tworzenia motyw\xF3w",
        hideInstalledLabel: "Ukryj zainstalowane podczas przegl\u0105dania",
        colourShiftLabel: "Zmieniaj kolory co minut\u0119",
        albumArtBasedColors: "Zmie\u0144 kolory bazuj\u0105c na ok\u0142adce albumu",
        albumArtBasedColorsMode: "Tryb schematu kolor\xF3w (ColorApi)",
        albumArtBasedColorsVibrancy: "Kolor pobrany z ok\u0142adki albumu",
        albumArtBasedColorsVibrancyToolTip: "Nasycony: Kolor, kt\xF3ry jest najbardziej widoczny, ale o znacznie mniejszej jasno\u015Bci. \nJasny wibruj\u0105cy: Najbardziej \u017Cywy kolor, ale z nieco zwi\u0119kszon\u0105 jasno\u015Bci\u0105. \nWyra\u017Any: Kolor, kt\xF3ry najbardziej rzuca si\u0119 w oczy na ok\u0142adce albumu. \nWibruj\u0105cy: Najbardziej \u017Cywy kolor na ok\u0142adce albumu",
        albumArtColorsModeToolTip: "Monochromatyczny ciemny: Schemat kolor\xF3w oparty bezpo\u015Brednio na wybranym g\u0142\xF3wnym kolorze, wykorzystuj\u0105cy r\xF3\u017Cne odcienie g\u0142\xF3wnego koloru i mieszaj\u0105cy szaro\u015Bci w celu stworzenia schematu kolor\xF3w, jest to odwrotno\u015B\u0107 Monochromatycznego jasnego. \nMonochromatyczny jasny: Schemat kolor\xF3w oparty bezpo\u015Brednio na wybranym g\u0142\xF3wnym kolorze, wykorzystuj\u0105cy r\xF3\u017Cne odcienie g\u0142\xF3wnego koloru i mieszanie szaro\u015Bci w celu utworzenia schematu kolor\xF3w. T\u0142o monochromatycznego \u015Bwiat\u0142a b\u0119dzie na pierwszym planie lub kolorem tekstu w monochromatycznym ciemnym i odwrotnie. \nAnalogowy: Schemat kolor\xF3w oparty na wybranym g\u0142\xF3wnym kolorze, wykorzystuj\u0105cy kolory s\u0105siaduj\u0105ce z g\u0142\xF3wnym kolorem na kole kolor\xF3w. \nUzupe\u0142nienie analogowe: Schemat kolor\xF3w oparty na wybranym g\u0142\xF3wnym kolorze, wykorzystuj\u0105cy kolory s\u0105siaduj\u0105ce z g\u0142\xF3wnym kolorem na kole kolor\xF3w i kolorem uzupe\u0142niaj\u0105cym. \nTriada: Schemat kolor\xF3w oparty na wybranym g\u0142\xF3wnym kolorze, wykorzystuj\u0105cy kolory na kole kolor\xF3w, kt\xF3re s\u0105 w r\xF3wnej odleg\u0142o\u015Bci od g\u0142\xF3wnego koloru. \nQuad: Schemat kolor\xF3w oparty na wybranym g\u0142\xF3wnym kolorze, wykorzystuj\u0105cy kolory na kole kolor\xF3w, kt\xF3re s\u0105 oddalone o 90 stopni od g\u0142\xF3wnego koloru.",
        tabsHeading: "Karty",
        tabsDescription: "Przeci\u0105gnij i upu\u015B\u0107, aby zmieni\u0107 kolejno\u015B\u0107, kliknij, aby w\u0142\u0105czy\u0107/wy\u0142\u0105czy\u0107",
        resetHeading: "Reset",
        resetBtn: "Zresetuj",
        resetDescription: "Odinstaluj wszystkie rozszerzenia, motywy i zresetuj preferencje",
        backupHeading: "Kopia zapasowa/Przywracanie kopii",
        backupLabel: "Utw\xF3rz kopi\u0119 zapasow\u0105 lub przywr\xF3\u0107 wszystkie dane Marketplace. Kopia nie zawiera ustawie\u0144 dla rzeczy zainstalowanych poprzez Marketplace.",
        backupBtn: "Otw\xF3rz",
        versionHeading: "Wersja",
        versionBtn: "Skopiuj",
        versionCopied: "Skopiowano"
      },
      tabs: {
        Extensions: "Rozszerzenia",
        Themes: "Motywy",
        Snippets: "Snippety",
        Apps: "Aplikacje",
        Installed: "Zainstalowane"
      },
      snippets: {
        addTitle: "Dodaj Snippet",
        duplicateName: "Ta nazwa jest ju\u017C zaj\u0119ta!",
        editTitle: "Edytuj Snippet",
        viewTitle: "Poka\u017C Snippet",
        customCSS: "Niestandardowy CSS",
        customCSSPlaceholder: "Wprowad\u017A tutaj sw\xF3j w\u0142asny CSS! Mo\u017Cesz go znale\u017A\u0107 w zak\u0142adce 'Zainstalowane' aby nim zarz\u0105dza\u0107.",
        snippetName: "Nazwa snippetu",
        snippetNamePlaceholder: "Wprowad\u017A nazw\u0119 swojego niestandardowego snippetu",
        snippetDesc: "Opis snippetu",
        snippetDescPlaceholder: "Wpisz opis swojego snippetu",
        snippetPreview: "Podgl\u0105d snippetu",
        optional: "Opcjonalne",
        addImage: "Dodaj obraz",
        changeImage: "Zmie\u0144 obraz",
        saveCSS: "Zapisz CSS"
      },
      reloadModal: {
        title: "Prze\u0142aduj",
        description: "Do uko\u0144czenia tej operacji wymagane jest prze\u0142adowanie strony.",
        reloadNow: "Prze\u0142aduj teraz",
        reloadLater: "Prze\u0142aduj p\xF3\u017Cniej"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "Skopiowano do schowka",
        noDataPasted: "Dane nie zosta\u0142y wklejone",
        invalidJSON: "Nieprawid\u0142owy JSON",
        inputLabel: "Ustawienia Marketplace",
        inputPlaceholder: "Skopiuj/wklej tu swoje ustawienia",
        exportBtn: "Eksportuj",
        importBtn: "Importuj",
        fileImportBtn: "Importuj z pliku"
      },
      devTools: {
        title: "Narz\u0119dzia developerskie do motyw\xF3w",
        noThemeInstalled: "B\u0142\u0105d: Nie zainstalowano motywu",
        noThemeManifest: "B\u0142\u0105d: Nie znaleziono pliku manifestu motywu",
        colorIniEditor: "Edytor color.ini",
        colorIniEditorPlaceholder: "[nazwa-twojego-koloru]",
        invalidCSS: "Nieprawid\u0142owy CSS"
      },
      updateModal: {
        title: "Zaktualizuj Marketplace",
        description: "Zaktualizuj Spicetify Marketplace, aby otrzymywa\u0107 nowe funkcje i poprawki b\u0142\u0119d\xF3w.",
        currentVersion: "Obecna wersja: {{version}}",
        latestVersion: "Najnowsza wersja: {{version}}",
        whatsChanged: "Co si\u0119 zmieni\u0142o",
        seeChangelog: "Zobacz zmiany",
        howToUpgrade: "Jak zaktualizowa\u0107",
        viewGuide: "Zobacz przewodnik"
      },
      grid: {
        spicetifyMarketplace: "Spicetify Marketplace",
        newUpdate: "Nowa aktualizacja",
        addCSS: "Dodaj CSS",
        search: "Wyszukaj",
        installed: "Zainstalowane",
        lastUpdated: "Ostatnio zaktualizowane {{val, datetime}}",
        externalJS: "zewn\u0119trzny JS",
        archived: "archiwalny",
        dark: "ciemny",
        light: "jasny",
        sort: {
          label: "Sortuj po:",
          stars: "Ilo\u015B\u0107 gwiazdek",
          newest: "Najnowsze",
          oldest: "Najstarsze",
          lastUpdated: "Ostatnio zaktualizowane",
          mostStale: "Najrzadziej aktualizowane",
          aToZ: "A-Z",
          zToA: "Z-A"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Readme",
        loading: "\u0141adowanie...",
        errorLoading: "B\u0142\u0105d podczas \u0142adowania README"
      },
      github: "GitHub",
      install: "Zainstaluj",
      remove: "Odinstaluj",
      save: "Zapisz",
      colour_one: "kolor",
      colour_other: "kolory",
      favourite: "ulubione",
      notifications: {
        wrongLocalTheme: 'Ustaw current_theme w config-xpui.ini na "marketplace", aby instalowa\u0107 motywy za pomoc\u0105 Marketplace.',
        tooManyRequests: "Za du\u017Co \u017C\u0105da\u0144, spokojnie",
        noCdnConnection: "Marketplace nie mo\u017Ce po\u0142\u0105czy\u0107 si\u0119 z CDN. Sprawd\u017A swoj\u0105 konfiguracj\u0119 internetow\u0105",
        markdownParsingError: "B\u0142\u0105d podczas parsowania markdownu (HTTP {{status}})",
        noReadmeFile: "Nie znaleziono README",
        themeInstallationError: "Wyst\u0105pi\u0142 b\u0142\u0105d podczas instalacji motywu",
        extensionInstallationError: "Wyst\u0105pi\u0142 b\u0142\u0105d podczas instalacji rozszerzenia"
      }
    }
  };

  // src/resources/locales/pt-BR.json
  var pt_BR_default = {
    translation: {
      settings: {
        title: "Configura\xE7\xF5es do Marketplace",
        optionsHeading: "Op\xE7\xF5es",
        starCountLabel: "N\xFAmero de estrelas",
        tagsLabel: "Etiquetas",
        showArchived: "Exibir reposit\xF3rios arquivados",
        devToolsLabel: "Ferramentas de desenvolvimento de temas",
        hideInstalledLabel: "Ocultar instalados ao navegar",
        colourShiftLabel: "Alterar cores a cada minuto",
        albumArtBasedColors: "Alterar as cores com base na capa do \xE1lbum",
        albumArtBasedColorsMode: "Modo de esquema de cores (ColorApi)",
        albumArtBasedColorsVibrancy: "Cor extra\xEDda da capa do \xE1lbum",
        albumArtBasedColorsVibrancyToolTip: "Desaturada: A cor mais proeminente, mas com muito menos brilho \n Vibrante clara: A cor mais vibrante, com o brilho levemente aumentado \n Proeminente: A cor mais destacada na capa do \xE1lbum \n Vibrante: A cor mais vibrante na capa do \xE1lbum",
        albumArtColorsModeToolTip: "Monocrom\xE1tico Escuro: um esquema de cores baseado diretamente na cor principal selecionada, usando diferentes tons da cor principal e misturando cinzas para criar um esquema de cores; este \xE9 o inverso do Monocrom\xE1tico Claro. \n Monocrom\xE1tico Claro: Um esquema de cores baseado diretamente na cor principal selecionada, usando diferentes tons da cor principal e misturando cinzas para criar um esquema de cores. O plano de fundo do Monocrom\xE1tico Claro seria o primeiro plano ou a cor do texto no Monocrom\xE1tico Escuro e vice-versa. \n Anal\xF3gico: Um esquema de cores baseado na cor principal selecionada, usando as cores adjacentes \xE0 principal no c\xEDrculo crom\xE1tico. \n Anal\xF3gico Complementar: Um esquema de cores baseado na cor principal selecionada, usando as cores adjacentes \xE0 cor principal no c\xEDrculo crom\xE1tico e a cor complementar. \n Tr\xEDade: Um esquema de cores baseado na cor principal selecionada, usando as cores no c\xEDrculo crom\xE1tico que s\xE3o equidistantes da cor principal. \n Quadrado: Um esquema de cores baseado na cor principal selecionada, usando as cores no c\xEDrculo crom\xE1tico que est\xE3o a 90 graus da cor principal.",
        tabsHeading: "Abas",
        tabsDescription: "Arraste e solte para reordenar, clique para ativar/desativar",
        resetHeading: "Redefinir",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "Desinstale todas as extens\xF5es e temas e redefina as prefer\xEAncias",
        backupHeading: "C\xF3pia de seguran\xE7a/Restaurar",
        backupLabel: "Fa\xE7a uma c\xF3pia de seguran\xE7a ou restaure todos os dados do Marketplace. Isto n\xE3o inclui as configura\xE7\xF5es dos itens instalados via Marketplace.",
        backupBtn: "Abrir",
        versionHeading: "Vers\xE3o",
        versionBtn: "Copiar",
        versionCopied: "Copiado"
      },
      tabs: {
        Extensions: "Extens\xF5es",
        Themes: "Temas",
        Snippets: "Snippets",
        Apps: "Aplicativos",
        Installed: "Instalados"
      },
      snippets: {
        addTitle: "Adicionar Snippet",
        duplicateName: "Esse nome j\xE1 est\xE1 em uso!",
        editTitle: "Editar Snippet",
        viewTitle: "Visualizar Snippet",
        customCSS: "CSS personalizado",
        customCSSPlaceholder: "Insira seu CSS personalizado aqui! Voc\xEA pode gerenci\xE1-lo na aba Instalados.",
        snippetName: "Nome do Snippet",
        snippetNamePlaceholder: "Digite um nome para seu snippet personalizado",
        snippetDesc: "Descri\xE7\xE3o do Snippet",
        snippetDescPlaceholder: "Digite uma descri\xE7\xE3o para seu snippet personalizado",
        snippetPreview: "Pr\xE9-visualiza\xE7\xE3o do Snippet",
        optional: "Opcional",
        addImage: "Adicionar imagem",
        changeImage: "Alterar imagem",
        saveCSS: "Salvar CSS"
      },
      reloadModal: {
        title: "Recarregar",
        description: "\xC9 necess\xE1rio recarregar a p\xE1gina para concluir essa opera\xE7\xE3o.",
        reloadNow: "Recarregar agora",
        reloadLater: "Recarregar depois"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "Configura\xE7\xF5es copiadas para a \xE1rea de transfer\xEAncia",
        settingsSaved: "Configura\xE7\xF5es salvas no arquivo",
        noDataPasted: "Nenhum dado colado",
        invalidJSON: "JSON inv\xE1lido",
        inputLabel: "Configura\xE7\xF5es do Marketplace",
        inputPlaceholder: "Copie/cole suas configura\xE7\xF5es aqui",
        exportBtn: "Exportar",
        importBtn: "Importar",
        fileImportBtn: "Importar de arquivo"
      },
      devTools: {
        title: "Ferramentas de Desenvolvimento de Temas",
        noThemeInstalled: "Erro: Nenhum tema do Marketplace instalado",
        noThemeManifest: "Erro: Nenhum manifesto de tema encontrado",
        colorIniEditor: "Editor do Color.ini",
        colorIniEditorPlaceholder: "[nome-do-seu-esquema-de-cores]",
        invalidCSS: "CSS inv\xE1lido"
      },
      updateModal: {
        title: "Atualizar o Marketplace",
        description: "Atualize o Spicetify Marketplace para receber novos recursos e corre\xE7\xF5es de bugs.",
        currentVersion: "Vers\xE3o atual: {{version}}",
        latestVersion: "Vers\xE3o mais recente: {{version}}",
        whatsChanged: "O que mudou",
        seeChangelog: "Ver registro de altera\xE7\xF5es",
        howToUpgrade: "Como atualizar",
        viewGuide: "Ver guia"
      },
      grid: {
        spicetifyMarketplace: "Spicetify Marketplace",
        newUpdate: "Nova atualiza\xE7\xE3o",
        addCSS: "Adicionar CSS",
        search: "Buscar",
        installed: "Instalado",
        lastUpdated: "\xDAltima atualiza\xE7\xE3o {{val, datetime}}",
        externalJS: "JS externo",
        archived: "arquivado",
        dark: "escuro",
        light: "claro",
        sort: {
          label: "Ordenar por:",
          stars: "Estrelas",
          newest: "Mais recentes",
          oldest: "Mais antigos",
          lastUpdated: "\xDAltima atualiza\xE7\xE3o",
          mostStale: "Menos atualizados",
          aToZ: "A-Z",
          zToA: "Z-A"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Readme",
        loading: "Carregando...",
        errorLoading: "Erro ao carregar o README"
      },
      github: "GitHub",
      install: "Instalar",
      remove: "Remover",
      save: "Salvar",
      colour_one: "cor",
      colour_other: "cores",
      favourite: "favorito",
      notifications: {
        wrongLocalTheme: "Por favor, defina current_theme em config-xpui.ini para 'marketplace' para instalar temas usando o Marketplace",
        tooManyRequests: "Muitas solicita\xE7\xF5es, acalme-se",
        noCdnConnection: "Marketplace n\xE3o consegue se conectar \xE0 CDN. Verifique sua configura\xE7\xE3o de Internet",
        markdownParsingError: "Erro ao processar markdown (HTTP {{status}})",
        noReadmeFile: "Nenhum README foi encontrado",
        themeInstallationError: "Ocorreu um erro ao instalar o tema",
        extensionInstallationError: "Ocorreu um erro ao instalar a extens\xE3o"
      }
    }
  };

  // src/resources/locales/ru.json
  var ru_default = {
    translation: {
      settings: {
        title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        optionsHeading: "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435",
        starCountLabel: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0432\u0435\u0437\u0434",
        tagsLabel: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0442\u0435\u0433\u0438",
        showArchived: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0430\u0440\u0445\u0438\u0432\u043D\u044B\u0435 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0438",
        devToolsLabel: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 \u0442\u0435\u043C",
        hideInstalledLabel: "\u0421\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u043A\u043B\u0430\u0434\u043A\u0430\u0445",
        colourShiftLabel: "\u041C\u0435\u043D\u044F\u0442\u044C \u0446\u0432\u0435\u0442\u0430 \u043A\u0430\u0436\u0434\u0443\u044E \u043C\u0438\u043D\u0443\u0442\u0443",
        albumArtBasedColors: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0446\u0432\u0435\u0442\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043E\u0431\u043B\u043E\u0436\u043A\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0430",
        albumArtBasedColorsMode: "\u0422\u0438\u043F \u0446\u0432\u0435\u0442\u0430",
        albumArtBasedColorsVibrancy: "\u0422\u0438\u043F \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u0441\u0445\u0435\u043C\u044B \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043E\u0431\u043B\u043E\u0436\u043A\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0430",
        albumArtBasedColorsVibrancyToolTip: "Desaturated: \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0447\u0430\u0441\u0442\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u043C\u044B\u0439 \u0432 \u043E\u0431\u043B\u043E\u0436\u043A\u0435 \u0446\u0432\u0435\u0442 \u0441 \u043C\u0430\u043B\u043E\u0439 \u044F\u0440\u043A\u043E\u0441\u0442\u044C\u044E \n Light Vibrant: \u0441\u0430\u043C\u044B\u0439 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u044B\u0439 \u0446\u0432\u0435\u0442 \u0441 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439 \u044F\u0440\u043A\u043E\u0441\u0442\u044C\u044E \n Prominent: \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0447\u0430\u0441\u0442\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u043C\u044B\u0439 \u0446\u0432\u0435\u0442 \u0432 \u043E\u0431\u043B\u043E\u0436\u043A\u0435 \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \n Vibrant: \u0441\u0430\u043C\u044B\u0439 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u044B\u0439 \u0446\u0432\u0435\u0442 \u0432 \u043E\u0431\u043B\u043E\u0436\u043A\u0435 \u0430\u043B\u044C\u0431\u043E\u043C\u0430",
        albumArtColorsModeToolTip: "Monochrome Dark, Monochrome Light: \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u044B \u0438c\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u0446\u0432\u0435\u0442\u0435, \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u044E\u0442\u0441\u044F \u043F\u0443\u0442\u0435\u043C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u044F\u0440\u043A\u043E\u0441\u0442\u0438 \u043E\u0441\u043D\u043E\u0432\u043E\u0433\u043E. \u041F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043B\u043E\u0436\u043D\u044B \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0443: \u0446\u0432\u0435\u0442, \u044F\u0432\u043B\u044F\u044E\u0449\u0438\u0439\u0441\u044F \u0444\u043E\u043D\u043E\u0432\u044B\u043C \u0432 Monochrome Light, \u0432 Monochrome Dark \u0431\u0443\u0434\u0435\u0442 \u0446\u0432\u0435\u0442\u043E\u043C \u043F\u0435\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u043F\u043B\u0430\u043D\u0430 \u0438 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442. \n Analogic: \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u0438 \u0446\u0432\u0435\u0442\u0430\u043C\u0438, \u0441\u043C\u0435\u0436\u043D\u044B\u043C\u0438 \u0441 \u043D\u0438\u043C \u043D\u0430 \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u043C \u043A\u0440\u0443\u0433\u0435. \n Analogic Complementary: \u0441\u0445\u043E\u0436\u0430 c Analogic, \u043D\u043E \u0441\u043E\u0436\u0435\u0440\u0436\u0438\u0442 \u0442\u0430\u043A\u0436\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0446\u0432\u0435\u0442. \n Triad: \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u0446\u0432\u0435\u0442\u043E\u043C \u0438 \u0446\u0432\u0435\u0442\u0430\u043C\u0438, \u0440\u0430\u0432\u043D\u043E\u0443\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u043C\u0438 \u043E\u0442 \u043D\u0435\u0433\u043E. \n Quad: \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u0446\u0432\u0435\u0442\u043E\u043C \u0438 \u0446\u0432\u0435\u0442\u0430\u043C\u0438, \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u043F\u043E\u0434 \u0443\u0433\u043B\u043E\u043C 90 \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 \u043A \u043D\u0435\u043C\u0443.",
        tabsHeading: "\u0412\u043A\u043B\u0430\u0434\u043A\u0438",
        tabsDescription: "\u041F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u044F\u0434\u043A\u0430, \u0449\u0435\u043B\u0447\u043E\u043A \u0434\u043B\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F/\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",
        resetHeading: "\u0421\u0431\u0440\u043E\u0441",
        resetBtn: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
        resetDescription: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0438 \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        backupHeading: "\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0435 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435",
        backupLabel: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043B\u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430, \u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043C \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0439.",
        backupBtn: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C",
        versionHeading: "\u0412\u0435\u0440\u0441\u0438\u044F",
        versionBtn: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
        versionCopied: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E"
      },
      tabs: {
        Extensions: "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F",
        Themes: "\u0422\u0435\u043C\u044B",
        Snippets: "\u0421\u043D\u0438\u043F\u043F\u0435\u0442\u044B",
        Apps: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
        Installed: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0435"
      },
      snippets: {
        addTitle: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u043D\u0438\u043F\u043F\u0435\u0442\u0430",
        duplicateName: "\u0421\u043D\u0438\u043F\u043F\u0435\u0442 \u0441 \u0442\u0430\u043A\u0438\u043C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",
        editTitle: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043D\u0438\u043F\u043F\u0435\u0442\u0430",
        viewTitle: "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0441\u043D\u0438\u043F\u043F\u0435\u0442\u0430",
        customCSS: "CSS",
        customCSSPlaceholder: "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u044E\u0434\u0430 CSS \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u043D\u0438\u043F\u043F\u0435\u0442\u0430",
        snippetName: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
        snippetNamePlaceholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u043D\u0438\u043F\u043F\u0435\u0442\u0430",
        snippetDesc: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
        snippetDescPlaceholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u043D\u0438\u043F\u043F\u0435\u0442\u0430",
        snippetPreview: "\u041F\u0440\u0435\u0432\u044C\u044E",
        optional: "\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E",
        addImage: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
        changeImage: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
        saveCSS: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
      },
      reloadModal: {
        title: "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
        description: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0434\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439",
        reloadNow: "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441",
        reloadLater: "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u043E\u0437\u0436\u0435"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",
        noDataPasted: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E",
        invalidJSON: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 JSON",
        inputLabel: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430",
        inputPlaceholder: "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u0448\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u044E\u0434\u0430",
        exportBtn: "\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
        importBtn: "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
        fileImportBtn: "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0437 \u0444\u0430\u0439\u043B\u0430"
      },
      devTools: {
        title: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 \u0442\u0435\u043C",
        noThemeInstalled: "\u041E\u0448\u0438\u0431\u043A\u0430: \u041D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0442\u0435\u043C\u0430 \u0438\u0437 \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430",
        noThemeManifest: "\u041E\u0448\u0438\u0431\u043A\u0430: \u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u043C\u0430\u043D\u0438\u0444\u0435\u0441\u0442 \u0442\u0435\u043C\u044B",
        colorIniEditor: "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 color.ini",
        colorIniEditorPlaceholder: "[\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435-\u0432\u0430\u0448\u0435\u0439-\u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0439-\u0441\u0445\u0435\u043C\u044B]",
        invalidCSS: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 CSS"
      },
      updateModal: {
        title: "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430",
        description: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u043E\u0432\u044B\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u0438 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439.",
        currentVersion: "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F: {{version}}",
        latestVersion: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0432\u0435\u0440\u0441\u0438\u044F: {{version}}",
        whatsChanged: "\u0427\u0442\u043E \u043D\u043E\u0432\u043E\u0433\u043E",
        seeChangelog: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",
        howToUpgrade: "\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044E",
        viewGuide: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E"
      },
      grid: {
        spicetifyMarketplace: "\u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441 Spicetify",
        newUpdate: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435",
        addCSS: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C CSS",
        search: "\u0418\u0441\u043A\u0430\u0442\u044C",
        installed: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E",
        lastUpdated: "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E: {{val, datetime}}",
        externalJS: "\u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 JS",
        archived: "\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043E",
        dark: "\u0442\u0435\u043C\u043D\u044B\u0439",
        light: "\u0441\u0432\u0435\u0442\u043B\u044B\u0439",
        sort: {
          label: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C:",
          stars: "\u043F\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0437\u0432\u0435\u0437\u0434",
          newest: "\u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u044B\u0435",
          oldest: "\u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0442\u0430\u0440\u044B\u0435",
          lastUpdated: "\u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0435\u0434\u0430\u0432\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435",
          mostStale: "\u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0430\u0432\u043D\u043E \u043D\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0432\u0448\u0438\u0435\u0441\u044F",
          aToZ: "\u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E (A-Z)",
          zToA: "\u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E (Z-A)"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Readme",
        loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",
        errorLoading: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 README"
      },
      github: "GitHub",
      install: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",
      remove: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
      save: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
      colour_one: "\u0446\u0432\u0435\u0442",
      colour_other: "\u0446\u0432\u0435\u0442\u0430",
      favourite: "\u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
      notifications: {
        wrongLocalTheme: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 current_theme \u0432 config-xpui.ini \u043D\u0430 'marketplace', \u0447\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043C\u044B \u0438\u0437 \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430",
        tooManyRequests: "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435",
        noCdnConnection: "\u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A CDN. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435",
        markdownParsingError: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0435 Markdown (HTTP {{status}})",
        noReadmeFile: "README \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",
        themeInstallationError: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u0442\u0435\u043C\u044B",
        extensionInstallationError: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F"
      }
    }
  };

  // src/resources/locales/tr.json
  var tr_default = {
    translation: {
      settings: {
        title: "Marketplace Ayarlar\u0131",
        optionsHeading: "Se\xE7enekler",
        starCountLabel: "Y\u0131ld\u0131z say\u0131s\u0131",
        tagsLabel: "Etiketler",
        showArchived: "Ar\u015Fivlenmi\u015F repolar\u0131 g\xF6ster",
        devToolsLabel: "Tema geli\u015Ftirici ara\xE7lar\u0131",
        hideInstalledLabel: "G\xF6z atarken y\xFCkl\xFC olanlar\u0131 gizle",
        colourShiftLabel: "Renkleri her dakika de\u011Fi\u015Ftir",
        albumArtBasedColors: "Alb\xFCm kapa\u011F\u0131na g\xF6re renkleri de\u011Fi\u015Ftir",
        albumArtBasedColorsMode: "Renk \u015Femas\u0131 (ColorApi) modu",
        albumArtBasedColorsVibrancy: "Alb\xFCm kapa\u011F\u0131ndan al\u0131nan renk",
        albumArtBasedColorsVibrancyToolTip: "Doygunlu\u011Fu Azalt\u0131lm\u0131\u015F: En belirgin olan ancak \xE7ok daha az parlakl\u0131\u011Fa sahip renk \n A\xE7\u0131k Canl\u0131: En canl\u0131 renk, ancak parlakl\u0131\u011F\u0131 bir miktar art\u0131r\u0131lm\u0131\u015F \n \xD6ne \xC7\u0131kan: Alb\xFCm kapa\u011F\u0131nda en \xE7ok g\xF6ze \xE7arpan renk \n Canl\u0131: Alb\xFCm kapa\u011F\u0131ndaki en canl\u0131 renk",
        albumArtColorsModeToolTip: "Monokrom Koyu: Se\xE7ilen ana renge dayal\u0131, ana rengin farkl\u0131 tonlar\u0131n\u0131 kullanan ve gri tonlar\u0131yla kar\u0131\u015Ft\u0131rarak bir renk \u015Femas\u0131 olu\u015Fturan bir d\xFCzen. Monokrom A\xE7\u0131k'\u0131n tersidir. \n Monokrom A\xE7\u0131k: Se\xE7ilen ana renge dayal\u0131, ana rengin farkl\u0131 tonlar\u0131n\u0131 kullanan ve gri tonlar\u0131yla kar\u0131\u015Ft\u0131rarak bir renk \u015Femas\u0131 olu\u015Fturan bir d\xFCzen. Monokrom A\xE7\u0131k'\u0131n arka plan\u0131, Monokrom Koyu'daki \xF6n plan veya metin rengi olacakt\u0131r ve tam tersi. \n Analog: Se\xE7ilen ana renge dayal\u0131, renk \xE7ark\u0131nda ana rengin biti\u015Fi\u011Findeki renkleri kullanan bir renk \u015Femas\u0131. \n Analog Tamamlay\u0131c\u0131: Se\xE7ilen ana renge dayal\u0131, renk \xE7ark\u0131nda ana rengin biti\u015Fi\u011Findeki renkleri ve tamamlay\u0131c\u0131 rengi kullanan bir renk \u015Femas\u0131. \n \xDC\xE7l\xFC: Se\xE7ilen ana renge dayal\u0131, renk \xE7ark\u0131nda ana renge e\u015Fit uzakl\u0131ktaki renkleri kullanan bir renk \u015Femas\u0131. \n D\xF6rtl\xFC: Se\xE7ilen ana renge dayal\u0131, renk \xE7ark\u0131nda ana renge 90 derece uzakl\u0131ktaki renkleri kullanan bir renk \u015Femas\u0131.",
        tabsHeading: "Sekmeler",
        tabsDescription: "Yeniden s\u0131ralamak i\xE7in s\xFCr\xFCkleyip b\u0131rak\u0131n, etkinle\u015Ftirmek/devre d\u0131\u015F\u0131 b\u0131rakmak i\xE7in t\u0131klay\u0131n",
        resetHeading: "S\u0131f\u0131rla",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "T\xFCm eklentileri ve temalar\u0131 kald\u0131r\u0131p tercihleri s\u0131f\u0131rla",
        backupHeading: "Yedekle/Geri Y\xFCkle",
        backupLabel: "T\xFCm Marketplace verilerini yedekleyin veya geri y\xFCkleyin. Bu, Marketplace ile y\xFCklenen \xF6\u011Felerin ayarlar\u0131n\u0131 kapsamaz.",
        backupBtn: "A\xE7",
        versionHeading: "S\xFCr\xFCm",
        versionBtn: "Kopyala",
        versionCopied: "Kopyaland\u0131"
      },
      tabs: {
        Extensions: "Eklentiler",
        Themes: "Temalar",
        Snippets: "Snippet'ler",
        Apps: "Uygulamalar",
        Installed: "Y\xFCklenenler"
      },
      snippets: {
        addTitle: "Snippet Ekle",
        duplicateName: "Bu isim zaten al\u0131nm\u0131\u015F!",
        editTitle: "Snippet'i D\xFCzenle",
        viewTitle: "Snippet'i G\xF6r\xFCnt\xFCle",
        customCSS: "\xD6zel CSS",
        customCSSPlaceholder: "Kendi \xF6zel CSS'inizi buraya girin. Y\xF6netim i\xE7in snippet'leri Y\xFCklenenler sekmesinde bulabilirsiniz.",
        snippetName: "Snippet Ad\u0131",
        snippetNamePlaceholder: "\xD6zel snippet'iniz i\xE7in bir ad girin",
        snippetDesc: "Snippet A\xE7\u0131klamas\u0131",
        snippetDescPlaceholder: "\xD6zel snippet'iniz i\xE7in bir a\xE7\u0131klama girin",
        snippetPreview: "Snippet \xD6nizlemesi",
        optional: "\u0130ste\u011Fe Ba\u011Fl\u0131",
        addImage: "Resim ekle",
        changeImage: "Resmi de\u011Fi\u015Ftir",
        saveCSS: "CSS'i Kaydet"
      },
      reloadModal: {
        title: "Yeniden Y\xFCkle",
        description: "Bu i\u015Flemi tamamlamak i\xE7in sayfan\u0131n yeniden y\xFCklenmesi gerekiyor.",
        reloadNow: "\u015Eimdi yeniden y\xFCkle",
        reloadLater: "Daha sonra yeniden y\xFCkle"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "Ayarlar panoya kopyaland\u0131",
        noDataPasted: "Yap\u0131\u015Ft\u0131r\u0131lan veri yok",
        invalidJSON: "Ge\xE7ersiz JSON",
        inputLabel: "Marketplace Ayarlar\u0131",
        inputPlaceholder: "Ayarlar\u0131n\u0131z\u0131 buraya kopyalay\u0131p yap\u0131\u015Ft\u0131r\u0131n",
        exportBtn: "D\u0131\u015Fa Aktar",
        importBtn: "\u0130\xE7e Aktar",
        fileImportBtn: "Dosyadan i\xE7e aktar"
      },
      devTools: {
        title: "Tema Geli\u015Ftirici Ara\xE7lar\u0131",
        noThemeInstalled: "Hata: Y\xFCkl\xFC bir marketplace temas\u0131 yok",
        noThemeManifest: "Hata: Tema manifestosu bulunamad\u0131",
        colorIniEditor: "Color.ini D\xFCzenleyici",
        colorIniEditorPlaceholder: "[renk-seman\u0131z\u0131n-ad\u0131]",
        invalidCSS: "Ge\xE7ersiz CSS"
      },
      updateModal: {
        title: "Marketplace'i G\xFCncelle",
        description: "Yeni \xF6zellikleri ve hata d\xFCzeltmelerini almak i\xE7in Spicetify Marketplace'i g\xFCncelleyin.",
        currentVersion: "Mevcut s\xFCr\xFCm: {{version}}",
        latestVersion: "En son s\xFCr\xFCm: {{version}}",
        whatsChanged: "Neler De\u011Fi\u015Fti",
        seeChangelog: "De\u011Fi\u015Fiklik g\xFCnl\xFC\u011F\xFCn\xFC g\xF6r",
        howToUpgrade: "Nas\u0131l y\xFCkseltilir",
        viewGuide: "Rehberi g\xF6r\xFCnt\xFCle"
      },
      grid: {
        spicetifyMarketplace: "Spicetify Marketplace",
        newUpdate: "Yeni g\xFCncelleme",
        addCSS: "CSS Ekle",
        search: "Ara",
        installed: "Y\xFCkl\xFC",
        lastUpdated: "Son g\xFCncelleme: {{val, datetime}}",
        externalJS: "harici JS",
        archived: "ar\u015Fivlenmi\u015F",
        dark: "koyu",
        light: "a\xE7\u0131k",
        sort: {
          label: "S\u0131rala:",
          stars: "Y\u0131ld\u0131z",
          newest: "En Yeni",
          oldest: "En Eski",
          lastUpdated: "Son G\xFCncellenen",
          mostStale: "En Eski G\xFCncelleme",
          aToZ: "A-Z",
          zToA: "Z-A"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Benioku",
        loading: "Y\xFCkleniyor...",
        errorLoading: "README y\xFCklenirken hata olu\u015Ftu"
      },
      github: "GitHub",
      install: "Y\xFCkle",
      remove: "Kald\u0131r",
      save: "Kaydet",
      colour_one: "renk",
      colour_other: "renkler",
      favourite: "favori",
      notifications: {
        wrongLocalTheme: "Marketplace kullanarak tema y\xFCklemek i\xE7in l\xFCtfen config-xpui.ini dosyas\u0131ndaki current_theme ayar\u0131n\u0131 'marketplace' olarak de\u011Fi\u015Ftir",
        tooManyRequests: "\xC7ok fazla istek g\xF6nderildi, l\xFCtfen bekleyin",
        noCdnConnection: "Marketplace, CDN'e ba\u011Flanam\u0131yor. L\xFCtfen internet ba\u011Flant\u0131n\u0131z\u0131 kontrol edin",
        markdownParsingError: "Markdown ayr\u0131\u015Ft\u0131r\u0131l\u0131rken hata olu\u015Ftu (HTTP {{status}})",
        noReadmeFile: "README dosyas\u0131 bulunamad\u0131",
        themeInstallationError: "Tema y\xFCklenirken bir hata olu\u015Ftu",
        extensionInstallationError: "Eklenti y\xFCklenirken bir hata olu\u015Ftu"
      }
    }
  };

  // src/resources/locales/uk.json
  var uk_default = {
    translation: {
      settings: {
        title: "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0443",
        optionsHeading: "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
        starCountLabel: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0437\u0456\u0440\u043E\u043A",
        tagsLabel: "\u0422\u0435\u0433\u0438",
        showArchived: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0437\u0430\u0430\u0440\u0445\u0456\u0432\u043E\u0432\u0430\u043D\u0456 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0456\u0457",
        devToolsLabel: "\u0406\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438 \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0430 \u0442\u0435\u043C",
        hideInstalledLabel: "\u0421\u0445\u043E\u0432\u0430\u0442\u0438 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0456",
        colourShiftLabel: "\u0417\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438 \u043A\u043E\u043B\u0456\u0440 \u043A\u043E\u0436\u043D\u0443 \u0445\u0432\u0438\u043B\u0438\u043D\u0443",
        albumArtBasedColors: "\u0417\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438 \u043A\u043E\u043B\u0456\u0440 \u0432 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0456\u0434 \u043E\u0431\u043A\u043B\u0430\u0434\u0438\u043D\u043A\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0443",
        albumArtBasedColorsMode: "\u041A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0430 \u0441\u0445\u0435\u043C\u0430 (ColorApi)",
        albumArtBasedColorsVibrancy: "\u041A\u043E\u043B\u0456\u0440 \u0432\u0437\u044F\u0442\u043E \u0437 \u043E\u0431\u043A\u043B\u0430\u0434\u0438\u043D\u043A\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0443",
        albumArtBasedColorsVibrancyToolTip: "\u041D\u0430\u0441\u0438\u0447\u0435\u043D\u0438\u0439: \u041A\u043E\u043B\u0456\u0440, \u044F\u043A\u0438\u0439 \u0454 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448 \u043F\u043E\u043C\u0456\u0442\u043D\u0438\u043C, \u0430\u043B\u0435 \u0437 \u043D\u0430\u0431\u0430\u0433\u0430\u0442\u043E \u043C\u0435\u043D\u0448\u043E\u044E \u044F\u0441\u043A\u0440\u0430\u0432\u0456\u0441\u0442\u044E \n Light Vibrant (\u042F\u0441\u043A\u0440\u0430\u0432\u0438\u0439): \u041D\u0430\u0439\u044F\u0441\u043A\u0440\u0430\u0432\u0456\u0448\u0438\u0439 \u043A\u043E\u043B\u0456\u0440, \u0430\u043B\u0435 \u0437 \u0434\u0435\u0449\u043E \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u043E\u044E \u044F\u0441\u043A\u0440\u0430\u0432\u0456\u0441\u0442\u044E \n \u0412\u0438\u0440\u0430\u0437\u043D\u0438\u0439: \u041A\u043E\u043B\u0456\u0440, \u044F\u043A\u0438\u0439 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0435 \u0432\u0438\u0434\u0456\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u043E\u0431\u043A\u043B\u0430\u0434\u0438\u043D\u0446\u0456 \u0430\u043B\u044C\u0431\u043E\u043C\u0443 \n \u042F\u0441\u043A\u0440\u0430\u0432\u0438\u0439: \u041D\u0430\u0439\u044F\u0441\u043A\u0440\u0430\u0432\u0456\u0448\u0438\u0439 \u043A\u043E\u043B\u0456\u0440 \u043D\u0430 \u043E\u0431\u043A\u043B\u0430\u0434\u0438\u043D\u0446\u0456 \u0430\u043B\u044C\u0431\u043E\u043C\u0443",
        albumArtColorsModeToolTip: "\u041C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u043D\u0438\u0439 \u0442\u0435\u043C\u043D\u0438\u0439: \u043A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0430 \u0441\u0445\u0435\u043C\u0430, \u0449\u043E \u0431\u0430\u0437\u0443\u0454\u0442\u044C\u0441\u044F \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u043D\u0430 \u0432\u0438\u0431\u0440\u0430\u043D\u043E\u043C\u0443 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u043A\u043E\u043B\u044C\u043E\u0440\u0456, \u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u0440\u0456\u0437\u043D\u0438\u0445 \u0432\u0456\u0434\u0442\u0456\u043D\u043A\u0456\u0432 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u043E\u0440\u0443 \u0442\u0430 \u0437\u043C\u0456\u0448\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0441\u0456\u0440\u0438\u0445 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432 \u0434\u043B\u044F \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u043E\u0457 \u0441\u0445\u0435\u043C\u0438, \u0446\u0435 \u043F\u0440\u043E\u0442\u0438\u043B\u0435\u0436\u043D\u0456\u0441\u0442\u044C \u043C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u043D\u043E\u0433\u043E \u0441\u0432\u0456\u0442\u043B\u043E\u0433\u043E. \n \u041C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u043D\u0438\u0439 \u0441\u0432\u0456\u0442\u043B\u0438\u0439: \u041A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0430 \u0441\u0445\u0435\u043C\u0430, \u0449\u043E \u0431\u0430\u0437\u0443\u0454\u0442\u044C\u0441\u044F \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u043D\u0430 \u0432\u0438\u0431\u0440\u0430\u043D\u043E\u043C\u0443 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u043A\u043E\u043B\u044C\u043E\u0440\u0456, \u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u0440\u0456\u0437\u043D\u0438\u0445 \u0432\u0456\u0434\u0442\u0456\u043D\u043A\u0456\u0432 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u043E\u0440\u0443 \u0442\u0430 \u0437\u043C\u0456\u0448\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0441\u0456\u0440\u0438\u0445 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432 \u0434\u043B\u044F \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u043E\u0457 \u0441\u0445\u0435\u043C\u0438. \u0422\u043B\u043E \u043C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u043D\u043E\u0433\u043E \u0441\u0432\u0456\u0442\u043B\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u043C \u043F\u043B\u0430\u043D\u043E\u043C \u0430\u0431\u043E \u043A\u043E\u043B\u044C\u043E\u0440\u043E\u043C \u0442\u0435\u043A\u0441\u0442\u0443 \u043D\u0430 \u043C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u043D\u043E\u043C\u0443 \u0442\u0435\u043C\u043D\u043E\u043C\u0443, \u0456 \u043D\u0430\u0432\u043F\u0430\u043A\u0438. \n \u0410\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u0438\u0439: \u041A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0430 \u0441\u0445\u0435\u043C\u0430, \u0437\u0430\u0441\u043D\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u0432\u0438\u0431\u0440\u0430\u043D\u043E\u043C\u0443 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u043A\u043E\u043B\u044C\u043E\u0440\u0456 \u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432, \u0441\u0443\u043C\u0456\u0436\u043D\u0438\u0445 \u0437 \u043E\u0441\u043D\u043E\u0432\u043D\u0438\u043C \u043A\u043E\u043B\u044C\u043E\u0440\u043E\u043C \u043D\u0430 \u043A\u043E\u043B\u0456\u0440\u043D\u043E\u043C\u0443 \u043A\u043E\u043B\u0456. \n \u0410\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E-\u0434\u043E\u043F\u043E\u0432\u043D\u044E\u0432\u0430\u043B\u044C\u043D\u0430: \u041A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0430 \u0441\u0445\u0435\u043C\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 \u0432\u0438\u0431\u0440\u0430\u043D\u043E\u0433\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u043E\u0440\u0443 \u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u0441\u0443\u0441\u0456\u0434\u043D\u0456\u0445 \u0437 \u043D\u0438\u043C \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432 \u043D\u0430 \u043A\u043E\u043B\u0456\u0440\u043D\u043E\u043C\u0443 \u043A\u043E\u043B\u0456 \u0442\u0430 \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u043E\u0440\u0443. \n \u0422\u0440\u0456\u0430\u0434\u0430: \u041A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0430 \u0441\u0445\u0435\u043C\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 \u0432\u0438\u0431\u0440\u0430\u043D\u043E\u0433\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u043E\u0440\u0443 \u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432 \u043D\u0430 \u043A\u043E\u043B\u0456 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432, \u0440\u0456\u0432\u043D\u043E\u0432\u0456\u0434\u0434\u0430\u043B\u0435\u043D\u0438\u0445 \u0432\u0456\u0434 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u043E\u0440\u0443. \n \u041A\u0432\u0430\u0434\u0440\u0430\u0442: \u041A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0430 \u0441\u0445\u0435\u043C\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 \u0432\u0438\u0431\u0440\u0430\u043D\u043E\u0433\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u043E\u0440\u0443 \u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432 \u043D\u0430 \u043A\u043E\u043B\u0456 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432, \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0445 \u043F\u0456\u0434 \u043A\u0443\u0442\u043E\u043C 90 \u0433\u0440\u0430\u0434\u0443\u0441\u0456\u0432 \u0434\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u043E\u0440\u0443.",
        tabsHeading: "\u0412\u043A\u043B\u0430\u0434\u043A\u0438",
        tabsDescription: "\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u043F\u043E\u0440\u044F\u0434\u043E\u043A, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0443\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438/\u0432\u0438\u043C\u043A\u043D\u0443\u0442\u0438",
        resetHeading: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0443\u0441\u0456 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u0456 \u0442\u0435\u043C\u0438, \u0442\u0430 \u0441\u043A\u0438\u043D\u0443\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
        backupHeading: "\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0435 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F/\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
        backupLabel: "\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0430\u0431\u043E \u0432\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438 \u0432\u0441\u0456 \u0434\u0430\u043D\u0456 \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0443. \u0426\u0435 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0454 \u0432 \u0441\u0435\u0431\u0435 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0441\u044C\u043E\u0433\u043E, \u0449\u043E \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441",
        backupBtn: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438",
        versionHeading: "\u0412\u0435\u0440\u0441\u0456\u044F",
        versionBtn: "\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438",
        versionCopied: "\u0421\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E"
      },
      tabs: {
        Extensions: "\u0420\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F",
        Themes: "\u0422\u0435\u043C\u0438",
        Snippets: "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u0438",
        Apps: "\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043A\u0438",
        Installed: "\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E"
      },
      snippets: {
        addTitle: "\u0414\u043E\u0434\u0430\u0442\u0438 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442",
        duplicateName: "\u0426\u044F \u043D\u0430\u0437\u0432\u0430 \u0432\u0436\u0435 \u0437\u0430\u0439\u043D\u044F\u0442\u0430!",
        editTitle: "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442",
        viewTitle: "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442",
        customCSS: "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0438\u0439 CSS",
        customCSSPlaceholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0432\u0456\u0439 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 CSS \u0442\u0443\u0442! \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u043D\u0430\u0439\u0442\u0438 \u0457\u0445 \u0443 \u0432\u043A\u043B\u0430\u0434\u0446\u0456 \u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u043C\u0438 \u0444\u0430\u0439\u043B\u0430\u043C\u0438.",
        snippetName: "\u041D\u0430\u0437\u0432\u0430 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u0443",
        snippetNamePlaceholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0456\u043C'\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u043E\u0433\u043E \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u0443",
        snippetDesc: "\u041E\u043F\u0438\u0441 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u0443",
        snippetDescPlaceholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043E\u043F\u0438\u0441 \u0434\u043B\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u043E\u0433\u043E \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u0443",
        snippetPreview: "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u0434 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u0443",
        optional: "\u041D\u0435\u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0438\u0439",
        addImage: "\u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0432\u0456\u0442\u043B\u0438\u043D\u0443",
        changeImage: "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0441\u0432\u0456\u0442\u043B\u0438\u043D\u0443",
        saveCSS: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 CSS"
      },
      reloadModal: {
        title: "\u041F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438",
        description: "\u0414\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u0446\u0456\u0454\u0457 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0457 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u043F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
        reloadNow: "\u041F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0437\u0430\u0440\u0430\u0437",
        reloadLater: "\u041F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043F\u0456\u0437\u043D\u0456\u0448\u0435"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E \u0443 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0456\u043D\u0443",
        noDataPasted: "\u0414\u0430\u043D\u0456 \u043D\u0435 \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E",
        invalidJSON: "\u041D\u0435\u0434\u0456\u0439\u0441\u043D\u0438\u0439 JSON",
        inputLabel: "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0443",
        inputPlaceholder: "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438/\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0441\u0432\u043E\u0457 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u044E\u0434\u0438",
        exportBtn: "\u0415\u043A\u0441\u043F\u043E\u0440\u0442",
        importBtn: "\u0406\u043C\u043F\u043E\u0440\u0442",
        fileImportBtn: "\u0406\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437 \u0444\u0430\u0439\u043B\u0443"
      },
      devTools: {
        title: "\u0406\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438 \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0430 \u0442\u0435\u043C",
        noThemeInstalled: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430: \u0422\u0435\u043C\u0443 \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0443 \u043D\u0435 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E",
        noThemeManifest: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430: \u043C\u0430\u043D\u0456\u0444\u0435\u0441\u0442 \u0442\u0435\u043C\u0438 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",
        colorIniEditor: "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 Color.ini",
        colorIniEditorPlaceholder: "[your-colour-scheme-name]",
        invalidCSS: "\u041D\u0435\u0434\u0456\u0439\u0441\u043D\u0438\u0439 CSS"
      },
      updateModal: {
        title: "\u041E\u043D\u043E\u0432\u0438\u0442\u0438 \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441",
        description: "\u041E\u043D\u043E\u0432\u0456\u0442\u044C Spicetify Marketplace \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u043D\u043E\u0432\u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u0456 \u0431\u0430\u0433\u0444\u0456\u043A\u0441\u0438.",
        currentVersion: "\u041F\u043E\u0442\u043E\u0447\u043D\u0430 \u0432\u0435\u0440\u0441\u0456\u044F: {{version}}",
        latestVersion: "\u041E\u0441\u0442\u0430\u043D\u043D\u044F \u0432\u0435\u0440\u0441\u0456\u044F: {{version}}",
        whatsChanged: "\u0429\u043E \u0437\u043C\u0456\u043D\u0438\u043B\u043E\u0441\u044F",
        seeChangelog: "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0441\u043F\u0438\u0441\u043E\u043A \u0437\u043C\u0456\u043D",
        howToUpgrade: "\u042F\u043A \u043E\u043D\u043E\u0432\u043B\u044E\u0432\u0430\u0442\u0438\u0441\u044F",
        viewGuide: "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u043F\u043E\u0441\u0456\u0431\u043D\u0438\u043A"
      },
      grid: {
        spicetifyMarketplace: "\u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441 Spicetify",
        newUpdate: "\u041D\u043E\u0432\u0435 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
        addCSS: "\u0414\u043E\u0434\u0430\u0442\u0438 CSS",
        search: "\u041F\u043E\u0448\u0443\u043A",
        installed: "\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E",
        lastUpdated: "\u0412\u043E\u0441\u0442\u0430\u043D\u043D\u0454 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E {{val, datetime}}",
        externalJS: "\u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 JS",
        archived: "\u0437\u0430\u0430\u0440\u0445\u0456\u0432\u043E\u0432\u0430\u043D\u0435",
        dark: "\u0442\u0435\u043C\u043D\u0438\u0439",
        light: "\u0441\u0432\u0456\u0442\u043B\u0438\u0439",
        sort: {
          label: "\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430:",
          stars: "\u0417\u0456\u0440\u043A\u0438",
          newest: "\u041D\u043E\u0432\u0456\u0448\u0456",
          oldest: "\u0421\u0442\u0430\u0440\u0456\u0448\u0456",
          lastUpdated: "\u041E\u0441\u0442\u0430\u043D\u043D\u0454 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0435",
          mostStale: "\u041D\u0430\u0439\u043D\u0435\u0441\u0432\u0456\u0436\u0456\u0448\u0438\u0439",
          aToZ: "A-Z",
          zToA: "Z-A"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - Readme",
        loading: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F...",
        errorLoading: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F README"
      },
      github: "GitHub",
      install: "\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438",
      remove: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
      save: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
      colour_one: "\u043A\u043E\u043B\u0456\u0440",
      colour_other: "\u043A\u043E\u043B\u044C\u043E\u0440\u0438",
      favourite: "\u0443\u043B\u044E\u0431\u043B\u0435\u043D\u0435",
      notifications: {
        wrongLocalTheme: "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u043E\u0441\u0442\u0430\u0432\u0442\u0435 'marketplace' \u0443 \u0437\u043C\u0456\u043D\u043D\u0443 current_theme \u0443 \u0444\u0430\u0439\u043B\u0456 config-xpui.ini \u0449\u043E\u0431 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u044E\u0432\u0430\u0442\u0438 \u0442\u0435\u043C\u0438 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0443",
        tooManyRequests: "\u0417\u0430\u0431\u0430\u0433\u0430\u0442\u043E \u0437\u0430\u043F\u0438\u0442\u0456\u0432, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435",
        noCdnConnection: "\u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441 \u043D\u0435 \u043C\u043E\u0436\u0435 \u0437\u0432'\u044F\u0437\u0430\u0442\u0438\u0441\u044F \u0437 CDN. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0432\u0430\u0448\u0443 \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044E \u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443",
        markdownParsingError: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0440\u043E\u0437\u0431\u043E\u0440\u0443 markdown (HTTP {{status}})",
        noReadmeFile: "README \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",
        themeInstallationError: "\u0421\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0456 \u0442\u0435\u043C\u0438",
        extensionInstallationError: "\u0421\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0456 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F"
      }
    }
  };

  // src/resources/locales/zh-CN.json
  var zh_CN_default = {
    translation: {
      settings: {
        title: "Marketplace \u8BBE\u7F6E",
        optionsHeading: "\u9009\u9879",
        starCountLabel: "\u661F\u6807\u6570",
        tagsLabel: "\u6807\u7B7E",
        showArchived: "\u663E\u793A\u5DF2\u5B58\u6863\u4ED3\u5E93",
        devToolsLabel: "\u4E3B\u9898\u5F00\u53D1\u8005\u5DE5\u5177",
        hideInstalledLabel: "\u6D4F\u89C8\u65F6\u9690\u85CF\u5DF2\u5B89\u88C5\u9879\u76EE",
        colourShiftLabel: "\u6BCF\u5206\u949F\u5207\u6362\u914D\u8272",
        albumArtBasedColors: "\u6839\u636E\u4E13\u8F91\u5C01\u9762\u66F4\u6539\u914D\u8272",
        albumArtBasedColorsMode: "\u914D\u8272\u65B9\u6848 (ColorApi) \u6A21\u5F0F",
        albumArtBasedColorsVibrancy: "\u4E13\u8F91\u5C01\u9762\u53D6\u8272\u65B9\u6CD5",
        albumArtBasedColorsVibrancyToolTip: "Desaturated\uFF1A\u6700\u7A81\u51FA\u4F46\u8F83\u6697\u7684\u989C\u8272 \n Light Vibrant\uFF1A\u6700\u9C9C\u8273\u7684\u989C\u8272\uFF0C\u4F46\u7565\u5FAE\u8C03\u4EAE \n Prominent\uFF1A\u51FA\u73B0\u6700\u591A\u7684\u989C\u8272 \n Vibrant\uFF1A\u6700\u9C9C\u8273\u7684\u989C\u8272",
        albumArtColorsModeToolTip: "Monochrome Dark\uFF1A\u76F4\u63A5\u4EE5\u6240\u9009\u4E3B\u8272\u4E3A\u57FA\u7840\uFF0C\u4F7F\u7528\u4E0D\u540C\u8272\u8C03\u7684\u4E3B\u8272\u6DF7\u5408\u7070\u8272\u5F62\u6210\u914D\u8272\uFF0C\u4E0E Monochrome Light \u76F8\u53CD\u3002 \n Monochrome Light\uFF1A\u76F4\u63A5\u4EE5\u6240\u9009\u4E3B\u8272\u4E3A\u57FA\u7840\uFF0C\u4F7F\u7528\u4E0D\u540C\u8272\u8C03\u7684\u4E3B\u8272\u6DF7\u5408\u7070\u8272\u5F62\u6210\u914D\u8272\uFF0CMonochrome Light \u7684\u80CC\u666F\u8272\u5C06\u4F1A\u662F Monochrome Dark \u7684\u524D\u666F\u8272\u6216\u6587\u672C\u989C\u8272\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002 \n Analogic\uFF1A\u4EE5\u6240\u9009\u4E3B\u8272\u4E3A\u57FA\u7840\uFF0C\u4F7F\u7528\u8272\u8F6E\u4E0A\u4E3B\u8272\u7684\u90BB\u8FD1\u8272\u5F62\u6210\u914D\u8272\u3002 \n Analogic Complementary\uFF1A\u4EE5\u6240\u9009\u4E3B\u8272\u4E3A\u57FA\u7840\uFF0C\u4F7F\u7528\u8272\u8F6E\u4E0A\u4E3B\u8272\u7684\u90BB\u8FD1\u8272\u548C\u4E92\u8865\u8272\u5F62\u6210\u914D\u8272\u3002 \n Triad\uFF1A\u4EE5\u6240\u9009\u4E3B\u8272\u4E3A\u57FA\u7840\uFF0C\u4F7F\u7528\u8272\u8F6E\u4E0A\u4E3B\u8272\u7684\u7B49\u8DDD\u8272\u5F62\u6210\u914D\u8272\u3002 \n Quad\uFF1A\u4EE5\u6240\u9009\u4E3B\u8272\u4E3A\u57FA\u7840\uFF0C\u4F7F\u7528\u8272\u8F6E\u4E0A\u4E0E\u4E3B\u8272\u621090\u5EA6\u89D2\u7684\u989C\u8272\u5F62\u6210\u914D\u8272\u3002",
        tabsHeading: "\u6807\u7B7E\u9875",
        tabsDescription: "\u62D6\u653E\u4EE5\u6392\u5E8F\uFF0C\u70B9\u51FB\u4EE5\u542F\u7528/\u7981\u7528",
        resetHeading: "\u91CD\u7F6E",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "\u5378\u8F7D\u6240\u6709\u6269\u5C55\u548C\u4E3B\u9898\uFF0C\u5E76\u91CD\u7F6E\u8BBE\u7F6E",
        backupHeading: "\u5907\u4EFD/\u8FD8\u539F",
        backupLabel: "\u5907\u4EFD\u6216\u8FD8\u539F\u6240\u6709 Marketplace \u6570\u636E\uFF0C\u8FD9\u4E0D\u4F1A\u5F71\u54CD\u5176\u5B89\u88C5\u7684\u5185\u5BB9\u3002",
        backupBtn: "\u6253\u5F00",
        versionHeading: "\u7248\u672C",
        versionBtn: "\u590D\u5236",
        versionCopied: "\u5DF2\u590D\u5236"
      },
      tabs: {
        Extensions: "\u6269\u5C55",
        Themes: "\u4E3B\u9898",
        Snippets: "\u7247\u6BB5",
        Apps: "\u5E94\u7528",
        Installed: "\u5DF2\u5B89\u88C5"
      },
      snippets: {
        addTitle: "\u6DFB\u52A0\u7247\u6BB5",
        duplicateName: "\u8BE5\u540D\u79F0\u5DF2\u88AB\u4F7F\u7528\uFF01",
        editTitle: "\u7F16\u8F91\u7247\u6BB5",
        viewTitle: "\u67E5\u770B\u7247\u6BB5",
        customCSS: "\u81EA\u5B9A\u4E49 CSS",
        customCSSPlaceholder: "\u5728\u6B64\u5904\u8F93\u5165\u4F60\u7684\u81EA\u5B9A\u4E49 CSS\uFF01\u4F60\u53EF\u4EE5\u5728\u300C\u5DF2\u5B89\u88C5\u300D\u6807\u7B7E\u9875\u7BA1\u7406\u5B83\u4EEC\u3002",
        snippetName: "\u7247\u6BB5\u540D\u79F0",
        snippetNamePlaceholder: "\u8F93\u5165\u81EA\u5B9A\u4E49\u7247\u6BB5\u7684\u540D\u79F0",
        snippetDesc: "\u7247\u6BB5\u63CF\u8FF0",
        snippetDescPlaceholder: "\u8F93\u5165\u81EA\u5B9A\u4E49\u7247\u6BB5\u7684\u63CF\u8FF0",
        snippetPreview: "\u7247\u6BB5\u9884\u89C8",
        optional: "\u9009\u586B",
        addImage: "\u6DFB\u52A0\u56FE\u50CF",
        changeImage: "\u66F4\u6539\u56FE\u50CF",
        saveCSS: "\u4FDD\u5B58 CSS"
      },
      reloadModal: {
        title: "\u91CD\u65B0\u52A0\u8F7D",
        description: "\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\uFF0C\u624D\u80FD\u5B8C\u6210\u6B64\u64CD\u4F5C\u3002",
        reloadNow: "\u7ACB\u5373\u91CD\u65B0\u52A0\u8F7D",
        reloadLater: "\u7A0D\u540E\u91CD\u65B0\u52A0\u8F7D"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "\u8BBE\u7F6E\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F",
        settingsSaved: "\u8BBE\u7F6E\u5DF2\u4FDD\u5B58\u5230\u6587\u4EF6",
        noDataPasted: "\u672A\u7C98\u8D34\u6570\u636E",
        invalidJSON: "\u65E0\u6548\u7684 JSON",
        inputLabel: "Marketplace \u8BBE\u7F6E",
        inputPlaceholder: "\u5728\u6B64\u5904\u590D\u5236/\u7C98\u8D34\u8BBE\u7F6E",
        exportBtn: "\u5BFC\u51FA",
        importBtn: "\u5BFC\u5165",
        fileImportBtn: "\u4ECE\u6587\u4EF6\u5BFC\u5165"
      },
      devTools: {
        title: "\u4E3B\u9898\u5F00\u53D1\u8005\u5DE5\u5177",
        noThemeInstalled: "\u9519\u8BEF\uFF1A\u672A\u5B89\u88C5 Marketplace \u4E3B\u9898",
        noThemeManifest: "\u9519\u8BEF\uFF1A\u672A\u627E\u5230\u4E3B\u9898\u6E05\u5355\u6587\u4EF6",
        colorIniEditor: "Color.ini \u7F16\u8F91\u5668",
        colorIniEditorPlaceholder: "[your-colour-scheme-name]",
        invalidCSS: "\u65E0\u6548\u7684 CSS"
      },
      updateModal: {
        title: "\u66F4\u65B0 Marketplace",
        description: "\u66F4\u65B0 Spicetify Marketplace \u4EE5\u83B7\u53D6\u65B0\u529F\u80FD\u548C\u9519\u8BEF\u4FEE\u590D\u3002",
        currentVersion: "\u5F53\u524D\u7248\u672C\uFF1A{{version}}",
        latestVersion: "\u6700\u65B0\u7248\u672C\uFF1A{{version}}",
        whatsChanged: "\u65B0\u7248\u53D8\u5316",
        seeChangelog: "\u67E5\u770B\u66F4\u65B0\u65E5\u5FD7",
        howToUpgrade: "\u5347\u7EA7\u6307\u5F15",
        viewGuide: "\u67E5\u770B\u6307\u5357"
      },
      grid: {
        spicetifyMarketplace: "Spicetify Marketplace",
        newUpdate: "\u6709\u66F4\u65B0",
        addCSS: "\u6DFB\u52A0 CSS",
        search: "\u641C\u7D22",
        installed: "\u5DF2\u5B89\u88C5",
        lastUpdated: "\u4E0A\u6B21\u66F4\u65B0\u4E8E {{val, datetime}}",
        externalJS: "\u5916\u90E8 JS",
        archived: "\u5DF2\u5B58\u6863",
        dark: "\u6DF1\u8272",
        light: "\u6D45\u8272",
        sort: {
          label: "\u6392\u5E8F:",
          stars: "\u661F\u6807",
          newest: "\u6700\u65B0",
          oldest: "\u6700\u65E7",
          lastUpdated: "\u6700\u8FD1\u66F4\u65B0",
          mostStale: "\u6700\u4E45\u672A\u66F4\u65B0",
          aToZ: "A-Z",
          zToA: "Z-A"
        }
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) - README",
        loading: "\u52A0\u8F7D\u4E2D...",
        errorLoading: "\u52A0\u8F7D README \u65F6\u51FA\u9519"
      },
      github: "GitHub",
      install: "\u5B89\u88C5",
      remove: "\u79FB\u9664",
      save: "\u4FDD\u5B58",
      colour_one: "\u989C\u8272",
      colour_other: "\u989C\u8272",
      favourite: "\u6536\u85CF",
      notifications: {
        wrongLocalTheme: "\u8BF7\u5C06 config-xpui.ini \u4E2D\u7684 current_theme \u8BBE\u7F6E\u4E3A 'marketplace' \u4EE5\u4F7F\u7528 Marketplace \u5B89\u88C5\u4E3B\u9898",
        tooManyRequests: "\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",
        noCdnConnection: "Marketplace \u65E0\u6CD5\u8FDE\u63A5\u81F3 CDN\uFF0C\u8BF7\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u914D\u7F6E",
        markdownParsingError: "\u89E3\u6790 markdown \u65F6\u51FA\u9519 (HTTP {{status}})",
        noReadmeFile: "\u672A\u627E\u5230 README \u6587\u4EF6",
        themeInstallationError: "\u5B89\u88C5\u4E3B\u9898\u65F6\u51FA\u9519",
        extensionInstallationError: "\u5B89\u88C5\u6269\u5C55\u65F6\u51FA\u9519"
      }
    }
  };

  // src/resources/locales/zh-TW.json
  var zh_TW_default = {
    translation: {
      settings: {
        title: "\u8A2D\u5B9A",
        optionsHeading: "\u9078\u9805",
        starCountLabel: "\u6536\u85CF\u6578",
        tagsLabel: "\u6A19\u7C64",
        devToolsLabel: "\u4E3B\u984C\u958B\u767C\u8005\u5DE5\u5177",
        hideInstalledLabel: "\u700F\u89BD\u6642\u96B1\u85CF\u5DF2\u5B89\u88DD\u9805\u76EE",
        colourShiftLabel: "\u6BCF\u5206\u9418\u9032\u884C\u8272\u8ABF\u504F\u79FB",
        tabsHeading: "\u5206\u9801",
        tabsDescription: "\u62D6\u653E\u66F4\u6539\u987A\u5E8F\uFF0C\u70B9\u51FB\u542F\u7528/\u7981\u7528",
        resetHeading: "\u91CD\u8A2D",
        resetBtn: "$t(settings.resetHeading)",
        resetDescription: "\u89E3\u9664\u5B89\u88DD\u6240\u6709\u64F4\u5145\u5957\u4EF6\u548C\u4E3B\u984C\uFF0C \u4E26\u91CD\u8A2D\u504F\u597D\u8A2D\u5B9A",
        backupHeading: "\u5099\u4EFD\u8207\u9084\u539F",
        backupLabel: "\u5099\u4EFD\u6216\u9084\u539F\u6240\u6709 Marketplace \u4E2D\u7684\u8CC7\u6599\uFF08\u4E0D\u5305\u542B\u5F9E Marketplace \u5B89\u88DD\u7684\u64F4\u5145\u5143\u4EF6\u7684\u8A2D\u5B9A\uFF09\u3002",
        backupBtn: "\u958B\u555F",
        albumArtBasedColors: "\u6839\u64DA\u5C08\u8F2F\u5C01\u9762\u9078\u8272",
        albumArtBasedColorsMode: "\u8272\u5F69\u65B9\u6848 (ColorApi) \u6A21\u5F0F",
        albumArtBasedColorsVibrancy: "\u5DF2\u5F9E\u5C08\u8F2F\u5C01\u9762\u62BD\u53D6\u984F\u8272",
        albumArtBasedColorsVibrancyToolTip: "Desaturated\uFF1A\u6700\u7A81\u51FA\u4F46\u4EAE\u5EA6\u8F03\u4F4E\u7684\u984F\u8272 \n Light Vibrant\uFF1A\u6700\u63A5\u8FD1 Vibrant \u7684\u8272\u5F69\uFF0C\u4F46\u4EAE\u5EA6\u7A0D\u5FAE\u63D0\u5347\u4E00\u4E9B \n Prominent\uFF1A\u5C08\u8F2F\u5C01\u9762\u88E1\u9762\u51FA\u73FE\u6700\u591A\u7684\u8272\u5F69 \n Vibrant\uFF1A\u5C08\u8F2F\u4E2D\u6700\u660E\u4EAE\u7684\u8272\u5F69",
        albumArtColorsModeToolTip: "Monochrome Dark\uFF1A\u9019\u500B\u8272\u5F69\u65B9\u6848\u76F4\u63A5\u4EE5\u9078\u64C7\u7684\u4E3B\u8272\u5F69\u70BA\u57FA\u790E\uFF0C\u4F46\u4F7F\u7528\u6BD4\u8F03\u4E0D\u4E00\u6A23\u7684\u8272\u8ABF\u4E26\u4E14\u878D\u5165\u7070\u8272\u3002\u9019\u548C Monochrome Light \u6B63\u597D\u76F8\u53CD\u3002 \n Monochrome Light\uFF1A\u9019\u500B\u8272\u5F69\u65B9\u6848\u76F4\u63A5\u4EE5\u9078\u64C7\u7684\u4E3B\u8272\u5F69\u70BA\u57FA\u790E\uFF0C\u4F46\u4F7F\u7528\u6BD4\u8F03\u4E0D\u4E00\u6A23\u7684\u8272\u8ABF\u4E26\u4E14\u878D\u5165\u7070\u8272\u3002\u9019\u548C Monochrome Light \u6B63\u597D\u76F8\u53CD\u3002Monochrome Light \u7684\u80CC\u666F\u8272\u6703\u662F Monochrome Dark \u7684\u524D\u666F\u6216\u6587\u5B57\u984F\u8272\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002 \n Analogic\uFF1A\u9019\u500B\u8272\u5F69\u65B9\u6848\u4EE5\u9078\u64C7\u7684\u4E3B\u8272\u5F69\u70BA\u57FA\u790E\uFF0C\u4F7F\u7528\u8272\u74B0\u4E0A\u4E3B\u8272\u5F69\u9130\u8FD1\u7684\u8272\u5F69\u3002 \n Analogic Complementary\uFF1A\u9019\u500B\u8272\u5F69\u65B9\u6848\u4EE5\u9078\u64C7\u7684\u4E3B\u8272\u5F69\u70BA\u57FA\u790E\uFF0C\u4F7F\u7528\u8272\u74B0\u4E0A\u4E3B\u8272\u5F69\u9130\u8FD1\u7684\u8272\u5F69\u4EE5\u53CA\u4E92\u88DC\u8272\u3002 \n Triad\uFF1A\u9019\u500B\u8272\u5F69\u65B9\u6848\u4EE5\u9078\u64C7\u7684\u4E3B\u8272\u5F69\u70BA\u57FA\u790E\uFF0C\u4F7F\u7528\u8272\u74B0\u4E0A\u548C\u4E3B\u8272\u5F69\u8DDD\u96E2\u76F8\u7B49\u7684\u984F\u8272\u3002 \n Quad\uFF1A\u9019\u500B\u8272\u5F69\u65B9\u6848\u4EE5\u9078\u64C7\u7684\u4E3B\u8272\u5F69\u70BA\u57FA\u790E\uFF0C\u4F7F\u7528\u8272\u74B0\u4E0A\u548C\u4E3B\u8272\u5F69\u5DEE 90 \u5EA6\u7684\u984F\u8272\u3002",
        versionHeading: "\u7248\u672C",
        versionBtn: "\u8907\u88FD",
        versionCopied: "\u5DF2\u8907\u88FD"
      },
      tabs: {
        Extensions: "\u64F4\u5145\u5957\u4EF6",
        Themes: "\u4E3B\u984C",
        Snippets: "\u5FAE\u8ABF\u7247\u6BB5",
        Apps: "\u529F\u80FD\u6A21\u7D44",
        Installed: "\u5DF2\u5B89\u88DD\u9805\u76EE"
      },
      snippets: {
        addTitle: "\u52A0\u5165\u5FAE\u8ABF\u7247\u6BB5",
        editTitle: "\u7DE8\u8F2F\u5FAE\u8ABF\u7247\u6BB5",
        viewTitle: "\u6AA2\u8996\u5FAE\u8ABF\u7247\u6BB5",
        customCSS: "\u81EA\u8A02 CSS",
        customCSSPlaceholder: "\u9019\u88E1\u53EF\u4EE5\u8F38\u5165\u60A8\u7684\u81EA\u8A02 CSS\uFF01\u60A8\u53EF\u4EE5\u5728\u300C\u5DF2\u5B89\u88DD\u9805\u76EE\u300D\u5206\u9801\u4E2D\u770B\u5230\u9019\u4E9B\u7247\u6BB5\uFF0C\u9032\u800C\u9032\u884C\u7BA1\u7406\u3002",
        snippetName: "\u5FAE\u8ABF\u7247\u6BB5\u540D\u7A31",
        snippetNamePlaceholder: "\u8F38\u5165\u81EA\u8A02\u5FAE\u8ABF\u7247\u6BB5\u7684\u540D\u7A31",
        snippetDesc: "\u5FAE\u8ABF\u7247\u6BB5\u63CF\u8FF0",
        snippetDescPlaceholder: "\u8F38\u5165\u81EA\u8A02\u5FAE\u8ABF\u7247\u6BB5\u7684\u63CF\u8FF0",
        snippetPreview: "\u5FAE\u8ABF\u7247\u6BB5\u9810\u89BD\u5716",
        optional: "\u975E\u5FC5\u9808",
        addImage: "\u52A0\u5165\u5F71\u50CF",
        changeImage: "\u66F4\u6539\u5F71\u50CF",
        saveCSS: "\u5132\u5B58 CSS"
      },
      reloadModal: {
        title: "\u91CD\u65B0\u8F09\u5165",
        description: "\u9700\u8981\u91CD\u65B0\u8F09\u5165\u9801\u9762\uFF0C\u624D\u80FD\u5B8C\u6210\u9019\u500B\u64CD\u4F5C\u3002",
        reloadNow: "\u7ACB\u5373\u91CD\u65B0\u8F09\u5165",
        reloadLater: "\u7A0D\u5F8C\u91CD\u65B0\u8F09\u5165"
      },
      backupModal: {
        title: "$t(settings.backupHeading)",
        settingsCopied: "\u5DF2\u5C07\u8A2D\u5B9A\u8907\u88FD\u81F3\u526A\u8CBC\u7C3F",
        noDataPasted: "\u6C92\u6709\u8CBC\u4E0A\u8CC7\u6599",
        invalidJSON: "JSON \u7121\u6548",
        inputLabel: "Marketplace \u8A2D\u5B9A",
        inputPlaceholder: "\u5728\u6B64\u8907\u88FD\u6216\u8CBC\u4E0A\u8A2D\u5B9A",
        exportBtn: "\u532F\u51FA",
        importBtn: "\u532F\u5165",
        fileImportBtn: "\u5F9E\u6A94\u6848\u532F\u5165"
      },
      devTools: {
        title: "\u4E3B\u984C\u958B\u767C\u8005\u5DE5\u5177",
        noThemeInstalled: "\u932F\u8AA4\uFF1A\u6C92\u6709\u5B89\u88DD Marketplace \u4E3B\u984C",
        noThemeManifest: "\u932F\u8AA4\uFF1A\u627E\u4E0D\u5230\u4E3B\u984C\u8CC7\u8A0A\u6E05\u55AE",
        colorIniEditor: "Color.ini \u7DE8\u8F2F\u5668",
        colorIniEditorPlaceholder: "[\u60A8\u7684\u8272\u5F69\u914D\u7F6E\u540D\u7A31]",
        invalidCSS: "CSS \u7121\u6548"
      },
      grid: {
        spicetifyMarketplace: "Spicetify Marketplace",
        newUpdate: "\u6709\u66F4\u65B0",
        addCSS: "\u52A0\u5165 CSS",
        search: "\u641C\u5C0B",
        installed: "\u5DF2\u7D93\u5B89\u88DD",
        lastUpdated: "\u4E0A\u6B21\u66F4\u65B0\u65BC {{val, datetime}}",
        externalJS: "\u6709\u5916\u90E8 JS",
        dark: "\u6697\u8272",
        light: "\u4EAE\u8272"
      },
      readmePage: {
        title: "$t(grid.spicetifyMarketplace) \u2013 \u8AAA\u660E",
        loading: "\u6B63\u5728\u8F09\u5165\u2026\u2026",
        errorLoading: "\u8F09\u5165 README \u6642\u767C\u751F\u932F\u8AA4"
      },
      github: "GitHub",
      install: "\u5B89\u88DD",
      remove: "\u79FB\u9664",
      save: "\u5132\u5B58",
      colour_one: "\u8272\u5F69",
      colour_other: "\u8272\u5F69",
      favourite: "\u6536\u85CF"
    }
  };

  // src/resources/locales/index.ts
  var locales_default = {
    ar: ar_default,
    ca: ca_default,
    "de-DE": de_DE_default,
    "en-US": en_US_default,
    en: en_default,
    es: es_default,
    et: et_default,
    fi: fi_default,
    fr: fr_default,
    it: it_default,
    ja: ja_default,
    ko: ko_default,
    pl: pl_default,
    "pt-BR": pt_BR_default,
    ru: ru_default,
    tr: tr_default,
    uk: uk_default,
    "zh-CN": zh_CN_default,
    "zh-TW": zh_TW_default
  };

  // src/app.tsx
  instance.use(initReactI18next).use(Browser).init({
    resources: locales_default,
    detection: {
      order: ["navigator", "htmlTag"]
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });
  var App2 = class extends import_react40.default.Component {
    state = {
      count: 0,
      CONFIG: {}
    };
    CONFIG;
    constructor(props) {
      super(props);
      const tabsData = getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.tabs, null);
      let tabs = [];
      try {
        tabs = tabsData;
        if (!Array.isArray(tabs)) {
          throw new Error("Could not parse marketplace tabs key");
        }
        if (tabs.length === 0) {
          throw new Error("Empty marketplace tabs key");
        }
        if (tabs.filter((tab2) => !tab2).length > 0) {
          throw new Error("Falsey marketplace tabs key");
        }
      } catch {
        tabs = ALL_TABS;
        localStorage.setItem(LOCALSTORAGE_KEYS.tabs, JSON.stringify(tabs));
      }
      let schemes = {};
      let activeScheme = null;
      try {
        const installedThemeKey = getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.themeInstalled, null);
        if (installedThemeKey) {
          const installedTheme = getLocalStorageDataFromKey(installedThemeKey, null);
          if (!installedTheme)
            throw new Error("No installed theme data");
          schemes = installedTheme.schemes;
          activeScheme = installedTheme.activeScheme;
        } else {
          console.debug("No theme set as installed");
        }
      } catch (err) {
        console.error(err);
      }
      this.CONFIG = {
        visual: {
          stars: JSON.parse(getLocalStorageDataFromKey("marketplace:stars", true)),
          tags: JSON.parse(getLocalStorageDataFromKey("marketplace:tags", true)),
          showArchived: JSON.parse(getLocalStorageDataFromKey("marketplace:showArchived", false)),
          hideInstalled: JSON.parse(getLocalStorageDataFromKey("marketplace:hideInstalled", false)),
          colorShift: JSON.parse(getLocalStorageDataFromKey("marketplace:colorShift", false)),
          themeDevTools: JSON.parse(getLocalStorageDataFromKey("marketplace:themeDevTools", false)),
          albumArtBasedColors: JSON.parse(getLocalStorageDataFromKey("marketplace:albumArtBasedColors", false)),
          albumArtBasedColorsMode: getLocalStorageDataFromKey("marketplace:albumArtBasedColorsMode") || "monochrome-light",
          albumArtBasedColorsVibrancy: getLocalStorageDataFromKey("marketplace:albumArtBasedColorsVibrancy") || "PROMINENT",
          type: JSON.parse(getLocalStorageDataFromKey("marketplace:type", false)),
          followers: JSON.parse(getLocalStorageDataFromKey("marketplace:followers", false))
        },
        tabs,
        activeTab: getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.activeTab, tabs[0]),
        theme: {
          activeThemeKey: getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.themeInstalled, null),
          schemes,
          activeScheme
        },
        sort: getLocalStorageDataFromKey(LOCALSTORAGE_KEYS.sort, "stars")
      };
      if (!this.CONFIG.activeTab || !this.CONFIG.tabs.filter((tab2) => tab2.name === this.CONFIG.activeTab).length) {
        this.CONFIG.activeTab = this.CONFIG.tabs[0].name;
      }
    }
    updateConfig = (config) => {
      this.CONFIG = { ...config };
      console.debug("updated config", this.CONFIG);
      this.setState({
        CONFIG: { ...config }
      });
    };
    render() {
      const { location: location2, replace } = Spicetify.Platform.History;
      if (location2.pathname === `${CUSTOM_APP_PATH}/readme`) {
        if (!location2.state?.data) {
          replace(CUSTOM_APP_PATH);
          return null;
        }
        return /* @__PURE__ */ import_react40.default.createElement(ReadmePage_default, {
          title: t("readmePage.title"),
          data: location2.state.data
        });
      }
      return /* @__PURE__ */ import_react40.default.createElement(Grid_default, {
        title: t("grid.spicetifyMarketplace"),
        CONFIG: this.CONFIG,
        updateAppConfig: this.updateConfig
      });
    }
  };
  var app_default = withTranslation()(App2);

  // ../spicetify-creator/index.jsx
  var import_react41 = __toESM(require_react());
  function render() {
    return /* @__PURE__ */ import_react41.default.createElement(app_default, null);
  }
  return __toCommonJS(spicetify_creator_exports);
})();
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
const render=()=>marketplace.default();
