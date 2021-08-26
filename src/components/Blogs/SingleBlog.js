import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import blogImage from "../../images/banner.webp";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const SingleBlog = () => {
  const { id } = useParams();
  console.log(id);
  const [singleBlog, setSingleBlog] = useState([]);

  useEffect(() => {
    const fetchSingleBlog = async () => {
      const res = await axios.get(
        `https://aqueous-cove-89051.herokuapp.com/singleBlog/${id}`
      );
      setSingleBlog(res.data);
    };
    fetchSingleBlog();
  }, []);

  return (
    <>
      <Header />
      <Container md={4} sm={6} xs={12} className="mt-5 pt-5">
        {singleBlog.map((blog) => (
          <Card className="w-75 mx-auto shadow-0">
            <img className="w-100" src={blogImage} alt="Blog" />
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>{blog.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Footer/>
    </>
  );
};

export default SingleBlog;
