import {useState,createContext } from 'react'
import Header from './components/Header.jsx';
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";

export const CounterContext = createContext();

export const ProductContext = createContext(); 

function App() {

  //  const [count,setCount] = useState(0);

   const [cartItem , setCartItem] = useState(0);
 
  return (
    <>
      {/* <CounterContext value={{count,setCount}}> */}
      <ProductContext value={{cartItem,setCartItem}}>
      <Header/>
      <Body/>
      <Cart/>
      <Footer/> 
    </ProductContext>
     {/* </CounterContext> */}
   
   </>

  )
}

export default App;
