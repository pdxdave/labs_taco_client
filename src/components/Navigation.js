import React from 'react';
import {Link} from 'react-router-dom';
import './user.css'

const Navigation = () => {
    return (
        <div>
            <Link to="/add" className="link">Add User</Link>
            <Link to="/user-list" className="link">User List</Link>
        </div>
    )
}

export default Navigation;