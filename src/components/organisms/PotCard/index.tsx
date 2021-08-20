import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Button,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", maxWidth: 500 },
}));

const PotCard: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <List>
          <Grid item>
            <ListItem>
              <img src="/logo192.png" alt="logo" width="90" height="90" />
              <ListItemSecondaryAction>
                <Typography variant="h6">Dubu Pot</Typography>
                <Typography variant="h6">Win $360,824</Typography>
                <Typography variant="caption">in CAKE & POTS</Typography>
              </ListItemSecondaryAction>
            </ListItem>
          </Grid>
          <ListItem>
            <ListItemText
              primary={<Typography variant="caption">NEXT DRAW</Typography>}
              secondary={<Typography variant="h6">21d 23h 52m</Typography>}
            />
            <ListItemSecondaryAction>
              <Typography variant="caption">INTEREST</Typography>
              <Typography variant="h6">204.80% APY</Typography>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<Typography variant="caption">TVL</Typography>}
              secondary={<Typography variant="h6">$9.65M</Typography>}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary={<Typography variant="caption">PRIZE SPLIT</Typography>}
              secondary={<Typography variant="h6">10 Winners</Typography>}
            />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Button
              variant="contained"
              color="primary"
              fullWidth={true}
              onClick={() => {
                history.push("/pot");
              }}
            >
              Play With POTS
            </Button>
          </ListItem>
          <ListItem>
            <Typography variant="caption">
              1 in 991 odds per $1000 deposit
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default PotCard;
