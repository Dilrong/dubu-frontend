import React from "react";
import { useHistory } from "react-router-dom";

/** material-ui */
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  List,
  ListItem,
} from "@material-ui/core";

interface SoicalCardProp {
  img: string;
  body: string;
  label: string;
  link: string;
}

const useStyles = makeStyles((theme) => ({
  head: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  socialCard: {
    textAlign: "center",
  },
}));

const CommunityPot: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const SocialCard = ({ img, body, label, link }: SoicalCardProp) => (
    <Card className={classes.socialCard}>
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item spacing={3}>
            <img src={img} alt={img} width="64" />
          </Grid>
          <List>
            <Typography>{body}</Typography>
            <ListItem>
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                onClick={() => {
                  history.push(link);
                }}
              >
                {label}
              </Button>
            </ListItem>
          </List>
        </Grid>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        className={classes.head}
      >
        <img src="/assets/pot.png" alt="pot" width="150" />
        <Typography variant="h5">Join the Community</Typography>
        <Typography variant="body1">
          There are no community pots yet. You can suggest a new pot in one of
          our
          <br />
          channels, or join our devs to build one for your favorite project.
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        spacing={3}
      >
        <Grid item xs={4}>
          <SocialCard
            img="/assets/telegram.svg"
            body="Learn about Moonpot and get direct support from the community"
            label="Join Our Telegram"
            link=""
          />
        </Grid>
        <Grid item xs={4}>
          <SocialCard
            img="/assets/discord.svg"
            body="Join the conversation with our active community of developers"
            label="Join Our Discord"
            link=""
          />
        </Grid>
        <Grid item xs={4}>
          <SocialCard
            img="/assets/twitter.svg"
            body="Get the latest updates and take part in social media giveaways"
            label="Follow our Twitter"
            link=""
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CommunityPot;
