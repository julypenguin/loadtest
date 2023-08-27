let apiDomain = ''

if (process.env.NODE_ENV !== 'production') {
    const config = require("../config.json");
    apiDomain = config.apiDomain
} else {
    const path = require('path')
    const fs = require('fs')
    const jsonFilePath = path.resolve(__dirname, 'config.json');
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
    apiDomain = jsonData.apiDomain
}

module.exports = {
    apiDomain,
}
