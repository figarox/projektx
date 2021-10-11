import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const List = [
    {name: "Main", path: "/" , excat: true},
    {name: "Projekty", path: "/products"},
]

const Navigation = () => {

    const menu = List.map(item =>(
        <li key={item.name}>
            <NavLink to={item.path} exact={item.excat ? item.excat : false}>{item.name}</NavLink>
        </li>
    ))
    return ( 
        <nav className='nav-main'>
            <ul>
                {menu}
            </ul>
        </nav>
     );
}
 
export default Navigation;