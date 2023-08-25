const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 特定小組網站人員群組
 * GET /teamweb/sitegroup/${path.stg_sid}
 * @param {Object} params - return value of action creator
 */
const getSitegroupDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/sitegroup/:stg_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 小組網站人員群組列表
 * GET /teamweb/sitegroup
 * @param {Object} params - return value of action creator
 */
const getSitegroupList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/sitegroup`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定小組網站人員群組成員列表
 * GET /teamweb/sitegroup/${path.stg_sid}/member
 * @param {Object} params - return value of action creator
 */
const getSitegroupMbrList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/sitegroup/:stg_sid/member`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增小組網站人員群組
 * POST /teamweb/sitegroup
 * @param {Object} params - return value of action creator
 */
const newSitegroup = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/sitegroup`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次修改特定小組網站人員群組成員
 * PATCH /teamweb/sitegroup/${path.stg_sid}/member
 * @param {Object} params - return value of action creator
 */
const updateSitegroupMbr = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/sitegroup/:stg_sid/member`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改小組網站人員群組
 * PATCH /teamweb/sitegroup/${path.stg_sid}
 * @param {Object} params - return value of action creator
 */
const updateSitegroup = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/sitegroup/:stg_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除小組網站人員群組
 * DELETE /teamweb/sitegroup/${path.stg_sid}
 * @param {Object} params - return value of action creator
 */
const deleteSitegroup = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/sitegroup/:stg_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getSitegroupDetail,
    getSitegroupList,
    getSitegroupMbrList,
    newSitegroup,
    updateSitegroupMbr,
    updateSitegroup,
    deleteSitegroup,
}
