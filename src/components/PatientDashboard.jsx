import { useAuth } from "../hooks/useAuth";
import LoggedInLayout from "./LoggedInLayout";
import dashboardImage from "../assets/dashboard_image.png";
import styles from "../styles/Dashboard.module.css";
import NextAppointmentComponent from "./NextAppointmentComponent";
import SecondaryButton from "./SecondaryButton";
import ChevronRight from "../assets/chevronRight";
import buttonStyles from "../styles/SecondaryButton.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import HistoryInfoContainer from "./HistoryInfoContainer";

// Only accessible to users with the "User" role
function PatientDashboard() {
  const {
    authState: { user },
  } = useAuth();

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/booking/history",
          { withCredentials: true },
        );
        setHistory(response.data);
      } catch (error) {
        console.error("Failed to fetch history:", error.response || error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <LoggedInLayout
      pageName={`Dashboard`}
      firstName={user.firstName}
      lastName={user.lastName}
    >
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageText}>
            <h1>Healthcare you can trust.</h1>
            <h1>Get in contact today!</h1>
          </div>
          <img src={dashboardImage} alt="Dashboard Image" />
        </div>
        <div className={styles.mainContent}>
          <NextAppointmentComponent />
          <div className={styles.rightContainer}>
            <div className={styles.topRight}>
              <h3>Previous appointments</h3>
              <SecondaryButton
                icon={ChevronRight}
                className={buttonStyles.noBorderButton}
              >
                <h4 className={styles.viewAllText}>View All</h4>
              </SecondaryButton>
            </div>
            <div className={styles.bottomRight}>
              {history.length > 0 ? (
                <div className={styles.horizontalFlex}>
                  {history.slice(0, 2).map((item) => (
                    <div className={styles.historyContainer}>
                      <HistoryInfoContainer
                        key={item.bookingId}
                        fullName={item.fullName}
                        date={item.startDateTime}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.horizontalFlex}>
                  <h4>None yet!</h4>
                </div>
              )}
              {history.length > 2 ? (
                <div className={styles.horizontalFlex}>
                  {history.slice(2, 4).map((item) => (
                    <div className={styles.historyContainer}>
                      <HistoryInfoContainer
                        key={item.bookingId}
                        fullName={item.fullName}
                        date={item.startDateTime}
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </LoggedInLayout>
  );
}

export default PatientDashboard;
