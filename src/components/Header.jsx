import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import { AiOutlineClose } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import "../components/Style.css";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { TbCurrencyRupee } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { DLT } from "../Redux/Action/Action";
import sg from "../logo/sg.png";

export default function Header() {
  const [price, setPrice] = useState(0);
  //console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  //console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink className="text-decoration-none text-light mx-3" to="/skygadetswebsite">
            <img
              src={sg}
              alt="logo"
              className="img-fluid"
              style={{ width: "200px", height: "60px" }}
            />
          </NavLink>
          <Navbar.Collapse className="justify-content-end me-4">
            <Nav className="me-4">
              <NavLink className="text-decoration-none text-light me-3" to="/skygadetswebsite">
                Home
              </NavLink>
              <NavLink className="text-decoration-none text-light me-3" to="/">
                Products
              </NavLink>
              <NavLink className="text-decoration-none text-light me-3" to="/about">
                About
              </NavLink>
              <NavLink className="text-decoration-none text-light me-3" to="/contact">
                Contact us
              </NavLink>
            </Nav>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
          <h1
            onClick={handleClick}
            style={{ color: "white", cursor: "pointer" }}
          >
            {<RiShoppingCartFill />}
            <Badge
              badgeContent={getdata.length}
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="mb-4"
            ></Badge>
          </h1>
        </Container>
        <Menu
          className="cart-menu"
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div className="card-details">
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Item Details</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr>
                          <td className="align-top">
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                alt="img"
                                style={{ width: "5rem", height: "5rem" }}
                              />
                            </NavLink>
                          </td>
                          <td>
                            <h6>{e.name}</h6>
                            <p>
                              Amount :<TbCurrencyRupee className="mb-1" />
                              {e.price}
                            </p>
                            <p>Quantity : {e.qnty}</p>
                          </td>
                          <td>
                            <p onClick={() => dlt(e.id)}>
                              <span
                                style={{
                                  color: "red",
                                  fontSize: "23px",
                                  cursor: "pointer",
                                }}
                              >
                                <MdDelete />
                              </span>
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <tr>
                    <td>
                      <p className="mt-3">Total Amount : ₹ {price}</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="card-details d-flex justify-content-end align-items-center">
              <p>Your Card is empty</p>
              <img
                src="./Images/cart.gif"
                alt="cart icon"
                style={{ height: "40px", width: "45px", marginBottom: "15px" }}
              />
              {/* cart gif*/}
            </div>
          )}
          <p className="close-button-icon" onClick={handleClose}>
            {<AiOutlineClose />}
          </p>
          {/* close button icon */}
        </Menu>
      </Navbar>
    </>
  );
}
