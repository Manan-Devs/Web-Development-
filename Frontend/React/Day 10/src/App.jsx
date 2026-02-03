import { useState, createContext } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext(null);


function App() {
  const [cartItem, setCartItem] = useState(0);

  return (
    <ProductContext.Provider value={{ cartItem, setCartItem }}>
      <Header />
      <Body />
      <Footer />
    </ProductContext.Provider>
  );
}

export default App;
