import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { connectorLocalStorageKey } from "../../config/constants/wallet";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
}

const WalletButton: React.FC<Props> = ({ login, walletConfig }) => {
  return (
    <Button
      fullWidth={true}
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem!(
          connectorLocalStorageKey,
          walletConfig.connectorId
        );
      }}
    >
      <div>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <img
              src={walletConfig.logo}
              alt={walletConfig.title}
              style={{ width: 75, height: 75 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption">{walletConfig.title}</Typography>
          </Grid>
        </Grid>
      </div>
    </Button>
  );
};

export default WalletButton;
