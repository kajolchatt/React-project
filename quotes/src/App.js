import { useState } from 'react';
import './App.css';
import { quotedata } from './components/quotedata';

function App() {

  const [data,setData]=useState(quotedata[0]);
  let index=0
  const handleClick=()=>{
    let quote=quotedata[index];
    index=(index+1)%quotedata.length;
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
