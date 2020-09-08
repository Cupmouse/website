import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

const list = [
  ["fullaccess", "payfortransfer", "highavailability"],
  ["serversideformatting", "fastsnapshot", "quickdataavailability"],
  ["formatteddata", "rawdata", "libraries"],
]

export default function Machinegun(props) {
  const { t } = useTranslation();
  return (
    <Grid columns={3} stackable {...props}>
      {
        list.map((row, i) => (
          <Grid.Row key={i}>
            {row.map((col, j) => (
              <Grid.Column key={j}>
                <p className="bigger-text">
                  <b>{t(`machinegun.${col}.name`)}</b>
                  {" "}-{" "}
                  {t(`machinegun.${col}.detail`)}
                </p>
              </Grid.Column>
            ))}
          </Grid.Row>
        ))
      }
    </Grid>
  );
};
