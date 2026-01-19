import { useAuth } from "../hooks/useAuth";
import LoggedInLayout from "./LoggedInLayout"
import Logo from "../assets/health_care_logo.svg";
import Logout from "./Logout";

// Only accessible to users with the "User" role
function PatientDashboard() {
  const {
    authState: { user },
  } = useAuth();

  return (
    <LoggedInLayout pageName={`Dashboard`} firstName={user.firstName} lastName={user.lastName}>
      <h1>Welcome, {user.username}!</h1>
    </LoggedInLayout>
  );
}

export default PatientDashboard;