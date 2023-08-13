import React from 'react';
import  img  from "./images/icon-1.png";
import  img2  from "./images/icon-2.png";
import  img3 from "./images/icon-3.png";
import  img4 from "./images/icon-4.png";
import "./Services.css";

function Services() {

    return <div class="service-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="service-content px-3">

                        <div class="single-service--area  wow fadeInUp text-center" data-wow-delay="100ms" style={{visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp'}}>
                            <img src={img} alt="" />
                            <h5>Transportion</h5>
                        </div>

                        <div class="single-service--area  wow fadeInUp text-center" data-wow-delay="300ms" style={{visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp'}}>
                            <img src={img2} alt="" />
                            <h5>Reiseservice</h5>
                        </div>


                        <div class="single-service--area  wow fadeInUp text-center" data-wow-delay="500ms" style={{visibility: 'visible', animationDelay: '500ms', animationName: 'fadeInUp'}}>
                            <img src={img3} alt="" />
                            <h5>Spa Relaxtion</h5>
                        </div>

                        <div class="single-service--area  wow fadeInUp text-center" data-wow-delay="700ms" style={{visibility: 'visible', animationDelay: '700ms', animationName: 'fadeInUp'}}>
                            <img src={img4} alt="" />
                            <h5>Restaurant</h5>
                        </div>

                        <div class="single-service--area  wow fadeInUp text-center" data-wow-delay="900ms" style={{visibility: 'visible', animationDelay: '900ms', animationName: 'fadeInUp'}}>
                            <img src={img} alt="" />
                            <h5>Bar &amp; Drink</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




}

export default Services
