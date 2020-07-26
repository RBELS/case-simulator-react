// import { CaseContentStateI } from './types';
// import { SET_CASES } from "../reducers/mainContentReducer";

export interface setCasesActionI {
    type: string,
    cases: Array<CaseI>
}

export interface setCaseContentActionI {
    type: string
    caseContent: CaseContentStateI
}

export interface CaseI {
    _id: string,
    id: number,
    name: string,
    avatar: string,
    price: number
}

export interface CasesStateI {
    cases: Array<CaseI>
}

export interface CaseContentStateI {
    id: number | undefined
    name: string | undefined
    avatar: string
    price: number | undefined
    items: Array<CaseContentItemI>
}

export interface CaseContentItemI {
    id: number
    name: string
    price: number
    quality: number
    avatar: string
}