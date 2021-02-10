import React, { Component } from 'react'

export default class SizeSelector extends Component {
    render() {
        return (
            <div className="row mx-auto mb-5">
                <button className="mr-1">S</button>
                <button className="mx-1">M</button>
                <button className="mx-1">L</button>
                <button className="mx-1">XL</button>
                <button className="ml-1">XXL</button>
            </div>
        )
    }
};