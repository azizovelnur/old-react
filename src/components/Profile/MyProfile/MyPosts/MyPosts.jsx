import React from 'react';
import MyPostStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";




const MyPosts = (props) => {


    let postsElement = props.postsData.map( (post) => {
        return (
                <Post message={post.message} likesCount={post.likesCount}/>
            )
    })

    let newPostElement = React.useRef(null)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let postText = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(postText))
    }

    return (
        <div className={MyPostStyle.addPostWrapper}>
            <div className={MyPostStyle.addPostTitle}>
                My posts
            </div>

            <div className={MyPostStyle.addPost}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={ addPost }>Add post</button>
            </div>

            <div className={MyPostStyle.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;