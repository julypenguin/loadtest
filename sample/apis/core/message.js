const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");


/**
 * 取得收件夾列表
 * GET /core/message
 * @param {Object} params - return value of action creator
 */
const getMsgList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/message`, data), method: 'GET', ...setting })

/**
 * 批次刪除收件夾訊息
 * DELETE /core/message
 * @param {Object} params - return value of action creator
 */
const deleteMsg = (setting = {}, data) => loadtest({ url: formatUrl(`/core/message`, data), method: 'DELETE', ...setting })

/**
 * 新增暫存訊息並直接發布
 * POST /core/message/publish
 * @param {Object} params - return value of action creator
 */
const newMsgAndPublish = (setting = {}, data) => loadtest({ url: formatUrl(`/core/message/publish`, data), method: 'POST', ...setting })

/**
 * 新增暫存訊息
 * POST /core/message/save
 * @param {Object} params - return value of action creator
 */
const newMsgAndSave = (setting = {}, data) => loadtest({ url: formatUrl(`/core/message/save`, data), method: 'POST', ...setting })

/**
 * 個人收件夾未讀訊息數量
 * GET /core/message/unread
 * @param {Object} params - return value of action creator
 */
const getUnreadMsgCount = (setting = {}, data) => loadtest({ url: formatUrl(`/core/message/unread`, data), method: 'GET', ...setting })

/**
 * 取得特定收件訊息
 * GET /core/message/${path.pis_sid}
 * @param {Object} params - return value of action creator
 */
const getMsgDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/message/:pis_sid`, data), method: 'GET', ...setting })

/**
 * 取得特定收件訊息附件列表
 * GET /core/message/${path.pis_sid}/attach
 * @param {Object} params - return value of action creator
 */
const getMsgAttachList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/message/:pis_sid/attach`, data), method: 'GET', ...setting })

module.exports = {
    getMsgList,
    deleteMsg,
    newMsgAndPublish,
    newMsgAndSave,
    getUnreadMsgCount,
    getMsgDetail,
    getMsgAttachList,
}