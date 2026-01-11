import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/health_care_logo.svg";
import styled from "styled-components";
import Logout from "./Logout";

// Styled components for caregiver dashboard layout
const CaregiverContainer = styled.div`
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

// Only accessible to users with the "Caregiver" role
function CaregiverDashboard() {
  const {
    authState: { user },
  } = useAuth();

  return (
    <CaregiverContainer>
      <LogoContainer src={Logo} alt="Health Care Logo" />
      <Title>Caregiver Dashboard</Title>
      <Text>Welcome, {user}!</Text>
      <Logout />
    </CaregiverContainer>
  );
}

export default CaregiverDashboard;
