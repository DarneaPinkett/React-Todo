import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

const todos = [
  {
    name:'Study TK',
    id: 123,
    completed: false
  },
  {
    name:'Wash Clothes',
    id: 124,
    completed: false
  },
  {
    name: 'Buy New Shoes',
    id: 125,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state.

  constructor() {
    super();
    this.state={
      todoList: todos
    };
  }
  toggleItem = id => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({todoList: newTodoList
    });
  };
  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };
  clearCompleted = completed => {
    const newListCleared = this.state.todoList.filter(item => item.completed === false)
    this.setState({
      todoList: newListCleared
    });
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList todos={this.state.todoList} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
