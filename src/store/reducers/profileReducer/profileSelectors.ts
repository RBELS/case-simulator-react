import { RootState } from './../../store';

export const profileSelectors = {
    exists: ({ profile: { exists } }: RootState) => exists,
    username: ({ profile: { username } }: RootState) => username,
    balance: ({ profile: { balance } }: RootState) => balance,
    myProfile: ({ profile: { myProfile } }: RootState) => myProfile,
    drops: ({ profile: { drops } }: RootState) => drops,
    loadingDrops: ({ profile: { loadingDrops } }: RootState) => loadingDrops,
    noMoreDrops: ({ profile: { noMoreDrops } }: RootState) => noMoreDrops,
    filters: ({ profile: { filters } }: RootState) => filters
}