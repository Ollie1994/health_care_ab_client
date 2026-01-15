import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/health_care_logo.svg";
import GreetingHeader from "./GreetingHeader";
import styles from "../styles/ProfilePage.module.css";
import SecondaryButton from "./SecondaryButton";

function ProfilePage() {
  const {
    authState: { user, roles },
  } = useAuth();

  return (
    <div className={styles.profileContainer}>
      <GreetingHeader />
      <div className={styles.infoContainer}>
        <div className={styles.verticalFlex}>
          <div className={styles.horizontalFlex}>
            <img
              src={Logo}
              alt="Health Care Logo"
              className={styles.logo}
            />
            <h3 className={styles.name}>Jane Doe</h3>
          </div>
        </div>
          <SecondaryButton text={"Edit"}/>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.verticalFlex}>
          <div className={styles.horizontalFlex}>
            <img
              src={Logo}
              alt="Health Care Logo"
              className={styles.logo}
            />
            <h3 className={styles.name}>Jane Doe</h3>
          </div>
        </div>
          <SecondaryButton text={"Edit"}/>
      </div>
    </div>
  );
}

export default ProfilePage;
