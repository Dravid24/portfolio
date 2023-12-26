import { useState, useEffect } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useTheme, Button } from "@mui/material";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
  h1 {
    margin: 0 0 15px 4px;

    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    font-size: clamp(14px, 5vw, 20px);
    @media (max-width: 480px) {
      margin: 0 0 7px 2px;
    }
  }
  h3 {
    font-size: clamp(30px, 7vw, 60px);
    font-family: "Calistoga", cursive;
    letter-spacing: 3px;
    margin-top: 10px;
    font-weight: 400;
    background: -webkit-linear-gradient(left, #3b82f6, #2dd4bf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.1;
  }
  p {
    margin: 20px 0 0;
    max-width: 540px;
    font-size: clamp(14px, 5vw, 20px);
  }

  a {
    text-decoration: none;
  }
  button {
    color: white;
    background-color: #3b82f6;

    &:hover {
      transform: translateY(-2px);
      transition: all 0.4s;
    }
  }
`;

const Header = () => {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(false);
    const timeout = setTimeout(() => setIsMounted(true), 200);
    return () => clearTimeout(timeout);
  }, [dark]);

  return (
    <HeaderWrapper id="home">
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames="fadeup" timeout={1000}>
            <div
              style={{
                transitionDelay: `100ms`,
                color: dark ? "#ccd6f6" : "#696969",
              }}
            >
              <h1>Hi, my name is</h1>
            </div>
          </CSSTransition>
        )}
        {isMounted && (
          <CSSTransition classNames="fadeup" timeout={1000}>
            <div style={{ transitionDelay: `200ms` }}>
              <h3>Dravid R.</h3>
            </div>
          </CSSTransition>
        )}
        {isMounted && (
          <CSSTransition classNames="fadeup" timeout={1000}>
            <div style={{ transitionDelay: `300ms` }}>
              <h3>I am a front-end developer.</h3>
            </div>
          </CSSTransition>
        )}
        {isMounted && (
          <CSSTransition classNames="fadeup" timeout={1000}>
            <div
              style={{
                transitionDelay: `400ms`,
                color: dark ? "#ccd6f6" : "#696969",
              }}
            >
              <p>
                I’m a front end developer with 3+ years of experience in
                blending the art of design with skill of programming to deliver
                an immersive and engaging user experience 👨‍💻.
              </p>
            </div>
          </CSSTransition>
        )}
        {isMounted && (
          <CSSTransition classNames="fadeup" timeout={1000}>
            <div style={{ transitionDelay: `500ms`, marginTop: "30px" }}>
              <Link to="/resume.pdf" target="_blank" download>
                <Button variant="contained" size="large">
                  Download CV
                </Button>
              </Link>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </HeaderWrapper>
  );
};

export default Header;
