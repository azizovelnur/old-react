import React from 'react';
import MyProfileStyle from "../MyProfile.module.css";
import sakura from "../../../../images/sakura.png";
import samurai from "../../../../images/samurai.png";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }


    return (
        <div>
            <div className={MyProfileStyle.topBackground}>
                <img className={MyProfileStyle.topImg} src={sakura} alt=""/>
            </div>

            <div className={MyProfileStyle.avatarAndDescr}>
                <div className={MyProfileStyle.avatar}>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div className={MyProfileStyle.descr}>
                    <div>Name: Elnur</div>
                    <div>Mission: finish the course</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;