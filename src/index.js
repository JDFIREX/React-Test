import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import Test1 from "./Tests/Test-1/Test-1";
import Test2 from "./Tests/Test-2/Test-2";
import Test3 from "./Tests/Test-3/Test-3"
import Test4 from "./Tests/Test-4/Test-4"
import Index from "./App/AppIndex";
import PersonPage from "./Tests/Test-1/Test-1-app"

export class MainPage extends React.Component {
    render(){
        return (
            <>
                <h1>Main Page</h1>
                <hr />
                <Link to="/Index" >Test React</Link>
                <br/>
                <hr />
                <Link to="/Test1" >Test React - React Course 2020 - freeCodeCamp</Link>
                <br/>
                <hr />
                <Link to="/Test2" >Test React - React Hooks Tutorial</Link>
                <br/>
                <hr />
                <Link to="/Test3" >Test React - React Suspense</Link>
                <br/>
                <hr />
                <Link to="/Test4" >Test React - react-beautiful-dnd</Link>
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
                    <Route exact path="/Test1" component={Test1} />
                    <Route exact path="/Test2" component={Test2} />
                    <Route exact path="/Test3" component={Test3} />
                    <Route exact path="/Test4" component={Test4} />
                    <Route exact path='/person/:id'  children={<PersonPage />} ></Route>
                    <Route path="*"  component={MainPage} />
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(<MainIndex />, document.querySelector(".root"))