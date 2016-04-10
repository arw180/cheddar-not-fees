import React from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

const items = [
  <MenuItem key={1} value={1} primaryText="Jan"/>,
  <MenuItem key={2} value={2} primaryText="Feb"/>,
  <MenuItem key={3} value={3} primaryText="Mar"/>,
  <MenuItem key={4} value={4} primaryText="Apr"/>,
  <MenuItem key={5} value={5} primaryText="May"/>,
  <MenuItem key={6} value={6} primaryText="Jun"/>,
  <MenuItem key={7} value={7} primaryText="Jul"/>,
  <MenuItem key={8} value={8} primaryText="Aug"/>,
  <MenuItem key={9} value={9} primaryText="Sep"/>,
  <MenuItem key={10} value={10} primaryText="Oct"/>,
  <MenuItem key={11} value={11} primaryText="Nov"/>,
  <MenuItem key={12} value={12} primaryText="Dec"/>,
];

export default class MonthSelector extends React.Component {

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
          autoWidth={true}
          maxHeight={300}
        >
          {items}
        </SelectField>
      </span>
    );
  }
}
