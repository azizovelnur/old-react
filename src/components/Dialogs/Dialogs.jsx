import React from 'react';
import DialogsStyle from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {

        let dialogsElements = props.dialogsData.map((dialog) => {
            return (
                    <DialogItem name={dialog.name} id={dialog.id}/>
                )
        })


        let messagesElements = props.messagesData.map( (message) => {
            return (
                <Message messageText={message.messageText}/>
            )
        })

    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={DialogsStyle.messages}>
                {messagesElements}
            </div>


        </div>
    );
};

export default Dialogs;