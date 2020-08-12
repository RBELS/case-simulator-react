import { AnyAction } from 'redux';
import { INIT_APP } from './appActions';

const initialState = {
    inited: false
}

export type AppStateI = typeof initialState;

const appReducer = (state = initialState, action: AnyAction): AppStateI => {
    switch(action.type) {
        case INIT_APP:
            return {
                ...state,
                inited: true
            }
        default:
            return state;
    }
}

export default appReducer