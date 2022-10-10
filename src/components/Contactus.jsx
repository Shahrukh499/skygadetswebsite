import React from "react";
import '../components/homepage.css';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { BiMap,BiPhone } from "react-icons/bi";
import { GoMailRead } from "react-icons/go";

function Contactus() {
  return (
    <>
      <div className="container-fluid contact mt-4">
        <div className="container">
          <div className="contact-heading py-4">
            <h1 className="text-center">Contact Us</h1> 
            <h5 className="text-center">
            Have some question? We'd love to hear from you
          </h5>
          </div>
         
          <div className="row">
            <div className="col-lg-6">
                <div className="algn1">
              <div>
                <p className="parg2">
                 <span className="icon1"><BiMap/></span> 47/1 GJ KHAN ROAD TOPSIA 700039
                </p>
              </div>
              <div>
                <p className="parg2">
                  <span className="icon1"><BiPhone/></span> 7894561230
                </p>
              </div>
              <div>
                <p className="parg2">
                   <span className="icon1"><GoMailRead/></span> abcgmail.com
                </p>
              </div>
            </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-5">
                <Form>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control type="Text" placeholder="Enter Your Name" />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput2"
                  >
                   
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label style={{color:'white'}}>Enter Your Queries</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                  </Form.Group>
                  <Button className="mb-5" variant="primary">SEND</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
