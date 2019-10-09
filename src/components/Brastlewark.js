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
// import apiService from '../services/api.service'

export default class Brastlewark extends Component {
    state = {
      personsFromApi:[],
      persons: [],
      totalPersons: 0,
      currentPage: 0,
      offset: 10   
    }
    componentDidMount() {
        const {currentPage, offset} = this.state
        axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
            .then (res => {
                const persons = res.data;
                const paginatedPersons = persons.Brastlewark.slice(currentPage, offset)
                this.setState({ personsFromApi: res.data, persons: paginatedPersons, totalPersons: persons.Brastlewark.length 
                })
                console.log(this.state)
            })
        // apiService().then (res => {
        //     const persons = res.data;
        //     this.setState({ persons: persons.Brastlewark})
        // })
    }

    handleSearch(e){
        const {value} = e;
        axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .then(res => {
            const paginatedPersons = res.data.Brastlewark.slice(0, this.state.offset)
            this.setState({
                persons: paginatedPersons, currentPage:0
            })
        })
    }

    handleNextPage() {
        console.log(this)
        this.setState({ 
            currentPage:this.state.currentPage + this.state.offset
        })
        const nextPaginatedPersons = this.state.personsFromApi.slice(this.state.currentPage, this.state.offset)
        this.setState({persons:nextPaginatedPersons})
    }

    render() {
        const { persons } = this.state;
        return (
            <div className="home">
                <nav>
                    <h1>Brastlewark App</h1>
                    <div className="search">
                        <input className="input-background" onKeyUp={e=>this.handleSearch(e)}/>
                        <button className="prev btn">previous</button>
                        <button onClick={this.handleNextPage} className="next btn">next</button>
                    </div>
                </nav>
                <div className="content">
                    {persons.length> 0 && persons.map((person, index)=> 
                    {
                        return (
                            <div className="person-card">
                                <ul className="content-card" key={person.id}>
                                <li><h2>{person.name}</h2></li>
                                <li><span>Age:</span>{person.age}</li>
                                <li><span>Height:</span>{Math.floor(person.height)}</li>
                                <li><span>Weight:</span>{Math.floor(person.weight)}</li>
                                <li><span>Hair color:</span>{person.hair_color}</li>
                                <li><span>Friends:</span>{person.friends.length > 0 ? (
                                    <>
                                    {person.friends.map((friend, index) => 
                                        { if (index === person.friends.length - 1) {
                                            return (<p> {friend}&nbsp;</p>)
                                        } else { return (<p>{friend},&nbsp;</p>)}
                                        }
                                    )}
                                    </>
                                    ) : (
                                    <>No friends</>    
                                    )}
                                </li>
                                <li><span>Profession:</span>{person.professions.length > 0 ? (
                                    <> 
                                    {person.professions.map((profession, index) => { 
                                        if (index === person.professions.length - 1) {
                                            return (<p>{profession}&nbsp;</p>)
                                        } else { return (<p>{profession},&nbsp;</p>)}
                                        }
                                    )}
                                    </>
                                    ) : (
                                    <>Unemployed</>        
                                    )}
                                </li>
                                </ul>
                                <div>
                                    <img className="image-width" src={person.thumbnail} alt='gnome' ></img>
                                </div>
                            </div>
                    )}
                    )}
                </div>
            </div>
        )
    }
}