import React, {useState, useEffect} from "react"
import { NavLink } from "react-router-dom"
import styles from "./components.module.css"
import HamburgerIcon from "../assets/shared/icon-hamburger.svg"
import logo from "../assets/shared/logo.svg"

export default function Header() {

    const [navStatus, setNavStatus]=useState(false)
    const [notMobile, setNotMobile]= useState(false)

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 768) {
            setNavStatus(true)
            setNotMobile(true)
          } else {
            setNavStatus(false)
            setNotMobile(false)
          }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
      }, [])



    let activeStyles = notMobile ? {borderBottom: "4px #FFFFFF solid"} : {borderRight: "4px #FFFFFF solid"}


 function handleNav(){
    setNavStatus(prevStatus=> !prevStatus)
 }
    return (
        <header>
            <img
                src={logo}
                className={styles.logo_icon}
                alt="the logo icon"
            />
            {navStatus ? 
            (<p 
                className={styles.close_icon}
                onClick={handleNav}
                >
                X
                </p>)
            :
            (<img
                className={styles.hamburger_icon}
                src={HamburgerIcon}
                alt="the hamburguer icon"
                onClick={handleNav}
            />)
            }
            <hr />
            {navStatus && (
            <nav>
                <NavLink
                    className={styles.header_nav}
                    to="."
                    style={({ isActive }) => isActive ? activeStyles : null}
                    onClick={handleNav}
                >
                <span>00 </span> Home
                </NavLink>
                <NavLink
                    className={styles.header_nav}
                    to="/destination/moon"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    onClick={handleNav}
                >
                <span>01 </span> Destination
                </NavLink>
                <NavLink
                    className={styles.header_nav}
                    to="/crew/douglas_hurley"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    onClick={handleNav}
                >
                <span>02 </span> Crew
                </NavLink>
                <NavLink 
                    className={styles.header_nav}
                    to="/technology/launch_vehicle"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    onClick={handleNav}
                >
                <span>03 </span> Technology
                </NavLink>
            </nav>
            )}
        </header>
    )
}