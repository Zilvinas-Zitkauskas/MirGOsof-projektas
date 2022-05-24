import React from 'react'
import { Carousel } from "react-bootstrap"

export default function BootCarouselHome() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/a1/24/d6/a124d6cbbaf3e36f7d2f443fc87b224e.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/46/90/6b/46906b64baa4c49b70d3b6c7797de606.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/64/f5/07/64f50772f4e0e6098406446bf78ec946.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}