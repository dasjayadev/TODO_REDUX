// import React from 'react';
// import { useSelector } from 'react-redux';

// function Print() {
//     const todoState = useSelector((state) => state.todo);
//     const todo = todoState ? todoState.todo : []; // Fallback to an empty array if todoState is undefined

//     return (
//         <>
//             {todo.map((item) => {
//                 return <h4 key={item.id}>{item.msg}</h4>;
//             })}
//         </>
//     );
// }

// export default Print;

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTextHandler } from '../redux/Action/todoAction';

function Print() {
  const {todo} = useSelector((reducer)=>reducer)
  let dispatch = useDispatch();


  function deleteHandler(id){
    dispatch (deleteTextHandler(id))
  }
  return (
    <>
      {todo.length > 0 && todo.map((item)=>{
        return <>
        <h4>{item.msg}</h4>
        <button onClick={()=>deleteHandler(item.id)}>X</button>
        </>
       
      })}
    </>
  )
}

export default Print
