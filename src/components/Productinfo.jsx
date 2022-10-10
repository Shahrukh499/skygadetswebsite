import React from 'react'
import { GrCertificate } from "react-icons/gr";
import { BsArrowRepeat } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import '../components/homepage.css'


function Productinfo() {
  return (
    <>
      <div className="container-fluid product-info">
        <div className="container">
            <div className="row">
                <div className="col-4 mb-4 colum1">
                    <div className='container d-block text-center item1'>
                    <FaShippingFast className='ship'/>
                    <h3 className='heading1'>Free Shipping</h3>
                    <p className='parg1'>Free Shipping and fast delivery on your given location</p>
                </div> 
                </div>
                <div className="col-4 mb-4 colum1">
                    <div className='container d-block text-center item1'>
                      <GrCertificate className='ship'/>
                        <h3 className='heading1'>Quality Products</h3>
                        <p className='parg1'>100% Pure quality products in our shop</p>
                    </div>
                </div>
                <div className="col-4 mb-4 colum1">
                    <div className='container d-block text-center item1'>
                    <BsArrowRepeat className='ship'/>
                        <h3 className='heading1'>Easy Return</h3>
                        <p className='parg1'>Easy return, Return period 7 days from delivery</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Productinfo