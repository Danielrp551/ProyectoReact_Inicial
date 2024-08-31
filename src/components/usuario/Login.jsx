import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import './Login.css'

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const submit = (e) => {
        e.preventDefault() //previene el evento de carga de hacer clic al submit
        setLoading(true)
        setError(null)
        axios.post('https://reqres.in/api/login',user)
        .then(data => {
            setLoading(false)
            localStorage.setItem("tokenCriptoMarket",data.data.token)
            navigation("/")
        })
        .catch(e => {
            setError(e.response.data.error)
            setLoading(false)
            console.error(e)
        })
    }

    if (localStorage.getItem("tokenCriptoMarket")){
        return <Navigate to={"/"}/>
    }

    return (
        <div className="login-container">
             <h1>Iniciar sesión</h1>
             <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            email : e.target.value
                        })
                    }} type="email" name="email"></input>
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            password : e.target.value
                        })
                    }} type="password" name="password"></input>
                </div>
                <div className="submit">
                    <input 
                        type="submit" 
                        value={loading? "Cargando . . ." : "Ingresar"} 
                        className="link"
                    />
                </div>
             </form>
             {
                error && <span className="error">Error : {error}</span>
             }
        </div>
    )
}


export default Login