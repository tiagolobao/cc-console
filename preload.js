NotificationHandler = require('../assets/mods/cc-console/notificationHandler.js');
PseudoConsole = require('../assets/mods/cc-console/pseudoConsole.js');

// import NotificationHandler from '../assets/mods/cc-console/notificationHandler.js';
// import PseudoConsole from '../assets/mods/cc-console/pseudoConsole.js';

/*******************************
 * Console constants/config and variables 
 *******************************/

let ccc = {

    POSITION: NotificationHandler.POSITION.DOWNRIGHT,
    LOGFILE_LEVEL: PseudoConsole.LOG_LEVEL.UNCAUGHT,
    THEME: PseudoConsole.THEME.DARK,
    TOGGLE_KEY: 123, // F12 KEY
    MAX_LOGS: 1024,
    TIMEOUTS: {
        error: 15,
        warn: 5,
        log: 5,
    },

};

ccc.nh = new NotificationHandler(
    ccc.POSITION,
    ccc.TIMEOUTS
);

ccc.pc = new PseudoConsole(
    ccc.THEME,
    ccc.MAX_LOGS,
    ccc.LOGFILE_LEVEL,
    ccc.TOGGLE_KEY
);


/*******************************
 * Console 'public' functions
 *******************************/

// TODO: Overwrite of window.console functions!

/**
 * @brief append message into console list as a log
 * @arg {any} message to be displayed
 */
ccc.log = function (msg) {
    console.log(msg);
}

/**
 * @brief append message into console list as a warning
 * @arg {any} message to be displayed
 */
ccc.warn = function (msg) {
    console.warn(msg);
}

/**
 * @brief append message into console list as an error
 * @arg {any} message to be displayed
 */
ccc.error = function (msg) {
    console.error(msg);
}

/**
 * @brief just push up a notification without appending to console  
 * @arg {any} message to be displayed
 */
ccc.notify = function (msg) {
    console.error(msg);

}