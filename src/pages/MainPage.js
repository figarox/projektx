import React, { Component } from 'react';
import '../styles/main.css';
import '../styles/starbutton.css';
import '../styles/box.css';
import StarButton from "../components/StarButton";
import Picture1 from "../images/boy.png";
import github from "../icon/GitHub.png"
import { Route } from 'react-router';

const text = "Cześć, tu Maciek ";

const MainPage = () => {

    return ( 
        <>
        <a href="https://github.com/figarox" className="GitHub_Panel" target="_blank">  
        <div class="panelboczny">
            <img src={github} alt="github"></img>
        </div>
        </a>
            <div className="MainPage">
                <div className="SkyText">
                     <div className="SkyBox"></div>
                        <p>{text}</p>
                </div>
                            <div className="boy">
                                <img src={Picture1} alt="Logo" />
                            </div>
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
                            <div className="box13 "></div>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                            <div className="line4"></div>
                            <div className="line5"></div>
                            <div className="line6"></div>
                            <div className="line7"></div>
                            <div className="line8"></div>
                            <div className="line9"></div>
                            <div className="line10"></div>
            </div>
        </>
     );
}
 
export default MainPage;