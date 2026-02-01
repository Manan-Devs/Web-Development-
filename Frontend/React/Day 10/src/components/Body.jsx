


import Counter from "./Counter";



function Body({count,setCount}) {
    return (
     <>
         <h1>I am the Blinkit Body</h1>
         <Counter count={count} setCount={setCount}/>

   </>
    )
}


export default Body;