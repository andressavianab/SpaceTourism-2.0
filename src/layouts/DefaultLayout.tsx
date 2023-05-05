import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import '../global.css'
export const DefaultLayout = () => { 
    return (
        <div className="layout">
            <Header />
            <Outlet />
        </div>
    ) 
}