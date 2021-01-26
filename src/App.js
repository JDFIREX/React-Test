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

export class formularz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : ""
        }
        this.InputChange = this.InputChange.bind(this)
        this.SubmitMess = this.SubmitMess.bind(this)
    }

    InputChange(event){
        this.setState({
            value : event.target.value
        })
    }
    SubmitMess(event){
        document.querySelector(".submit_p").innerHTML = "Your mess : " + this.state.value;
        event.preventDefault();
    }


    render() {
        return(
            <>
                <form onSubmit={this.SubmitMess}>
                    <label for="test">Napisz cos</label>
                    <input type="text" name="test" id="test" onChange={this.InputChange} />
                    <button type="submit">Submit</button>
                </form>
                <p className="submit_p"></p>
            </>
        )
    }

}




export class Select extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : "test-1"
        }
        this.SetValue = this.SetValue.bind(this);
        this.SubmitValue = this.SubmitValue.bind(this);
    }

    SetValue(event) {
        this.setState({
            value : event.target.value
        })
    }
    SubmitValue(){
        document.querySelector(".select_p").innerHTML = this.state.value;
        event.preventDefault();
    }


    render(){
        return(
            <div>
                <form onSubmit={this.SubmitValue}>
                    <label>
                        Wybierz Test : 
                        <select  value={this.state.value} onChange={this.SetValue}>
                            <option value="test-1">test-1</option>
                            <option value="test-2">test-2</option>
                            <option value="test-3">test-3</option>
                            <option value="test-4">test-4</option>
                            <option value="test-5">test-5</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                    <p className="select_p"></p>
                </form>
            </div>
        )
    }
}



export class DoubleInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            idzie : false,
            ile : "0",
        }
        this.InputChange = this.InputChange.bind(this);
        this.DoubleSubmit = this.DoubleSubmit.bind(this)
    }

    InputChange(event){
        let target = event.target;
        let value = target.type == "checkbox" ? target.checked : target.value;
        let name = target.name
        this.setState({
            [name] : value
        });
    }
    DoubleSubmit(event){
        document.querySelector(".Double_p").innerHTML = `${this.state.idzie} | ${this.state.ile}`
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.DoubleSubmit}>
                    <label>
                    idzie : 
                        <input 
                            name="idzie"
                            type="checkbox"
                            data-checked={this.state.idzie}
                            checked={this.state.idzie}
                            onChange={this.InputChange}
                        />
                    </label>
                    <label>
                    ile : 
                        <input 
                            name="ile"
                            type="number"
                            data-value={this.state.ile}
                            value={this.state.ile}
                            onChange={this.InputChange}
                        />
                    </label>
                    <input type="Submit" value="Submit" />
                </form>
                <p className="Double_p"></p>
            </div>
        )
    }
}


function ChangeToFahrenheit(value){
    return ( value * 9 /5 )  + 32;
}

function ChangeToTemperatura(value){
    return (value - 32) * 5 / 9;
}


export class Temperatura extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            c : 0,
            f : 0,
        }

        this.SetTemparature = this.SetTemparature.bind(this)
    }

    SetTemparature(event){
        let target = event.target;
        let name = target.name;
        let Oname = name == "c" ? "f" : "c";
        let TValue = target.value;
        let OValue = 0;
        name == "c" ? OValue = ChangeToFahrenheit(TValue) : OValue = ChangeToTemperatura(TValue);
        OValue = OValue.toFixed(2)
        this.setState({
            [name] : TValue,
            [Oname] : OValue
        })
    }


    render(){
        return(
            <div>
                <form>
                    <label>
                        Temperatura : 
                        <input 
                            name="c"
                            className="c"
                            data-value={this.state.c}
                            value={this.state.c}
                            onChange={this.SetTemparature}
                        />
                    </label>
                    <br />
                    <br />
                    <label>
                        Fahrenheit : 
                        <input 
                            name="f"
                            className="f"
                            data-value={this.state.f}
                            value={this.state.f}
                            onChange={this.SetTemparature}
                        />
                    </label>
                </form>
            </div>
        )
    }
}

