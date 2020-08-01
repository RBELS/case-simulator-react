import { getCasesAPI } from './../../../api/api';
import { Action } from 'redux';
import { RootState } from './../../store';
import { ThunkAction } from 'redux-thunk';
import { CaseI, SetCasesActionI } from './mainContentTypes';

export const SET_CASES = "SET_CASES";

export const setCasesAC = (cases: Array<CaseI>): SetCasesActionI => ({ type: SET_CASES, cases });

export const setCasesTC = (): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const cases: Array<CaseI> = await getCasesAPI();
    dispatch(setCasesAC(cases));
}
