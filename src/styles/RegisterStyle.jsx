import styled from "styled-components";
import healthCarePicture from "../assets/health_care_picture.png";

// Layout
export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftPanel = styled.div`
  flex: 1;
  background: linear-gradient(rgba(25, 60, 120, 0.75), rgba(25, 60, 120, 0.75)),
    url(${healthCarePicture}) center/cover;
  display: flex;
  justify-content: center;
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
  overflow: hidden;
`;

// Health Care AB text
export const LogoText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin-top: 5rem;
`;

// Register Form Card
export const FormCard = styled.div`
  width: 90%;
  max-width: 420px;
  max-height: 100%; // <- Tvinga att passa i parent
  overflow: hidden; // <- Inget scroll
  display: flex;
  flex-direction: column;
`;

// Containing Heading and SubHeading
export const FormCardInner = styled.div`
  max-width: 100%;
  text-align: center;
  flex-shrink: 0;
`;

// Typography
export const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  margin-top: 0;
`;

export const SubHeading = styled.p`
  font-size: 14px;
  color: #5a5a5a;
  margin-bottom: 1rem;

  a {
    color: #0073e6;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Register Form
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; // <- Minska gap drastiskt
  flex: 1; // <- Ta allt tillgängligt utrymme
  overflow: hidden;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  background: #fafafa;
`;

// Checkbox wrapper
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 13px;
  color: #555;
  cursor: pointer;
`;

// Check box
export const CheckboxInput = styled.input`
  cursor: pointer;
`;

// Text next to check box
export const CheckboxText = styled.span`
  a {
    color: #0073e6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
