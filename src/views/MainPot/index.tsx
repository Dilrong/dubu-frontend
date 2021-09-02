import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";
import { Helmet } from "react-helmet";
import TabPanel from "components/TabPanel";
import PotCard from "components/MainPotCard";
import CommunityPot from "components/CommunityPot";
import Layout from "views/Layout";
import { ethersToSerializedBigNumber } from "utils/bigNumber";
import { useCakePot } from "hooks/useContract";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  headerText: {
    margin: theme.spacing(2),
  },
  card: {
    maxWidth: 500,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "baseline",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  tab: {
    marginBottom: theme.spacing(2),
  },
}));

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const MainPot: React.FC = () => {
  const classes = useStyles();
  const cakePotContract = useCakePot();
  const [tab, setTab] = useState(0);

  const [season, setSeason] = useState("0");
  const [participant, setParticipant] = useState("0");
  const [tvl, setTvl] = useState("0");
  const [end, setEnd] = useState(false);

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

  const handleChange = (_event: any, newValue: any) => {
    setTab(newValue);
  };

  return (
    <Layout>
      <Helmet>
        <title>Home</title>
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
        <Grid item>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="body2">TOTAL DEPOSITS (TVL)</Typography>
              <Typography color="primary" variant="h4">
                $68,566,995
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Tabs
            variant="fullWidth"
            value={tab}
            onChange={handleChange}
            className={classes.tab}
          >
            <Tab label="Main Pots" {...a11yProps(0)} />
            <Tab label="Community Pots" {...a11yProps(1)} />
          </Tabs>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        className={classes.container}
        spacing={2}
      >
        <Grid item xs={12} sm={4}>
          <TabPanel value={tab} index={0}>
            <PotCard
              season={season}
              participant={participant}
              tvl={tvl}
              end={end}
            />
          </TabPanel>
        </Grid>
        <TabPanel value={tab} index={1}>
          <CommunityPot />
        </TabPanel>
      </Grid>
      <Button
        onClick={() => {
          fetchPot();
        }}
        size="small"
      >
        Get-Contract
      </Button>
    </Layout>
  );
};

export default MainPot;
