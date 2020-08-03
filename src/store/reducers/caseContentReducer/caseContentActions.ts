import { getCaseContentAPI } from './../../../api/api';
import { Action } from 'redux';
import { RootState } from './../../store';
import { ThunkAction } from 'redux-thunk';
import { CaseContentStateI, setCaseContentActionI, setLoadingActionI } from './caseContentTypes';


export const SET_CASE_CONTENT = 'SET_CASE_CONTENT',
    SET_LOADING = 'SET_LOADING';

const setCaseContentAC = (caseContent: CaseContentStateI): setCaseContentActionI => ({ type: SET_CASE_CONTENT, caseContent });
const setLoadingAC = (loading: boolean): setLoadingActionI => ({ type: SET_LOADING, loading });

export const setCaseContentTC = (caseid: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch(setLoadingAC(true));
    const content: CaseContentStateI = await getCaseContentAPI(caseid);
    dispatch(setCaseContentAC(content));
    dispatch(setLoadingAC(false));
}