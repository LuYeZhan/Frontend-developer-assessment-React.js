import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { person } = this.props;
    return (
      <div className='card__person card__person--green'>
        <ul className='card__content'>
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
            className='composition__img'
            src={person.thumbnail}
            alt='gnome'
          ></img>
        </div>
      </div>
    );
  }
}
