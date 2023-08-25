const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 取得跑馬燈列表
 * GET /teamweb/site/${path.st_sid}/marquee
 * @param {Object} params - return value of action creator
 */
const getSitemarqList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/marquee`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得可以呈現的跑馬燈列表
 * GET /teamweb/site/${path.st_sid}/marquee/present
 * @param {Object} params - return value of action creator
 */
const getSitemarqPresentList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/marquee/present`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增跑馬燈
 * POST /teamweb/site/${path.st_sid}/marquee
 * @param {Object} params - return value of action creator
 */
const newSitemarq = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/marquee`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得指定跑馬燈資訊
 * GET /teamweb/site/${path.st_sid}/marquee/${path.nm_sid}
 * @param {Object} params - return value of action creator
 */
const getSitemarqDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/marquee/:nm_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除指定跑馬燈
 * DELETE /teamweb/site/${path.st_sid}/marquee/${path.nm_sid}
 * @param {Object} params - return value of action creator
 */
const deleteSitemarq = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/marquee/:nm_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 更新指定跑馬燈資訊
 * PATCH /teamweb/site/${path.st_sid}/marquee/${path.nm_sid}
 * @param {Object} params - return value of action creator
 */
const updateSitemarq = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/marquee/:nm_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定特定小組網站跑馬燈指定排序
 * PATCH /teamweb/site/${path.st_sid}/marquee/${path.nm_sid}/shift
 * @param {Object} params - return value of action creator
 */
const shiftSitemarq = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/marquee/:nm_sid/shift`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getSitemarqList,
    getSitemarqPresentList,
    newSitemarq,
    getSitemarqDetail,
    deleteSitemarq,
    updateSitemarq,
    shiftSitemarq,
}
