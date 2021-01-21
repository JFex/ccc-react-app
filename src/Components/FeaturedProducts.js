import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class FeaturedProducts extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="text-center mt-3">Featured Products</h1>
                <h3>products go here</h3>
            </React.Fragment>
        )
    }
}

