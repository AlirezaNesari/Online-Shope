import React, { Component } from 'react';
import styles from "./search.module.css"

class Search extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p>محصول مورد نظر خود را جستجو کنید...</p>
                <input className={styles.input} type="text" placeholder="جستجو..."/>
                <div className={styles.search}></div>
            </div>
        );
    }
}

export default Search;