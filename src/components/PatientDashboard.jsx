import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/health_care_logo.svg";
import styled from "styled-components";
import Logout from "./Logout";
import Sidebar from "./PatientSidebar";
// Styled components for user dashboard layout
const PatientContainer = styled.div`
  display: flex;
  height: 100vh;
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

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

// Only accessible to users with the "User" role
function PatientDashboard() {
  const {
    authState: { user },
  } = useAuth();

  return (
    <PatientContainer>
      <Sidebar />
      <MainContent>
      <LogoContainer src={Logo} alt="Health Care Logo" />
      <Title>Patient Dashboard</Title>
      <Text>Welcome, {user}!</Text>
      <Logout />
      </MainContent>
    </PatientContainer>
  );
}

export default PatientDashboard;

