import React from 'react'
import { Carousel } from "react-bootstrap"

export default function BootCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/564x/e8/72/d7/e872d7c40656b872f963405c70e8d3aa.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/564x/fb/52/8e/fb528e75fdffacbab43cade8e28048e2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/564x/11/2b/fd/112bfd856a50051af84db7a8dfd11a76.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}