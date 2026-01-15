import styles from "../styles/SecondaryButton.module.css";

function SecondaryButton({ text, icon, onClick }) {
  return (
    <button className={styles.secondaryButton} onClick={onClick}>
      <span className={styles.text}>{text}</span>

      {icon && (
        <img src={icon} alt="" className={styles.icon} />
      )}
    </button>
  );
}

export default SecondaryButton;