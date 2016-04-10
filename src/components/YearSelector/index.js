import React from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

const items = [
  <MenuItem key={1} value={1} primaryText="2012"/>,
  <MenuItem key={2} value={2} primaryText="2013"/>,
  <MenuItem key={3} value={3} primaryText="2014"/>,
  <MenuItem key={4} value={4} primaryText="2015"/>,
  <MenuItem key={5} value={5} primaryText="2016"/>
];

export default class YearSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: null};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <span>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          maxHeight={300}
        >
          {items}
        </SelectField>
      </span>
    );
  }
}
