import { useEffect, useState } from "react";
import Logo from "../assets/health_care_logo.svg";
import UserIcon from "../assets/userIcon";
import styles from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = ({ pageName, firstName, lastName }) => {
  const fullName =
    firstName && lastName ? `${firstName} ${lastName}` : "Username";

  const navigate = useNavigate();

  const navToPage = (page) => {
    navigate(page, { withCredentials: true });
  };

  return (
    <div className={styles.header}>
      <h1>{pageName}</h1>
      <div className={styles.userSection} onClick={() => navToPage(`/profile`)}>
        {" "}
        <UserIcon className={styles.icon} />
        <h3>{fullName}</h3>
      </div>
    </div>
  );
};

export default Header;
