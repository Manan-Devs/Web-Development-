import { useState } from "react";
import Header from "./header.jsx";
import EnergySelector from "./energySelector.jsx";
import TodayStatus from "./todayStatus.jsx";
import "./App.css";

function App() {
  const [energy, setEnergy] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className="app">
      <Header />

      <EnergySelector energy={energy} setEnergy={setEnergy} />

      <TodayStatus
        energy={energy}
        note={note}
        setNote={setNote}
      />
    </div>
  );
}

export default App;
