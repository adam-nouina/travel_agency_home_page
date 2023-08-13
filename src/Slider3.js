import React, { useEffect, useRef, useState } from 'react';
import "./Slider3.css";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { FaLongArrowAltRight } from "react-icons/fa";



function Slider3() {

    const imgs = useRef(['room', 'dining-room', 'food', 'relax', 'bedroom', 'hotel', 'relax2'])

    return <section class="project-area">
            <OwlCarousel items={3} dots={false} responsive={ {0:{ items:1 }, 760:{items:2},990:{items:3}}} autoplay={false}  smartSpeed={1000} className="owl-theme custom1" loop>  
            {imgs.current.map((el,i) => {
            return <div key={i} class="single-project-slide bg-img"  style={{backgroundImage: `url(assets/img/${el}.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div class="project-content" >   
                    <div class="text">
                        <h6>Entertaiment</h6>
                        <h5>Racing Bike</h5>
                    </div>
                </div>
                <div class="hover-effects">
                    <div class="text">
                        <h6>Entertaiment</h6>
                        <h5>Racing Bike</h5>
                        <p>I focus a lot on helping the first time or inexperienced traveler head out prepared and confident...</p>
                    </div>
                        <a href="#" class="btn project-btn">Discover Now 
                        <FaLongArrowAltRight className='arrow'  />
                        </a>
                </div>
            </div>
                })}

            </OwlCarousel>
              
        </section>
}


export default Slider3
