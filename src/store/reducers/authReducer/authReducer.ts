import { SET_LOGGED, SET_USERNAME, AuthActionsType } from "./authActions";

const initialState = {
    logged: false,
    notResponding: false,
    username: "Pending..."
}

export type AuthStateI = typeof initialState;

const authReducer = (state = initialState, action: AuthActionsType): AuthStateI=> {
    switch(action.type) {
        case SET_LOGGED:
            return {
                ...state,
                logged: action.logged
            }
        case SET_USERNAME:
            return {
                ...state,
                username: action.username
            }
        default:
            return state;
    }
}

export default authReducer;
