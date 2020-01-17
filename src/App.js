import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import About from'./PagesComponents/About.js';
//import Actualization from './PagesComponents/Actualization.js';
//import Contact from './PagesComponents/Contact.js';
//import Header from './PagesComponents/Header.js';
//import Home from './PagesComponents/Heome.js';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1> Si quieres comenzar a Etiquetar los Tweets</h1>
        <h1> Primero debe de Iniciar Seción</h1>
        <div className="jumbotron">
          
          
        <Login/>
          
        </div>
      </header>


      
    //</div>
    //<Router>
      //<div>
        //<Header/>
        //<Switch>
        //<Route exact path="/" component={Home} />
        //<Route path="/about" component={About} />
        //<Route path="/contact" component={Contact} />
        //<Route path="/actualization" component={Actualization} />
        //</Switch>
      //</div>
    //</Router>

  );
  }
}

export default App;

