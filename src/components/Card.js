import React, { Component } from 'react';
import styles from "./Card.module.css"
import down from "../Images/down.svg"
import up from "../Images/up.svg"
import shop from "../Images/shopping.png"
class Card extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }

    downHandler = () => {
        if (this.state.counter >= 1) {
            this.setState(prevState => ({
                counter: prevState.counter - 1,
            }))
        }
    }

    upHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }))
    }
    shoping = () => {
        alert("خرید شما با موفقیت ثبت شد!");
        this.setState(prevState => ({
            counter: prevState.counter = 0,
    }))
}

    render() {
        const{image,name,cost}=this.props;
        const {counter} = this.state;
        return (
            
            <div className={styles.container}>
                <img src={image} alt="loptop"/>
                <h3>{name}</h3>
                <p>{cost}</p>

                <div className={styles.counter}>
                    <img className={this.state.counter ? "" : styles.deactive} src={down} alt="arrow" onClick={this.downHandler} />
                    <span>{counter}</span>
                    <img src={up} alt="arrow" onClick={this.upHandler} />
                    <div  className={styles.shoping}>
                        <img  className={this.state.counter ? "" : styles.deactive} src={shop} alt="shoping" onClick={this.shoping} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;