import React from "react";
import project1 from '../images/projekt1.png';
import project2 from '../images/projekt2.png';
import project3 from '../images/projekt3.png';
import '../styles/products.css';

const SelectionProduts = () => {
    return ( 
        <div>
            <div className="row section-information">
                <div className="col">
                    <p>Ostatnio wykonałem 2 projekty komerycjne z których osoby zamawiajace sa bardzo zadowolone.</p>
                </div>
            </div>


             <div className="row">
                <h3>Projekty Ukończone</h3>
                             <div className="col">
                                <a href="http://diva-slupsk.pl/" target="_blank">
                                    <div className="polaroid">
                                            <img src={project1} alt="zdj1"></img>
                                        <div class="container">
                                        <p>Komercyjny projekt - diva-slupsk.pl</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                             <div className="col">
                                <a href="http://diva-slupsk.pl/" target="_blank">
                                    <div className="polaroid">
                                            <img src={project2} alt="zdj1"></img>
                                        <div class="container">
                                        <p>Komercyjny projekt - diva-slupsk.pl</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                    </div>
                    <div className="row">
                    <h3>Projekty w Trackie</h3>
                             <div className="col">
                                <a href="http://diva-slupsk.pl/" target="_blank">
                                    <div className="polaroid">
                                            <img src={project3} alt="zdj1"></img>
                                        <div class="container">
                                        <p>Komercyjny projekt - diva-slupsk.pl</p>
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