import React from 'react';
import MyPostStyle from './MyPost.module.css'
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

            </div>
        </div>
    );
};

export default MyPost;