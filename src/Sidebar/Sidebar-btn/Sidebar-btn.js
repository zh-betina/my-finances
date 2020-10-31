import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar-btn.css';

const btn = (props) => {

    return (
        <div className="Sidebar-btn">
            <span>{props.children}</span>
            <Link to={props.href} className="Sidebar-btn-link">{props.txt}</Link>
        </div>
    )
}


export default btn;