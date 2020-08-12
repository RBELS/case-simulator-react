import { RootState } from './../../store';
import { createSelector } from 'reselect';

const headerItemsAll = ({ header: { headerItems } }: RootState) => headerItems;
const headerItems = createSelector(headerItemsAll, items => {
    const cutItems = items.slice(0,20);
    return items;
});

const headerSelectors = {
    lastRowId: ({ header: { lastRowId } }: RootState) => lastRowId,
    headerItems
};

export default headerSelectors