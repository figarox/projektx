import React, { Component } from "react";
import '../styles/main.css';
import Icon1 from '../icon/html.png';
import Icon2 from '../icon/css.png';
import Icon3 from '../icon/js.png';
import Icon4 from '../icon/react.png';
import Icon5 from '../icon/php.png';
import PicutureSection from '../images/baner.jpg';
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";


class SelectionProduts extends Component {

    counter = 7

    state = {
        tasks: [
            {
            id: 0,
            text: 'zagraj w wiedzmina 3',
            date: '2021-11-21',
            important: false,
            active: true,
            finishDate: null,
            },
            {
            id: 1,
            text: 'wyslij cv',
            date: '2021-10-21',
            important: true,
            active: false,
            finishDate: null,
            },
             {
            id: 3,
            text: 'urządzić impreze',
            date: '2021-12-31',
            important: false,
            active: true,
            finishDate: null,
            },
            {
           id: 4,
           text: 'moje urodziny',
           date: '2022-01-02',
           important: false,
           active: true,
           finishDate: null,
           }
           ,
            {
           id: 5,
           text: 'Natalki urodziny',
           date: '2022-05-10',
           important: false,
           active: true,
           finishDate: null,
           }
           ,
            {
           id: 6,
           text: 'nauczyc sie porfesionalnie React',
           date: '2021-10-10',
           important: true,
           active: true,
           finishDate: null,
           }
        ]
    }

    changeTaskStatus = (id) => {
        const tasks = Array.from(this.state.tasks)
        tasks.forEach(task => {
            if(task.id === id){
                task.active = false;
                task.finishDate = new Date().getTime()
             }
        })
        this.setState({
            tasks
        })
    }

    addTask = (text, date, important) => {
        const task = {
            id: this.counter,
            text,
            date,
            important,
            active: true,
            finishDate: null,
            }
            
            this.counter++
            console.log(task, this.counter)

            this.setState(prevState => ({
                tasks: [...prevState.tasks, task]
            }))
            return true;
        
    }

    deleteTask = (id) => {
        const tasks = [...this.state.tasks];
        const index = tasks.findIndex(task => task.id === id)
        tasks.splice(index, 1);
        
        this.setState({
            tasks
        })
    }

    render(){
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
                    <h2 className="h2icon">
                    Jakie Technologie poznałem?
                    </h2>
                    
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
                <div className="cointerner-teach">
                    <div className="todobox">
                        <div className="todo">
                            <h2>Moje cele</h2>
                            <AddTask add={this.addTask}/>
                            <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
                        </div>
                        <div className="done">
                            <h2>Zrobione</h2>
                        </div>
                    </div>
                </div>
            </div>
         );
    }

}
 
export default SelectionProduts;