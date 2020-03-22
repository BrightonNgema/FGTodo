import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Card({item,onTodo}) {
    return (
        <li className="list-group-item ">
            <div className={item.completed ? "done":"undone"}>
              {item.title}
              <button type="button" className="markasdone" onClick={onTodo}>
                {!item.completed && (
                  <span style={{fontSize:12}}>
                    <FontAwesomeIcon icon={faCheck} color={'green'}style={{height:15, marginRight:5}}/>
                     <span>  Mark as complete</span>
                  </span>
                )}
              </button>
            </div>
        </li>
    )
}
