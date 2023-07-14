const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 自動登入
 * GET /core/autologin
 * @param {Object} params - return value of action creator
 */
const getAutologin = (setting = {}, data) => loadtest({ url: formatUrl(`/core/autologin`, data), method: 'GET', ...setting })

module.exports = {
    getAutologin,
}