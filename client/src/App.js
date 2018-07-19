import React, { COMPONENTS } from 'react';
import TodoForm from './COMPONENTS/TodoForm';
import TodoList from './COMPONENTS/TodoList';

class App extends COMPONENTS {
  state = { todos: [] }

  componentDidMount() {
  }

  addSong = (name) => {

  }

  updateTodo =(id) => {

  }

  deleteTodo = (id) => {

  }

  render() {
    return (
      <div className = "container">
      <TodoForm addSong= {this.addSong} />
      <TodoList
      todos = {this.state.todos}
      updateTodo= {this.updateTodo}
      deletetodo= {this.deleteTodo}

      />
      </div>
    );
  }
}

export default App;


