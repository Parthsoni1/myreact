import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import CreateTodo from './Components/create-todo.component';
// import Header from './Components/Header';
// import About from './Components/pages/about';
// import AddTodo from './Components/addTodo';
// import matUiAdd from './Components/matUiAdd';
// import uuid from 'uuid';
import Person from './Components/Person';
import './App.css';
import Axios from 'axios';

class App extends Component {
    state = {
        persons: [
            { id:'1',name: 'Parth', age: '20' },
            { id:'2',name: 'max', age: '35' }
        ],
        otherState: 'other stae',
        showPerson: true
    }

    switchNameHandler = (newNamw) => {
        //DOnt do  this.state.persons[0].name = 'parth soni';
        this.setState({
            persons: [
                { name: newNamw, age: '23' },
                { name: 'max millian', age: '29' }
            ]
        })
    }
    nameChangeHandler = (event, id ) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person  ={...this.state.persons[personIndex]};
        // const person  =Object.assign({},this.state.persons[personIndex])
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons:persons})
        // this.setState({
        //     persons: [
        //         { name: 'Parth', age: '23' },
        //         { name: event.target.value, age: '29' }
        //     ]
        // })
    }
    deletePersonHandler = (personId) =>{
        const persons = [...this.state.persons]
        // const persons = this.state.persons;
        persons.splice(personId,1);
        this.setState({persons:persons})
    }
    togglePersonhandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({ showPerson: !doesShow });
    }
    // state = {
    //     todos: []
    // }
    // componentDidMount() {
    //     Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //         .then(res => this.setState({ todos: res.data }))
    // }
    // //Toggle Complete
    // markComplete = (id) => {
    //     this.setState({
    //         todos: this.state.todos.map(todo => {
    //             if (todo.id === id) {
    //                 todo.Completed = !todo.Completed
    //             }
    //             return todo;
    //         })
    //     });
    // }

    // //Delete Todo
    // delTodo = (id) => {
    //     console.log(id);
    //     Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //         .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
    // }
    // //Add TODO
    // addTodo = (title) => {
    //     // manually add todos
    //     // const newTodo =  {
    //     //     id:uuid.v4(),
    //     //     title,
    //     //     Completed:false
    //     // }
    //     Axios.post('https://jsonplaceholder.typicode.com/todos',
    //         {
    //             title,
    //             Completed: false,
    //         }).then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    //     console.log(title)
    // }
    render() {
        const myStyle = {
            backggroundColor: 'blue',
            font: 'inherit',
            border: '1px solod blue',
            padding: '8px',
            cursor: 'pointer'
        };
        let persons = null;

        if (this.state.showPerson) {
            persons = (
               
                <div>
                     {this.state.persons.map((person,index) => {
                         return <Person changed={(event) => this.nameChangeHandler(event, person.id)} click={()=> this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id}/>
                     })}
                    {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> </Person>
                    <Person changed={this.nameChangeHandler} click={this.switchNameHandler.bind(this, 'its me ')} name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbie:cricket </Person> */}

                </div>
            );
        }
        return (
             <div className="App">

                <button style={myStyle} onClick={this.togglePersonhandler} >Swich </button>

                {persons}

                <p> Hello </p>

            </div>
            // <Router>
            //     <div className="App">
            //         <div className="container">
            //             <Header />
            //             <Route exact path="/" render={props => (
            //                 <React.Fragment>
            //                     <AddTodo addTodo={this.addTodo} />
            //                     <br/>
            //                     <CreateTodo todos={this.state.todos} markComplete={this.markComplete}
            //                         delTodo={this.delTodo} />
            //                 </React.Fragment>
            //             )} />
            //             <Route path="/about" component={About} />
            //             <Route path="/matUiAd" component={matUiAdd} />
            //         </div>
            //     </div>
            // </Router>
        );
    }
}
export default App;
