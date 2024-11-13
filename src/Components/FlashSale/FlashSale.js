import React from "react";
import "./Flash.css"
import { useNavigate } from "react-router-dom";

function FlashSale() {

    const navigation = useNavigate()

    return <>
        <div className="container Flash-Parent">

            <div className="FlashHeadingParent">
                <div className="boxx">

                </div>
                <h1>Today’s</h1>
            </div>

            <div className="TimeSide-Parent">
                <h1>Flash Sales</h1>
                <table>
                    <tr>
                        <th className="Head">Days</th>
                        <th></th>
                        <th className="Head">Hours</th>
                        <th></th>
                        <th className="Head">Minutes</th>
                        <th></th>
                        <th className="Head">Seconds</th>

                    </tr>
                    <tr>
                        <th className="Value">03</th>
                        <th className="dot">:</th>
                        <th className="Value">23</th>
                        <th className="dot">:</th>
                        <th className="Value">19</th>
                        <th className="dot">:</th>
                        <th className="Value">58</th>
                    </tr>
                </table>
            </div>

            <div className="container FlashItems">

                <div className="cartt">
                    <div className="cart-boxx">
                        <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/g92-2-500x500%201.png?raw=true" width={"200px"} />
                    </div>
                    <h1 className="Title-product">HAVIT HV-G92 Gamepad</h1>
                    <h1 className="Price-product">Rs: 120  <span className="discount"><del>Rs: 200</del></span></h1>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <div className="btnnDetailParent">
                        <button onClick={()=> navigation("./Detail")} className="btnn-Detail">Detail Page</button>
                    </div>
                </div>

                <div className="cartt">
                    <div className="cart-boxx">
                        <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/ak-900-01-500x500%201.png?raw=true" />
                    </div>
                    <h1 className="Title-product">AK-900 Wired Keyboard</h1>
                    <h1 className="Price-product">Rs: 1200  <span className="discount"><del>Rs: 1500</del></span></h1>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <div className="btnnDetailParent">
                        <button className="btnn-Detail">Detail Page</button>
                    </div>
                </div>

                <div className="cartt">
                    <div className="cart-boxx">
                        <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/g27cq4-500x500%201%20(1).png?raw=true" width={"200px"} />
                    </div>
                    <h1 className="Title-product">IPS LCD Gaming Monitor</h1>
                    <h1 className="Price-product">Rs: 120  <span className="discount"><del>Rs: 200</del></span></h1>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <div className="btnnDetailParent">
                        <button className="btnn-Detail">Detail Page</button>
                    </div>
                </div>

                <div className="cartt">
                    <div className="cart-boxx">
                        <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/g92-2-500x500%201.png?raw=true" width={"200px"} />
                    </div>
                    <h1 className="Title-product">HAVIT HV-G92 Gamepad</h1>
                    <h1 className="Price-product">Rs: 120  <span className="discount"><del>Rs: 200</del></span></h1>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <div className="btnnDetailParent">
                        <button className="btnn-Detail">Detail Page</button>
                    </div>
                </div>

            </div>

            <div className="btnnPrductParent">
                <button className="btnn-Detail">View All Products</button>
            </div>

            <hr className="mt-5" />

        </div>
    </>
}

export default FlashSale;