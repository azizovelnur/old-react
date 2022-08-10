import React from 'react';
import MyProfile from "./MyProfile";
import * as axios from "axios";
import {setUserProfile} from "../../../redux/profileReducer";
import {connect} from "react-redux";


import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";


class MyProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 12
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(responce => {
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


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}



export default connect(mapStateToProps, {setUserProfile}) (withRouter(MyProfileContainer));