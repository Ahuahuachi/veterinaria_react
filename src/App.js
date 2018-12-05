import React, { Component } from 'react';
import { Route } from "react-router-dom";
// components
import PetList from './components/PetList/PetList'
import P1 from './components/P1';
import P2 from './components/P2';
// css
import './App.css';
// font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="list">
          <Route path="/" exact component={PetList} />
          <Route path="/p1" exact component={P1} />
          <Route path="/p2" exact component={P2} />
        </div>
      </div>
    );
  }
}

export default App;
