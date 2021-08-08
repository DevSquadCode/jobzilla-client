import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import blogImage from "../../images/banner.webp";
import Header from "../Header/Header";
import './CreateBlogs.css'

const CreateBlogs = () => {
  return (
    <Container fluid="true">
      <Header />
      <Container>
        <Row>
          <Col className="">
            <button type="button" class="btn px-3 py-2 blog_btn">
              CREATE BLOG
            </button>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={12} >
            <Card  className="shadow mb-5 p-4" >
              {/* <Card.Header>Header</Card.Header> */}
              <img src={blogImage} alt="Girl in a jacket"></img>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Card className="shadow mb-5 p-4">
              {/* <Card.Header>Header</Card.Header> */}
              <img src={blogImage} alt="Girl in a jacket"></img>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Card className="shadow mb-5 p-4">
              {/* <Card.Header>Header</Card.Header> */}
              <img src={blogImage} alt="Girl in a jacket"></img>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Card className="shadow mb-5 mt-5 p-4">
              {/* <Card.Header>Header</Card.Header> */}
              <img src={blogImage} alt="Girl in a jacket"></img>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Card className="shadow mb-5 mt-5 p-4">
              {/* <Card.Header>Header</Card.Header> */}
              <img src={blogImage} alt="Girl in a jacket"></img>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Card className="shadow mb-5 mt-5 p-4">
              {/* <Card.Header>Header</Card.Header> */}
              <img src={blogImage} alt="Girl in a jacket"></img>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CreateBlogs;
