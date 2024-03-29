import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navbar';
import News from './components/new';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>  
        <Router>
         <Navbar/>
            <Switch>
              <Route exact path="/">
              <News key="general" pageSize='11' category="general"/>
              </Route>
              <Route exact path="/business">
              <News key="business" pageSize='11' category="business"/>
              </Route>
              <Route exact path="/entertainment">
               <News key="entertainment" pageSize='11' category="entertainment"/>
              </Route>
              <Route exact path="/general">
              <News key="general" pageSize='11' category="general"/>
              </Route>
              <Route exact path="/health">
              <News key="health" pageSize='11' category="health"/>
              </Route>
              <Route exact path="/science">
              <News key="science" pageSize='11' category="science"/>
              </Route>
              <Route exact path="/sports">
              <News key="sports" pageSize='11' category="sports"/>
              </Route>
              <Route exact path="/technology">
              <News key="technology" pageSize='11' category="technology"/>
              </Route>
              {/* <Route path="/business">
              <News  pageSize='11' category="business"/>
              </Route>
              <Route path="/business">
              <News  pageSize='11' category="business"/> */}
              {/* </Route> */}
            </Switch>
        </Router>
      </div>
    )
  }
}
