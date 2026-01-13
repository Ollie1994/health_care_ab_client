import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/health_care_logo.svg";
import styled from "styled-components";
import styles from "../styles/PatientDashboard.module.css";
import { Button } from "./Button";
import Logout from "./Logout";

// Styled components for user dashboard layout
const PatientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoContainer = styled.img`
  height: 20rem;
`;

const Title = styled.h2`
  font-size: 22px;
`;

const Text = styled.p`
  font-size: 18px;
`;

// Only accessible to users with the "User" role
function PatientDashboard() {
  const {
    authState: { user },
  } = useAuth();

  return (
    /*<PatientContainer>
      <LogoContainer src={Logo} alt="Health Care Logo" />
      <Title>Patient Dashboard</Title>
      <Text>Welcome, {user}!</Text>
      <Logout />
    </PatientContainer>*/

    <div>
    <div className={styles.flexbox}>
      <h3>FirstName LastName</h3>
      <Button className={styles.button} children={
        <h3>Edit</h3>
      }/>
    </div>
    </div>
  );
}

export default PatientDashboard;
