import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  PageContainer,
  LeftPanel,
  RightPanel,
  LogoText,
  FormCard,
  FormCardInner,
  Heading,
  SubHeading,
  StyledForm,
  Label,
  Input,
  CheckboxLabel,
  CheckboxInput,
  CheckboxText,
  PrimaryButton,
} from "../styles/RegisterStyle";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    socialSecurityNumber: "",
  });
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!acceptedPolicy) {
      setError("You must accept the Privacy Policy to continue");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/register",
        formData
      );

      console.log("Registration successful:", response.data);
      navigate("/login");
      } catch (error) {
        console.error("Registration failed:", error.response || error);
        setError("Registration failed. Please try again.");
        }
      };

  return (
    <PageContainer>
      <LeftPanel>
          <LogoText>HealthCare AB</LogoText>
      </LeftPanel>
      <RightPanel>
        <FormCard>
          <FormCardInner>
          <Heading>Hey there</Heading>
          <SubHeading>
            Already have an account? <a href="/login">Log in</a>
          </SubHeading>
          </FormCardInner>

          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

          <StyledForm onSubmit={handleRegister}>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Label htmlFor="socialSecurityNumber">Social Security Number</Label>
            <Input
              id="socialSecurityNumber"
              name="socialSecurityNumber"
              type="text"
              placeholder="xxxxxxxx-xxxx"
              value={formData.socialSecurityNumber}
              onChange={handleInputChange}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••••••"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <CheckboxLabel>
              <CheckboxInput
              type="checkbox"
              checked={acceptedPolicy}
              onChange={(e) => setAcceptedPolicy(e.target.checked)}
            />
            <CheckboxText>
              Please read and accept the <a href="#">Privacy Policy</a>
            </CheckboxText>
            </CheckboxLabel>
            <PrimaryButton type="submit">Sign Up</PrimaryButton>
          </StyledForm>
        </FormCard>
      </RightPanel>
    </PageContainer>
  );
}

export default Register;
