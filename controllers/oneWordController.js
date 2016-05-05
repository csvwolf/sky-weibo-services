/**
 * Created by SkyAo on 16/5/5.
 *
 * 小天说模块
 *
 * 说明：
 * 根据命令行传入的参数发送指定微博
 */
module.exports = function(appConfig, appKeys, args) {
    var message,
        params;

    // 去除了包括环境、命令本身在内的参数
    args.splice(0, 3);

    // 做middleware拦截
    if (!check(args)) {
        console.log('输入错误');

        return;
    }

    message = '#小天说# ' + args[0];
    params = {
        access_token: appKeys.developerAccessToken,
        status: message
        /*
         visible: 0,
         list_id: null,
         lat: 0,
         long: 0,
         annotations: null,
         rip: null
         */
    };

    appConfig.action.postAction.postWithoutImage(appConfig, params, callback);
};

function check(args) {
    return args.length >= 1;
}

function callback(err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log('小天说发送成功');
    }
}