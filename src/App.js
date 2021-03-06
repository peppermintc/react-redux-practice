import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, signOut } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>

      <button onClick={() => dispatch(signIn())}>Sign In</button>
      <button onClick={() => dispatch(signOut())}>Sign Out</button>
      {isLogged && <h3>Valuable information I shouldn't see</h3>}
    </div>
  );
}

export default App;
