import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Switch,
  Tooltip,
  useTheme,
  Divider,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navLinks } from "../common";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const Brand = styled.img`
  width: 50px;
  height: auto;
  transform: translateY(3px);
  &:hover {
    transform: translateY(0px);
    transition: all 0.4s;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  div {
    margin: auto 0;
  }

  a {
    width: 42px;
    height: 42px;
    margin: 5px 15px;
    color: ${(props) => (props.className === "dark" ? "white" : "black")};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      transform: translateY(-3px);
      background: -webkit-linear-gradient(left, #3b82f6, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const StyledDrawerLink = styled.div`
  a {
    color: ${(props) => (props.className === "dark" ? "white" : "black")};
    text-decoration: none;
    font-weight: bold;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledProgress = styled.span`
  background: -webkit-linear-gradient(left, #3b82f6, #2dd4bf);
  height: 3px;
`;

type NavbarProps = {
  handleTheme: () => void;
};

const Navbar = ({ handleTheme }: NavbarProps) => {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  const MaterialUISwitch = styled(Switch)({
    width: 62,
    height: 34,
    marginLeft: 25,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: dark ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: dark ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: dark ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const [switchDark, setSwitchDark] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onScroll = () => {
    const windowScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (windowScroll / height) * 100;

    setProgress(scrolled);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navLinks.map((item, i) => (
          <StyledDrawerLink className={theme.palette.mode}>
            <Link to={item.url} smooth>
              <ListItem key={i} disablePadding>
                <ListItemButton sx={{ textAlign: "left" }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
          </StyledDrawerLink>
        ))}
        <FormGroup style={{ margin: "20px 10px" }}>
          <FormControlLabel
            control={
              <MaterialUISwitch
                sx={{ m: 1 }}
                checked={switchDark}
                onChange={() => {
                  setSwitchDark(!switchDark);
                  handleTheme();
                }}
              />
            }
            label={`Switch ${dark ? "light" : "dark"} theme`}
          />
        </FormGroup>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar color="inherit" style={{ background: dark ? "black" : "white" }}>
        <Toolbar>
          <StyledHeader>
            <Link to="#home" smooth>
              <Brand src="./logo.png" alt="logo" />
            </Link>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <StyledLinks className={theme.palette.mode}>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <div key={i}>
                      <Link to={url} smooth>
                        {name}
                      </Link>
                    </div>
                  ))}
                <Tooltip title={`Switch to ${dark ? "light" : "dark"} theme`} placement="bottom">
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    checked={switchDark}
                    onChange={() => {
                      setSwitchDark(!switchDark);
                      handleTheme();
                    }}
                  />
                </Tooltip>
              </StyledLinks>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
              style={{ marginLeft: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          </StyledHeader>
        </Toolbar>
        <StyledProgress style={{ width: `${progress}%` }}></StyledProgress>
      </AppBar>
      <Box>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
