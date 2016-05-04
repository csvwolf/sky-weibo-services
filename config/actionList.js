/**
 * Created by SkyAo on 16/5/4.
 */
module.exports = (function() {
    var postWithoutImage = require('../actions/postWithoutImage');

    return {
        postAction: {
            postWithoutImage: postWithoutImage
        }
    }
})();