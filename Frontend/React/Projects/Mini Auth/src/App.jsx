// import { useState,useContext } from 'react'

import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Profile from './components/Profile.jsx';


import './App.css';


function App() {

  //  export const UserContext = createContext();

  //  const {user,setUser} = useContext(UserContext);
   
   return (
        <>
          <Navbar/>
          <Dashboard/>
          <Profile/>
        </>  
       
   )


}

export default App;
