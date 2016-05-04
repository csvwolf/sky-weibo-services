/**
 * Created by SkyAo on 16/5/4.
 *
 *
 */

var appConfig = require('./config/appConfig'),
    appKeys = require('./config/appKeys'),
    singleDogController = require('./controllers/singleDogController');


singleDogController(appConfig, appKeys);