import { serverErrorAlert } from './../utils/alerts';
import { authAPI } from './../../../api/api';
import { RootState } from './../../store';
import { ThunkAction } from 'redux-thunk';
import { SetLoggedActionI, SetUsernameActionI } from './authTypes';
import { Action } from 'redux';
import { reset, stopSubmit } from 'redux-form';

export const SET_LOGGED = 'SET_LOGGED', SET_USERNAME = "SET_USERNAME";

export const setLoggedAC = (logged: boolean): SetLoggedActionI => ({ type: SET_LOGGED, logged });
export const setUsernameAC = (username: string): SetUsernameActionI => ({ type: SET_USERNAME, username });

export const loginTC = (username: string, password: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    try {
        const  { success } = await authAPI.login(username, password);
        dispatch(reset('login'));
        // dispatch(setLoggedAC(success));
        if(success) {
            dispatch(setLoggedAC(true));
        } else {
            dispatch(setLoggedAC(false));
            dispatch(stopSubmit('login', { _error: 'Wrong input' }));
        }
    } catch (error) {
        serverErrorAlert();
    }
}

export const setUsernameTC = (): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    try {
        const { username, error } = await authAPI.getUsername();
        if(error) {
            alert('Your connection is bad. Please relog in the site. If the error accurs again, ask for help on artyombel2003@gmail.com');
        } else {
            dispatch(setUsernameAC(username));
        }
    } catch (error) {
        serverErrorAlert();
    }
}

//add ts here
export const amLoggedTC = () => async (dispatch) => {
    return authAPI.amLogged().then(res => {
        dispatch(setLoggedAC(res.success));
    })
    
}
//add ts here
