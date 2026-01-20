import { useAuth } from "../hooks/useAuth";
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
import LoggedInLayout from "./LoggedInLayout"

function ProfilePage() {
  const {
    authState: { user },
  } = useAuth();

  const [history, setHistory] = useState([]);

  useEffect(() => {
  const fetchHistory = async () => {
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

  fetchHistory();
}, []);

const calculateAgeFromSSN = (ssn) => {
  if (!ssn) return `unknown`;

  const [datePart] = ssn.split("-");
  const year = parseInt(datePart.slice(0, 2), 10);
  const month = parseInt(datePart.slice(2, 4), 10) - 1;
  const day = parseInt(datePart.slice(4, 6), 10);

  const currentYear = new Date().getFullYear() % 100;
  const fullYear = year > currentYear ? 1900 + year : 2000 + year;

  const birthDate = new Date(fullYear, month, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  return hasHadBirthday ? age : age - 1;
};

const formatSSN = (ssn) => {
  if (!ssn) return "unknown";

  const [datePart] = ssn.split("-");
  const yy = datePart.slice(0, 2);
  const mm = datePart.slice(2, 4);
  const dd = datePart.slice(4, 6);

  return `${yy}/${mm}/${dd}-XXXX`;
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
    <LoggedInLayout pageName={`Profile`} firstName={user.firstName} lastName={user.lastName} className={styles.background}
    >
    <div className={styles.profileContainer}>
      {/* NAME */}
      <div className={styles.nameContainer}>
        <div className={styles.nameSection}>
          <UserIcon className={styles.icon} />
          <h1 className={styles.name}>{user.firstName + " " + user.lastName}</h1>
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
            <InfoSection title={`Username`} paragraph={user.username} />
            <InfoSection
              title={`Email Address`}
              paragraph={user?.email ?? "None"}
            />
          </div>
          <div className={styles.informationSection}>
            <InfoSection title={`Age`} paragraph={calculateAgeFromSSN(user.socialSecurityNumber)} />
            <InfoSection
              title={`Date of birth`}
              paragraph={formatSSN(user.socialSecurityNumber)}
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
        {history.length > 0 
        ? 
        <div className={styles.flexBetweenContainer}>
          {history.slice(0, 4).map((item) => (
            <HistoryInfoContainer key={item.bookingId} fullName={item.fullName} date={formatDate(item.startDateTime)}/>
          ))}
        </div>
        :
        <div className={styles.flexBetweenContainer}>
          <h4>None yet!</h4>
        </div>
        }
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
        </LoggedInLayout>
  );
}

export default ProfilePage;
