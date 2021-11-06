import React from "react";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../App/App";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import useStyles from "./Header.style";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface HeaderProps {
  mode: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ mode }) => {
  const styles = useStyles();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <AppBar component="header" position="static">
      <Toolbar>
        <Typography variant="h6" component="h1" className={styles.title}>
          Is-Even as a Service
        </Typography>
        <Button
          component={Link}
          variant="contained"
          color="primary"
          disableElevation
          to="/"
        >
          Home
        </Button>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
