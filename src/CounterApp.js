import React , {useState} from 'react'

const CounterApp = ({value = 0}) => {


    //useState
const [num,setNum] = useState(value);



//Handle  
const sumar = () =>{  setNum(num + 1 )}


const res = () =>  setNum(value )
const restar = () => setNum(num- 1 )




return(
    <>
    <h1>CounterApp</h1>
    <h2>{ num }</h2>
    
    <button onClick ={sumar}>  +1</button>
     <button onClick= {res} >  Resect </button>
    <button onClick ={restar}>        -1  </button>
    </>
)}


export default CounterApp;