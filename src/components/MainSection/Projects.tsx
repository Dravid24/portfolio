import styled from "styled-components";
import {
  Box,
  Chip,
  Typography,
  IconButton,
  Tooltip,
  useTheme,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SearchIcon from "@mui/icons-material/Search";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

import { projectList } from "../../common";

const Section = styled.section`
  max-width: 1280px;
  margin: auto;
  padding-bottom: 80px;

  .heading {
    margin-bottom: 70px;

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
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
  }
`;

const Card = styled(Box)`
  border-radius: 16px;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
  }

  .header {
    padding: 20px;
    position: relative;
    height: 120px;
    display: flex;
    align-items: flex-end;
    font-weight: 600;
    font-size: 23px;
  }

  .actions {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 8px;
  }

  .content {
    padding: 20px;
  }

  .desc {
    font-size: 17px;
    margin-bottom: 15px;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const FadeIcon = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const getGradient = (index: number) => {
  // "linear-gradient(135deg, #689ff7, #3972eb)", // blue
  //   "linear-gradient(135deg, #14b8a6, #0d9488)", // teal
  //   "linear-gradient(135deg, #22c55e, #16a34a)", // green
  //   "linear-gradient(135deg, #f97316, #ea580c)", // orange
  //   "linear-gradient(135deg, #eab308, #ca8a04)", // yellow
  //   "linear-gradient(135deg, #ec4899, #db2777)", // pink
  const gradients = [
    "linear-gradient(135deg, #689ff7, #3972eb)", // blue
    "linear-gradient(135deg, #36c1b1, #239c92)", // teal
    "linear-gradient(135deg, #42c371, #2aa457)", // green
    "linear-gradient(135deg, #f78533, #e36725)", // orange
    "linear-gradient(135deg, #ebbd33, #c39126)", // yellow
    "linear-gradient(135deg, #eb69aa, #d94789)", // pink
  ];
  return gradients[index % gradients.length];
};

const getIcon = (title: string) => {
  if (title.toLowerCase().includes("chat"))
    return <ChatBubbleOutlineIcon sx={{ fontSize: 75, opacity: 0.2 }} />;
  if (title.toLowerCase().includes("github"))
    return <SearchIcon sx={{ fontSize: 75, opacity: 0.2 }} />;
  if (title.toLowerCase().includes("blog"))
    return <StickyNote2Icon sx={{ fontSize: 75, opacity: 0.2 }} />;
  if (title.toLowerCase().includes("weather"))
    return <CloudQueueIcon sx={{ fontSize: 75, opacity: 0.2 }} />;
  return <PlayArrowIcon sx={{ fontSize: 75, opacity: 0.2 }} />;
};

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const open = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Section id="projects">
      <div className="heading">
        <h1>
          Some Things I've&nbsp;<span>Built</span>
        </h1>
        {/* <p>
          Here are some of my personal projects that showcase my skills in
          building <br /> full-stack applications with modern technologies.
        </p> */}
      </div>

      <div className="grid">
        {projectList.map((project, index) => (
          <Card
            key={index}
            sx={{
              border: isDark ? "1px solid #1e293b" : "1px solid #E0E6EE",
              background: isDark
                ? "linear-gradient(135deg, #020617, #0f172a)"
                : "linear-gradient(135deg, #ececec, #Fafafa)",
            }}
          >
            {/* HEADER */}
            <div
              className="header"
              style={{
                background: getGradient(index),
                color: "#fff",
                height: "200px",
              }}
            >
              {/* Icons */}
              <div className="actions">
                <Tooltip title="GitHub">
                  <IconButton
                    size="small"
                    onClick={() => open(project.sourceLink)}
                    sx={{ color: "#fff" }}
                  >
                    <GitHubIcon fontSize="medium" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Live Demo">
                  <IconButton
                    size="small"
                    onClick={() => open(project.demoLink)}
                    sx={{ color: "#fff" }}
                  >
                    <OpenInNewIcon fontSize="medium" />
                  </IconButton>
                </Tooltip>
              </div>

              {/* Faded Icon */}
              <FadeIcon>{getIcon(project.title)}</FadeIcon>

              {/* Title */}
              {project.title}
            </div>

            {/* CONTENT */}
            <div className="content">
              <Typography
                className="desc"
                style={{ color: isDark ? "#94a3b8" : "#696969" }}
              >
                {project.description}
              </Typography>

              {/* Tech */}
              <div className="chips">
                {project.tech.map((tech) => (
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
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* View More Button */}
      <Box textAlign="center" mt={5}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => window.open("https://github.com/Dravid24", "_blank")}
          sx={{ textTransform: "none" }}
          startIcon={<GitHubIcon />}
        >
          View More on GitHub
        </Button>
      </Box>
    </Section>
  );
};

export default Projects;
