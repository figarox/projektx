import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const List = [
    {name: "Start", path: "/" , excat: true},
    {name: "Produkty", path: "/products"},
    {name: "Kontakt", path: "/contact"},
    {name: "Admin", path: "/admin"},
]

const Navigation = () => {

    const menu = List.map(item =>(
        <li key={item.name}>
            <NavLink to={item.path} exact={item.excat ? item.excat : false}>{item.name}</NavLink>
        </li>
    ))
    return ( 
        <nav className='main'>
            <ul>
                {menu}
            </ul>
        </nav>
     );
}
 
export default Navigation;