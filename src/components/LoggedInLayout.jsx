import Header from "./Header";
import styles from "../styles/LoggedInLayout.module.css"

const LoggedInLayout = ({children, pageName, firstName, lastName}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebar}></div>
    <div className={styles.mainContent}>
        <Header pageName={pageName} firstName={firstName} lastName={lastName}/>
        {children}
    </div>
    </div>
  );
}

export default LoggedInLayout;