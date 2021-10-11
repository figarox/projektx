import React, { Component } from "react";
import '../styles/main.css';
import Icon1 from '../icon/html.png';
import Icon2 from '../icon/css.png';
import Icon3 from '../icon/js.png';
import Icon4 from '../icon/react.png';
import Icon5 from '../icon/php.png';
import Icon6 from '../icon/git.png';
import Icon7 from '../icon/bootstrap.png';
import Icon8 from '../icon/c++.png';
import PicutureSection from '../images/baner.jpg';
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";


class SelectionProduts extends Component {

    counter = 7

    state = {
        tasks: [
            {
            id: 0,
            text: 'Zdobyć pierwszą pracę',
            date: '2021-11-21',
            important: true,
            active: true,
            finishDate: null,
            },
            {
            id: 1,
            text: 'Wysłać CV',
            date: '2021-10-21',
            important: true,
            active: true,
            finishDate: null,
            },
             {
            id: 3,
            text: 'Zdobyć nowe doświaczenie',
            date: '2021-12-31',
            important: false,
            active: true,
            finishDate: null,
            },
            {
           id: 4,
           text: 'Urzadzić impreze urodzinową',
           date: '2022-01-02',
           important: false,
           active: true,
           finishDate: null,
           }
           ,
            {
           id: 5,
           text: 'Przejść Wiedzmina 3',
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
                     ,w którym zdobyłem kwalifikacje w zawodzie informatyk.Programistyką zajmuję się od 13 roku zycia.
                      W tym czasie udało mi się stworzyć grę jaką była platformówka.Uwielbiam tworzyć i widzieć efekty mojej pracy to napedza mnie do 
                      jeszcze wiekszego działania oraz poszerzania wiedzy w zakresie programistyki.
                      W przyszłości chciałbym tworzyć aplikację które znajdowały by się na szczycie rankingu aplikacji webowych oraz zaspokajały by potrzeby najbardziej wymagajacych odbiorców.
                     </p>
                </div>
                <div className="cointerner">
                    <img src={PicutureSection} alt="html" ></img>
                </div>
                <div className="cointerner">
                    <h2>nie wiem co</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis id odio vel 
                    sollicitudin. Nullam vestibulum consequat lorem, fermentum semper risus pellentesque vel.
                     Vivamus imperdiet ante et purus congue efficitur. Phasellus gravida felis leo, non malesuada dui dictum in. 
                     Vestibulum vestibulum dignissim commodo. Curabitur aliquam mattis tortor eget aliquet. Donec suscipit malesuada est, 
                     eget consequat mauris ullamcorper imperdiet. Etiam ornare pharetra nisi, at tincidunt nibh laoreet at. Integer malesuada 
                     nibh sed ipsum sollicitudin vulputate. Phasellus nec sollicitudin lorem. Duis mattis risus sagittis, sodales lorem at, consequat dolor.
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas iaculis, nisl sit amet rutrum faucibus, leo arcu pharetra purus, 
                      non tristique massa purus
                       eu nulla. Integer lectus neque, ultrices at tincidunt et, volutpat at leo. Cras mi odio, imperdiet nec porta vitae, hendrerit suscipit quam.
                     Praesent blandit, massa rhoncus tempor interdum, ligula dui pharetra ipsum, quis tempor risus diam vel augue.</p>
                </div>
                <div className="cointerner">
                    <h2>Kontakt</h2>
                    <input type="text" placeholder="Wpisz imie i nazwisko"/><br/>
                    <textarea rows="10" cols="50" placeholder="Oco chcesz zapytac?"></textarea><br/>
                    <button className="FormTask">Wyślij</button>
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
                    <div className="IconTech">
                        <img src={Icon6} alt="git" ></img>
                    </div>
                    <div className="IconTech">
                        <img src={Icon7} alt="bootstrap" ></img>
                    </div>
                    <div className="IconTech">
                        <img src={Icon8} alt="c++" ></img>
                    </div>
                </div>
                <div className="cointerner-teach">
                      <div className="BoxMain"></div>
                      <div className="BoxMain2"></div>
                      <div className="BoxMain3"></div>
                    <div className="PanelToDo">
                       <AddTask add={this.addTask}/>
                  </div>
                    <div className="todobox">
                        <div className="todo">
                            <h2>Moje cele</h2>
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