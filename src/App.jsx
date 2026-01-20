import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import PatientDashboard from "./components/PatientDashboard";
import CaregiverDashboard from "./components/CaregiverDashboard";
import ProfilePage from "./components/ProfilePage"
import Unauthorized from "./components/Unauthorized";
import Home from "./components/Home";
import RequireAuth from "./components/RequireAuth";
import GlobalStyle from "./styles/GlobalStyle";
import Register from "./components/Register";
import Booking from "./components/Booking";
import AnonPage from "./components/AnonPage";

// AuthProvider must wrap Router to ensure auth state is available to all routes
function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <div className="content">
        <Router>
          <Routes>
            {/* Public routes - accessible without authentication */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/anonymized" element={<AnonPage />} />

             {/* Protected routes - require authentication and specific roles */}
            <Route path="/booking" 
            element={
            <RequireAuth allowedRoles={["PATIENT"]}>
              <Booking />
            </RequireAuth>
            } />

            <Route
              path="/patient/dashboard"
              element={
                <RequireAuth allowedRoles={["PATIENT"]}>
                  <PatientDashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/caregiver/dashboard"
              element={
                <RequireAuth allowedRoles={["CAREGIVER"]}>
                  <CaregiverDashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth allowedRoles={["PATIENT", "CAREGIVER"]}>
                  <ProfilePage />
                </RequireAuth>
              }
            />

            {/* Fallback route - redirects unknown paths to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
