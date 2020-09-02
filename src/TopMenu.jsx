import React from "react";
import { Menu, Container, Button, Icon, Responsive, Sidebar } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

import { DOCUMENTATION_URL, APIKEY_CONSOLE_URL } from "./constants";
import { ReactComponent as Logo } from "./logos/logo.svg";

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
        pointing
        secondary
        size='large'
      >
        <Menu.Item>
          <Logo width="200px" height="30px" />
        </Menu.Item>
        <Menu.Item position="right">
          <Button as="a" content={t('topmenu.contact')} />
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
        pointing
        secondary
        size='large'
      >
        <Container>
          <Menu.Item>
            <Logo width="200px" height="30px" />
          </Menu.Item>
          <Menu.Item as="a" href={DOCUMENTATION_URL} target="_blank">
            {t('topmenu.documentation')}
            {" "}
            <Icon name="external" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button as="a" href={APIKEY_CONSOLE_URL} target="_blank">
              {t('topmenu.login')}
              <Icon name='right arrow' />
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    </Responsive>
  );
}
export default function TopMenu() {
  return (
    <>
      <TopMenuMobile />
      <TopMenuDesktop />
    </>
  )
};
