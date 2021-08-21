import { AppBar, Toolbar, Link, Button } from "@material-ui/core";
import { useWallet } from "@binance-chain/bsc-use-wallet";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {},
  logo: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  connected: {
    margin: theme.spacing(1, 1.5),
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: 122,
  },
}));

const Header = () => {
  const wallet = useWallet();
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={1}
      className={classes.appBar}
    >
      <Toolbar>
        <div className={classes.logo}>
          <a href="/">
            <img src="/assets/logo.png" alt="Logo" />
          </a>
        </div>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            href="/"
            className={classes.link}
          >
            DubuPot
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="/my-dubupots"
            className={classes.link}
          >
            My Pots
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="https://dubu-finance.gitbook.io/dubu-finance/"
            className={classes.link}
          >
            Docs
          </Link>
          {
            // TODO 상태값이 error?
            console.log(wallet.status)
          }
          {wallet.status === "connected" ? (
            <Button
              variant="outlined"
              color="primary"
              className={classes.connected}
              onClick={() => {
                wallet.reset();
              }}
            >
              {wallet.account}
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              className={classes.link}
              onClick={() => {
                wallet.connect("injected");
              }}
            >
              Connect Wallet
            </Button>
          )}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
