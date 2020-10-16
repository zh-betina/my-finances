import React, { Component } from 'react';
import './Main.css';
import { Route } from 'react-router-dom';
import Default from './Views/Default/Default';
import Expenses from './Views/Expenses/Expenses';
import Income from './Views/Income/Income';
import Settings from './Views/Settings/Settings';

class Main extends Component {
    render(){
        return (
            <main className="Main-views">
                <Route path="/" exact component={Default} />
                <Route path="/expenses" exact component={Expenses} />
                <Route path="/income" exact component={Income} />
                <Route path="/settings" exact component={Settings} />
            </main>
        )
    }
}

export default Main;