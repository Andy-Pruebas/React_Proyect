import React, {Component} from 'react';
import './App.css';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import EncDiabetes from './componentes/EncDiabetes';
import EncAnemia from './componentes/EncAnemia';
import Menu from './componentes/Menu';
import Grafica from './componentes/Chart';
import Anemia from './componentes/anemia';
import Diabetes from './componentes/Diabetes';
import OMS from './componentes/Oms';
import TestDiabetes from './componentes/TestDiabetes';
import TestAnemia from './componentes/TestAnemia';

import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <Router>
        <Route path="/Login" component={Login}>
        <Login/>
        </Route>

        <Route path="/Registro">
        <Registro/>
        </Route>

        <Route path="/EncDiabetes">
        <EncDiabetes/>
        </Route>

        <Route path="/EncAnemia">
        <EncAnemia/>
        </Route>
        
        <Route path="/Menu" enf="asdfasdf">
        <Menu/>
        </Route>

        <Route path="/Grafica">
        <Grafica/>
        </Route>

        <Route path="/Diabetes">
          <Diabetes/>
        </Route>

        <Route path="/Anemia">
          <Anemia/>
        </Route>

        <Route path="/OMS">
          <OMS/>
        </Route>

        <Route path="/TestDiabetes">
          <TestDiabetes />
        </Route>
        <Route path="/TestAnemia">
          <TestAnemia/>
        </Route>

      </Router>
    );
  }
}

export default App;