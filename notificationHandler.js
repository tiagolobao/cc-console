
/**
 * @class Notification Handler
 * @brief Implement push up notifications within game window
 */
class NotificationHandler{

    // POSITION variable type
    static POSITION = {
        UPLEFT    : 0b11,
        UPRIGHT   : 0b10,
        DOWNLEFT  : 0b01,
        DOWNRIGHT : 0b00,
    };

    // NOTIFICATION_TYPE variable type
    static NOTIFICATION_TYPE = {
        LOG     : 1,
        WARNING : 2,
        ERROR   : 3,
    }
    
    // Notification interface generator
    ui(pos){ 
        const flexDirection = (pos & 0b01 ? 'flex-end' : 'flex-start');
        return `
        <div 
            id="notificationUi"
            style="
                display:flex;
                flex-direction: column;
                align-items: ${flexDirection};
                margin: 5px;
            ">
            <!-- Balloons will be added here -->
        </div>
        `;
    }

    /**
     * Init variables and notification interface
     * @param {POSITION} pos indicates where the notification will appear
     * @param {Object} timeouts specifies the time for each NOTIFICATION_TYPE
     * @param {HTMLElement} elem node to be appended the notifications
     */
    constructor(pos,timeouts,elem){
        this.pos = pos;
        this.timeouts = timeouts;

        elem.insertAdjacentHTML('beforeend',ui);
        this.uiElem = elem.getElementById('notificationUi');
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
