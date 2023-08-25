const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 *  取得我能作答的問卷列表
 * GET /teamweb/site/${path.st_sid}/me/qnr
 * @param {*} params - return value of action creator
 */
const getMysitesurveyList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/me/qnr`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  特定我能作答的問卷細節
 * GET /teamweb/site/${path.st_sid}/me/qnr/${path.sp_sid}
 * @param {*} params - return value of action creator
 */
const getMysitesurveyDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/me/qnr/:sp_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 提交特定我能作答的問卷
 * POST /teamweb/site/${path.st_sid}/me/qnr/${path.sp_sid}/submit
 * @param {*} params - return value of action creator
 */
const submitMysitesurvey = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/me/qnr/:sp_sid/submit`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getMysitesurveyList,
    getMysitesurveyDetail,
    submitMysitesurvey,
}
