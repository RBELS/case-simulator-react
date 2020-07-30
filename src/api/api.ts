import { CaseContentStateI } from './../store/types/types';
import Axios from "axios";
import { CaseI } from "../store/types/types";

const instance = Axios.create({
    // baseURL: "http://25.67.248.153:8000/",
    baseURL: "http://25.40.173.182:5000/",
    withCredentials: true
});

export const getCasesAPI = (): Promise<Array<CaseI>> => instance.get(`cases`).then(res => res.data);
export const getCaseContentAPI = (caseid: string): Promise<CaseContentStateI>  => instance.get(`cases/${caseid}`).then(res => res.data);