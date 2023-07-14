const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 新增訂閱通知方式
 * POST /core/subscription
 * @param {Object} params - return value of action creator
 */
const newSubscription = (setting = {}, data) => loadtest({ url: formatUrl(`/core/subscription`, data), method: 'POST', ...setting })

/**
 * 取得組織下的所有訂閱通知方式
 * GET /core/subscription
 * @param {Object} params - return value of action creator
 */
const getSubscriptionList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/subscription`, data), method: 'GET', ...setting })

/**
 * 取得訂閱通知類型(for 訂閱通知方式)
 * GET /core/subscription/submethod
 * @param {Object} params - return value of action creator
 */
const getSubscriptionSubmethod = (setting = {}, data) => loadtest({ url: formatUrl(`/core/subscription/submethod`, data), method: 'GET', ...setting })

/**
 * 取得通知紀錄列表
 * GET /core/subscription/log
 * @param {Object} params - return value of action creator
 */
const getSubscriptionLog = (setting = {}, data) => loadtest({ url: formatUrl(`/core/subscription/log`, data), method: 'GET', ...setting })

/**
 * 修改特定訂閱方式
 * PATCH /core/subscription/${path.sr_sid}
 * @param {Object} params - return value of action creator
 */
const updateSubscription = (setting = {}, data) => loadtest({ url: formatUrl(`/core/subscription/:sr_sid`, data), method: 'PATCH', ...setting })

/**
 * 刪除特定訂閱方式
 * DELETE /core/subscription/${path.sr_sid}
 * @param {Object} params - return value of action creator
 */
const deleteSubscription = (setting = {}, data) => loadtest({ url: formatUrl(`/core/subscription/:sr_sid`, data), method: 'DELETE', ...setting })

module.exports = {
    newSubscription,
    getSubscriptionList,
    getSubscriptionSubmethod,
    getSubscriptionLog,
    updateSubscription,
    deleteSubscription,
}