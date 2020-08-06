import { RouteComponentProps } from "react-router-dom";
import { CaseContentItemI } from "../../store/reducers/caseContentReducer/caseContentTypes";

export interface CaseContentPropsI extends RouteComponentProps {
    match: {
        params: CaseContentParamsI
        isExact: boolean
        path: string
        url: string
    },
    loading: boolean
    name: string
    avatar: string
    price: number
    items: Array<CaseContentItemI>
    opening: boolean
    showDrop: boolean
    resultItem: CaseContentItemI
    setCaseContent: (caseid: string) => void
    openCase: (caseid: string) => void
    stopOpenCase: () => void
    showDropA: (show?: boolean) => void
}

export interface CaseContentParamsI {
    caseid: string
}