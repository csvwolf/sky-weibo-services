/**
 * Created by SkyAo on 16/5/5.
 *
 * 路由配置
 *
 * 说明：
 * 返回的key-value对中，key为命令行中的command。
 * 传入的path可以根据自己的需要进行修改，默认不需要变更
 */
module.exports = (function(path) {
    var singleDog = require(path + '/singleDogController'),
        oneWord = require(path + '/oneWordController'),
        test = require(path + '/testController.sample');

    return {
        singleDog: singleDog,
        say: oneWord,
        test: test
    }
})('../controllers');