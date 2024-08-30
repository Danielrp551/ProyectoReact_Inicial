import { Link } from "react-router-dom"
import "./Cripto.css"

const Cripto = ({ id, name, priceUsd, explorer, rank, changePercent24Hr,symbol }) => {

    return (
        <div className="cripto">
            <h2>{name}</h2>
            <div className='info'>
                <p><span className='label'>Precio: </span>{parseFloat(priceUsd).toFixed(4)} $</p>
                <p><span className='label'>Código: </span>{symbol}</p>
                <p>
                    <span className='label'>Variación 24HR: </span>
                    <span className={changePercent24Hr > 0 ? "activada" : "desactivada"}>
                        {parseFloat(changePercent24Hr).toFixed(3) } %
                    </span>
                </p>
                <Link to={'/criptomonedas/' + id}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default Cripto