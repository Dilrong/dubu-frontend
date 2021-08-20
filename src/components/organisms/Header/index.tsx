import { AppBar, Toolbar, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {},
  logo: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Header = () => {
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
          <Button variant="outlined" color="primary" className={classes.link}>
            Connect Wallet
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
