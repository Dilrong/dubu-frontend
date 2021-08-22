import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
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
    textDecoration: "none",
    color: "gray",
    fontWeight: "bold",
    "&:hover": {
      color: "#735858",
    },
  },
  selected: {
    color: "#371110",
    fontWeight: "bold",
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
            <NavLink to="/">
              <img src="/assets/logo.png" alt="Logo" />
            </NavLink>
          </div>
          <nav>
            <NavLink
              to="/"
              exact
              activeClassName={classes.selected}
              className={classes.link}
            >
              DubuPot
            </NavLink>
            <NavLink
              to="/my-dubupots"
              exact
              activeClassName={classes.selected}
              className={classes.link}
            >
              My Pots
            </NavLink>
            <a
              href="https://dubu-finance.gitbook.io/dubu-finance/"
              className={classes.link}
            >
              Docs
            </a>
            {account === undefined ? (
              <Button variant="outlined" color="primary" onClick={handleOpen}>
                Connect Wallet
              </Button>
            ) : (
              <Button variant="outlined" color="primary" onClick={logout}>
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
