import React, { useEffect, useRef } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Slider2.css'
import { FaCheck } from "react-icons/fa";



export default function Slider2() {
    
    const myRef = useRef()

    const animateSlide = () =>{
        Array.from(myRef.current.children[0].children[0].children[0].children).forEach(el => {
            el.classList.contains('active') && el.children[0].children[1].classList.add('animate')
          })
        // document.querySelector('.owl-item.active .room-content').classList.add('animate')
    }
    
    const removeAnimation = () =>{
        Array.from(myRef.current.children[0].children[0].children[0].children).forEach(el => {
            console.log(el.children[0].children[1].classList.contains('animate'))
            el.children[0].children[1].classList.remove('animate')
        })
        // document.querySelectorAll('.room-content').forEach((el)=> el.classList.contains('animate') && el.classList.remove('animate'))
    }
    useEffect(()=>{
        Array.from(myRef.current.children[0].children[0].children[0].children).forEach(el => {
            el.classList.contains('active') === false && el.children[0].children[1].classList.remove('animate')
          })
    }, [])

    const rooms = [{type: 'Best King Room', price: 125 , img: 'img5', size: 25, capacity : 4, bed: 'King', services: ['Wifi', 'Television', 'Bathroom']},
    {type: 'Premium King Room', price: 300 , img: 'img6', size: 30, capacity : 5, bed: 'King', services: ['Wifi', 'Television', 'Bathroom']}]


    return (
        <section className='rooms-area mb-100' ref={myRef}>
            <OwlCarousel items={1} dots={false}  onTranslate={removeAnimation} onTranslated={animateSlide} smartSpeed={1000} className="owl-theme" loop nav navText={['Previous', 'Next']}>
                {rooms.map((el,i) => {
                    return <div key={i} class="single-room-slide d-flex align-items-center">
                            <div className="room-thumbnail h-100 bg-img" style={{backgroundImage: `url(assets/img/${el.img}.jpg)`}}></div>
                            <div className='room-content animate' >
                                <h2>{el.type}</h2>
                                <h3>{el.price}$ <span>/ Day</span></h3>
                                <ul className="room-feature" >
                                    <li><span className='space'> <FaCheck /> Size</span>: <span> {el.size} ft</span></li>
                                    <li><span className='space'> <FaCheck /> Capacity</span>: <span> Max persion {el.capacity}</span></li>
                                    <li><span className='space'> <FaCheck /> Bed</span>: <span>{el.bed} Beds</span></li>
                                    <li><span className='space'> <FaCheck /> Services</span>: {el.services.map((e,j)=> <span key={j}>{e}{j !== (el.services.length-1) && ', '}</span>)}</li>
                                </ul>
                                <a href="#" className="btn b mt-30">View Details</a>
                            </div>
                        </div>
                })}
            </OwlCarousel>
        </section>
    )

}
