import React from "react";
import ProductGet from "../components/ProductGet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousels from "../components/Carousels";
import CardsBlog from "../components/CardsBlog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} className="text-center"></Col>
        </Row>

        <Row>
          <Col sm={12} className="text-center">
            <Carousels />
          </Col>
        </Row>

        <Row>
          <Col sm={12} className="">
            <CardsBlog />
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <ProductGet />
          </Col>
        </Row>
        <Row>
          <Col sm={12}></Col>
        </Row>

        <Row>
          <Col sm={12} className="">
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
