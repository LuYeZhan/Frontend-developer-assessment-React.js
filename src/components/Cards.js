import React, { Component } from 'react';
import Card from './Card.js';

export default class Cards extends Component {
  render() {
    const { persons } = this.props;
    return (
      <div className='cards'>
        {persons.length > 0 &&
          persons.map((person, index) => {
            return <Card person={person} key={person.id} />;
          })}
      </div>
    );
  }
}
