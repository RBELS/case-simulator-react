import { CaseContentItemI } from "../caseContentReducer/caseContentTypes";

export interface HeaderItemI extends CaseContentItemI {
    user: string
    caseid: number
    caseavatar: string
    rowid: number
}