import { headerAPI } from './../../../api/api';
import { RootState, InferActionTypes } from './../../store';
import { ThunkAction } from 'redux-thunk';
import { HeaderItemI } from "./headerTypes";

export const
    SET_LAST_ROW_ID = 'SET_LAST_ROW_ID',
    PUSH_HEADER_ITEMS = 'PUSH_HEADER_ITEMS';

export const headerActions = {
    setLastRowIdAC: ( id: number ) => ({ type: SET_LAST_ROW_ID, id } as const),
    pushHeaderItemsAC: ( items: Array<HeaderItemI> ) => ({ type: PUSH_HEADER_ITEMS, items } as const)
}
export type HeaderActionsType = InferActionTypes<typeof headerActions>

export const setHeaderItemsTC = (  ): ThunkAction<void, RootState, unknown, HeaderActionsType> => async dispatch => {
    
    const headerItems = await headerAPI.getHeaderItems();
    dispatch(headerActions.setLastRowIdAC(headerItems[0]?.rowid));
    dispatch(headerActions.pushHeaderItemsAC(headerItems));
}

export const updateHeaderTC = ( lastRowId?: number | null ): ThunkAction<void, RootState, unknown, HeaderActionsType> => async dispatch => {
    const newHeaderItems = await headerAPI.getHeaderItems(lastRowId);
    if(newHeaderItems.length === 0) {
        return;
    }
    dispatch(headerActions.setLastRowIdAC(newHeaderItems[0].rowid));
    dispatch(headerActions.pushHeaderItemsAC(newHeaderItems));
}