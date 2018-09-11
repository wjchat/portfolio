import React, { Component } from 'react';

import Mobile from './components/mobile';

class App extends Component {
  render() {
    return (
        <div>
            <div className = 'mobile'>
                <Mobile />
            </div>
        </div>
    );
  }
}

export default App;
