import { headerAPI } from './../../../api/api';
import { RootState } from './../../store';
import { ThunkAction } from 'redux-thunk';
import { HeaderItemI, HeaderItemsActionI, SetLastRowIdActionI } from "./headerTypes";
import { Action } from 'redux';

export const
    SET_LAST_ROW_ID = 'SET_LAST_ROW_ID',
    PUSH_HEADER_ITEMS = 'PUSH_HEADER_ITEMS';

    
const setLastRowIdAC = ( id: number ): SetLastRowIdActionI => ({ type: SET_LAST_ROW_ID, id });
const pushHeaderItemsAC = ( items: Array<HeaderItemI> ): HeaderItemsActionI => ({ type: PUSH_HEADER_ITEMS, items });

export const setHeaderItemsTC = (  ): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    
    const headerItems = await headerAPI.getHeaderItems();
    dispatch(setLastRowIdAC(headerItems[0]?.rowid));
    dispatch(pushHeaderItemsAC(headerItems));
}

export const updateHeaderTC = ( lastRowId?: number | null ): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const newHeaderItems = await headerAPI.getHeaderItems(lastRowId);
    if(newHeaderItems.length === 0) {
        return;
    }
    dispatch(setLastRowIdAC(newHeaderItems[0].rowid));
    dispatch(pushHeaderItemsAC(newHeaderItems));
}