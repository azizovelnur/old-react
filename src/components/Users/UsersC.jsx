import React from 'react';
import usersStyles from './users.module.css'
import * as axios from 'axios'
import linus from '../../images/linus.jpg'



class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
            this.props.setUsers(responce.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>

                        <div className={usersStyles.userBorder}>

                            <div className={usersStyles.userInfo}>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : linus} className={usersStyles.userPhoto}/>
                                    <div>NickName: {u.name}</div>
                                </div>

                                <div>
                                    {
                                        u.followed ? <button className={usersStyles.btn} onClick={() => {this.props.unFollow(u.id)}}>unFollow</button>
                                                    : <button className={usersStyles.btn} onClick={() => {this.props.follow(u.id)}}>Follow</button>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                    )
                }
            </div>
        );
    }
}

export default Users