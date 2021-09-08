import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Grid, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", maxWidth: 500 },
  media: { height: 140 },
}));

const NotConnectCard: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("");

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
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography variant="h6">{t("Connect Wallet")}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              {t("To use Dubu Pot, you need to connect your wallet.")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth={true}>
              {t("Connect Wallet")}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NotConnectCard;
