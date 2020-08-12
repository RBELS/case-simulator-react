import { HeaderItemI } from "../store/reducers/headerReducer/headerTypes";

export interface StatusI {
    success: boolean
}

export interface GetUsernameStatusI {
    error?: string
    username?: string
}

export interface UsernameValidateStatusI {
    success: boolean
    exists: boolean
}

//no reducer yet

//no reducer yet