import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UseWalletProvider } from "@binance-chain/bsc-use-wallet";
import getLibrary from "./utils/getLibrary";
import MainPot from "./views/MainPot";
import MyPot from "./views/MyPot";
import Pot from "./views/Pot";
import NotFound from "./views/NotFound";
import Header from "./components/Header";

/** material-ui */
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { CssBaseline, Container, useMediaQuery } from "@material-ui/core";
import SocialIcons from "./components/SocialIcons";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", padding: theme.spacing(8, 0, 6) },
}));

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const classes = useStyles();

  const theme = createTheme(
    {
      palette: {
        type: "light",
        primary: {
          light: "#735858",
          main: "#371110",
          dark: "#2a0c0c",
        },
        secondary: {
          light: "#dae6f0",
          main: "#cadbe9",
          dark: "#bdd2e3",
        },
        background: {
          default: "#fff",
        },
      },
      typography: {
        fontFamily: ["Ubuntu"].join(","),
      },
    },
    [prefersDarkMode]
  );

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <UseWalletProvider
        chainId={56}
        connectors={{
          walletconnect: { rpcUrl: "https://bsc-dataseed.binance.org/" },
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Container className={classes.root} component="main">
            <Router basename="/index.html">
              <Switch>
                <Route exact path="/" component={MainPot} />
                <Route path="/my-dubupots" component={MyPot} />
                <Route path="/pot" component={Pot} />

                <Route path={"*"} component={NotFound} />
              </Switch>
            </Router>
          </Container>
          <SocialIcons />
        </ThemeProvider>
      </UseWalletProvider>
    </Web3ReactProvider>
  );
};

export default App;
