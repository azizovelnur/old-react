const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts : [
        {id: 1, message: 'React', likesCount: 1000},
        {id: 2, message: 'Vue', likesCount: 500}
    ],
    newPostText: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 10000,
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.postText
            return stateCopy
        }

        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}
export const updateNewPostTextActionCreator = (postText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        postText: postText
    }
}

export default profileReducer