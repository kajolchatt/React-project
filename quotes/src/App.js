import { useState } from 'react';
import './App.css';
import { quotedata } from './components/quotedata';

function App() {

  const [data,setData]=useState();
  const[index,setIndex]=useState(0);
  const handleClick=()=>{
    let quote=quotedata[index];
    setIndex(index!=quotedata.length-1?index+1%quotedata.length:0)
    setData(quote);
  }
  return (
    <center>
      <h1>Quote Generator</h1>
      <button onClick={handleClick}>Press Me To Genrerate Quotes</button>
      <p>{data}</p>
    </center>
  );
}

export default App;
