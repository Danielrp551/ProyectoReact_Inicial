import { Outlet } from "react-router-dom"
import Menu from "./menu/Menu"
import "./App.css"
import { Navigate } from "react-router-dom"

const App = () => {
    if (!localStorage.getItem("tokenCriptoMarket")){
        return <Navigate to={"/login"}/>
    }


    return (
        <div className="app-container">
            <Menu />
            <Outlet />
        </div>
    )
}

export default App