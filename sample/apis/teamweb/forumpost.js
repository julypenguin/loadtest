const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 *  特定討論區貼文或回覆詳細資料
 * GET /teamweb/forumpost/${path.fp_sid}
 * @param {*} params - return value of action creator
 */
const getForumpostDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/forumpost/:fp_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  特定討論區文章列表
 * GET /teamweb/forumpost
 * @param {*} params - return value of action creator
 */
const getForumpostList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/forumpost`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  特定貼文回覆列表
 * GET /teamweb/forumpost/${path.fp_sid}/reply
 * @param {*} params - return value of action creator
 */
const getForumpostReplyList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/forumpost/:fp_sid/reply`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 發布特定討論區文章
 * POST /teamweb/forumpost
 * @param {*} params - return value of action creator
 */
const publishForumpost = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/forumpost`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 回覆特定貼文
 * POST /teamweb/forumpost/${path.fp_sid}/reply
 * @param {*} params - return value of action creator
 */
const replyForumpost = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/forumpost/:fp_sid/reply`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改特定討論區貼文或回覆
 * PATCH /teamweb/forumpost/${path.fp_sid}
 * @param {*} params - return value of action creator
 */
const updateForumpost = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/forumpost/:fp_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定討論區貼文或回覆
 * DELETE /teamweb/forumpost/${path.fp_sid}
 * @param {*} params - return value of action creator
 */
const deleteForumpost = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/forumpost/:fp_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getForumpostDetail,
    getForumpostList,
    getForumpostReplyList,
    publishForumpost,
    replyForumpost,
    updateForumpost,
    deleteForumpost,
}