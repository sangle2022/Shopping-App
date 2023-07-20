// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {Row,Col,ListGroup,Button,Image, ListGroupItem} from "react-bootstrap"
// import { Link, useParams } from 'react-router-dom';
// import Rating from '../component/rating';
// const ProductDetails = () => {
//     const {id}=useParams();
//     const [Product,setProducts]=useState([]);
//     useEffect(()=>{
//         const fetchProducts=async()=>{
//           const {data}=await axios.get(`http://localhost:8080/api/products/${id}`);
//           setProducts(data);
          
//         }
//         fetchProducts();
//        },[])
//   return (
//     <div>
//         <Link to="/"  className='btn btn-light'><i class='fas fa-arrow-left'></i>&nbsp;GO BACK</Link>
//         <Row>
//             <Col md={6}>
//                 <Image src={Product.image} alt={Product.name}/>
//             </Col>
//             <Col md={3}>
//                 <ListGroup variant="flush">
//                      <ListGroupItem>
//                         <h3>{Product.name}</h3>
//                      </ListGroupItem>
//                      <ListGroupItem>
//                         <Rating value={Product.rating} text={`${Product.numReviews} reviews`}/>
//                      </ListGroupItem>
//                      <ListGroupItem>
//                         Price : ${Product.price}
//                      </ListGroupItem>
//                      <ListGroupItem>
//                         {Product.description}
//                      </ListGroupItem>
//                 </ListGroup>
//             </Col>
//             <Col md={3}>
//                 <ListGroupItem>
//                     <Row>
//                         <Col>status :</Col>
//                         <Col>{Product.countInStock>0?"In Stock":"out of stock"}</Col>
//                     </Row>
//                 </ListGroupItem>
//                 <ListGroupItem>
//                     <Button className='"btn-block' type='button'>
//                         Add to Cart
//                     </Button>
//                 </ListGroupItem>
//             </Col>
//         </Row>
//     </div>
//   )
// }

// export default ProductDetails


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../component/rating";
import { Link, useParams, useNavigate } from "react-router-dom";
import { listProductDetails } from "../actions/productActions";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
  Form,
} from "react-bootstrap";
const ProductDetails = () => {
    const {id}=useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch,id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };
  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left    "></i>
        &nbsp; GO BACK
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price : ${product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status :</Col>
              <Col>
                {product.countInStock > 0 ? "In Stock " : "out of stock"}
              </Col>
            </Row>
          </ListGroupItem>
          {product.countInStock > 0 && (
            <ListGroupItem>
              <Row>
                <Col>Qty</Col>
                <Form.Control
                  as="select"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Row>
            </ListGroupItem>
          )}
          <ListGroupItem>
            <Button
              className="btn-block"
              type="button"
              onClick={addToCartHandler}
            >
              Add to cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;