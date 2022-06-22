import React from 'react';
import ninja from '../../../../../images/ninja.png'
import PostStyle from './Post.module.css'

const Post = (props) => {
    return (
        <div className={PostStyle.item}>
            <div className={PostStyle.postProfile}>
                <img src={ninja} alt=""/>
                <div>Elnur</div>
            </div>
            <div>
                {props.message}
            </div>

            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};

export default Post;