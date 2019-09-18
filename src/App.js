import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from './Components/create-todo.component';
import Header from './Components/Header';
import About from './Components/pages/about';
import AddTodo from './Components/addTodo';
// import uuid from 'uuid';
import Axios from 'axios';

class App extends Component {
    state = {
        todos: []
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({ todos: res.data }))
    }
    //Toggle Complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.Completed = !todo.Completed
                }
                return todo;
            })
        });
    }

    //Delete Todo
    delTodo = (id) => {
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
    }
    //Add TODO
    addTodo = (title) => {
        // manually add todos
        // const newTodo =  {
        //     id:uuid.v4(),
        //     title,
        //     Completed:false
        // }
        Axios.post('https://jsonplaceholder.typicode.com/todos',
            {
                title,
                Completed: false,
            }).then(res => this.setState({ todos: [...this.state.todos, res.data] }))
        console.log(title)
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo} />
                                <CreateTodo todos={this.state.todos} markComplete={this.markComplete}
                                    delTodo={this.delTodo} />
                            </React.Fragment>
                        )} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>


        );
    }
}
export default App;
