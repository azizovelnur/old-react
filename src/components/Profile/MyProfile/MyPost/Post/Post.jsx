import React from 'react';
import linus from '../../../../../images/linus.jpg'
import PostStyle from './Post.module.css'

const Post = (props) => {
    return (
        <div className={PostStyle.item}>
            <div>
                <img src={linus} alt=""/>
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