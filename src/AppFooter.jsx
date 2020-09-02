import React from 'react';
import { Container, Header, Grid, Segment, List, Dropdown } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { SUPPORT_EMAIL, DOCUMENTATION_URL } from './constants';
import { ReactComponent as Logo } from "./logos/logo.svg";

const options = [
  {
    key: 'ja',
    text: 'Japanese',
    value: 'ja',
  },
  {
    key: 'en',
    text: 'English',
    value: 'en',
  },
]

export default function AppFooter() {
  const { t, i18n } = useTranslation();

  return (
    <footer>
      <Segment vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided stackable>
            <Grid.Row>
              <Grid.Column width={7}>
                <Dropdown
                  selection
                  options={options}
                  defaultValue={i18n.language}
                  onChange={(_, t) => i18n.changeLanguage(t.value)}
                />
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as='h4' content={t('footer.servicelinks.title')} />
                <List link>
                  <List.Item as='a' content={t('footer.servicelinks.home')} />
                  <List.Item as='a' href={DOCUMENTATION_URL} target="_blank" content={t('footer.servicelinks.documentation')} />
                  <List.Item as='a' href={SUPPORT_EMAIL} content={t('footer.servicelinks.support')} />
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as='h4' content={t('footer.about.title')} />
                <Logo width="200px" height="30px" />
                <p>{t('footer.about.basedin')}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </footer>
  )
};
