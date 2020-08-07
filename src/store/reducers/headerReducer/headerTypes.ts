import { Action } from 'redux';
import { CaseContentItemI } from "../caseContentReducer/caseContentTypes";

export interface HeaderStateI {
    headerItems: Array<HeaderItemI>
    lastRowId: number
}

export interface HeaderItemI extends CaseContentItemI {
    user: string
    caseid: number
    caseavatar: string
    rowid: number
}

export interface HeaderItemsActionI extends Action<string> {
    items: Array<HeaderItemI>
}

export interface SetLastRowIdActionI extends Action<string> {
    id: number
}