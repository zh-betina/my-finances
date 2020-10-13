import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';


class App extends Component{
  render(){
    return (
      <div className="App">
        <Header />
        <div className="row">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;