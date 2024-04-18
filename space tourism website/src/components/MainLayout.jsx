import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Styles from "./components.css"

export default function MainLayout(){
    return (
        <div className={Styles.main_container}>
            <Header/>
            <h2>Hello</h2>
            <Outlet/>
        </div>
    )
}