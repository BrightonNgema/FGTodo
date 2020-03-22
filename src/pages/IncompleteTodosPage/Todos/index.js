import React from 'react'
import { Card } from '../../../components'

export default function Todos({onComplete, data, activeTab}) {
  console.log(data)
        if(data.length < 1){
            return(
                <div style={{border:'1px solid #fff', padding:'10px 40px', textAlign:'center', marginTop:50, borderRadius:3, backgroundColor:'#fff'}}>
                    You have completed all your todos
                </div>
            )
        }
       return(
        <div className="col-md-10  mt-2 mx-auto pb-3" style={{overflow:'scroll', maxHeight:'60vh'}}>
        {data.map((todo) => (
          <Card item={todo} onTodo={() => onComplete(todo.id)} />
        ))}
      </div>
       )
}
