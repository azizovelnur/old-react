import React from 'react';
import usersStyles from './users.module.css'
import * as axios from 'axios'
import linus from '../../images/linus.jpg'



class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
            this.props.setUsers(responce.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : linus}
                                 className={usersStyles.userPhoto}/>
                        </div>
                    </span>
                        <span>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>unFollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>

                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        );
    }
}

export default Users