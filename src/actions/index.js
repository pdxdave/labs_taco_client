import axios from 'axios'

export const NEW_USER_START = "NEW_USER_START";
export const NEW_USER_SUCCESS = "NEW_USER_SUCCESS";
export const NEW_USER_FAILURE = "NEW_USER_FAILURE";


// For adding a new user
export const newUser = (newUser) => dispatch => {
    dispatch({ type: NEW_USER_START })
    axios 
    .post("http://localhost:5000/add", newUser)
    .then(res => {
        console.log('from actions', res.data)
        dispatch({
            type: NEW_USER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err.response)
        dispatch({
            type: NEW_USER_FAILURE,
            payload: err.response
        })
    })
}