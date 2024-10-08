import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import Page_404 from './components/404.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./main.css"
import Cuadricula from './components/Cuadricula.jsx'
import Home from "./components/Home.jsx"
import Cripto_Page from './components/cripto/Cripto_Page.jsx'
import Perfil from './components/usuario/Perfil.jsx'
import { UserContextProvider } from "./context/UserContext"
import Login from './components/usuario/Login.jsx'

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='/perfil' element={<Perfil />} />
                </Route>
                <Route path='/criptomonedas' element={<App />}>
                    <Route index element={<Cuadricula />} />
                    <Route path=':id' element={<Cripto_Page />} />
                </Route>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<Page_404 />} />
            </Routes>
        </BrowserRouter>
    </UserContextProvider>

)
