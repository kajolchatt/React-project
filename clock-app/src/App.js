import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AppName from './components/AppName';
import AppPara from './components/AppPara';
import AppDateDetail from './components/AppDateDetail';
function App() {

  return (
    <center>
      <AppName />
      <AppPara />
      <AppDateDetail />
    </center>
  );
}

export default App;
