import React from "react";
import DepositPotCard from "../../components/DepositPotCard";

/** material-ui */
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../Layout";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  headerText: {
    margin: theme.spacing(2),
  },
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
        spacing={3}
      >
        <Grid item className={classes.headerText}>
          <Typography variant="h5">
            Deposit crypto, earn interest and a chance to win $531,900
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          spacing={2}
          className={classes.container}
        >
          <Grid item xs={12} sm={4}>
            <Box p={3}>
              <DepositPotCard />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Pot;
