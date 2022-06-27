let state =  {
    profilePage: {
        posts : [
            {id: 1, message: 'React', likesCount: 1000},
            {id: 2, message: 'Vue', likesCount: 500}
        ],
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


export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 10000,
    }

    state.profilePage.posts.push(newPost)
}


export default state