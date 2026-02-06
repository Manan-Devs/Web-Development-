import { useState } from "react";
import { UserContext } from "./context/UserContext";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app-container">
        <Navbar />
        <Profile />
        <Dashboard />
      </div>
    </UserContext.Provider>
  );
}


export default App;
