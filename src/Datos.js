import React from 'react'

//FC
const Datos = ({saludo,sub = "Holas"}) => {
    const nombre = "Brandon";

return (
    <>
  <h1> Hola mundo soy {nombre}</h1>  
  {saludo}  
  {sub}
    </>
)
}

export default Datos;