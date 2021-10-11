import React from "react";
import '../styles/main.css';

const onMouseEnterHandler = () => {
    alert("Hello World")
}
 

const StarButton = () => {
    return ( 
        <button onMouseEnter={onMouseEnterHandler} className="starbutton">
            <p>O mnie</p>
        </button>
     );
}
 
export default StarButton;