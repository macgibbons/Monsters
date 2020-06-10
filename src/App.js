import React, {Component} from 'react';
import './App.css';
import { CardList } from './Components/card-list/card-list.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
      
      ]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
      response.json())
      .then(users => this.setState({monsters: users}))
  }
  render() {
    return (
      <div className="App">
        <CardList >
          {this.state.monsters.map (m => ( 
            <h1 key={m.id}>{m.name}</h1>
          ))}

        </CardList>
      </div>
    );
  }
}


export default App;
