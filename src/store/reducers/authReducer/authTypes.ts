import { Action } from 'redux';

export interface SetLoggedActionI extends Action<string> {
    logged: boolean
}

export interface SetUsernameActionI extends Action<string> {
    username: string
}

export type AuthActionI = SetLoggedActionI | SetUsernameActionI;
