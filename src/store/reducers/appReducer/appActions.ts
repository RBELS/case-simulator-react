import { amLoggedTC } from './../authReducer/authActions';
import { RootState } from './../../store';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
export const INIT_APP = "INIT_APP";

export const initAppAC = () => ({ type: INIT_APP });

export const initAppTC = (): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const promise = dispatch(amLoggedTC());
    promise.then(() => {
        dispatch(initAppAC());
    });
}
