import React, { useEffect, useState } from "react";
import axios from "axios";
// import products from "../product";
import { Col, Row } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
const HomeScreens = () => {
  const [Products,setProducts]=useState([]);
 useEffect(()=>{
  const fetchProducts=async()=>{
    const {data}=await axios.get("http://localhost:8080/products");
    setProducts(data);
    
  }
  fetchProducts();
 },[])
  return (
    <>
      <Row>
        {Products && Products.map((product) => (
          
            <Col key={product._id} md={3}>
              <ProductScreen product={product}/>
            </Col>
         
        ))}
      </Row>
    </>
  );
};

export default HomeScreens;
