import React, {useRef} from 'react';
import "./Comments.css";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Comments() {

    const imgs = useRef(['man', 'woman'])

    return <section class="comment-area">
            <OwlCarousel items={1} dots={true} autoplay={false}  smartSpeed={1000} className="container owl-theme custom1" loop >  
            {imgs.current.map((el,i) => {
            return <div key={i} className="row single-project-slide2">
                <div className='col-6 img-cont'>
                    <img src={`assets/img/${el}.jpg`} alt='' />
                </div>
                <div className='col-6 text-cont'>
                    <div class="section-heading">
                        <h6>Testimonials</h6>
                        <h2>Our Guests Love Us</h2>
                    </div>
                    <div class="single-testimonial-slide">
                        <h5>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus delectus facilis molestias, error vitae praesentium quos eaque qui ea, tempore blanditiis sint reprehenderit, quaerat. Commodi ab architecto sit suscipit exercitationem!”</h5>
                        <div class="rating-title">
                            <div class="rating">
                                <FontAwesomeIcon icon={faStar} className='.icon_star' width={'20px'}/>
                                <FontAwesomeIcon icon={faStar} className='.icon_star' width={'20px'}/>
                                <FontAwesomeIcon icon={faStar} className='.icon_star' width={'20px'}/>
                                <FontAwesomeIcon icon={faStar} className='.icon_star' width={'20px'}/>
                                <FontAwesomeIcon icon={faStar} className='.icon_star' width={'20px'}/>
                            </div>
                            <h6>Akash Downey <span>- CEO Deercreative</span></h6>
                        </div>
                    </div>
                </div>
            </div>

            })}
            </OwlCarousel>
            </section>

}

export default Comments