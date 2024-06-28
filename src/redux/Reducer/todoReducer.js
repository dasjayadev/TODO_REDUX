import { ADD_TEXT, DELETE_TEXT, SET_TEXT,SEARCH_TEXT } from "../Action/constant"

let initalState = {
    text: "",
    todo: [],
    searchText: ""
}

function todoReducer(state=initalState,action) {
 if(action.type == SET_TEXT){
    return {...state,text:action.payload}
 }
 else if(action.type == ADD_TEXT){
    let obj = {
        id : new Date().getMilliseconds(),
        msg : state.text
    }
    return {...state,todo:[...state.todo,obj],text:""}
 }
 else if(action.type == DELETE_TEXT){
   return {...state,todo:state.todo.filter(item => item.id != action.payload)}
 }
 else if(action.type == SEARCH_TEXT){
   return {...state,searchText:action.payload}
 }
 else{
    return state
 }
}

export default todoReducer