import React, { Component } from 'react'
import instagramIcon from '../images/instagram-icon.png'
import facebookIcon from '../images/facebook-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'
import { Route } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer" className="border-top text-center mt-3">
                <div className="mt-4">
                <a target="_blank" href="https://www.instagram.com/cachecache.co/">
                    <img className="social-media-icons" src={instagramIcon} alt="instagram link" />
                </a>
                <a target="_blank" href="https://www.facebook.com">
                    <img className="social-media-icons" src={facebookIcon} alt="facebook link" />
                </a>
                <a target="_blank" href="https://www.linkedin.com">
                    <img className="social-media-icons" src={linkedinIcon} alt="linkedin link" /> 
                </a>
                </div>
            </div>
        )
    }
}