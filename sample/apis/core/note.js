const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 新增個人備忘錄
 * POST /core/note
 * @param {Object} params - return value of action creator
 */
const newNote = (setting = {}, data) => loadtest({ url: formatUrl(`/core/note`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得特定個人備忘錄
 * GET /core/note/${path.pn_sid}
 * @param {Object} params - return value of action creator
 */
const getNoteDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/note/:pn_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得個人備忘錄列表
 * GET /core/note
 * @param {Object} params - return value of action creator
 */
const getNoteList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/note`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改特定個人備忘錄
 * PATCH /core/note/${path.pn_sid}
 * @param {Object} params - return value of action creator
 */
const updateNote = (setting = {}, data) => loadtest({ url: formatUrl(`/core/note/:pn_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定個人備忘錄的指定排序
 * PATCH /core/note/${path.pn_sid}/shift
 * @param {Object} params - return value of action creator
 */
const shiftNote = (setting = {}, data) => loadtest({ url: formatUrl(`/core/note/:pn_sid/shift`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定個人備忘錄
 * DELETE /core/note/${path.pn_sid}
 * @param {Object} params - return value of action creator
 */
const deleteNote = (setting = {}, data) => loadtest({ url: formatUrl(`/core/note/:pn_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    newNote,
    getNoteDetail,
    getNoteList,
    updateNote,
    shiftNote,
    deleteNote,
}