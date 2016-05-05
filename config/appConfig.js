/**
 * Created by SkyAo on 16/5/4.
 *
 * 调用模块配置
 *
 * 说明：
 * action为基础动作
 */
module.exports = (function() {
    var superagent = require('superagent'),
        moment = require('moment'),
        action = require('./actionList');

    return {
        action: action,
        superagent: superagent,
        moment: moment
    }
})();