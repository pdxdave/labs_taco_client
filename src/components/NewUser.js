import React, {Component} from 'react';
import {connect} from 'react-redux'
import {newUser} from '../actions'

class NewUser extends Component {

    state = {
        user: {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    changeHandler = (e) => {
      this.setState({
          user: {
              ...this.state.user,
              [e.target.name]: e.target.value
          }
       })  
    }

    newUser = (e) => {
        e.preventDefault();
        console.log('test', this.state.user) // making it here
        this.props.newUser(this.state.user)

        // reset state
        this.setState({
            user: {
                first_name: '',
                last_name: '',
                email: '' 
            }
        })
    }


    render(){
        return(
            <div>
               <form>
                   <div>
                     <label>First Name</label>
                     <input type="text"
                       name="first_name"
                       placeholder="first name"
                       onChange={this.changeHandler}
                       value={this.state.user.first_name}
                     />
                   </div>
                   <div>
                     <label>Last Name</label>
                     <input type="text"
                       name="last_name"
                       placeholder="last name"
                       onChange={this.changeHandler}
                       value={this.state.user.last_name}
                     />
                   </div>
                   <div>
                     <label>Email</label>
                     <input type="email"
                      name="email"
                      placeholder="email"
                      onChange={this.changeHandler}
                      value={this.state.user.email}
                     />
                   </div>
                   <button onClick={this.newUser}>Create User</button>
               </form>
            </div>
        )
    }
}

export default connect(null, {newUser})(NewUser);