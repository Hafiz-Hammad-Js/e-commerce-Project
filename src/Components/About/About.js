import React from "react";
import "./About.css"
import Customer from "../CustomerCare/CustomerCare";



function About() {


    return <>
        <div className="container">

            <div className="aboutParent">
                <div className="ChildOne_About">
                    <h1>Our Story</h1>
                    <p>
                        Launced in 2015, Borther's is South Asia’s premier online shopping makterplace with an active presense in pakistan. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                    </p>

                    <p>
                        Borther's has more than 1 Million products to offer, growing at a very fast. Borther's offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div className="ChildTwo_About">
                    <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone%201.png?raw=true" />
                </div>
            </div>

            <div className="serviceParent">

                <div className="child_Service">
                    <div>
                        <div className="ab_imges">
                            <div className="ImgParent_services">
                                <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/Services%20(3).png?raw=true" />
                            </div>
                        </div>
                        <div>
                            <h1 className="services_ppp">10.5k</h1>
                            <p className="para">
                                Sallers active our site
                            </p>
                        </div>
                    </div>
                </div>

                <div className="child_Service">
                    <div>
                        <div className="ab_imges">
                            <div className="ImgParent_services">
                                <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/Services%20(4).png?raw=true" />
                            </div>
                        </div>
                        <div>
                            <h1 className="services_ppp">33k</h1>
                            <p className="para">
                                Mopnthly Produduct Sale
                            </p>
                        </div>
                    </div>
                </div>

                <div className="child_Service">
                    <div>
                        <div className="ab_imges">
                            <div className="ImgParent_services">
                                <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/Services%20(5).png?raw=true" />
                            </div>
                        </div>

                        <div>
                            <h1 className="services_ppp">45.5k</h1>
                            <p className="para">
                                Customer active in our site
                            </p>
                        </div>
                    </div>
                </div>

                <div className="child_Service">
                    <div>
                        <div className="ab_imges">
                            <div className="ImgParent_services">
                                <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/Services%20(6).png?raw=true" />
                            </div>
                        </div>
                        <div>
                            <h1 className="services_ppp">25k</h1>
                            <p className="para">
                                Anual gross sale in our site
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="Employee_Parent">

                <div className="Parent_Empolyee">
                    <div className="Employee_img">
                        <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/Frame%20874.png?raw=true" />
                    </div>

                    <h1 className="nameWork">Tom Cruise</h1>
                    <p className="w_Employee">
                        Founder & Chairman
                    </p>
                </div>

                <div className="Parent_Empolyee">
                    <div className="Employee_img">
                        <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/Frame%20875.png?raw=true" />
                    </div>

                    <h1 className="nameWork">Emma Watson</h1>
                    <p className="w_Employee">
                        Managing Director
                    </p>
                </div>

                <div className="Parent_Empolyee">
                    <div className="Employee_img">
                        <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/Frame%20876.png?raw=true" />
                    </div>

                    <h1 className="nameWork">Will Smith</h1>
                    <p className="w_Employee">
                        Product Designer
                    </p>
                </div>

            </div>

            <Customer/>

        </div>
    </>
}


export default About;