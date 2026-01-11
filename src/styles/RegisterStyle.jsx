import styled from "styled-components";

// Layout
export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftPanel = styled.div`
  flex: 1;
  background: linear-gradient(rgba(25, 60, 120, 0.75), rgba(25, 60, 120, 0.75)),
    url("/assets/health_care_picture.png") center/cover;
  display: flex;
  justify-content: center;
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
  overflow-y: auto;
`;

// Health Care AB text
export const LogoText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin-top: 5rem;
`;

// Form Card
export const FormCard = styled.div`
  width: 70%;
  margin: 2rem 0;
  border: 5px solid black;
`;

// Containing Heading and SubHeading
export const FormCardInner = styled.div`
  max-width: 100%;  
  text-align: center;
`;

// Typography
export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const SubHeading = styled.p`
  font-size: 14px;
  color: #5a5a5a;
  margin-bottom: 2rem;

  a {
    color: #0073e6;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Form
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
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

// Button
export const PrimaryButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 0.5rem;
  border: none;
  border-radius: 8px;
  background: #0073e6;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #005cb7;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(91, 134, 229, 0.3);
  }
`;
