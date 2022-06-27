import React from 'react';
import DialogsStyle from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={`${DialogsStyle.dialog} ${DialogsStyle.dialogActive}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;