const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 *  取得行事曆事件列表
 * GET /teamweb/site/${path.st_sid}/calendar
 * @param {*} params - return value of action creator
 */
const getSitecalendarList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/calendar`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  特定行事曆事件
 * GET /teamweb/site/${path.st_sid}/calendar/${path.evt_sid}
 * @param {*} params - return value of action creator
 */
const getSitecalendarDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/calendar/:evt_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增行事曆事件
 * POST /teamweb/site/${path.st_sid}/calendar
 * @param {*} params - return value of action creator
 */
const newSitecalendar = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/calendar`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改特定我的行事曆事件
 * PATCH /teamweb/site/${path.st_sid}/calendar/${path.evt_sid}
 * @param {*} params - return value of action creator
 */
const updateSitecalendar = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/calendar/:evt_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 反饋特定行事曆事件(不一定是我的)
 * PATCH /teamweb/site/${path.st_sid}/calendar/${path.evt_sid}/approve
 * @param {*} params - return value of action creator
 */
const approveSitecalendar = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/calendar/:evt_sid/approve`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次修改我的特定行事曆事件參與人員列表 
 * PATCH /teamweb/site/${path.st_sid}/calendar/${path.evt_sid}/attend
 * @param {*} params - return value of action creator
 */
const updateSitecalendarAttend = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/calendar/:evt_sid/attend`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定我的行事曆事件
 * DELETE /teamweb/site/${path.st_sid}/calendar/${path.evt_sid}
 * @param {*} params - return value of action creator
 */
const deleteSitecalendar = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/calendar/:evt_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getSitecalendarList,
    getSitecalendarDetail,
    newSitecalendar,
    updateSitecalendar,
    approveSitecalendar,
    updateSitecalendarAttend,
    deleteSitecalendar,
}
