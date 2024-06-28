import { ADD_TEXT, DELETE_TEXT, SEARCH_TEXT, SET_TEXT } from "./constant";


export function setTextHandler(value){
    console.log(value);
    return {type:SET_TEXT,payload:value}
}
export function submitTextHandler(){
    return{type:ADD_TEXT}
}
export function deleteTextHandler(id){
    return {type:DELETE_TEXT,payload:id}
}
export function searchingTextHandler(value){
    return {type:SEARCH_TEXT,payload:value}
}