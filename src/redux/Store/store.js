import { combineReducers, legacy_createStore } from "redux";
import todoReducer from "../Reducer/todoReducer";


// const rootReducer = combineReducers({todo:todoReducer})


export const  store = legacy_createStore(todoReducer)