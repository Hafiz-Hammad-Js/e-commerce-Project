import React from "react";



function Silder() {

    return <>


        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/e32fe5ce-1cdd-4fbc-aa28-53b7a2fcf4aa.jpg?raw=true" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/banner.jpg?raw=true" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/2a92cd51-962c-4904-8d9c-3e72937432a4.jpg?raw=true" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        



    </>
}

export default Silder;