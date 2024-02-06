import React, { Component } from 'react';
import styles from "./Cards.module.css"
import Card from "./Card"
import microsft from "../Images/microsoft.jpg"
import asus from "../Images/asus.jpg"
import dell from "../Images/dell.jpg"
import hp from "../Images/hp.jpg"
import apple from "../Images/apple.jpg"

class Cards extends Component {
    render() {
        return (
            <>
            <div className={styles.textcontainer}>
                <h3>محصولات</h3>
            </div>  
            
            <div className={styles.container}>
                <Card image={microsft} name=" microsft" cost="2000$"/>
                <Card image={apple} name=" apple" cost="2000$"/>
                <Card image={hp} name=" hp" cost="2000$"/>
                <Card image={asus} name=" asus" cost="2000$"/>
                <Card image={dell} name="dell" cost="2000$"/>
            </div>
            <div className={styles.container}>
                <Card image={microsft} name=" microsft" cost="2000$"/>
                <Card image={hp} name=" hp" cost="2000$"/>
                <Card image={apple} name=" apple" cost="2000$"/>
                <Card image={dell} name=" dell" cost="2000$"/>
                <Card image={asus} name=" asus" cost="2000$"/>
            </div>
        
        </>
        );
    }
}

export default Cards;