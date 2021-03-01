import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 col-lg-2 mx-auto">
                    <p>Products</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>Product Name</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>Price</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>Quantity</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>Total</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p></p>
                </div>

            </div>
            
        </div>
    )
}
