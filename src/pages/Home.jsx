import React from 'react'
import styles from "../App.module.css"

export default function Home(){


    return (
        <div className={styles.home_container}>
            <p className={styles.subtitle_home}>So, you want to travel to</p>
            <p className={styles.title_home}>space</p>
            <p className={styles.main_text}>Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!</p>
            <a href="/destination/moon" className={styles.btn_home}>Explore</a>
        </div>
    )
}