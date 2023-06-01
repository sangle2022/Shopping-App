import React from "react";
import products from "../product";
import { Col, Row } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
const HomeScreens = () => {
  return (
    <>
      <Row>
        {products.map((product) => (
          
            <Col>
              <ProductScreen product={product}/>
            </Col>
         
        ))}
      </Row>
    </>
  );
};

export default HomeScreens;
