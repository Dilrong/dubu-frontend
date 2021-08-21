import React from "react";
import IoPotCard from "../../components/IoPotCard";

/** material-ui */
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../Layout";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Pot: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item className={classes.header}>
          <Typography variant="h5">
            Deposit POTS, earn 192.28% APY
            <br />
            and a chance to win $771,323
          </Typography>
        </Grid>
        <Grid item>
          <IoPotCard />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Pot;
