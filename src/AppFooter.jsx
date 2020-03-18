import React from 'react';
import { Container, Header, Grid, Segment, List } from 'semantic-ui-react';
import { ReactComponent as Logo } from "./logos/logo.svg";

export default function AppFooter() {
  return (
    <footer>
      <Segment vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided stackable>
            <Grid.Row>
              <Grid.Column width={7}>
                <Logo width="200px" height="30px" />
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as='h4' content='About' />
                <List link>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as='h4'>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </footer>
  )
};
