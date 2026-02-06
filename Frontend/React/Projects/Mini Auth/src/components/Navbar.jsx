import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const login = () => {
    setUser({ name: "Aman" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar" style={{ padding: "10px", borderBottom: "1px solid black" }}>
      {user ? (
        <>
          <span>Hello, {user.name}</span>
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
}

export default Navbar;
