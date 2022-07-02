import {rerenderEntireTree} from "../render";

let state =  {
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
        ]
    }
}


export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 10000,
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export default state