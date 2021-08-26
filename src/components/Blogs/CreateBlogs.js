import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import blogImage from "../../images/banner.webp";
import Header from "../Header/Header";
import "./CreateBlogs.css";
import Footer from "../Footer/Footer";

const CreateBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get(
        "https://aqueous-cove-89051.herokuapp.com/getblogs"
      );
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);
  return (
    <Container fluid="true" style={{ marginTop: "130px" }}>
      <Header />
      <Container>
        <Row style={{ marginBottom: "40px" }}>
          <Col className="">
            <Link to="/AddBlogs" type="button" class="btn px-3 py-2 blog_btn">
              CREATE BLOG
            </Link>
          </Col>
        </Row>
        <Row>
          {blogs.length < 1 ? (
            <div className="mt-5 pt-5 d-flex justify-content-center">
               <Spinner animation="border" variant="success" />
            </div>
          ) : (
            blogs.map((blog) => (
              <Col md={4} sm={6} xs={12}>
                <Link to={`/singleBlog/${blog._id}`}>
                  <Card className="shadow mb-5 p-4">
                    <img src={blogImage} alt="Girl in a jacket"/>
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text className="text">{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))
          )}
        </Row>
      </Container>
      <Footer/>
    </Container>
  );
};

export default CreateBlogs;
