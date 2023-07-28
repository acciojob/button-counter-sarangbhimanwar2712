import React, { useState } from "react";

const Button = ()=>{

    let[count ,setCount] = useState(0) ;

    function increaseCount(){
        setCount(count++) ;
    }
    return(
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={increaseCount}>Click me</button>
    </div>
    )
}
export default Button ;