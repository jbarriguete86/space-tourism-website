import React, {useState, useEffect} from 'react'
import styles from "../App.module.css"
import crewData from '../pageData/crewData.js'
import { NavLink,useParams } from 'react-router-dom'
import hurleyPic from '../assets/crew/image-douglas-hurley.png'
import ansariPic from '../assets/crew/image-anousheh-ansari.png'
import shuttleworthPic from '../assets/crew/image-mark-shuttleworth.png'
import gloverPic from '../assets/crew/image-victor-glover.png'

export default function Crew(){
    const [data, setData]= useState({})
    const location = useParams()

    useEffect(()=>{
        const dat = crewData.find(data =>{ 
            const info = location.name.split("_").map(string => string).join(' ')
            return data.name.toLocaleLowerCase() === info})
        setData(dat)
},[location])

function getPicture(name){
   return name === "douglas_hurley" ? hurleyPic : name === "mark_shuttleworth" ? shuttleworthPic : name === "victor_glover" ? gloverPic : ansariPic

}

const activeStyles = {
    color: "#FFFFFF"
}

    return (
        <div className={styles.crew_container}>
            <p className={styles.pages_title}><span>02</span>Meet your crew</p>
            {data.name && <img className={styles.img_crew} src={getPicture(location.name)} alt="image of the the crew"/>}
            <div className={styles.nav_crew}>
                <NavLink
                    className={styles.link_crew}
                    to="/crew/douglas_hurley"
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    .
                </NavLink>
                <NavLink
                    className={styles.link_crew}
                    to="/crew/mark_shuttleworth"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    .
                </NavLink>
                <NavLink
                    className={styles.link_crew}
                    to="/crew/victor_glover"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    .
                </NavLink>
                <NavLink
                    className={styles.link_crew}
                    to="/crew/anousheh_ansari"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    .
                </NavLink>
            </div>
            <p className={styles.position_crew}>{data.position}</p>
            <p className={styles.titles_sm}>{data.name}</p>
            <p className={styles.main_text}>{data.text}</p>
               
        </div>
    )
}