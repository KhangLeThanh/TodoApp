import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './TodoTable';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourDescription: '',
      yourDate: '', 
      todos: [],
      test:''
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeItem = this.removeItem.bind(this);

  }
  
  
  inputChanged(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })

  }

 
  addTodo(event)  {
    event.preventDefault();
    let object_todo = {item_des: this.state.yourDescription, item_date: this.state.yourDate}
    this.setState({
       todos:[...this.state.todos, object_todo]
    });
  }

  removeItem (index){ 
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
    });
   
  }
  
  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div className="container">
            <div className="wrapper-box">
              <h3> Add todo: </h3>
              <form onSubmit={this.addTodo}>
                Description:<input type="text" onChange={this.inputChanged} name="yourDescription" value={this.state.yourDescription}/>
                Date:<input type="text" onChange={this.inputChanged} name="yourDate" value={this.state.yourDate}/>
                <input type="submit" value="Add"/>
              </form>
            </div>

            <TodoTable todos={this.state.todos} action={this.removeItem} />
        </div>        
      </div>   
    );
  }
}

export default App;