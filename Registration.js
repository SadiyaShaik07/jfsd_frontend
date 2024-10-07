import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate hook
import styled from 'styled-components';

// Styled Components for CSS

// Navbar Styles
const NavBar = styled.header`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  border-bottom: none;
  margin-bottom: 30px;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #5068c5;
  }
`;

// Registration Form Styles
const RegistrationContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 60%;
  max-width: 900px;
  margin: auto;
`;

const RegistrationImageSection = styled.div`
  width: 50%;
  background-color: #f0f4ff;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegistrationFormSection = styled.div`
  width: 50%;
  background-color: #627edc;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  width: 100%;
  background-color: white;
  color: black;
`;

const Button = styled.button`
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #5068c5;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #3f55b3;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();  // Hook for navigation

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Registering:", name, email, password);
      
      // Simulate registration logic or call an API
      // Navigate to the login page after successful registration
      navigate('/login');
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <>
      {/* Navbar */}
      <NavBar>
        <nav>
          <NavList>
            <NavItem><NavLink href="/">Home</NavLink></NavItem>
            <NavItem><NavLink href="/about">About</NavLink></NavItem>
            <NavItem><NavLink href="/login">Login</NavLink></NavItem>
            <NavItem><NavLink href="/contactus">Contact</NavLink></NavItem>
          </NavList>
        </nav>
      </NavBar>

      {/* Registration Form */}
      <RegistrationContainer>
        {/* Left Section with Image */}
        <RegistrationImageSection>
          <img src="https://media.istockphoto.com/id/1305268276/vector/registration-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=nfvUbHjcNDVIPdWkaxGx0z0WZaAEuBK9SyG-aIqg2-0=" alt="Registration Illustration" style={{ width: '100%' }} />
        </RegistrationImageSection>

        {/* Right Section with Registration Form */}
        <RegistrationFormSection>
          <Title>REGISTRATION</Title>
          <Form onSubmit={handleRegistration}>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit">Register</Button>
          </Form>
        </RegistrationFormSection>
      </RegistrationContainer>
    </>
  );
}

export default Registration;
