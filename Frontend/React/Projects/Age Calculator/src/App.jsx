import "./App.css";
import { useState } from "react";

function App() {
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [days, setDays] = useState("");
  const [ageYears, setAgeYears] = useState("--");
  const [ageMonths, setAgeMonths] = useState("--");
  const [ageDays, setAgeDays] = useState("--");
  const [error, setError] = useState("");

  function ageCalculator() {
    setError("");
    
    if (!years || !months || !days) {
      setError("Please fill in all fields");
      return;
    }

    const day = parseInt(days);
    const month = parseInt(months);
    const year = parseInt(years);

    if (day < 1 || day > 31 || month < 1 || month > 12) {
      setError("Please enter valid day (1-31) and month (1-12)");
      return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (birthDate > today) {
      setError("Birth date cannot be in the future");
      return;
    }

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
        {error && <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>{error}</p>}
        <div className="space">
          <hr />
          <button onClick={ageCalculator}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
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