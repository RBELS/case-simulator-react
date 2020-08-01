import { getCaseContentAPI } from './../../../api/api';
import { Action } from 'redux';
import { RootState } from './../../store';
import { ThunkAction } from 'redux-thunk';
import { CaseContentStateI, setCaseContentActionI } from './caseContentTypes';


export const SET_CASE_CONTENT = "SET_CASE_CONTENT";

const setCaseContentAC = (caseContent: CaseContentStateI): setCaseContentActionI => ({ type: SET_CASE_CONTENT, caseContent });

export const setCaseContentTC = (caseid: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const content: CaseContentStateI = await getCaseContentAPI(caseid);
    dispatch(setCaseContentAC(content));
}