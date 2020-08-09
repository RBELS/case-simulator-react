import { RootState } from './../../store';

const headerSelectors = {
    headerItems: ({ header: { headerItems } }: RootState) => headerItems,
    lastRowId: ({ header: { lastRowId } }: RootState) => lastRowId
};

export default headerSelectors;