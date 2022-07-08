import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";


let store = {
    _state:  {
        profilePage: {
            posts : [
                {id: 1, message: 'React', likesCount: 1000},
                {id: 2, message: 'Vue', likesCount: 500}
            ],
            newPostText: ''
        },

        messagesPage: {
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
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed')
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}


window.store = store

export default store

