import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Page from './Page';
import Footer from '../pages/Footer';
import Navigation from './Navigation';
import Section from './Section';

class App extends Component{
  render(){
    return(
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header>
            {<Navigation />}
            {<Page />}
          </header>
          <section>
            {<Section />}
          </section>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
    )
  }
}

export default App;
 