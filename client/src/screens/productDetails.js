import React, { useEffect, useState } from "react";
import axios from "axios";
import {Row,Col,ListGroup,Button,Image, ListGroupItem} from "react-bootstrap"
import { Link, useParams } from 'react-router-dom';
import Rating from '../component/rating';
const ProductDetails = () => {
    const {id}=useParams();
    const [Product,setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts=async()=>{
          const {data}=await axios.get(`http://localhost:8080/products/${id}`);
          setProducts(data);
          
        }
        fetchProducts();
       },[])
  return (
    <div>
        <Link to="/"  className='btn btn-light'><i class='fas fa-arrow-left'></i>&nbsp;GO BACK</Link>
        <Row>
            <Col md={6}>
                <Image src={Product.image} alt={Product.name}/>
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                     <ListGroupItem>
                        <h3>{Product.name}</h3>
                     </ListGroupItem>
                     <ListGroupItem>
                        <Rating value={Product.rating} text={`${Product.numReviews} reviews`}/>
                     </ListGroupItem>
                     <ListGroupItem>
                        Price : ${Product.price}
                     </ListGroupItem>
                     <ListGroupItem>
                        {Product.description}
                     </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroupItem>
                    <Row>
                        <Col>status :</Col>
                        <Col>{Product.countInStock>0?"In Stock":"out of stock"}</Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Button className='"btn-block' type='button'>
                        Add to Cart
                    </Button>
                </ListGroupItem>
            </Col>
        </Row>
    </div>
  )
}

export default ProductDetails