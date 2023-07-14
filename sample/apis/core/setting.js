const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得系統參數列表
 * GET /core/setting/config
 * @param {Object} params - return value of action creator
 */
const getConfigList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting/config`, data), method: 'GET', ...setting })

/**
 * 取得系統設定的各項資料統計數據
 * GET /core/setting
 * @param {Object} params - return value of action creator
 */
const getSettingCount = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting`, data), method: 'GET', ...setting })

/**
 * 修改特定系統參數
 * PATCH /core/setting/config/${path.dp_no}
 * @param {Object} params - return value of action creator
 */
const updateConfig = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting/config/:dp_no`, data), method: 'PATCH', ...setting })

/**
 * 取得IP範圍限制列表
 * GET /core/setting/ip
 * @param {Object} params - return value of action creator
 */
const getIpList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting/ip`, data), method: 'GET', ...setting })

/**
 * 新增IP範圍限制
 * POST /core/setting/ip
 * @param {Object} params - return value of action creator
 */
const newIp = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting/ip`, data), method: 'POST', ...setting })

/**
 * 修改特定IP範圍限制
 * PATCH /core/setting/ip/${path.aop_sid}
 * @param {Object} params - return value of action creator
 */
const updateIp = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting/ip/:aop_sid`, data), method: 'PATCH', ...setting })

/**
 * 刪除特定IP範圍限制  
 * DELETE /core/setting/ip/${path.aop_sid}
 * @param {Object} params - return value of action creator
 */
const deleteIp = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting/ip/:aop_sid`, data), method: 'DELETE', ...setting })

/**
 * 取得系統信箱設定資訊
 * GET /core/setting/mail
 * @param {Object} params - return value of action creator
 */
const getMail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting/mail`, data), method: 'GET', ...setting })

/**
 * 修改系統信箱設定
 * PATCH /core/setting/mail
 * @param {Object} params - return value of action creator
 */
const updateMail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting/mail`, data), method: 'PATCH', ...setting })

/**
 * 取得資安遮罩列表
 * GET /core/setting/mask
 * @param {Object} params - return value of action creator
 */
const getMaskList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting/mask`, data), method: 'GET', ...setting })

/**
 * 修改特定資安遮罩
 * PATCH /core/setting/mask/${path.param_sid}
 * @param {Object} params - return value of action creator
 */
const updateMask = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting/mask/:param_sid`, data), method: 'PATCH', ...setting })

/**
 * 浮水印樣式資訊
 * GET /core/setting/watermark
 * @param {Object} params - return value of action creator
 */
const getWatermarkConfig = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting/watermark`, data), method: 'GET', ...setting })

/**
 * 修改浮水印樣式
 * PATCH /core/setting/watermark
 * @param {Object} params - return value of action creator
 */
const updateWatermark = (setting = {}, data) => loadtest({ url: formatUrl(`/core/setting/watermark`, data), method: 'PATCH', ...setting })

module.exports = {
    getConfigList,
    getSettingCount,
    updateConfig,
    getIpList,
    newIp,
    updateIp,
    deleteIp,
    getMail,
    updateMail,
    getMaskList,
    updateMask,
    getWatermarkConfig,
    updateWatermark,
}