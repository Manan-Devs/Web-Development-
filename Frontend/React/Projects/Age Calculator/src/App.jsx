import "./App.css"

function App() {
  return (
    <div className="ageCalculatorContainer">
        <div className="data">
           <div className="inputs">
              <div className="day">
                 <h2>Day</h2>
                 <input type="number" />
              </div>
             <div className="month">
                <h2>Month</h2>
                <input type="number" />
              </div>
             <div className="year">
                <h2>Year</h2>
                <input type="number" />
              </div>
           </div>
           <div className="space">
             
           </div>
        </div>

        <div className="age">
            
        </div>
    </div>
  )
}

export default App;