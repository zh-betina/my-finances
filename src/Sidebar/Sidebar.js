import React from 'react'
import Btn from '../Sidebar-btn/Sidebar-btn'
import { GiPayMoney } from 'react-icons/gi'
import { FaMoneyCheckAlt } from 'react-icons/fa'; 
import { MdSettings } from 'react-icons/md';


const sidebar = (props) =>{
    return (
    <nav className="App-navbar">
            <Btn onClick={props.click} txt="expenses"><GiPayMoney className="Btn-icon" /></Btn>
            <Btn onClick={props.click} txt="income"><FaMoneyCheckAlt className="Btn-icon" /></Btn>
            <Btn onClick={props.click} txt="settings"><MdSettings className="Btn-icon" /></Btn>
    </nav>
    );
}

export default sidebar;

