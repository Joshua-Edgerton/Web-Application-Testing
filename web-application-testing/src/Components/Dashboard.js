import React from 'react';

function Dashboard (props)  {
    return(    
    <div className='dashboard'> 
    
    <button onClick={props.ballsCounting} className='dashboard-button-balls'>ball</button>
    <button onClick={props.strikesCounting} className='dashboard-button-balls'>strike</button>
    <button onClick={props.foulsCounting} className='dashboard-button-balls'>foul</button>
    <button onClick={props.hitsCounting} className='dashboard-button-balls'>hit</button>
    
    </div>)
}
export default Dashboard;

