import { Action } from 'redux';

export interface AppStateI {
    inited: boolean
}

export interface InitAppActionI extends Action<string> {
}