import React from 'react';
import styles from "./Logos.module.css"
import apple from "../Images/apple.png"
import asus from "../Images/asus.png"
import dell from "../Images/dell.png"
import lenovo from "../Images/lenovo.png"
import microsoft from "../Images/microsoft.png"
import hp from "../Images/hp.png"
const Logos = () => {
    return (
        <div className={styles.container}>
            <div><h3>برندهای موجود</h3></div>
             <div>
                <img src={apple} alt="apple"/>
                <img src={asus} alt="asus"/>
                <img src={dell} alt="dell"/>
                <img src={lenovo} alt="lenovo"/>
                <img src={microsoft} alt="microsoft"/>
                <img src={hp} alt="hp"/>
            </div>
        </div>
    );
};

export default Logos;