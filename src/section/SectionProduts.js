import React from "react";
import project1 from '../images/projekt1.png';
import project2 from '../images/projekt2.png';
import project3 from '../images/projekt3.png';
import project4 from '../images/projekt4.png';
import '../styles/products.css';

const SelectionProduts = () => {
    return ( 
        <div>
             <div className="row">
                <h3>Projekty Ukończone</h3>
                             <div className="col">
                                <a href="http://diva-slupsk.pl/" target="_blank">
                                    <div className="polaroid">
                                            <img src={project1} alt="zdj1"></img>
                                        <div class="container">
                                        <p>Komercyjny projekt - diva-slupsk</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                             <div className="col">
                                <a href="https://renrom.pl/" target="_blank">
                                    <div className="polaroid">
                                            <img src={project2} alt="zdj2"></img>
                                        <div class="container">
                                        <p>Komercyjny projekt - RenRom</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                    </div>
                    <div className="row">
                    <h3>Projekty w Trackie</h3>
                             <div className="col">
                                <a href="http://mysticwar.pl/" target="_blank">
                                    <div className="polaroid">
                                            <img src={project3} alt="zdj3"></img>
                                        <div class="container">
                                        <p>Gra - mysticwar</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="" target="_blank">
                                    <div className="polaroid">
                                            <img src={project4} alt="zdj4"></img>
                                        <div class="container">
                                        <p>Portal dla Przychodni</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                    </div>
            <div className="boxsky"></div>

        </div>
     );
}
 
export default SelectionProduts;