import { profileAPI } from './../../../api/api';
import { ThunkAction } from 'redux-thunk';
import { SetProfileInfoActionI, SetExistsActionI, DropItemI, DropsActionI, SetItemSoldActionI, AddMoneyActionI, SetLoadingDropsActionI, SetNoMoreDropsActionI, SetPageActionI } from './profileTypes';
import { RootState } from '../../store';
import { Action } from 'redux';

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

const setProfileInfoAC = (username: string, balance: number, myProfile: boolean): SetProfileInfoActionI => ({ type: SET_PROFILE_INFO, payload: { username, balance, myProfile } });
const setExistsAC = (value: boolean): SetExistsActionI => ({ type: SET_EXISTS, value });
const setDropsAC = (drops: Array<DropItemI>): DropsActionI => ({ type: SET_DROPS, drops });
const appendDropsAC = (drops: Array<DropItemI>): DropsActionI => ({ type: APPEND_DROPS, drops });
const setItemSoldAC = (rowid: number): SetItemSoldActionI => ({ type: SET_ITEM_SOLD, rowid });
const addMoneyAC = (value: number): AddMoneyActionI => ({ type: ADD_MONEY, value });
const setLoadingDropsAC = (value: boolean): SetLoadingDropsActionI => ({ type: SET_LODAING_DROPS, value });
const setNoMoreDropsAC = (value: boolean): SetNoMoreDropsActionI => ({ type: SET_NO_MORE_DROPS, value });
const setPageAC = (value: number): SetPageActionI => ({ type: SET_PAGE, value });

export const setProfileInfoTC = (usernameParam: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const { success, balance, username, myProfile } = await profileAPI.info(usernameParam);
    if(!success) {
        dispatch(setExistsAC(false));
        return;
    }
    const drops = await profileAPI.drops(usernameParam, 1);
    if(drops.length === 0) {
        dispatch(setNoMoreDropsAC(true));
    }

    dispatch(setProfileInfoAC(username, balance, myProfile));
    dispatch(setDropsAC(drops));
    dispatch(setExistsAC(true));
}

export const sellItemTC = (rowid: number): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const { success, error, price } = await profileAPI.sellItem(rowid);
    if(!success) {
        alert(error);
        return;
    }
    dispatch(setItemSoldAC(rowid));
    dispatch(addMoneyAC(price));
}

export const showMoreTC = (username: string, page: number): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch(setLoadingDropsAC(true));
    const newDrops = await profileAPI.drops(username, page+1);
    if(newDrops.length === 0) {
        dispatch(setNoMoreDropsAC(true));
        dispatch(setLoadingDropsAC(false));
    }
    dispatch(setPageAC(page+1));
    dispatch(appendDropsAC(newDrops));
    dispatch(setLoadingDropsAC(false));
}