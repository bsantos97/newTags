import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Si quieres comenzar a Etiquetar los Tweets</h1>
        <h1> Primero debe de Iniciar Seción</h1>
        <div className="jumbotron">
          
          
          <Login/>
          
        </div>
      </header>
      
    </div>
  );
}

export default App;

