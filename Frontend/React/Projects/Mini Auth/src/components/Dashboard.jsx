import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
     <div className="card">
  <h2>Dashboard</h2>
  {user ? (
    <p className="success">Welcome to your dashboard</p>
  ) : (
    <p className="error">Access denied ❌</p>
  )}
</div>

  );
}

export default Dashboard;
