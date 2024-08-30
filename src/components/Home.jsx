import { Link } from "react-router-dom"

const Home = () =>{
    return (
        <>
            <h1>Hola, bienvenido al CriptoMarket.</h1>
            <p>Cónoce las 100 criptos más usadas</p>
            <Link to="/criptomonedas">Ver criptomonedas</Link>
        </>
    )
}

export default Home