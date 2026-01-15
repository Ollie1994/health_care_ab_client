import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/health_care_logo.svg";
import GreetingHeader from "./GreetingHeader";
import styles from "../styles/ProfilePage.module.css";
import SecondaryButton from "./SecondaryButton";
import EditIcon from "../assets/editIcon";
import UserIcon from "../assets/userIcon";
import { InfoSection } from "./ProfileInformationSection";

function ProfilePage() {
  const {
    authState: { user, roles },
  } = useAuth();

  return (
    <div className={styles.profileContainer}>
      <GreetingHeader />
      <div className={styles.infoContainer}>
        <div className={styles.nameSection}>
          <UserIcon className={styles.icon} />
          <h1 className={styles.name}>Jane Doe</h1>
        </div>
      </div>
      <div className={`${styles.infoContainer} ${styles.verticalLeft}`}>
        <div className={styles.sectionTitle}>
          <h3>Personal Information</h3>
          <SecondaryButton text={"Edit"} icon={EditIcon} />
        </div>
        <div className={styles.horizontalFlex}>
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
    </div>
  );
}

export default ProfilePage;
