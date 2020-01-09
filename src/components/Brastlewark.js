import axios from "axios";
import React, { Component } from "react";

export default class Brastlewark extends Component {
  state = {
    personsFromApi: [],
    persons: [],
    totalPersons: 0,
    currentPage: 0,
    offset: 12
  };

  componentDidMount() {
    const { currentPage, offset } = this.state;
    axios
      .get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
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
    const { persons } = this.state;
    return (
      <div className="home">
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
        <div className="content">
          {persons.length > 0 &&
            persons.map((person, index) => {
              return (
                <div className="card__person">
                  <ul className="card__content" key={person.id}>
                    <li>
                      <h2>{person.name}</h2>
                    </li>
                    <li>
                      <span>Age:</span>
                      {person.age}
                    </li>
                    <li>
                      <span>Height:</span>
                      {Math.floor(person.height)}
                    </li>
                    <li>
                      <span>Weight:</span>
                      {Math.floor(person.weight)}
                    </li>
                    <li>
                      <span>Hair color:</span>
                      {person.hair_color}
                    </li>
                    <li>
                      <span>Friends:</span>
                      {person.friends.length > 0 ? (
                        <>
                          {person.friends.map((friend, index) => {
                            if (index === person.friends.length - 1) {
                              return <p> {friend}&nbsp;</p>;
                            } else {
                              return <p>{friend},&nbsp;</p>;
                            }
                          })}
                        </>
                      ) : (
                        <>No friends</>
                      )}
                    </li>
                    <li>
                      <span>Profession:</span>
                      {person.professions.length > 0 ? (
                        <>
                          {person.professions.map((profession, index) => {
                            if (index === person.professions.length - 1) {
                              return <p>{profession}&nbsp;</p>;
                            } else {
                              return <p>{profession},&nbsp;</p>;
                            }
                          })}
                        </>
                      ) : (
                        <>Unemployed</>
                      )}
                    </li>
                  </ul>
                  <div>
                    <img
                      className="composition__img"
                      src={person.thumbnail}
                      alt="gnome"
                    ></img>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
