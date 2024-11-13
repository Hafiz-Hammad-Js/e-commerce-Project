import React from "react";
import "./Detail.css"
import { useNavigate } from "react-router-dom";

function DetailPage() {

    const navigation = useNavigate()

    return <>
        <div className="container">

            <div className="parentDeatil">
                <div className="child-OneDetail">

                    <div className="small_imgParent">
                        <div className="box-01DetailImages">
                            <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/image%2057.png?raw=true" />
                        </div>
                        <div className="box-01DetailImages">
                            <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/image%2057.png?raw=true" />
                        </div>
                        <div className="box-01DetailImages">
                            <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/image%2057.png?raw=true" />
                        </div>
                        <div className="box-01DetailImages">
                            <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/image%2057.png?raw=true" />
                        </div>
                    </div>

                    <div className="ImgParentDetail">
                        <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/image%2063.png?raw=true" />
                    </div>

                </div>

                <div className="child-TwoDetail">

                    <h1>Havic HV G-92 Gamepad</h1>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <h3>$192.00</h3>
                    <p>
                        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                    </p>

                    <div className="childParent">
                        <div className="childOne_subDetail">
                            <button className="redColor">-</button> <button>1</button> <button className="redColor">+</button>
                        </div>
                        <div className="childTwo_subDetail">
                            <button onClick={()=> navigation("/BuyNow")} className="OrderNow">Buy Now</button>
                        </div>
                    </div>

                    <div className="deliveryWork">
                        <div>
                            <div className="childParentOne_delivery">
                                <div className="childOne_delivery">
                                    <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/icon-delivery.png?raw=true" />
                                </div>
                                <div className="childTwo_delivery">
                                    <h1>Free Delivery</h1>
                                    <p>Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>

                            <div className="childParentOne_delivery">
                                <div className="childOne_delivery">
                                    <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/Icon-return.png?raw=true" />
                                </div>
                                <div className="childTwo_delivery">
                                    <h1>Return Delivery</h1>
                                    <p>Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </>
}

export default DetailPage;