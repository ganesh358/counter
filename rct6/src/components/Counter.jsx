import { useEffect } from "react";
import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);



    useEffect(
        function calback(){
            console.log(`title has changed`)
            document.title = `Clicked ${count} times`

        }

    ,[count])


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>INCREAMENT</button>
        </div>
    )

}


export default Counter;