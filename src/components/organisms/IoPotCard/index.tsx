import React from "react";
import Button from "../../atoms/Button";
import Caption from "../../atoms/Caption";
import Headline6 from "../../atoms/Headline6";
import Input from "../../atoms/Input";
import Subtitle1 from "../../atoms/Subtitle1";

/** material-ui */
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Collapse from "@material-ui/core/Collapse";

import "./index.css";

const IoPotCard: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="grid-card">
      <div className="grid-container">
        <div className="grid-item-left">
          <img src="/logo192.png" alt="logo" width="90" height="90" />
        </div>
        <div className="grid-item-right">
          <Subtitle1>Dubu Pot</Subtitle1>
          <Headline6>Win $360,824</Headline6>
          <Caption>in CAKE & POTS</Caption>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item-left">
          <Caption>NEXT DRAW</Caption>
          <Subtitle1>21d 23h 52m</Subtitle1>
        </div>
        <div className="grid-item-right">
          <Caption>INTEREST</Caption>
          <Subtitle1>204.80% APY</Subtitle1>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item-left">
          <Caption>TVL</Caption>
          <Subtitle1>$9.65M</Subtitle1>
        </div>
      </div>
      <hr />
      <div className="grid-container">
        <div className="grid-item-left">
          <Caption>PRIZE SPLIT</Caption>
          <Subtitle1>10 Winners</Subtitle1>
        </div>
        <div className="grid-item-right">
          <Caption>
            4384.18 POTS, 75.00 CAKE, 437.50 DODO & 0.51 BIFI each
          </Caption>
        </div>
      </div>
      <div className="grid-item-center">
        <Input label="Enter Pots amount" type="text" id="deposit" />
        <br />
        <Button label="Deposit" />
        <Caption>
          There’s a 10 day Fairplay Timelock. If you want to unstaking earlier
          you’ll pay a 2.5%, or less, Fairness Fee. The fee reduces every
          second.
        </Caption>
      </div>
      <hr />
      <List disablePadding>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Withdraw" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={true} timeout="auto" unmountOnExit>
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
    </div>
  );
};

export default IoPotCard;
