import React from 'react';
import { Statistic, Popup } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import { PRICE_URL } from '../constants';

export default function Statistics() {
  const { t } = useTranslation();

  return (
    <Statistic.Group widths="three">
      <Statistic
        className="stat"
        value="7TB+"
        label={t('stats.accumulated.label')}
      />
      <Popup
        trigger={<Statistic
          as={Link}
          to={PRICE_URL}
          className="stat"
          value="$10"
          label={t('stats.price.label')}
        />}
        flowing
        content={t('stats.price.popup')}
        position='bottom center'
      />
      <Popup
        trigger={<Statistic
          className="stat"
          as={HashLink}
          to="#exchanges"
          smooth
          value="3"
          label={t('stats.exchanges.label')}
        />}
        flowing
        content={t('stats.exchanges.popup')}
        position='bottom center'
      />
    </Statistic.Group>
  );
};
