import React from 'react';
import {  Header, Grid } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as MeltingClock } from "../resources/melting_clock_min.svg";

export default function BriefDetail(props) {
  const { t } = useTranslation();

  return (
    <Grid textAlign="center" verticalAlign="middle" {...props} >
      <Grid.Row>
        <Grid.Column width="16" largeScreen="13" computer="13">
          <Header content={t('briefdetail.title')} />
          <p>{t('briefdetail.1')}</p>
          <p>{t('briefdetail.2')}</p>
        </Grid.Column>
        <Grid.Column only="large screen" width="3">
          <MeltingClock alt="Melting Clock" width="100%" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
