import { DropItemI, SortItemsFormFiltersI } from './profileTypes';
import { SET_EXISTS, SET_PROFILE_INFO, SET_DROPS, SET_ITEM_SOLD, ADD_MONEY, APPEND_DROPS, SET_LODAING_DROPS, SET_NO_MORE_DROPS, ProfileActionsType, SET_FILTERS, RESET_FILTERS } from './profileActions';

const initialState = {
    exists: false,
    username: '' as string,
    balance: undefined as number | undefined,
    myProfile: undefined as boolean | undefined,
    drops: [] as Array<DropItemI>,
    loadingDrops: false as boolean,
    noMoreDrops: false as boolean,
    filters: {
        caseId: -1,
        rarity: -1,
        notSold: false
    } as SortItemsFormFiltersI
}

export type ProfileStateI = typeof initialState;

const profileReducer = (state = initialState, action: ProfileActionsType): ProfileStateI => {
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
                balance: state.balance! + action.value
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
        case SET_FILTERS:
            return {
                ...state,
                filters: action.newFilters //Check if the request is sent more than once!!!!
            }
        case RESET_FILTERS:
            return {
                ...state,
                filters: {
                    caseId: -1,
                    rarity: -1,
                    notSold: false
                }
            }
        default:
            return state;
    }
}

export default profileReducer;