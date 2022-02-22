import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import axios from 'axios';

function Website() {
    
    return (

        <div>
            <div class='container-fluid'>
                <div class="row align-items-center">
                    <div class='class="col-xl-2 col-lg-2 col-md-1"'>
                        <div class='logo'>
                            <a href=''>
                                <img src='data:image/webp;base64,UklGRqAEAABXRUJQVlA4TJMEAAAv0gAMEH9kkG2kopzH+5PtIQQCSSj7qywlEEhxKDPsuJEkRdqqriH/DTx6ngHUpLZtG8ZtcsoduFYAQBgQMSAAggEwAIAACMAEcABMAIaJBWHCIBCEYUIARp9hgjggDoABYmLCABDoYRCAAACAIBCCgVgQAEEwEASA+wsEABAE8UYiEQgEHI5GI/HBC4lCopBIJOr1SgQSjRscDUcj4Gg4HIVGoeFwOKjd2qTIbd5w0mYUtFnUoXXEmrDZFmOtzCAMszlsxv/sqaruEvR8jeg/BLdtJEnyVHdP9rJT1cfOEyD0Yu76o1lUjO7U6/W5649RKVqoM83ffIrK0HM2KqZwq65r4fZzVIDmGdVSeFpP0uLdF8i5btRTtZzxwuwcI7Xw10tkWY/qNn2LLOsPI38jxzp7zTYuXUSO9dC4/x5Z1m9G/o2Z9FJR8w0tIYT9TjOyTRpsUKwxzxE721Qj2xTLzr/KEBoQDRG3YQl97qptXL6AiEhRrxrGHxNmOpU8QXPYybtUkK4iao6CPKqNcSOD+xEJgagNS+j7xv2PSIeoRZrp1LyMeSVuxMwK0sCPRG9sWEL/YuR/E7QtIQwReTWuktGtHA1jEXM2DKHPX7GNK+eT6PS+pWAG1KYNdoZe0TbNTQghDLI+iTJbnMdEWZjTy46PItQGxZKxkRz6nnH/MxIQ+cqox7T0LcxCvMHClzLN/NuLhJ7EjBxjk9HC8myzkRz6JyP3DNRknKDOoisbPBaNW6woY+VUO0APZCE19IXLtnH1nIHeMrRszqC01SJOJD3usZXER652g8yjidTQ/xn3vyKdwH6xclZLW05pdYiuHgtFqZrwoV3sxAK0kRr6ByMPANuP+ch6geoi4cdMECWvgmAnMfTFS7Zx7ayRTqwYYw1YT/xj3P8OE2NBO9N6pa2GJAaDg41QqkU7C0Xf+WVizERq6O+MPMTG5iSKIB7llMDk9JANWtxCuXKav0VtRg3Qbgy9JlJDf2Mbc7NoPfOWmjRhhQHAfuIzpLRiUI3rFZ8r9YuOiZ3SphYL6aFf3F02cB34jD6yIhYdFR5wYSwhfady7VwBlLdjwQG+YNNieWoxhX5VWErlETbN0NQuOw0UURGJu409s6wg6I2F8PFzXbsx2UIDeH57IWXMA+1EdOR1M2jRwxxzanr5B/avIO6YHqJF9Sek2LWEfqdjZ3LhJvBV6a/dDvygEqaW8H/IILsfrhxwNSXDoIcJU+hApz7Yzj8ZvTmv8wxbmMHxzXbgApvUsU6PSHrlylFbQQDfOcZmOjjYMIV+4yQRHX8/obAAdHD3/VgZNXiHtSOnfayA1QndOE3ECvyC+OT6HOM2cFTMyH7kV4dJ6GjHFgCYfVQWnmO7sDOwFfnVu0NECYU/gfeZk5EDyLL2kq6v2zdxOydKF10OmVZP5EUzX5aFnUR0ugnZ1oZRomjhi9bDNPnhm8i4DlKSPt+BrOu1TxOORg+9hsxr+0R0dG9A/hUiR4N7UAV646R2NPXx26gGNU7LcWQ3KkPieWy87XVUh/jzWN8mVIr2Eg3vQ9Wo+5P3kH8BAA==' alt=''></img>
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-10 col-lg-10 col-md-10">
                        <div class="menu-main d-flex align-items-center justify-content-end">
                            <div class="main-menu f-right d-none d-lg-block">

                                <Nav className='Nav' style={{ padding: '42px 10px', fontSize: "30px" }}>
                                    <Nav.Link href='/Home'>Home</Nav.Link>
                                    <Nav.Link href='/About'>About</Nav.Link>
                                    <Nav.Link href='/Services'>Services</Nav.Link>
                                    <Nav.Link href='/Portfolio'>Portfolio</Nav.Link>
                                    <Nav.Link href='/Page'>Page</Nav.Link>
                                    <Nav.Link href='/Contact'>Contact</Nav.Link>
                                </Nav>
                            </div>
                            <div class="header-right-btn f-right d-none d-xl-block ml-20">
                                <a href='#' class='btn header-btn'>
                                    <Button variant="danger">
                                        Get Free Consultent
                                    </Button>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="slider-area ">
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
            </div> */}

        </div>


    )
}

export default Website