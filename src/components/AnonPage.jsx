import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "./Button";
import styles from "../styles/AnonPage.module.css"
import Logo from "../assets/logo";

function AnonPage() {
  const navigate = useNavigate();

  const navToPage = (page) => {
  navigate(page, { withCredentials: true });
};

  return (
    <div className={styles.anonContainer}>
      <Logo className={styles.logo}/>
      <h1>Your account has been anonymized successfully!</h1>
      <PrimaryButton onClick={() => navToPage("/")}>
        <h3>Okay</h3>
      </PrimaryButton>
    </div>
  );
}

export default AnonPage;
