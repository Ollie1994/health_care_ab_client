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
import { useNavigate } from "react-router-dom";

function PatientDashboard() {
  const {
    authState: { user },
  } = useAuth();

  const [history, setHistory] = useState([]);
  const [upcoming, setUpcoming] = useState({});

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

    const fetchUpcoming = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/booking/upcoming",
          { withCredentials: true },
        );
        setUpcoming(response.data);
      } catch (error) {
        console.error(
          "Failed to fetch upcoming appointment:",
          error.response || error,
        );
      }
    };

    fetchHistory();
    fetchUpcoming();
  }, []);

  const navigate = useNavigate();

  const navToPage = (page) => {
  navigate(page, { withCredentials: true });
};

const dayOfMonth = (dateTime) => {
  if (!dateTime) return "--";
  const day = new Date(dateTime).getDate();
  return isNaN(day) ? "--" : day;
};
  const nameOfDay = (day = "") => day.slice(0, 3).toUpperCase();

  const timeFromDate = (dateTime) => {
  if (!dateTime) return "00:00";
  const date = new Date(dateTime);
  if (isNaN(date.getTime())) return "00:00";
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

  const formatDate = (isoDate) => {
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-UK", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};

  return (
    <LoggedInLayout
      pageName={`Dashboard`}
      firstName={user.firstName}
      lastName={user.lastName}
      className={styles.background}
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
          <NextAppointmentComponent
            dayOfMonth={dayOfMonth(upcoming.startDateTime)}
            dayOfWeek={nameOfDay(upcoming.dayOfWeek)}
            startTime={timeFromDate(upcoming.startDateTime)}
            endTime={timeFromDate(upcoming.endDateTime)}
            name={upcoming.fullName}
            symptoms={upcoming.symptoms}
            reason={upcoming.reason}
            note={upcoming.note}
            onBookNow={() => navToPage(`/booking`)}
            hasNextAppointment={!!upcoming.bookingId}
          />
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
                    <div
                      className={styles.historyContainer}
                      key={item.bookingId}
                    >
                      <HistoryInfoContainer
                        fullName={item.fullName}
                        date={formatDate(item.startDateTime)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className={`${styles.noneYetText}`}>
                  <h4>None yet!</h4>
                </div>
              )}
              {history.length > 2 ? (
                <div className={styles.horizontalFlex}>
                  {history.slice(2, 4).map((item) => (
                    <div
                      className={styles.historyContainer}
                      key={item.bookingId}
                    >
                      <HistoryInfoContainer
                        fullName={item.fullName}
                        date={formatDate(item.startDateTime)}
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
