import { SET_CASES } from "../reducers/mainContentReducer";

export interface setCasesActionI {
    type: typeof SET_CASES,
    cases: Array<CaseI>
}

export interface CaseI {
    pk: string,
    id: number,
    name: string,
    avatar: string,
    price: number
}

export interface CasesStateI {
    cases: Array<CaseI>
}