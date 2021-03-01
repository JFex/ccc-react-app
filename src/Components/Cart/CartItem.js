import React, { Component } from 'react'

export default function CartItem ({item,value}) {
    const {id, title, img, price, total, count, size} = item;
    const {increment, decrement, removeItem} = value;
        return (
            <div className="row my-4 text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img[0]} style={{width:'5rem', height:'5rem'}} className="img-fluid" /> 
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none mr-1">
                        Product: 
                    </span>
                    {title} ({size})
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none mr-1">
                        Price: 
                    </span>
                    ${price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
                                -
                            </span>
                            <span className="count-text mx-1">{count}</span>
                            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
                                +
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong className="d-lg-none mr-1">Item Total: </strong>
                    ${total}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="btn btn-remove mx-1" onClick={() => removeItem(id)}>
                        Remove
                    </span>
                </div>
            </div>
        )
}