import { SET_LOGGED, SET_USERNAME } from "./authActions";
import { AnyAction } from "redux";

const initialState = {
    logged: false,
    notResponding: false,
    username: "Pending..."
}

export type AuthStateI = typeof initialState;

//No typescript in action here
const authReducer = (state = initialState, action: AnyAction): AuthStateI=> {
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
