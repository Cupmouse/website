import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

const list = [
  ["fullaccess", "payfortransfer", "highavailability"],
  ["serversideformatting", "fastsnapshot", "quickdataavailability"],
  ["formatteddata", "rawdata", "libraries"],
]

export default function Machinegun() {
  const { t } = useTranslation();
  return (
    <Container style={{ padding: '2em 0' }}>
      <Grid columns={3} stackable>
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
    </Container>
  );
};
