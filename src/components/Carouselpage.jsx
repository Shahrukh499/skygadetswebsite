import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import p1 from '../logo/p1.jpg';
import p2 from '../logo/p2.jpg'
import p3 from '../logo/p3.jpg'
import p4 from '../logo/p4.jpg'

export default function Carouselpage() {
  return (
    <>
       <div className='mb-5'>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p1}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p2}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <hr/>
    </div>
    </>
  )
}
