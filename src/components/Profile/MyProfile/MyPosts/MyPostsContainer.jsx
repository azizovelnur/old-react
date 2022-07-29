import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";




const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let onPostChange = (postText) => {
                        store.dispatch(updateNewPostTextActionCreator(postText))
                    }

                    return (
                        <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                             postsData={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;