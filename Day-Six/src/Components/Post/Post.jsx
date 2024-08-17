import { useState } from "react";
import "./Post.css" ; 

function Post (props) {
    const [count , setCount] = useState (props.likes) ; 
    function plus () {
        const newValue = count +1 ; 
        setCount (newValue) ; 
    }

    return( 
        <div> 
            <div> 
                <button onClick={plus}> + </button>
                  <span> {count}</span>
                  <button onClick={muins}> - </button>

            </div>
            <p> { props.content} </p>
        </div>
    ); 
}