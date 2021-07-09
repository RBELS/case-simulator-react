import { Action } from 'redux';
import { serverErrorAlert } from './../utils/alerts';
import { authAPI } from './../../../api/api';
import { RootState, InferActionTypes } from './../../store';
import { ThunkAction } from 'redux-thunk';
import { reset, stopSubmit } from 'redux-form';

export const SET_LOGGED = 'SET_LOGGED', SET_USERNAME = "SET_USERNAME";

export const authActions = {
    setLoggedAC: (logged: boolean) => ({ type: SET_LOGGED, logged } as const),
    setUsernameAC: (username: string) => ({ type: SET_USERNAME, username } as const)
}
export type AuthActionsType = InferActionTypes<typeof authActions>;

export const loginTC = (username?: string, password?: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    try {
        const { success } = await authAPI.login(username, password);
        dispatch(reset('login'));
        if(success) {
            dispatch(authActions.setLoggedAC(true));
        } else {
            dispatch(authActions.setLoggedAC(false));
            dispatch(stopSubmit('login', { _error: 'Wrong input' }));
        }
    } catch (error) {
        serverErrorAlert();
    }
}

export const registerTC = (username?: string, password?: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    try {
        const { success } = await authAPI.register(username, password);
        dispatch(reset('register'));
        if(success) {
            dispatch(authActions.setLoggedAC(true));
        } else {
            dispatch(authActions.setLoggedAC(false));
        }
    } catch (error) {
        serverErrorAlert();
    }
}

export const setUsernameTC = (): ThunkAction<void, RootState, unknown, AuthActionsType> => async dispatch => {
    try {
        const { username, error } = await authAPI.getUsername();
        if(error) {
            alert('Your connection is bad. Please relog in the site. If the error accurs again, ask for help on artyombel2003@gmail.com');
        } else {
            dispatch(authActions.setUsernameAC(username));
        }
    } catch (error) {
        serverErrorAlert();
    }
}

export const logOutTC = (): ThunkAction<void, RootState, unknown, AuthActionsType> => async dispatch => {
    try {
        const res = await authAPI.logout();
        dispatch(authActions.setLoggedAC(false));
    } catch (error) {
        serverErrorAlert();
    }
}

export const amLoggedTC = (): ThunkAction<Promise<void>, RootState, unknown, AuthActionsType> => async dispatch => {
    return authAPI.amLogged().then(res => {
        dispatch(authActions.setLoggedAC(res.success));
    })
}