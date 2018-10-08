import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Schools from './Components/Schools';

class App extends Component {
  render() {
    return(
      <div>
    <Switch>
       <Route exact path="/" component={Login}/>
       <Route path="/home" component={Home}/>
       <Route path="/schools/:id" component={Schools}/>
    </Switch>
      </div>
    )
   }
  }

export default App;