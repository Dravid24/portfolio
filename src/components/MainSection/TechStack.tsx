import styled from "styled-components";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PaletteIcon from "@mui/icons-material/Palette";
import StorageIcon from "@mui/icons-material/Storage";
import BugReportIcon from "@mui/icons-material/BugReport";
import BuildIcon from "@mui/icons-material/Build";
import HtmlIcon from "@mui/icons-material/Html";

const Section = styled.section`
  max-width: 1280px;
  margin: auto;
  padding: 80px 0;

  .heading {
    margin-bottom: 50px;

    h1 {
      display: flex;
      align-items: center;
      font-size: clamp(26px, 5vw, 36px);
      white-space: nowrap;
      span {
        background: linear-gradient(to right, #3b82f6, #2dd4bf);
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

    p {
      font-size: clamp(13px, 5vw, 20px);
      margin-top: 10px;
      color: #94a3b8;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
`;

const Card = styled(Box)`
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #1e293b;
  background: linear-gradient(135deg, #020617, #0f172a);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }

  .icon {
    padding: 8px;
    border-radius: 10px;
    display: flex;
  }
`;

const techData = [
  {
    title: "Frontend Frameworks",
    icon: <CodeIcon />,
    color: "#3b82f6",
    tech: ["React.js", "Redux", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    title: "Styling & UI",
    icon: <PaletteIcon />,
    color: "#14b8a6",
    tech: [
      "TailwindCSS",
      "Material UI",
      "Ant Design",
      "Chakra UI",
      "Bootstrap",
      "SCSS",
    ],
  },
  {
    title: "Markup & Structure",
    icon: <HtmlIcon />,
    color: "#f97316",
    tech: ["HTML5", "CSS3", "Responsive Design", "Accessibility"],
  },
  {
    title: "Backend & Database",
    icon: <StorageIcon />,
    color: "#22c55e",
    tech: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Testing & Quality",
    icon: <BugReportIcon />,
    color: "#ec4899",
    tech: ["Jest", "React Testing Library", "SonarQube", "Unit Testing"],
  },
  {
    title: "Tools & Workflow",
    icon: <BuildIcon />,
    color: "#eab308",
    tech: ["Git", "GitHub", "Bitbucket", "VS Code", "Jira", "Postman", "Figma"],
  },
];

const TechStack = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Section id="tech">
      <div className="heading">
        <h1>
          My&nbsp;<span>Tech Stack</span>
        </h1>
        <p>Technologies and tools I use to bring ideas to life</p>
      </div>

      <div className="grid">
        {techData.map((item, index) => (
          <Card
            key={index}
            sx={{
              border: isDark ? "1px solid #1e293b" : "1px solid #E0E6EE",
              background: isDark
                ? "linear-gradient(135deg, #020617, #0f172a)"
                : "linear-gradient(135deg, #ececec, #Fafafa)",
            }}
          >
            {/* Title */}
            <div className="title">
              <div
                className="icon"
                style={{
                  background: `${item.color}20`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>

              <Typography fontWeight="600">{item.title}</Typography>
            </div>

            {/* Tech Chips */}
            <Box display="flex" flexWrap="wrap" gap="10px">
              {item.tech.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    background: isDark ? "#020617" : "#e2e8f0",
                    color: isDark ? "#cbd5f5" : "#1e293b",
                    borderRadius: "8px",
                  }}
                />
              ))}
            </Box>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
