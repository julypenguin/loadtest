const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 取得暫存訊息列表
 * GET /core/tmpmessage
 * @param {Object} params - return value of action creator
 */
const getTmpmsgList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/tmpmessage`, data), method: 'GET', ...setting })

/**
 * 取得特定暫存訊息
 * GET /core/tmpmessage/${path.pi_sid}
 * @param {Object} params - return value of action creator
 */
const getTmpmsgDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/tmpmessage/:pi_sid`, data), method: 'GET', ...setting })

/**
 * 修改特定暫存訊息
 * PATCH /core/tmpmessage/${path.pi_sid}
 * @param {Object} params - return value of action creator
 */
const updateTmpmsg = (setting = {}, data) => loadtest({ url: formatUrl(`/core/tmpmessage/:pi_sid`, data), method: 'PATCH', ...setting })

/**
 * 刪除特定暫存訊息
 * DELETE /core/tmpmessage/${path.pi_sid}
 * @param {Object} params - return value of action creator
 */
const deleteTmpmsg = (setting = {}, data) => loadtest({ url: formatUrl(`/core/tmpmessage/:pi_sid`, data), method: 'DELETE', ...setting })

/**
 * 發布特定暫存訊息
 * POST /core/tmpmessage/${path.pi_sid}
 * @param {Object} params - return value of action creator
 */
const publishTmpmsg = (setting = {}, data) => loadtest({ url: formatUrl(`/core/tmpmessage/:pi_sid`, data), method: 'POST', ...setting })

/**
 * 取得暫存訊息附件列表
 * GET /core/tmpmessage/${path.pi_sid}/attach
 * @param {Object} params - return value of action creator
 */
const getTmpmsgAttachList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/tmpmessage/:pi_sid/attach`, data), method: 'GET', ...setting })

/**
 * 新增特定暫存訊息附件
 * POST /core/tmpmessage/${path.pi_sid}/attach
 * @param {Object} params - return value of action creator
 */
const addTmpmsgAttach = (setting = {}, data) => loadtest({ url: formatUrl(`/core/tmpmessage/:pi_sid/attach`, data), method: 'POST', ...setting })

/**
 * 修改特定暫存訊息附件
 * PATCH /core/tmpmessage/${path.pi_sid}/attach
 * @param {Object} params - return value of action creator
 */
const updateTmpmsgAttachDesc = (setting = {}, data) => loadtest({ url: formatUrl(`/core/tmpmessage/:pi_sid/attach`, data), method: 'PATCH', ...setting })

/**
 * 刪除特定暫存訊息附件
 * DELETE /core/tmpmessage/${path.pi_sid}/attach
 * @param {Object} params - return value of action creator
 */
const removeTmpmsgAttach = (setting = {}, data) => loadtest({ url: formatUrl(`/core/tmpmessage/:pi_sid/attach`, data), method: 'DELETE', ...setting })

module.exports = {
    updateTmpmsgAttachDesc,
    removeTmpmsgAttach,
}