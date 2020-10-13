import React from 'react'

const btn = (props) =>{
    
    return (
        <div className="Sidebar-btn">
            <span>{props.children}</span>
            <a href="#" className="Sidebar-btn-link">{props.txt}</a>
        </div>
    )
}


export default btn;