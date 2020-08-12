import { RootState } from './../../store';

export const profileSelectors = {
    exists: ({ profile: { exists } }: RootState) => exists,
    username: ({ profile: { username } }: RootState) => username,
    balance: ({ profile: { balance } }: RootState) => balance,
    myProfile: ({ profile: { myProfile } }: RootState) => myProfile,
    drops: ({ profile: { drops } }: RootState) => drops,
    loadingDrops: ({ profile: { loadingDrops } }: RootState) => loadingDrops,
    page: ({ profile: { page } }: RootState) => page,
    noMoreDrops: ({ profile: { noMoreDrops } }: RootState) => noMoreDrops
}