import React, {useState, useEffect} from 'react'
import styles from "../App.module.css"
import crewData from '../pageData/crewData'
import { useParams } from 'react-router'

export default function Crew(){
    const [data, setData]= useState({})
    const location = useParams()

    console.log(data)
    useEffect(()=>{
        const dat = crewData.find(data =>{ 
            const info = location.name.split("_").map(string => string).join(' ')
            return data.name.toLocaleLowerCase() === info})
        setData(dat)
},[location])
    return (
        <div className={styles.crew_container}>
            <p className={styles.pages_title}><span>02</span>Meet your crew</p>
        </div>
    )
}