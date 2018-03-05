import {FETCH_USER, FETCH_USER_ERROR, SET_USER, SET_USER_ERROR} from './types';
import {AsyncStorage} from 'react-native';

const CURRENT_USER = 'CURRENT_USER';

export const setUser = (user) => {

    return dispatch => {
        return AsyncStorage.setItem(CURRENT_USER, JSON.stringify(user))
        .then(() => {
          dispatch({
              type : SET_USER,
              payload : user
          });
        }).catch(() => {
            dispatch({
                type : SET_USER_ERROR,
                payload : null
            });
        });
    }
}


export const fetchUser = () => {

    return dispatch => {
        return AsyncStorage.getItem(CURRENT_USER)
        .then((user) => {
            dispatch({
                type : FETCH_USER,
                payload : user
            })
        }).catch(() => {
            dispatch({
                type : FETCH_USER_ERROR,
                payload : null
            });
        });
    }
}