import React, { useState } from 'react';
import { Container, Input } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { NUMBER_REGEX } from '../constants';

export default function (props) {
  const [quota, setQuota] = useState("1")
  const [isNumber, setIsNumber] = useState(true)

  const handleChange = (_, { value }) => {
    setQuota(value);
    setIsNumber(NUMBER_REGEX.test(value));
  };

  const { t } = useTranslation();

  return (
    <Container textAlign="center" {...props}>
      <Input
        size="large"
        placeholder={t('price.pickquota.')}
        label="GB"
        labelPosition="right"
        value={quota}
        onChange={handleChange}
        error={!isNumber}
      />
    </Container>
  )
}