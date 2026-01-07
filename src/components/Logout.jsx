import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import { initialAuthState } from "../context/AuthContext";

// Clears the server session and resets client-side auth state
const Logout = () => {
  const { setAuthState } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8080/auth/logout",
        {},
        {
          // withCredentials: true ensures the auth cookie is sent with the request
          withCredentials: true,
        }
      );

      // Clear client-side auth state before redirecting
      // This prevents stale state issues on subsequent logins
      setAuthState(initialAuthState);

      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
