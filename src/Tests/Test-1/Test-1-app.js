import React,  { useState, useEffect, useRef, useReducer, useContext,useMemo, useCallback } from "react";
import PropTypes from "prop-types"
import {Link, useParams } from "react-router-dom"
// greeting

function Person(){
    return(
        <>
            <h1>Pozdrowienia</h1>
        </>
    )
}
function Message(){
    return(
        <>
            <p>Pozdrowienia</p>
        </>
    )
}

export function Greeting (){
    return (
        <>
            <Person />
            <Message />
        </>
    )
}



// mini book project

function Book(props){
    return (
        <article>this is a book <br /> {props.children}</article>
    )
}

function Image(){
    return(
        <img style={{width: "200px"}} src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg" alt="book" />
    )
}

function Author(){
    return(
        <h2>Author</h2>
    )
}

function Title(){
    return(
        <h2>Tutuł</h2>
    )
}

export class BookList extends React.Component {
    constructor(props){
        super(props);

    }

    render (){
        return(
            <section>
                <h1>This is a book list</h1>
                <Book>
                    <Image />
                    <Author />
                    <Title />
                </Book>
            </section>
        )
    }
}

// JSX javascript



export class BookListJSX extends React.Component {
    constructor(props){
        super(props);
        
    }

    render (){
        const title = "Tytuł";
        const Author = "Author";
        const book = "this is a book"
        const h = "This is a book list - JSX javaScript"
        return(
            <section>
                <h1>{h.toUpperCase()}</h1>
                <article>
                    <p>{book}</p>
                    <img style={{width: "200px"}} src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg" alt="book" />
                    <h2>{Author}</h2>
                    <h2>{title}</h2>
                </article>
            </section>
        )
    }
}


// props

export class BookListProps extends React.Component {
    constructor(props){
        super(props);
        
    }

    render (){
        const title = "Tytuł";
        const Author = "Author";
        const book = "this is a book"
        const h = "This is a book list - Props"
        return(
            <section>
                <BookProps book={book} title={title} author={Author} h={h} />
            </section>
        )
    }
}


function BookProps(props) {
    return(
        <>
            <h1>{props.h.toUpperCase()}</h1>
            <article>
                <p>{props.book}</p>
                <img style={{width: "200px"}} src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg" alt="book" />
                <h2>{props.author}</h2>
                <h2>{props.title}</h2>
            </article>
        </>
    )
}

// props Destructuring

export class BookListPropsDestructuring extends React.Component {
    constructor(props){
        super(props);
        
    }

    render (){
        const title = "Tytuł";
        const Author = "Author";
        const book = "this is a book"
        const h = "This is a book list - Props Destructuring"
        return(
            <section>
                <BookPropsDestructuring book={book} title={title} author={Author} h={h} />
            </section>
        )
    }
}


function BookPropsDestructuring(props) {

    const {book,title, author,h} = props

    return(
        <>
            <h1>{h.toUpperCase()}</h1>
            <article>
                <p>{book}</p>
                <img style={{width: "200px"}} src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg" alt="book" />
                <h2>{author}</h2>
                <h2>{title}</h2>
            </article>
        </>
    )
}


// props Children

export class BookListPropsChildren extends React.Component {
    constructor(props){
        super(props);
        
    }

    render (){
        const title = "Tytuł";
        const Author = "Author";
        const book = "this is a book"
        const h = "This is a book list - Props Destructuring"
        return(
            <section>
                <BookPropsChildren book={book} title={title} author={Author} h={h} >
                    <p>dziecko dziecko dziecko</p>
                </BookPropsChildren>
            </section>
        )
    }
}


function BookPropsChildren(props) {

    const {book,title, author,h} = props

    return(
        <>
            <h1>{h.toUpperCase()}</h1>
            <article>
                <p>{book}</p>
                <img style={{width: "200px"}} src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg" alt="book" />
                <h2>{author}</h2>
                <h2>{title}</h2>
                {props.children}
            </article>
        </>
    )
}


// `simple list` 

