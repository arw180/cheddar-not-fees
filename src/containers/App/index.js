import React, { Component } from 'react';

/* global styles for app */
import './styles/app.scss';

/* application components */
import MyAppBar from 'components/MyAppBar';

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section>
        <MyAppBar />
        {this.props.children}
      </section>
    );
  }
}
