import React from "react";

export class Hello extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello World!</h1>
                <h2>Test</h2>
            </div>
        )
    }
}

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked : false,
            value : "Not Clicked"
        };
        this.ChangeStatus = this.ChangeStatus.bind(this);
    }

    ChangeStatus() {
        this.setState(state => ({
            clicked : !state.clicked,
            value : !state.clicked ? "Clicked" : "Not Clicked"
        }))
    }

    render(){
        return (
            <div>
                <button 
                    className="btn"
                    data-clicked={this.state.clicked}
                    onClick={this.ChangeStatus}>
                    {this.state.value}
                </button>
            </div>
        )
    }
}

class List extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.fetch.map(item => {
                        return (
                        <li
                            className="item"
                            data-index={item.index}>
                            {item.mess}
                        </li>
                        )
                    })
                }
            </ul>
        )
    }
}




export class CreateList extends React.Component {
    constructor(props) {
        super(props);
        this.fetch = [
            {
                index : "0",
                mess : "wenkjr"
            },
            {
                index : "1",
                mess : "wenkjr"
            },
            {
                index : "2",
                mess : "wenkjr"
            },
            {
                index : "3",
                mess : "wenkjr"
            },
            {
                index : "4",
                mess : "wenkjr"
            },
        ]
    }

    render(){
        return (
            <div>
                <List fetch={this.fetch}/>
            </div>
        )
    }

}



function ListItem(props) {
    // Dobrze! Nie ma potrzeby definiowania klucza tutaj:
    return <li>{props.value}</li>;
}
   
export function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Dobrze! Klucz powinien zostać ustawiony na elementach wewnątrz tablicy.
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
        {listItems}
        </ul>
    );
}


export class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }


    render(){
        return(
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}



export class Checked extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            value : ""
        }
        this.checked = this.checked.bind(this)
    }

    checked(e){
        this.setState(state => ({
            count : state.count + 1,
            value : `this ${e.target.outerHTML} - ${state.count}`
        }))
    }
    render(){
        return(
            <div>
                <button onClick={(e) => this.checked(e)}>Kliknij</button>
                <h1>{this.state.value}</h1>
            </div>
        )
    }
}


export class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogin : false
        }
    }




    render(){
        return(
            <div>
                <button
                onClick={this.}>
                    {this.state.isLogin ? "Wyloguj się" : "Zaloguj się"}
                </button>
            </div>
        )
    }
}