export class List extends React.Component {
    constructor() {
        super();
    }


    render() {

        const list = ["item1","item2","item3"]

        const listMap = list.map(a => <li>{a}</li>)

        return(

            <>
            <h1>Simple List</h1>
            <ul>
                {listMap}
            </ul>

            </>
        )
    }
}

// key Prop and Spreed Operator

const books = [
    {
        id: 1,
        title : "tytul",
        author : "author",
        img : "https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg"
    },
    {
        id: 2,
        title : "tytul",
        author : "author",
        img : "https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg"
    },
    {
        id: 3,
        title : "tytul",
        author : "author",
        img : "https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg"
    },
]

function BookProp(props){

    const {title, img, author} = props;

    return (
        <>
            <article>
                <h2>{title}</h2>
                <img src={img} style={{width: "200px"}} />
                <p>{title}</p>
                <p>{author}</p>
            </article>
        </>
    )
}


export class BooksList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <h1>Key Prop and Spreed Operator</h1>
                {books.map((book) => {
                    return <BookProp key={book.id} {...book}></BookProp>
                })}
            </>
        )
    }
}


// Event Basics

export class ClickEvent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            value : "Nie Kliknięty",
            click : false
        }
        this.Clikniety = this.Clikniety.bind(this)

    }


    Clikniety(){
        this.setState(state => ({
            value : !state.click ? "klikniety" : "odklikniety",
            click : !state.click
        }))
    }

    render(){
        return(
            <>
                <div>
                    <h1 onClick={this.Clikniety}>{this.state.value}</h1>
                </div>
            </>
        )
    }
}


// advance Intro 

//  useState basic

const UseStateBasic = () => {

    const [text,setText] = useState("Nie Klikniety");
    const [textClick, setTextClick] = useState(false);

    const Klikniety = () => {
        if(!textClick){
            setText("Klikniety");
            setTextClick(true);
        }else{
            setText("od Klikniety");
            setTextClick(false)
        }
    }

    return(
        <>
            <h1>UseState - Basics</h1>
            <h2  onClick={Klikniety}>{text}</h2>
        </>
    )
}


// useState Array Example

const UseStateArray = () => {

    const data = [
        {id : 1, name : "john"},
        {id : 2, name : "peter"},
        {id : 3, name : "susan"},
        {id : 4, name : "anna"}
    ]

    const [people, setPeople] = useState(data);


    const removeItem = (id) => {
        const newPeople = people.filter((person) => person.id != id);
        setPeople(newPeople)
    }

    return(
        <>
            <h1>UseState - Array Example</h1>
            {people.map(person => {
                const {id, name} = person;
                return (
                    <div key={id}>
                    <p>{name}</p>
                    <button onClick={() => removeItem(id)}>remove item</button>
                    </div>);
            })}
            <button onClick={() => setPeople([])} >clear list</button>
        </>
    )
}


// useState Array Example

const UseStateObject = () => {

    const [person, setPerson] = useState({
        name: "peter",
        age : 23,
        message: "random message"
    })

    const changeMessage = () => {
        setPerson({...person, message : "changed message"})
    }

    return(
        <>
            <h1>UseState - Object Example</h1>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.message}</p>
            <button onClick={() => changeMessage()} >change message</button>
        </>
    )
}

// useState Array Example

const UseStateMultipleStateValues = () => {

    const [person, setPerson] = useState({
        name: "peter",
        age : 23,
        message: "random message"
    })

    const [name, setName] = useState("peter")
    const [age, setAge] = useState(24)
    const [message, setMessage] = useState("random message")

    const changeMessage = () => {
        setMessage("changed message")
    }

    return(
        <>
            <h1>UseState - Multiple state values</h1>
            <p>{name}</p>
            <p>{age}</p>
            <p>{message}</p>
            <button onClick={() => changeMessage()} >change message</button>
        </>
    )
}


// UseState - Simple Counter

const UseStateSimpleCounter = () => {

    const [count, setCount] = useState(0);

    return(
        <>
            <h1>UseState - Simple Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>++</button>
            <button onClick={() => setCount(count - 1)}>--</button> 
        </>
    )
}

