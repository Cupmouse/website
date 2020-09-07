import React, { useState, useEffect } from 'react';
import { Container, Input } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { NUMBER_REGEX } from '../constants';

export default function ({ quotaSetter, quota, ...props }) {
  const [quotaStr, setQuotaStr] = useState(quota.toString());

  const handleChange = (_, { value }) => {
    setQuotaStr(value);
  };

  // sets global quota number from input string
  useEffect(() => {
    if (NUMBER_REGEX.test(quotaStr)) {
      const newQuota = parseInt(quotaStr);
      quotaSetter(newQuota);
    } else {
      quotaSetter(0);
    }
  }, [quotaStr, quotaSetter]);

  // this replaces string in the input when the quota changed
  useEffect(() => setQuotaStr(quota.toString()), [quota]);

  const { t } = useTranslation();

  return (
    <Container textAlign="center" {...props}>
      <Input
        size="large"
        placeholder={t('price.pickquota.placeholder')}
        label="GB"
        labelPosition="right"
        value={quotaStr}
        onChange={handleChange}
        error={!NUMBER_REGEX.test(quotaStr)}
      />
    </Container>
  )
}