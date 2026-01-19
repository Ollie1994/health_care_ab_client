import { useAuth } from "../hooks/useAuth";
import LoggedInLayout from "./LoggedInLayout"
import dashboardImage  from "../assets/dashboard_image.png"
import styles from "../styles/Dashboard.module.css"

// Only accessible to users with the "User" role
function PatientDashboard() {
  const {
    authState: { user },
  } = useAuth();

  return (
    <LoggedInLayout pageName={`Dashboard`} firstName={user.firstName} lastName={user.lastName}>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          {<img src={dashboardImage} alt="Dashboard Image" />}
        </div>
      </div>
    </LoggedInLayout>
  );
}

export default PatientDashboard;