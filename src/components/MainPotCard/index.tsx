import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", maxWidth: 500 },
  logo: {
    height: 100,
  },
}));

const MainPotCard: React.FC = () => {
  const history = useHistory();
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
          <Grid
            container
            xs={12}
            spacing={4}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <Grid item xs={6}>
              <img src="/logo512.png" alt="dubu" className={classes.logo} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">DUBU POT</Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column" xs={6} spacing={1}>
            <Grid item>
              <Typography variant="caption">SSR Prize</Typography>
              <Typography>$1,132,512</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">Next Draw</Typography>
              <Typography>00d 23h 42m</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            xs={6}
            justifyContent="flex-end"
            spacing={1}
          >
            <Grid item>
              <Typography variant="caption">TVL</Typography>
              <Typography>$1,132,512</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">Participants</Typography>
              <Typography>1,132,512</Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={1}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                onClick={() => {
                  history.push("pot");
                }}
              >
                Let's DUBU
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">
                The odds for the winner are as follows: SSR 3%, SR 7%, R 15%
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MainPotCard;
