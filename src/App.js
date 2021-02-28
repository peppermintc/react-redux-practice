import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, signOut } from './actions/index';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(decrement(3))}>-</button>
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
      <button onClick={() => dispatch(signIn())}>Log in</button>
      <button onClick={() => dispatch(signOut())}>Log out</button>
    </div>
  );
}

export default App;
