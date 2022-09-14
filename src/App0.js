import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';


function App() {
  const [counter,setCounter]=useState(0)
  const [isHappy,setIsHappy] = useState('😒')
  const nev="Gyula"
  const szovegSzin={color:"red"}

  const handleMinus=() => {
    if(counter>0)
      setCounter(counter-1)
    else
      setCounter(0)
  }
const handleHappy=() => {
  console.log(isHappy)
  isHappy=='😍'? setIsHappy('😒') : setIsHappy('😍')
}
  return (
    <div className="App">
      <h1>Első React Projekt</h1>
      <h4 style={szovegSzin}>Üdv {nev} !</h4>
      <div style={counter<10? piros : zold}>Számláló:{counter}</div>
    <button className='btn btn-primary m-2' onClick={()=>setCounter(counter+1)}>+</button>
    <button variant="danger" onClick={handleMinus}>-</button>
    {/*<p>{counter>10 ? '😍' : '😒'}</p>*/}
    <button onClick={handleHappy}>kapcsoló</button>
    <div className='happy'>{isHappy}</div>
    </div>
  );
}

export default App;
