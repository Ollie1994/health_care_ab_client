import styles from "../styles/ProfileInformationSection.module.css";

export const InfoSection = ({ title, paragraph}) => {

  return (
    <div className={styles.mainContainer}>
        <h5>{title}</h5>
        <h4>{paragraph}</h4>
    </div>
  );
}