import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards.js';

const Brastlewark = props => {
  const [state, setState] = useState({
    personsFromApi: [],
    persons: [],
    totalPersons: 0,
    currentPage: 0,
    offset: 12
  });

  // Search
  const handleSearch = event => {
    const { value } = event.target;
    const { personsFromApi } = state;
    const newPersonsFromApi = [...personsFromApi.Brastlewark];
    const SearchedPerson = newPersonsFromApi.filter(e => {
      return e.name.includes(value);
    });
    setState({ ...state, persons: SearchedPerson });
  };

  const handlePageMovement = direction => {
    const { currentPage, offset, personsFromApi } = state;
    setState({
      ...state,
      currentPage:
        direction === '' ? currentPage + offset : currentPage - offset
    });
    const newCurrentPage =
      direction === '' ? currentPage + offset : currentPage - offset;
    const nextPaginatedPersons = personsFromApi.Brastlewark.slice(
      newCurrentPage,
      newCurrentPage + offset
    );
    setState({
      ...state,
      persons: nextPaginatedPersons,
      currentPage: newCurrentPage
    });
  };

  // componentDidMount
  useEffect(() => {
    const { currentPage, offset } = state;
    try {
      axios
        .get(
          'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
        )
        .then(res => {
          const persons = res.data;
          const paginatedPersons = persons.Brastlewark.slice(
            currentPage,
            offset
          );
          setState({
            ...state,
            personsFromApi: res.data,
            persons: paginatedPersons,
            totalPersons: persons.Brastlewark.length
          });
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className='home'>
      <nav>
        <h1>Brastlewark App</h1>
        <div className='search'>
          <input onKeyUp={e => handleSearch(e)} />
          {['previous', 'next'].map(key => (
            <button
              key={key}
              onClick={() => {
                handlePageMovement(key);
              }}
              className='btn'
            >
              {key}
            </button>
          ))}
        </div>
      </nav>
      <Cards persons={state.persons} />
    </div>
  );
};

export default Brastlewark;
