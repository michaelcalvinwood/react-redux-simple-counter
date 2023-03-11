import logo from './logo.svg';
import './App.css';
import { increment, decrement } from './store/sliceValue';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const test = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const plus = () => dispatch(increment({}));
  const minus = () => dispatch(decrement({}));

  console.log('valueSlice', test);

  useEffect(() => {
    // dispatch any initial values you want here  
  }, [])

  return (
      <div className="App">
        <div onClick={plus} style={{display: 'inline-block', marginRight: '.5rem', border: '1px solid blue', padding: '.25rem .5rem', cursor: 'pointer', borderRadius: '4px'}}>+</div>
        <div style={{display: 'inline-block'}}>{test}</div>
        <div onClick={minus} style={{display: 'inline-block', marginLeft: '.5rem', border: '1px solid blue', padding: '.25rem .5rem', cursor: 'pointer', borderRadius: '4px'}}>-</div>
      </div>
  );
}

export default App;
