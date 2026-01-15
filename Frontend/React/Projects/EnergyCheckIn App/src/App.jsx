// import { useState } from 'react';
import './App.css';
import Header from './header.jsx';
import EnergySelector from './energySelector.jsx';
import NoteInput from './noteInput.jsx'
import TodayStatus from  './todayStatus.jsx';
function App () {
  return (
    <div className='app'>
     <Header/>
     <EnergySelector/>
     <NoteInput/>
     <TodayStatus/>
   </div>
  )
   
     
}

export default App;
