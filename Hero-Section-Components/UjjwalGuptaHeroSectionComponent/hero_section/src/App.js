import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <HeroContainer>
      <Overlay />
      <Nav>
        <Logo href="#">MyBrand</Logo>
        <NavMenu>
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#services">Services</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </NavMenu>
      </Nav>
      <Content>
        <Headline>Your Next Journey Awaits</Headline>
        <Subheadline>Explore the world with us. Adventure is just a click away.</Subheadline>
        <CTAButton>Get Started</CTAButton>
      </Content>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://americanheroesinaction.org/wp-content/uploads/2018/07/calendar-adventure-background.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  color: #ffffff;
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
`;

const Nav = styled.nav`
  position: absolute;
  top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  z-index: 10;
`;

const Logo = styled.a`
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  margin-left:30px;
  font-family: 'Lobster', cursive;
  &:hover {
    color: #f39c12;
  }
`;

const NavMenu = styled.div`
  display: flex;
  margin-right:30px;
`;

const NavItem = styled.a`
  margin-left: 20px;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  &:hover {
    color: #f39c12;
    transition: color 0.3s ease;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 700px;
  margin-top: 120px;
  animation: fadeIn 2s ease-in;
`;

const Headline = styled.h1`
  font-size: 60px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const Subheadline = styled.p`
  font-size: 22px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const CTAButton = styled.button`
  padding: 15px 40px;
  font-size: 18px;
  background-color: #f39c12;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  box-shadow: 0 10px 20px rgba(243, 156, 18, 0.4);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background-color: #e67e22;
    box-shadow: 0 15px 30px rgba(230, 126, 34, 0.4);
  }
`;

export default HeroSection;
