import React from 'react';
import styles from "./Connection.module.css";
import instagram from "../Images/instagram.png"
import telegram from "../Images/telegram.png"
const Connection = () => {
    return (
        <>
        <div className={styles.container}>
            <h3>با ما در ارتباط باشید</h3>
            <div>
                <img src={instagram} alt="instagram"/>
                <img src={telegram} alt="telegram"/>
            </div>
        </div>
        </>
    );
};

export default Connection;