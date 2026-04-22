import styled from "styled-components";
import { useTheme, Stack, Chip } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const StyledExpSection = styled.section`
  max-width: 1280px;
  margin-bottom: 50px;

  .heading {
    display: flex;
    align-items: center;
    padding: 70px 0 80px;
    font-size: clamp(26px, 5vw, 36px);
    white-space: nowrap;

    span {
      background: -webkit-linear-gradient(left, #3b82f6, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      margin-left: 20px;
      background: #969493;
    }
  }

  .exp-length {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;

    .icon {
      background: #3b82f6;
      padding: 6px;
      border-radius: 50%;
      display: flex;
      z-index: 2;
    }

    .line {
      width: 2px;
      height: 100%;
      background: #3b82f6;
      margin-top: 5px;
      flex-grow: 1;
      min-height: 180px; /* ensures last item line also visible */
    }
  }
`;

const StyledExperience = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 0px 10px;
  margin-bottom: 5rem;

  h1 {
    font-size: clamp(20px, 3vw, 30px);
    font-weight: bold;
  }

  h2 {
    margin: 0 0 10px 4px;
    font-size: clamp(14px, 4vw, 18px);
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 6px;
  }

  .tag {
    margin: 4px;
  }

  .bullet {
    color: #2dd4bf;
    margin-right: 6px;
  }
`;

const experiences = [
  {
    company: "Accenture",
    role: "Packaged App Development Analyst",
    location: "Chennai, Tamilnadu",
    period: "September 2024 - Present",
    description: [
      "Collaborating across multiple cross-functional teams to modernize and stabilize micro-frontend based architecture",
      "Migration from React 16 to React 18.2, ensuring performance improvements and backward compatibility",
      "Migrated legacy class-based components to functional components using React Hooks across 32 repositories",
      "Converted unit tests from Enzyme to Jest and React Testing Library (RTL)",
      "Introduced unit test coverage from 0%, writing test cases to meet SonarQube quality gate (60% coverage)",
    ],
    techStack: [
      "ReactJS",
      "TypeScript",
      "PostgreSQL",
      "MaterialUI",
      "Jest",
      "RTL",
    ],
  },
  {
    company: "Infosys Limited",
    role: "Associate Consultant",
    location: "Chennai, Tamilnadu",
    period: "March 2022 - September 2024",
    description: [
      "Developed frontend applications using React.js and TypeScript with Bootstrap and MaterialUI",
      "Implemented unit testing with React Testing Library (RTL) and Jest to ensure code quality",
      "Conducted code analysis using SonarQube, improving code coverage up to 85%",
      "Built RESTful APIs with Node.js for seamless data interaction",
      "Managed database operations with PostgreSQL using Knex and Objection.js",
    ],
    techStack: [
      "ReactJS",
      "NodeJS",
      "TypeScript",
      "PostgreSQL",
      "MaterialUI",
      "Jest",
    ],
  },
  {
    company: "Kloudone Pvt Ltd",
    role: "Software Developer",
    location: "Chennai, Tamilnadu",
    period: "October 2020 - March 2022",
    description: [
      "Developed and maintained web applications using React.js, JavaScript, and Ant Design",
      "Built feature assessment summary with quiz creation, grading, and custom reports on training metrics",
      "Implemented Single Sign-On (SSO) using Keycloak for secure authentication",
      "Created easy access, customized and automated reporting systems",
    ],
    techStack: ["ReactJS", "JavaScript", "Ant Design", "Keycloak", "Figma"],
  },
];

const Experience = () => {
  const theme = useTheme();

  return (
    <StyledExpSection id="experience">
      <h1 className="heading">
        Where I’ve &nbsp; <span>Worked</span>
      </h1>

      {experiences.map((exp, index) => (
        <StyledExperience key={index}>
          <div className="exp-length">
            <div className="icon">
              <BusinessIcon style={{ color: "#fff", fontSize: 16 }} />
            </div>
            <div className="line"></div>
          </div>

          <div>
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "23px",
                  fontWeight: 600,
                }}
              >
                {exp.company}
              </h2>

              <div
                style={{
                  color: "#3b82f6",
                  fontSize: "19px",
                  fontWeight: 500,
                  marginTop: "2px",
                }}
              >
                {exp.role}
              </div>
            </div>

            {/* Calendar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                margin: "10px 0",
                color: theme.palette.mode === "dark" ? "#94a3b8" : "#6b7280",
                fontSize: "18px",
              }}
              data-aos="flip-up"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <CalendarMonthIcon fontSize="small" />
                <span>{exp.period}</span>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <LocationOnIcon fontSize="small" />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Description */}
            {exp.description.map((point, i) => (
              <p key={i} data-aos="fade-up">
                <span className="bullet">▸</span>
                {point}
              </p>
            ))}

            {/* Tech */}
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {exp.techStack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  color="primary"
                  className="tag"
                />
              ))}
            </Stack>
          </div>
        </StyledExperience>
      ))}
    </StyledExpSection>
  );
};

export default Experience;
