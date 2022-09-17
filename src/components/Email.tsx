import React from "react";
import styled from "styled-components";
import { useTheme } from "@mui/material";
import { email } from "../common";

const RightBar = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 40px;
  z-index: 10;

  @media (max-width: 1080px) {
    left: auto;
    right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 1px;
    height: 40px;
    margin: 0 auto;
    background-color: ${(props) => (props.className === "dark" ? "white" : "black")};
  }
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${(props) => (props.className === "dark" ? "white" : "black")};
  }
  a {
    margin: 20px auto;
    padding: 10px;
    color: ${(props) => (props.className === "dark" ? "white" : "black")};
    font-family: "Calistoga", cursive;
    text-decoration: none;
    font-size: 16px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    &:hover,
    &:focus {
      transform: translateY(-3px);
      background: -webkit-linear-gradient(#3b82f6, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const Email = () => {
  const theme = useTheme();
  return (
    <RightBar>
      <StyledLinkWrapper className={theme.palette.mode}>
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          {email}
        </a>
      </StyledLinkWrapper>
    </RightBar>
  );
};

export default Email;
