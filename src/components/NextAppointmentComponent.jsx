import styles from "../styles/NextAppointmentComponent.module.css";
import { PrimaryButton } from "./Button.jsx";

const NextAppointmentComponent = ({
  dayOfMonth,
  dayOfWeek,
  startTime,
  endTime,
  name,
  symptoms,
  reason,
  note,
  onBookNow,
  hasNextAppointment,
}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.titleContainer}>
          <h3>Next Appointment</h3>
          {hasNextAppointment ? (
            <PrimaryButton onClick={onBookNow} className={styles.primaryButton}>
              <h5>Book Now</h5>
            </PrimaryButton>
          ) : null}
        </div>
          {hasNextAppointment ? (
            <div className={styles.infoContainer}>
              <div className={styles.infoTop}>
                <div className={styles.dateBox}>
                  <h6>{dayOfWeek}</h6>
                  <h3>{dayOfMonth}</h3>
                </div>
                <div className={styles.timeAndCaregiver}>
                  <h4>{`${startTime}` + ` - ` + `${endTime}`}</h4>
                  <h6>{name}</h6>
                </div>
              </div>
              <div className={styles.infoBottom}>
                <div className={styles.infoBlock}>
                  <h5 className={styles.category}>Symptoms: </h5>
                  <h5>{symptoms?.join(", ") || `None yet`}</h5>
                </div>
                <div className={styles.infoBlock}>
                  <h5 className={styles.category}>Reason:</h5>
                  <h5>{reason || `None yet`}</h5>
                </div>
                <div className={styles.infoBlock}>
                  <h5 className={styles.category}>Note: </h5>
                  <h5>{note || `None yet`}</h5>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.infoContainer}>
              <div className={styles.noUpcoming}>
                <h4>You have no upcoming appointments!</h4>
                <PrimaryButton
                  onClick={onBookNow}
                  className={styles.primaryButton}
                >
                  <h3>Book Now</h3>
                </PrimaryButton>
              </div>
            </div>
          )}
      </div>
      {hasNextAppointment ? (
        
          <div className={styles.bottomContainer}>
        <PrimaryButton
          className={`${styles.cancelButton} ${styles.optionButton}`}
        >
          <h5>Cancel</h5>
        </PrimaryButton>
        <PrimaryButton className={styles.optionButton}>
          <h5>Edit</h5>
        </PrimaryButton>
        <PrimaryButton className={styles.optionButton}>
          <h5>See More</h5>
        </PrimaryButton>
      </div>
        ) : null}
    </div>
  );
};

export default NextAppointmentComponent;
