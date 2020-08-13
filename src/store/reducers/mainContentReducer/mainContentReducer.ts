import {CaseI} from './mainContentTypes';
import { SET_CASES, MainContentActionsType } from './mainContenActions';

const initialState = {
    cases: [] as Array<CaseI>
}

export type CasesStateI = typeof initialState;

const mainContentReducer = (state = initialState,action: MainContentActionsType): CasesStateI => {
    switch(action.type) {
        case SET_CASES:
            return {
                ...state,
                cases: action.cases
            }
        default:
            return state;
    }
}

export default mainContentReducer;
