import { AnyAction } from 'redux';
import { CasesStateI, CaseI } from './mainContentTypes';
import { SET_CASES } from './mainContenActions';

const initialState: CasesStateI = {
    cases: Array<CaseI>()
}

const mainContentReducer = (state = initialState,action: AnyAction): CasesStateI => {
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
