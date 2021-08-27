import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useWeb3React } from "@web3-react/core";
import { Helmet } from "react-helmet";

import Layout from "views/Layout";
import DepositPotCard from "components/DepositPotCard";
import { ethersToSerializedBigNumber } from "utils/bigNumber";
import { getCakePotContract } from "utils/contractHelpers";

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
  const { account } = useWeb3React();
  const cakePotContract = getCakePotContract();

  const [season, setSeason] = useState("0");
  const [participant, setParticipant] = useState("0");
  const [tvl, setTVL] = useState("0");

  useEffect(() => {
    async function setCakePotData() {
      const _season = ethersToSerializedBigNumber(
        await cakePotContract.currentSeason()
      );
      const _participant = ethersToSerializedBigNumber(
        await cakePotContract.userCounts(season)
      );
      const _tvl = ethersToSerializedBigNumber(
        await cakePotContract.totalAmounts(season)
      );

      setSeason(_season);
      setParticipant(_participant);
      setTVL(_tvl);
    }

    setCakePotData();
  }, [season, participant, tvl, cakePotContract]);

  return (
    <Layout>
      {console.log(account)}
      <Helmet>
        <title>Pot</title>
      </Helmet>
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
              <DepositPotCard
                season={season}
                participant={participant}
                tvl={tvl}
                end={false}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Pot;
