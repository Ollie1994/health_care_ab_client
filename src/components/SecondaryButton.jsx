import styles from "../styles/SecondaryButton.module.css";

function SecondaryButton({ children, icon: Icon, onClick, className }) {
  return (
    <button
      className={styles.secondaryButton + (className ? ` ${className}` : "")}
      onClick={onClick}
    >
      <span className={styles.children}>{children}</span>
      {Icon && <Icon className={styles.icon} />}
    </button>
  );
}

export default SecondaryButton;
