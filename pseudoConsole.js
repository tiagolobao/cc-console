/**
 * @class Pseudo Console
 * @brief Implement a pseudo console within game window
 */
class PseudoConsole{

    // THEME variable type
    static THEME = {
        DARK : 1
    };

    // LOG_LEVEL variable type
    static LOG_LEVEL = {
        NONE     : 0,
        UNCAUGHT : 1,
        ERROR    : 2,
        WARN     : 3,
        LOG      : 4
    };

    // WINDOW_STATUS variable type
    static WINDOW_STATUS = {
        CLOSED : false,
        OPENED : true,
    }

    /**
     * Init variables and console interface
     * @param {THEME} theme which theme should be used
     * @param {integer} maxSize how many messages should be queued
     * @param {LOG_LEVEL} logfileLevel how deep the logs should be outputed to the file 
     * @param {integer} keyBinding code of the key to toggle the console 
     */
    constructor(theme, maxSize, logfileLevel, keyBinding){
        this.theme = theme;
        this.maxSize = maxSize;
        this.logfileLevel = logfileLevel;
        this.keyBinding = keyBinding;
        this.windowStatus = PseudoConsole.WINDOW_STATUS.CLOSED;
    }

    /**
     * @brief appends a log message on the console
     * @param {any} msg message to be appended
     * @public
     */
    log(msg){

    }

    /**
     * @brief appends a warn message on the console
     * @param {any} msg message to be appended
     * @public
     */
    warn(msg){

    }

    /**
     * @brief appends an error message on the console
     * @param {any} msg message to be appended
     * @public
     */
    error(msg){

    }

    /**
     * @brief getter for windowStatus
     * @public
     */
    getWindowStatus(){

    }

    /**
     * @brief Shows or hides the console window
     * @private
     */
    _toggle(){

    }

    /**
     * @brief Clears all messages on the console window
     * @private
     */
    _clear(){

    }

    /**
     * @brief appends the message in the log file
     * @param {any} msg message to be appended
     * @private
     */
    _writeLogFile(){

    }
}

module.exports = PseudoConsole;