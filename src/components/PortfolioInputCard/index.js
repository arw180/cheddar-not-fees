import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import DateRangeSelector from 'components/DateRangeSelector';

const PortfolioInputCard = () => (
  <Card
    initiallyExpanded={true}>
    <CardHeader
      title="Portfolio Input"
      subtitle="Enter information about your investments"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <DateRangeSelector />
    </CardText>
  </Card>
);

export default PortfolioInputCard;