// function update form

const UseStateFunctionUpdateForm = () => {

    const [count, setCount] = useState(0);


    const reset = () => {
        setCount(0)
    }

    const updateForm = () => {
        setCount((prevValue) => {
            return prevValue + 1;
        })
    }

    return(
        <div>
            <h1>function update from</h1>
            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>++</button>
                <button onClick={() => reset()}>reset</button>
                <button onClick={() => setCount(count - 1)}>--</button> 
            </div>
            <div>
                <p>{count} - function update form</p>
                <button onClick={updateForm}>++</button>
            </div>
        </div>
    )

}


// use Effect Basic

function UseEffectBasic() {

    const [value,setValue] = useState(0)


    useEffect(() => {
        if(value >= 1){
         document.title = `new Messages(${value})`;
        }
    },[value])


    return(
        <div>
            <h1>use Effect Basic | Conditional | Dependency List</h1>
            <p>{value}</p>
            <button onClick={() => setValue(value + 1) }>++</button>
        </div>
    )
}

// use effect clean up function

function UseEffectCleanup (){

    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize",checkSize)
    },[])    

    // useEffect(() => {
    //     console.log("effect")
    //     window.addEventListener("resize",checkSize)

    //     return () => {
    //         console.log("delete effect")
    //         window.removeEventListener("resize",checkSize)
    //     }

    // },)  

    return(
        <>
            <h1>Use Effect Clean up Function</h1>
            <p>{size} window size in px </p>
        </>
    )
}


// fetch data
    const url = "https://api.github.com/users";

function FetchData () {

    const [users,setUsers] = useState([]);


    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
    }

    useEffect(() => {
        getUsers();
    },[])


    return(
        <>
            <h1>Fetch Data</h1>
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>
                        <p>{user.login}</p>
                        <p>{user.html_url}</p>
                    </li>
                })}
            </ul>
        </>
    )

}
// Multiple returns

const urlUser = "https://api.github.com/users/QuincyLarson"

function MultipleReturns (){

    const [isLoading,setIsLoading] = useState(true);

    const [isError, setIsError] = useState(false);

    const [user,setUser] = useState("default user")


    useEffect(() => {
        fetch(urlUser)
        .then((response) => response.json())
        .then((user) => {
            const { login } = user;
            setUser(login)
        })
        .then(r => {
            setIsLoading(false)
        })
        .catch(() => setIsError(true))
    }, [])


    if(isLoading){
        return (
        <div>
            <h1>Multiple Returns</h1>
            <p>Loading...</p>
        </div>
        )
    }

    if(isError){
        return(
            <div>
                <h1>Multiple Returns</h1>
                <p>Error...</p>
            </div>
        )
    }

    return(
        <>
            <h1>Multiple Returns</h1>
            <p>{user}</p>
        </>
    )

}


// Short - Circuit Evaluation

function ShortCircuitEvaluation() {

    const [text,setText] = useState('');
    const firstValue = text || "hello world";
    const secondsValue = text && "hello world";

    return(
        <>
            <h1>Short Circuit Evaluation</h1>
            <p>{firstValue}</p>
            <p>{secondsValue}</p>
            <p>{text || "john doe"}</p>
        </>
    )
}

// Ternary Operator

function TernaryOperator() {

    const [text,setText] = useState('');
    const [isError,setIsError] = useState('');
    const firstValue = text || "hello world";
    const secondsValue = text && "hello world";



    return(
        <>
            <h1>Ternary Operator</h1>
            <p>{text || "john doe"}</p>
            <button onClick={() => setIsError(!isError)}>toggle error</button>
            <p>{isError && "Error..."}</p>
        </>
    )
}

// show / hide component

