import { Action } from 'redux';

export interface SetCasesActionI extends Action<string>{
    type: string,
    cases: Array<CaseI>
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
