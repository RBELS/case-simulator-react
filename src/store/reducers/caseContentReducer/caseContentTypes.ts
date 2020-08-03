import { Action } from "redux";

export interface CaseContentStateI {
    id: number | undefined
    name: string 
    avatar: string
    price: number | undefined
    items: Array<CaseContentItemI>
    loading: boolean
}

export interface setCaseContentActionI extends Action<string> {
    caseContent: CaseContentStateI
}

export interface setLoadingActionI extends Action<string> {
    loading: boolean
}

export interface CaseContentItemI {
    id: number
    name: string
    price: number
    quality: number
    avatar: string
}