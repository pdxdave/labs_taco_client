import React from 'react';

const User = ({user}) => {
    return(
        <div key={user.id}>
               <p>{user.first_name} {user.last_name}</p> 
               <p>{user.email}</p> 
        </div>
    )
}

export default User;