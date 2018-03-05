import {FETCH_USER, FETCH_USER_ERROR, SET_USER, SET_USER_ERROR} from '../actions/types';


export default function(state = null, action) {
    switch(action.type){
        case SET_USER:
            return action.payload;
        case SET_USER_ERROR:
            return action.payload;
        case FETCH_USER:
            return action.payload;
        case FETCH_USER_ERROR:
            return action.payload;
        default:
            return state;
    }
}