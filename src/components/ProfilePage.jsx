import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/health_care_logo.svg";
import GreetingHeader from "./GreetingHeader";
import styles from "../styles/ProfilePage.module.css";
import SecondaryButton from "./SecondaryButton";
import EditIcon from "../assets/editIcon";
import UserIcon from "../assets/userIcon";
import ChevronRight from "../assets/chevronRight"
import { InfoSection } from "./ProfileInformationSection";
import buttonStyles from "../styles/SecondaryButton.module.css";
import HistoryInfoContainer from "./HistoryInfoContainer";

function ProfilePage() {
  const {
    authState: { user, roles },
  } = useAuth();

  return (
    <div className={styles.profileContainer}>
      <GreetingHeader />
      {/* NAME */}
      <div className={styles.infoContainer}>
        <div className={styles.nameSection}>
          <UserIcon className={styles.icon} />
          <h1 className={styles.name}>Jane Doe</h1>
        </div>
      </div>
      {/* PERSONAL INFO */}
      <div className={`${styles.infoContainer} ${styles.verticalLeft}`}>
        <div className={styles.sectionTitle}>
          <h3>Personal Information</h3>
          <SecondaryButton icon={EditIcon}>
            <h4>Edit</h4>
            </SecondaryButton>
        </div>
        <div className={`${styles.horizontalFlex} ${styles.extraBottomPadding}`}>
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
          <SecondaryButton icon={ChevronRight} className={buttonStyles.noBorderButton}>
            <h4 className={styles.viewAllText}>View All</h4>
          </SecondaryButton>
        </div>
        <div className={`${styles.horizontalFlex} ${styles.extraBottomPadding}`}>
          <HistoryInfoContainer/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
