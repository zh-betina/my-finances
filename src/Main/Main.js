import React from 'react';
import { Route } from 'react-router-dom';

import DefaultView from './Views/DefaultView/DefaultView';
import Expenses from './Views/Expenses/Expenses';
import Income from './Views/Income/Income';
import Settings from './Views/Settings/Settings';

import './Main.css';

const Main = () => {

    return (
        <main className="Main-views">
            <Route path="/" exact component={DefaultView} />
            <Route path="/expenses" exact component={Expenses} />
            <Route path="/income" exact component={Income} />
            <Route path="/settings" exact component={Settings} />
        </main>
    )
}

export default Main;