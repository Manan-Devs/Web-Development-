import {useState,createContext } from 'react'
import Header from './components/Header.jsx';
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";


export const CounterContext = createContext();

function App() {

   const [count,setCount] = useState(0);
 
  return (
    <>
      <CounterContext value={{count,setCount}}>
      <Header/>
      <Body/>
      <Footer/>
     </CounterContext>
   
   </>

  )
}

export default App;
