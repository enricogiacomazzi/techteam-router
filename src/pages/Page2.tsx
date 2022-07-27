import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Page2: React.FC = () => {
    return (
        <>
        <h1>Page 2</h1>
        <nav>
            <Link to="/pag2/pag21">Page 21</Link>
            <Link to="/pag2/pag22">Page 22</Link>
            <Link to="/pag2/pag23">Page 23</Link>
        </nav>
            <Outlet/>
        </>
    )
}


