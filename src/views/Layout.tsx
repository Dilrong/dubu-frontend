import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Helmet } from "react-helmet";

import Header from "components/Header";
import SocialIcons from "components/SocialIcons";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", padding: theme.spacing(8, 0, 6) },
}));

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  const classes = useStyles();

  return (
    <>
      <Helmet
        defaultTitle="Dubu Finance"
        titleTemplate="%s | Dubu Finance"
      ></Helmet>
      <Header />
      <Container className={classes.root} component="main">
        {children!}
      </Container>
      <SocialIcons />
    </>
  );
};

export default Layout;
