import styled from "styled-components";
import { useTheme, Stack, Chip } from "@mui/material";

const StyledExpSection = styled.section`
  max-width: 1080px;
  margin-bottom: 50px;
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

  .exp-length {
    background: #3b82f6;
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-top: 8px;

    &:after {
      content: "";
      display: block;
      width: 2px;
      height: 185px;
      background: #3b82f6;
      margin: 20px 0 0 9px;
      @media (max-width: 1080px) {
        height: 185px;
      }
      @media (max-width: 768px) {
        height: 190px;
      }
      @media (max-width: 600px) {
        height: 200px;
      }
      @media (max-width: 450px) {
        height: 250px;
      }
    }
  }
`;

const StyledExperience = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 0px 10px;
  margin-bottom: 5rem;

  h1 {
    font-weight: 400;
    font-size: clamp(20px, 3vw, 30px);
    font-weight: bold;
  }
  h2 {
    margin: 0 0 15px 4px;
    font-weight: 400;

    font-size: clamp(14px, 4vw, 20px);
    @media (max-width: 480px) {
      margin: 0 0 7px 2px;
    }
  }
  p {
    max-width: 800px;
    margin-bottom: 10px;
  }
  .tag {
    margin: 4px;
  }
`;

const infosysTech = [
  "React Js",
  "Bootstrap",
  "Node Js",
  "PostgreSQL",
  "Jest/RTL",
];

const kloudOneTech = ["React Js", "Ant Design", "Gatsby", "Keycloak"];

const Experience = () => {
  const theme = useTheme();
  return (
    <StyledExpSection id="experience">
      <h1 className="heading">Where I’ve Worked</h1>
      <StyledExperience>
        <div className="exp-length"></div>
        <div>
          <h1>Associate Consultant</h1>
          <h2
            style={{
              color: theme.palette.mode === "dark" ? "#c7c7c7" : "#696969",
            }}
          >
            Infosys (Mar-2022 -Present)
          </h2>
          <p>
            Collaborated with the development team to develop a responsive web
            application using React Js and Bootstrap. Contributed significantly
            by implementing unit testcases using Jest/RTL for ensuring code
            reliability.
          </p>
          <p>
            Developed REST API and configured a cron job in NodeJs to automate
            the periodic synchorization of data.
          </p>
          <Stack direction="row" spacing={1} style={{ flexWrap: "wrap" }}>
            {infosysTech.map((tech) => (
              <Chip label={tech} color="primary" size="small" className="tag" />
            ))}
          </Stack>
        </div>
      </StyledExperience>
      <StyledExperience>
        <div className="exp-length"></div>
        <div>
          <h1>Software developer UX </h1>
          <h2
            style={{
              color: theme.palette.mode === "dark" ? "#c7c7c7" : "#696969",
            }}
          >
            Kloudone technology (Oct 2020 - Mar 2022)
          </h2>
          <p>
            Developed and maintained code for in-house Learning Management
            system product (KloudLearn) with technologies including ReactJs and
            AntDesign.
          </p>
          <p>
            Manually tested sites in various browsers and mobile devices to
            ensure cross-browser compatibility and responsiveness.
          </p>
          <Stack direction="row" spacing={1} style={{ flexWrap: "wrap" }}>
            {kloudOneTech.map((tech) => (
              <Chip label={tech} color="primary" size="small" className="tag" />
            ))}
          </Stack>
        </div>
      </StyledExperience>
    </StyledExpSection>
  );
};

export default Experience;
