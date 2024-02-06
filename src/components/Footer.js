import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <address>
                نشانی:نهاوند-خیابان خاقانی
                <br/>
                tel:0918*******
                fax:081********
            </address>
            <p> &copy;کلیه حقوق مادی و معنوی این سایت نزد فروشگاه وب گستر محفوظ است</p>
            
        </div>
    );
};

export default Footer;