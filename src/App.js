import React, { Component } from 'react';
import './App.css';

import PetList from './components/PetList/PetList'

// font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="list">
          <PetList />
        </div>
      </div>
    );
  }
}

export default App;
