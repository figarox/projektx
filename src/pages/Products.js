import React, { Component } from 'react';
import '../styles/box.css';
import '../styles/products.css';
import github from "../icon/GitHub.png";
import video from "../video/video.mp4";
import 'animate.css';
import Typical from 'react-typical';

const Products = () => {
    return ( 
        <>
         <a href="https://github.com/figarox" className="GitHub_Panel" target="_blank">  
            <div class="panelboczny">
                <img src={github} alt="github"></img>
            </div>
        </a>
            <div className="Products">
                
                    <video loop="true" autoplay="true" >
                        <source src={video} type="video/mp4"/>
                        <source src={video} type="video/ogv" />
                        <source src={video} type="video/webm" />
                    </video>
    
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

                            <div className="menuproducts animate__animated animate__fadeInUp">
                                <div className="WinProducts">
                                     <div>
                                        <Typical
                                            loop={1}
                                            wrapper="p"
                                            steps={[
                                                '',
                                                3500,
                                                'Stworzyłem dwa projekty komercyjne',
                                                3500,
                                                'Diva-Słupsk',
                                                3500,
                                                'Ren-Rom',
                                                3500,
                                                'Stworzyłem tez gre, która jest w trackie pracy',
                                                3500,
                                                'Mysticwar',
                                                3500,
                                                '⬇️Scroll Down⬇️',
                                                3500,
                                            ]}
                                        />
                                     </div>
                                </div>
                            </div>
            </div>
        </>
     );
}
 
export default Products;