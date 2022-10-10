import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import './Style.css';
import { useNavigate, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {DLT,Add,REMOVE} from '../Redux/Action/Action';


function CardDetails() {

  const [data, setData] = useState([]);
//console.log(data);
  const {id} = useParams();
  //console.log(id);
  
  const getdata = useSelector((state)=> state.cartreducer.carts);
  //console.log(getdata);

  const compare = () =>{
    let comparedata = getdata.filter((e)=>{
      return  e.id == id;
    })
    setData(comparedata);
  }

  useEffect(()=>{
    compare();
  },[id]);

const dispatch = useDispatch();

const dlt = (id)=>{
  dispatch(DLT(id));
  history("/");
};

const send = (e) =>{
  dispatch(Add(e));
}

const remove = (item) =>{
  dispatch(REMOVE(item));
}




const history = useNavigate();

  return (
    <>
      <div className='container mt-2'>
        <h1 className='text-center'>Item Details Page</h1>
        <section className='container mt-3' style={{width:'750px', height:'auto'}}>
          <div className="item-details">
            {
              data.map((ele)=>{
                return( 
                  <>
            <div className="item-img">
              <img src={ele.imgdata} className="mt-2" style={{width:'200px',height:'200px',}} alt="img" />
            </div>
            <div className="details">
               <Table>
                <tbody>
                <tr>
                  <td>
                    <p><strong>Item Details</strong> : {ele.name}</p>
                    <p><strong>Price</strong> : {ele.price}</p>
                    <p><strong>Details</strong> : {ele.iteminfo}</p>
                    <p><strong>Total</strong> : {ele.price*ele.qnty}</p>
                    <div className='mt-5 d-flex justify-content-center align-item-center bg-light' style={{width:'100px'}}>
                      <span onClick={()=>remove(ele)} style={{padding:'6px', fontSize:'20px', cursor:'pointer'}}>-</span>&nbsp;
                      <span style={{padding:'6px', fontSize:'20px'}}>{ele.qnty}</span>&nbsp;
                      <span onClick={()=>send(ele)} style={{padding:'6px', fontSize:'20px',cursor:'pointer'}}>+</span>
                    </div>
                  </td>
                  <td>
                  <p><strong>Rating :</strong> 3.5</p>
                  <p><strong>Order Review :</strong>----</p>
                  <p onClick={()=>dlt(ele.id)}><strong>Remove Item :</strong> <span style={{color:'red', fontSize:'23px', cursor:'pointer'}}><MdDelete/></span></p>
                   <br/><br/>
                  <div className="buy-button">
                      <button className='btn btn-dark'>Buy Now</button>
                    </div>
                  </td>
                </tr>
                </tbody>
               </Table>
            </div>
                  </>
                )
              })
            }
            
          </div>
        </section>
      </div>
    </>
  )
}

export default CardDetails;