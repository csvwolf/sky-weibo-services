/**
 * Created by SkyAo on 16/5/5.
 */
module.exports = function(path, winston) {
    var logger = new (winston.Logger)({
        transports: [
            new (winston.transports.File)({
                name: 'info-log',
                filename: path + '/logs/log-info.log',
                level: 'info'
            }),
            new (winston.transports.File)({
                name: 'error-log',
                filename: path + '/logs/log-error.log',
                level: 'error'
            }),
            new (winston.transports.File)({
                name: 'warn-log',
                filename: path + '/logs/log-warn.log',
                level: 'warn'
            })
        ]
    });

    return logger;
};