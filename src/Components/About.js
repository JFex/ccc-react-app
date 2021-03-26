import React, { Component } from 'react'
import ugly from "../images/ugly.jpg"
import definition from "../images/cache-cache-definition.png"
import ReactTooltip from "react-tooltip"

export default class About extends Component {
    render() {
        return (
            <div className="container mx-auto text-center mt-4">
                <img className="img-fluid" data-tip="Credit: CollinsDictionary" src={ definition } alt="cache-cache definition"/>
                <ReactTooltip />
                <h5 className="mt-5">Experimental LLC founded to advance the idea of art across multiple platforms.</h5>
                <h5 className="mt-5">In collaboration with Oklahoman Designers, Musicians, and Videographers. Now Nation-Wide.</h5>
                <h3 className="text-uppercase text-bold mt-5">Black lives matter</h3>
            </div>
        )
    }
}
