export interface StatusI {
    success: boolean
    error?: string
}

export interface AddBalanceStatusI extends StatusI {
    addNumber?: number
}

export interface GetUsernameStatusI {
    error?: string
    username: string
}

export interface UsernameValidateStatusI {
    success: boolean
    exists: boolean
}