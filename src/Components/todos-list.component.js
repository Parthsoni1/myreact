import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class TodosList extends Component {
    cons
    getStyle = () => {

        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.Completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (

            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{''}

                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} className="btn btn-danger" style={btnstye}>x</button>
                </p>
            </div>
        )
    }
}
//propTypes
TodosList.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}
const btnstye = {
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodosList;