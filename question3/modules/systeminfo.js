const os = require('os');

exports.systeminfo = function () {
    return {
        'osArch': os.arch(),
        'osHostname': os.hostname(),
        'osType': os.type()
    }
}

exports.userinfo = function() {
    return {
        'osUsername': os.userInfo()['username'],
        'osHomeDir': os.homedir()
    }
}