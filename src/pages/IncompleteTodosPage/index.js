import React, { Component } from 'react'
import Todos from './Todos'
import Axios from 'axios';
import Loader from '../../components/Loader';

export default class IncompleteTodosPage extends Component {
  state = {
    todos:[],
    filteredTodos:[],
    loading:true
  }


  componentDidMount = async() => {
    const res  = await Axios.get('https://jsonplaceholder.typicode.com/todos/');
    const sliceData = res.data.slice(0, 50)
    let todos = localStorage.getItem('todos');
      todos = todos ? JSON.parse(todos) : sliceData
      this.setState({
        todos, 
        filteredTodos:this.filteredTodos(todos),
        loading:false
        },() => {
        this.updateLocalStorage()
      })
   }

   onTab = (value) => this.setState({ defaultTab:value  })
   filteredTodos = (data) => data.filter((i) => !i.completed)
   onComplete = (id) => {
        this.setState(state => {
            const todos = state.todos.map((item, i) => {
              if (item.id === id) {
                item.completed = true
                return item
              } else {
                return item;
              }
            });
            return {
                todos,
                filteredTodos:this.filteredTodos(todos)
            };
          },() => this.updateLocalStorage());
   }

   updateLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
   }

  render() {
    return (
      <div style={{backgroundColor:"#1e1e1e", color:"#61DAFB"}}>
        <div className="container pt-5 pb-5" style={{ height:'100vh',}}>
          <div className="col-md-12 text-center pt-5">
              <h1>Incomplete To Dos</h1>
          </div>
         
          {this.state.loading ? <Loader />
            :   <Todos data={this.state.filteredTodos} onComplete={this.onComplete} />
          }
        </div>
      </div>
    )
  }
}
