import React from 'react'
import Todo from './component/Todo'
import { Provider } from 'react-redux'
import { store } from './redux/Store/store'



function App() {
  return (
    <>
    <Provider store={store} >
      <Todo/>
    </Provider>
    </>
  )
}

export default App