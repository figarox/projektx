import React from "react";
import '../styles/main.css';
import Icon1 from '../icon/html.png';
import Icon2 from '../icon/css.png';
import Icon3 from '../icon/js.png';
import Icon4 from '../icon/react.png';
import Icon5 from '../icon/php.png';
import PicutureSection from '../images/baner.jpg';


const SelectionProduts = () => {
    return ( 
        <div>
            <div className="cointerner">
                <h2>Kim jestem ?</h2>
                <p>Mam na imie Maciej Roznawski mam 20 lat. Ukończyłem technikum informatyczne
                 ,w którym zdobyłem kwalifikacje w zawodzie informatyk.Programistyka zajmuję się od 13 roku zycia 
                 ,w którym stworzyłem pierwszą gre jaką była platformówka.Od tamtej pory uwielbiam tworzyć i widzieć efekty mojej pracy.
                 Moim marzeniem jest tworzenie dla siebie i dla ludzi róznych przydatnych aplikacji.Daje mi to motywacje do działania
                 ,poniewa mogę z dumą patrzeć jak moja praca ma efekt na świecie.
                 </p>
            </div>
            <div className="cointerner">
                <img src={PicutureSection} alt="html" ></img>
            </div>
            <div className="cointerner">

            </div>
            <div className="cointerner">
                <h2>Kontakt</h2>
            </div>
            <div className="cointerner-center">
                <h2 className="h2icon">Jakie Technologie poznałem?</h2>
                <div className="IconTech">
                    <img src={Icon1} alt="html" ></img>
                </div>
                <div className="IconTech">
                    <img src={Icon2} alt="html" ></img>
                </div>
                <div className="IconTech">
                    <img src={Icon3} alt="html" ></img>
                </div>
                <div className="IconTech">
                    <img src={Icon4} alt="html" ></img>
                </div>
                <div className="IconTech">
                    <img src={Icon5} alt="html" ></img>
                </div>
            </div>
        </div>
     );
}
 
export default SelectionProduts;