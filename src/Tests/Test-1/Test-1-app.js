import React,  { useState, useEffect } from "react";

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

    useEffect(() => {
        if(value >= 1){
         document.title = `new Messages(${value})`;
        }
    },[value])

    const [value,setValue] = useState(0)

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
        console.log("effect")
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
            </React.StrictMode>
        )
    }
}



