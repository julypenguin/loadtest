const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 *  取得問卷列表
 * GET /teamweb/site/${path.st_sid}/qnr
 * @param {*} params - return value of action creator
 */
const getSitesurveyList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  特定問卷細節
 * GET /teamweb/site/${path.st_sid}/qnr/${path.sp_sid}
 * @param {*} params - return value of action creator
 */
const getSitesurveyDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr/:sp_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  得特定問卷的共同管理人員
 * GET /teamweb/site/${path.st_sid}/qnr/${path.sp_sid}/manager
 * @param {*} params - return value of action creator
 */
const getSitesurveyManagerList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr/:sp_sid/manager`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  取得特定問卷的參加人員列表
 * GET /teamweb/site/${path.st_sid}/qnr/${path.sp_sid}/attend
 * @param {*} params - return value of action creator
 */
const getSitesurveyAttendList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr/:sp_sid/attend`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  取得特定問卷的最終統計結果
 * GET /teamweb/site/${path.st_sid}/qnr/${path.sp_sid}/count
 * @param {*} params - return value of action creator
 */
const getSitesurveyCountDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr/:sp_sid/count`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  取得特定問卷及時狀態統計結果
 * GET /teamweb/site/${path.st_sid}/qnr/${path.sp_sid}/insight
 * @param {*} params - return value of action creator
 */
const getSitesurveyInsight = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr/:sp_sid/insight`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增問卷並暫存
 * POST /teamweb/site/${path.st_sid}/qnr
 * @param {*} params - return value of action creator
 */
const newSitesurvey = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增問卷並發佈
 * POST /teamweb/site/${path.st_sid}/qnr/publish
 * @param {*} params - return value of action creator
 */
const addpublishSitesurvey = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr/publish`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改並發佈特暫存問卷
 * POST /teamweb/site/${path.st_sid}/qnr/${path.sp_sid}
 * @param {*} params - return value of action creator
 */
const publishSitesurvey = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr/:sp_sid`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 強制結束特定問卷
 * POST /teamweb/site/${path.st_sid}/qnr/${path.sp_sid}/close
 * @param {*} params - return value of action creator
 */
const closeSitesurvey = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr/:sp_sid/close`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 統計並結算特定問卷
 * POST /teamweb/site/${path.st_sid}/qnr/${path.sp_sid}/count
 * @param {*} params - return value of action creator
 */
const countSitesurvey = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr/:sp_sid/count`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改特定問卷並暫存
 * PATCH /teamweb/site/${path.st_sid}/qnr/${path.sp_sid}
 * @param {*} params - return value of action creator
 */
const updateSitesurvey = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr/:sp_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次修改特定問卷的共同管理人員 
 * PATCH /teamweb/site/${path.st_sid}/qnr/${path.sp_sid}/manager
 * @param {*} params - return value of action creator
 */
const updateSitesurveyManager = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr/:sp_sid/manager`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定問卷
 * DELETE /teamweb/site/${path.st_sid}/qnr/${path.sp_sid}
 * @param {*} params - return value of action creator
 */
const deleteSitesurvey = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/qnr/:sp_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getSitesurveyList,
    getSitesurveyDetail,
    getSitesurveyManagerList,
    getSitesurveyAttendList,
    getSitesurveyCountDetail,
    getSitesurveyInsight,
    newSitesurvey,
    addpublishSitesurvey,
    publishSitesurvey,
    closeSitesurvey,
    countSitesurvey,
    updateSitesurvey,
    updateSitesurveyManager,
    deleteSitesurvey,
}
