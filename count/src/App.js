import './App.css'
import React, {useEffect,useState} from 'react'

function App() {
  const[initval,setInitval]=useState('');
  const[count,setCount]=useState(parseInt({initval}));
  const[bgcol,setBgcol]=useState('');
  const[txtcol,setTxtcol]=useState('black');

  const handleChange = (e) => {
    setInitval(e.target.value);
    setCount(e.target.value);
  }

  const handleInc =() => {
    setCount(parseInt(count)+1);
  }

  const handleDec =() => {
    setCount(parseInt(count)-1);
  }
  useEffect(() => {
    if (count % 10 === 0 ) {
      setBgcol('green');
      setTxtcol('');
    } 
    return () =>{
      setBgcol("");
      setTxtcol("black");
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Number Game</h1>
      <div className='lab'>
      <label>Initial value:</label>
      <input type='text' id='num' className='txt' value={initval} onChange={handleChange}/>
      </div>
      <button className='butt' onClick={handleDec}>-</button>
      <button className='butt' onClick={handleInc}>+</button>
      <h3 className='cnt'>Count:
      <span style={{ backgroundColor: bgcol, color: txtcol}}>
      {!isNaN(count) ? count : ''}</span></h3>
    </div>
  );
}

export default App;
