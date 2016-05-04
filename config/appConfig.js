/**
 * Created by SkyAo on 16/5/4.
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