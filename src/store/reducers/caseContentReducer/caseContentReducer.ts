import { AnyAction } from 'redux';
import {CaseContentItemI, CurrentDropItemI} from './caseContentTypes';
import { SET_CASE_CONTENT, SET_LOADING, SET_OPENING, SET_RESULT_ITEM, SET_SHOW_DROP, SET_EXISTS, SET_OPEN_ERROR, SET_DROP_ITEM_SOLD, CaseContentActionsType } from './caseContentActions';
import { Reducer } from 'react';

const initialState = {
    id: undefined as number | undefined,
    name: undefined as string | undefined,
    avatar: undefined as string | undefined,
    price: undefined as number | undefined,
    items: [] as Array<CaseContentItemI>,
    loading: true,
    opening: false,
    showDrop: false as boolean | undefined,
    resultItem: {} as CurrentDropItemI,
    exists: true,
    openError: undefined as string | null | undefined
}

export type CaseContentStateI = typeof initialState;

const caseContentReducer = (state = initialState, action: CaseContentActionsType): CaseContentStateI => {
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
                    sold: true
                }
            }
        default:
            return state;
    }
}

export default caseContentReducer;