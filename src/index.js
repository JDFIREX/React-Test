import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import Day1 from "./Days/Day-1/Day-1";
import Index from "./App/AppIndex";


class MainPage extends React.Component {
    render(){
        return (
            <>
                <h1>Main Page</h1>
                <hr />
                <Link to="/Index" >Test React</Link>
                <br/>
                <hr />
                <Link to="/Day1" >React Day 1</Link>
            </>
        )
    }
}



class MainIndex extends React.Component {
    render() {
        return  (
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/Index" component={Index} />
                    <Route exact path="/Day1" component={Day1} />
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(<MainIndex />, document.querySelector(".root"))