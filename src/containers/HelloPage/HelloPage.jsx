import React, { Component } from 'react';
import { AppHeader } from '../../components';

class HelloPage extends Component {
  render() {
    return (
      <div>
        <div>
          <AppHeader />
        </div>
        <div>Hello World</div>
      </div>
    );
  }
}

export default HelloPage;
