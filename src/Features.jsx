import React from 'react';
import { Grid, Header, Icon, Responsive } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

function FeaturesMobile() {
  const { t } = useTranslation();

  return (
    <Grid container relaxed textAlign="center">
      <Grid.Row>
        <Grid.Column>
          <Icon size="massive" name="fire" className="feature-fire" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header size="huge" content={t('features.befree.title')} />
          <p>{t('features.befree.1')}</p>
          <p>{t('features.befree.2')}</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Icon size="massive" name="dollar" className="feature-dollar" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
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
      <Grid.Row>
        <Grid.Column>
          <Icon size="massive" name="book" className="feature-book" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header size="huge" content={t('features.libraries.title')} />
          <p>{t('features.libraries.1')}</p>
          <p>{t('features.libraries.2')}</p>
          <p>{t('features.libraries.3')}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

function FeaturesDesktop() {
  const { t } = useTranslation();
  
  return (
    <Grid container relaxed columns={2} verticalAlign="middle">
      <Grid.Row style={{ padding: "2em 0" }}>
        <Grid.Column width={10} textAlign="right" className="feature-text">
          <Header size="huge" content={t('features.befree.title')} />
          <p>{t('features.befree.1')}</p>
          <p>{t('features.befree.2')}</p>
        </Grid.Column>
        <Grid.Column width={6} textAlign="left">
          <Icon size="massive" name="fire" className="feature-fire" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ padding: "2em 0" }}>
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
      <Grid.Row style={{ padding: "2em 0" }}>
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
  );
}

export default function Features(props) {
  
  return (
    <div className="features" {...props}>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <FeaturesMobile />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <FeaturesDesktop />
      </Responsive>
    </div>
  );
};
