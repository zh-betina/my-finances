import React from 'react'
import Btn from './Sidebar-btn/Sidebar-btn'

import { GiPayMoney } from 'react-icons/gi'
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

import './Sidebar.css';


const sidebar = () => {

    return (
        <nav className="Sidebar">
            <Btn href="/expenses" txt="expenses"><GiPayMoney className="Btn-icon" /></Btn>
            <Btn href="/income" txt="income"><FaMoneyCheckAlt className="Btn-icon" /></Btn>
            <Btn href="/settings" txt="settings"><MdSettings className="Btn-icon" /></Btn>
        </nav>
    );
}

export default sidebar;

