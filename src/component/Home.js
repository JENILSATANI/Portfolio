import React from 'react'
import { Nav, Button } from 'react-bootstrap'

function Website() {
    return (
        <div>
               <div class="slider-area ">
                <div class='slider-active slick-initialized slick-slider'>
                    <div class='slick-list draggable'>
                        <div class="slick-track"    >
                            <div class='body'>
                                <div class='container'>
                                    <div class='row'>
                                        <div class="col-xl-6 col-lg-6 col-md-8">
                                            <div class='hero__caption'>
                                                <span>
                                                    <h1>
                                                        Get Every Singls Solution
                                                    </h1>
                                                </span>
                                                <h1 style={{ fontSize: "64px", color: "red", marginbottom: "37px" }}>I’m MERN stack Developer </h1>
                                                <p data-animation="fadeInUp" class="" >jhorem rfpsum golor sidt amet, consectetur adipiscing elit, eiusmod tempor incididunt utcjhg labore bet dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                                <div class="hero__btn">
                                                    <Button variant="danger">
                                                        Learn More
                                                    </Button><span> <Button variant="danger">
                                                        Hire Me
                                                    </Button></span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='container'>
                <div class='row '>
                    <div class='col-lg-5'>
                        <div class="about-caption mb-50">
                            <h3>
                                MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. Express and Node make up the middle (application) tier. Express. js is a server-side web framework, and Node.
                            </h3>
s                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class='about-caption2'></div>
                        <h3>Any Type Of Query<br /> Discussion.</h3>
                        <p style={{fontSize:"25px"}}>Late talk with me</p>
                        <div class="send-cv">
                            <a href="https://webmail.xceltec.in/#1"><h1>Jenilsatani97809@gmail.com</h1></a>
                            <i class="ti-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Website