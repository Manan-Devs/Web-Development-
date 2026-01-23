import "./App.css";
import { useState} from "react";





function App() {

   const [years,months,days] = useState();
    

   
  return (
    <div className="ageCalculatorContainer">
      <div className="data">
           <div className="inputs">
              <div className="day">
                 <h3>Day</h3>
                 <input value={days} placeholder="DD" type="number" />
              </div>
             <div className="month">
                <h3>Month</h3>
                <input value={months} placeholder="MM" type="number" />
              </div>
             <div className="year">
                <h3>Year</h3>
                <input value = {years}placeholder="YYY" type="number" />
              </div>
           </div>
           <div className="space">
              <hr />
             <img src="C:\Users\manan\OneDrive\Desktop\Web Development\Frontend\React\Projects\Age Calculator\src\assets\images\icon-arrow.svg" alt="" />
           </div>
           
        </div>

        <div className="age">
            <h1><span>--</span>&nbsp;Years</h1>
            <h1><span>--</span>&nbsp;Months</h1>
            <h1><span>--</span>&nbsp;Days</h1>
        </div>
    </div>
  )
}

export default App;