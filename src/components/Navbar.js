import React from 'react';
import styles  from "./navbar.module.css";
import logo from "../Images/ICON.png";
import goup from "../Images/up.png";



const scroll1= () => {
    window.scrollBy(0,670);

}
const scroll2= () => {
    window.scrollBy(0,1390);
}

const scroll3= () => {
    window.scrollBy(0,1905);
}
const scroll4= () => {
    window.scrollBy(0,1985);
}


const Navbar = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div  className={styles.logo}>
                    <img className={styles.img} src={logo} alt="logo"/>
                </div>
                
                <div className={styles.listcontainer}>
                    <ul className={styles.list}>
                        <li>خانه</li>
                        <li onClick={scroll1}>محصولات</li>
                        <li onClick={scroll2}>جستجو</li>
                        <li onClick={scroll3}>برندها</li>
                        <li onClick={scroll4}>ارتباط با ما</li>
                    </ul>
                   
                </div>
                 
            </header>
            <a href="#top"><img className={styles.goup} src={goup} alt="goup"/></a> 
        </div>
    );
};

export default Navbar;