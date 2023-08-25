const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 *  取得行事曆事件列表
 * GET /teamweb/calendar
 * @param {*} params - return value of action creator
 */
const getTeamwebCalendarList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/calendar`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  特定行事曆事件
 * GET /teamweb/calendar/${path.evt_sid}
 * @param {*} params - return value of action creator
 */
const getTeamwebCalendarDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/calendar/:evt_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })


/**
 * 新增行事曆事件
 * POST /teamweb/calendar
 * @param {*} params - return value of action creator
 */
const newTeamwebCalendar = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/calendar`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改特定我的行事曆事件
 * PATCH /teamweb/calendar/${path.evt_sid}
 * @param {*} params - return value of action creator
 */
const updateTeamwebCalendar = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/calendar/:evt_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 反饋特定行事曆事件(不一定是我的)
 * PATCH /teamweb/calendar/${path.evt_sid}/approve
 * @param {*} params - return value of action creator
 */
const approveTeamwebCalendar = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/calendar/:evt_sid/approve`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次修改我的特定行事曆事件參與人員列表 
 * PATCH /teamweb/calendar/${path.evt_sid}/attend
 * @param {*} params - return value of action creator
 */
const updateTeamwebCalendarAttend = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/calendar/:evt_sid/attend`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定我的行事曆事件
 * DELETE /teamweb/calendar/${path.evt_sid}
 * @param {*} params - return value of action creator
 */
const deleteTeamwebCalendar = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/calendar/:evt_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getTeamwebCalendarList,
    getTeamwebCalendarDetail,
    newTeamwebCalendar,
    updateTeamwebCalendar,
    approveTeamwebCalendar,
    updateTeamwebCalendarAttend,
    deleteTeamwebCalendar,
}
