import React from "react";
import * as App from "./App";


const numbers = [1, 2, 3, 4, 5];

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];




export default class Index extends React.Component {
    render() {
        return (
            <>
                <App.Days />
                <hr />
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
                <App.formularz />
                <hr />
                <App.Select />
                <hr />
                <App.DoubleInput />
                <hr />
                <App.Temperatura />
                <hr />
                <App.Dziedziczenie />
                <hr />
                <App.Production  products={PRODUCTS}/>
                <hr />
            </>
        )
    }
}