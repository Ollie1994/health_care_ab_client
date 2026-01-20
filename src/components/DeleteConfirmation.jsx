import styles from "../styles/DeleteConfirmation.module.css";
import { PrimaryButton } from "./Button";
import { useNavigate } from "react-router-dom";

const DeleteConfirmation = ({setViewDeleteConfirmation}) => {

  return (
    <div className={styles.fullContainer}>
      <h2>Delete Account</h2>
      <div className={styles.text}>
        <h4>This action is irreversible!</h4>
        <h4>Your account will be lost along with all data associated.</h4>
        <div className={styles.mainContainer}></div>
      </div>
      <div className={styles.buttons}>
        <PrimaryButton className={styles.cancel} onClick={() => setViewDeleteConfirmation(false)}>
        <h5>Return to Profile</h5>
      </PrimaryButton>
      <PrimaryButton className={styles.button}>
        <h5>I understand this is irreversible and want to delete my account permanently!</h5>
      </PrimaryButton>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
