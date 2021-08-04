import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import blogImage from "../../images/banner.webp";
import CSS from "./CreateBlogs.css";

const CreateBlogs = () => {
  return (
    <Container className="d-flex card">

    <button type="button" class="btn btn-success">Create Blogs</button>
        

      <Row className="col-md-12">
        
        <Card border="primary" style={{ width: "18rem" }}>
          {/* <Card.Header>Header</Card.Header> */}
          <img src={blogImage} alt="Girl in a jacket"></img>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="primary" style={{ width: "18rem" }}>
          {/* <Card.Header>Header</Card.Header> */}
          <img src={blogImage} alt="Girl in a jacket"></img>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="primary" style={{ width: "18rem" }}>
          {/* <Card.Header>Header</Card.Header> */}
          <img src={blogImage} alt="Girl in a jacket"></img>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="primary" style={{ width: "18rem" }}>
          {/* <Card.Header>Header</Card.Header> */}
          <img src={blogImage} alt="Girl in a jacket"></img>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="primary" style={{ width: "18rem" }}>
          {/* <Card.Header>Header</Card.Header> */}
          <img src={blogImage} alt="Girl in a jacket"></img>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="primary" style={{ width: "18rem" }}>
          {/* <Card.Header>Header</Card.Header> */}
          <img src={blogImage} alt="Girl in a jacket"></img>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

      </Row>

    </Container>
  );
};

export default CreateBlogs;
