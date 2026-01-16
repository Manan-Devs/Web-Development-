







function TodayStatus({ energy, note, setNote }) {
  let message = "";

  if (energy === "High") message = "You're full of energy today 🚀";
  if (energy === "Medium") message = "Steady and focused 👍";
  if (energy === "Low") message = "Take it easy today 🌱";

  return (
    <div className="status-box">
      <h3>Today’s Status</h3>

      {energy ? (
        <>
          <p><strong>Energy:</strong> {energy}</p>
          <p>{message}</p>

          <textarea
            placeholder="Add a short note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          {note && (
            <p><strong>Your Note:</strong> {note}</p>
          )}
        </>
      ) : (
        <p>Please select your energy level 👆</p>
      )}
    </div>
  );
}

export default TodayStatus;
