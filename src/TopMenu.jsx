import React from "react";
import { Component } from "react";
import { Menu, Container, Button, Icon, Responsive, Sidebar } from "semantic-ui-react";
import { ReactComponent as Logo } from "./logos/logo.svg";

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class TopMenuMobile extends Component {
  render() {
    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Menu
          borderless
          pointing
          secondary
          size='large'
        >
          <Container>
            <Menu.Item>
              <Logo width="200px" height="30px" />
            </Menu.Item>
            <Menu.Item position="right">
              <Button as="a">
                Contact Us
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Responsive>
    );
  }
}

class TopMenuDesktop extends Component {
  state = {
    fixed: false,
  };

  render() {
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth} {...this.props}>
        <Menu
          borderless
          pointing
          secondary
          size='large'
        >
          <Container>
            <Menu.Item>
              <Logo width="200px" height="30px" />
            </Menu.Item>
            <Menu.Item as="a">
              Documentation
              {" "}
              <Icon name="external" />
            </Menu.Item>
            <Menu.Item position="right">
              <Button as="a">
                Contact Us
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Responsive>
    );
  }
}
export default class TopMenu extends Component {
  render() {
    return (
      <>
        <TopMenuMobile />
        <TopMenuDesktop />
      </>
    )
  }
};
