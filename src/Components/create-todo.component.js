import React from 'react';
import TodosList from './todos-list.component';
import { PropTypes } from 'prop-types';

class CreateTodo extends React.Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodosList key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ));
    }
}
//propTypes
CreateTodo.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}


export default CreateTodo;