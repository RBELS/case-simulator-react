import { getCasesAPI } from './../../../api/api';
import { RootState, InferActionTypes } from './../../store';
import { ThunkAction } from 'redux-thunk';
import {CaseI} from './mainContentTypes';

export const SET_CASES = "SET_CASES";

export const mainContentActions = {
    setCasesAC: (cases: Array<CaseI>) => ({ type: SET_CASES, cases } as const)
}
export type MainContentActionsType = InferActionTypes<typeof mainContentActions>

export const setCasesTC = (): ThunkAction<void, RootState, unknown, MainContentActionsType> => async dispatch => {
    const cases: Array<CaseI> = await getCasesAPI();
    dispatch(mainContentActions.setCasesAC(cases));
}
