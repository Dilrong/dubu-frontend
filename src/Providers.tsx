import { Web3ReactProvider } from "@web3-react/core";
import { CircularProgress } from "@material-ui/core";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { SnackbarProvider } from "material-ui-snackbar-provider";
import { useMediaQuery } from "@material-ui/core";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "state";
import ModalProvider from "mui-modal-provider";

import { getLibrary } from "utils/web3React";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}));

const Providers: React.FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const persistor = persistStore(store);
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
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate
            loading={<CircularProgress className={classes.root} />}
            persistor={persistor}
          >
            <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
              <ModalProvider>{children}</ModalProvider>
            </SnackbarProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
