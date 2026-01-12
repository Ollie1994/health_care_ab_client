import styled from "styled-components";

// Primary button
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

export const Button = ({ children, onClick, type = "button" }) => {
  return (
    <PrimaryButton type={type} onClick={onClick}>
      {children}
    </PrimaryButton>
  );
};