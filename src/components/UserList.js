import React, {Component} from 'react';
import User from './User';
import {connect} from 'react-redux'
import {userList} from '../actions'



class UserList extends Component{

    componentDidMount(){
        this.props.userList();
    }

    render(){
        return(
        <div className="wrapper">
           {this.props.users.map(user => {
               return (
                   <User user={user} />
               )
           })}
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      users: state.users
    }
}

export default connect(mapStateToProps, {userList})(UserList);