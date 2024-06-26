import React, {useState, useEffect} from 'react'
import {useParams, NavLink} from 'react-router-dom'
import styles from "../App.module.css"
import destinationData from '../pageData/destinationData.js'
import moonPic from "../assets/destination/image-moon.png"
import marPic from "../assets/destination/image-mars.png"
import europaPic from "../assets/destination/image-europa.webp"
import titanPic from "../assets/destination/image-titan.png"

export default function Destination(){
    const [data, setData]= useState({})
    const location=useParams()


    useEffect(()=>{
            const dat = destinationData.find(data => data.title.toLocaleLowerCase() === location.name)
            setData(dat)
    },[location])

    const activeStyles = {
        borderBottom: "4px #FFFFFF solid"
    }
    
    function getPicture(name){
        const title= name.toLocaleLowerCase()
       return title === "moon" ? moonPic : title === "mars" ? marPic : title === "europa" ? europaPic : titanPic

    }

    return (
        <div className={styles.destination_container}>
            <p className={styles.pages_title}><span>01</span>Pickup your destination</p>
            {data.title && <img className={styles.img_destination} src={getPicture(location.name)} alt="image of the planet"/>}
            <div className={styles.nav_destination}>
                <NavLink
                    className={styles.link_destination}
                    to="/destination/moon"
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Moon
                </NavLink>
                <NavLink
                    className={styles.link_destination}
                    to="/destination/mars"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Mars
                </NavLink>
                <NavLink
                    className={styles.link_destination}
                    to="/destination/europa"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Europa
                </NavLink>
                <NavLink
                    className={styles.link_destination}
                    to="/destination/titan"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Titan
                </NavLink>
            </div>
            <p className={styles.titles}>{data.title}</p>
            <p className={styles.main_text}>{data.text}</p>
            <hr />
            <div className={styles.info_destination_container}>
                <div className={styles.subtitle_container_destination}>
                    <p className={styles.subtitles}>avg. distance</p>
                    <p className={styles.subtitles_text}>{data.distance}</p>
                </div>
                <div className={styles.subtitle_container_destination}>
                    <p className={styles.subtitles}>Est. Travel time</p>
                    <p className={styles.subtitles_text}>{data.travelTime}</p>
                </div>
            </div>
        </div>
    )
}