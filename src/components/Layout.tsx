import React from "react";
import styled from "styled-components";
import Email from "./Email";
import Footer from "./Footer";
import Section from "./MainSection";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";

type LayoutProps = {
  handleTheme: () => void;
};

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ handleTheme }: LayoutProps) => {
  return (
    <StyledContent>
      <Navbar handleTheme={handleTheme} />
      <SocialLinks />
      <Email />
      <Section />
      <Footer />
    </StyledContent>
  );
};

export default Layout;
