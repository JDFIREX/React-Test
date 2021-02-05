import React, { useLayoutEffect, useState } from "react";
import "./Test-1.css"



// 
//  header
// 



function useWindowSize(){
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
          setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
      return size;
}

function Nav(){
    const width = useWindowSize();

    if(width > 1000){
        return  (
            <div>
                <h1>desktop</h1>
            </div>
        )
    }else{
        return (
            <div>
                <h1>Mobile</h1>
            </div>
        )
    }
}


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hamburger : false
        }
    }

    render(){
        
        return(
            <div className="Header" >
                <h1>React with import css file</h1>
                <Nav/>
            </div>
        )
    }
}




// 
// main app
// 



export default class Test1 extends React.Component {
    constructor(props){
        super(props);

    }

    render() {

        return (
            <>
                <Header />
            </>
        )
    }
}
