import "./App.css";
import { useState } from "react";

function App() {
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [days, setDays] = useState("");
  const [ageYears, setAgeYears] = useState("--");
  const [ageMonths, setAgeMonths] = useState("--");
  const [ageDays, setAgeDays] = useState("--");

  function ageCalculator() {
    const today = new Date();
    const birthDate = new Date(years, months - 1, days);
    
    let calcYears = today.getFullYear() - birthDate.getFullYear();
    let calcMonths = today.getMonth() - birthDate.getMonth();
    let calcDays = today.getDate() - birthDate.getDate();

    if (calcDays < 0) {
      calcMonths--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      calcDays += prevMonth.getDate();
    }

    if (calcMonths < 0) {
      calcYears--;
      calcMonths += 12;
    }

    setAgeYears(calcYears);
    setAgeMonths(calcMonths);
    setAgeDays(calcDays);
  }

  return (
    <div className="ageCalculatorContainer">
      <div className="data">
        <div className="inputs">
          <div className="day">
            <h3>Day</h3>
            <input value={days} onChange={(e) => setDays(e.target.value)} placeholder="DD" type="number" />
          </div>
          <div className="month">
            <h3>Month</h3>
            <input value={months} onChange={(e) => setMonths(e.target.value)} placeholder="MM" type="number" />
          </div>
          <div className="year">
            <h3>Year</h3>
            <input value={years} onChange={(e) => setYears(e.target.value)} placeholder="YYYY" type="number" />
          </div>
        </div>
        <div className="space">
          <hr />
          <button onClick={ageCalculator}>
            <img src="" alt="" />
          </button>
        </div>
      </div>

      <div className="age">
        <h1><span>{ageYears}</span>&nbsp;Years</h1>
        <h1><span>{ageMonths}</span>&nbsp;Months</h1>
        <h1><span>{ageDays}</span>&nbsp;Days</h1>
      </div>
    </div>
  );
}

export default App;