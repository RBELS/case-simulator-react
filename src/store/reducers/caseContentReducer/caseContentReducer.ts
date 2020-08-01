import { AnyAction } from 'redux';
import { CaseContentStateI, setCaseContentActionI } from './caseContentTypes';
import { SET_CASE_CONTENT } from './caseContentActions';

const initialState: CaseContentStateI = {
    id: undefined,
    name: undefined,
    avatar: "https://dictionary.cambridge.org/ru/images/thumb/cross_noun_002_09265.jpg?version=5.0.107",
    price: undefined,
    items: []
}

const caseContentReducer = (state = initialState, action: AnyAction): CaseContentStateI => {
    switch(action.type) {
        case SET_CASE_CONTENT:
            return { ...action.caseContent }
        default:
            return state;
    }
}

export default caseContentReducer;