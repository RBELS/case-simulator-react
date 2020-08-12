import { RootState } from './../../store';

export const appSelectors = {
    inited: ({ app: { inited } }: RootState) => inited
}