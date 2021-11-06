import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { store } from "../../store";
import useStyles from "./App.style";
import createTheme from "../../config/Theme";
import Routes from "../../config/Routes";
import Header from "../Header";
import HomePage from "../../pages/HomePage";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

type Props = {
  mode: string;
};

const App: React.FunctionComponent<Props> = ({ mode }) => {
  const styles = useStyles();

  return (
    <Provider store={store}>
      <Router>
        <div className={styles.root}>
          <Header mode={mode} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={Routes} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

const AppWithTheme = () => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App mode={mode} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppWithTheme;
