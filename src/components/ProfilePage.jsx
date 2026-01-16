import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/health_care_logo.svg";
import GreetingHeader from "./GreetingHeader";
import styles from "../styles/ProfilePage.module.css";
import SecondaryButton from "./SecondaryButton";
import EditIcon from "../assets/editIcon";
import UserIcon from "../assets/userIcon";
import ChevronRight from "../assets/chevronRight";
import { InfoSection } from "./ProfileInformationSection";
import buttonStyles from "../styles/SecondaryButton.module.css";
import HistoryInfoContainer from "./HistoryInfoContainer";
import { useEffect, useState } from "react";
import axios from "axios";

function ProfilePage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/booking/history",
          { withCredentials: true }
        );
        setHistory(response.data);
      } catch (error) {
        console.error("Failed to fetch history:", error.response || error);
      }
    };

    fetchProfile();
  }, []);

  const formatDate = (isoDate) => {
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-UK", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};

  return (
    <div className={styles.profileContainer}>
      <GreetingHeader />
      {/* NAME */}
      <div className={styles.nameContainer}>
        <div className={styles.nameSection}>
          <UserIcon className={styles.icon} />
          <h1 className={styles.name}>Jane Doe</h1>
        </div>
      </div>
      {/* PERSONAL INFO */}
      <div className={`${styles.infoContainer} ${styles.verticalLeft} ${styles.extraBottomPadding}`}>
        <div className={styles.sectionTitle}>
          <h3>Personal Information</h3>
          <SecondaryButton icon={EditIcon}>
            <h4>Edit</h4>
          </SecondaryButton>
        </div>
        <div
          className={`${styles.horizontalFlex} ${styles.extraBottomPadding}`}
        >
          <div className={styles.informationSection}>
            <InfoSection title={`Username`} paragraph={`ani.caval`} />
            <InfoSection
              title={`Email Address`}
              paragraph={`ani.cavalanti@gmail.com`}
            />
          </div>
          <div className={styles.informationSection}>
            <InfoSection title={`Age`} paragraph={`26`} />
            <InfoSection
              title={`Date of birth`}
              paragraph={`07/01/1997 - xxxx`}
            />
          </div>
        </div>
      </div>
      {/* BOOKING HISTORY */}
      <div className={`${styles.infoContainer} ${styles.verticalLeft}`}>
        <div className={styles.sectionTitle}>
          <h3>History</h3>
          <SecondaryButton
            icon={ChevronRight}
            className={buttonStyles.noBorderButton}
          >
            <h4 className={styles.viewAllText}>View All</h4>
          </SecondaryButton>
        </div>
        <div className={styles.flexBetweenContainer}>
          {history.slice(0, 4).map((item) => (
            <HistoryInfoContainer key={item.bookingId} fullName={item.fullName} date={formatDate(item.startDateTime)}/>
          ))}
        </div>
      </div>
      {/* GENERAL */}
      <div className={`${styles.infoContainer} ${styles.verticalLeft}`}>
          <h3>General</h3>
          <div className={`${styles.flexBetweenContainer}`}>
            <div className={styles.infoBox}>
              <h4>Change Password</h4>
              <SecondaryButton>
             <h4 className={styles.buttonText}>Change</h4>
          </SecondaryButton>
            </div>
            <div className={styles.verticalDivider}></div>
            <div className={styles.infoBox}>
              <h4>Notifications</h4>
              <SecondaryButton>
              <h4 className={styles.buttonText}>Enable</h4>
            </SecondaryButton>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ProfilePage;
