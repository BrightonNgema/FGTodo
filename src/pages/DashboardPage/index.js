import React, { Component } from 'react'
import UserCard from './UserCard';
import  Axios from 'axios';
import Loader from '../../components/Loader';

class DashboardPage extends Component {

    state = {
        todos:[],
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
    updateLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
     }

    sorted = (value) => {
            const data = this.state.todos.filter((i) => i.completed === value)
          const result = Array.from(
            data.reduce((map, item) => (
                // eslint-disable-next-line no-sequences
                map.get(item.userId).count++,map) 
            ,new Map(data.map(todo => 
                [todo.userId, Object.assign({}, todo, { count: 0 })]
            ))), ([k, o]) => o)
            .sort( (a, b) => b.count - a.count )
            .map( o => o  );
            return result

    }
    render() {
        console.log(this.state)
        return (
            <div style={{backgroundColor:"#1e1e1e", color:"#61DAFB"}}>
            <div className="container pt-5 pb-5" style={{ height:'100vh',}}>
              <div className="col-md-12 text-center pt-5">
                  <h1>User Dashboard</h1>
              </div>
              {this.state.loading ? <Loader />
                :(
                    <div>
                         <div className="col-md-10  mt-2  pb-3" style={{overflow:'scroll', maxHeight:'60vh'}}>
                             <div className="col-md-12 pt-5 mb-1">
                                 <h1>Most Completed</h1>
                             </div>
                             {this.sorted(true).map((todo) => (
                                 <UserCard item={todo} onTodo={() => this.onComplete(todo.id)} />
                             ))}
                         </div>
                         <div className="col-md-10  mt-2  pb-3" style={{overflow:'scroll', maxHeight:'60vh'}}>
                             <div className="col-md-12 pt-5 mb-1">
                                 <h1>Most Incomplete</h1>
                             </div>
                             {this.sorted(false).map((todo) => (
                                 <UserCard item={todo} onTodo={() => this.onComplete(todo.id)} />
                             ))}
                         </div>
                    </div>
                )
              }
            </div>
          </div>
        )
    }
}


export default DashboardPage;