import { useEffect, useState } from "react";
import Logo from "../assets/health_care_logo.svg";

const Header = ({pageName, firstName, lastName}) => {
  const fullName = (firstName && lastName) ? `${firstName} ${lastName}` : null;

  return (
    <div>
      <h1>{pageName}</h1>
      <h3>{fullName}</h3>
    </div>
  );
}

export default Header;