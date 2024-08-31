import { NavLink, useNavigate } from "react-router-dom"
import "./Menu.css"
import { useContext, useEffect, useState} from "react"
import {UserContext} from "../../context/UserContext"

const Menu = () => {

    const navigation = useNavigate()

    const usuario = useContext(UserContext)

    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Criptos</NavLink></li>
                <li><NavLink to="/perfil">Perfil de {usuario.name}</NavLink></li>
                <li><a href="" onClick={() =>{
                    localStorage.removeItem("tokenCriptoMarket")
                    navigation("/login")
                }}>Cerrar Sesión</a></li>
            </ul>
        </nav>
    )
}

export default Menu
