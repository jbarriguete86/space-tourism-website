import React, {useState, useEffect} from 'react'
import { NavLink,useParams } from 'react-router-dom'
import styles from "../App.module.css"
import technologyData from "../pageData/technologyData.js"
import launchPicLands from "../assets/technology/image-launch-vehicle-landscape.jpg"
import spacePortPicLands from "../assets/technology/image-spaceport-landscape.jpg"
import spaceCapsulePicLands from "../assets/technology/image-space-capsule-landscape.jpg"
import launchPortrait from "../assets/technology/image-launch-vehicle-portrait.jpg"
import spacePortPortrait from "../assets/technology/image-spaceport-portrait.jpg"
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg"


export default function Technology(){
    const [data, setData]= useState({})
    const [desktop, setdesktop]= useState(false)
    const location = useParams()

    useEffect(()=>{
        const dat = technologyData.find(data =>{ 
            const info = location.name.split("_").map(string => string).join(' ')
            return data.name.toLocaleLowerCase() === info})
        setData(dat)

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
              setdesktop(true)
            } else {
              setdesktop(false)
            }
          };
  
          handleResize();
  
          window.addEventListener('resize', handleResize);
},[location])



function getPicture(name){
    if(!desktop){
        return name === "launch_vehicle" ? launchPicLands : name === "spaceport" ? spacePortPicLands :  spaceCapsulePicLands
    } else{
        return name === "launch_vehicle" ? launchPortrait : name === "spaceport" ? spacePortPortrait :  spaceCapsulePortrait
    }

}

const activeStyles = {
    color: "black",
    backgroundColor: "#FFFFFF"
}

    return (
        <div className={styles.technology_container}>
            <p className={styles.pages_title}><span>02</span>Space Launch 101</p>
            {data.name && <img className={styles.img_technology} src={getPicture(location.name)} alt="image of the part on the space launch"/>}
            <div className={styles.nav_technology}>
                <NavLink
                    className={styles.link_technology}
                    to="/technology/launch_vehicle"
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    1
                </NavLink>
                <NavLink
                    className={styles.link_technology}
                    to="/technology/spaceport"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    2
                </NavLink>
                <NavLink
                    className={styles.link_technology}
                    to="/technology/space_capsule"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    3
                </NavLink>
            </div>
            <p className={styles.subtitles}>The terminology...</p>
            <p className={styles.titles_sm}>{data.name}</p>
            <p className={styles.main_text}>{data.text}</p>
               
        </div>
    )
}