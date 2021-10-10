import React from "react";

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
                <button onClick={() => props.change(id)}>Zostało zrobione</button>
                <button onClick={() => props.delete(id)}>X</button>
            </p>
        </div>

    );}else{

        const finish = new Date(finishDate).toLocaleDateString()

        return (
            <div>
            <p>
                <strong>{text}</strong> zrobic do {date} <br/>
                - potwierdzenie wykonania <span>{finish}</span>
                <button onClick={() => props.delete(id)}>X</button>
            </p>          
          </div>
        )
    }

}

export default Task;