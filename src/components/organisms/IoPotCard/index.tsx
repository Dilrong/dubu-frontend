import React, { useState } from "react";

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
  Collapse,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", maxWidth: 500 },
}));

const PotCard: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const openCollapse = () => {
    setOpen(!open);
  };

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
            <ListItemSecondaryAction>
              <Typography variant="caption">
                4384.18 POTS, 75.00 CAKE, 437.50 DODO & 0.51 BIFI each
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <List>
              <ListItem>
                <TextField
                  id="outlined-basic"
                  label="Enter Pots amount"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </ListItem>
              <ListItem>
                <Button variant="contained" color="primary" fullWidth={true}>
                  Deposit
                </Button>
              </ListItem>
              <ListItem>
                <Typography variant="caption">
                  There’s a 10 day Fairplay Timelock. If you want to unstaking
                  earlier you’ll pay a 2.5%, or less, Fairness Fee. The fee
                  reduces every second.
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <ListItem button onClick={openCollapse}>
            <ListItemText primary="Withdraw" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List dense={true}>
              <ListItem>
                <ListItemText primary="My POTS" />
                <ListItemSecondaryAction>
                  <ListItemText primary="0" />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="My POTS" />
                <ListItemSecondaryAction>
                  <ListItemText primary="0 POTS" />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="My Earned POTS" />
                <ListItemSecondaryAction>
                  <ListItemText primary="0 POTS" />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="My Fairplay Timelock" />
                <ListItemSecondaryAction>
                  <ListItemText primary="00d 00h 00m" />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="My Current Fairness Fee" />
                <ListItemSecondaryAction>
                  <ListItemText primary="0.0000000000 POTS" />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </CardContent>
    </Card>
  );
};

export default PotCard;
