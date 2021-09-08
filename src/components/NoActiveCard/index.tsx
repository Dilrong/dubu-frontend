import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Grid, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", maxWidth: 500 },
  media: { height: 140 },
}));

const NoActiveCard: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const { t } = useTranslation("");

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          spacing={2}
        >
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            xs={12}
          >
            <img className={classes.media} src="/assets/pot.png" alt="Pot" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              {t("Play with Dubupot")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ textAlign: "center" }}>
              {t("You haven't entered any Dubupots yet.")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth={true}
              onClick={() => {
                history.push("pot");
              }}
            >
              {t("Let's DUBU")}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NoActiveCard;
