var e=require("fs-extra"),r=require("path"),i=require("child_process"),t=require("util"),o=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireaf25;o.register("1xhaw",((n,a)=>{function s(r){return e.pathExists(r)}async function d(e){try{var r;return null===(r=(await l(e,["--version"])).stderr.match(/v(\d\S*)\s/))||void 0===r?void 0:r[1]}catch(e){return void console.error(e)}}async function c(){const i=r.join(r.dirname(__dirname),"dist"),t="serve-d"+("win32"===process.platform?".exe":""),n=r.join(i,`${process.platform}-${process.arch}`),a=await(async()=>{const i=process.env.HOME;if("string"==typeof i&&""!==i&&"linux"===process.platform)return await e.pathExists(r.join(i,".local","share"))?r.join(i,".local","share","code-d","bin"):r.join(i,".code-d","bin");if("win32"===process.platform){const e=process.env.APPDATA;if("string"==typeof e&&""!==e)return r.join(e,"code-d","bin")}else if("string"==typeof i&&""!==i)return r.join(i,".code-d","bin");return""})(),c=r.join(a,t);if(n){const e=r.join(n,t);await s(c)&&await(async(e,r)=>{const i=await o("aee7V"),[t,n]=await Promise.all([d(e),d(r)]);return"string"==typeof t&&"string"==typeof n&&""!==t&&""!==n&&-1!==i(t,n)})(c,e)||await(async(e,r)=>{const{copy:i}=await $3ff1ff004a9ddf5d$importAsync$8ed180d50d8d002d;atom.notifications.addInfo("Installing/Updating D servers..."),await i(e,r,{overwrite:!0}),atom.notifications.addSuccess("D servers was installed/updated")})(n,a)}else await s(c)||atom.notifications.addError(`serve-d binary is not available for ${process.platform}.\n        Please built it from the source, place it under ${a}, and restart Atom.`);return c}Object.defineProperty(n.exports,"installServeD",{get:()=>c,set:void 0,enumerable:!0,configurable:!0});const l=t.promisify(i.execFile)})),o.register("aee7V",((e,r)=>{e.exports=Promise.resolve(require("./compare.049958b5.js")).then((()=>o("882zr")))}));
//# sourceMappingURL=installation.5e78f2a5.js.map