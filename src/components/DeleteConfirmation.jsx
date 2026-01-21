import styles from "../styles/DeleteConfirmation.module.css";
import { PrimaryButton } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteConfirmation = ({ setViewDeleteConfirmation }) => {
  const navigate = useNavigate();

  const anonymizeAccount = async () => {
    try {
      await axios.patch(
        "http://localhost:8080/user/anonymize",
        {},
        { withCredentials: true },
      );

      setViewDeleteConfirmation(false);
      navigate("/anonymized", { replace: true });
    } catch (error) {
      console.error("Failed to anonymize account:", error.response || error);
    }
  };

  return (
    <div className={styles.fullContainer}>
      <h2>Delete Account</h2>
      <div className={styles.text}>
        <h4>This action is irreversible!</h4>
        <h4>Your account will be lost along with all data associated.</h4>
        <div className={styles.mainContainer}></div>
      </div>
      <div className={styles.buttons}>
        <PrimaryButton
          className={styles.cancel}
          onClick={() => setViewDeleteConfirmation(false)}
        >
          <h5>Return to Profile</h5>
        </PrimaryButton>
        <PrimaryButton
          className={styles.button}
          onClick={() => anonymizeAccount()}
        >
          <h5>
            I understand this is irreversible and want to delete my account
            permanently!
          </h5>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
