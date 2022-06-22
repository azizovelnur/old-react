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



const Dialogs = (props) => {
    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogsItems}>
                <DialogItem name={'Artem'} id={1}/>
                <DialogItem name={'Dima'} id={2}/>
                <DialogItem name={'Timur'} id={3}/>
            </div>

            <div className={DialogsStyle.messages}>
               <Message messageText={'Hi'}/>
               <Message messageText={'Hello'}/>
               <Message messageText={'Wazzup'}/>
            </div>


        </div>
    );
};

export default Dialogs;