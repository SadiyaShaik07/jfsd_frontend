import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Registration from './Registration';

// Styled Components for CSS
const LoginContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 60%;
  max-width: 900px;
  margin: auto;
`;

const LoginImageSection = styled.div`
  width: 50%;
  background-color: #f0f4ff;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginFormSection = styled.div`
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

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: white;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Styled Components for Navbar
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

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log("Logging in:", email, password);
      navigate('/studenthome');
    } else {
      alert("Please enter valid email and password.");
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

      {/* Login Form */}
      <LoginContainer>
        <LoginImageSection>
          {/* Use your image path or URL here */}
          <img src="https://st2.depositphotos.com/1001599/43046/v/450/depositphotos_430460192-stock-illustration-sign-page-abstract-concept-vector.jpg" alt="Login Illustration" style={{ width: '100%' }} />
        </LoginImageSection>
        <LoginFormSection>
          <h1>Login</h1>
          <Form onSubmit={handleLogin}>
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
            <Button type="submit">Login</Button>
          </Form>
          <FooterLinks>
            <Link href="/forgot-password">Forgot Password?</Link>
            <Link href="/Registration">Signup!</Link>
          </FooterLinks>
        </LoginFormSection>
      </LoginContainer>
    </>
  );
}

export default Login;
