var e=require("path"),r=e.join,t=e.dirname,i=require("child_process").execFile,s=require("util").promisify,a=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire4554;a.register("7cE4A",((e,o)=>{function n(e){return a("2jNG6").pathExists(e)}async function c(e){try{var r;return null===(r=(await l(e,["--version"])).stderr.match(/v(\d\S*)\s/))||void 0===r?void 0:r[1]}catch(e){return void console.error(e)}}async function d(){const e=r(t(__dirname),"dist"),i="serve-d"+("win32"===process.platform?".exe":""),s=r(e,`${process.platform}-${process.arch}`),o=await(async()=>{const e=process.env.HOME;if("string"==typeof e&&""!==e&&"linux"===process.platform)return await a("2jNG6").pathExists(r(e,".local","share"))?r(e,".local","share","code-d","bin"):r(e,".code-d","bin");if("win32"===process.platform){const e=process.env.APPDATA;if("string"==typeof e&&""!==e)return r(e,"code-d","bin")}else if("string"==typeof e&&""!==e)return r(e,".code-d","bin");return""})(),d=r(o,i);if(s){const e=r(s,i);await n(d)&&await(async(e,r)=>{const t=(await a("2dIjS")).default,[i,s]=await Promise.all([c(e),c(r)]);return"string"==typeof i&&"string"==typeof s&&""!==i&&""!==s&&-1!==t(i,s)})(d,e)||await(async(e,r)=>{const{copy:t}=await a("2jNG6");atom.notifications.addInfo("Installing/Updating D servers..."),await t(e,r,{overwrite:!0}),atom.notifications.addSuccess("D servers was installed/updated")})(s,o)}else await n(d)||atom.notifications.addError(`serve-d binary is not available for ${process.platform}.\n        Please built it from the source, place it under ${o}, and restart Atom.`);return d}Object.defineProperty(e.exports,"installServeD",{get:()=>d,set:void 0,enumerable:!0,configurable:!0});const l=s(i)})),a.register("2jNG6",((e,r)=>{e.exports=Promise.resolve(require("./fs-extra.51728e42.js")).then((()=>a("5dfor")))})),a.register("2dIjS",((e,r)=>{e.exports=Promise.resolve(require("./compare.05805253.js")).then((()=>a("6g2vW")))}));
//# sourceMappingURL=installation.d5898174.js.map