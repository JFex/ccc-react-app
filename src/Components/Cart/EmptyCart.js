import React from 'react'
import {Link} from 'react-router-dom'

export default function EmptyCart() {
    return (
            <div className="text-center mt-5">
                <h1 className="mb-3 page-title">Your cart is currently empty</h1>
                <Link to="/products">
                    <button className="btn-lg btn-black">Shop Now</button>
                </Link>
            </div>
    )
}
