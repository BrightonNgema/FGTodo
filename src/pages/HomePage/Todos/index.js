import React from 'react'
import { Card } from '../../../components'

export default function Todos({onComplete, data, activeTab}) {

    const filteredTodos = (value) =>  {
        const todos = data.filter((i) => i.completed === value)
        if(todos.length < 1){
            return (
                <div style={{border:'1px solid #fff', padding:'10px 40px', textAlign:'center', marginTop:50, borderRadius:3, backgroundColor:'#fff'}}>
                    {value ? "TYou havent completed ay of your todos" : "You have completed all your todos"}
                </div>
            )
        }
        return todos.map((todo) => (
            <Card item={todo} onTodo={() => onComplete(todo.id)} />
            ))
    }

    if(activeTab){
       return(
        <div className="col-md-10  mt-2 mx-auto pb-3" style={{overflow:'scroll', maxHeight:'60vh'}}>
            {filteredTodos(false)}
         </div>
       )
    }
    return (
        <div className="col-md-10  mt-2 mx-auto pb-3" style={{overflow:'scroll', maxHeight:'60vh'}}>
             {filteredTodos(true)}
        </div>
    )
}
