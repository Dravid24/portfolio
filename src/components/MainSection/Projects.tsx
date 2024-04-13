import styled from "styled-components";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { projectList } from "../../common";

const StyledProjectsWrapper = styled.div`
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

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    position: relative;
    margin-top: 50px;
    list-style-type: none;
    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
  }

  .description {
    display: -webkit-box;

    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .tag {
    margin-left: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    p {
      margin: 5px 15px 5px 0px;
      font-weight: bold;
      background: -webkit-linear-gradient(left, #3b82f6, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .project-action {
    padding: 0px 16px;
    justify-content: end;

    div {
      margin: 0px;
    }
    svg {
      margin: 10px;
      cursor: pointer;

      &:hover {
        color: #3b82f6;
      }
    }

    a {
      margin: 0px;
    }
  }
`;
const Projects = () => {
  const theme = useTheme();

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <StyledProjectsWrapper id="projects">
      <h1 className="heading">Some Things I’ve Built</h1>
      <ul className="projects-grid">
        {projectList?.map((project, i) => (
          <StyledProject key={i}>
            <Card
              sx={{ maxWidth: 300 }}
              style={{
                background:
                  theme.palette.mode === "dark" ? "#112240" : "#fcfcfc",
              }}
            >
              <CardActionArea style={{ cursor: "default" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={project.coverImg}
                  alt={project.title}
                  className="card-img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Tooltip title={project.description} placement="top">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="description"
                    >
                      {project.description}
                    </Typography>
                  </Tooltip>
                </CardContent>
                <div className="tag">
                  {project?.tech.map((tech) => {
                    return <p>{tech}</p>;
                  })}
                </div>
              </CardActionArea>
              <CardActions className="project-action">
                <Tooltip title="Github" placement="top">
                  <div onClick={() => openInNewTab(project.sourceLink)}>
                    <GitHubIcon />
                  </div>
                </Tooltip>
                <Tooltip title="Demo" placement="top">
                  <div onClick={() => openInNewTab(project.demoLink)}>
                    <OndemandVideoIcon />
                  </div>
                </Tooltip>
              </CardActions>
            </Card>
          </StyledProject>
        ))}
      </ul>
    </StyledProjectsWrapper>
  );
};

export default Projects;
