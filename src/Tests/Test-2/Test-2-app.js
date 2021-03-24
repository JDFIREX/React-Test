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
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
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

    useEffect(() => {
        setState(state => ({data: state.data, loading: true}))
        fetch(url).then(r => r.text()).then(r => {
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


    useEffect(() => {
        setState(state => ({data: state.data, loading: true}))
        fetch(url).then(r => r.text()).then(r => {
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


    useEffect(() => {
        setState(state => ({data: state.data, loading: true}))
        fetch(url).then(r => r.text()).then(r => {
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


//
// 
// 


export const UseCallBackBasic = () => {

    const [count, setCount] = useState(0)
    const favoriteNums = [7,21,37];

    const increment = useCallback((n) => {
        setCount(c => c + n)
    },[setCount])


    return(
        <div>
            <h1>Use Call Back Basic</h1>
            <HelloCallBack  increment={increment} />
            <p>count : {count}</p>
            {favoriteNums.map(m => {
                return(
                    <Square increment={increment} n={m} key={m} />
                )
            })}
        </div>
    )
}

const HelloCallBack = React.memo(({increment}) => {

    // useCountRenders()

    return(
        <button onClick={() => increment(5)}>hello</button>
    )
})

const Square = React.memo(({n, increment}) => {

    useCountRenders()

    return(
        <button onClick={() => increment(n)}>{ n }</button>
    )
})

const useCountRenders = () => {
    const renders = useRef(0);

    console.log("renders: ", renders.current++)
}

//
// 
// 


export const UseMemoBasic = () => {
    // https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json

    const [count, setCount] = useState(0)

    const {data} = UseFetchMemo("https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json")


    const computeLongesWord = (data) => {
        console.log("compute")
        if(!data){
            return [];
        }else{
            let longesWord = ''

            data.forEach(s => s.split(" ").forEach(w => {
                if(w.length > longesWord.length){
                    longesWord = w;
                }
            }))

            return longesWord
        }
    }

    const longesWord = useMemo(() => computeLongesWord(data), [data])

    return(
        <div>
            <h1>Use Memo Basic</h1>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button> <br />
            <div>
                {longesWord}        
            </div>
        </div>
    )
}

const UseFetchMemo = (url) => {

    

    const isCurrent = useRef(true)
    const [data,setData] = useState({data: null});


    useEffect(() => {
        return () => {
            isCurrent.current = false;
        }
    })


    useEffect(() => {
        fetch(url).then(r => r.json()).then(r => {
            if(isCurrent.current){
                setData({data : r})
            }
        })
    },[url,setData])

    return data;

}

// 
// 
// 

const reducer = (state,action) => {

    switch(action.type){
        case "add-todo":
            return {todos : [...state.todos, {text: action.text, completed : false}]};
        case 'toggle-todo' : 
            return {
                todos: state.todos.map((t, idx) => idx === action.idx ? {...t, completed : !t.completed} : t)
            }
        default:
            return state;
    }

}


export const UseReducerBasic = () => {


    // const [state,dispatch] = useReducer(reducer,0)
    const [{todos},dispatch] = useReducer(reducer,{todos: []})
    const [text, setText] = useState();


    return(
        <div>
            <h1>Use Reducer Basic</h1>
            {/* <p>{state}</p>
            <button onClick={() => dispatch({type : "increment" })}>+</button>
            <button onClick={() => dispatch({type : "decrement"})}>-</button> */}

            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type : "add-todo", text})
                setText("");
            }}>
                <input value={text} onChange={ e => setText(e.target.value)} />
                <button type="submit">add todos</button>
            </form>
            {todos.map((a,idx) => <div key={a.text} style={{textDecoration: a.completed ? "line-through" : ""}} onClick={() => dispatch({type: "toggle-todo", idx})}>{a.text}</div>)}
        </div>
    )
}


// 
// 
// 


export const UseContextBasic = () => {


    const [user, setUser] = useState(null)


    const value = useMemo(() => ({user,setUser}), [user,setUser])

    return(
        <div>
            <h1>Use Context Basic with Route</h1>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Test2Index">Home</Link>
                            </li>
                            <li>
                                <Link to="/about/">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <UserContext.Provider value={value}>
                    <Route path="/Test2Index" component={Index} />
                    <Route path="/about/" component={About} />
                </UserContext.Provider>

            </Router>
        </div>
    )
}

const Index = () => {

    const {user,setUser} = useContext(UserContext)

    return(
        <div>
            <p>Index</p>
            <pre>{JSON.stringify(user,null,2)}</pre>
            {
                user ? (
                    <button
                        onClick={() => {
                            setUser(null)
                        }}
                    >logout</button>
                 ) : (
                    <button onClick={async () => {
                        const user = await login();
                        setUser(user)}
                    } >login</button>
                 )
            }
            
        </div>
    )
}

const About = () => {
    const {user,setUser} = useContext(UserContext)

    return(
        <div>
            <p>About</p>
            <pre>{JSON.stringify(user,null,2)}</pre>
        </div>
    )
}

const login = async () => {
    return {
        id: 4,
        username : "bob",
        email: "bob@bob.com"
    }
}

const UserContext = React.createContext(null)