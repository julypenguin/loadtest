const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得人員兼職部門列表
 * GET /api/core/member/{aa_sid}/adjunct
 * @param {Object} params - return value of action creator
 */
const getAdjunctList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/member/:aa_sid/adjunct`, data), method: 'GET', ...setting })

/**
 * 批次更新人員兼職部門列表
 * PATCH /api/core/member/{aa_sid}/adjunct
 * @param {Object} params - return value of action creator
 */
const updateAdjunctList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/member/:aa_sid/adjunct`, data), method: 'PATCH', ...setting })

module.exports = {
    getAdjunctList,
    updateAdjunctList,
}