import { CasesStateI } from './../types/types';
import { getCasesAPI } from './../../api/api';
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../store";
import { CaseI, setCasesActionI } from "../types/types";

//action types
export const SET_CASES = "SET_CASES";
//action types

const initialState: CasesStateI = {
    cases: Array<CaseI>()
}

const mainContentReducer = (state = initialState,action: setCasesActionI): CasesStateI => {
    if(action.type == SET_CASES) {
        return {
            ...state,
            cases: action.cases
        }
    }

    return state;
}

export const setCasesAC = (cases: Array<CaseI>): setCasesActionI => ({ type: SET_CASES, cases });

export const setCasesTC = (): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const cases: Array<CaseI> = await getCasesAPI();
    dispatch(setCasesAC(cases));
    // console.log(cases);
}

export default mainContentReducer;