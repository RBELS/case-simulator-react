import { StatusI, GetUsernameStatusI } from './apiTypes';
import { CaseContentStateI } from './../store/reducers/caseContentReducer/caseContentTypes';
import { CaseI } from './../store/reducers/mainContentReducer/mainContentTypes';
import Axios, { AxiosPromise, AxiosResponse } from "axios";

const instance = Axios.create({
    // baseURL: "http://25.67.248.153:8000/",
    baseURL: "http://25.40.173.182:5000/",
    withCredentials: true
});

export const getCasesAPI = (): Promise<Array<CaseI>> => instance.get(`cases`).then(res => res.data);
export const getCaseContentAPI = (caseid: string): Promise<CaseContentStateI>  => instance.get(`cases/${caseid}`).then(res => res.data);
export const authAPI = {
    login: (username: string, password: string): Promise<StatusI> => instance.post(`auth/login`, { username, password }).then(res => res.data),
    amLogged: (): Promise<StatusI> => instance.get(`auth/amlogged`).then(res => res.data),
    getUsername: (): Promise<GetUsernameStatusI> => instance.get(`profile/username`).then(res => res.data)
};