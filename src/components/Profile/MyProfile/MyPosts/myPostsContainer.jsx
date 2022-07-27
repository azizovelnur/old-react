import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (postText) => {
        props.store.dispatch(updateNewPostTextActionCreator(postText))
    }


    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;