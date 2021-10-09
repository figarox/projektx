import React, { Component } from 'react';
import '../styles/box.css';
import '../styles/products.css';
import github from "../icon/GitHub.png";


const Products = () => {
    return ( 
        <>
         <a href="https://github.com/figarox" target="_blank">  
            <div class="panelboczny">
                <img src={github} alt="github"></img>
            </div>
        </a>
            <div className="Products">
                            <div className="box1 "></div>
                            <div className="box2 "></div>
                            <div className="box3 "></div>
                            <div className="box4 "></div>
                            <div className="box5 "></div>
                            <div className="box6 "></div>
                            <div className="box7 "></div>
                            <div className="box8 "></div>
                            <div className="box9 "></div>
                            <div className="box10 "></div>
                            <div className="box11 "></div>
                            <div className="box12 "></div>
                            <div className="box13v2 "></div>
            </div>
        </>
     );
}
 
export default Products;