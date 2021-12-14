import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const List = [
    {name: "Główne Menu", 
    path: "/" , 
    excat: true
    },
    {name: "Projekty", path: "/products"},
]

const Navigation = () => {

    const menu = List.map(item =>(
        <li key={item.name}>
            <NavLink to={item.path} exact={item.excat ? item.excat : false}>{item.name}</NavLink>
        </li>
    ))
    return ( 
        <>
             <div className="opacityMenu">
                {menu}
             </div>
             
            <nav role="navigation">
            <div id="menuToggle">
        
            <input type="checkbox" />
        
            <span></span>
            <span></span>
            <span></span>
            
            <ul id="menu">
                    <div className="menuButton">
                        {menu}
                    </div>
                </ul>
            </div>
            </nav>


      </>
     );
}
 
export default Navigation;