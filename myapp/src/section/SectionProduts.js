import React from "react";
import project1 from '../images/projekt1.png';
import project2 from '../images/projekt2.png';
import project3 from '../images/projekt3.png';
import '../styles/products.css';

const SelectionProduts = () => {
    return ( 
        <div>
             <div><h2>Projekty Ukończone</h2>
                    <a href="http://diva-slupsk.pl/" target="_blank">
                        <div className="polaroid">
                                <img src={project1} alt="zdj1"></img>
                            <div class="container">
                            <p>Komercyjny projekt - diva-slupsk.pl</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://renrom.pl/" target="_blank">
                        <div className="polaroid">
                            <img src={project2} alt="zdj2"></img>
                            <div class="container">
                            <p>Komercyjny projekt - renrom.pl</p>
                            </div>
                        </div>
                    </a>
            </div>
            <div><h2>Projekty w trackie pracy</h2>
                <a href="http://mysticwar.pl/" target="_blank">
                    <div className="polaroid">
                        <img src={project3} alt="zdj3"></img>
                        <div class="container">
                        <p>Gra - mysticwar.pl</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="boxsky"></div>

        </div>
     );
}
 
export default SelectionProduts;