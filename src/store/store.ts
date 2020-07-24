import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
    form: formReducer
});//add reducers here

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;