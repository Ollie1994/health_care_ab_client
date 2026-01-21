import Logo from "../assets/logo";
import styles from "../styles/Home.module.css";
import { PrimaryButton } from "./Button";
import { useNavigate } from "react-router-dom";



function Home () {
  const navigate = useNavigate();
  
    const navToPage = (page) => {
    navigate(page, { withCredentials: true });
  };

  return (
  <div className={styles.home}>
    <div className={styles.topSection}>
      <Logo />
      <h1>HealthCare AB</h1>
    </div>
    <div className={styles.subSection}>
      <div>
      <h4>Already a member? Please Login:</h4>
      <PrimaryButton onClick={() => navToPage(`/login`)}>
        <h3>Login</h3>
      </PrimaryButton>
      </div>
    </div>
      <div className={styles.subSection}>
        <h4>New to HealthCare AB? Create an account:</h4>
        <PrimaryButton onClick={() => navToPage(`/register`)}>
          <h3>Register</h3>
        </PrimaryButton>
      </div>
  </div>
  )
  };

export default Home;
