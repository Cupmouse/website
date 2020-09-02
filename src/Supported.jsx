import React from 'react';
import { Container, GridRow, GridColumn, Grid, Header } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as LogoNodeJS } from './logos/nodejs.svg';
import { ReactComponent as LogoPython } from './logos/python.svg';

export default function Supported(props) {
  const { t } = useTranslation()
  
  return (
    <Container {...props} textAlign="center">
      <Header size="large" content={t('supported.title')} />
      <Container fluid text textAlign="center">
        {t('supported.detail')}
      </Container>  
      <Grid columns={2} stackable divided>
        <GridRow>
          <GridColumn>
            <LogoNodeJS width="auto" height="5em" />
          </GridColumn>
          <GridColumn>
            <LogoPython width="auto" height="5em" />
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
};
