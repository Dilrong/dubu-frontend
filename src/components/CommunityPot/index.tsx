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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("");

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
        <Typography variant="h5">{t("Join the Community")}</Typography>
        <Typography variant="body1">
          {t(
            "There are no community pots yet. You can suggest a new pot in one of our channels, or join our devs to build one for your favorite project."
          )}
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        spacing={3}
      >
        <Grid item xs={12} sm={4}>
          <SocialCard
            img="/assets/telegram.svg"
            body={t(
              "Learn about Dubupot and get direct support from the community"
            )}
            label={t("Join Our Telegram")}
            link="https://t.me/DUBUfinance"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SocialCard
            img="/assets/discord.svg"
            body={t(
              "Join the conversation with our active community of developers"
            )}
            label={t("Join Our Discord")}
            link="https://discord.com/invite/9uChmzfRjY"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SocialCard
            img="/assets/twitter.svg"
            body={t(
              "Get the latest updates and take part in social media giveaways"
            )}
            label={t("Follow Our Twitter")}
            link="https://twitter.com/DubuFinance"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CommunityPot;
