const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 取得特定訊息模板
 * GET /core/messagetemplate/${path.it_sid}
 * @param {Object} params - return value of action creator
 */
const getMsgtemplateDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/messagetemplate/:it_sid`, data), method: 'GET', ...setting })

/**
 * 取得訊息模板列表
 * GET /core/messagetemplate
 * @param {Object} params - return value of action creator
 */
const getMsgtemplateList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/messagetemplate`, data), method: 'GET', ...setting })

/**
 * 刪除特定訊息模板
 * DELETE /core/messagetemplate/${path.it_sid}
 * @param {Object} params - return value of action creator
 */
const deleteMsgtemplate = (setting = {}, data) => loadtest({ url: formatUrl(`/core/messagetemplate/:it_sid`, data), method: 'DELETE', ...setting })

/**
 * 新增訊息模板列表
 * POST /core/messagetemplate
 * @param {Object} params - return value of action creator
 */
const newMsgtemplate = (setting = {}, data) => loadtest({ url: formatUrl(`/core/messagetemplate`, data), method: 'POST', ...setting })

/**
 * 修改特定訊息模板
 * PATCH /core/messagetemplate/${path.it_sid}
 * @param {Object} params - return value of action creator
 */
const updateMsgtemplate = (setting = {}, data) => loadtest({ url: formatUrl(`/core/messagetemplate/:it_sid`, data), method: 'PATCH', ...setting })

module.exports = {
    getMsgtemplateDetail,
    getMsgtemplateList,
    deleteMsgtemplate,
    newMsgtemplate,
    updateMsgtemplate,
}