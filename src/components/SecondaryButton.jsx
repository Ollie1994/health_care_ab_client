import styles from "../styles/SecondaryButton.module.css";

function SecondaryButton({ text, icon: Icon, onClick }) {
  return (
    <button className={styles.secondaryButton} onClick={onClick}>
      <span className={styles.text}>{text}</span>

      {Icon && <Icon className={styles.icon} />}
    </button>
  );
}

export default SecondaryButton;
