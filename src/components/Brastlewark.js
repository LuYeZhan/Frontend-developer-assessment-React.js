import axios from 'axios';
import React, { Component } from 'react';
import Cards from './Cards.js';

export default class Brastlewark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personsFromApi: [],
      persons: [],
      totalPersons: 0,
      currentPage: 0,
      offset: 12
    };
  }

  componentDidMount() {
    const { currentPage, offset } = this.state;
    axios
      .get(
        'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
      )
      .then(res => {
        const persons = res.data;
        const paginatedPersons = persons.Brastlewark.slice(currentPage, offset);
        this.setState({
          personsFromApi: res.data,
          persons: paginatedPersons,
          totalPersons: persons.Brastlewark.length
        });
      });
  }

  handleNextPage = () => {
    const { currentPage, offset, personsFromApi } = this.state;
    this.setState({
      currentPage: currentPage + offset
    });
    const newCurrentPage = currentPage + offset;
    const nextPaginatedPersons = personsFromApi.Brastlewark.slice(
      newCurrentPage,
      newCurrentPage + offset
    );
    this.setState({
      persons: nextPaginatedPersons,
      currentPage: newCurrentPage
    });
  };

  handlePreviousPage = () => {
    const { currentPage, offset, personsFromApi } = this.state;
    this.setState({
      currentPage: currentPage - offset
    });
    const newCurrentPage = currentPage - offset;
    const nextPaginatedPersons = personsFromApi.Brastlewark.slice(
      newCurrentPage,
      newCurrentPage + offset
    );
    this.setState({
      persons: nextPaginatedPersons,
      currentPage: newCurrentPage
    });
  };

  handleSearch = event => {
    const { value } = event.target;
    const { personsFromApi } = this.state;
    const newPersonsFromApi = [...personsFromApi.Brastlewark];
    const SearchedPerson = newPersonsFromApi.filter(e => {
      return e.name.includes(value);
    });
    this.setState({ persons: SearchedPerson });
  };

  render() {
    return (
      <div className='home'>
        <nav>
          <h1>Brastlewark App</h1>
          <div className='search'>
            <input onKeyUp={e => this.handleSearch(e)} />
            <button onClick={this.handlePreviousPage} className='btn'>
              previous
            </button>
            <button onClick={this.handleNextPage} className='next btn'>
              next
            </button>
          </div>
        </nav>
        <Cards persons={this.state.persons} />
      </div>
    );
  }
}
