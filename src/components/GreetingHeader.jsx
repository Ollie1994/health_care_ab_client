import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/health_care_logo.svg";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: top;
  justify-content: space-between;
  padding: 0rem 2rem 0rem 2rem;
  background-color: #9b8a8a;
`;

const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e06e6e;
  line-height: 1rem;
  padding-top: 1rem;
`;

const HorizontalFlex = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  gap: 1rem;
  background-color: #408b4c;
`;

const Greeting = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
`;

const ImgContainer = styled.img`
  height: 5rem;
`;

const TextContainer = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;

const GreetingHeader = () => {
  return (
    <Header>
      <VerticalFlex>
        <Greeting>
            Hi, Jane Doe
        </Greeting>
        <Title>
            Profile
        </Title>
      </VerticalFlex>
      <HorizontalFlex>
        <ImgContainer src={Logo} alt="Health Care Logo" />
        <TextContainer>
            Jane Doe
        </TextContainer>
      </HorizontalFlex>
    </Header>
  );
}

export default GreetingHeader;