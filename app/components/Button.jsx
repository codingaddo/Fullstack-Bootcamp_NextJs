import React from "react";

const Button = ({text,functionAsProp})=>{
    return(
        <button onClick={functionAsProp}>
            {text}
        </button>
    )
}

export default Button