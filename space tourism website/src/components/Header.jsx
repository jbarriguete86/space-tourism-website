import React from "react"
import { NavLink } from "react-router-dom"
import Styles from "./components.css"
import HamburgerIcon from "../assets/shared/icon-hamburger.svg"
import logo from "../assets/shared/logo.svg"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }


    return (
        <header>
            <img
                src={logo}
                className={Styles.logo_icon}
                alt="the logo icon"
            />
        <div className={Styles.hero}>
            <img
                src={HamburgerIcon}
                className={Styles.hamburger_icon}
                alt="the hamburguer icon"
            />

        </div>
            <nav>
                <NavLink
                    className={Styles.header_nav}
                    to="/"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    01 Home
                </NavLink>
                <NavLink
                    className={Styles.header_nav}
                    to="/destination"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    01 Destination
                </NavLink>
                <NavLink
                    className={Styles.header_nav}
                    to="/crew"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    02 Crew
                </NavLink>
                <NavLink 
                    className={Styles.header_nav}
                    to="/technology"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    03 Technology
                </NavLink>
            </nav>
        </header>
    )
}