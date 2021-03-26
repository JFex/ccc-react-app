import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default function CartItem ({item,value}) {
    const {id, title, img, price, total, count, size} = item;
    const {increment, decrement, removeItem, handleDetail} = value;
        return (
            <div className="row mx-2 mt-2 mb-4 text-center align-items-center cart-row">
                <div className="col-10 col-md-4 mx-auto col-lg-2 my-3">
                    <Link className="product-links" to="/details" onClick={() => 
                      handleDetail(id, size)}>
                        <img src={img[0]} className="cart-img" />
                    </Link> 
                </div>
                <div className="d-lg-none col-10 col-md-4 mx-auto col-lg-2">
                    <div className="">
                    <Link className="product-links" to="/details" onClick={() => 
                      handleDetail(id, size)}>
                        {title} ({size})
                    </Link>
                    </div>
                    <div className="">
                        ${price}
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <div>
                            <span className="btn btn-black mx-1" onClick={() => decrement(id, size)}>
                                -
                            </span>
                            <span className="count-text mx-1">{count}</span>
                            <span className="btn btn-black mx-1" onClick={() => increment(id, size)}>
                                +
                            </span>
                            <span className="d-block d-md-none btn btn-remove mx-1 mt-3 mb-3" onClick={() => removeItem(id, size)}>
                                Remove
                            </span>
                        </div>
                    </div>
                    
                </div>
                <div className="d-none d-md-block d-lg-none col-md-4">
                    <span className="btn btn-remove mx-1 mt-1 mb-3" onClick={() => removeItem(id, size)}>
                        Remove
                    </span>
                </div>
                <div className="d-none d-lg-block d-xl-block col-10 col-md-6 mx-auto col-lg-2">
                <Link className="product-links" to="/details" onClick={() => 
                      handleDetail(id, size)}>
                    {title} ({size})
                    </Link>
                </div>
                <div className="d-none d-lg-block d-xl-block col-10 col-md-6 mx-auto col-lg-2">
                    ${price}
                </div>
                <div className="d-none d-lg-block d-xl-block col-10 col-md-6 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-black mx-1" onClick={() => decrement(id, size)}>
                                -
                            </span>
                            <span className="count-text mx-1">{count}</span>
                            <span className="btn btn-black mx-1" onClick={() => increment(id, size)}>
                                +
                            </span>
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-block d-xl-block col-10 col-md-6 mx-auto col-lg-2">
                    <span className="btn btn-remove mx-1 mt-1 mb-3" onClick={() => removeItem(id, size)}>
                        Remove
                    </span>
                </div>
            </div>
        )
}