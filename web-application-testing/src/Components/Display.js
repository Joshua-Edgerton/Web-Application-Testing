import React from 'react'

function Display (props) {
    return(
        <div className='display'>
            <div>
                Balls: {props.balls}
            </div>
            <div>
                Strikes: {props.strikes}
            </div>
        </div>
    )
}

export default Display;