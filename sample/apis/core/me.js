const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得個人資訊與權限訊息
 * GET /core/me
 * @param {Object} params - return value of action creator
 */
const getProfile = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me`, data), method: 'GET', ...setting })

/**
 * 取得個人功能權限群組列表
 * GET /core/me/permissiongroup
 * @param {Object} params - return value of action creator
 */
const getPrmgrpList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/permissiongroup`, data), method: 'GET', ...setting })

/**
 * 取得個人使用紀錄列表
 * GET /core/me/log
 * @param {Object} params - return value of action creator
 */
const getLogList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/log`, data), method: 'GET', ...setting })

/**
 * 取得個人上線列表
 * GET /core/me/online
 * @param {Object} params - return value of action creator
 */
const getMyOnlineList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/online`, data), method: 'GET', ...setting })

/**
 * 取得我的通知特定物件通知細節
 * GET /core/me/subobject/${path.oid}
 * @param {Object} params - return value of action creator
 */
const getMySubobjectDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/subobject/:oid`, data), method: 'GET', ...setting })

/**
 * 取得我的訂閱通知物件列表(須包含篩選訂閱物件種類)
 * GET /core/me/subobject
 * @param {Object} params - return value of action creator
 */
const getMySubobjectList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/subobject`, data), method: 'GET', ...setting })

/**
 * 修改個人永久登入設定
 * PATCH /core/me/foreverlogin
 * @param {Object} params - return value of action creator
 */
const updateMyForeverlogin = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/foreverlogin`, data), method: 'PATCH', ...setting })

/**
 * 修改個人密碼
 * PATCH /core/me/password
 * @param {Object} params - return value of action creator
 */
const changePassword = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/password`, data), method: 'PATCH', ...setting })

/**
 * 訂閱我的通知特定物件
 * POST /core/me/subobject
 * @param {Object} params - return value of action creator
 */
const subscriptionMySubobject = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/subobject`, data), method: 'POST', ...setting })

/**
 * 強制離線特定上線人員 ( 強制離線，並在Agt_Log紀錄內註記為「管理者強制登出」)
 * DELETE /core/me/online/${path.aol_sid}
 * @param {Object} params - return value of action creator
 */
const deleteMyOnline = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/online/:aol_sid`, data), method: 'DELETE', ...setting })

/**
 * 刪除我的訂閱特定物件的全部的通知方式
 * DELETE /core/me/subobject/${path.oid}
 * @param {Object} params - return value of action creator
 */
const deleteMySubobjectAll = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/subobject/:oid`, data), method: 'DELETE', ...setting })

/**
 * 刪除我的訂閱特定物件的特定通知方式
 * DELETE /core/me/subobject/${path.oid}/${path.so_sid}
 * @param {Object} params - return value of action creator
 */
const deleteMySubobject = (setting = {}, data) => loadtest({ url: formatUrl(`/core/me/subobject/:oid/:so_sid`, data), method: 'DELETE', ...setting })

module.exports = {
    getProfile,
    getPrmgrpList,
    getLogList,
    getMyOnlineList,
    getMySubobjectDetail,
    getMySubobjectList,
    updateMyForeverlogin,
    changePassword,
    subscriptionMySubobject,
    deleteMyOnline,
    deleteMySubobjectAll,
    deleteMySubobject,
}