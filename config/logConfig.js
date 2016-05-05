/**
 * Created by SkyAo on 16/5/5.
 */
module.exports = function(winston) {
    var logger = new (winston.Logger)({
        transports: [
            new (winston.transports.File)({
                name: 'info-log',
                filename: 'logs/log-info.log',
                level: 'info'
            }),
            new (winston.transports.File)({
                name: 'error-log',
                filename: 'logs/log-error.log',
                level: 'error'
            }),
            new (winston.transports.File)({
                name: 'warn-log',
                filename: 'logs/log-warn.log',
                level: 'warn'
            })
        ]
    });

    return logger;
};