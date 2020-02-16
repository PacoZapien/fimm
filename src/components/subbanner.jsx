import React from "react";
import { Grid, Segment, Icon, Button } from "semantic-ui-react";
import LogOut from './LogOut'


const Subbanner = () => {
  return (
    <Segment color="grey" inverted size="mini">
      <Grid columns={3} divided>
        <Grid.Row verticalAlign="middle">
          <Grid.Column textAlign="left">
            <Button size="large" inverted basic color='facebook'><Icon name="home" />Inicio</Button>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <LogOut />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Subbanner;