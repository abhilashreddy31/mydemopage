import React from 'react';
import './Home.css';
import Home1 from "../Home1/Home1"
import image1 from "../../asserts/image1.png"
import avatar1 from "../../asserts/avatar.png"
import avatar2 from "../../asserts/avatar (1).png"
import avatar3 from "../../asserts/avatar (2).png"
import image2 from "../../asserts/image22.png"
import image3 from "../../asserts/image3.png"
import ellipse1 from "../../asserts/Ellipse 1.svg"
import ellipse2 from "../../asserts/Ellipse 1 (1).svg"
import ellipse3 from "../../asserts/Ellipse 1 (2).svg"
import curve1 from "../../asserts/curve1.svg"
import curve2 from "../../asserts/curve2.svg"
import circle from '../../asserts/circle1.svg'
import circle1 from "../../asserts/circle2.svg"
import photo1 from "../../asserts/photo1.svg"
import photo2 from "../../asserts/photo2.svg"
import circle3 from "../../asserts/circle3.svg"
import circle4 from "../../asserts/circle4.svg"
import photo3 from "../../asserts/photo3.svg"
const cardData = [
    {
        image: avatar1,
        title: 'Jenny Wilson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
    },
    {
        image: avatar2,
        title: 'Jenny Wilson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
    },
    {
        image: avatar3,
        title: 'Jenny Wilson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
    },
];

const cardData1 = [
    {
        image: ellipse1,
        title: 'Corey Korsgaard',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        image: ellipse2,
        title: 'Jakob Aminoff',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        image: ellipse3,
        title: 'Carla Press',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
];

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="left-column">
                    <img className='curve1' src={curve1}></img>
                    <img className='curve' src={curve2}></img>
                    <img className='circle' src={circle1}></img>
                    <img className='photo1' src={photo2}></img>
                    <div className='home-box-1'>

                        <p className='p2'>Discover the beauty of the tropics.</p>
                        <h1>Tropical Destinations</h1>
                        <h2>For Students</h2>
                        <p className='p1'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
                        <btn className="signup-btn">SIGN UP</btn>
                    </div>
                </div>
                <div className="right-column">
                    <img className='circle1' src={circle}></img>
                    <img className='photo2' src={photo1}></img>

                    <img className='image1' src={image1} alt="Tropical Destination" />
                </div>
            </div>
            <div class="home-container-1">
                <div className="left-column-1">
                    <img className='curve11' src={curve1}></img>

                    {cardData.map((card, index) => (
                        <div className="card-11" key={index}>
                            <img className='avatar-img' src={card.image} alt={`Image ${index + 1}`} />
                            <div className='avatar-box'>
                                <p className='title-p'>{card.title}</p>
                                <p className='text-p'>{card.text}</p>

                            </div>


                        </div>
                    ))}
                </div>
                <div class="right-column-1">
                    <img className='circle3' src={circle4}></img>
                    <h1>Tropical Adventure</h1>
                    <h2>for Students.</h2>
                    <h3>Student Tropical Vacation: Relax and Recharge</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Massa quis natoque sit quam</li>
                        <li>Eros non pellentesque elit </li>
                        <li>tortor id euismod habitant</li>
                        <li>Sed suspendisse id in ultrices</li>
                    </ul>
                    <btn className="explore-btn">Explore More</btn>
                </div>
            </div>
            <div className='home-container-7'>
                <Home1></Home1>
            </div>

            <div class="home-container-3">
                <div className="left-column-2">
                    <img className='curve111' src={curve1}></img>
                    <img className='curve112' src={curve2}></img>
                    <img className='circle4' src={circle3}></img>

                    <h1>Get 20% off for student</h1>
                    <h2>Student discounts available.</h2>
                    <h3>Get ready for some fun in the sun!</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Massa quis natoque sit quam</li>
                        <li>Eros non pellentesque elit </li>
                        <li>tortor id euismod habitant</li>
                        <li>Sed suspendisse id in ultrices</li>
                    </ul>
                    <btn className="explore-btn">Explore More</btn>

                </div>
                <div class="right-column-2">
                    <img className='image2' src={image2}></img>
                    <img className='circle33' src={circle4}></img>

                </div>
            </div>
            <div class="home-container-4">
                <div class="right-column-3">
                    <img className='circle44' src={circle3}></img>
                    <img className='image3' src={image3}></img>

                </div>
                <div className="left-column-4">
                    <div className='form-box'>
                        <h1>Book now</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                        <div className='form-box-2'>
                            <p>City</p>
                            <input className='input-1' placeholder='Placeholder'></input>
                        </div>
                        <div className='form-box-1'>
                            <div>
                                <p>Arrival</p>
                                <input className='input-2' placeholder='10 October'></input>
                            </div>
                            <div>
                                <p>Departure</p>
                                <input className='input-2' placeholder='11 October'></input>
                            </div>
                        </div>
                        <div className='form-box-3'>
                            <div>
                                <p>Star</p>
                                <input className='input-2'></input>
                            </div>
                            <div>
                                <p>Room</p>
                                <input className='input-2'></input>
                            </div>
                        </div>
                        <btn className="book-btn">BOOK NOW</btn>
                    </div>
                </div>
            </div>
            <div className='home-container-5'>
                <h1 className='h11'>Testimonials</h1>
                <div className="box-100">

                    {cardData1.map((card, index) => (
                        <div className="card-1" key={index}>
                            <div className='ellipse-box'>
                                <img className='ellipse-img' src={card.image} alt={`Image ${index + 1}`} />
                            </div>
                            <div className='text-box'>
                                <p className='title-p1'>{card.title}</p>
                                <p className='title-p2'>{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='home-container-6'>
                <h1 className='h10'>Student Special: Discounted rates on tropical getaways!</h1>
                <p className='p10'>Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
                <div className='box-6'>
                    <div className='boxs'>
                        <p className='p100'>Privacy Policy</p>
                        <p className='p100'>Terms of Use</p>
                        <p className='p100'>Sales and Refunds</p>
                        <p className='p100'>Legal</p>

                    </div>
                    <div className='boxs'>
                        <p className='p101'>About</p>
                        <p className='p101'>Schedules</p>
                        <p className='p101'>Pricing</p>
                        <p className='p101'>Membership</p>
                        <p className='p101'>Joins</p>

                    </div>



                </div>



            </div>




        </div>
    );
};

export default Home;
