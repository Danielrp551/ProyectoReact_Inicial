import { useEffect, useState } from "react"
import axios from "axios"
import Cripto from "./cripto/Cripto"

import "./Cuadricula.css"

function Cuadricula() {

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
    <div className="app-container">
      <h1>Lista de criptomonedas</h1>
      <div className="cripto-container">
        { 
          criptos.map( (cripto) => (
              <Cripto key={cripto.id} {...cripto}/>
          )) 
        }
      </div>
    </div>
  )
}

export default Cuadricula
