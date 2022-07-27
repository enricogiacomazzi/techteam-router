import React from 'react';
import { Link } from 'react-router-dom';


export const Navbar: React.FC = () => {
    return (
        <nav>
            <Link to="/pag1">Page 1</Link>
            <Link to="/pag2">Page 2</Link>
            <Link to="/pag3">Page 3</Link>
        </nav>
    )
}