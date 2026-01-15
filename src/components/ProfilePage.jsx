import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/health_care_logo.svg";
import GreetingHeader from "./GreetingHeader";
import styles from "../styles/ProfilePage.module.css";
import SecondaryButton from "./SecondaryButton";
import EditIcon from "../assets/editIcon";

function ProfilePage() {
  const {
    authState: { user, roles },
  } = useAuth();

  return (
    <div className={styles.profileContainer}>
      <GreetingHeader />
      <div className={styles.infoContainer}>
          <div className={styles.horizontalFlex}>
            <img
              src={Logo}
              alt="Health Care Logo"
              className={styles.logo}
            />
            <h4 className={styles.name}>Jane Doe</h4>
          </div>
      </div>
      <div className={styles.infoContainer}>
            <h3 className={styles.sectionTitle}>Personal Information</h3>
          <SecondaryButton text={"Edit"} icon={EditIcon}/>
      </div>
    </div>
  );
}

export default ProfilePage;
