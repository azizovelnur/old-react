import DialogsStyle from "../Dialogs.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={DialogsStyle.message}>{props.messageText}</div>
    )
}

export default Message