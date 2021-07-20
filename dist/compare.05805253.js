var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire4554;e.register("6g2vW",((r,E)=>{var s=e("3FN2j");r.exports=(e,r,E)=>new s(e,E).compare(new s(r,E))})),e.register("3FN2j",(function(r,E){var s=e("6iPE3"),t=e("6kOFi"),i=t.MAX_LENGTH,I=t.MAX_SAFE_INTEGER,o=e("5HwW3"),n=o.t,a=o.re,h=e("7eIUa"),N=e("7dImP").compareIdentifiers;class R{constructor(e,r){if(r=h(r),e instanceof R){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>i)throw new TypeError(`version is longer than ${i} characters`);s("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const E=e.trim().match(r.loose?a[n.LOOSE]:a[n.FULL]);if(!E)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+E[1],this.minor=+E[2],this.patch=+E[3],this.major>I||0>this.major)throw new TypeError("Invalid major version");if(this.minor>I||0>this.minor)throw new TypeError("Invalid minor version");if(this.patch>I||0>this.patch)throw new TypeError("Invalid patch version");this.prerelease=E[4]?E[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const r=+e;if(r>=0&&I>r)return r}return e})):[],this.build=E[5]?E[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version}toString(){return this.version}compare(e){if(s("SemVer.compare",this.version,this.options,e),!(e instanceof R)){if("string"==typeof e&&e===this.version)return 0;e=new R(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof R||(e=new R(e,this.options)),N(this.major,e.major)||N(this.minor,e.minor)||N(this.patch,e.patch)}comparePre(e){if(e instanceof R||(e=new R(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const E=this.prerelease[r],t=e.prerelease[r];if(s("prerelease compare",r,E,t),void 0===E&&void 0===t)return 0;if(void 0===t)return 1;if(void 0===E)return-1;if(E!==t)return N(E,t)}while(++r)}compareBuild(e){e instanceof R||(e=new R(e,this.options));let r=0;do{const E=this.build[r],t=e.build[r];if(s("prerelease compare",r,E,t),void 0===E&&void 0===t)return 0;if(void 0===t)return 1;if(void 0===E)return-1;if(E!==t)return N(E,t)}while(++r)}inc(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this}}r.exports=R})),e.register("6iPE3",((e,r)=>{const E="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=E})),e.register("6kOFi",((e,r)=>{e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991,MAX_SAFE_COMPONENT_LENGTH:16}})),e.register("5HwW3",((r,E)=>{var s=e("6kOFi").MAX_SAFE_COMPONENT_LENGTH,t=e("6iPE3");const i=(E=r.exports={}).re=[],I=E.src=[],o=E.t={};let n=0;const a=(e,r,E)=>{const s=n++;t(s,r),o[e]=s,I[s]=r,i[s]=RegExp(r,E?"g":void 0)};a("NUMERICIDENTIFIER","0|[1-9]\\d*"),a("NUMERICIDENTIFIERLOOSE","[0-9]+"),a("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),a("MAINVERSION",`(${I[o.NUMERICIDENTIFIER]})\\.(${I[o.NUMERICIDENTIFIER]})\\.(${I[o.NUMERICIDENTIFIER]})`),a("MAINVERSIONLOOSE",`(${I[o.NUMERICIDENTIFIERLOOSE]})\\.(${I[o.NUMERICIDENTIFIERLOOSE]})\\.(${I[o.NUMERICIDENTIFIERLOOSE]})`),a("PRERELEASEIDENTIFIER",`(?:${I[o.NUMERICIDENTIFIER]}|${I[o.NONNUMERICIDENTIFIER]})`),a("PRERELEASEIDENTIFIERLOOSE",`(?:${I[o.NUMERICIDENTIFIERLOOSE]}|${I[o.NONNUMERICIDENTIFIER]})`),a("PRERELEASE",`(?:-(${I[o.PRERELEASEIDENTIFIER]}(?:\\.${I[o.PRERELEASEIDENTIFIER]})*))`),a("PRERELEASELOOSE",`(?:-?(${I[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${I[o.PRERELEASEIDENTIFIERLOOSE]})*))`),a("BUILDIDENTIFIER","[0-9A-Za-z-]+"),a("BUILD",`(?:\\+(${I[o.BUILDIDENTIFIER]}(?:\\.${I[o.BUILDIDENTIFIER]})*))`),a("FULLPLAIN",`v?${I[o.MAINVERSION]}${I[o.PRERELEASE]}?${I[o.BUILD]}?`),a("FULL",`^${I[o.FULLPLAIN]}$`),a("LOOSEPLAIN",`[v=\\s]*${I[o.MAINVERSIONLOOSE]}${I[o.PRERELEASELOOSE]}?${I[o.BUILD]}?`),a("LOOSE",`^${I[o.LOOSEPLAIN]}$`),a("GTLT","((?:<|>)?=?)"),a("XRANGEIDENTIFIERLOOSE",I[o.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*"),a("XRANGEIDENTIFIER",I[o.NUMERICIDENTIFIER]+"|x|X|\\*"),a("XRANGEPLAIN",`[v=\\s]*(${I[o.XRANGEIDENTIFIER]})(?:\\.(${I[o.XRANGEIDENTIFIER]})(?:\\.(${I[o.XRANGEIDENTIFIER]})(?:${I[o.PRERELEASE]})?${I[o.BUILD]}?)?)?`),a("XRANGEPLAINLOOSE",`[v=\\s]*(${I[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${I[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${I[o.XRANGEIDENTIFIERLOOSE]})(?:${I[o.PRERELEASELOOSE]})?${I[o.BUILD]}?)?)?`),a("XRANGE",`^${I[o.GTLT]}\\s*${I[o.XRANGEPLAIN]}$`),a("XRANGELOOSE",`^${I[o.GTLT]}\\s*${I[o.XRANGEPLAINLOOSE]}$`),a("COERCE",`(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?(?:$|[^\\d])`),a("COERCERTL",I[o.COERCE],!0),a("LONETILDE","(?:~>?)"),a("TILDETRIM",`(\\s*)${I[o.LONETILDE]}\\s+`,!0),E.tildeTrimReplace="$1~",a("TILDE",`^${I[o.LONETILDE]}${I[o.XRANGEPLAIN]}$`),a("TILDELOOSE",`^${I[o.LONETILDE]}${I[o.XRANGEPLAINLOOSE]}$`),a("LONECARET","(?:\\^)"),a("CARETTRIM",`(\\s*)${I[o.LONECARET]}\\s+`,!0),E.caretTrimReplace="$1^",a("CARET",`^${I[o.LONECARET]}${I[o.XRANGEPLAIN]}$`),a("CARETLOOSE",`^${I[o.LONECARET]}${I[o.XRANGEPLAINLOOSE]}$`),a("COMPARATORLOOSE",`^${I[o.GTLT]}\\s*(${I[o.LOOSEPLAIN]})$|^$`),a("COMPARATOR",`^${I[o.GTLT]}\\s*(${I[o.FULLPLAIN]})$|^$`),a("COMPARATORTRIM",`(\\s*)${I[o.GTLT]}\\s*(${I[o.LOOSEPLAIN]}|${I[o.XRANGEPLAIN]})`,!0),E.comparatorTrimReplace="$1$2$3",a("HYPHENRANGE",`^\\s*(${I[o.XRANGEPLAIN]})\\s+-\\s+(${I[o.XRANGEPLAIN]})\\s*$`),a("HYPHENRANGELOOSE",`^\\s*(${I[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${I[o.XRANGEPLAINLOOSE]})\\s*$`),a("STAR","(<|>)?=?\\s*\\*"),a("GTE0","^\\s*>=\\s*0.0.0\\s*$"),a("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")})),e.register("7eIUa",((e,r)=>{const E=["includePrerelease","loose","rtl"];e.exports=e=>e?"object"!=typeof e?{loose:!0}:E.filter((r=>e[r])).reduce(((e,r)=>(e[r]=!0,e)),{}):{}})),e.register("7dImP",((e,r)=>{const E=/^[0-9]+$/,s=(e,r)=>{const s=E.test(e),t=E.test(r);return s&&t&&(e=+e,r=+r),e===r?0:s&&!t?-1:t&&!s?1:r>e?-1:1};e.exports={compareIdentifiers:s,rcompareIdentifiers(e,r){return s(r,e)}}}));
//# sourceMappingURL=compare.05805253.js.map