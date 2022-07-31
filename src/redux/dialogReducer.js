const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Timur'}
    ],

    messagesData: [
        {id: 1, messageText: 'Hi'},
        {id: 2, messageText: 'Hello'},
        {id: 3, messageText: 'Wazzup'}
    ],

    //Dialog page
    newMessageBody: ''
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.messagesData = [...state.messagesData, {id: 4, messageText: stateCopy.newMessageBody}]
            stateCopy.newMessageBody = ''
            return stateCopy

        }
        default:
            return state
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}


export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}


export default dialogReducer