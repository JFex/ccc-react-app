import React, { Component } from 'react'
import { ProductConsumer } from '../context'

export default class SizeSelector extends Component {
    render() {
        return (
            <ProductConsumer>
                { value => {
                    const small = "S";
                    const medium = "M";
                    const large = "L";
                    const xlarge = "XL";
                    const xxlarge = "XXL";
                    var prompt = "";
                    if (value.sizePromptOpen)
                        prompt = "Please enter a size";
                return (
                    <div className="mx-auto mb-5">
                        <button className="btn btn-black mr-1" onClick={() => {
                            value.setSize(small);
                            value.closeSizePrompt();
                        }}>S</button>
                        <button className="btn btn-black mx-1" onClick={() => {
                            value.setSize(medium);
                            value.closeSizePrompt();
                        }}>M</button>
                        <button className="btn btn-black mx-1" onClick={() => {
                            value.setSize(large);
                            value.closeSizePrompt();
                        }}>L</button>
                        <button className="btn btn-black mx-1" onClick={() => {
                            value.setSize(xlarge);
                            value.closeSizePrompt();
                        }}>XL</button>
                        <button className="btn btn-black ml-1" onClick={() => {
                            value.setSize(xxlarge);
                            value.closeSizePrompt();
                        }}>XXL</button>
                        <h6 className="text-danger">{prompt}</h6>
                    </div>
                )
                }}
            </ProductConsumer>
        )
    }
};