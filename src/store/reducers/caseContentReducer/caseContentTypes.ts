import { Action } from "redux";

export interface CaseContentStateI {
    id: number | undefined
    name: string 
    avatar: string
    price: number | undefined
    items: Array<CaseContentItemI>
}

export interface setCaseContentActionI extends Action<string> {
    caseContent: CaseContentStateI
}

export interface CaseContentItemI {
    id: number
    name: string
    price: number
    quality: number
    avatar: string
}