const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得上線人員列表
 * GET /core/online
 * @param {Object} params - return value of action creator
 */
const getOnlineList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/online`, data), method: 'GET', ...setting })

/**
 * 強制離線特定上線人員
 * DELETE /core/online/${path.aol_sid}
 * @param {Object} params - return value of action creator
 */
const killOnline = (setting = {}, data) => loadtest({ url: formatUrl(`/core/online/:aol_sid`, data), method: 'DELETE', ...setting })

module.exports = {
    getOnlineList,
    killOnline,
}