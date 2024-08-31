import { useEffect, useState } from "react"
import axios from "axios"
import Cripto from "./cripto/Cripto"

import "./Cuadricula.css"
import usePetition from "../hooks/usePetition"

function Cuadricula() {

  const [criptos,loadingCripto, error] = usePetition("assets")
  
  if(error) return <span>Ocurrió un error en la petición.</span>
  if(loadingCripto)  return <span>Cargando . . .</span>
  

  return (
    <div className="grid-container">
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
