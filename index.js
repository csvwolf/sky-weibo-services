/**
 * Created by SkyAo on 16/5/4.
 *
 * 主程序
 *
 * 说明：
 * 基本不需要改动，程序入口
 */

var appConfig = require('./config/appConfig'),
    appKeys = require('./config/appKeys'),
    router = require('./config/router');

var command = process.argv[2] || null;

try {
    router[command](appConfig, appKeys, process.argv);
} catch (e) {
    console.log('输入正确的命令');
}