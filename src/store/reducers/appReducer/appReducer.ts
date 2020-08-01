import { AnyAction } from 'redux';
import { AppStateI } from './appTypes';
import { INIT_APP } from './appActions';

const initialState: AppStateI = {
    inited: false
}

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

export default appReducer;
