import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { setTextHandler, submitTextHandler } from "../redux/Action/todoAction";
import Print from "./Print";

function Todo() {
  let { text,todo } = useSelector((reducer) => reducer);
  // console.log(todo);
  let dispatch = useDispatch();
  //for change handler
  function changehandler(e) {
    dispatch(setTextHandler(e.target.value));
  }

  //for submit btn
  function submitHandler() {
    // console.log("object");
    dispatch(submitTextHandler());
  }
  //delete handler
  // function deleteHandler(id){
  //   dispatch (deleteTextHandler(id))
  // }
  return (
    <>
      <Search />
      <Filter />
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="enter your text"
        value={text}
        onChange={changehandler}
      />
      <button onClick={submitHandler}>ADD</button>
      
      <div>
        <h2>Number of Todo Items: {todo.length}</h2>
      </div>
      <Print />
    </>
  );
}

export default Todo;
