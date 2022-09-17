import React from "react";
import styled from "styled-components";
import { useTheme, IconButton } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const FooterStyledWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 30px 0px;
`;
const Brand = styled.img`
  width: 50px;
  height: auto;
  transform: translateY(3px);
  &:hover {
    transform: translateY(0px);
    transition: all 0.4s;
  }

  p {
    margin-top: 10px;
  }
`;
const StyledSocialList = styled.ul`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px 0px;
  padding: 0;
  list-style: none;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }

  li {
    &:hover,
    &:focus {
      transform: translateY(-3px);
      transition: all 0.4s;
    }

    a {
      padding: 10px;
      color: ${(props) => (props.className === "dark" ? "white" : "black")};

      svg {
        width: 20px;
        height: 20px;
        &:hover,
        &:focus {
          color: #3b82f6;
        }
      }
    }
  }
`;

const Footer = () => {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  const socialMedia = [
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dravid2407/",
    },
    {
      icon: <GitHubIcon />,
      name: "Github",
      url: "https://github.com/Dravid24",
    },
    {
      icon: <InstagramIcon />,
      name: "Instagram",
      url: "https://www.instagram.com/dravidmanigandan/",
    },
    {
      icon: <FacebookIcon />,
      name: "Facebook",
      url: "https://facebook.com/dravid.manigandan",
    },
  ];
  return (
    <FooterStyledWrapper>
      <Brand src="./logo.png" alt="logo" />
      <StyledSocialList className={theme.palette.mode}>
        {socialMedia &&
          socialMedia.map(({ url, icon, name }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <IconButton color="inherit" aria-label="open drawer">
                  {icon}
                </IconButton>
              </a>
            </li>
          ))}
      </StyledSocialList>
      <p style={{ color: dark ? "#ccd6f6" : "#696969", textAlign: "center" }}>Designed & Built by Dravid</p>
    </FooterStyledWrapper>
  );
};

export default Footer;
