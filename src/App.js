import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart/Cart';
import Details from './Components/Details';
import Default from './Components/Default';
import PromoVideo from './Components/PromoVideo';
import Contact from './Components/Contact';
import About from './Components/About';
import Gallery from './Components/Gallery';
import FeaturedProducts from './Components/FeaturedProducts';
import Footer from './Components/Footer';
import Modal from './Components/Modal';


class App extends React.Component {
  render () {
    return (
      <React.Fragment>
          <Navbar />
        <Switch>
          <Route exact path='/' render={props =>
            <div>
              <PromoVideo />
              <FeaturedProducts />
            </div>
          } />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route path='/products' component={ProductList} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route component={Default} />
        </Switch>
        <Modal />
        {/** <Footer /> **/ }
      </React.Fragment>
    );
  }
}

export default App;
