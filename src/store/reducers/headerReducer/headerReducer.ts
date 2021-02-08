import { HeaderItemI } from './headerTypes';
import { SET_LAST_ROW_ID, PUSH_HEADER_ITEMS, HeaderActionsType } from "./headerActions";
import { Reducer } from 'react';

const initialState = {
    headerItems: [] as Array<HeaderItemI>,
    lastRowId: null as number | null
}

export type HeaderStateI = typeof initialState;

const headerReducer = (state = initialState, action: HeaderActionsType): HeaderStateI => {
    switch(action.type) {
        case SET_LAST_ROW_ID:
            return {
                ...state,
                lastRowId: action.id
            }
        case PUSH_HEADER_ITEMS:
            return {
                ...state,
                headerItems: [ ...action.items, ...state.headerItems ]
            }
        default:
            return state;
    }
}

export default headerReducer;
