import React from 'react'
import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import styles from "./components.module.css"

export default function MainLayout(){
    const location = useLocation()

    const containerClassName = location.pathname === "/" ? 
    `${styles.main_container} ${styles.home_bckg}` 
    :
    location.pathname.startsWith("/destination/") ? `${styles.main_container} ${styles.destination_bckg}` 
    :
    location.pathname.startsWith("/crew/") ? `${styles.main_container} ${styles.crew_bckg}` 
    :
    `${styles.main_container} ${styles.technology_bckg}`
    

    return (
        <div className={containerClassName}>
            <Header/>
            <Outlet/>
        </div>
    )
}