import React, { useState } from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import Layout from "views/Layout";
import DepositPotCard from "components/DepositPotCard";
import { CAKE_POT_ADDRESS } from "config/abi/cakePot";
import { utils } from "ethers";
import { useCakePot, useCake } from "hooks/useContract";
import { useAppSelector, useFetchPotData } from "state/hooks";
import Progress from "components/Progress";

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
  const { t } = useTranslation("");
  const cakePotContract = useCakePot();
  const cakeContract = useCake();

  const [amount, setAmount] = useState("0");

  const isLoading = useAppSelector((state) => state.pots.potData.isLoading);
  const season = useAppSelector((state) => state.pots.potData.season);
  const participant = useAppSelector((state) => state.pots.potData.participant);
  const tvl = useAppSelector((state) => state.pots.potData.tvl);
  const end = useAppSelector((state) => state.pots.potData.potEnd);

  useFetchPotData();

  const endPot = async () => {
    await cakePotContract.end();
  };

  const approvePot = async () => {
    await cakeContract.approve(CAKE_POT_ADDRESS, utils.parseEther(amount));
  };

  const enterPot = async () => {
    await cakePotContract.enter(utils.parseEther(amount));
  };

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAmount(event.target.value);
  };

  if (isLoading) return <Progress />;

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
            {t("Deposit crypto, earn interest and a chance to win")}
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
