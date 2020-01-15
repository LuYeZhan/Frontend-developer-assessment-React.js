import React from 'react';

const navigation = props => {
  // handleNextPage = () => {
  //   const { currentPage, offset, personsFromApi } = this.state;
  //   this.setState({
  //     currentPage: currentPage + offset
  //   });
  //   const newCurrentPage = currentPage + offset;
  //   const nextPaginatedPersons = personsFromApi.Brastlewark.slice(
  //     newCurrentPage,
  //     newCurrentPage + offset
  //   );
  //   this.setState({
  //     persons: nextPaginatedPersons,
  //     currentPage: newCurrentPage
  //   });
  // };

  // handlePreviousPage = () => {
  //   const { currentPage, offset, personsFromApi } = this.state;
  //   this.setState({
  //     currentPage: currentPage - offset
  //   });
  //   const newCurrentPage = currentPage - offset;
  //   const nextPaginatedPersons = personsFromApi.Brastlewark.slice(
  //     newCurrentPage,
  //     newCurrentPage + offset
  //   );
  //   this.setState({
  //     persons: nextPaginatedPersons,
  //     currentPage: newCurrentPage
  //   });
  // };

  // handleSearch = event => {
  //   const { value } = event.target;
  //   const { personsFromApi } = this.state;
  //   const newPersonsFromApi = [...personsFromApi.Brastlewark];
  //   const SearchedPerson = newPersonsFromApi.filter(e => {
  //     return e.name.includes(value);
  //   });
  //   this.setState({ persons: SearchedPerson });
  // };

  return (
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
  );
};

export default navigation;
