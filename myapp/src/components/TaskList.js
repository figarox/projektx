import React from "react";
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active );

    done.sort((a,b) => b.finishDate - a.finishDate)

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);

    return ( 
        <>
        <div className="active">
            {activeTasks.length > 0 ? activeTasks : <p>Brak Zadań !!!</p>}
        </div>
        <div className="doneTask">
            <h3>Zrobiłeś <em>({done.length})</em> zadania</h3>
            {doneTasks}
        </div>
        </>
     );
}
 
export default TaskList;