// import apiService from '../services/api.service';
// import React, { useState, useEffect } from 'react';

// const Brastlewark = () => {
//     const [data] = useState()null;
    
//     function handleData(data) {
//     getData(data);
//   }

//     useEffect(() => {
//     // Update the document title using the browser API
//     apiService.getAllData();
//   });
//     return (
//         <div>
//             <h2>componente</h2>
//         </div>
//     )
// }

// export default Brastlewark

import axios from 'axios';
import React, { Component } from 'react';

export default class Brastlewark extends Component {
    state = {
      persons: []   
    }
    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
            .then (res => {
                const persons = res.data;
                this.setState({ persons: persons.Brastlewark })
            })
    }
    render() {
        const { persons } = this.state;
        return (
            <>
            {persons.length> 0 && persons.map((person, index)=> 
            {
                return (
                    <ul key={person.id}>
                    <li>{person.name}</li>
                    <li>{person.age}</li>
                    <li>{Math.floor(person.height)}</li>
                    <li>{Math.floor(person.weight)}</li>
                    <li>{person.hair_color}</li>
                    <li>{person.friends.length > 0 ? (
                        <>
                        {person.friends.map((friend, index) => {
                            { if (index === person.friends.length - 1) {
                                return (<> {friend}&nbsp;</>)
                            } else { return (<>{friend},&nbsp;</>)}
                            }
                        })}
                        </>
                        ) : (
                        <>No friends</>    
                        )}
                    </li>
                    <li>{person.professions.length > 0 ? (
                        <> 
                        {person.professions.map((profession, index) => {
                            { if (index === person.professions.length - 1) {
                                return (<> {profession}&nbsp;</>)
                            } else { return (<>{profession},&nbsp;</>)}
                            }
                        })}
                        </>
                        ) : (
                        <>Unemployed</>        
                        )}
                    </li>
                    <img src={person.thumbnail} alt='gnome' ></img>
                    </ul>
            )}
            )}
            </>
        )
    }
}

