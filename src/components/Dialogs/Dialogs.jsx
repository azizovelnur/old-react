import React from 'react';
import DialogsStyle from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={`${DialogsStyle.dialog} ${DialogsStyle.dialogActive}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
           <div className={DialogsStyle.message}>{props.messageText}</div>
        )
}

let dialogsData = [
    {id: 1, name: 'Artem'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Timur'}
]

let dialogsElements = dialogsData.map((dialog) => {
    return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
})

let messagesData = [
    {id: 1, messageText: 'Hi'},
    {id: 2, messageText: 'Hello'},
    {id: 3, messageText: 'Wazzup'}
]

let messagesElements = messagesData.map( (message) => {
    return (
        <Message messageText={message.messageText}/>
    )
})
const Dialogs = (props) => {
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