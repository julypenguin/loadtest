const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 特定小組網站細節
 * GET /teamweb/site/${path.st_sid}
 * @param {Object} params - return value of action creator
 */
const getSiteDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得全組織小組網站
 * GET /teamweb/site
 * @param {Object} params - return value of action creator
 */
const getSiteList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定人員的小組權限
 * GET /teamweb/site/${path.st_sid}/member/${path.aa_sid}
 * @param {Object} params - return value of action creator
 */
const getSiteMemberDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/member/:aa_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 小組網站成員列表
 * GET /teamweb/site/${path.st_sid}/member
 * @param {Object} params - return value of action creator
 */
const getSiteMemberList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/member`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定小組網站子頁面列表
 * GET /teamweb/site/${path.st_sid}/subpage
 * @param {Object} params - return value of action creator
 */
const getSubpageList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/subpage`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定小組網站討論區搜尋
 * GET /teamweb/site/${path.st_sid}/search/forumpost
 * @param {Object} params - return value of action creator
 */
const searchSiteForum = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/search/forumpost`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定小組網站 HTML 模組搜尋
 * GET /teamweb/site/${path.st_sid}/search/html
 * @param {Object} params - return value of action creator
 */
const searchSiteHtml = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/search/html`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定小組網站 HTML 模組搜尋
 * GET /teamweb/site/${path.st_sid}/history
 * @param {Object} params - return value of action creator
 */
const getSiteHistoryList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/history`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定小組網站幾天內的瀏覽次數
 * GET /teamweb/site/${path.st_sid}/viewcount
 * @param {Object} params - return value of action creator
 */
const getSiteViewcount = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/viewcount`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定小組網站使用容量總和 (MB)
 * GET /teamweb/site/${path.st_sid}/
 * @param {Object} params - return value of action creator
 */
const getSiteDiskusage = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/diskusage`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批准或拒絕人員加入
 * POST /teamweb/site/${path.st_sid}/member/${path.aa_sid}/approve
 * @param {Object} params - return value of action creator
 */
const approveSiteMember = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/member/:aa_sid/approve`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次邀請人員到小組網站
 * POST /teamweb/site/${path.st_sid}/member/invite
 * @param {Object} params - return value of action creator
 */
const inviteSiteMember = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/member/invite`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增小組網站
 * POST /teamweb/site
 * @param {Object} params - return value of action creator
 */
const newSite = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增特定小組網站的子頁面
 * POST /teamweb/site/${path.st_sid}/subpage
 * @param {Object} params - return value of action creator
 */
const newSubpage = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/subpage`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 套用特定小組網站頁面歷史編輯紀錄
 * POST /teamweb/site/${path.st_sid}/history/${path.sth_sid}
 * @param {Object} params - return value of action creator
 */
const useSiteHistory = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/history/:sth_sid`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次修改小組網站組件
 * PATCH /teamweb/site/${path.st_sid}/component
 * @param {Object} params - return value of action creator
 */
const updateSiteComponent = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/component`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次修改特定人員的小組權限
 * PATCH /teamweb/site/${path.st_sid}/member/${path.aa_sid}
 * @param {Object} params - return value of action creator
 */
const updateSiteMember = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/member`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改特定小組網站
 * PATCH /teamweb/site/${path.st_sid}
 * @param {Object} params - return value of action creator
 */
const updateSite = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 排序特定小組網站順序
 * PATCH /teamweb/site/${path.st_sid}/shift
 * @param {Object} params - return value of action creator
 */
const shiftSite = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/shift`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 移動特定小組網站位置
 * PATCH /teamweb/site/${path.st_sid}/move
 * @param {Object} params - return value of action creator
 */
const moveSite = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/move`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 移動特定小組網站的特定組件到其他子頁面
 * PATCH /teamweb/site/${path.st_sid}/component/${path.cp_sid}/move
 * @param {Object} params - return value of action creator
 */
const moveSiteComponent = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/component/:cp_sid/move`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定小組網站
 * DELETE /teamweb/site/${path.st_sid}
 * @param {Object} params - return value of action creator
 */
const deleteSite = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getSiteDetail,
    getSiteList,
    getSiteMemberDetail,
    getSiteMemberList,
    getSubpageList,
    searchSiteForum,
    searchSiteHtml,
    getSiteHistoryList,
    getSiteViewcount,
    getSiteDiskusage,
    approveSiteMember,
    inviteSiteMember,
    newSite,
    newSubpage,
    useSiteHistory,
    updateSiteComponent,
    updateSiteMember,
    updateSite,
    shiftSite,
    moveSite,
    moveSiteComponent,
    deleteSite,
}
