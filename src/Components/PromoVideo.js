import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../App.css';
import promoVideo from '../images/CACHE-CACHE.mp4';
import { Container } from 'react-bootstrap';


export default class PromoVideo extends Component {
    render() {
        return (
            <div id="mediaBackground">
                <ReactPlayer 
                    className="no-outline"
                    url={promoVideo}
                    width="100%"
                    height="100%"
                    playing={true}
                    controls={true}
                />
            </div>
        )
    }
}
