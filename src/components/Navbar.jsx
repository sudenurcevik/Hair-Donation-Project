import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/Asset 23.png";
import { styled } from "@mui/material/styles";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "green",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const LogoWrapper = styled("a")({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
});

const LogoImage = styled("img")({
  height: "40px",
  marginRight: "10px",
  color: "green"
});

const Navbar = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <LogoWrapper href="/">
          <LogoImage src={logo} alt="Logo" />
        </LogoWrapper>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
