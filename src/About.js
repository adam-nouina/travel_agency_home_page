import React, { useEffect } from 'react';
import WOW from 'wowjs';

import  img1  from "./images/signature.png";
import  img  from "./images/beach.jpg";
import  img2  from "./images/pool.jpg";
import  img3 from "./images/pool2.jpg";
import "./About.css";


function About() {
    
    // useEffect(() => {
    //     new WOW.WOW({
    //       live: false
    //     }).init();
    //   }, [])

    return <div className='container mt-100 about-sect'>
            <div className='row align-items-center about'>
                <div class="col-12 col-lg-6 px-5">
                    <div class="section-heading wow fadeInUp mb-5" data-wow-delay="100ms" style={{visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp'}}>
                        <h6>About Us</h6>
                        <h2>Welcome to <br />Travel Hotel Luxury</h2>
                    </div>  
                    <div class="about-us-content mb-100">
                        <h5 class="wow fadeInUp" data-wow-delay="300ms" style={{visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp'}}>With over 340 hotels worldwide, NH Hotel Group offers a wide variety of hotels catering for a perfect stay no matter where your destination.</h5>
                        <p class="wow fadeInUp" data-wow-delay="400ms" style={{visibility: 'visible', animationDelay: '400ms', animationName: 'fadeInUp'}}>Manager: <span>Michen Taylor</span></p>
                        <img src={img1} alt="" class="wow fadeInUp" data-wow-delay="500ms" style={{visibility: 'visible', animationDelay: '500ms', animationName: 'fadeInUp'}} />
                    </div>          
                </div>
                <div class="col-12 col-lg-6">
                    <div class="about-us-thumbnail mb-100 wow fadeInUp" data-wow-delay="700ms" style={{visibility: 'visible', animationDelay: '700ms', animationName: 'fadeInUp'}}>
                        <div class="row">
                            <div class="col-6">
                                <div class="div">
                                    <img className='double-thumb w-100' src={img} alt='beach.jpg'/>
                                </div>
                                <div class="div2">
                                    <img className='double-thumb w-100' src={img2} alt='pool.jpg'/>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="h-100 div3">
                                <img className='single-thumb w-100 h-100' src={img3} alt='pool2.jpg'/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}

export default About