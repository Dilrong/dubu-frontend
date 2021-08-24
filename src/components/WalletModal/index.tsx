import React from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  DialogTitle,
  Button,
  Typography,
} from "@material-ui/core";
import { DialogProps } from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import connectors from "../../config/constants/wallet";
import { connectorLocalStorageKey } from "../../config/constants/wallet";
import { Login } from "./types";

const useStyles = makeStyles((theme) => ({
  wallet: {
    textAlign: "center",
  },
}));

type Props = DialogProps & {
  login: Login;
  onClose: () => void;
};

const WalletModal: React.FC<Props> = ({ login, onClose, ...props }) => {
  const classes = useStyles();

  return (
    <Dialog {...props}>
      <DialogTitle>Connect Wallet</DialogTitle>
      <DialogContent>
        <Grid container alignItems="center" alignContent="center" spacing={2}>
          {connectors.map((data, index) => (
            <Grid item xs={6} className={classes.wallet} key={index}>
              <Button
                fullWidth={true}
                onClick={() => {
                  login(data.connectorId);
                  window.localStorage.setItem!(
                    connectorLocalStorageKey,
                    data.connectorId
                  );
                  onClose();
                }}
              >
                <div>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <img
                        src={data.logo}
                        alt={data.title}
                        style={{ width: 75, height: 75 }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">{data.title}</Typography>
                    </Grid>
                  </Grid>
                </div>
              </Button>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;
