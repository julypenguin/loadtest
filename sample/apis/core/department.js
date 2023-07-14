const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 取得部門列表
 * GET /core/department
 * @param {Object} params - return value of action creator
 */
const getDeptList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/department`, data), method: 'GET', ...setting })

/**
 * 新增部門
 * POST /core/department
 * @param {Object} params - return value of action creator
 */
const newDepartment = (setting = {}, data) => loadtest({ url: formatUrl(`/core/department`, data), method: 'POST', ...setting })


/**
 * 修改特定部門
 * PATCH /core/department/${path.at_sid}
 * @param {Object} params - return value of action creator
 */
const updateDepartment = (setting = {}, data) => loadtest({ url: formatUrl(`/core/department/:at_sid`, data), method: 'PATCH', ...setting })

/**
 * 刪除特定部門
 * DELETE /core/department/${path.at_sid}
 * @param {Object} params - return value of action creator
 */
const deleteDepartment = (setting = {}, data) => loadtest({ url: formatUrl(`/core/department/:at_sid`, data), method: 'DELETE', ...setting })

/**
 * 取得特定部門成員列表
 * GET /core/department/${path.at_sid}/member
 * @param {Object} params - return value of action creator
 */
const getDeptMbrList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/department/:at_sid/member`, data), method: 'GET', ...setting })

module.exports = {
    getDeptList,
    newDepartment,
    updateDepartment,
    deleteDepartment,
    getDeptMbrList,
}