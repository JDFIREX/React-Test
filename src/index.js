import React from "react";
import ReactDOM from "react-dom";
import * as App from "./App";


const numbers = [1, 2, 3, 4, 5];



class Index extends React.Component {
    render() {
        return (
            <>
                <App.Hello />
                <hr />
                <App.Hello />
                <hr />
                <App.Button />
                <hr />
                <App.CreateList />
                <hr />
                <App.NumberList numbers={numbers} />
                <hr />
                <App.Clock />
                <hr />
                <App.Checked />
                <hr />
            </>
        )
    }
}



ReactDOM.render(<Index />, document.querySelector(".root"))