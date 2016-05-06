/**
 * Created by SkyAo on 16/5/4.
 *
 * 调用模块配置
 *
 * 说明：
 * action为基础动作
 */

module.exports = function(dirname) {
    var superagent = require('superagent'),
        moment = require('moment'),
        winston = require('winston'),
        action = require('./actionList'),
        logger = require('./logConfig')(dirname, winston);

    return {
        action: action,
        superagent: superagent,
        moment: moment,
        logger: logger
    }
};

