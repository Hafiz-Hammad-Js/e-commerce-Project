import React from "react";
import "./BuyNow.css"
import { useNavigate } from "react-router-dom";


function BuyNow() {

    const navigation = useNavigate()

    return <>
        <div className="container">

            <div className="BuyGrantPerant">
                <div>
                    <table className="TableWork">
                        <tr className="firstRow">
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                        <div className="mt-3"></div>
                        <tr className="secondtRow">

                            <th >
                                <div className="productNameTable">
                                    <div className="tableImgParent">
                                        <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/g27cq4-500x500%201%20(2).png?raw=true" />
                                    </div>
                                    <h2>LCD Monitor</h2>
                                </div>

                            </th>

                            <th>$650</th>
                            <th>
                                <input className="Qty" placeholder="01" type="number" />
                            </th>
                            <th>$650</th>
                        </tr>
                        <div className="mt-3"></div>
                        <tr className="secondtRow">

                            <th >
                                <div className="productNameTable">
                                    <div className="tableImgParent">
                                        <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/g27cq4-500x500%201%20(2).png?raw=true" />
                                    </div>
                                    <h2>LCD Monitor</h2>
                                </div>

                            </th>

                            <th>$650</th>
                            <th>
                                <input className="Qty" placeholder="01" type="number" />
                            </th>
                            <th>$650</th>
                        </tr>

                    </table>

                    <div>

                        <div className="coupanParent">
                            <button className="GoShop">Return To Shop</button>

                            <div className="CuponChild">
                                <input className="coupon" placeholder="Coupon Code" />
                                <button className="apply">Apply Coupon</button>
                            </div>


                            <div className="TotalBill">
                                <h1>Cart Total</h1>

                                <div className="slipParent">
                                    <h4>Subtotal:</h4>
                                    <h4>$1750</h4>
                                </div>

                                <div className="slipParent">
                                    <h4>Shipping::</h4>
                                    <h4>Free</h4>
                                </div>

                                <div className="slipParentfinal">
                                    <h4>Total:</h4>
                                    <h4>$1750</h4>
                                </div>
                                <div className="bbtn_parent">

                                    <button onClick={() => navigation("/PlaceOrder")}>Procees to checkout</button>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>
}

export default BuyNow;