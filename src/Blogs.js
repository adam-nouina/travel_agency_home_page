import React, { useRef } from 'react';
import "./Blogs.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import b1 from "./images/room.jpg";
import b2 from "./images/blog2.jpg";
import b3 from "./images/blog3.jpg";

function Blogs() {

    const blogs = useRef([b1, b2, b3])

    return <section class="blogs-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading text-center wow fadeInUp" data-wow-delay="100ms">
                        <h6>Our Blog</h6>
                        <h2>Latest News &amp; Event</h2>
                    </div>
                </div>
            </div>
            <div class="row">
            {blogs.current.map((el, i) => {
                return  <div key={i} class="col-12 col-md-6 col-lg-4">
                            <div class="single-post-area mb-100 wow fadeInUp" data-wow-delay="300ms" >
                                <a href="#" class="post-thumbnail"><img src={el} alt="" /></a>
                                <div class="post-meta">
                                    <a href="#" class="post-date">Jan 02, 2019</a>
                                    <a href="#" class="post-catagory">Event</a>
                                </div>
                                <a href="#" class="post-title">Learn How To Motivate Yourself</a>
                                <p>How many free autoresponders have you tried? And how many emails did you get through using them?</p>
                                <a href="index.html" class="btn continue-btn">
                                    <FaLongArrowAltRight />    
                                </a>
                            </div>
                        </div>
                    })}
            </div>
        </div>

    </section>

}

export default Blogs
