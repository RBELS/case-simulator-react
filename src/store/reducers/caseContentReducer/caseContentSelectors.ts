import { RootState } from './../../store';

const caseContentSelectors = {
    name: ({ caseContent: { name } }: RootState) => name,
    avatar: ({ caseContent: { avatar } }: RootState) => avatar,
    price: ({ caseContent: { price } }: RootState) => price,
    items: ({ caseContent: { items } }: RootState) => items,
    loading: ({ caseContent: { loading } }: RootState) => loading,
    opening: ({ caseContent: { opening } }: RootState) => opening,
    resultItem: ({ caseContent: { resultItem } }: RootState) => resultItem,
    showDrop: ({ caseContent: { showDrop } }: RootState) => showDrop,
    exists: ({ caseContent: { exists } }: RootState) => exists,
    openError: ({ caseContent: { openError } }: RootState) => openError,
    currentDropSold: ({ caseContent: { resultItem: { sold } } }: RootState) => sold
}

export default caseContentSelectors;