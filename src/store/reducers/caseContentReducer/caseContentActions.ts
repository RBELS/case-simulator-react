import { Action } from 'redux';
import { getCaseContentAPI, openCaseAPI, profileAPI } from './../../../api/api';
import { RootState } from './../../store';
import { ThunkAction } from 'redux-thunk';
import { setCaseContentActionI, setLoadingActionI, setOpeningAction, setResultItemAction, setShowDropActionI, SetExistsActionI, CaseContentResponse, SetOpenErrorActionI, CurrentDropItemI, SetDropItemSoldActionI } from './caseContentTypes';


export const SET_CASE_CONTENT = 'SET_CASE_CONTENT',
    SET_LOADING = 'SET_LOADING',
    SET_OPENING = 'SET_OPENING',
    SET_RESULT_ITEM = 'SET_RESULT_ITEM',
    SET_SHOW_DROP = 'SET_SHOW_DROP',
    SET_EXISTS = 'CASE_CONTENT/SET_EXISTS',
    SET_OPEN_ERROR = 'SET_OPEN_ERROR',
    SET_DROP_ITEM_SOLD = 'SET_DROP_ITEM_SOLD';

const setCaseContentAC = (caseContent: CaseContentResponse): setCaseContentActionI => ({ type: SET_CASE_CONTENT, caseContent });
const setLoadingAC = (loading: boolean): setLoadingActionI => ({ type: SET_LOADING, loading });
const setOpeningAC = (opening: boolean): setOpeningAction => ({ type: SET_OPENING, opening });
const setResultItemAC = (resultItem: CurrentDropItemI): setResultItemAction => ({ type: SET_RESULT_ITEM, resultItem });
const setShowDropAC = (showDrop: boolean): setShowDropActionI => ({ type: SET_SHOW_DROP, showDrop });
const setExistsAC = (value: boolean): SetExistsActionI => ({ type: SET_EXISTS, value });
export const setOpenErrorAC = (value: string | null): SetOpenErrorActionI => ({ type: SET_OPEN_ERROR, value });
const setDropItemSoldAC = (value: boolean): SetDropItemSoldActionI => ({ type: SET_DROP_ITEM_SOLD, value });

export const setCaseContentTC = (caseid: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch(setLoadingAC(true));
    const content: CaseContentResponse = await getCaseContentAPI(caseid);
    
    if(content.error) {
        dispatch(setExistsAC(false));
        return;
    }
    dispatch(setExistsAC(true));
    dispatch(setCaseContentAC(content));
    dispatch(setLoadingAC(false));
}

export const openCaseTC = (caseid: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const { item, success, error } = await openCaseAPI(caseid);
    if(!success) {
        dispatch(setOpenErrorAC(error));
        return;
    }
    dispatch(setOpenErrorAC(null));
    dispatch(setResultItemAC(item));
    dispatch(setOpeningAC(true));
}

export const stopOpenCaseTC = (): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch(setOpeningAC(false));
}

export const showDropTC = (show: boolean): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch(setShowDropAC(show));
}

export const sellItemImmedaiteTC = (rowid: number): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const { success, error, price } = await profileAPI.sellItem(rowid);
    if(!success) {
        alert(error);
        return;
    }
    dispatch(setDropItemSoldAC(true));
}