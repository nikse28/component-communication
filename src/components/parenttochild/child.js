import React from 'react';

const child = (props) =>{
    return(
        <div>
        I want <button onClick={props.iwantToy}>{props.title} </button>
        </div>
    )
}

export default child;
