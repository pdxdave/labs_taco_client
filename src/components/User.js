import React from 'react';
import './user.css'
const User = ({user}) => {
    return(
        <div>
           <div className="card" key={user.id}>
               <p>{user.first_name} {user.last_name}</p> 
               <p>{user.email}</p>
               <button className="btn">Delete</button> 
               <button className="btn">Update</button>
           </div>
        </div>
    )
}

export default User;