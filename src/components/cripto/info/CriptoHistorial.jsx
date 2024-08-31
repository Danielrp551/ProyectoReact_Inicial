import { parseFloatNumber } from "../../../helpers/number"
import dayjs from "dayjs"

const CriptoHistorial = ({history}) => {

    return (
        <div className="history">
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {history.reverse().map(({ date, time, priceUsd }) => (
                        <tr key={time}>
                            <td className="label">{dayjs(date).format('YYYY-MM-DD')}</td>
                            <td className="price">{parseFloatNumber(priceUsd, 3)} $</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default CriptoHistorial