import { HeaderItemI } from "../headerReducer/headerTypes";

export interface ProfileInfoI {
    success: boolean
    username?: string
    balance?: number
    myProfile?: boolean
}

export interface DropItemI extends HeaderItemI {
    sold: boolean
}

export interface SellItemResponse {
    success: boolean
    error?: string
    price?: number
}

export interface SortItemsFormFiltersI {
    rarity: number
    caseId: number
    notSold: boolean
}