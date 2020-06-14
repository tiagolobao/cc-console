/**
 * @class Pseudo Console
 * @brief Implement a pseudo console within game window, expanding the console javascript functions
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

    // MSG_TYPE variable type
    static MSG_TYPE = {
        LOG: 0,
        WAR: 1,
        ERR: 2,
    }


    /**
     * Init variables and console interface
     * @param {THEME} theme which theme should be used
     * @param {integer} maxSize how many messages should be queued
     * @param {LOG_LEVEL} logfileLevel how deep the logs should be outputed to the file 
     * @param {integer} keyBinding code of the key to toggle the console 
     * @param {HTMLElement} elem node to be appended the console
     */
    constructor(theme, maxSize, logfileLevel, keyBinding, elem){
        this.maxSize = maxSize;
        this.logfileLevel = logfileLevel;
        this.keyBinding = keyBinding;
        this.windowStatus = PseudoConsole.WINDOW_STATUS.CLOSED;

        // appending new UI
        this.ids = {
            ui: 'u_ccconsole',
            window: 'w_ccconsole',
            header: 'h_ccconsole',
            closeBtn: 'h_closeBtn',
            cleanBtn: 'h_cleanBtn',
            sizeBtn: 'h_sizeBtn',
        };
        this.uiElem = this._generateUi(elem, this.ids, theme);
        this.windowElem = this.uiElem.querySelector('#'+this.ids.window);
        this.headerElem = this.uiElem.querySelector('#'+this.ids.header);

        // close button handler
        this.headerElem.querySelector('#'+this.ids.closeBtn).addEventListener('click',(e) => {
            e.target.closest('#'+this.ids.ui).style.display = 'none';
        });
        // clear button handler
        this.headerElem.querySelector('#'+this.ids.cleanBtn).addEventListener('click',(e) => {
            e.target.closest('#'+this.ids.ui).querySelector('#'+this.ids.window).innerHTML = '';
        });
    }

    /**
     * @brief appends a log message on the console
     * @param {any} msg message to be appended
     * @public
     */
    log(msg){
        this._appendConsoleMessage(msg, PseudoConsole.MSG_TYPE.LOG); 
    }

    /**
     * @brief appends a warn message on the console
     * @param {any} msg message to be appended  
     * @public
     */
    warn(msg){
        this._appendConsoleMessage(msg, PseudoConsole.MSG_TYPE.WAR);
    }

    /**
     * @brief appends an error message on the console
     * @param {any} msg message to be appended
     * @public
     */
    error(msg){
        this._appendConsoleMessage(msg, PseudoConsole.MSG_TYPE.ERR);
    }

    /**
     * @brief Shows or hides the console window. Change the windowStatus,
     * activating or deactivating notifications
     * @public
     */
    toggle(){
        switch (this.windowStatus) {
            case PseudoConsole.WINDOW_STATUS.CLOSED:
                this.windowStatus = PseudoConsole.WINDOW_STATUS.OPENED;
                this.uiElem.style.display = 'flex';   
                break;
            case PseudoConsole.WINDOW_STATUS.OPENED:
                this.windowStatus = PseudoConsole.WINDOW_STATUS.CLOSED;
                this.uiElem.style.display = 'none';
                break;
        }
    }

    /**
     * @brief appends the message in the log file
     * @param {any} msg message to be appended
     * @private
     */
    _writeLogFile(){

    }

    /**
     * @brief generates the message HTML. Handles the colors and icon depending on the message type
     * @param {any} msg message to be appended
     * @param {MSG_TYPE} type how the message should be displayed
     * @private
     */
    _appendConsoleMessage(msg,type){
        
        // Append to the console 
        let icon;
        switch(type){
            case PseudoConsole.MSG_TYPE.LOG:
                icon = '';
                break;
                case PseudoConsole.MSG_TYPE.WAR:
                icon = `<span style="color: #f1fa8c">Warning:</span>`;
                break;
            case PseudoConsole.MSG_TYPE.ERR:
                icon = `<span style="color: #ff5555">Error:</span>`;
                break;
        }

        this.windowElem.insertAdjacentHTML('beforeend',`
            <ul style="
                padding: 0;
                margin: 0px 0px 10px 0px;
            "> > ${icon} ${msg.toString()} </ul>
        `);

        // Notification
        if(PseudoConsole.WINDOW_STATUS.CLOSED == this.windowStatus){
                   
        }
    }

    /**
     * @brief generates console interface
     * @param {HTMLElement} elem node to be appended the console
     * @param {Object} id div id's for window, header and ui
     *  id.ui , id.window, id.header
     * @param {THEME} theme message to be appended
     * @private
     */
    _generateUi(elem,ids,theme){
        if( theme != PseudoConsole.THEME.DARK ){
            console.error('dark theme is the only theme...');
        }
        let newUiElem = document.createElement("div");
        newUiElem.id = ids.ui;
        newUiElem.style.display = 'flex';
        newUiElem.style.height = '200px';
        newUiElem.insertAdjacentHTML( 'afterbegin', `
            ${ /* Console Window */'' }
            <div id="${ids.window}"
                style="
                    color: white;
                    font-family: Menlo, Monaco, 'Consolas', 'Courier New', 'Courier';
                    font-size: 11pt;
                    background: #282a36;
                    padding: 10px;
                    box-sizing: border-box;
                    width: calc(100% - 30px);
                    height: 100%;
                    top: 30px;
                    overflow: auto;
                    opacity: 0.9;
                    z-index: 1;
            ">
            </div>
            ${ /* Console Header */'' }
            <div id="${ids.header}"
                style="
                    background-color: #f8f8f2;
                    width: 30px;
                    display: flex;
                    flex-direction: column;
                    z-index: 1;
            ">
                <button 
                    id="${ids.closeBtn}"
                    type="button"
                    style="
                        background-color: #ff5555;
                        border: none;
                        border-radius: 100%;
                        width: 15px;
                        height: 15px;
                        margin-left: 7px;
                        margin-bottom: 5px;
                        margin-top: 5px;
                        color: white;
                "></button> 
                <button
                    id="${ids.cleanBtn}"
                    type="button"
                    style="
                        background-color: #f1fa8c;
                        border: none;
                        border-radius: 100%;
                        width: 15px;
                        height: 15px;
                        margin-left: 7px;
                        color: white;
                    "></button> 
                <button
                    id="${ids.sizeBtn}"
                    type="button"
                    style="
                        background-color: #333;
                        margin: 0;
                        border: none;
                        width: 100%;
                        color: white;
                        margin-top: auto;
                        cursor: n-resize;
                    ">=</button>
            </div>
        `);
        elem.prepend(newUiElem);
        return newUiElem;
    }
}

module.exports = PseudoConsole;