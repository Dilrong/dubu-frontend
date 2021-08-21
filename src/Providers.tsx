import { Web3ReactProvider } from "@web3-react/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

import { getLibrary } from "./utils/web3React";

const Providers: React.FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
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
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
