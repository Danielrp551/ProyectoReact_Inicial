import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const API_URL = `${import.meta.env.VITE_API_URL}assets`

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(API_URL)
      .then((data) => {
        console.log(data)
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.log(API_URL)
        console.error("La petición a fallado")
      })
  }, [])

  if(!criptos)  return <span>Cargando . . .</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        { 
          criptos.map( ({id,priceUsd}) => (
            <li key={id}>Nombre : {id} Precio: {priceUsd} $</li>
          )) 
        }
      </ol>
    </>
  )
}

export default App
