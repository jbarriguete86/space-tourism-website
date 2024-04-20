import React from 'react'
import styles from "../App.module.css"

export default function Home(){


    return (
        <div className={styles.home_container}>
            <p className={styles.subtitle_home}>So, you want to travel to</p>
            <h1 className={styles.title_home}>space</h1>
            <p className={styles.text_home}>Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!</p>
            <a href="/destination/moon"className={styles.btn_home}>Explore</a>
        </div>
    )
}