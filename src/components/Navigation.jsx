import React, { useState } from 'react'
import { assets } from '../assets/assets'
import styles from './Navigation.module.css'

function Navigation() {
    let [menu,setMenu]=useState("menu");
  return (
    <div className={styles.nav}>
        <img src={assets.logo} alt=""  id='logo'/>
        <div className={styles.links}>
            <p className= {`${menu === "home" ? styles.active : ''}`}>home</p>
            <p className= {`${menu === "menu" ? styles.active : ''}`}>menu</p>
            <p className= {`${menu === "mobile-app" ? styles.active : ''}`}>mobile-app</p>
            <p className= {`${menu === "contact" ? styles.active : ''}`}>contact</p>
        </div>

        <div className={styles.navEnd}>
            <img src={assets.search_icon} alt="" />
            <div className={styles.searchIcon}>
                <img src={assets.basket_icon} alt="" />
                <div className={styles.dot}></div>
            </div>
            <button className={styles.btn}>Sign In</button>
        </div>
      
    </div>
  )
}

export default Navigation