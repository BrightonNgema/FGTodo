import React from 'react'

export default function UserCard({item,onTodo}) {
    return (
        <li className="list-group-item ">
            <div className={"undone"}>
              UserId {item.userId}
              <div  className="close" >
              
                  <span style={{fontSize:12}}>
                     <span>  {item.count}</span>
                  </span>
                
              </div>
              {/* <button type="button" className="markasdone" onClick={onTodo}><FontAwesomeIcon icon={faCheck} color={'red'}style={{height:15, marginRight:5}}/></button> */}
            </div>
        </li>
    )
}
