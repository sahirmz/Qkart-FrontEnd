import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory} from "react-router-dom";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  // const location = useLocation();

  const handleExploreClick = () => {
    history.push("/");
  };

  const handleLoginClick = () => {
    // Logic for handling the login button click
    // Redirect to the login page
    history.push("/login");
  };

  const handleRegisterClick = () => {
    // Logic for handling the register button click
    // Redirect to the register page
    history.push("/register");
  };

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("balance");
    history.push("/");

    window.location.reload();
  };

  // const isLoginOrRegisterPage =
  //   location.pathname.includes("/login") ||
  //   location.pathname.includes("/register");

  if (hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
          <Link to="/">
            <img src="logo_light.svg" alt="Qkart-icon"></img>
          </Link>
        </Box>
        {children}
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={handleExploreClick}
        >
          Back to explore
        </Button>
      </Box>
    );
  }

  return (
    <Box className="header">
      <Box className="header-title">
        <Link to="/">
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Link>
      </Box>
      {children}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        class="user-info-container"
      >
        {localStorage.getItem("username") ? (
          <>
            <Avatar
              src="avatar.png"
              alt={localStorage.getItem("username") || "profile"}
            />

            <p className="username-text">{localStorage.getItem("username")}</p>
            <Button type="primary" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button onClick={handleLoginClick}>Login</Button>

            <Button variant="contained" onClick={handleRegisterClick}>
              Register
            </Button>
          </>
        )}
      </Stack>
      {/* {isLoginOrRegisterPage && (
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={handleExploreClick}
        >
          Back to explore
        </Button>
      )}

      {!isLoginOrRegisterPage && (
        <div className="auth-buttons">
          <Button
            className="auth-button"
            variant="text"
            onClick={handleLoginClick}
          >
            Login
          </Button>
          <Button
            className="auth-button"
            variant="text"
            onClick={handleRegisterClick}
          >
            Register
          </Button>
        </div>
      )} */}
    </Box>
  );
};

export default Header;
