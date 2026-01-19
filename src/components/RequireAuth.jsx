import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import axios from "axios";

// Protected route component that verifies authentication and role-based access
// Wrap any route that requires authentication with this component
// Usage: <RequireAuth allowedRoles={["Admin"]}><YourComponent /></RequireAuth>
function RequireAuth({ children, allowedRoles }) {
  const { authState, setAuthState } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:8080/auth/check", {
          // withCredentials: true is required for sending cookies with cross-origin requests
          // This ensures the HTTP-only auth cookie is included in the request
          withCredentials: true,
        });
        setAuthState({
          isAuthenticated: true,
          user: {
            username: response.data.username,
            email: response.data.email,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            socialSecurityNumber: response.data.socialSecurityNumber,
          },
          roles: response.data.roles, // can keep separately if you want quick access
        });
      } catch (error) {
        setAuthState({
          isAuthenticated: false,
          user: null,
          roles: [],
        });
      } finally {
        setLoading(false);
      }
    };

    if (!authState.isAuthenticated) {
      checkAuth();
    } else {
      setLoading(false);
    }
  }, [authState.isAuthenticated, setAuthState]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authState.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check if user has at least one of the allowed roles
  if (
    allowedRoles &&
    !allowedRoles.some((role) => authState.roles.includes(role))
  ) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default RequireAuth;
