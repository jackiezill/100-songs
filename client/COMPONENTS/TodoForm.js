import React from 'react';

class TodoForm extends React. Component {
    state = { name: ''}

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handSubmit = (e) =>{
        e.preventDefault();
        this.props.addSong(this.state.name);
        this.setState({ name: ''})

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input 
            placeholder="Add A Song"
            required
            value={this.state.name}
            onChange={this.handleChange}
            />
            </form>
        )
    }
}
export default TodoForm;


