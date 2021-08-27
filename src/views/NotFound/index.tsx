import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import { Helmet } from "react-helmet";

import Layout from "views/Layout";

const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <Layout>
      <Helmet>
        <title>404</title>
      </Helmet>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        spacing={3}
      >
        <Grid item>
          <Typography variant="h1">404</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">Page Not Found</Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => history.push("/")}
          >
            Go To Home
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default NotFound;
