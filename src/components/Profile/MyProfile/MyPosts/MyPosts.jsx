import React from 'react';
import MyPostStyle from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {


    let postsElement = props.postsData.map( (post) => {
        return (
                <Post message={post.message} likesCount={post.likesCount}/>
            )
    })

    let newPostElement= React.useRef(null)

    let addPost = () => {
        let postText = newPostElement.current.value
        alert(postText)
    }


    return (
        <div className={MyPostStyle.addPostWrapper}>
            <div className={MyPostStyle.addPostTitle}>
                My posts
            </div>

            <div className={MyPostStyle.addPost}>
                <textarea ref={newPostElement}>

                </textarea>
                <button onClick={ addPost }>Add post</button>
            </div>

            <div className={MyPostStyle.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;