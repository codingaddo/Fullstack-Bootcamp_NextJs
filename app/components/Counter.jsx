'use client'
import React, { useState} from "react";

 const  Counter =()=>{

    const [counter,setCounter] = useState(0)

    const next = ()=>{
        setCounter(prev=>prev+1)
    }


    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={next}>+</button>
            <button onClick={()=>setCounter(prev=>prev-1)}>-</button>
            <button onClick={()=>setCounter(0)}>Reset</button>
        </div>
    )
}

export default Counter