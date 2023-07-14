const contactgroup = require('./contactgroup')
const member = require('./member')
const department = require('./department')
const announcement = require('./announcement')
const marquee = require('./marquee')
const account = require('./account')
const tenant = require('./tenant')
const message = require('./message')
const messagetype = require('./messagetype')
const sentmessage = require('./sentmessage')
const tmpmessage = require('./tmpmessage')
const me = require('./me')
const permission = require('./permission')
const permissiongroup = require('./permissiongroup')
const setting = require('./setting')
const syslog = require('./syslog')
const online = require('./online')
const adjunct = require('./adjunct')
const report = require('./report')
const permapping = require('./permapping')
const autologin = require('./autologin')
const checkaccount = require('./checkaccount')
const about = require('./about')
const accesstoken = require('./accesstoken')
const subscription = require('./subscription')
const activitylog = require('./activitylog')
const note = require('./note')
const searchlogreport = require('./searchlogreport')
const msgtemplate = require('./msgtemplate')
const debug = require('./debug')

module.exports = {
    ...contactgroup,
    ...member,
    ...department,
    ...announcement,
    ...marquee,
    ...account,
    ...tenant,
    ...message,
    ...messagetype,
    ...sentmessage,
    ...tmpmessage,
    ...me,
    ...permission,
    ...permissiongroup,
    ...setting,
    ...syslog,
    ...online,
    ...adjunct,
    ...report,
    ...permapping,
    ...autologin,
    ...checkaccount,
    ...about,
    ...accesstoken,
    ...subscription,
    ...activitylog,
    ...note,
    ...searchlogreport,
    ...msgtemplate,
    ...debug,
}