import React from 'react';
import usersStyles from "./users.module.css";
import linus from "../../images/linus.jpg";

const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <button className={props.currentPage === p && usersStyles.selectedPage} onClick={(e) => {props.onPageChanged(p)}}>{p}</button>
                    )
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>

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
                                                props.unFollow(u.id)
                                            }}>unFollow</button>
                                            : <button className={usersStyles.btn} onClick={() => {
                                                props.follow(u.id)
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
};

export default Users;