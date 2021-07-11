import { InferActionTypes } from './../../store';
import { profileAPI } from './../../../api/api';
import { ThunkAction } from 'redux-thunk';
import { DropItemI } from './profileTypes';
import { RootState } from '../../store';

export const 
    SET_PROFILE_INFO = 'SET_PROFILE_INFO',
    SET_EXISTS = 'PROFILE/SET_EXISTS',
    SET_DROPS = 'SET_DROPS',
    APPEND_DROPS = 'APPEND_DROPS',
    SET_ITEM_SOLD = 'SET_ITEM_SOLD',
    ADD_MONEY = 'PROFILE/ADD_MONEY',
    SET_LODAING_DROPS = 'SET_LODAING_DROPS',
    SET_NO_MORE_DROPS = 'SET_NO_MORE_DROPS',
    SET_PAGE = 'SET_PAGE';

export const profileActions = {
    setProfileInfoAC:(username: string, balance?: number, myProfile?: boolean) => ({ type: SET_PROFILE_INFO, payload: { username, balance, myProfile } } as const),
    setExistsAC:(value: boolean) => ({ type: SET_EXISTS, value } as const),
    setDropsAC:(drops: Array<DropItemI>) => ({ type: SET_DROPS, drops } as const),
    appendDropsAC:(drops: Array<DropItemI>) => ({ type: APPEND_DROPS, drops } as const),
    setItemSoldAC:(rowid: number) => ({ type: SET_ITEM_SOLD, rowid } as const),
    addMoneyAC:(value: number) => ({ type: ADD_MONEY, value } as const),
    setLoadingDropsAC:(value: boolean) => ({ type: SET_LODAING_DROPS, value } as const),
    setNoMoreDropsAC:(value: boolean) => ({ type: SET_NO_MORE_DROPS, value } as const),
    setPageAC:(value: number) => ({ type: SET_PAGE, value } as const),
}
export type ProfileActionsType = InferActionTypes<typeof profileActions>

export const setProfileInfoTC = (usernameParam: string): ThunkAction<void, RootState, unknown, ProfileActionsType> => async dispatch => {
    const { success, balance, username, myProfile } = await profileAPI.info(usernameParam);
    if(!success) {
        dispatch(profileActions.setExistsAC(false));
        return;
    }
    const drops = await profileAPI.drops(usernameParam, 1);
    if(drops.length === 0) {
        dispatch(profileActions.setNoMoreDropsAC(true));
    }

    dispatch(profileActions.setProfileInfoAC(username!, balance, myProfile));
    dispatch(profileActions.setDropsAC(drops));
    dispatch(profileActions.setExistsAC(true));
}

export const sellItemTC = (rowid: number): ThunkAction<void, RootState, unknown, ProfileActionsType> => async dispatch => {
    const { success, error, price } = await profileAPI.sellItem(rowid);
    if(!success) {
        alert(error);
        return;
    }
    dispatch(profileActions.setItemSoldAC(rowid));
    dispatch(profileActions.addMoneyAC(price!));
}

export const showMoreTC = (username: string, page: number): ThunkAction<void, RootState, unknown, ProfileActionsType> => async dispatch => {
    dispatch(profileActions.setLoadingDropsAC(true));
    let newDrops: Array<DropItemI> = [];
    if(page) {
        newDrops = await profileAPI.drops(username, page+1);
        if(newDrops.length === 0) {
            dispatch(profileActions.setNoMoreDropsAC(true));
            dispatch(profileActions.setLoadingDropsAC(false));
        }
        dispatch(profileActions.setPageAC(page+1));
        dispatch(profileActions.appendDropsAC(newDrops));
        dispatch(profileActions.setLoadingDropsAC(false));
    }
}

export const addBalanceTC = (): ThunkAction<void, RootState, unknown, ProfileActionsType> => async dispatch => {
    const { success, error, addNumber } = await profileAPI.addBalance();
    if(success) {
        debugger
        dispatch(profileActions.addMoneyAC(addNumber!));
    } else {
        alert(error);
    }
}