function ShowHideComponent() {

    const [show, setShow] = useState(false)

    const Item = () => {

        const [size,setSize] = useState(window.innerWidth);

        const checkSize = () => {
            setSize(window.innerWidth)
        }

        useEffect(() => {
            window.addEventListener('resize', checkSize)
            return window.removeEventListener("resize", checkSize)
        },[])

        return(
            <div>
                <p>Window</p>
                <p>size : {size}</p>
            </div>
        )
    }

    return(
        <>
            <h1>Show Hide Component</h1>
            <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
            {show && <Item />}
        </>
    )
}

// from basics

function FormBasics(){

    const [fname, setFName ] = useState('');
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])
    const [id, setId] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(fname && email){
            setId(id + 1)
            const person = { fname, email , id};
            setPeople((people) => {
                return [...people, person]
            })
            setFName('');
            setEmail('')

        }

    }

    return(
        <>
            <h1>Form Basics</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Name : </label>
                <input 
                    type="text" 
                    id="fname" 
                    name="fname" 
                    value={fname} 
                    onChange={(e) => setFName(e.target.value)}
                />
                <br />
                <label htmlFor="email">E-mail : </label>
                <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">add Person</button>
            </form>
            <div>
                {people && people.map(a => {
                    return(
                        <div key={a.id}>
                            <p>{a.id}</p>
                            <p>{a.fname}</p>
                            <p>{a.email}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

// Multiple Inputs

function MultipleInputs() {

    const [person,setPerson] = useState({fname : "", email : "", age : ""})
    const [people, setPeople] = useState([])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPerson({...person, [name] : value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(person.fname && person.email && person.age){
            const newPerson = {...person, id: new Date().getTime().toString()};
            setPeople([...people,newPerson])

            setPerson({fname : "", email : "", age : ""})
        }
    }

    return(
        <>
            <h1>Multiple Inputs</h1>
            <form >
                <label htmlFor="fname">Name : </label>
                <input 
                    type="text" 
                    id="fname" 
                    name="fname" 
                    value={person.fname} 
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="email">E-mail : </label>
                <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    value={person.email} 
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="age">Age : </label>
                <input 
                    type="text" 
                    id="age" 
                    name="age" 
                    value={person.age} 
                    onChange={handleChange}
                />
                <br />
                <button type="submit" onClick={handleSubmit}>add Person</button>
            </form>
            <div>
                {people && people.map(a => {
                    return(
                        <div key={a.id}>
                            <p>{a.id} | {a.fname} | {a.email} | {a.age}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}


// useRef

function UseRef() {

    const refContainer = useRef(null);
    const divContainer = useRef(null)

    const handlerSubmit = (e) => {
        e.preventDefault();
        // refContainer.current.value
    }

    useEffect(() => {
        refContainer.current.focus()
    })

    return(
        <>
            <h1>Use Ref</h1>
            <form  onSubmit={handlerSubmit}>
                <input type="text" ref={refContainer} />
                <button type="submit">submit</button>
            </form>
            <div ref={divContainer}>hello world</div>
        </>
    )
}


// use Reducer
const reducer = (state,action) => {
    if(action.type === "ADD_ITEM"){
        const newItems = [...state.people, action.payload]
        return {
            ...state,
            people: newItems,
            isModalOpen:true,
            modalContent: "item added"
        }
    }
    if(action.type === "NO_VALUE"){
        return{
            ...state,
            isModalOpen:true,
            modalContent:"please enter value"
        }
    }
    if(action.type ==="CLOSE_MODAL"){
        return {
            ...state,
            isModalOpen:false,
            modalContent: ""
        }
    }
    if(action.type === "REMOVE_ITEM"){
        let newItem = state.people.filter((person) => {
            return person.id !== action.payload;
        })
        return {...state,people: newItem}
    }
}

const dataReducer = [
    { id: 1, name: 'john' },
    { id: 2, name: 'peter' },
    { id: 3, name: 'susan' },
    { id: 4, name: 'anna' },
  ];
const defaultState = {
people: [],
isModalOpen: false,
modalContent: '',
};

function UseReducerBasic(){

    const [name,setName] = useState('');
    const [state,dispatch] = useReducer(reducer, defaultState)

    // const [people, setPeople] = useState(data)
    // const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            const newItem = { id: new Date().getTime().toString(), name }
            dispatch({type: "ADD_ITEM", payload: newItem});
            setName("")
        }else{
            dispatch({type: "NO_VALUE"})
        }
    }

    const closeModal = () => {
        dispatch({type : "CLOSE_MODAL"})
    }

    const Modal = ({modalContent,closeModal}) => {

        useEffect(() => {
            setTimeout(() => {
                closeModal()
            }, 3000);
        })


        return(
            <>
                <p>{modalContent}</p>
            </>
        )
    }

    return(
        <>
            <h1>Use Reducer - UseState Setup</h1>
            {state.isModalOpen && <Modal closeModal={closeModal}  modalContent={state.modalContent}/>}
            <form onSubmit={handleSubmit}>
                <input type="text " value={name} onChange={(e) => setName(e.target.value)}/>
                <button type="submit">ADD</button>
            </form>
            {state.people.map((user) => {
                return(
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <button  onClick={() => dispatch({type : "REMOVE_ITEM", payload :  user.id})} >remove item</button>
                    </div>
                )
            })}
        </>
    )
}


// prop Drilling

function PropDrilling(){

    const [people,setPeople] = useState(dataReducer)

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }

    const SignlePerson = ({id, name, removePerson}) => {
        return(
            <div>
                <p>{name}</p>
                <button onClick={() => removePerson(id)}>remove person</button>
            </div>
        )
    }

    const List = ({people, removePerson}) => {
        return(
            <>
                {people.map((person) => {
                    return <SignlePerson  key={person.id} {...person}  removePerson={removePerson}  />
                })}
            </>
        )
    }

    return(
        <>
            <h1>Prop Drilling</h1>
            <List people={people} removePerson={removePerson} />
        </>
    )
}

// useContext


function UseContext(){

    const PersonContext = React.createContext()

    const [people,setPeople] = useState(dataReducer)

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }

    const SignlePerson = ({id, name}) => {

        const {removePerson} = useContext(PersonContext)

        return(
            <div>
                <p>{name}</p>
                <Link to={`/person/${id}`} >Learn More</Link>
                <button onClick={() => removePerson(id)}>remove person</button>
            </div>
        )
    }

    const List = () => {

        const mainData = useContext(PersonContext)

        return(
            <>
                {mainData.people.map((person) => {
                    return <SignlePerson  key={person.id} {...person} />
                })}
            </>
        )
    }

    return(
        <PersonContext.Provider value={{removePerson, people}}>
            <h1>Use Context</h1>
            <List/>
        </PersonContext.Provider>
    )
}


// Custom Hooks  - useFetch

function UseFetch(){

    const url = "https://course-api.com/javascript-store-products";

    const useFetch = (url) => {
        const [loading, setLoading] = useState(true);
        const [products,setProducts] = useState([]);

        const getProducts = async () => {
            const response = await fetch(url);
            const products = await response.json();
            setProducts(products);
            setLoading(false)
        }

        useEffect(() => {
            getProducts()
        },[url])

        return {loading,products}

    }

    const {loading,products} = useFetch(url);

    const defaultImage = "https://raw.githubusercontent.com/john-smilga/react-advanced-2020/master/src/assets/default-image.jpeg"

    const Product = ({image,name,price}) => {

        const url = image && image[0].url

        return(
            <div>
                <p>{name}</p>
                <img src={url || defaultImage} style={{width: "200px"}}  alt={name || "default name"}/>
                <p>${price || 3.99}</p>
            </div>
        )
    }

    Product.propTypes = {
        image : PropTypes.object.isRequired,
        name : PropTypes.string.isRequired,
        price : PropTypes.number.isRequired
    }
    // Product.defaultProps = {
    //     name : "defualt name",
    //     prive : 3.99,
    //     image : defaultImage
    // }

    return(
        <>
            <h1>Use Fetch - Custom Hooks</h1>
            <p>products</p>
            <div>
                {products.map((product) => {
                    return <Product key={product.id} {...product.fields} />
                })}
            </div>
        </>
    )
}


// react router

const ReactRouter = () => {
    return(
        <>
            <h1>React Router </h1>
            <Link to="/" >Main page</Link>
            <Link to="/Index" >Index</Link>
        </>
    )
}

export default function PersonPage(){

    const [name,setName] = useState("default name")
    const { id } = useParams();


    useEffect(() => {
        const newPerson = dataReducer.find((person) => Number(person.id) === Number(id))
        setName(newPerson.name)
    },[])

    return(
        <>
            <p>{name}</p>
            <p>elo elo elo elo</p>
            <Link to="/Test1" >Back</Link>
        </>
    )
}


// Performace Optimization

// react memo // callback // useMemo

const calculateMostExpensive = (data) => {
    return data.reduce((total,item) => {
        const price = item.fields.price;
        if(price > total){
            total = price
        }
        return total
    },0) / 100
}


function ReactMemo(){

    const [count, setCount] = useState(0)
    const [cart,setCart] = useState(0);

    const addToCart = useCallback(() => {
        setCart(cart + 1)
    },[cart])

    


    const url = "https://course-api.com/javascript-store-products";

    const useFetch = (url) => {
        const [loading, setLoading] = useState(true);
        const [products,setProducts] = useState([]);

        const getProducts = useCallback( async () => {
            const response = await fetch(url);
            const products = await response.json();
            setProducts(products);
            setLoading(false)
        },[url])

        useEffect(() => {
            getProducts()
        },[url,getProducts])

        return {loading,products}

    }

    const {loading,products} = useFetch(url);

    const mostExpensive = useMemo(() => calculateMostExpensive(products),[products])


    

    Product.propTypes = {
        image : PropTypes.object.isRequired,
        name : PropTypes.string.isRequired,
        price : PropTypes.number.isRequired
    }

    return(
        <>
            <h1>ReactMemo</h1>

            <div>
                <p>Count : {count}</p>
                <button onClick={() => setCount(count + 1)} >Click me</button>

            </div>
            <p>products</p>
            <p>Most expensive : ${mostExpensive}</p>
            <BigList products={products} addToCart={addToCart} />
        </>
    )

}
const Product = ({image,name,price,addToCart}) => {

    const defaultImage = "https://raw.githubusercontent.com/john-smilga/react-advanced-2020/master/src/assets/default-image.jpeg"
    const url = image && image[0].url

    return(
        <div>
            <p>{name}</p>
            <img src={url || defaultImage} style={{width: "200px"}}  alt={name || "default name"}/>
            <p>${price || 3.99}</p>
            <button onClick={addToCart}>click</button>
        </div>
    )
}

const BigList = React.memo(({products, addToCart}) => {
    useEffect(() => {
        console.log("werwe")
    })

    return(
        <>
            {products.map((product) => {
                return <Product key={product.id} {...product.fields} addToCart={addToCart} />
            })}
        </>
    )
})


// Advanced Intro

export class Advanced extends React.Component {

    render(){
        return(
            <React.StrictMode>
                <div><h1>Advanced section </h1></div>
                <hr />
                <UseStateBasic />
                <hr />
                <UseStateArray />
                <hr />
                <UseStateObject />
                <hr />
                <UseStateMultipleStateValues />
                <hr />
                <UseStateSimpleCounter />
                <hr />
                <UseStateFunctionUpdateForm />
                <hr />
                <UseEffectBasic />
                <hr />
                <UseEffectCleanup />
                <hr />
                <FetchData />
                <hr />
                <MultipleReturns />
                <hr />
                <ShortCircuitEvaluation />
                <hr />
                <TernaryOperator />
                <hr />
                <ShowHideComponent />
                <hr />
                <FormBasics />
                <hr />
                <MultipleInputs />
                <hr />
                <UseRef />
                <hr />
                <UseReducerBasic />
                <hr />
                <PropDrilling />
                <hr />
                <UseContext />
                <hr />
                <UseFetch />
                <hr />
                <ReactRouter />
                <hr />
                <ReactMemo />
            </React.StrictMode>
        )
    }
}