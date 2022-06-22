import React from 'react';
import MyPostStyle from './MyPost.module.css'
import Post from "./Post/Post";



const MyPost = () => {

    let postData = [
        {id: 1, message: 'React', likesCount: 1000},
        {id: 2, message: 'Vue', likesCount: 500}
    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
};

export default MyPost;