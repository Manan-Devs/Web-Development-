



function EnergySelector({ energy, setEnergy }) {
  return (
    <div className="energy-box">
      <p>How is your energy today?</p>

      <div className="buttons">
        <button
          className={energy === "Low" ? "active" : ""}
          onClick={() => setEnergy("Low")}
        >
          😴 Low
        </button>

        <button
          className={energy === "Medium" ? "active" : ""}
          onClick={() => setEnergy("Medium")}
        >
          🙂 Medium
        </button>

        <button
          className={energy === "High" ? "active" : ""}
          onClick={() => setEnergy("High")}
        >
          ⚡ High
        </button>
      </div>
    </div>
  );
}

export default EnergySelector;
