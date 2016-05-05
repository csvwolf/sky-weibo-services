/**
 * Created by SkyAo on 16/5/5.
 *
 * 帮助模块
 *
 * 说明：
 * 帮助模块用于引导使用，逐步完善ing
 *
 */
var Helper = function() {
    this.getHelper = function() {
        return '\t***帮助***\t\n' +
            'Author: SkyAo\n' +
            'Update Time: 2016年05月05日\n' +
            'Example: node index.js test\n' +
            '';
    }
};

module.exports = function(appConfig, appKeys) {
    var helper = new Helper();
    return console.log(helper.getHelper());
};