import React from "react";
import '../styles/AddTask.css'

const style = {
    color: 'red',
}


const Task = (props) => {

    const {text, date, id, active, important, finishDate} = props.task;

    if(active){
    return (
        <div>
            <p>
                <strong style={important ? style : null}>{text}</strong> - do {date} 
                <button id="TaskButton" onClick={() => props.change(id)}>Zostało zrobione</button>
                <button id="TaskButton" onClick={() => props.delete(id)}>X</button>
            </p>
        </div>

    );}else{

        const finish = new Date(finishDate).toLocaleDateString()

        return (
            <div>
            <p className="styleDone">
                <strong>{text}</strong> zrobic do {date} <br/><br/>
                - potwierdzenie wykonania {finish}
                <button id="TaskButton" onClick={() => props.delete(id)}>X</button>
            </p>          
          </div>
        )
    }

}

export default Task;