import { NEW_USER_START, 
         NEW_USER_SUCCESS, 
         NEW_USER_FAILURE } from '../actions';

const initialState = {
    users: [],
    newUser: false,
    error: ''
}

export const reducer = ( state = initialState, action) => {
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
        default:
                return state;
    }
    
}