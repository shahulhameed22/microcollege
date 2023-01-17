import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import './carousel.css';

export  function Carous(){
    return(
        <>
        <div className="container col-lg-12">
            <Carousel>
                <Carousel.Item>
                    <img src={img1} className="big2 w-100" alt="first slide"/>
                    <Carousel.Caption>
                        <h1>Make it big with<span className="big1">Data Science </span>even without prior coding experience </h1>
                        <button>Explore</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} className="big2 w-100" alt="secound slide"/>
                    <Carousel.Caption>
                        <h1><span className="big3">Over 70,000</span>professionals have truned their Ambitions into reality</h1>
                        <button>Explore</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} className="big2 w-100" alt="third slide"/>
                    <Carousel.Caption>
                        <h1>Get an average <span className="big4"> 52% </span> Salary hike With top <span className="big5">MBA Programs</span></h1>
                        <button>Explore</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </>

    );

}