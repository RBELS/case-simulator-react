import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";
import mainContentReducer from "./reducers/mainContentReducer";

const reducers = combineReducers({
    form: formReducer,
    main: mainContentReducer
});//add reducers here

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type RootState = ReturnType<typeof reducers>
export default store;