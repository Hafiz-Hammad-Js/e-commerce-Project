import React from "react";
import "./Monthly.css"


function Monthly() {

    return <>
        <div className="container">

            <div className="FlashHeadingParent mt-5">
                <div className="boxx">

                </div>
                <h1>This Month</h1>
            </div>

            <div className="Monthly-Parent">
                <h1>Best Selling Products</h1>
                <button>View All</button>
            </div>


            <div className="container FlashItems">

                <div className="cartt">
                    <div className="cart-boxx">
                        <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/gammaxx-l240-argb-1-500x500%201.png?raw=true" width={"200px"} />
                    </div>
                    <h1 className="Title-product">RGB liquid CPU Cooler</h1>
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

            <div className="container images">
                <img src="https://www.webx.pk/images/Article/-0007-guide-to-starting-an-online-store-for-mobile-accessori-58-260123063106.png"/>
            </div>


        </div>
    </>
}

export default Monthly;