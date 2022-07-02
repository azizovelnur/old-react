import React from 'react';
import MyProfileStyle from './MyProfile.module.css'
import sakura from '../../../images/sakura.png'
import samurai from '../../../images/samurai.png'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const MyProfile = (props) => {
    return (
        <main className={MyProfileStyle.myProfile}>
            <div>
                <ProfileInfo/>
                <MyPosts postsData={props.profilePage.posts} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>
            </div>
        </main>
    );
};

export default MyProfile;