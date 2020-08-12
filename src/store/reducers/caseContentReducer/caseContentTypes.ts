import { Action } from "redux";

// export interface CaseContentStateI {
//     id: number | undefined
//     name: string 
//     avatar: string
//     price: number | undefined
//     items: Array<CaseContentItemI>
//     loading: boolean
//     opening: boolean
//     showDrop: boolean
//     resultItem: CurrentDropItemI
//     exists: boolean
//     openError: string
// }

export interface CaseContentResponse {
    id: number | undefined
    name: string 
    avatar: string
    price: number | undefined
    items: Array<CaseContentItemI>
    error?: string
}

export interface setShowDropActionI extends Action<string> {
    showDrop: boolean
}

export interface setCaseContentActionI extends Action<string> {
    caseContent: CaseContentResponse
}

export interface setLoadingActionI extends Action<string> {
    loading: boolean
}

export interface setOpeningAction extends Action<string> {
    opening: boolean
}

export interface setResultItemAction extends Action<string> {
    resultItem: CurrentDropItemI
}

export interface SetExistsActionI extends Action<string> {
    value: boolean
}

export interface CaseContentItemI {
    id: number
    name: string
    price: number
    quality: number
    avatar: string
}

export interface OpenCaseResponse {
    item?: CurrentDropItemI
    success: boolean
    error?: string
}

export interface SetOpenErrorActionI extends Action<string> {
    value: string | null
}

export interface CurrentDropItemI extends CaseContentItemI {
    rowid: number
    sold: false
}

export interface SetDropItemSoldActionI extends Action<string> {
    value: boolean
}