let store = {
    _state:  {
        profilePage: {
            posts : [
                {id: 1, message: 'React', likesCount: 1000},
                {id: 2, message: 'Vue', likesCount: 500}
            ],
            newPostText: 'el'
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
            ]
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed')
    },

    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 10000,
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}


export default store

