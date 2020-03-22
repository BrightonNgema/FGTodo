import React, { Component } from 'react'
import Axios from 'axios'
import Todos from './Todos'
import Tabs from './Tabs'
import Loader from '../../components/Loader/index';
export default class HomePage extends Component {
  state = {
    todos:[],
    defaultTab:true,
    loading:true
  }


  componentDidMount = async() => {
    const res  = await Axios.get('https://jsonplaceholder.typicode.com/todos/');
    const sliceData = res.data.slice(0, 50)
    let todos = localStorage.getItem('todos');
      todos = todos ? JSON.parse(todos) : sliceData
      this.setState({todos, loading:false},() => {
        this.updateLocalStorage()
      })
   }

   onTab = (value) => this.setState({ defaultTab:value  })
   

   filteredTodos = (value) =>  {
    return this.state.todos.filter((i) => i.completed === value)
   }

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
            };
          },() => this.updateLocalStorage());
   }

   updateLocalStorage = () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
   }

  render() {
    const {defaultTab} =  this.state
    return (
      <div style={{backgroundColor:"#1e1e1e", color:"#61DAFB"}}>
        <div className="container pt-5 pb-5" style={{ height:'100vh',}}>
          <div className="col-md-12 text-center pt-5">
              <h1>To Dos</h1>
          </div>
          <div className="col-md-12 text-center mt-5">
            <Tabs activeTab={defaultTab} onTab={this.onTab}/>
          </div>
          {this.state.loading ? <Loader />
            :  <Todos activeTab={defaultTab} data={this.state.todos} onComplete={this.onComplete}/>
          }
        </div>
      </div>
    )
  }
}
