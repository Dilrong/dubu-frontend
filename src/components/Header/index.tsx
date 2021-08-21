import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { AppBar, Toolbar, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import truncateWalletAddress from "../../utils/truncateWalletAddress";
import useAuth from "../../hooks/useAuth";
import ConnectModal from "../WalletModal/ConnectModal";

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
  },
}));

const Header = () => {
  const classes = useStyles();
  const { login, logout } = useAuth();
  const { account } = useWeb3React();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(account);
  }, [account]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
            {account === undefined ? (
              <Button
                variant="outlined"
                color="primary"
                className={classes.link}
                onClick={handleOpen}
              >
                Connect Wallet
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                className={classes.link}
                onClick={logout}
              >
                {truncateWalletAddress(account!)}
              </Button>
            )}
          </nav>
        </Toolbar>
      </AppBar>
      <ConnectModal login={login} open={open} handleClose={handleClose} />
    </div>
  );
};

export default Header;
