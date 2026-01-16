import DocumentIcon from "../assets/documentIcon.jsx";
import styles from "../styles/HistoryInfoContainer.module.css";

function HistoryInfoContainer({ children, icon: Icon, onClick, className }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <h6 className={styles.name}>Esther Howard</h6>
        <DocumentIcon/>
      </div>
      <div className={styles.bottomContainer}>
        <h5>09/02/25</h5>
      </div>
    </div>
  );
}

export default HistoryInfoContainer;
