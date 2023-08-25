const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 *  網站常用連結列表
 * GET /teamweb/site/${path.st_sid}/hyperlink
 * @param {*} params - return value of action creator
 */
const getHyperlinkList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/hyperlink`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增網站常用連結
 * POST /teamweb/site/${path.st_sid}/hyperlink
 * @param {*} params - return value of action creator
 */
const newHyperlink = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/hyperlink`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改特定網站常用連結
 * PATCH /teamweb/site/${path.st_sid}/hyperlink/${path.atl_sid}
 * @param {*} params - return value of action creator
 */
const updateHyperlink = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/hyperlink/:atl_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定網站常用連結的指定排序
 * PATCH /teamweb/site/${path.st_sid}/hyperlink/${path.atl_sid}/shift
 * @param {*} params - return value of action creator
 */
const shiftHyperlink = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/hyperlink/:atl_sid/shift`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定網站常用連結
 * DELETE /teamweb/site/${path.st_sid}/hyperlink/${path.atl_sid}
 * @param {*} params - return value of action creator
 */
const deleteHyperlink = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/hyperlink/:atl_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getHyperlinkList,
    newHyperlink,
    updateHyperlink,
    shiftHyperlink,
    deleteHyperlink,
}
