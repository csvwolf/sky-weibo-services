/**
 * Created by SkyAo on 16/5/4.
 *
 * 基础动作配置
 *
 * 说明：
 * 这里引用了actions目录的所有基础动作（调用API），可以自行归类处理
 */
module.exports = (function() {
    var postWithoutImage = require('../actions/postWithoutImage');

    return {
        postAction: {
            postWithoutImage: postWithoutImage
        }
    }
})();