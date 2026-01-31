import {useState} from "react";



function Counter() {
      const [count,setCount] = useState(0);


      return (
         <> 
           <h1>Counter is : {count}</h1>
           <button onClick={() => setCount(count=> count+1)}>Increment</button>
           <button onClick={() => setCount(count=> count-1)}>Decrement</button>
         </>
      )
}


export default Counter;