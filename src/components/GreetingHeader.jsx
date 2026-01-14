import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/health_care_logo.svg";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 3px solid #000000;
`;

const TextSection = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const Greeting = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
`;


const GreetingHeader = () => {
  const {
    authState: { user },
  } = useAuth();

  return (
    <Header>
      <TextSection>
        <Greeting>
            Hi, Jane Doe
        </Greeting>
        <Title>
            Profile
        </Title>
      </TextSection>
    </Header>
    /*<Header>
      <LogoImg src={Logo} alt="Health Care Logo" />
      <Greeting>
        Hello{user.firstName ? `, ${user.firstName}` : ""}
      </Greeting>
    </Header>*/
  );
}

export default GreetingHeader;