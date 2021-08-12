import React, { useState, useEffect }from "react";
import { Card, Container, Row, Col, } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import blogImage from "../../images/banner.webp";
import Header from "../Header/Header";
import './CreateBlogs.css';

const CreateBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  

  useEffect(() => {
    const fetchBlogs = async () =>{
        const res = await axios.get("https://aqueous-cove-89051.herokuapp.com/getblogs")
        setBlogs(res.data)
    }
    fetchBlogs();
  }, [])
  return (
    
    <Container fluid="true" style={{marginTop:"130px"}}>
      <Header />
      <Container>
        <Row style={{marginBottom:"40px"}}>
          <Col className="">
            <Link to="/AddBlogs" type="button" class="btn px-3 py-2 blog_btn">
              CREATE BLOG
            </Link>
          </Col>
        </Row>
        <Row>
          
            {
              blogs.map(blog => (
               <Col md={4} sm={6} xs={12} >
                 <Link to="/singleBlog">
               <Card  className="shadow mb-5 p-4" >
                 {/* <Card.Header>Header</Card.Header> */}
                 <img src={blogImage} alt="Girl in a jacket"></img>
                 <Card.Body>
                   <Card.Title>{blog.title}</Card.Title>
                   <Card.Text className="text">
                     {blog.description}
                   </Card.Text>
                 </Card.Body>
                 {new Date().getFullYear()}
               </Card>
               </Link>
             </Col>
            ))
            }
          
         
          
        </Row>
      </Container>
    </Container>
  );
};

export default CreateBlogs;
