import React, {Component} from 'react';
import {connect} from 'react-redux'

class NewUser extends Component {

    state = {
        user: {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    changeHandler = () => {
 
    }

    submitHandler = (e) => {
        e.preventDefault();
    }


    render(){
        return(
            <div>
               <form onSubmit={this.submitHandler}>
                   <div>
                     <label>First Name</label>
                     <input type="text"
                       id="first_name"
                       placeholder="first name"
                       onChange={this.changeHandler}
                       value={this.state.user.first_name}
                     />
                   </div>
                   <div>
                     <label>Last Name</label>
                     <input type="text"
                       id="last_name"
                       placeholder="last name"
                       onChange={this.changeHandler}
                       value={this.state.user.last_name}
                     />
                   </div>
                   <div>
                     <label>Email</label>
                     <input type="email"
                      id="email"
                      placeholder="email"
                      onChange={this.changeHandler}
                      value={this.state.user.email}
                     />
                   </div>
                   <button>Create User</button>
               </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(NewUser);