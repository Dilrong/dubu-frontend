import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 1,
    justifyContent: "center",
  },
}));

const SocialIcons: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <IconButton
        onClick={() => {
          window.open("https://github.com/vector-finance");
        }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          window.open("https://t.me/DUBUfinance");
        }}
      >
        <TelegramIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          window.open("https://discord.gg/9uChmzfRjY");
        }}
      >
        <SvgIcon>
          <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM9.264 4.872C9.288 4.872 9.312 4.872 9.312 4.872L9.48 5.088C6.408 5.952 5.016 7.296 5.016 7.296C5.016 7.296 5.376 7.104 6 6.816C7.824 6 9.264 5.784 9.864 5.736C9.96 5.712 10.056 5.712 10.152 5.712C11.184 5.568 12.36 5.544 13.584 5.664C15.192 5.856 16.92 6.336 18.696 7.296C18.696 7.296 17.352 6.024 14.472 5.136L14.688 4.872C14.688 4.872 17.016 4.824 19.464 6.648C19.464 6.648 21.912 11.088 21.912 16.536C21.912 16.536 20.472 19.008 16.728 19.128C16.728 19.128 16.104 18.408 15.6 17.76C17.832 17.136 18.672 15.744 18.672 15.744C17.976 16.2 17.304 16.512 16.728 16.728C15.864 17.088 15.048 17.328 14.256 17.472C12.624 17.76 11.136 17.688 9.864 17.448C8.904 17.256 8.064 16.992 7.368 16.728C6.984 16.56 6.552 16.368 6.12 16.152C6.072 16.104 6.024 16.08 5.976 16.056C5.952 16.032 5.928 16.032 5.904 16.008C5.592 15.84 5.424 15.72 5.424 15.72C5.424 15.72 6.24 17.064 8.4 17.712C7.896 18.36 7.272 19.128 7.272 19.128C3.504 19.008 2.088 16.536 2.088 16.536C2.088 11.088 4.536 6.648 4.536 6.648C6.816 4.944 9 4.872 9.264 4.872ZM8.832 11.208C7.848 11.208 7.104 12.048 7.104 13.08C7.104 14.112 7.872 14.976 8.832 14.976C9.792 14.976 10.56 14.112 10.56 13.08C10.584 12.048 9.792 11.208 8.832 11.208ZM15.024 11.208C14.064 11.208 13.296 12.048 13.296 13.08C13.296 14.112 14.064 14.976 15.024 14.976C15.984 14.976 16.752 14.112 16.752 13.08C16.752 12.048 15.984 11.208 15.024 11.208Z" />
        </SvgIcon>
      </IconButton>
      <IconButton
        onClick={() => {
          window.open("https://twitter.com/DubuFinance");
        }}
      >
        <TwitterIcon />
      </IconButton>
    </Grid>
  );
};

export default SocialIcons;
