const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 刪除特定權限對應細節
 * DELETE /core/permapping/${path.pm_sid}
 * @param {Object} params - return value of action creator
 */
const deletePrmap = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permapping/:pm_sid`, data), method: 'DELETE', ...setting })

/**
 * 取得特定權限對應細節
 * GET /core/permapping/${path.pm_sid}
 * @param {Object} params - return value of action creator
 */
const getPrmapDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permapping/:pm_sid`, data), method: 'GET', ...setting })

/**
 * 取得權限對應的列表
 * GET /core/permapping
 * @param {Object} params - return value of action creator
 */
const getPrmapList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permapping`, data), method: 'GET', ...setting })

/**
 * 取得權限對應的 webhook
 * GET /core/permapping/webhook
 * @param {Object} params - return value of action creator
 */
const getPrmapWebhook = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permapping/webhook`, data), method: 'GET', ...setting })

/**
 * 建立權限對應
 * POST /core/permapping
 * @param {Object} params - return value of action creator
 */
const newPrmap = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permapping`, data), method: 'POST', ...setting })

/**
 * 修改特定權限對應細節
 * PATCH /core/permapping/${path.pm_sid}
 * @param {Object} params - return value of action creator
 */
const updatePrmap = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permapping/:pm_sid`, data), method: 'PATCH', ...setting })

module.exports = {
    deletePrmap,
    getPrmapDetail,
    getPrmapList,
    getPrmapWebhook,
    newPrmap,
    updatePrmap,
}