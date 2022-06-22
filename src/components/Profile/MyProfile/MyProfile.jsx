import React from 'react';
import MyProfileStyle from './MyProfile.module.css'
import sakura from '../../../images/sakura.png'
import samurai from '../../../images/samurai.png'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MyProfile = () => {
    return (
        <main className={MyProfileStyle.myProfile}>
            <div>
                <ProfileInfo/>
                <MyPost/>
            </div>
        </main>
    );
};

export default MyProfile;