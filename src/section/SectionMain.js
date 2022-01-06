import React, { Component } from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, FadeIn, StickyIn, ZoomIn, Sticky} from "react-scroll-motion";
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
import Typical from 'react-typical';

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
           text: 'Urządzić impreze urodzinową',
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
           text: 'Nauczyć się profesjonalnie React',
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
            <ScrollContainer>
            <ScrollPage page={2}>
                    <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn(100))}>
                    <div className="containerbox">
                    <div className="row">
                            <div className="col">
                                    <h2>Kim jestem ?</h2>
                                    <p>Mam na imie Maciej Rożnawski mam 20 lat. Ukończyłem technikum informatyczne
                                    ,w którym zdobyłem kwalifikacje w zawodzie informatyk.Programistyką zajmuję się od 13 roku życia.
                                    W tym czasie udało mi się stworzyć grę jaką była platformówka.Uwielbiam tworzyć i widzieć efekty mojej pracy to napedza mnie do 
                                    jeszcze wiekszego działania oraz poszerzania wiedzy w zakresie programistyki.
                                    W przyszłości chciałbym tworzyć aplikację które znajdowały by się na szczycie rankingu aplikacji webowych oraz zaspokajały by potrzeby najbardziej wymagajacych odbiorców.
                                    </p>
                            </div>
                            <div className="col">
                                <div className="BoxPicture">
                                    <img src={PicutureSection} alt="html" className="pictureBox"></img>
                                </div>
                            </div>
                    </div>
                </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={3}>
                    <div className="section1">
                    <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
                    <span style={{ fontSize: "50px"}}>
                        Moje Motto
                    </span>
                    <br/>
                    <span style={{ fontSize: "40px"}}>
                    „Im wiecej rzeczy się dowiaduje to
                    </span>
                    <br/>
                    <span style={{ fontSize: "30px" }}>
                    wiem, że nic nie wiem”
                    </span>
                    <br/>
                    </Animator>
                    </div>
                </ScrollPage>
                <ScrollPage page={4}>
                    <Animator animation={batch(Fade(), Move(), Sticky())}>
                    <span className="section2"></span>
                    <span style={{ fontSize: "40px" }}>Z JavaScript moza wszystko</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={5}>
                    <Animator animation={batch(Fade(), Move(), Sticky())}>
                    <span className="section2"></span>
                    <span style={{ fontSize: "40px" }}></span>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
          
                

                <div className="cointerner-center">
                    <div className="row">
                    <p className="knowtext">Technologie jakie poznałem</p>
                        <div className="col">
                            <div className="IconTech">
                                <img src={Icon1} alt="html" ></img>
                            </div>
                        </div>
                        <div className="col">
                            <div className="IconTech">
                                <img src={Icon2} alt="html" ></img>
                            </div>
                        </div>
                        <div className="col">
                            <div className="IconTech">
                                <img src={Icon3} alt="html" ></img>
                            </div>
                        </div>
                        <div className="col">
                            <div className="IconTech">
                                <img src={Icon4} alt="html" ></img>
                            </div>
                        </div>
                        <div className="col">
                            <div className="IconTech">
                                <img src={Icon5} alt="html" ></img>
                            </div>
                        </div>
                        <div className="col">
                            <div className="IconTech">
                                <img src={Icon6} alt="html" ></img>
                            </div>
                        </div>
                        <div className="col">
                            <div className="IconTech">
                                <img src={Icon7} alt="html" ></img>
                            </div>
                        </div>
                        <div className="col">
                            <div className="IconTech">
                                <img src={Icon8} alt="html" ></img>
                            </div>
                        </div>
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
                            <p><TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/></p>
                        </div>
                    </div>
                </div>
            </div>
            
         );
    }

}
 
export default SelectionProduts;