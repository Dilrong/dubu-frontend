import React, { useState } from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";

import Layout from "views/Layout";
import DepositPotCard from "components/DepositPotCard";
import { ethersToSerializedBigNumber } from "utils/bigNumber";
import { CAKE_POT_ADDRESS } from "config/abi/cakePot";
import { utils } from "ethers";
import { useCakePot, useCake } from "hooks/useContract";

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
  const cakePotContract = useCakePot();
  const cakeContract = useCake();

  const [season, setSeason] = useState("0");
  const [participant, setParticipant] = useState("0");
  const [tvl, setTvl] = useState("0");
  const [end, setEnd] = useState(false);
  const [amount, setAmount] = useState("0");

  const fetchPot = async () => {
    const season = ethersToSerializedBigNumber(
      await cakePotContract.currentSeason()
    );
    setSeason(season);
    const participant = ethersToSerializedBigNumber(
      await cakePotContract.userCounts(season)
    );
    setParticipant(participant);
    const tvl = ethersToSerializedBigNumber(
      await cakePotContract.totalAmounts(season)
    );
    setTvl(tvl);
    const end = await cakePotContract.checkEnd();
    setEnd(end);
  };

  const endPot = async () => {
    await cakePotContract.end();
  };

  const approvePot = async () => {
    await cakeContract.approve(CAKE_POT_ADDRESS, utils.parseEther(amount));
  };

  const enterPot = async () => {
    await cakeContract.enter(utils.parseEther(amount));
  };

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAmount(event.target.value);
  };

  return (
    <Layout>
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
                end={end}
                approve={async () => {
                  await cakeContract.approve(
                    CAKE_POT_ADDRESS,
                    utils.parseEther(amount)
                  );
                }}
                enter={enterPot}
                handleChange={handleChange}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Button
        onClick={() => {
          fetchPot();
        }}
        size="small"
      >
        Get-Contract
      </Button>
      <Button onClick={endPot} size="small">
        End POT
      </Button>
      <Button onClick={approvePot} size="small">
        APPROVE
      </Button>
    </Layout>
  );
};

export default Pot;
