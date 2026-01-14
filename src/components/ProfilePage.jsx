import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/health_care_logo.svg";
import styled from "styled-components";
import Logout from "./Logout";
import GreetingHeader from "./GreetingHeader";

// Styled components for user dashboard layout
const PatientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 22px;
`;

const Text = styled.p`
  font-size: 18px;
`;

function ProfilePage() {
  const {
    authState: { user },
  } = useAuth();

  return (
    <PatientContainer>
      <GreetingHeader />
      <Title>Jane Doe</Title>
      <Text>Welcome, {user}!</Text>
    </PatientContainer>
  );
}

export default ProfilePage;
