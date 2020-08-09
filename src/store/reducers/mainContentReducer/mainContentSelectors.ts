import { RootState } from './../../store';

const mainContentSelectors = {
    cases: ({ main: { cases } }: RootState) => cases
}

export default mainContentSelectors;