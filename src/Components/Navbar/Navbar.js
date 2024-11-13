import React, { useState } from "react";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";

function Navbar() {


    let check = true


    const navigation = useNavigate()




    return <>

        <div className="Navbar_work">
            <div className="container-fluid Main_Heading">
                <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<span className="Span-Btnn"> ShopNow</span></h1>
            </div>

            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#"><span className="Logo">Borther's Accessories</span></a>

                    <span class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        <img src="https://raw.githubusercontent.com/Hafiz-Hammad-Js/E-commerce_images/2890c6fdc0001a3b02c6803bae16a64bc5acd226/47385285-removebg-preview.png" width={"40px"} />

                    </span>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a onClick={() => navigation("/")} class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a onClick={() => navigation("/contact")} class="nav-link" aria-current="page" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a onClick={() => navigation("/About")} class="nav-link" aria-current="page" href="#">About</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2 my-input" type="search" placeholder="What are you looking for?" aria-label="Search" />
                            <button class="btnn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                        <i onClick={() => navigation("/BuyNow")} class="my-cart fa-solid fa-cart-shopping"></i>

                        {check === true

                            ?
                            <div className="">
                                <i onClick={()=> navigation("/register")} class="my-cart fa-solid fa-user"></i>
                            </div>
                            :
                            <>
                                <div className="userImg">
                                    <img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/461650189_2263210927352533_6809903861419810337_n.jpg?stp=c72.67.577.577a_dst-jpg_s160x160&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=O86vZZmS0xgQ7kNvgE7Jfrj&_nc_zt=24&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=AQnvCXyO9nlGnQfict6cP5P&oh=00_AYC3cB_31_780_I4iuXqITHbi0-TEttrR8VoQPUEw8Dy7g&oe=672F9616" />

                                </div>
                                <i class="my-cart fa-solid fa-right-to-bracket"></i>
                            </>
                        }


                    </div>
                </div>

            </nav>

        </div>
    </>
}

export default Navbar;