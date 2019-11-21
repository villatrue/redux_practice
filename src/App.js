import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './redux/actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter{counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {isLogged? <h3>Info you can only see logged in</h3> : <h3>Log in to see this</h3>}
    </div>
  );
}

export default App;
