import React, { Component } from 'react'
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        console.log(this.state.title)
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }
    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex', height: '30px' }}>
                <TextField
                    id="standard-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    margin="normal"
                />
                <input type="text" name="title" placeholder="add Todo.." style={{ flex: 10 }}
                    value={this.state.title} onChange={this.onChange} />
                <input type="submit" value="submit" className="btn btn-info" style={{ flex: 1 }}
                />
            </form>
        )
    }
}
//propsType
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default AddTodo
