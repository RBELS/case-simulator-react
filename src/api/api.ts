import { StatusI, GetUsernameStatusI, UsernameValidateStatusI } from './apiTypes';
import { CaseContentStateI, CaseContentItemI } from './../store/reducers/caseContentReducer/caseContentTypes';
import { CaseI } from './../store/reducers/mainContentReducer/mainContentTypes';
import Axios, { AxiosPromise, AxiosResponse } from "axios";
import { HeaderItemI } from '../store/reducers/headerReducer/headerTypes';

const instance = Axios.create({
    // baseURL: "http://25.67.248.153:8000/",
    baseURL: "http://25.40.173.182:5000/",
    // baseURL: "http://192.168.0.100:5000/",
    withCredentials: true
});

export const getCasesAPI = (): Promise<Array<CaseI>> => instance.get(`cases`).then(res => res.data);
export const getCaseContentAPI = (caseid: string): Promise<CaseContentStateI> => instance.get(`cases/${caseid}`).then(res => res.data);
export const openCaseAPI = (caseid: string): Promise<CaseContentItemI> => instance.get(`open/${caseid}`).then(res => res.data);
export const authAPI = {
    login: (username: string, password: string): Promise<StatusI> => instance.post(`auth/login`, { username, password }).then(res => res.data),
    register: (username: string, password: string): Promise<StatusI> => instance.post(`auth/register`, { username, password }).then(res => res.data),
    amLogged: (): Promise<StatusI> => instance.get(`auth/login`).then(res => res.data),
    getUsername: (): Promise<GetUsernameStatusI> => instance.get(`profile/username`).then(res => res.data),
    logout: (): AxiosPromise => instance.delete(`auth/login`),
    usernameExists: (username: string): Promise<UsernameValidateStatusI> => instance.post(`validators/usernameExists`, { username }).then(res => res.data)
};
export const headerAPI = {
    getHeaderItems: (last?: number): Promise<Array<HeaderItemI>> => instance.get(`public/header/${ last ? last : '' }`).then(res => res.data)
}