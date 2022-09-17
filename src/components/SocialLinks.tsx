import styled from "styled-components";
import { IconButton, useTheme } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const LeftBar = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 10;

  @media (max-width: 1080px) {
    left: 20px;
    right: auto;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 80px;
    margin: 0 auto;
    background-color: ${(props) => (props.className === "dark" ? "white" : "black")};
  }
  &:before {
    content: "";
    display: block;
    width: 1px;
    height: 180px;
    margin: 0 auto;
    background-color: ${(props) => (props.className === "dark" ? "white" : "black")};
  }
  li {
    &:hover,
    &:focus {
      transform: translateY(-3px);
      transition: all 0.4s;
    }
    &:last-of-type {
      margin-bottom: 20px;
    }
    &:first-of-type {
      margin-top: 20px;
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

const SocialLinks = () => {
  const theme = useTheme();
  return (
    <LeftBar>
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
    </LeftBar>
  );
};

export default SocialLinks;
