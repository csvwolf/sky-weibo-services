/**
 * Created by SkyAo on 16/5/4.
 */
module.exports = function(appConfig, params, callback) {
    if (!params.access_token || !params.status) {
        console.log('参数不全 请重试');
    } else {
        appConfig.superagent.post('https://api.weibo.com/2/statuses/update.json')
                            .type('form')
                            .send(params)
                            .end(callback);
    }
};