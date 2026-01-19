import { useAuth } from "../hooks/useAuth";
import LoggedInLayout from "./LoggedInLayout"
import dashboardImage  from "../assets/dashboard_image.png"
import styles from "../styles/Dashboard.module.css"
import NextAppointmentComponent from "./NextAppointmentComponent";

// Only accessible to users with the "User" role
function PatientDashboard() {
  const {
    authState: { user },
  } = useAuth();

  return (
    <LoggedInLayout pageName={`Dashboard`} firstName={user.firstName} lastName={user.lastName}>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageText}>
          <h1>Healthcare you can trust.</h1>
          <h1>Get in contact today!</h1>
          </div>
          <img src={dashboardImage} alt="Dashboard Image" />
        </div>
        <div className={styles.mainContent}>
          <NextAppointmentComponent/>
          <div className={styles.previousAppointmentContainer}>

          </div>
        </div>
      </div>
    </LoggedInLayout>
  );
}

export default PatientDashboard;