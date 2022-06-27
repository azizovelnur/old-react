import React from 'react';
import MyPostStyle from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {


    let postsElement = props.postsData.map( (post) => {
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

export default MyPosts;