import React from 'react';
import DialogsStyle from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogReducer";




const Dialogs = (props) => {

        let state = props.messagesPage

        let dialogsElements = state.dialogsData.map((dialog) => {
            return (
                    <DialogItem name={dialog.name} id={dialog.id}/>
                )
        })


        let messagesElements = state.messagesData.map( (message) => {
            return (
                <Message messageText={message.messageText}/>
            )
        })

        let newMessageBody = state.newMessageBody

        let onSendMessageClick = () => {
            props.sendMessage()
        }

        let onNewMessageChange = (event) => {
            let body = event.target.value
            props.updateNewMessageBody(body)
        }


    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={DialogsStyle.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={'Enter your message'}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>


        </div>
    );
};

export default Dialogs;