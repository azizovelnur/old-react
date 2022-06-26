import React from 'react';
import MyPostStyle from './MyPost.module.css'
import Post from "./Post/Post";



const MyPost = () => {

    let posts = [
        {id: 1, message: 'React', likesCount: 1000},
        {id: 2, message: 'Vue', likesCount: 500}
    ]

    let postsElement = posts.map( (post) => {
        return (
                <Post message={post.message} likesCount={post.likesCount}/>
            )
    })

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
                {postsElement}
            </div>
        </div>
    );
};

export default MyPost;