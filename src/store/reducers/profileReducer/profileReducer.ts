import { DropItemI } from './profileTypes';
import { AnyAction } from "redux";
import { SET_EXISTS, SET_PROFILE_INFO, SET_DROPS, SET_ITEM_SOLD, ADD_MONEY, APPEND_DROPS, SET_LODAING_DROPS, SET_NO_MORE_DROPS, SET_PAGE } from './profileActions';

const initialState = {
    exists: false,
    username: null as string | null,
    balance: undefined as number | undefined,
    myProfile: undefined as boolean | undefined,
    page: 1,
    drops: [] as Array<DropItemI>,
    loadingDrops: false as boolean,
    noMoreDrops: false as boolean
}

export type ProfileStateI = typeof initialState;

const profileReducer = (state = initialState, action: AnyAction): ProfileStateI => {
    switch(action.type) {
        case SET_EXISTS:
            return {
                ...state,
                exists: action.value
            }
        case SET_PROFILE_INFO:
            return {
                ...state,
                ...action.payload
            }
        case SET_DROPS:
            return {
                ...state,
                page: 1,
                drops: action.drops
            }
        case APPEND_DROPS:
            return {
                ...state,
                drops: [ ...state.drops, ...action.drops ]
            }
        case SET_ITEM_SOLD:
            return {
                ...state,
                drops: state.drops.map(drop => {
                    return drop.rowid === action.rowid ?
                    { ...drop, sold: true }
                    :
                    drop
                })
            }
        case ADD_MONEY:
            return {
                ...state,
                balance: state.balance + action.value
            }
        case SET_LODAING_DROPS:
            return {
                ...state,
                loadingDrops: action.value
            }
        case SET_NO_MORE_DROPS:
            return {
                ...state,
                noMoreDrops: action.value
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.value
            }
        default:
            return state;
    }
}

export default profileReducer;