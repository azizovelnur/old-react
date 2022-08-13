import React from 'react';
import usersStyles from "./users.module.css";
import linus from "../../images/linus.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
            <button className={props.currentPage === p && usersStyles.selectedPage} onClick={(e) => {
              props.onPageChanged(p)
            }}>{p}</button>
          )
        })}
      </div>
      {
        props.users.map(u => <div key={u.id}>

            <div className={usersStyles.userBorder}>

              <div className={usersStyles.userInfo}>
                <div>
                  <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : linus}
                         className={usersStyles.userPhoto}/>
                  </NavLink>
                  <div>NickName: {u.name}</div>
                </div>

                <div>
                  {
                    u.followed
                      ? <button className={usersStyles.btn} onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                          withCredentials: true,
                          headers: {
                            "API-KEY": '2c9da347-5e93-4865-8ef6-d4204e7177f4'
                          }
                        })
                          .then(responce => {
                            if (responce.data.resultCode == 0) {
                              props.unFollow(u.id)
                            }
                          })
                      }}>unFollow</button>

                      : <button className={usersStyles.btn} onClick={() => {

                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                          withCredentials: true,
                          headers: {
                            "API-KEY": '2c9da347-5e93-4865-8ef6-d4204e7177f4'
                          }
                        })
                          .then(responce => {
                            if (responce.data.resultCode == 0) {
                              props.follow(u.id)
                            }
                          })
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