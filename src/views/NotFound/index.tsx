import React from "react";
import { useHistory } from "react-router-dom";

/** material-ui */
import { Typography, Grid, Button } from "@material-ui/core";

const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <>
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
    </>
  );
};

export default NotFound;
