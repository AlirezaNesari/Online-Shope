import React from 'react';
import styles from "./Banner.module.css"
import banner from "../Images/baner.jpg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="Banner"/>
            <div className={styles.textcontainer}>
                <h1>فروشگاه وب گستر</h1>
                <p>با ما مطمئن خرید کنید</p>
            </div>
        </div>
    );
};

export default Banner;