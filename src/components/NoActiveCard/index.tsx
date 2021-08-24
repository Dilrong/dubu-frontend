import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", maxWidth: 500 },
  media: { height: 140 },
}));

const NoActiveCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          spacing={3}
        >
          <Grid item>
            <img className={classes.media} src="/assets/pot.png" alt="Pot" />
          </Grid>
          <Grid item>
            <Typography variant="h6">Play with Dubupot</Typography>
          </Grid>
          <Grid item>
            <Typography style={{ textAlign: "center" }}>
              You haven't entered any Moonpots yet.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth={true}>
              Let's Dubu
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NoActiveCard;
