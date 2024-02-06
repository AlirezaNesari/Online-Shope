import React, { Component } from 'react';
import "./index.css"
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Search from './components/Search';
import Logos from './components/Logos';
import Connection from './components/Connection';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner/>
        <Cards/>
        <Search/>
        <Logos/>
        < Connection/>
        <Footer/>
      </div>
    );
  }
}

export default App;
