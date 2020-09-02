import React from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

export default function Features(props) {
  const { t } = useTranslation()
  
  return (
    <div className="features" {...props}>
      <Container>
        <Grid columns={2} stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={10} textAlign="right" className="feature-text">
              <Header size="huge" content={t('features.befree.title')} />
              <p>{t('features.befree.1')}</p>
              <p>{t('features.befree.2')}</p>
            </Grid.Column>
            <Grid.Column width={6} textAlign="left">
              <Icon size="massive" name="fire" className="feature-fire" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Container>
        <Grid columns={2} stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={6} textAlign="right">
              <Icon size="massive" name="dollar" className="feature-dollar" />
            </Grid.Column>
            <Grid.Column width={10} textAlign="left">
              <Header size="huge">
                {t('features.nolimit.title.1')}<br />
                {t('features.nolimit.title.2')}<br />
                {t('features.nolimit.title.3')}
              </Header>
              <p>{t('features.nolimit.1')}</p>
              <p>{t('features.nolimit.2')}</p>
              <p style={{fontSize: '0.8em'}}>{t('features.nolimit.3')}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Container>
        <Grid rows={3} columns={2} stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={10} textAlign="right">
              <Header size="huge" content={t('features.libraries.title')} />
              <p>{t('features.libraries.1')}</p>
              <p>{t('features.libraries.2')}</p>
              <p>{t('features.libraries.3')}</p>
            </Grid.Column>
            <Grid.Column width={6} textAlign="left">
              <Icon size="massive" name="book" className="feature-book" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};
