import styled from "styled-components";
import { useTheme, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Code2, Download } from "lucide-react";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 0;
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
  h1 {
    margin: 17px 0px;
    font-family: "Outfit", "sans-serif";
    font-weight: 500;
    font-size: clamp(14px, 5vw, 30px);
    span {
      background: -webkit-linear-gradient(left, #3b82f6, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  h3 {
    font-size: clamp(30px, 7vw, 80px);
    font-family: "Outfit", "sans-serif";
    letter-spacing: 2px;
    margin-top: 10px;
    font-weight: 600;
    line-height: 1.1;
    span {
      background: -webkit-linear-gradient(left, #3b82f6, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  p {
    max-width: 700px;
    font-weight: 300;
    font-size: clamp(13px, 5vw, 20px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
  button {
    padding: 8px 2.5rem;
    border-radius: 9px;
    font-size: clamp(13px, 5vw, 17px);
    &:hover {
      transform: translateY(-2px);
      transition: all 0.4s;
    }
  }
  @media (max-width: 600px) and (min-height: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    a {
      width: 100%;
    }
    button {
      width: 100%;
    }
  }
`;

const Header = () => {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  return (
    <HeaderWrapper id="home">
      <div data-aos="fade-up" data-aos-delay="500">
        <h3>
          Hi, I'm <span>Dravid R</span>
        </h3>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        style={{
          color: dark ? "#94a3b8" : "#696969",
        }}
      >
        <h1>
          <span>Senior Frontend Engineer</span> with 5+ Years of Experience
        </h1>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="700"
        style={{
          color: dark ? "#94a3b8" : "#696969",
        }}
      >
        <p>
          I design and build high-performance, user-centric web applications
          using React, TypeScript, and modern frontend architecture.
        </p>
      </div>
      <ButtonContainer data-aos="fade-up" data-aos-delay="800">
        <HashLink to="#projects" smooth>
          <Button
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              background: "linear-gradient(135deg, #3b82f6, #2dd4bf)",
            }}
            startIcon={<Code2 />}
          >
            View My Work
          </Button>
        </HashLink>
        <Link to="/Dravid_Resume.pdf" target="_blank" download>
          <Button
            variant="outlined"
            size="large"
            sx={{ textTransform: "none" }}
            startIcon={<Download />}
          >
            Resume
          </Button>
        </Link>
      </ButtonContainer>
    </HeaderWrapper>
  );
};

export default Header;
