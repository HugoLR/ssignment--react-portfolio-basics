import React, { Component } from 'react';

import PortfolioFixed from "./PortfolioFixed"
import PortfolioContent from "./PortfolioContent"

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <PortfolioFixed />
        <PortfolioContent />
      </div>
    )
  }
}

export default App;
