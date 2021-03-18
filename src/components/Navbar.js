import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="navbar-brand">
            Реестр
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/"
                    exact
                >
                    Сотрудники
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/create"
                >
                    Новый сотрудник
                </NavLink>
            </li>
      </ul>
    </nav>
)