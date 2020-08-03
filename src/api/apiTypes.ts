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