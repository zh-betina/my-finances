import React from 'react';
import './Sidebar-btn.css';

const btn = (props) =>{
    
    return (
        <div className="Sidebar-btn">
            <span>{props.children}</span>
            <a href={props.href} className="Sidebar-btn-link">{props.txt}</a>
        </div>
    )
}


export default btn;