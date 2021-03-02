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
import "./test2.css"

export const Header = () => {
    return (
        <div>
            <h1>React Hooks Tutorial</h1>
        </div>
    )
}

// 
// 
// 

export const BasicUseState = () => {
    const [{count1, count2}, setCount] = useState({count1: 10, count2: 20});
    //  const [count1, setCount1] = useState(10)
    //  const [count2, setCount2] = useState(20)

    return (
        <div>
            <h1>Basic Use State</h1>
            <p> {count1} </p>
            <button onClick={() => setCount((currentState) => ({
                ...currentState, 
                count1 : currentState.count1 + 1
            }))}>+</button>
            <p> {count2} </p>
            <button onClick={() => setCount((c) => ({...c, count2 : c.count2 + 1}))}>+</button>
        </div>
    )
}

// 
// 
// 

export const FormUseState = () => {

    const [value, handleChange] = useForm({email: "", password: ""})

    return(
        <div>
        <h1>From use State - custom Hooks</h1>
            <form>
                <input 
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    value={value.password}
                    onChange={handleChange}
                />
            </form>
            <p>{value.email} | {value.password}</p>
        </div>
    )
}


const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    return [values, e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }]
}


// 
// 
// 



export const BasicUseEffect = () => {

    const [hello, setHello] = useState(true)

    return(
        <div>
        <h1>Use effect basic</h1>
        {hello && <Hello />}
        <button onClick={() => setHello(!hello)} >toggle</button>
        </div>
    )


}
const Hello = () => {

    useEffect(() => {
        console.log("render")

        return(() => {
            console.log("unmount")
        })
    })

    return <div>Hello</div>
}


// 
// 
// 

export const CurrentLocation = () => {

    const [pos, setPos] = useState({posx : 0, posy : 0})

    useEffect(() => {
        const currentPos = (e) => {
            setPos( (cpos) => ({
                ...cpos,
                posx : e.pageX,
                posy : e.pageY
            }))
        }

        window.addEventListener("mousemove", currentPos)

        return () => {
            window.removeEventListener("mousemove", currentPos)
        }
    },[])


    return(
        <div>
            <h1>Current Location</h1>
            <p>x : {pos.posx}</p>
            <p>y : {pos.posy}</p>
        </div>
    )
}


// 
// 
// 


export const CustomUseFetch = () => {

    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")))
    const {data,loading} = UseFetch(`http://numbersapi.com/${count}/trivia`);

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
    },[count])

    return(
        <div>
            <h1>Custom Use Fetch Api</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            {!data ? "loading..." : data}
        </div>
    )
}


const UseFetch = (url) => {

    const [state, setState] = useState({data: null, loading: true})

    useEffect(async() => {
        setState(state => ({data: state.data, loading: true}))
        await fetch(url).then(r => r.text()).then(r => {
                setState({data: r, loading: false})
        })

    },[url, setState])

    return state;
}


// 
// 
// 


export const UseRefBasic = () => {

    const [value, handleChange] = useForm({email: "", password: ""})
    const [hello , setHello] = useState(true);
    const helloFun = useRef(() => console.log("hello"))
    const inputRef = useRef();

    return(
        <div>
        <h1>Use Ref Basic</h1>
            <form>
                <input 
                    name="email"
                    ref={inputRef}
                    value={value.email}
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    value={value.password}
                    onChange={handleChange}
                />
                <button onClick={(e) => {
                    e.preventDefault()
                    inputRef.current.focus()
                    helloFun.current()
                }}>Focus</button>
            </form>
            <p>{value.email} | {value.password}</p>
            {hello && <UseRefHello />}
            <button onClick={() => setHello(!hello)} >toggle</button>
        </div>
    )
}


const UseRefHello = () => {

    // const renders = useRef(0)

    // console.log("hello renders: ", renders.current++)

    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")) || 0)
    const {data,loading} = UseFetchREF(`http://numbersapi.com/${count}/trivia`);

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
    },[count])

    return(
        <div>
            <h1>Use Ref Custom Use Fetch Api</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            {!data ? "loading..." : data}
        </div>
    )
}

const UseFetchREF = (url) => {

    const isCurrent = useRef(true)
    const [state, setState] = useState({data: null, loading: true})

    useEffect(() => {
        return () => {
            isCurrent.current = false;
        }
    },[])


    useEffect(async() => {
        setState(state => ({data: state.data, loading: true}))
        await fetch(url).then(r => r.text()).then(r => {
            setTimeout(() => {
                if(isCurrent.current){
                    setState({data: r, loading: false})
                }
            }, 2000);
        })

    },[url, setState])

    return state;
}

// 
// 
// 


export const UseLayoutEffectBasic = () => {

    const [value, handleChange] = useForm({email: "", password: ""})
    const [hello , setHello] = useState(true);
    const helloFun = useRef(() => console.log("hello"))
    const inputRef = useRef();


    // useLayoutEffect(() => { 
    //     console.log(inputRef.current.getBoundingClientRect())
    // },[])


    return(
        <div>
        <h1>Use Layout Effect</h1>
            <form>
                <input 
                    name="email"
                    ref={inputRef}
                    value={value.email}
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    value={value.password}
                    onChange={handleChange}
                />
                <button onClick={(e) => {
                    e.preventDefault()
                    inputRef.current.focus()
                    helloFun.current()
                }}>Focus</button>
            </form>
            <p>{value.email} | {value.password}</p>
            {hello && <UseLayoutHello />}
            <button onClick={() => setHello(!hello)} >toggle</button>
        </div>
    )

}

const UseLayoutHello = () => {

    // const renders = useRef(0)

    // console.log("hello renders: ", renders.current++)

    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count2")) || 0)
    const {data,loading} = UseFetchLayout(`http://numbersapi.com/${count}/trivia`);
    // const [width,setWidth] = useState(0)

    useEffect(() => {
        localStorage.setItem("count2", JSON.stringify(count))
    },[count])

    // useLayoutEffect(() => {

    //     setWidth(divRef.current.getBoundingClientRect());

    // },[data])

    const [width,divRef]= UseMeasure(data)

    return(
        <div>
            <h1>Use useLayoutEffect Custom Use Fetch Api and custom useLayoutEffect</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <div style={{display: "flex"}} >
                <div ref={divRef} >{!data ? "loading..." : data}</div>
            </div>
            <pre>{JSON.stringify(width, null, 2)}</pre>
        </div>
    )
}

const UseFetchLayout = (url) => {

    const isCurrent = useRef(true)
    const [state, setState] = useState({data: null, loading: true})

    useEffect(() => {
        return () => {
            isCurrent.current = false;
        }
    },[])


    useEffect(async() => {
        setState(state => ({data: state.data, loading: true}))
        await fetch(url).then(r => r.text()).then(r => {
                if(isCurrent.current){
                    setState({data: r, loading: false})
                }
        })

    },[url, setState])

    return state;
}

const UseMeasure = (deps) => {

    const [width,setWidth] = useState(0)
    const divRef = useRef()

    useLayoutEffect(() => {

        setWidth(divRef.current.getBoundingClientRect());

    },[deps])

    return [width, divRef];
}