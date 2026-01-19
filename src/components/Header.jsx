import { useEffect, useState } from "react";
import Logo from "../assets/health_care_logo.svg";
import UserIcon from "../assets/userIcon";
import styles from "../styles/Header.module.css"

const Header = ({pageName, firstName, lastName}) => {
  const fullName = (firstName && lastName) ? `${firstName} ${lastName}` : null;

  return (
    <div className={styles.header}>
      <h1>{pageName}</h1>
      <div className={styles.userSection}>
        <UserIcon className={styles.icon}/>
        <h3>{fullName}</h3>
      </div>
    </div>
  );
}

export default Header;