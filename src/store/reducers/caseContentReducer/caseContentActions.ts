import { getCaseContentAPI, openCaseAPI, profileAPI } from './../../../api/api';
import { RootState, InferActionTypes } from './../../store';
import { ThunkAction } from 'redux-thunk';
import { CaseContentResponse, CurrentDropItemI } from './caseContentTypes';


export const SET_CASE_CONTENT = 'SET_CASE_CONTENT',
    SET_LOADING = 'SET_LOADING',
    SET_OPENING = 'SET_OPENING',
    SET_RESULT_ITEM = 'SET_RESULT_ITEM',
    SET_SHOW_DROP = 'SET_SHOW_DROP',
    SET_EXISTS = 'CASE_CONTENT/SET_EXISTS',
    SET_OPEN_ERROR = 'SET_OPEN_ERROR',
    SET_DROP_ITEM_SOLD = 'SET_DROP_ITEM_SOLD';

export const caseContentActions = {
    setCaseContentAC: (caseContent: CaseContentResponse) => ({ type: SET_CASE_CONTENT, caseContent } as const),
    setLoadingAC: (loading: boolean) => ({ type: SET_LOADING, loading } as const),
    setOpeningAC: (opening: boolean) => ({ type: SET_OPENING, opening } as const),
    setResultItemAC: (resultItem: CurrentDropItemI) => ({ type: SET_RESULT_ITEM, resultItem } as const),
    setShowDropAC: (showDrop: boolean | undefined) => ({ type: SET_SHOW_DROP, showDrop } as const),
    setExistsAC: (value: boolean) => ({ type: SET_EXISTS, value } as const),
    setOpenErrorAC: (value?: string | null) => ({ type: SET_OPEN_ERROR, value } as const),
    setDropItemSoldAC: (value: boolean) => ({ type: SET_DROP_ITEM_SOLD, value } as const)
}
export type CaseContentActionsType = InferActionTypes<typeof caseContentActions>

export const setCaseContentTC = (caseid: string): ThunkAction<void, RootState, unknown, CaseContentActionsType> => async dispatch => {
    dispatch(caseContentActions.setLoadingAC(true));
    const content: CaseContentResponse = await getCaseContentAPI(caseid);
    
    if(content.error) {
        dispatch(caseContentActions.setExistsAC(false));
        return;
    }
    dispatch(caseContentActions.setExistsAC(true));
    dispatch(caseContentActions.setCaseContentAC(content));
    dispatch(caseContentActions.setLoadingAC(false));
}

export const openCaseTC = (caseid: string): ThunkAction<void, RootState, unknown, CaseContentActionsType> => async dispatch => {
    const { item, success, error } = await openCaseAPI(caseid);
    if(!success) {
        dispatch(caseContentActions.setOpenErrorAC(error));
        return;
    }
    dispatch(caseContentActions.setOpenErrorAC(null));
    dispatch(caseContentActions.setResultItemAC(item));
    dispatch(caseContentActions.setOpeningAC(true));
}

export const stopOpenCaseTC = (): ThunkAction<void, RootState, unknown, CaseContentActionsType> => async dispatch => {
    dispatch(caseContentActions.setOpeningAC(false));
}

export const showDropTC = (show: boolean | undefined): ThunkAction<void, RootState, unknown, CaseContentActionsType> => async dispatch => {
    dispatch(caseContentActions.setShowDropAC(show));
}

export const sellItemImmedaiteTC = (rowid: number): ThunkAction<void, RootState, unknown, CaseContentActionsType> => async dispatch => {
    const { success, error, price } = await profileAPI.sellItem(rowid);
    if(!success) {
        alert(error);
        return;
    }
    dispatch(caseContentActions.setDropItemSoldAC(true));
}