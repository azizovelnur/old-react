import React from 'react';
import usersStyles from './users.module.css'

const Users = (props) => {

   if(props.users.length === 0) {
       props.setUsers([
               {id: 1,
                   followed: false,
                   userPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png',
                   fullName: 'Elnur',
                   status: 'proger',
                   location: {city: 'Nefteugansk', country: 'Russia'}},

               {id: 2,
                   followed: false,
                   userPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png',
                   fullName: 'Artem',
                   status: 'proger',
                   location: {city: 'Kazan', country: 'Russia'}},

               {id: 3,
                   followed: true,
                   userPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png',
                   fullName: 'Dima',
                   status: 'proger',
                   location: {city: 'Minsk', country: 'Belarus'}}
           ]
       )
   }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.userPhoto} className={usersStyles.userPhoto}/>
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unFollow(u.id)} }>unFollow</button>
                                : <button onClick={() => {props.follow(u.id)} } >Follow</button>}
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;