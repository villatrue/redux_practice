import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './redux/actions'
import HomeContainer from './containers/HomeContainer'
import { Input } from '@material-ui/core';
import InputContainer from './containers/InputContainer';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <InputContainer/>
      <HomeContainer/>
      <h1>Counter{counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement(5))}>-</button>
      {isLogged? <h3>Info you can only see logged in</h3> : <h3>Log in to see this</h3>}
    </div>
  );
}

export default App;
