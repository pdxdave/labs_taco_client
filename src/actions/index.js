import axios from 'axios'

export const NEW_USER_START = "NEW_USER_START";
export const NEW_USER_SUCCESS = "NEW_USER_SUCCESS";
export const NEW_USER_FAILURE = "NEW_USER_FAILURE";


const link = "https://localhost:5000"


// For adding a new user
export const newUser = () => dispatch => {
    dispatch({ type: NEW_USER_START })
    axios 
    .post(`${link}/add`)
    .then(res => {
        console.log(res.data)
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