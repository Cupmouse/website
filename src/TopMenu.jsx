import React from "react";
import { Menu, Container, Button, Icon, Responsive, Sidebar } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

import { DOCUMENTATION_URL, APIKEY_CONSOLE_URL, PRICE_URL, HOME_URL } from "./constants";
import { ReactComponent as Logo } from "./logos/logo.svg";
import { Link, NavLink } from "react-router-dom";

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

function TopMenuMobile(props) {
  const { t } = useTranslation();

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
      {...props}
    >
      <Menu
        borderless
        size='large'
      >
        <Menu.Item>
          <Link to={HOME_URL}>
            <Logo id="toplogo" />
          </Link>
        </Menu.Item>
        <Menu.Item as={NavLink} exact to={PRICE_URL} content={t('topmenu.price')} />
        <Menu.Item position="right">
          <Button as="a" href={APIKEY_CONSOLE_URL} content={t('topmenu.login')} />
        </Menu.Item>
      </Menu>
    </Responsive>
  );
}

function TopMenuDesktop(props) {
  const { t } = useTranslation()

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth} {...props}>
      <Menu
        borderless
        fixed="top"
      >
        <Container>
          <Menu.Item>
            <Link to={HOME_URL}>
              <Logo id="toplogo" />
            </Link>
          </Menu.Item>
          <Menu.Item as={NavLink} exact position="right" to={HOME_URL} content={t('topmenu.home')} />
          <Menu.Item as={NavLink} exact to={PRICE_URL} content={t('topmenu.price')} />
          <Menu.Item as="a" href={DOCUMENTATION_URL} target="_blank" content={t('topmenu.documentation')} />
          <Menu.Item>
            <Button as="a" href={APIKEY_CONSOLE_URL} target="_blank">
              {t('topmenu.login')}
              <Icon name='right arrow' />
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
      <div className="topmenu-spacer"></div>
    </Responsive>
  );
}
export default function TopMenu() {
  return (
    <header>
      <TopMenuMobile />
      <TopMenuDesktop />
    </header>
  )
};
