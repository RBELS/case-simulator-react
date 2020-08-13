import { amLoggedTC } from './../authReducer/authActions';
import { RootState, InferActionTypes } from './../../store';
import { ThunkAction } from 'redux-thunk';
export const INIT_APP = "INIT_APP";

export const appActions = {
    initAppAC: () => ({ type: INIT_APP })
}
export type AppActionsTypes = InferActionTypes<typeof appActions>

export const initAppTC = (): ThunkAction<void, RootState, unknown, AppActionsTypes> => async dispatch => {
    const promise = dispatch(amLoggedTC());
    promise.then(() => {
        dispatch(appActions.initAppAC());
    });
}
