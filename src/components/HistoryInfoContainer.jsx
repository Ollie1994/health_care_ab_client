import DocumentIcon from "../assets/documentIcon.jsx";
import styles from "../styles/HistoryInfoContainer.module.css";

function HistoryInfoContainer({ fullName = `John Doe`, date = `01/01/26`}) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <h6 className={styles.name}>{fullName}</h6>
        <DocumentIcon/>
      </div>
      <div className={styles.bottomContainer}>
        <h5>{date}</h5>
      </div>
    </div>
  );
}

export default HistoryInfoContainer;
