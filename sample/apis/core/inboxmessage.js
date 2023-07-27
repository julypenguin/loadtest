const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 取得未讀收件夾訊息數量統計
 * GET /core/me/receiving/unread
 * @param {*} params - return value of action creator
 */
const getInboxmsgUnreadCount = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/receiving/unread`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得收件夾訊息列表
 * GET /core/me/receiving
 * @param {*} params - return value of action creator
 */
const getInboxmsgList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/receiving`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得指定收件夾訊息之內容
 * GET /core/me/receiving/${path.pis_sid}
 * @param {*} params - return value of action creator
 */
const getInboxmsgDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/receiving/:pis_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次刪除收件夾訊息  
 * DELETE /core/me/receiving
 * @param {*} params - return value of action creator
 */
const deleteInboxmsg = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/receiving`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getInboxmsgUnreadCount,
    getInboxmsgList,
    getInboxmsgDetail,
    deleteInboxmsg,
}