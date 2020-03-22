import React from 'react'

export default function Tabs({onTab, activeTab}) {
    return (
        <div className="row">
               
                <div className="col-md-6" style={{color:activeTab ? null : '#fff',paddingTop:10, cursor:'pointer', borderTopRightRadius:10, borderBottomRightRadius:10}}>
                  <h3 onClick={() => onTab(true)}>Incomplete</h3>
                </div>
                <div className="col-md-6" style={{color:!activeTab ? null : '#fff', paddingTop:10, cursor:'pointer', borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                    <h3 onClick={() => onTab(false)}>Complete</h3>
                </div>
        </div>
    )
}
