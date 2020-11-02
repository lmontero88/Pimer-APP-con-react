import React, {useState} from 'react'


const PrimerApp = ({value = 0 }) => {
    
    const [counter, setCounter] = useState(value);

        const sumarDigito =()=>{
            setCounter(counter+1);
        }
        const restarDigito =()=>{
            setCounter(counter-1);
        }
        const resetDigito =()=>{
            setCounter(value);
        }
   
    return (
        <>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick ={sumarDigito}>+1</button>
        <button onClick ={resetDigito}>Reset</button>
        <button onClick ={restarDigito}>-1</button>
            
        </>
    )
}

export default PrimerApp

