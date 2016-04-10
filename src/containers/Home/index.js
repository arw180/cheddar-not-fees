import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import PortfolioInputCard from 'components/PortfolioInputCard';

const metaData = {
  title: 'Cheddar Not Fees',
  description: 'Why you don\'t need a money manager',
  canonical: 'http://cheddarnotfees.com',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'investment, money, stock, vanguard, mutual fund',
    },
  },
};

export class Home extends Component {
  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <PortfolioInputCard />
      </section>
    );
  }
}
