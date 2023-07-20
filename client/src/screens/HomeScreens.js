// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import products from "../product";
// import { Col, Row } from "react-bootstrap";
// import ProductScreen from "./ProductScreen";
// const HomeScreens = () => {
//   const [Products,setProducts]=useState([]);
//  useEffect(()=>{
//   const fetchProducts=async()=>{
//     const {data}=await axios.get("http://localhost:8080/api/products");
//     setProducts(data);
    
//   }
//   fetchProducts();
//  },[])
//   return (
//     <>
//       <Row>
//         {Products && Products.map((product) => (
          
//             <Col key={product._id} md={3}>
//               <ProductScreen product={product}/>
//             </Col>
         
//         ))}
//       </Row>
//     </>
//   );
// };

// export default HomeScreens;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
import Loader from "../component/shared/Loader";
import Message from "../component/shared/Message";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
