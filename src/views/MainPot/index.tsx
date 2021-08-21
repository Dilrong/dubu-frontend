import React, { useState } from "react";
import TabPanel from "../../components/TabPanel";
import PotCard from "../../components/PotCard";

/** material-ui */
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
} from "@material-ui/core";
import CommunityPot from "../../components/CommunityPot";
import Layout from "../Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  const [tab, setTab] = useState(0);

  const handleChange = (_event: any, newValue: any) => {
    setTab(newValue);
  };

  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item>
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
        className={classes.root}
        spacing={2}
      >
        <Grid item xs={4}>
          <TabPanel value={tab} index={0}>
            <PotCard />
          </TabPanel>
        </Grid>
        <TabPanel value={tab} index={1}>
          <CommunityPot />
        </TabPanel>
      </Grid>
    </Layout>
  );
};

export default MainPot;
