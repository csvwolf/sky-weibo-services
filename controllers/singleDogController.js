/**
 * Created by SkyAo on 16/5/4.
 *
 * 单身狗计时器
 *
 * 说明：
 * 计算单身持续多少天。
 */

module.exports = function(appConfig, appKeys) {
    var moment = appConfig.moment,
        birthDay = moment([1994, 10, 18]),  // 生日设置，其中月从0开始算，其余不需要更改
        today = moment(new Date()),
        duration = moment.duration(today.diff(birthDay)),
        sinceThen = {
            years: duration.get('years'),
            months: duration.get('months'),
            days: duration.get('days'),
            totalDay: today.diff(birthDay, 'days')
        },
        message = '#小天单身狗计数器# 小天连续单身已经' + sinceThen.totalDay + '天啦！ 也叫'
                    + sinceThen.years + '年' + sinceThen.months + '月' + sinceThen.days + '日。 关爱小天，从给支付宝打钱做起。',
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

    var callback = function(err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log('本日关爱单身狗成功');
        }
    };

        appConfig.action.postAction.postWithoutImage(appConfig, params, callback);
};