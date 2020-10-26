import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="row">
            <Sidebar />
            <Main />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;