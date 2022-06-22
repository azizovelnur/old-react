import React from 'react';
import DialogsStyle from './Dialogs.module.css'
const Dialogs = (props) => {
    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogsItems}>
                <div className={`${DialogsStyle.dialog} ${DialogsStyle.dialogActive}`}>
                    Artem
                </div>

                <div className={DialogsStyle.dialog}>
                    Dima
                </div>

                <div className={DialogsStyle.dialog}>
                    Timur
                </div>
            </div>

            <div className={DialogsStyle.messages}>
                <div className={DialogsStyle.message}>How are you</div>
                <div className={DialogsStyle.message}>my dear</div>
                <div className={DialogsStyle.message}>friend</div>
            </div>


        </div>
    );
};

export default Dialogs;