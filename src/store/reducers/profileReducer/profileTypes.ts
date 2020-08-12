import { Action } from 'redux';
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

export interface SetProfileInfoActionI extends Action<string> {
    payload: {
        username: string
        balance: number
        myProfile: boolean
    }
}

export interface SetExistsActionI extends Action<string> {
    value: boolean
}

export interface DropsActionI extends Action<string> {
    drops: Array<DropItemI>
}

export interface SetItemSoldActionI extends Action<string> {
    rowid: number
}

export interface SellItemResponse {
    success: boolean
    error?: string
    price?: number
}

export interface AddMoneyActionI extends Action<string> {
    value: number
}

export interface SetLoadingDropsActionI extends Action<string> {
    value: boolean
}

export interface SetNoMoreDropsActionI extends Action<string> {
    value: boolean
}

export interface SetPageActionI extends Action<string> {
    value: number
}