import { HeaderItemI } from './headerTypes';
import { RootState } from './../../store';
import { createSelector, ParametricSelector } from 'reselect';

const headerItemsAll = ({ header: { headerItems } }: RootState) => headerItems;
const headerItems = createSelector(headerItemsAll, items => {
    const cutItems = items.slice(0,20);
    console.log(cutItems);
    return items;
});

const headerSelectors = {
    lastRowId: ({ header: { lastRowId } }: RootState) => lastRowId,
    headerItems
};

export default headerSelectors;