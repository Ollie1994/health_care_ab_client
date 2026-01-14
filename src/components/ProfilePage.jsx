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
  background-color: #3e4146;
`;

const InfoContainer = styled.div`
  background-color: #b0b396;
  display: flex;
  width: 95%;
  height: fit-content;
  border-radius: 10px;
`;

const HorizontalFlex = styled.div`
  display: flex;
  align-items: center;
  background-color: #e06e6e;
  line-height: 1rem;
  padding-top: 1rem;
`;

const ImgContainer = styled.img`
  height: 5rem;
`;

const Name = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;


function ProfilePage() {
  const {
    authState: { user },
  } = useAuth();

  return (
    <PatientContainer>
      <GreetingHeader />
      <InfoContainer>
        <HorizontalFlex>
            <ImgContainer src={Logo} alt="Health Care Logo" />
            <Name>Jane Doe</Name>
        </HorizontalFlex>
      </InfoContainer>
    </PatientContainer>
  );
}

export default ProfilePage;
