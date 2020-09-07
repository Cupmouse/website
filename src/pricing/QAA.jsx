import React, { useState } from 'react';
import { Accordion } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import PricingTable from './PricingTable';
import { FAQ_URL } from '../constants';


export default function () {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(-1);

  const panels = [
    {
      key: "price",
      content: (
        <>
          <p>{t('faq.price.1')}</p>
          <p>{t('faq.price.2')}</p>
          <PricingTable />
        </>
      ),
    },
    {
      key: "newcustomer",
      content: (
        <>
          <p>{t('faq.newcustomer.1')}</p>
          <p>{t('faq.newcustomer.2')}</p>
        </>
      ),
    },
    {
      key: "howfast",
      content: (
        <>
          <p>{t('faq.howfast.1')}</p>
          <p>{t('faq.howfast.2')}</p>
        </>
      )
    }
  ];

  const handleClick = (_, { index }) => {
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  const accordions = [];

  for (let i = 0; i < panels.length; i++) {
    const e = panels[i];
    accordions.push((
      <Accordion.Title
        key={`${e.key}-title`}
        index={i}
        active={activeIndex === i}
        onClick={handleClick}
        content={t(`faq.${e.key}.title`)}
      />
    ));
    accordions.push((
      <Accordion.Content
        key={`${e.key}-content`}
        active={activeIndex === i}
        content={e.content}
      />
    ));
  }

  return (
    <Accordion
      exclusive={false}
      fluid
    >
      {accordions}
      <Accordion.Title>
        <a href={FAQ_URL} rel="noopener noreferrer" target="_blank">{t('faq.more')}</a>
      </Accordion.Title>
    </Accordion>
  );
}