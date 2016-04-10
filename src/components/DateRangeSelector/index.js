import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

/* components */
import MonthSelector from 'components/MonthSelector';
import YearSelector from 'components/YearSelector';

const DateRangeSelector = () => (
  <section className={`${styles}`}>
    <label>from:</label> <MonthSelector className="dateSelector" />
    <YearSelector className="dateSelector" />
    <label>to:</label> <MonthSelector className="dateSelector" />
    <YearSelector className="dateSelector" />
  </section>
);

export default DateRangeSelector;
