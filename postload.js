NotificationHandler = require('../assets/mods/cc-console/notificationHandler.js');
PseudoConsole = require('../assets/mods/cc-console/pseudoConsole.js');

// import NotificationHandler from '../assets/mods/cc-console/notificationHandler.js';
// import PseudoConsole from '../assets/mods/cc-console/pseudoConsole.js';

/*******************************
 * Console constants/config and variables 
 *******************************/

let con = {

    ELEM: document.querySelector('body'),
    POSITION: NotificationHandler.POSITION.DOWNRIGHT,
    LOGFILE_LEVEL: PseudoConsole.LOG_LEVEL.UNCAUGHT,
    THEME: 14,
    TOGGLE_KEY: 80, // "p" KEY
    MAX_LOGS: 1024,
    TIMEOUTS: {
        error: 15,
        warn: 5,
        log: 5,
    },
};

//con.nh = new NotificationHandler(
//    con.POSITION,
//    con.TIMEOUTS
//);

con.pc = new PseudoConsole(
    con.THEME,
    con.MAX_LOGS,
    con.LOGFILE_LEVEL,
    con.TOGGLE_KEY,
    con.ELEM,
);
con.pc.log('my first message');
con.pc.warn('my first warning');
con.pc.error('my first error');

/*******************************
 * Console 'public' functions
 *******************************/

// TODO: Overwrite of window.console functions!

/**
 * @brief append message into console list as a log
 * @arg {any} message to be displayed
 */
con.log = function (msg) {
    console.log(msg);
}

/**
 * @brief append message into console list as a warning
 * @arg {any} message to be displayed
 */
con.warn = function (msg) {
    console.warn(msg);
}

/**
 * @brief append message into console list as an error
 * @arg {any} message to be displayed
 */
con.error = function (msg) {
    console.error(msg);
}

/**
 * @brief just push up a notification without appending to console  
 * @arg {any} message to be displayed
 */
con.notify = function (msg) {
    console.error(msg);

}