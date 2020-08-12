import { AnyAction } from 'redux';
import { CaseContentItemI, CurrentDropItemI } from './caseContentTypes';
import { SET_CASE_CONTENT, SET_LOADING, SET_OPENING, SET_RESULT_ITEM, SET_SHOW_DROP, SET_EXISTS, SET_OPEN_ERROR, SET_DROP_ITEM_SOLD } from './caseContentActions';

const initialState = {
    id: null as number | null,
    name: null as string | null,
    avatar: undefined as string | undefined,
    price: null as number | null,
    items: [] as Array<CaseContentItemI>,
    loading: true,
    opening: false,
    showDrop: false,
    resultItem: null as unknown as CurrentDropItemI,
    exists: true,
    openError: null as string | null
}

export type CaseContentStateI = typeof initialState;

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
        case SET_EXISTS:
            return {
                ...state,
                exists: action.value
            }
        case SET_OPEN_ERROR:
            return {
                ...state,
                openError: action.value
            }
        case SET_DROP_ITEM_SOLD:
            return {
                ...state,
                resultItem: {
                    ...state.resultItem,
                    sold: action.value
                }
            }
        default:
            return state;
    }
}

export default caseContentReducer;