import React from 'react';
import MyProfile from "./MyProfile";
import * as axios from "axios";
import {setUserProfile} from "../../../redux/profileReducer";
import {connect} from "react-redux";

class MyProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(responce => {
            this.props.setUserProfile(responce.data)
        })
    }

    render() {
        return (
           <MyProfile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile}) (MyProfileContainer);