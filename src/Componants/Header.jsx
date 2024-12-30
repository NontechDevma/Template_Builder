import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import { useState } from "react";
import { Home, School, CrisisAlertRounded, Article } from "@mui/icons-material";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        background: "#fff",
        zIndex: "100",
        padding: "12px",
      }}
    >
      <Box sx={{ paddingBottom: "8px", paddingTop: "8px", marginLeft: "5%" }} width="25%">
        <NavLink to="/">
          <img src={logo} alt="web-logo" height={50} />
        </NavLink>
      </Box>
      <IconButton
        sx={{
          display: { md: "none" }, // Hide on medium and larger screens
          marginLeft: "auto",
        }}
        onClick={handleMobileMenuOpen}
      >
        <MenuIcon />
      </IconButton>
      <Box
        display={{ xs: "none", md: "flex" }} // Hide on extra-small screens
        justifyContent="center"
        flexWrap="wrap"
        width="70%"
      >
        <NavLink
          className="navlink"
          to="/"
          style={{
            textDecoration: "none",
            marginLeft: "2rem",
            fontSize: "16px",
          }}
          // activeStyle={{ color: "pink" }}
        >
          Home
        </NavLink>
        <NavLink
          className="navlink"
          to="/resume-maker"
          style={{
            textDecoration: "none",
            marginLeft: "2rem",
            fontSize: "16px",
          }}
        >
          Resume Template
        </NavLink>
        <NavLink
          className="navlink"
          to="/biodata-maker"
          style={{
            textDecoration: "none",
            marginLeft: "2rem",
            fontSize: "16px",
          }}
        >
          Biodata Template
        </NavLink>
        <NavLink
          className="navlink"
          to="/college-template-maker"
          style={{
            textDecoration: "none",
            marginLeft: "2rem",
            fontSize: "16px",
          }}
        >
          College Template
        </NavLink>
        <NavLink
          className="navlink"
          to="/school-template-maker"
          style={{
            textDecoration: "none",
            marginLeft: "2rem",
            fontSize: "16px",
          }}
        >
          School Template
        </NavLink>
      </Box>
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <Box sx={{ width: 250 }}>
          <IconButton
            sx={{ marginLeft: "auto" }}
            onClick={handleMobileMenuClose}
          >
            <CloseIcon />
          </IconButton>
          <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <List>
              <ListItem disablePadding onClick={() => setMobileMenuOpen(false)}>
                <ListItemIcon>
                  <Home color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <NavLink
                    className="navlink"
                    to="/"
                    style={{
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                  >
                    Home
                  </NavLink>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding onClick={() => setMobileMenuOpen(false)}>
                <ListItemIcon>
                  <CrisisAlertRounded color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <NavLink
                    className="navlink"
                    to="/resume-maker"
                    style={{
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                  >
                    Resume Template
                  </NavLink>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding onClick={() => setMobileMenuOpen(false)}>
                <ListItemIcon>
                  <School color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <NavLink
                    className="navlink"
                    to="/biodata-maker"
                    style={{
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                  >
                    Biodata Template
                  </NavLink>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding onClick={() => setMobileMenuOpen(false)}>
                <ListItemIcon>
                  <Article color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <NavLink
                    className="navlink"
                    to="/school-template-maker"
                    style={{
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                  >
                    School Template
                  </NavLink>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding onClick={() => setMobileMenuOpen(false)}>
                <ListItemIcon>
                  <Article color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <NavLink
                    className="navlink"
                    to="/college-template-maker"
                    style={{
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                  >
                    College Template
                  </NavLink>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
