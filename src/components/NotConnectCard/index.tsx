import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", maxWidth: 500 },
  media: { height: 140 },
}));

const NotConnectCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          xs={12}
          spacing={2}
        >
          <img className={classes.media} src="/assets/pot.png" alt="Pot" />
          <Grid item>
            <Typography variant="h6">Connect Wallet</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Connect Wallet</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth={true}>
              Connect Wallet
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NotConnectCard;
