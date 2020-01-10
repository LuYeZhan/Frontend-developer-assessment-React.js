import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <h1>Brastlewark App</h1>
        <div className="search">
          <input onKeyUp={e => this.handleSearch(e)} />
          <button onClick={this.handlePreviousPage} className="btn">
            previous
          </button>
          <button onClick={this.handleNextPage} className="next btn">
            next
          </button>
        </div>
      </nav>
    );
  }
}
