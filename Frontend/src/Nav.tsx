import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ScienceIcon from "@mui/icons-material/Science";
import { UserSession } from "~/types/entities";
import { useState, useEffect } from "react";

const pages = ["Levels", "Wiki"];
const settings = ["Profile", "Logout"];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [userSession, setUserSession] = useState<UserSession | null>(null);

  useEffect(() => {
    // Retrieve currently logged in user
    const storedSession = localStorage.getItem("userSession");
    if (storedSession) {
      setUserSession(JSON.parse(storedSession) as UserSession);
    }
  }, []);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  const handleMenuClick = (setting: string) => {
    if (setting === "Logout") {
      handleLogout();
    } else if (setting === "Profile") {
      navigate("/profile");
    }
    handleCloseUserMenu();
  };

  return (
    <AppBar
      position="static"
      style={{ background: "linear-gradient(-1deg, lightgray, blue)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 5,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <ScienceIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                mt: 0.5,
              }}
            />
            AtomicIQ
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                href={`/${page}`}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ color: "white" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={userSession?.avatar}
                  sx={{ mr: 1.5 }}
                />
                {userSession?.username || "User"}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleMenuClick(setting)}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
