import axios from 'axios'

export const NEW_USER_START = "NEW_USER_START";
export const NEW_USER_SUCCESS = "NEW_USER_SUCCESS";
export const NEW_USER_FAILURE = "NEW_USER_FAILURE";
export const USER_LIST_START = "USER_LIST_START"
export const USER_LIST_SUCCESS = "USER_LIST_SUCCESS"
export const USER_LIST_FAILURE = "USER_LIST_FAILURE"
export const USER_DELETE_START = "USER_DELETE_START"
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS"
export const USER_DELETE_FAILURE = "USER_DELETE_FAILURE"


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
            payload: err.response.data
        })
    })
}

export const userList = () => dispatch => {
    dispatch({ type: USER_LIST_START})
    axios 
     .get("http://localhost:5000/user-list")
     .then(res => {
         console.log('actions', res.data)
         dispatch({
             type: USER_LIST_SUCCESS,
             payload: res.data
         })
     })
     .catch(err => {
         dispatch({
             type: USER_LIST_FAILURE,
             payload: err.response.data
         })
     })
}

export const delUser = (id) => dispatch => {
    dispatch({ tyle: USER_DELETE_START })
    axios
      .delete(`http://localhost:5000/remove/${id}`)
      .then(res => {
          console.log(res.data);
          dispatch({
              type: USER_DELETE_SUCCESS,
              payload: res.data
          })
      })
      .catch(err => {
          dispatch({
              type: USER_DELETE_FAILURE,
              payload: err.response.data
          })
      })
}