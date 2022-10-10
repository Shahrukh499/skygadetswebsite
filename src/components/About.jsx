import React from 'react'
import '../components/homepage.css'
import { FaMapMarkedAlt,FaShippingFast } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

function About() {
  return (
    <>
    <div className="container-fluid about mt-5">
        <div className="container about-inner">
            <div className="about-heading">
              <h1 className='text-center'>About Us</h1>
            </div>
            <div className="blocks text-center mt-5">
                <div className='block1'>
                    <div className="text-start track-order">
                        <FaShippingFast/>
                    </div>
                   <h2 style={{color:'white'}}>Fast & Safe Delivery</h2>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, ea explicabo laudantium repudiandae minima et est nostrum. Iure, veniam porro natus aliquam earum commodi optio sit, repellat magnam, quam vitae? </p> 
                </div>
                <div className='block2'>
                    <div className='text-start track-order'>
                    <FaMapMarkedAlt/>
                    </div>
                   <h2 style={{color:'white'}}>Track Your Order</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil corporis maiores placeat id? Ullam incidunt eveniet voluptatem, impedit dolore suscipit quibusdam ipsum rem nostrum. Consectetur sit recusandae beatae dignissimos. </p> 
                </div>
                <div className='block3'>
                    <div className="text-start track-order">
                        <BsCashCoin/>
                    </div>
                   <h2 style={{color:'white'}}>Pay After Delivery</h2>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur consequatur dolorum modi optio debitis unde omnis eius porro sapiente, cumque ab aliquid ipsam nisi itaque dicta eligendi deserunt molestiae doloremque. </p> 
                </div>
                
            </div>
            
        </div>
    </div>
    <br/>
    <br/>
    
    </>
  )
}

export default About