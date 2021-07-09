import { SellItemResponse } from './../store/reducers/profileReducer/profileTypes';
import { StatusI, GetUsernameStatusI, UsernameValidateStatusI, AddBalanceStatusI } from './apiTypes';
import { CaseContentItemI, OpenCaseResponse, CaseContentResponse } from './../store/reducers/caseContentReducer/caseContentTypes';
import { CaseI } from './../store/reducers/mainContentReducer/mainContentTypes';
import Axios, { AxiosPromise } from "axios";
import { HeaderItemI } from '../store/reducers/headerReducer/headerTypes';
import { ProfileInfoI, DropItemI } from '../store/reducers/profileReducer/profileTypes';
import { CaseContentStateI } from '../store/reducers/caseContentReducer/caseContentReducer';

const instance = Axios.create({
    baseURL: "http://192.168.1.34:5000/",
    withCredentials: true
});

export const getCasesAPI = (): Promise<Array<CaseI>> => instance.get(`cases`).then(res => res.data);
export const getCaseContentAPI = (caseid: string): Promise<CaseContentResponse> => instance.get(`cases/${caseid}`).then(res => res.data);
export const openCaseAPI = (caseid: string): Promise<OpenCaseResponse> => instance.get(`open/${caseid}`).then(res => res.data);
export const authAPI = {
    login: (username?: string, password?: string): Promise<StatusI> => instance.post(`auth/login`, { username, password }).then(res => res.data),
    register: (username?: string, password?: string): Promise<StatusI> => instance.post(`auth/register`, { username, password }).then(res => res.data),
    amLogged: (): Promise<StatusI> => instance.get(`auth/login`).then(res => res.data),
    getUsername: (): Promise<GetUsernameStatusI> => instance.get(`profile/username`).then(res => res.data),
    logout: (): AxiosPromise => instance.delete(`auth/login`),
    usernameExists: (username: string | undefined): Promise<UsernameValidateStatusI> => instance.post(`validators/usernameExists`, { username }).then(res => res.data)
};
export const headerAPI = {
    getHeaderItems: (last?: number | null): Promise<Array<HeaderItemI>> => instance.get(`public/header/${ last?.toString() ? last : '' }`).then(res => res.data)
}
export const profileAPI = {
    info: (username: string): Promise<ProfileInfoI> => instance.get(`profile/info/${username}`).then(res => res.data),
    drops: (username?: string | null, page?: number): Promise<Array<DropItemI>> => instance.get(`profile/drops/${username}/${page}`).then(res => res.data),
    sellItem: (rowid: number): Promise<SellItemResponse> => instance.post(`items/sell`, { rowid }).then(res => res.data),
    addBalance: (): Promise<AddBalanceStatusI> => instance.post('profile/balance/').then(res => res.data)
}