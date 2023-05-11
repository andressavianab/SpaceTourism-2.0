import { Outlet } from "react-router-dom"
import { Subtitle } from "../components/Subtitle/Subtitle"

import '../global.css'

interface PagesLayoutProps {
    number: string,
    text: string
}

export const PagesLayout = ({number, text}: PagesLayoutProps) => { 
    return (
        <div className="destination_layout">
            <Subtitle number={number} text={text} />
            <Outlet />
        </div>
    ) 
}