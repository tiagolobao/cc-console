
/**
 * @class Notification Handler
 * @brief Implement push up notifications within game window
 */
class NotificationHandler{

    // POSITION variable type
    static POSITION = {
        UPLEFT    : 1,
        UPRIGHT   : 2,
        DOWNLEFT  : 3,
        DOWNRIGHT : 4,
    };

    // NOTIFICATION_TYPE variable type
    static NOTIFICATION_TYPE = {
        LOG     : 1,
        WARNING : 2,
        ERROR   : 3,
    }

    /**
     * Init variables and notification interface
     * @param {POSITION} pos indicates where the notification will appear
     * @param {Object} timeouts specifies the time for each NOTIFICATION_TYPE
     */
    constructor(pos,timeouts){
        this.pos = pos;
        this.timeouts = timeouts;
    }

    /**
     * @brief Pushes a notification on the screen
     * @param {any} mgs message to be displayed
     * @param {NOTIFICATION_TYPE} type how the notification should be displayed
     * @public
     */
    push(msg,type){

    }

    /**
     * @brief Pops the active notification
     * @public
     */
    pop(){

    }

}


module.exports = NotificationHandler;
