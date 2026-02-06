import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="card">
  <h2>Profile</h2>
  {user ? (
    <p className="success">User Name: {user.name}</p>
  ) : (
    <p className="error">Please login first</p>
  )}
</div>

  );
}

export default Profile;
