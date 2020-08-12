import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";
import mainContentReducer from "./reducers/mainContentReducer/mainContentReducer";
import caseContentReducer from "./reducers/caseContentReducer/caseContentReducer";
import authReducer from "./reducers/authReducer/authReducer";
import appReducer from "./reducers/appReducer/appReducer";
import headerReducer from "./reducers/headerReducer/headerReducer";
import profileReducer from "./reducers/profileReducer/profileReducer";

const reducers = combineReducers({
    form: formReducer,
    main: mainContentReducer,
    caseContent: caseContentReducer,
    auth: authReducer,
    app: appReducer,
    header: headerReducer,
    profile: profileReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type RootState = ReturnType<typeof reducers>
export default store;
