import styles from "../styles/NextAppointmentComponent.module.css"
import {PrimaryButton} from "./Button.jsx"

const NextAppointmentComponent = () => {

  return (
    <div className={styles.mainContainer}>
        <div className={styles.topContainer}>
            <div className={styles.titleContainer}>
                <h3>Next Appointment</h3>
                <PrimaryButton className={styles.primaryButton}>
                    <h5>Book Now</h5>
                </PrimaryButton>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoTop}>
                    <div className={styles.dateBox}>
                        <h6>Fri</h6>
                        <h3>14</h3>
                    </div>
                    <div className={styles.timeAndCaregiver}>
                        <h4>10:00-11:00</h4>
                        <h6>Dr. Ashton Cleve</h6>
                    </div>
                </div>
                <div className={styles.infoBottom}>
                    <div className={styles.infoBlock}>
                        <h5 className={styles.category}>Symptoms: </h5>
                        <h5>Cold/Fever</h5>
                    </div>
                    <div className={styles.infoBlock}>
                        <h5 className={styles.category}>Reason:</h5>
                        <h5>Checkup</h5>
                    </div>
                    <div className={styles.infoBlock}>
                        <h5 className={styles.category}>Note: </h5>
                        <h5>Been having covid-like symptoms for over a week now</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <PrimaryButton className={`${styles.cancelButton} ${styles.optionButton}`}>
                    <h5>Cancel</h5>
                </PrimaryButton>
                <PrimaryButton className={styles.optionButton}>
                    <h5>Edit</h5>
                </PrimaryButton>
                <PrimaryButton className={styles.optionButton}>
                    <h5>See More</h5>
                </PrimaryButton>
        </div>
    </div>
  );
}

export default NextAppointmentComponent;