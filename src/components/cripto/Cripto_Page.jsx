import { useParams } from "react-router-dom"

import "./Cripto_Page.css"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import CriptoHistorial from "./info/CriptoHistorial"

const Cripto_Page = () => {

    const params = useParams()

    
    const [cripto,loadingCripto, errorCripto] = usePetition(`assets/${params.id}`)
    const [history,loading_history, errorHistory ]= usePetition(`assets/${params.id}/history?interval=d1 `)

    // if (!cripto) return <span>Cargando . . .</span>
    if(errorCripto || errorHistory) return <span>Ocurrió un error en la petición.</span>
    if(loadingCripto || loading_history){
        return <span>Cargando . . .</span>
    }

    return (
        <div className="cripto-page-container">
            {
                cripto && <CriptoInfo cripto={cripto} />
            }
            {
                history && <CriptoHistorial history={history}/>
            }
        </div>
        
    )
}

export default Cripto_Page
