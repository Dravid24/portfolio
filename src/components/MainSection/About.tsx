import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StyledAboutSection = styled.section`
  max-width: 1080px;
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
      @media (max-width: 1080px) {
        width: 100%;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
`;

const StyledImg = styled.div`
  text-align: center;
  margin: 2em 0;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    margin: 1em 0;
  }
  .card1 {
    background: #c8cbcc;
    opacity: 0.5;
    display: inline-block;
    height: 350px;
    margin: -1em;
    position: absolute;
    width: 300px;
    border-radius: 5px;

    @media (max-width: 768px) {
      height: 250px;
      margin: -0.5em;
      width: 200px;
    }
  }
  .card2 {
    background: #c8cbcc;
    opacity: 0.5;
    display: inline-block;
    height: 350px;
    margin: -2em;
    position: absolute;
    width: 300px;
    border-radius: 5px;

    @media (max-width: 768px) {
      height: 250px;
      margin: -1em;
      width: 200px;
    }
  }

  .img {
    position: relative;
    border-radius: 5px;
    align-self: center;
    height: 350px;
    width: 300px;

    @media (max-width: 768px) {
      height: 250px;

      width: 200px;
    }
  }
`;

const StyledAbout = styled.div`
  h1 {
    margin: 0 0 15px 4px;
    font-weight: 400;
    font-size: clamp(25px, 5vw, 45px);
    @media (max-width: 480px) {
      margin: 0 0 7px 2px;
    }

    .name {
      font-weight: 400;
      font-family: "Calistoga", cursive;
      letter-spacing: 3px;
      background: -webkit-linear-gradient(left, #3b82f6, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  p {
    margin: 20px 0;
    font-size: clamp(14px, 5vw, 20px);
  }
`;

const StyledTechList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;

  svg {
    color: #3b82f6;
    margin: 0 10px -5px 0;
  }

  h2 {
    display: flex;
    font-size: clamp(14px, 4vw, 20px);
    flex-wrao: no-wrap;
    margin: 15px 0px 0px;
    font-weight: 400;
  }
`;

const About = () => {
  const techKnown = [
    "Javascript",
    "Typescript",
    "React JS",
    "Node JS",
    "Redux/Context",
    "Jest/RTL Testing",
    "Next JS",
    "PostgreSQL",
  ];
  return (
    <StyledAboutSection id="about">
      <h1 className="heading">About Me</h1>
      <div className="innerContent">
        <StyledImg>
          <div className="card1"></div>
          <div className="card2"></div>
          <img className="img" src="/dravid.jpeg" alt="img" />
        </StyledImg>
        <StyledAbout>
          <h1 data-testid='header-element'>
            Hello! I'm <span className="name">Dravid</span>
          </h1>
          <p>
            Creative Front-End developer offering 3+ years of experience.
            Skilled in designing, developing and testing multiple web-based
            applications incorporating a range of technologies. Very passionate
            about aesthetics and UI development.
          </p>
          <p>Here are a few technologies I’ve been working with recently 👇</p>
          <StyledTechList>
            {techKnown.map((tech) => {
              return (
                <h2>
                  <CheckCircleIcon />
                  {tech}
                </h2>
              );
            })}
          </StyledTechList>
        </StyledAbout>
      </div>
    </StyledAboutSection>
  );
};

export default About;
