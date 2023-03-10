import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
     <div style={{display: 'inline-block', marginRight: '.5rem', border: '1px solid blue', padding: '.25rem .5rem', cursor: 'pointer', borderRadius: '4px'}}>+</div>
     <div style={{display: 'inline-block'}}>0</div>
     <div style={{display: 'inline-block', marginLeft: '.5rem', border: '1px solid blue', padding: '.25rem .5rem', cursor: 'pointer', borderRadius: '4px'}}>-</div>
    </div>
  );
}

export default App;
