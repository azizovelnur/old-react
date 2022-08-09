import React from 'react';
import usersStyles from './users.module.css'
import * as axios from 'axios'
import linus from '../../images/linus.jpg'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
            this.props.setTotalUsersCount(responce.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
        })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return (
                            <button className={this.props.currentPage === p && usersStyles.selectedPage} onClick={(e) => {this.onPageChanged(p)}}>{p}</button>
                        )
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>

                            <div className={usersStyles.userBorder}>

                                <div className={usersStyles.userInfo}>
                                    <div>
                                        <img src={u.photos.small != null ? u.photos.small : linus}
                                             className={usersStyles.userPhoto}/>
                                        <div>NickName: {u.name}</div>
                                    </div>

                                    <div>
                                        {
                                            u.followed ? <button className={usersStyles.btn} onClick={() => {
                                                    this.props.unFollow(u.id)
                                                }}>unFollow</button>
                                                : <button className={usersStyles.btn} onClick={() => {
                                                    this.props.follow(u.id)
                                                }}>Follow</button>
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
