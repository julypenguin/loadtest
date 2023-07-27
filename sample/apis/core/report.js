const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得系統報表
 * GET /core/report
 * @param {Object} params - return value of action creator
 */
const getReport = (setting = {}, data) => loadtest({ url: formatUrl(`/core/report`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getReport,
}