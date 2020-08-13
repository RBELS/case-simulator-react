
export interface CaseContentResponse {
    id: number | undefined
    name: string 
    avatar: string
    price: number | undefined
    items: Array<CaseContentItemI>
    error?: string
}

export interface CaseContentItemI {
    id: number
    name: string
    price: number
    quality: number
    avatar: string
}

export interface OpenCaseResponse {
    item: CurrentDropItemI
    success: boolean
    error?: string | null
}

export interface CurrentDropItemI extends CaseContentItemI {
    rowid: number
    sold: boolean
}