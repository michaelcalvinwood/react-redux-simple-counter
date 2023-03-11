import logo from './logo.svg';
import './App.css';
import { increment, decrement } from './store/sliceValue';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(increment({}));
  }, [])

  return (
      <div className="App">
        <div style={{display: 'inline-block', marginRight: '.5rem', border: '1px solid blue', padding: '.25rem .5rem', cursor: 'pointer', borderRadius: '4px'}}>+</div>
        <div style={{display: 'inline-block'}}>{value}</div>
        <div style={{display: 'inline-block', marginLeft: '.5rem', border: '1px solid blue', padding: '.25rem .5rem', cursor: 'pointer', borderRadius: '4px'}}>-</div>
      </div>
  );
}

export default App;
