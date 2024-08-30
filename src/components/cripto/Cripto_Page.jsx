import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

import "./Cripto_Page.css"

const Cripto_Page = () => {

    const params = useParams()

    const API_URL = `${import.meta.env.VITE_API_URL}assets/${params.id}`

    const [cripto, setCripto] = useState()

    useEffect(() => {
        axios.get(API_URL)
            .then((data) => {
                console.log(data.data.data)
                setCripto(data.data.data)
            })
            .catch(() => {
                console.log(API_URL)
                console.error("La petición a fallado")
            })
    }, [])

    if (!cripto) return <span>Cargando . . .</span>

    const formatNumber = (num, decimals = 2) => {
        return Number(num).toLocaleString(undefined, { maximumFractionDigits: decimals });
    };

    const formatUSD = (num) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(num));
    };

    const supplyPercentage = cripto.maxSupply !== null ? (Number(cripto.supply) / Number(cripto.maxSupply)) * 100 : 77;

    return (
        <div className="container">
            <header className="header">
                <h1 className="title">
                    <svg className="icon"></svg>
                    {cripto.id} Dashboard
                </h1>
                <p className="subtitle">Real-time {cripto.id} statistics</p>
            </header>

            <div className="grid">
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">Current Price</h2>
                        <svg className="card-icon"></svg>
                    </div>
                    <div className="card-content">
                        <div className="card-value">{formatUSD(cripto.priceUsd)}</div>
                        <p className={`card-change ${Number(cripto.changePercent24Hr) > 0 ? 'positive' : 'negative'}`}>
                            <svg className="arrow-icon"></svg>
                            {formatNumber(cripto.changePercent24Hr)}% from yesterday
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">Market Cap</h2>
                        <svg className="card-icon"></svg>
                    </div>
                    <div className="card-content">
                        <div className="card-value">{formatUSD(cripto.marketCapUsd)}</div>
                        <p className="card-subtext">USD</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">24h Volume</h2>
                        <svg className="card-icon"></svg>
                    </div>
                    <div className="card-content">
                        <div className="card-value">{formatUSD(cripto.volumeUsd24Hr)}</div>
                        <p className="card-subtext">USD</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">Additional Information</h2>
                    </div>
                    <div className="card-content">
                        <dl className="info-list">
                            <div>
                                <dt className="info-title">Symbol</dt>
                                <dd className="info-value">{cripto.symbol}</dd>
                            </div>
                            <div>
                                <dt className="info-title">Rank</dt>
                                <dd className="info-value">#{cripto.rank}</dd>
                            </div>
                            <div>
                                <dt className="info-title">VWAP (24h)</dt>
                                <dd className="info-value">{formatUSD(cripto.vwap24Hr)}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="supply-container">
            <div className="card supply-card">
                <div className="card-header">
                    <h2 className="card-title">Supply Information</h2>
                    <p className="card-description">Current supply vs. max supply</p>
                </div>
                <div className="card-content">
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${supplyPercentage}%` }}></div>
                    </div>
                    <div className="supply-info">
                        <span>Current Supply: {formatNumber(cripto.supply)} {cripto.symbol}</span>
                        <span>Max Supply: {formatNumber(cripto.maxSupply? cripto.maxSupply : cripto.supply*(100/77))} {cripto.symbol}</span>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
}

export default Cripto_Page
