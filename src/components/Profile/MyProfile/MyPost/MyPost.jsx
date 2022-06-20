import React from 'react';
import MyPostStyle from './MyPost.module.css'
import Post from "./Post/Post";
const MyPost = () => {
    return (
        <div className={MyPostStyle.addPostWrapper}>
            <div className={MyPostStyle.addPostTitle}>
                My posts
            </div>

            <div className={MyPostStyle.addPost}>
                <textarea>

                </textarea>
                <button>Add post</button>
            </div>

            <div className={MyPostStyle.posts}>
                <Post message={'elnur'} likesCount={1000}/>
                <Post message={'elnur'} likesCount={1000}/>
                <Post message={'elnur'} likesCount={1000}/>
            </div>
        </div>
    );
};

export default MyPost;