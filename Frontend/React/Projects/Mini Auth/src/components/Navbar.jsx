// import {useState} from "react";


function Navbar () {

    // const [user,setUser] = useStatae(null);
    return (
       
     <>    
      <nav>
        <div className="navbar-left">
              <h1>React Context Playground</h1>
        </div>
         <div className="navbar-right">
              <h2>Hello , Guest!</h2>
              <button className="LogIn">Login</button>
              <button className="LogOut">Logout</button>
         </div>
              
     </nav>
         </>
    )
}





export default Navbar;