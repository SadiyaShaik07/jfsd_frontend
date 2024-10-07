import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components for CSS

// Navbar Styles
const NavBar = styled.header`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  margin-bottom: 30px;
  border-bottom: none;
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

// Contact Us Page Container
const ContactContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 60%;
  max-width: 900px;
  margin: auto;
  margin-top: 50px;
`;

// Left Section with Image
const ContactImageSection = styled.div`
  width: 50%;
  background-color: #f0f4ff;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactImage = styled.img`
  width: 100%;
`;

// Right Section with Contact Form
const ContactFormSection = styled.div`
  width: 50%;
  background-color: #627edc;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
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

const Textarea = styled.textarea`
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  width: 100%;
  background-color: white;
  color: black;
  resize: none;
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

// Success Message Popup
const SuccessMessage = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #4caf50;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-size: 16px;
`;

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleContact = (e) => {
    e.preventDefault();
    // Handle contact logic here
    console.log("Message from:", name, email, message);

    // Show success message on form submission
    setShowSuccessMessage(true);

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
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

      {/* Contact Us Form */}
      <ContactContainer>
        {/* Left Section with Image */}
        <ContactImageSection>
          <ContactImage src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="Contact Illustration" />
        </ContactImageSection>

        {/* Right Section with Contact Form */}
        <ContactFormSection>
          <Title>Contact Us</Title>
          <Form onSubmit={handleContact}>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
            />
            <Button type="submit">Send Message</Button>
          </Form>
        </ContactFormSection>
      </ContactContainer>

      {/* Success Message */}
      {showSuccessMessage && (
        <SuccessMessage>
          Message sent successfully!
        </SuccessMessage>
      )}
    </>
  );
}

export default ContactUs;
