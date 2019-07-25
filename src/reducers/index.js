import { NEW_USER_START, 
         NEW_USER_SUCCESS, 
         NEW_USER_FAILURE,
         USER_LIST_START,
         USER_LIST_SUCCESS,
         USER_LIST_FAILURE } from '../actions';

const initialState = {
    users: [],
    newUser: false,
    userList: false,
    error: ''
}

const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case NEW_USER_START:
            return {
                ...state,
                newUser: true,
                error: ''
            }
        case NEW_USER_SUCCESS:
            return {
                ...state,
                newUser: true,
                error: '',
                users: action.payload
            }
        case NEW_USER_FAILURE:
            return {
                ...state,
                newUser: false,
                error: action.payload
            }
        case USER_LIST_START:
            return {
                ...state,
                userList: true,
                error: ''
            }
        case USER_LIST_SUCCESS:
            return {
                ...state,
                userList: true,
                error: '',
                users: action.payload
            }
        case USER_LIST_FAILURE:
            return {
                ...state,
                userList: false,
                error: ''
            }
        default:
                return state;
    }
    
}

export default reducer;