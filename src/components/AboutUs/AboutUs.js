import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./about.module.css";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className={`${styles.aboutUs} mt-5 pt-5`}>
          <Col sm={12} md={6}>
            <img
              className="img-fluid rounded border p-4"
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
          </Col>
          <Col sm={12} md={6}>
            <h1 className="display-4 font-weight-bold">About jobZilla</h1>
            <h3 className="display-5">Who We Are</h3>
            <p className="lead text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem numquam maxime dolor in beatae doloremque nam
              officiis sapiente eos voluptates pariatur labore dolorem eligendi
              accusantium, fugit, voluptatem debitis consequuntur magnam sequi
              iure deleniti. Alias quas aperiam nihil architecto non, tempore
              maxime similique natus, libero deleniti nemo aut quae, quam
              recusandae.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className={`${styles.about_bg} text-light`}>
        <Row className="p-5">
          <Col className="px-5 text-center py-4">
            <p className="pl-5 pr-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id
              voluptas assumenda quisquam sunt maiores velit, dolores architecto
              mollitia vel, tempora reprehenderit? Nisi eius error, consectetur
              beatae repellendus cum optio!
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
