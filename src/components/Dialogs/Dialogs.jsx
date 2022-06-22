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

let messagesData = [
    {id: 1, messageText: 'Hi'},
    {id: 2, messageText: 'Hello'},
    {id: 3, messageText: 'Wazzup'}
]

const Dialogs = (props) => {
    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>

            <div className={DialogsStyle.messages}>
               <Message messageText={messagesData[0].messageText}/>
               <Message messageText={messagesData[1].messageText}/>
               <Message messageText={messagesData[2].messageText}/>
            </div>


        </div>
    );
};

export default Dialogs;