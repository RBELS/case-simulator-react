import { getCaseContentAPI, openCaseAPI } from './../../../api/api';
import { Action } from 'redux';
import { RootState } from './../../store';
import { ThunkAction } from 'redux-thunk';
import { CaseContentStateI, setCaseContentActionI, setLoadingActionI, setOpeningAction, CaseContentItemI, setResultItemAction } from './caseContentTypes';


export const SET_CASE_CONTENT = 'SET_CASE_CONTENT',
    SET_LOADING = 'SET_LOADING',
    SET_OPENING = 'SET_OPENING',
    SET_RESULT_ITEM = 'SET_RESULT_ITEM';

const setCaseContentAC = (caseContent: CaseContentStateI): setCaseContentActionI => ({ type: SET_CASE_CONTENT, caseContent });
const setLoadingAC = (loading: boolean): setLoadingActionI => ({ type: SET_LOADING, loading });
const setOpeningAC = (opening: boolean): setOpeningAction => ({ type: SET_OPENING, opening });
const setResultItemAC = (resultItem: CaseContentItemI): setResultItemAction => ({ type: SET_RESULT_ITEM, resultItem });

export const setCaseContentTC = (caseid: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch(setLoadingAC(true));
    const content: CaseContentStateI = await getCaseContentAPI(caseid);
    dispatch(setCaseContentAC(content));
    dispatch(setLoadingAC(false));
}

export const openCaseTC = (caseid: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const item = await openCaseAPI(caseid);
    dispatch(setResultItemAC(item));
    dispatch(setOpeningAC(true));
}

export const stopOpenCaseTC = (): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch(setOpeningAC(false));
}