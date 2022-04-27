import React from 'react'
import { Carousel } from "react-bootstrap"

export default function BootCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/564x/29/1f/49/291f499d0ca2ef4bd584db36701a5b6e.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/564x/f5/b4/10/f5b4109c8dbdaeb186bd981e640aa2b5.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/564x/64/9c/10/649c10c9bf034314905ebf404fff2617.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}