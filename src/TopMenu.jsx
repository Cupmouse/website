import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { ReactComponent as Logo } from "./logos/logo.svg";

export default function TopMenu() {
  return (
    <Menu pointing secondary borderless size="large">
      <Container>
        <Menu.Item>
          <Logo width="200px" height="30px" />
        </Menu.Item>
        <Menu.Item as="a" active>
          Home
        </Menu.Item>
        <Menu.Item as="a">Documents</Menu.Item>
        <Menu.Item position="right">
          <Button as="a">
            Contact Us
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
};
