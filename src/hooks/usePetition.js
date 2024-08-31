import { useState, useEffect } from "react"
import axios from "axios"

const usePetition = (endpoint) => {

    const API_URL = import.meta.env.VITE_API_URL

    const [data, setData] = useState()
    const [loading,setLoading] = useState({})
    const [error, setError] = useState()

    useEffect(() => {
        setLoading(true)

        axios.get(`${API_URL}${endpoint}`)
            .then((data) => {
                console.log(data.data.data)
                setData(data.data.data)
                setLoading(false)
            })
            .catch((e) => {
                setLoading(false)
                setError(e)
                console.log(API_URL)
                console.error("La petición a fallado, error : " + e )
            })
    }, [])

    return [data,loading, error]
}

export default usePetition