import React from "react";
import { Dialog, DialogContent, Grid, DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import connectors from "../../config/wallet";
import WalletButton from "./WalletButton";
import { Login } from "./types";

const useStyles = makeStyles((theme) => ({
  wallet: {
    textAlign: "center",
  },
}));

interface Props {
  login: Login;
  open: boolean;
  handleClose: () => void;
}

const ConnectModal: React.FC<Props> = ({ login, open, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Connect Wallet</DialogTitle>
      <DialogContent>
        <Grid container alignItems="center" alignContent="center" spacing={2}>
          {connectors.map((data) => (
            <Grid item xs={6} className={classes.wallet}>
              <WalletButton login={login} walletConfig={data} />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectModal;
