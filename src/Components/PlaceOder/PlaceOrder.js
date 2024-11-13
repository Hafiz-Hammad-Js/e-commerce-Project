import React from "react";
import "./PlaceOrder.css"



function PlaceOrder() {


    return <>
        <div className="container">
            <div className="grantParent_Order">
                <h1>Billing Details</h1>
                <div className="Order_Paerent">

                    <div className="childOne_Order">

                        <div className="labelParent">
                            <div>
                                <label className="labelWork">First Name<span className="labelSpan">*</span></label>
                            </div>
                            <input className="orderINput" type="text" />
                        </div>

                        <div className="labelParent">
                            <div>
                                <label className="labelWork">Street Address<span className="labelSpan">*</span></label>
                            </div>
                            <input className="orderINput" type="text" />
                        </div>

                        <div className="labelParent">
                            <div>
                                <label className="labelWork">Apartment, floor, etc. (optional)<span className="labelSpan">*</span></label>
                            </div>
                            <input className="orderINput" type="text" />
                        </div>

                        <div className="labelParent">
                            <div>
                                <label className="labelWork">Town/City<span className="labelSpan">*</span></label>
                            </div>
                            <input className="orderINput" type="text" />
                        </div>

                        <div className="labelParent">
                            <div>
                                <label className="labelWork">Phone Number<span className="labelSpan">*</span></label>
                            </div>
                            <input className="orderINput" type="number" />
                        </div>

                        <div className="labelParent">
                            <div>
                                <label className="labelWork">Email Address<span className="labelSpan">*</span></label>
                            </div>
                            <input className="orderINput" type="text" />
                        </div>

                    </div>
                    <div className="childTwo_Order">
                        <div className="slipOrder">
                            <h4>Subtotal:</h4>
                            <h4>$1750</h4>
                        </div>

                        <div className="slipOrder">
                            <h4>Shipping:</h4>
                            <h4>Free</h4>
                        </div>

                        <div className="slipOrder">
                            <h4>Total:</h4>
                            <h4>$1750</h4>
                        </div>
                        <div className="CashParent">
                            <input className="cashInput" type="radio" checked />
                            <label className="CashLabel">Cash on delivery</label>
                        </div>

                        <button className="OrderBBTn">Place Order</button>

                    </div>



                </div>
            </div>
        </div>
    </>
}


export default PlaceOrder;