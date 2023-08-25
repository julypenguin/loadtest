const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 *  小組網站會議室列表
 * GET /teamweb/site/${path.st_sid}/meetingroom
 * @param {*} params - return value of action creator
 */
const getMeetingroomList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/meetingroom`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增小組網站會議室
 * POST /teamweb/site/${path.st_sid}/meetingroom
 * @param {*} params - return value of action creator
 */
const newMeetingroom = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/meetingroom`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改特定小組網站會議室
 * PATCH /teamweb/site/${path.st_sid}/meetingroom/${path.mr_sid}
 * @param {*} params - return value of action creator
 */
const updateMeetingroom = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/meetingroom/:mr_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定小組網站會議室
 * DELETE /teamweb/site/${path.st_sid}/meetingroom/${path.mr_sid}
 * @param {*} params - return value of action creator
 */
const deleteMeetingroom = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/meetingroom/:mr_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getMeetingroomList,
    newMeetingroom,
    updateMeetingroom,
    deleteMeetingroom,
}
