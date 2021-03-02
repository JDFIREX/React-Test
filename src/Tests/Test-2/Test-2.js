import React, 
{ 
    useState, 
    useEffect, 
    useRef, 
    useLayoutEffect, 
    useCallback, 
    useMemo, 
    useReducer, 
    useContext
} from "react"
import {Link} from "react-router-dom"
import * as App from "./Test-2-app"


const Main = () => {
    return(
        <div>
        <h1>test</h1>
            <App.Header />
            <hr />
            <App.BasicUseState />
            <hr />
            <App.FormUseState />
            <hr />
            <App.BasicUseEffect />
            <hr />
            <App.CurrentLocation />
            <hr />
            <App.CustomUseFetch />
            <hr />
            <App.UseRefBasic />
            <hr />
            <App.UseLayoutEffectBasic />
        </div>
    )
}


const Nav = () => {

    return(
        <div>
            <Link to="/" >Main Index</Link> 
            <hr />
        </div>
    )
}



export default class Test2 extends React.Component{

    render(){
        return(
            <React.StrictMode>
    
                <Nav />
                <Main />
    
            </React.StrictMode>
        )
    }
}