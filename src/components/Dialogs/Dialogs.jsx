import React from 'react';
import DialogsStyle from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const Dialogs = (props) => {
    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogsItems}>
                <div className={`${DialogsStyle.dialog} ${DialogsStyle.dialogActive}`}>
                    <NavLink to={'/dialogs/1'}>Artem</NavLink>
                </div>

                <div className={DialogsStyle.dialog}>
                    <NavLink to={'/dialogs/2'}>Dima</NavLink>
                </div>

                <div className={DialogsStyle.dialog}>
                    <NavLink to={'/dialogs/3'}>Timur</NavLink>
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