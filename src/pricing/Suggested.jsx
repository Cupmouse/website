import React from 'react';
import { Grid, Segment, Label, Button } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { calcPrice } from '../constants';

const suggested = [
  {
    recommend: {
      color: "blue",
      type: "tradedata",
    },
    quota: 3,
  },
  {
    recommend: null,
    quota: 20,
  },
  {
    recommend: {
      color: "red",
      type: "recommended",
    },
    quota: 50,
  },
  {
    recommend: null,
    quota: 100,
  },
  {
    recommend: {
      color: "violet",
      type: "enterprise",
    },
    quota: 300,
  },
];

export default function Suggested({ quotaSetter, ...props }) {
  const { t } = useTranslation();

  return (
    <Grid columns={suggested.length} textAlign="center" stackable {...props}>
      <Grid.Row stretched>
        {
          suggested.map((sugg) => (
            <Grid.Column key={sugg.quota}>
              <Segment>
                <div style={{ height: "3em" }}>
                  {
                    sugg.recommend ? <Label
                      color={sugg.recommend.color}
                      content={t(`price.suggestions.${sugg.recommend.type}`)}
                    /> : ""
                  }
                </div>
                <p><span style={{ fontSize: "2em" }}>${calcPrice(sugg.quota)}</span>{t('price.suggestions.permonth')}</p>
                <span>{t('price.suggestions.quota')}</span>
                <p style={{ fontSize: "2em" }}>{sugg.quota} GB</p>
                <span>{t('price.suggestions.apicall')}</span>
                <p style={{ fontSize: "2em" }}>{t('price.suggestions.unlimited')}</p>
                <span>{t('price.suggestions.access')}</span>
                <p style={{ fontSize: "2em" }}>{t('price.suggestions.unlimited')}</p>
                <Button
                  primary
                  content={t('price.suggestions.choose')}
                  onClick={() => quotaSetter(sugg.quota)}
                />
              </Segment>
            </Grid.Column>
          ))
        }
      </Grid.Row>
    </Grid>
  )
}
