import React from "react";

import SocialIcons from "../components/SocialIcons";

/** material-ui */
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", padding: theme.spacing(8, 0, 6) },
}));

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root} component="main">
        {children!}
      </Container>
      <SocialIcons />
    </>
  );
};

export default Layout;
