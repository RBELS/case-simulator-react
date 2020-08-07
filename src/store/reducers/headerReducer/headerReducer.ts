import { AnyAction } from "redux";
import { HeaderStateI } from "./headerTypes";
import { SET_LAST_ROW_ID, PUSH_HEADER_ITEMS } from "./headerActions";

const initialState: HeaderStateI = {
    headerItems: [],
    lastRowId: null
}

const headerReducer = (state = initialState, action: AnyAction): HeaderStateI => {
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
