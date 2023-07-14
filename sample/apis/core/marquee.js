const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得跑馬燈列表
 * GET /core/marquee
 * @param {Object} params - return value of action creator
 */
const getMarqList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/marquee`, data), method: 'GET', ...setting })

/**
 * 取得可以呈現的跑馬燈列表
 * GET /core/marquee/present
 * @param {Object} params - return value of action creator
 */
const getMarqPresentList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/marquee/present`, data), method: 'GET', ...setting })

/**
 * 新增跑馬燈
 * POST /core/marquee
 * @param {Object} params - return value of action creator
 */
const newMarquee = (setting = {}, data) => loadtest({ url: formatUrl(`/core/marquee`, data), method: 'POST', ...setting })

/**
 * 取得指定跑馬燈資訊
 * GET /core/marquee/${path.nm_sid}
 * @param {Object} params - return value of action creator
 */
const getMarqDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/marquee/:nm_sid`, data), method: 'GET', ...setting })

/**
 * 刪除指定跑馬燈
 * DELETE /core/marquee/${path.nm_sid}
 * @param {Object} params - return value of action creator
 */
const deleteMarquee = (setting = {}, data) => loadtest({ url: formatUrl(`/core/marquee/:nm_sid`, data), method: 'DELETE', ...setting })

/**
 * 更新指定跑馬燈資訊
 * PATCH /core/marquee/${path.nm_sid}
 * @param {Object} params - return value of action creator
 */
const updateMarquee = (setting = {}, data) => loadtest({ url: formatUrl(`/core/marquee/:nm_sid`, data), method: 'PATCH', ...setting })

/**
 * 特定特定跑馬燈指定排序
 * PATCH /core/marquee/${path.nm_sid}/shift
 * @param {Object} params - return value of action creator
 */
const shiftMarquee = (setting = {}, data) => loadtest({ url: formatUrl(`/core/marquee/:nm_sid/shift`, data), method: 'PATCH', ...setting })

module.exports = {
    getMarqList,
    getMarqPresentList,
    newMarquee,
    getMarqDetail,
    deleteMarquee,
    updateMarquee,
    shiftMarquee,
}