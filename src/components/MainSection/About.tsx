import styled from "styled-components";
import { useTheme } from "@mui/material";

const StyledAboutSection = styled.section`
  max-width: 1280px;
  margin-bottom: 50px;

  .innerContent {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
      margin: 20px 0;
      margin-bottom: 0px;
    }
  }

  .heading {
    display: flex;
    align-items: center;
    padding: 70px 0 80px;
    width: 100%;
    font-size: clamp(26px, 5vw, 36px);
    white-space: nowrap;

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      margin-left: 20px;
      background: #969493;

      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
`;

const StyledImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .blob {
    position: absolute;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    filter: blur(70px);
    opacity: 0.7;
    z-index: 0;
  }

  .blob1 {
    background: #7f5af0;
    top: 10%;
    left: 20%;
    animation: move1 10s infinite alternate ease-in-out;
  }

  .blob2 {
    background: #2dd4bf;
    top: 20%;
    left: 20%;
    animation: move2 12s infinite alternate ease-in-out;
  }

  .blob3 {
    background: #3b82f6;
    top: 60%;
    left: 15%;
    animation: move3 14s infinite alternate ease-in-out;
  }

  @keyframes move1 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(60px, 40px);
    }
  }

  @keyframes move2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-50px, 30px);
    }
  }

  @keyframes move3 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(30px, -50px);
    }
  }

  .img {
    position: relative;
    z-index: 2;
    width: 300px;
    height: 460px;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px) scale(1.02);
    }

    @media (max-width: 768px) {
      width: 300px;
      height: 440px;
    }
  }
`;

const StyledAbout = styled.div`
  h1 {
    font-size: clamp(15px, 5vw, 30px);
    font-family: "Outfit", "sans-serif";
    margin-top: 10px;
    font-weight: 600;

    span {
      background: -webkit-linear-gradient(left, #3b82f6, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    margin-top: 20px;
    font-weight: 300;
    font-size: clamp(13px, 5vw, 20px);
  }
`;

const About = () => {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  return (
    <StyledAboutSection id="about">
      <h1 className="heading">About Me</h1>

      <div className="innerContent">
        <StyledImg>
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
          <div className="blob blob3"></div>

          <img
            className="img"
            src="/dravid.png"
            alt="Dravid"
            data-aos="flip-left"
          />
        </StyledImg>
        <StyledAbout>
          <h1 data-aos="fade-up" data-aos-delay="200">
            Passionate about building <span>Scalable & High-Performance</span>{" "}
            web applications
          </h1>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            style={{
              color: dark ? "#94a3b8" : "#696969",
            }}
          >
            <p>
              I’m a Frontend Engineer with 5+ years of experience building
              scalable and high-performance web applications using React.js,
              JavaScript, and TypeScript. I focus on creating clean,
              maintainable code and delivering intuitive user experiences that
              scale with real-world demands.
            </p>

            <p>
              At Accenture, I work on enterprise-grade applications where
              performance, reliability, and usability are critical. I design
              reusable component systems, handle complex data-driven interfaces,
              and optimize rendering to ensure smooth and efficient user
              interactions.
            </p>

            <p>
              I’m passionate about frontend system design and building
              production-ready applications with a strong emphasis on
              scalability and performance. I continuously refine my approach to
              writing efficient code and aim to contribute to product-driven
              teams solving meaningful problems at scale.
            </p>
          </div>
        </StyledAbout>
      </div>
    </StyledAboutSection>
  );
};

export default About;
