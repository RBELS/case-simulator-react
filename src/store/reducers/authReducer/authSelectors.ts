import { RootState } from './../../store';

const authSelectors = {
    logged: ( { auth: { logged } }: RootState ) => logged,
    notResponding: ( { auth: { notResponding } }: RootState ) => notResponding,
    username: ( { auth: { username } }: RootState ) => username
}

export default authSelectors;