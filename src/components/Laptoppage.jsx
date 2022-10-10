import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCart4 } from "react-icons/bs";
import Lapidata from "./Laptopdata";
import { useDispatch } from "react-redux";
import { Add } from "../Redux/Action/Action";
import './Style.css';

export default function Laptoppage() {
    const [data, setData] = useState(Lapidata);

    const dispatch = useDispatch()

    const send = (e) =>{
        dispatch(Add(e));
    }

  return (
    <>
      <div className="container">
        <h1 className="mt-4 text-center">My Card Item</h1>
        <div className="row justify-content-center py-4">
          {data.map((ele,id) => {
            return (
              <>
                <Card className="me-3 mt-3 card-item" style={{ width: "18rem"}}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <Card.Img variant="top" src={ele.imgdata} style={{height:'210px'}} />
                        </td>
                      </tr>
                  <Card.Body>
                    <tr>
                    <td>
                      <Card.Title>{ele.name}</Card.Title>
                    </td>
                    </tr>
                    <tr>
                    <td>
                       <Card.Text>
                      {ele.info}
                    </Card.Text>
                    </td>
                    </tr>
                    <tr>
                     <td>
                      <Button className="btn btn-dark mt-2" onClick={()=>send(ele)}  variant="primary">Add to cart&nbsp; {<BsCart4/>}</Button><span style={{marginLeft:"25px",fontWeight:'bolder'}}> &nbsp;₹{ele.price}</span>
                     </td>
                     </tr>
                  </Card.Body>
                  </tbody>
                  </table>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
