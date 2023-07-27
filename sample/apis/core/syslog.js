const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 取得系統個資紀錄列表
 * GET /core/syslog
 * @param {Object} params - return value of action creator
 */
const getSyslogList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/syslog`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定系統個資紀錄
 * GET /core/syslog/${path.log_sid}
 * @param {Object} params - return value of action creator
 */
const getSyslog = (setting = {}, data) => loadtest({ url: formatUrl(`/core/syslog/:log_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getSyslogList,
    getSyslog,
}