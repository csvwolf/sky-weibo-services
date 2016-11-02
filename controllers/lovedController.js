/**
 * Created by SkyAo on 16/5/4.
 *
 * 恋爱计时器：单身狗计时器魔改版
 *
 * 说明：
 * 不解释
 */

module.exports = function(appConfig, appKeys) {
    var moment = appConfig.moment,
        memorialDay = moment([2016, 9, 25]),  // 生日设置，其中月从0开始算，其余不需要更改
        today = moment(new Date()),
        duration = moment.duration(today.diff(memorialDay)),
        sinceThen = {
            years: duration.get('years'),
            months: duration.get('months'),
            days: duration.get('days'),
            totalDay: today.diff(memorialDay, 'days')
        },
        message = '#关爱小天成长协会# 噗通，小天和某人（此处打码）已向世界连续捐助' + sinceThen.totalDay + '天狗粮！ 也叫'
                    + sinceThen.years + '年' + sinceThen.months + '月' + sinceThen.days + '日。',
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
            appConfig.logger.error(err);
        } else {
            console.log('本日秀恩爱成功');
            appConfig.logger.info('本日秀恩爱成功');
        }
    };

    appConfig.action.postAction.postWithoutImage(appConfig, params, callback);
};