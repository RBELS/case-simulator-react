import { AnyAction } from 'redux';
import { CaseContentStateI, setCaseContentActionI } from './caseContentTypes';
import { SET_CASE_CONTENT, SET_LOADING, SET_OPENING, SET_RESULT_ITEM, SET_SHOW_DROP } from './caseContentActions';

const initialState: CaseContentStateI = {
    id: undefined,
    name: undefined,
    avatar: 'https://dictionary.cambridge.org/ru/images/thumb/cross_noun_002_09265.jpg?version=5.0.107',
    price: undefined,
    items: [],
    loading: false,
    opening: false,
    showDrop: false,
    resultItem: null
}

const caseContentReducer = (state = initialState, action: AnyAction): CaseContentStateI => {
    switch(action.type) {
        case SET_CASE_CONTENT:
            return {
                ...state,
                ...action.caseContent
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case SET_OPENING:
            return {
                ...state,
                opening: action.opening
            }
        case SET_RESULT_ITEM:
            return {
                ...state,
                resultItem: action.resultItem
            }
        case SET_SHOW_DROP:
            return {
                ...state,
                showDrop: action.showDrop
            }
        default:
            return state;
    }
}

export default caseContentReducer;