import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'



class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  
  fetchUser = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const resJSON = await response.json();
      this.setState({monsters: resJSON})
    } catch (error) {
      console.log(error)
    }
  }
  
  async componentDidMount() {
    this.fetchUser();
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }


  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters} />
   </div>
  );
};
}


export default App;
