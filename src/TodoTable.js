import React, { Component } from 'react';
import './App.css';

class TodoTable extends Component {
    constructor(props) {
        super(props);
        

    }
 
    
    render(){
        return (
            <div className="App">
                <table>
                    <tbody>
                        <tr><th>Date</th><th>Description</th></tr>
                        {this.props.todos.map((item, index) => 
                            <tr key={index} className="border-line">
                            <td>{item.item_date}</td>
                            <td>{item.item_des}</td>
                            <td><input id={index} type="submit" value="Delete" onClick={() => this.props.action(index)}/></td>
                            </tr>)}
                    </tbody> 
                </table>
            </div>
        );
    }
}
export default TodoTable;