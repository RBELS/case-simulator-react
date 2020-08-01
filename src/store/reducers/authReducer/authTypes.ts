import { Action } from 'redux';

export interface AuthStateI {
    logged: boolean
    notResponding: boolean
    username: string
}

export interface SetLoggedActionI extends Action<string> {
    logged: boolean
}

export interface SetUsernameActionI extends Action<string> {
    username: string
}

export type AuthActionI = SetLoggedActionI | SetUsernameActionI;
