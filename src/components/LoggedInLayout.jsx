import Logo from "../assets/health_care_logo.svg";
import Header from "./Header";

const LoggedInLayout = ({children, pageName, firstName, lastName}) => {
  return (
    <div>
        <Header pageName={pageName} firstName={firstName} lastName={lastName}/>
        {children}
    </div>
  );
}

export default LoggedInLayout;