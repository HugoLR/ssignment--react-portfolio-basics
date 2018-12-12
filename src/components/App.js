import React, { Component } from 'react';


import PortfolioFixed from "./PortfolioFixed"
import PortfolioContent from "./PortfolioContent"


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <PortfolioFixed />
        <PortfolioContent hugo = {this.props.juan} education= {this.props.education} work={this.props.work} />
      </div>
    )
  }
}

export default App;
