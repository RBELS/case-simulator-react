import { CaseContentStateI, setCaseContentActionI } from './../types/types';
import { getCaseContentAPI } from './../../api/api';
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../store";

//action types
const SET_CASE_CONTENT = "SET_CASE_CONTENT";
//action types

const initialState: CaseContentStateI = {
    id: undefined,
    name: undefined,
    avatar: "https://dictionary.cambridge.org/ru/images/thumb/cross_noun_002_09265.jpg?version=5.0.107",
    price: undefined,
    items: []
}

const caseContentReducer = (state = initialState, action: setCaseContentActionI): CaseContentStateI => {
    if(action.type == SET_CASE_CONTENT) {
        return { ...action.caseContent }
    }

    return state;
}

const setCaseContentAC = (caseContent: CaseContentStateI): setCaseContentActionI => ({ type: SET_CASE_CONTENT, caseContent });

export const setCaseContentTC = (caseid: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const content: CaseContentStateI = await getCaseContentAPI(caseid);
    dispatch(setCaseContentAC(content));
}

export default caseContentReducer;