import React from "react";
import "./Footer.css"


function Footer() {

    return <>
        <div >


            <footer class="Footer text-center text-lg-start ">

                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>

                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Borther's Accessories
                                </h6>
                                <p>
                                    Subscribe
                                </p>
                                <p>
                                    Get 10% off your first order
                                </p>
                               
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Support
                                </h6>
                                <p>
                                    111 Fb-Aera , karachi,  DH 1515, Pakistan.
                                </p>
                                <p>
                                    borther@info.com
                                </p>
                                <p>
                                    +88015-88888-9999
                                </p>

                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Account
                                </h6>
                                <p>
                                    My Account
                                </p>
                                <p>
                                    Login / Register
                                </p>
                                <p>
                                    Cart
                                </p>
                                <p>
                                    Shop
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">Quick Link</h6>
                                <p>Privacy Policy</p>
                                <p>
                                    Terms Of Use
                                </p>
                                <p>Contact</p>
                               
                            </div>

                        </div>

                    </div>
                </section>



                <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 
                    <a class="text-reset fw-bold" href="https://mdbootstrap.co/">Copyright Rimel 2022. All right reserved</a>
                </div>

            </footer>

        </div>
    </>
}

export default Footer;