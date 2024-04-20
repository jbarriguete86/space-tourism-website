import React from 'react'
import styles from "./components.module.css"
import { Outlet } from "react-router-dom"

export default function CrewLayout(){
    return (
        <>
        <h1>This is the crew page</h1>
        <Outlet/>
        </>
)
}