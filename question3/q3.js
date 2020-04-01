const info = require('./modules/systeminfo');

let {osArch, osHostname, osType} = info.systeminfo();
let {osUsername, osHomeDir} = info.userinfo();

console.log(`Operatig Sytem Info: \n\tosArch: ${osArch} \n\tosHostname: ${osHostname} \n\tosType: ${osType}`);
console.log(`User Info: \n\tosUsername: ${osUsername} \n\tosHomeDir: ${osHomeDir}`)